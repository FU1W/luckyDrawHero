
import { Timer } from "db://assets/Framework/core/common/timer/Timer";
import { BattleReport } from "../../common/bll/BattleReport";
import { BuffRemove } from "../../common/bll/buff/BuffRemove";
import { Buff } from "../Buff";
import { ecs } from "db://assets/Framework/libs/ecs/ECS";

/** BUFF间隔触发器 */
@ecs.register('BuffInterval')
export class BuffIntervalComp extends ecs.Comp {
    _timerInterval: Timer = new Timer();
    _timerDuration: Timer = new Timer();

    /** 技能间隔触发时间 */
    set interval(value: number) {
        this._timerInterval.step = value / 1000;
        this._timerInterval.reset();
    }

    /** 技能持续时间 */
    set duration(value: number) {
        this._timerDuration.step = value / 1000;
        this._timerDuration.reset();
    }

    reset(): void {
        this._timerInterval.reset();
        this._timerDuration.reset();
    }
}

export class BuffIntervalSystem extends ecs.ComblockSystem implements ecs.ISystemUpdate {
    filter(): ecs.IMatcher {
        return ecs.allOf(BuffIntervalComp);
    }

    update(e: Buff): void {
        var bm = e.BuffModel;
        var bi = e.get(BuffIntervalComp);
        if (bi._timerInterval.update(this.dt)) {
            // 固定间隔时间触发BUFF效果
            bm.casting.onInterval();

            // 播放BUFF动画
            if (bm.casting.hits.length) {
                bm.animator.bc = bm.casting;
                bm.animator.casting();
            }
        }

        if (bi._timerDuration.update(this.dt)) {
            // 持续时间到时移除BUFF
            var effect = BuffRemove.buff(e);
            BattleReport.buff(bm.casting.hits, bm.casting.target, effect);

            // 播放BUFF动画
            if (bm.casting.hits.length) {
                bm.animator.bc = bm.casting;
                bm.animator.casting();
            }

            e.remove(BuffIntervalComp);
        }
    }
}

