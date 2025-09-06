
import { ecs } from "db://assets/Framework/libs/ecs/ECS";
import { VM } from "db://assets/Framework/libs/model-view/ViewModel";
import { RoleNumeric } from "./attribute/RoleNumeric";
import { RoleNumericMap } from "./attribute/RoleNumericMap";
import { RoleAttributeType } from "./RoleEnum";
import { Tile } from "../../scene/model/TileModel";

/** 
 * 角色属性数据 
 * 
 * 实现功能
 * 1、角色唯一基础数据
 * 2、角色战斗属性数据
 * 3、角色VM组件绑定数据
 * 
 * 技术分析
 * 1、使用ecs.Comp做为数据层的基类，是为了后续业务开发过程中，只要ecs.Entity对象中包含了当前数据组件，就可以通过 ecs.Entity.get(RoleModelComp) 的方式获取对应子模块的数据
 */
@ecs.register('RoleModel')
export class RoleModelComp extends ecs.Comp {
    /** 提供MVVM组件使用的数据 */
    VM: any = {};

    /** ----------基础属性---------- */
    /** 角色编号 */
    id: string = "";
    /** 资源地址 */
    res: string = `game/player/player`;
    /** 角色所在地形数据 */
    tile: Tile = null!;

    private _nickname: string = "";
    /** 昵称 */
    get nickname(): string {
        return this._nickname;
    }
    set nickname(value: string) {
        this._nickname = value;
        this.VM.name = value;
    }
    /** 角色属性 */
    attributes: RoleNumericMap = new RoleNumericMap(this.VM);
    /** 移动速度 */
    speed: number = 60;

    reset() {
        this.id = "";
        this.nickname = "";

        for (var key in this.VM) {
            this.VM[key] = 0;
        }
    }
}
