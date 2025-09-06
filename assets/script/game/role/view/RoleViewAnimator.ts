/*
 * @Author: dgflash
 * @Date: 2022-03-22 17:53:34
 * @LastEditors: dgflash
 * @LastEditTime: 2022-09-07 15:51:31
 */
import { Component, macro, Node, Quat, Vec3, _decorator } from "cc";
import { RoleAnimatorType } from "../model/RoleEnum";
import AnimatorSpine from "db://assets/Framework/libs/animator/AnimatorSpine";
import { AnimationEventHandler } from "./animator/AnimationEventHandler";
import { AnimatorStateLogic } from "db://assets/Framework/libs/animator/core/AnimatorStateLogic";
import { RoleStateAttack } from "./animator/RoleStateDoTask";
import { Role } from "../Role";

const { ccclass, property } = _decorator;

/** 
 * 角色动画接口 
 * 注：修改指定动画剪辑播放速度时，要修改状态机中的配置，否则动画组件的配置中的速度会覆盖动态设置的值
 */
export class RoleViewAnimator extends AnimatorSpine {
    /** 触发做任务事件 */
    onDoTaskEvent: Function = null!;
    /** 触发开始左任务动作 */
    onStartDoTask: Function = null!;
    /** 触发任务完成 */
    onDoTaskComplete: Function = null!;
    /** 触发技能动作完成 */
    onSkillComplete: Function = null!;
    /** 触发攻击动作结束 */
    onAttackEnd: Function = null!;


    /** 角色对象 */
    role: Role = null!;

    start() {
        super.start();

        // 动画状态机
        let anim = new AnimationEventHandler();
        let asl: Map<string, AnimatorStateLogic> = new Map();
        asl.set(RoleAnimatorType.DoTask, new RoleStateAttack(this.role, anim));


        this.initArgs(asl, anim);
    }


    /**
     * 是否不可移动
     * @returns true 为不可移动
     */
    get isNoMove(): boolean { return false; }
    set isNoMove(value: boolean) { }

    /** 待机动作 */
    idle() {
        this.setTrigger(RoleAnimatorType.Idle);
    };

    /** 跑动动作 */
    run(type?: number) {

    };

    /** 做任务事件 */
    DoTask(type?: number) {

    };



    /** 面象朝左 */
    left() {
        this.node.parent!.setScale(1, 1, 1);
    }

    /** 面象朝右 */
    right() {
        this.node.parent!.setScale(-1, 1, 1);
    }

    /** 模型朝向目标方向 */
    lootAt(target: Vec3) {
        var x = this.node.position.x - target.x;
        var z = this.node.position.z - target.z;
        var y = (Math.atan2(x, z) * macro.DEG) % 360;
        this.node.setRotationFromEuler(0, y + 180, 0);
    }

    /** 旋转到指定角度 */
    rotation(val: Vec3 | Quat | number) {
        if (val instanceof Vec3) {
            this.node.eulerAngles = val;
        }
        else if (val instanceof Quat) {
            this.node.setRotation(val);
        }
        else {
            this.node.setRotationFromEuler(0, val - 90, 0);
        }
    }
}
