
import { ecs } from "db://assets/Framework/libs/ecs/ECS";
import { SkillModelComp } from "./model/SkillModelComp";

/** 技能 */
@ecs.register(`Skill`)
export class Skill extends ecs.Entity {
    // 数据层
    SkillModel!: SkillModelComp;

    protected init() {
        this.addComponents<ecs.Comp>(
            SkillModelComp);
    }
}

export class EcsSkillSystem extends ecs.System {
    constructor() {
        super();
    }
}
