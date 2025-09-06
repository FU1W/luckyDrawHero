
import { GameEvent } from "db://assets/script/game/common/config/GameEvent";
import { Logger } from "../../core/common/log/Logger";
import { oops } from "../../core/Oops";
import { INetworkTips } from "../../libs/network/NetInterface";
import { netChannel } from "./NetChannelManager";
import { tips } from "./TipsManager";

/** 游戏服务器提示 */
export class NetGameTips implements INetworkTips {
    /** 连接提示 */
    async connectTips(isShow: boolean) {
        if (isShow) {
            Logger.logNet("游戏服务器正在连接");
            tips.netInstableOpen();
        }
        else {
            Logger.logNet("游戏服务器连接成功");
            tips.netInstableClose();
            oops.message.emit(GameEvent.GameServerConnected);
            // var ulq = new proto.ReqUserLogin();
            // ulq.uname = "fran";
            // ulq.upwd = '1';
            // var ret1 = await netChannel.game.req<proto.ReqUserLogin>(Cmd.eUserLoginReq, Module.AUTH,"ReqUserLogin", "ResUserLogin", ulq);
            // if (ret1.isSucc) {
            //     console.log(`收到服务器【${Cmd.eUserLoginReq}】协议返回数据`, ret1.res);          // 处理正常逻辑
            // }
            // else {
            //    console.log(`收到服务器【${Cmd.eUserLoginReq}】协议返回错误码`, ret1.err);        // 服务器错误码客户端出对应的提示
            // }
            // // 连接成功后向服务器发数据
            
           
        }
    }

    /** 重连接提示 */
    reconnectTips(): void {
        console.log("重连接提示");
    }

    /** 请求提示 */
    requestTips(isShow: boolean): void {
        if (isShow) {
            console.log("有请求处理中");
        }
        else {
            console.log("所有请求结束");
        }
    }

    disconnectTips(isShow: boolean): void {
        console.log("断网", isShow);
    }
}