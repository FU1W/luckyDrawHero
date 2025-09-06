import { AnimatorStateLogic } from "db://assets/Framework/libs/animator/core/AnimatorStateLogic";
import { Role } from "../../Role";
import { AnimationEventHandler } from "./AnimationEventHandler";

/** 做任务状态逻辑 */
export class RoleStateAttack extends AnimatorStateLogic {
    private role: Role;
    private anim: AnimationEventHandler;

    public constructor(role: Role, anim: AnimationEventHandler) {
        super();
        this.role = role;
        this.anim = anim;
        this.anim.addFrameEvent("onDoTask", this.onDoTask, this);
      
    }

    private onDoTask() {
       
        var onDoTask = this.role.RoleView.animator.DoTask;
        onDoTask && onDoTask();
    }



    public onEntry() {

    }

    public onUpdate() {

    }

    public onExit() {
        var onAttackComplete = this.role.RoleView.animator.onDoTaskComplete;
        onAttackComplete && onAttackComplete();
    }
}

