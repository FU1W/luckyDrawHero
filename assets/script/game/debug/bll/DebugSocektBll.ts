import { ecs } from "../../../../Framework/libs/ecs/ECS";
import { Debug } from "../debug";

/** socekt debug,网络接口测试 */
@ecs.register('Debug')
export class DebugSocektBll extends ecs.Comp {
        reset() { }
}

export class DebugSocektBllSystem extends ecs.ComblockSystem implements ecs.IEntityEnterSystem {
    filter(): ecs.IMatcher {
        return ecs.allOf(DebugSocektBll);
    }
    entityEnter(e: Debug) {
        
    }

}