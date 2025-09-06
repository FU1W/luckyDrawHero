import { Component, _decorator } from "cc";
import { Role } from "../../../../../role/Role";
import { EffectDamage } from "../../ISkillReport";
import { EffectRecovery } from "../../ISkillReport";
import { ISkillReportHit } from "../../ISkillReport";

const { ccclass, property } = _decorator;

/** 受击生命提示（防生命提示重叠效果） */
@ccclass('RoleViewHitHpPrompt')
export class RoleViewHitHpPrompt extends Component {
    /** 生命提示动画数据 */
    hpTips: ISkillReportHit[] = [];
    /** 攻击者 */
    caster: Role = null!;

    private onoff: boolean = true;

    update(dt: number) {
        if (this.onoff && this.hpTips.length > 0) {
            var hit = this.hpTips.shift();
            // if (hit.effect instanceof EffectDamage) {
            //     this.damage(hit.target, hit.effect);
            //     if (hit.effect.hasShield > 0) {
            //         hit.target.entity.RoleView.setShield(hit.target.entity.RoleModel.shield);
            //         hit.target.entity.RoleView.updateHp();
            //     } else if (hit.effect.hasShield == 0) {
            //         hit.target.entity.RoleView.updateHp(hit.effect.value);
            //     } else {
            //         hit.target.entity.RoleView.updateHp(hit.effect.hasShield);
            //     }
            // }
            // else if (hit.effect instanceof EffectRecovery) {
            //     this.recovery(hit.target, hit.effect);
            //     hit.target.entity.RoleView.updateHp(hit.effect.value);
            //     hit.target.entity.RoleView.setShield(hit.target.entity.RoleModel.shield);
            // }

            // this.onoff = false;
            // setTimeout(() => {
            //     this.onoff = true;
            // }, 400);
        }
    }

    /** 恢复数值提示动画 */
    private recovery(target: Role, effectr: EffectRecovery) {
        // var target_rv = target.entity.RoleView;
        // let hpResName = "game/battle/prompt/recovery";
        // var effect = ViewUtil.createPrefabNode("game/battle/skill/effect_receive");
        // var efrs = effect.addComponent(EffectFinishedReleaseSpine);
        // efrs.setResPath(`content/skill_effect/RecoverySkills`);
        // let node = find("content/effect_top", target_rv.node);
        // effect.parent = node;
        // effect.setPosition(0, 0);

        // // 提示数值显示对象
        // var hpTips = SingleCaseEffect.instance.show(hpResName, target_rv.node, v3(0, 160));
        // var hpTips_anim = hpTips.getChildByName("animator").getComponent(EffectFinishedRelease);
        // var lab_damage = hpTips_anim.node.getChildByName("lab_damage").getComponent(CommonLabel);
        // var lab_prompt = hpTips_anim.node.getChildByName("lab_prompt").getComponent(CommonLabel);
        // hpTips_anim.resName = hpResName;
        // // 伤害或回血显示
        // effectr.value = Math.floor(effectr.value)
        // lab_damage.string = `${effectr.value.toString()}`;
        // engine.audio.playEffect("audios/fight/addhp");
    }

    /** 伤害数值提示动画 */
    private damage(target: Role, effect: EffectDamage) {
       
    }
}