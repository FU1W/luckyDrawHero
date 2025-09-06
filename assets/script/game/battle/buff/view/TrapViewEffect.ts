import { ecs } from "db://assets/Framework/libs/ecs/ECS"; import { RoleEffect } from "../../common/view/RoleEffect";
import { EffectTrap, ISkillReportHit } from "../../skill/model/ISkillReport";
import { Buff } from "../Buff";
import { BuffViewComp } from "./BuffViewComp";

/** 加载陷阱技能特效 */
@ecs.register('TrapViewEffect')
export class TrapViewEffectComp extends ecs.Comp {
    hit!: ISkillReportHit;

    reset(): void {
        this.hit = null!;
    }
}

export class TrapViewEffecSystem extends ecs.ComblockSystem implements ecs.IEntityEnterSystem {
    filter(): ecs.IMatcher {
        return ecs.allOf(TrapViewEffectComp);
    }

    entityEnter(e: Buff): void {
        let comp = e.get(TrapViewEffectComp);
        let skill = e.BuffModel.casting.skill;
        if (skill.SkillModel.table.hit) {
            // 陷阱在地图上的特效
            var pos = (comp.hit.effect as EffectTrap).target;
            RoleEffect.effect(skill.SkillModel.hitRes, pos).then(node => {
                let comp = node.getComponent(BuffViewComp) || node.addComponent(BuffViewComp);
                e.add(comp);
            });
        }
    }
}

