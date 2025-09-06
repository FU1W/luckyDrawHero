
import { ecs } from "db://assets/Framework/libs/ecs/ECS";
import { Role } from "../../role/Role";

/** 
 * 游戏帐号数据 
 */
@ecs.register('AccountModel')
export class AccountModelComp extends ecs.Comp {
    /** 资源列表 */
    currency: any = {};
    /** 角色对象 */
    role: Role = null!;

    roles:Map<number,Role> = new Map();

    uid: number = 0;
    subid: string = '';
    /** 地图类型 */
    mapType: string = "map45";


    reset() {

    }
}