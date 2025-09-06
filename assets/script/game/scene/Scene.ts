import { oops } from "db://assets/Framework/core/Oops";

import { ecs } from "db://assets/Framework/libs/ecs/ECS";
import { smc } from "../common/ecs/SingletonModuleComp";
import { UICallbacks } from "db://assets/Framework/core/gui/layer/Defines";
import { UIID } from "../common/config/GameUIConfig";
import { Node } from "cc";
/** 游戏地图 */
@ecs.register(`Scene`)
export class Scene extends ecs.Entity {
    // 数据层


    // 业务层


    // 视图层




    protected init(): void {

    }


    /** 地图资源加载 */
    load() {

    }
}

export class EcsSceneSystem extends ecs.System {
    constructor() {
        super();

    }
}
