import { WECHAT } from "cc/env";
import { oops } from "db://assets/Framework/core/Oops";
import { ecs } from "db://assets/Framework/libs/ecs/ECS";
import { smc } from "../../common/ecs/SingletonModuleComp";
import { netConfig } from "db://assets/Framework/net/custom/NetConfig";
import { Account } from "../Account";
import { GameEvent } from "../../common/config/GameEvent";
import { Role } from "../../role/Role";
import { v3 } from "cc";
import { JsonUtil } from "db://assets/Framework/core/utils/JsonUtil";
import { TableRoleJob } from "../../common/table/TableRoleJob";
import { getDeviceId, httpRequest, setToken, validateRegisterData } from "../../utils/HttpUtils";

/** 初始化游戏帐号 */
@ecs.register('LoginBll')
export class LoginBllComp extends ecs.Comp {
    reset() {
    }
}

export class LoginBllSystem extends ecs.ComblockSystem implements ecs.IEntityEnterSystem {
    private openId: string = null!;

    filter(): ecs.IMatcher {
        return ecs.allOf(LoginBllComp);
    }

    async entityEnter(e: Account) {
        if (WECHAT) {
            var code: any = await this.wxLogin();
        } else {
            var code = this.GetCodeId();
        }
        console.log('当前code: ', code);
        //this.login(e, code); //连接服务器
        oops.message.emit(GameEvent.GameServerConnected);
       
    }

    /**
     * 获取codeId
     */
    private GetCodeId() {
        let IId = oops.storage.get("codeId");
        if (!IId) {
            IId = `1${oops.random.GetRandomNumber(15)}`;
            oops.storage.set("codeId", IId);
        }
        return oops.config.query.data.id || IId;
    }

    private wxLogin() {
        return new Promise((resolve, reject) => {
            wx.login({
                success(res: any) {
                    if (res.code) {
                        resolve(res.code);
                    }
                    else {
                    }
                }
            });
        });
    }


    private async login(e: Account, code: string) {
        var name = netConfig.httpServer + '/api/login/login_api_auth';
        console.log('url: ', name);
        if (WECHAT) {
            var platform = "wechat";
        } else {
            var platform = "h5";
        }
        var param = {
            module: "login",
            method: "code2Session",
            parms: {
                code: code,
                protocol: "ws",
                platform: platform,
                gameId: 1,
            },
            server_ca: 'api_loginserver_ca',

        }
        var complete = function (response: any) {
            var res = response.res;
            if (res.errcode) {
                oops.gui.toast(res.errmsg);
            } else {
                netConfig.gameIp = res.data.gate;
                netConfig.gamePort = res.data.port;
                smc.account.AccountModel.uid = res.data.uid;
                smc.account.AccountModel.subid = res.data.subid;
                e.connect();
            }
        }
        oops.http.post(name, complete, param);
        e.remove(LoginBllComp);
    }

    /** 设置本地存储的用户标识 */
    private setLocalStorage(uid: string) {
        oops.storage.setUser(uid);
        oops.storage.set("account", uid);
    }
}
