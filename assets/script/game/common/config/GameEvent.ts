

/** 游戏事件 */
export enum GameEvent {
    LoadingOver = "LoadingOver",
    /** 游戏服务器连接成功 */
    GameServerConnected = "GameServerConnected",
    /** 登陆成功 */
    LoginSuccess = "LoginSuccess",
    /** 重新登陆 */
    LoginExpired = "LoginExpired"
}