import { ecs } from "db://assets/Framework/libs/ecs/ECS";
import { Account } from "../../account/Account";
import { Initialize } from "../../initialize/Initialize";
import { Role } from "../../role/Role";
import { Debug } from "../../debug/debug";
import { Scene } from "../../scene/Scene";

/** 游戏模块 */
@ecs.register('SingletonModule')
export class SingletonModuleComp extends ecs.Comp {
    /** 游戏初始化模块 */
    initialize: Initialize = null!;
    debug: Debug = null!;
    account: Account = null!;
    /** 场景模块 */
    scene: Scene = null!;
    /** 游戏角色模块 */
    /** 游戏账号模块 */
    /** 玩家 */
    own: Role = null!;

    reset() { }
}

export var smc: SingletonModuleComp = ecs.getSingleton(SingletonModuleComp);