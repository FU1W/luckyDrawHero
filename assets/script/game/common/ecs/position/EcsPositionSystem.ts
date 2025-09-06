
import { ecs } from "db://assets/Framework/libs/ecs/ECS";
import { MoveToSystem } from "./MoveTo";

export class EcsPositionSystem extends ecs.System {
    constructor() {
        super();
        this.add(new MoveToSystem());
    }
}
