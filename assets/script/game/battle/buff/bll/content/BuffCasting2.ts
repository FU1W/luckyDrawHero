import { RoleAttack } from "../../../common/bll/attribute/RoleAttack";
import { BattleBridge } from "../../../common/bll/BattleBridge";
import { BattleReport } from "../../../common/bll/BattleReport";
import { BuffCasting } from "../BuffCasting";

/** 腐蚀光环BUFF效果 */
export class BuffCasting2 extends BuffCasting {
    onInterval(): void {
        for (let i = 0; i < BattleBridge.roles.array.length; i++) {
            var target = BattleBridge.roles.array[i];
            if (target != this.caster && !target.die) {
                var effect = RoleAttack.buff(this.buff, target, -100);
                BattleReport.buff(this.hits, target, effect);
            }
        }
    }
}