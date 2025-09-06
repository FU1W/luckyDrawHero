import { Node, tween, Vec3 } from "cc";
import { oops } from "../../core/Oops";
import { UIID } from "db://assets/script/game/common/config/GameUIConfig";

/** 提示窗口管理 */
class TipsManager {
    private _timeId = ""

    /** 网络恢复 */
    networkRecovery() {
        if (this._timeId) {
            oops.timer.unschedule(this.netInstableOpen);
            this._timeId = "";
        }
        oops.gui.remove(UIID.Netinstable);
    }
    /** 打开网络不稳定提示 */
    netInstableOpen() {
        if (!oops.gui.has(UIID.Netinstable)) {
            oops.gui.open(UIID.Netinstable);
        }
    }
    netInstableClose() {
        //防止在页面没加载出来关闭，延迟1秒关闭
        setTimeout(() => {
            oops.gui.remove(UIID.Netinstable);
        }, 1000);
    }
    /** 网络延时 */
    networkLatency(time: number) {
        if (this._timeId) {
            oops.timer.unschedule(this._timeId);
        }
        oops.timer.scheduleOnce(this.netInstableOpen, time);
    }

    // /** 网络请求屏蔽层打开 */
    // netLoadingOpen() {
    //     if (!oops.gui.has(UIID.Netloading)) {
    //         oops.gui.open(UIID.Netloading);
    //     }
    // }
    // /** 网络请求屏蔽层关闭 */
    // netLoadingClose() {
    //     oops.gui.remove(UIID.Netloading, false);
    // }

    


}

export var tips = new TipsManager();