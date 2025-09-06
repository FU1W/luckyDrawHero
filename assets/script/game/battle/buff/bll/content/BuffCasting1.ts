import { RoleAttack } from "../../../common/bll/attribute/RoleAttack";
import { BattleReport } from "../../../common/bll/BattleReport";
import { BuffCasting } from "../BuffCasting";

/** 流血BUFF效果 */
export class BuffCasting1 extends BuffCasting {
    onInterval(): void {
        var effect = RoleAttack.buff(this.buff, this.target, -10);
        BattleReport.buff(this.hits, this.target, effect);
    }
}