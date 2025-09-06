import { Collection } from "db://assets/Framework/libs/collection/Collection";
import { Role } from "../../../role/Role";

/** 技能计算桥接器 */
export class BattleBridge {
    /** 是否为服务端 */
    static server: boolean = false;
    /** 玩家自己 */
    static owner: Role = null!;
    /** 房间所有玩家 */
    static roles: Collection<string, Role> = null!;
}