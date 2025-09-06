import { JsonUtil } from "db://assets/Framework/core/utils/JsonUtil";
import { ViewUtil } from "db://assets/Framework/core/utils/ViewUtil";
import { ecs } from "db://assets/Framework/libs/ecs/ECS";
import { smc } from "../common/ecs/SingletonModuleComp";
import { TableBuild } from "../common/table/TableBuild";
import { BuildModelComp } from "./model/BuildModelComp";
import { BuildViewComp } from "./view/BuildViewComp";

/** Build 模块 */
@ecs.register(`Build`)
export class Build extends ecs.Entity {
    BuildModel!: BuildModelComp;
    BuildView!: BuildViewComp;

    /** 实始添加的数据层组件 */
    protected init() {
        this.addComponents<ecs.Comp>(BuildModelComp);
    }

    load(id: number) {
        this.BuildModel.id = id;
        var node = ViewUtil.createPrefabNode("game/scene/build");
        var comp = node.getComponent(BuildViewComp)!;
        this.add(comp);
        node.parent = smc.scene.MapModel.game.node;
    }

    /** 模块资源释放 */
    destroy() {
        this.remove(BuildViewComp);
        super.destroy();
    }
}

/** Build 模块业务逻辑系统组件，如无业务逻辑处理可删除此对象 */
export class EcsBuildSystem extends ecs.System {
    constructor() {
        super();

        this.loadTable();
    }

    async loadTable() {
        await JsonUtil.loadAsync(TableBuild.TableName);
    }
}
