import { Role } from "../../../../role/Role";
import { RoleAttack } from "../../../common/bll/attribute/RoleAttack";
import { BattleReport } from "../../../common/bll/BattleReport";
import { SkillCasting } from "../SkillCasting";

/** 普通攻击 */
export class SkillCasting1 extends SkillCasting {
    onCasting(): void {
        if (this.target instanceof Role) {
            // 技能施放战报
            var sr = BattleReport.casting(this, this.target);

            // 攻击数值计算
            var effect = RoleAttack.normal(this.caster, this.target);

            // 技能受击战报
            BattleReport.skill(sr, this.target, effect);
        }
    }
}