import { ecs } from "db://assets/Framework/libs/ecs/ECS";
import { TableBuild } from "../../common/table/TableBuild";
import { Tile } from "../../scene/model/TileModel";

/** 数据层对象 */
@ecs.register('BuildModel')
export class BuildModelComp extends ecs.Comp {
    /** 技能编号 */
    public get id(): number {
        return this.table.id;
    }
    public set id(value: number) {
        if (this.table == null)
            this.table = new TableBuild();
        this.table.init(value);
    }

    /** 静态配置数据 */
    table!: TableBuild;

    /** 锚点网格 */
    tile!: Tile;

    /** 数据层组件移除时，重置所有数据为默认值 */
    reset() {
        this.tile = null!;
    }
}