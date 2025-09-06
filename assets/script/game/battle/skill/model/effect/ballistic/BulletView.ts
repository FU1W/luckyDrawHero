import { Component, Node, Quat, Vec3, _decorator } from "cc";
import { MoveTo } from "db://assets/Framework/libs/animator-move/MoveTo";

const { ccclass, property } = _decorator;

/** 子弹显示组件 */
@ccclass('BulletView')
export class BulletView extends Component {
    private content: Node = null!;
    private from!: Vec3;
    private to!: Node;


    fire(from: Vec3, to: Node, speed: number, onComplete: Function, offsetPos: Vec3, isQuat: boolean = true) {
        this.content = this.node;
        this.content.setRotationFromEuler(new Vec3(0, 0, 0));
        this.node.setPosition(from);
        this.from = from;
        this.to = to;

        var velocity = Vec3.subtract(new Vec3(), to.position, from);
        velocity.z = 0;

        // 计算面向
        if (isQuat) {
            var quat = new Quat();
            Quat.fromViewUp(quat, velocity, Vec3.FORWARD);
            var ea: Vec3 = new Vec3();
            quat.getEulerAngles(ea);
            this.content.setRotationFromEuler(ea);
        }

        var moveTo = this.addComponent(MoveTo)!;
        moveTo.speed = speed;
        moveTo.offsetVector = offsetPos;
        moveTo.target = to;
        moveTo.velocity = velocity.normalize();
        moveTo.onComplete = () => {
            this.destroy();
            onComplete();
        };
    }

}