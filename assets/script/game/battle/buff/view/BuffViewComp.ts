import { _decorator } from "cc";

import { ecs } from "db://assets/Framework/libs/ecs/ECS";
import { CCComp } from "db://assets/Framework/module/common/CCComp";
import { EffectSingleCase } from "db://assets/Framework/libs/animator-effect/EffectSingleCase";

const { ccclass, property } = _decorator;

/** BUFF持续特效显示对象 */
@ccclass('BuffViewComp')
@ecs.register('BuffView', false)
export class BuffViewComp extends CCComp {
    reset() {
        EffectSingleCase.instance.put(this.node);
    }
}