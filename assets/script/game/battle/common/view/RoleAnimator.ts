import { oops } from "db://assets/Framework/core/Oops";
import { smc } from "../../../common/ecs/SingletonModuleComp";
import { Role } from "../../../role/Role";
import { Effect, EffectDamage, StateType } from "../../skill/model/ISkillReport";

/** 角色动画 */
export class RoleAnimator {
    /**
     * 角色死亡动作
     * @param target  目标角色
     * @param effect  伤害效果
     */
    // static die(target: Role, effect: Effect) {
    //     if (effect instanceof EffectDamage && effect.state == StateType.Die) {
    //         var time = 3;
    //         var id = setInterval(() => {
    //             time--;
    //             if (time == 0) {
    //                 clearInterval(id);
    //                 target.RoleView.revive();
    //             }
    //         }, 1000);

    //         target.RoleView.die();
    //     }
    // }
}