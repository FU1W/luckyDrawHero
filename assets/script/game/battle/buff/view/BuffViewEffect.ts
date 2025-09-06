
import { ecs } from "db://assets/Framework/libs/ecs/ECS";
import { RoleEffect } from "../../common/view/RoleEffect";
import { ISkillReportHit } from "../../skill/model/ISkillReport";
import { Buff } from "../Buff";
import { BuffViewComp } from "./BuffViewComp";

/** 加载BUFF在目标身上的持续特效 - 防同类特效重复加载 */
@ecs.register('BuffViewEffect')
export class BuffViewEffectComp extends ecs.Comp {
    hit!: ISkillReportHit;

    reset(): void {
        this.hit = null!;
    }
}

export class BuffViewEffectSystem extends ecs.ComblockSystem implements ecs.IEntityEnterSystem {
    filter(): ecs.IMatcher {
        return ecs.allOf(BuffViewEffectComp);
    }

    entityEnter(e: Buff): void {
        let bve = e.get(BuffViewEffectComp);
        let skill = e.BuffModel.casting.skill;
        if (skill.SkillModel.table.hit) {
            // BUFF在目标身上的持续特效
            RoleEffect.skill(skill, bve.hit, false).then(node => {
                let comp = node.getComponent(BuffViewComp) || node.addComponent(BuffViewComp);
                e.add(comp);
            });
        }
    }
}

