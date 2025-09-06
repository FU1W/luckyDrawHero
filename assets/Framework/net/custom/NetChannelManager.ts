
import { NetManager } from "../../libs/network/NetManager";
import { netConfig, NetConfig } from "./NetConfig";
import { NetNodeGame } from "./NetNodeGame";

export enum NetChannelType {
    /** 游戏服务器 */
    Game = 0,
}

export class NetChannelManager {
    public game!: NetNodeGame;

    /** 创建游戏服务器 */
    gameCreate() {
        this.game = new NetNodeGame();
        this.game.init();
        NetManager.getInstance().setNetNode(this.game, NetChannelType.Game);
    }

    /** 连接游戏服务器 */
    gameConnect() {
        NetManager.getInstance().connect({
            url: `ws://${netConfig.gameIp}:${netConfig.gamePort}/ws`,
            autoReconnect: -1        // 重连接设置
        }, NetChannelType.Game);
    }

    /** 断开游戏服务器 */
    gameClose() {
        NetManager.getInstance().close(undefined, undefined, NetChannelType.Game);
    }
}

export var netChannel = new NetChannelManager();