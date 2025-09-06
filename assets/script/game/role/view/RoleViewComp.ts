import { Node, Quat, Vec3, _decorator } from "cc";
import { oops } from "db://assets/Framework/core/Oops";
import { ecs } from "db://assets/Framework/libs/ecs/ECS";
import { CCComp } from "db://assets/Framework/module/common/CCComp";
import { Role } from "../Role";
import { RoleViewCharactor } from "./RoleViewCharactor";
import { RoleViewAnimator } from "./RoleViewAnimator";

const { ccclass, property } = _decorator;

/** 角色显示组件 */
@ccclass('RoleViewComp')
@ecs.register('RoleView', false)
export class RoleViewComp extends CCComp {
    /** 受击生命提示 */
    //hpPrompt: RoleViewHitHpPrompt = null!;

    /** 施放技能事件 */
    onAttack: Function = null!;
    /** 受到攻击事件 */
    onHit: Function = null!;

    /** 角色动画控制器 */
    animator: RoleViewAnimator = null!;


    /** 角色行为控制器 */
    rvc: RoleViewCharactor = null!;

    /** 是否不可移动 */
    get isNoMove(): boolean {
        return this.rvc.rva.isNoMove;
    }
    set isNoMove(value: boolean) {
        this.rvc.rva.isNoMove = value;
    }


    onLoad() {
        this.rvc = this.addComponent(RoleViewCharactor)!;
        //this.hpPrompt = this.addComponent(RoleViewHitHpPrompt);
    }

    /** 待机动画 */
    idle() {
        this.rvc.idle();
    }

    /** 跑步动作 */
    run() {
        this.rvc.rva.run();

    }
    /** 攻击动画 */
    attack(type?: number) {

        this.rvc.doTask(type);

    }


    /**
     * 触摸移动
     * @param target    目标位置
     * @param offset    偏移值
     * @param callback  移动完成回调
     */
    moveTouch(target: Vec3 | Node, offset: number = 0, callback?: Function) {
        this.rvc.moveTouch(this.ent as Role, target, offset, callback);
    }

    /** 模型朝向目标方向 */
    lootAt(target: Vec3) {
        this.rvc.rva.lootAt(target);
    }
    /** 旋转到指定角度 */
    rotation(val: Vec3 | Quat | number) {
        this.rvc.rva.rotation(val);
    }

    reset() {
        this.node.destroy();
    }
}