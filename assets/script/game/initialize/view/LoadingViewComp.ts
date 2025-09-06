
import { _decorator, sys } from "cc";
import { oops } from "db://assets/Framework/core/Oops";
import { JsonUtil } from "db://assets/Framework/core/utils/JsonUtil";
import { ecs } from "db://assets/Framework/libs/ecs/ECS";
import { CCVMParentComp } from "db://assets/Framework/module/common/CCVMParentComp";
import { GameEvent } from "../../common/config/GameEvent";
import { UIID } from "../../common/config/GameUIConfig";
import { smc } from "../../common/ecs/SingletonModuleComp";
import { LoadCustomTable } from "./LoadCustomTable";
import { DebugBtnViewComp } from "../../debug/view/DebugBtnViewComp";

const { ccclass, property } = _decorator;

/** 游戏资源加载 */
@ccclass('LoadingViewComp')
@ecs.register('LoadingView', false)
export class LoadingViewComp extends CCVMParentComp {
    /** VM 组件绑定数据 */
    data: any = {
        /** 加载资源当前进度 */
        finished: 0,
        /** 加载资源最大进度 */
        total: 0,
        /** 加载资源进度比例值 */
        progress: "0",
        /** 加载流程中提示文本 */
        prompt: ""
    };

    private progress: number = 0;

    protected onBind(): void {
        this.on(GameEvent.GameServerConnected, this.onHandler, this);
    }

    start() {
        //this.addEvent();
        this.loadRes();
        // smc.debug.loadDebugPage(() => {
        //     if (oops.gui.has(UIID.Debug)) {
        //         smc.account.remove(DebugBtnViewComp);
        //     }
        // });

    }

    private onHandler(event: string, args: any) {
        switch (event) {
            case GameEvent.GameServerConnected:
                // 加载流程结束，移除加载提示界面
                this.node.destroy();
                break;
        }
    }

    /** 加载资源 */
    private async loadRes() {
        this.data.progress = 0;
        await this.loadCustom();
        this.loadGameRes();
    }

    /** 加载游戏本地JSON数据（自定义内容） */
    private async loadCustom() {
        // 加载游戏本地JSON数据的多语言提示文本
        this.data.prompt = oops.language.getLangByID("loading_load_json");
        await LoadCustomTable.loadAsyncCustom();

    }

    /** 加载初始游戏内容资源 */
    private loadGameRes() {
        // 加载初始游戏内容资源的多语言提示文本
        this.data.prompt = oops.language.getLangByID("loading_load_game");

        oops.res.loadDir("game", this.onProgressCallback.bind(this), this.onCompleteCallback.bind(this));
    }

    /** 加载进度事件 */
    private onProgressCallback(finished: number, total: number, item: any) {
        this.data.finished = finished;
        this.data.total = total;

        var progress = finished / total;
        if (progress > this.progress) {
            this.progress = progress;
            this.data.progress = (progress * 100).toFixed(2);
        }
    }

    /** 加载完成事件 */
    private onCompleteCallback() {
        // 获取用户信息的多语言提示文本
        this.data.prompt = oops.language.getLangByID("loading_load_player");
        console.log("加载完成");

        // 初始化帐号模块
        smc.account.login();

    }
    reset(): void {
        setTimeout(() => {
            // 关闭加载界面
            oops.gui.remove(UIID.Loading);

            // 打开游戏主界面（自定义逻辑）
           
        }, 500);

        oops.message.off(GameEvent.GameServerConnected, this.onHandler, this)
    }


}