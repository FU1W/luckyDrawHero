
import { Component, Node, Vec3 } from "cc";
import { RoleAttributeType } from "../model/RoleEnum";
import { Role } from "../Role";


import { RoleViewAnimator } from "./RoleViewAnimator";
import RoleViewMove from "./charactor/RoleViewMove";


/** 
 * 角色行为控制器，管理角色动画与行为
 * 1、角色触摸屏幕移动与动画控制
 * 2、角色摇杆方式移动与动画控制
 * 3、角色攻击动画控制
 */
export class RoleViewCharactor extends Component {
    /** 角色动画组件 */
    rva: RoleViewAnimator = null!;
    /** 角色触摸屏幕控制 */
    rvm: RoleViewMove = null!;


    onLoad() {
        //this.rva = this.getComponent(RoleViewAnimator)!;
        this.rvm = this.addComponent(RoleViewMove)!;
    }

    /** 待机动画 */
    idle() {
        // this.rvTouch.stop();
      
    }

    /** 做任务动画 */
    doTask(type?: number) {
        // 攻击前先待机
        this.idle();
        // 播放攻击动画
        this.rva.DoTask(type);
    }

    /**
     * 触摸移动
     * @param target    目标位置
     * @param offset    偏移值
     * @param callback  移动完成回调
     */
    moveTouch(role: Role, target: Vec3 | Node, offset: number = 0, callback?: Function) {
        // var speed = role.RoleModel.attributes.get(RoleAttributeType.spd).value;
        // this.rvTouch.move(target, speed, offset, callback);
    }

  
}
