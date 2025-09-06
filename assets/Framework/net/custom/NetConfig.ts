

/** 网络配置 */
export class NetConfig {
    public gameIp: string = "127.0.0.1";     // "172.16.16.185"
    public gamePort: string = "6082";
    public gmServer: string = "http://127.0.0.1:6082";
    public httpServer: string = "http://127.0.0.1:3001";
    public loginIp: string = "127.0.0.1";     // "172.16.16.185"
    public loginPort: string = "3001";
}
export var netConfig = new NetConfig();