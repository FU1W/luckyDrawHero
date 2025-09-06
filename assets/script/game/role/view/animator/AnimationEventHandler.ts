import AnimatorBase, { AnimationPlayer } from "db://assets/Framework/libs/animator/core/AnimatorBase";
class FrameEventData {
    public callback!: Function;
    public target: any;
}

/** 模型动作自定义事件逻辑 */
export class AnimationEventHandler implements AnimationPlayer {
    private frameEvents: Map<string, FrameEventData> = new Map();
    private finishedEvents: Map<string, FrameEventData> = new Map();
    private startEvents: Map<string, FrameEventData> = new Map();

    /** 监听动画事件 */
    public addFrameEvent(type: string, callback: Function, target: any) {
        var data = new FrameEventData();
        data.callback = callback;
        data.target = target;
        this.frameEvents.set(type, data);
    }

    /** 设置动画帧事件的回调 */
    public onFrameEventCallback(type: string, target: AnimatorBase): void {
        var data = this.frameEvents.get(type);
        if (data)
            data.callback.call(data.target, type, target);
    }

    /** 监听动画结束事件 */
    public addFinishedEvent(type: string, callback: Function, target: any) {
        var data = new FrameEventData();
        data.callback = callback;
        data.target = target;
        this.finishedEvents.set(type, data);
    }

    /** 设置动画播放结束的回调 */
    public onFinishedCallback(target: AnimatorBase): void {
        var data = this.finishedEvents.get(target.curStateName);
        if (data)
            data.callback.call(data.target, target.curStateName, target);
    }

    /** 监听动画开始事件 */
    public addStartCallback(event: string, callback: Function, target: any): void {
        var data = new FrameEventData();
        data.callback = callback;
        data.target = target;
        this.startEvents.set(event, data);
    }

    /** 设置动画播放开始的回调 */
    public onStartEventCallback(type: string, target: AnimatorBase): void {
        var data = this.startEvents.get(type);
        if (data)
            data.callback.call(data.target, type, target);
    }

    /** 播放动画 */
    public playAnimation(animName: string, loop: boolean): void {

    }

    /** 缩放动画播放速率 */
    public scaleTime(scale: number): void {

    }
}
