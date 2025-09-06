import { Component, Vec3, _decorator } from 'cc';
import RoadNode from '../../../scene/bll/road/RoadNode';

const { ccclass, property } = _decorator;

export enum CharactorDirection {
    none = -1,
    bottom = 0,
    left_bottom = 1,
    left = 2,
    left_up = 3,
    up = 4,
    right_up = 5,
    right = 6,
    right_bottom = 7
}

/**
 * 场景角色 
 */
@ccclass('RoleViewMove')
export default class RoleViewMove extends Component {
    /** 优化后的路点移动 */
    static WalkRoadNode: string = "WalkRoadNode";
    /** 移动到新的一个格子路点 */
    static NextRoadNode: string = "NextRoadNode";

    private _direction: CharactorDirection = CharactorDirection.bottom;
    get direction(): CharactorDirection {
        return this._direction;
    }
    set direction(value: CharactorDirection) {
        this._direction = value;
    }

    private _zIndex: number = 0;
    /** 深度排序 */
    get zIndex(): number {
        return this._zIndex;
    }

    private _pos!: Vec3;
    /** 玩家地图上的位置 */
    get pos(): Vec3 {
        return this._pos;
    }
    set pos(value: Vec3) {
        this._pos = value;
        this.node.position = value;
    }

    moving: boolean = false;
    moveSpeed: number = 200;

    private _moveAngle: number = 0;
    private _roadNodeArr: RoadNode[] = [];
    private _nodeIndex: number = 0;

    start() {
        this.direction = CharactorDirection.bottom;
    }

    update(dt: number) {
        if (this.moving) {
            var nextNode: RoadNode = this._roadNodeArr[this._nodeIndex];

            var dx: number = nextNode.px - this._pos.x;
            var dy: number = nextNode.py - this._pos.y;
            var speed: number = this.moveSpeed * dt;

            if (dx * dx + dy * dy > speed * speed) {
                if (this._moveAngle == 0) {
                    this._moveAngle = Math.atan2(dy, dx);

                    var dire: number = Math.round((-this._moveAngle + Math.PI) / (Math.PI / 4));
                    this.direction = dire > 5 ? dire - 6 : dire + 2;
                }

                var xspeed: number = Math.cos(this._moveAngle) * speed;
                var yspeed: number = Math.sin(this._moveAngle) * speed;

                this._pos.x += xspeed;
                this._pos.y += yspeed;
            }
            else {
                this._moveAngle = 0;
                if (this._nodeIndex == this._roadNodeArr.length - 1) {
                    this._pos.x = nextNode.px;
                    this._pos.y = nextNode.py;
                    this.stop();
                }
                else {
                    this.walk();
                }
            }

            this.pos = this._pos;
        }
    }

    /**
     * 根据路节点路径行走
     * @param roadNodeArr 
     */
    walkByRoad(roadNodeArr: RoadNode[]) {
        this._roadNodeArr = roadNodeArr;
        this._nodeIndex = 0;
        this._moveAngle = 0;

        this.walk();
        this.move();
    }

    private walk() {
        if (this._nodeIndex < this._roadNodeArr.length - 1) {
            this._nodeIndex++;

            // 移动一个路点事件
            this.node.emit(RoleViewMove.WalkRoadNode, this._roadNodeArr[this._nodeIndex]);
        }
    }

    move() {
        this.moving = true;
    }

    stop() {
        this.moving = false;
    }
}
