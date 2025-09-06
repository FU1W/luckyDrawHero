import { oops } from "db://assets/Framework/core/Oops";
import { ecs } from "db://assets/Framework/libs/ecs/ECS";
import { GameEvent } from "../common/config/GameEvent";
import { AccountModelComp } from "./model/AccountModelComp";
import { netChannel } from "db://assets/Framework/net/custom/NetChannelManager";
import { LoginBllComp, LoginBllSystem } from "./bll/LoginBll";
import { smc } from "../common/ecs/SingletonModuleComp";
import { InitAccountComp, InitAccountSystem } from "./bll/InitAccount";

/**
 * 账号模块
 * 1、连接游戏服务器
 * 2、登录玩家帐号，获取玩家信息
 * 3、断线重连接
 */

@ecs.register('Account')
export class Account extends ecs.Entity {
    //数据层
    AccountModel!: AccountModelComp;
    //逻辑层
    LoginBll!: LoginBllComp;
    protected init() {
        oops.message.on(GameEvent.GameServerConnected, this.initAccount, this);
        this.addComponents<ecs.Comp>(AccountModelComp);
        //this.addEvent();
    }

    destroy(): void {
        this.removeEvent();
        super.destroy();
    }



    /** 移除全局消息事件 */
    private removeEvent() {
        oops.message.off(GameEvent.GameServerConnected, this.onHandler, this);
    }

    private onHandler(event: string, args: any) {
        switch (event) {
            case GameEvent.GameServerConnected:
                this.initAccount();
                break;
        }
    }
    login() {
        //this.connect();
        this.add(LoginBllComp);



    }
    initAccount() {
        console.log("初始化账号");

        if (smc.account.has(InitAccountComp)) {
            smc.account.remove(InitAccountComp)
        }
        smc.account.add(InitAccountComp);
    }
    /** 连接游戏服务器 */
    connect() {
        netChannel.gameCreate();
        netChannel.gameConnect();

        // 无网状态下测试代码，有网络时会通过触发网络连接成功事件对接后续流程
        //oops.message.dispatchEvent(GameEvent.GameServerConnected)
    }

}

export class EcsAccountSystem extends ecs.System {
    constructor() {
        super();
        this.add(new InitAccountSystem());
        this.add(new LoginBllSystem());
    }
}
