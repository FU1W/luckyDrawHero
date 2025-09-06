import { Component, Vec3, _decorator, tween } from "cc";
const { ccclass, property } = _decorator;

@ccclass('Shake')
export class Shake extends Component {
    _initial_x = 0
    _initial_y = 0
    _strength_x = 0
    _strength_y = 0
    _duration = 0;
    _start = 0;

    runAction(duration: number, strength_x: number, strength_y: number) {
        this._initial_x = this.node.position.x;
        this._initial_y = this.node.position.y

        this._duration = duration
        this._strength_x = strength_x
        this._strength_y = strength_y

        this._start = 1
        tween(this.node)
            .delay(this._duration)
            .call(() => {
                this._start = 0
                this.node.setPosition(new Vec3(this._initial_x, this._initial_y));
            })
            .start()
    }

    fgRangeRand(min: number, max: number) {
        let rnd = Math.random();
        return rnd * (max - min) + min;
    }

    update(dt: number) {
        if (!this._start) {
            return;
        }
        let randx = this.fgRangeRand(-this._strength_x, this._strength_x);
        let randy = this.fgRangeRand(-this._strength_y, this._strength_y);
        this.node.setPosition(randx + this._initial_x, randy + this._initial_y);
    }
}