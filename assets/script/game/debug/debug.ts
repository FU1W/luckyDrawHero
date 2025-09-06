import { oops } from "db://assets/Framework/core/Oops";
import { ecs } from "db://assets/Framework/libs/ecs/ECS";

import { netChannel } from "db://assets/Framework/net/custom/NetChannelManager";
import { DebugSocektBll } from "./bll/DebugSocektBll";
import { DebugBtnViewComp } from "./view/DebugBtnViewComp";
import { UICallbacks } from "db://assets/Framework/core/gui/layer/Defines";
import { DebugPageViewComp } from "./view/DebugPageViewComp";
import { Node } from "cc";
import { UIID } from "../common/config/GameUIConfig";
import { LayerDebugPageViewComp } from "./view/LayerDebugPageViewComp";

/**
 * 账号模块
 * 1、连接游戏服务器
 * 2、登录玩家帐号，获取玩家信息
 * 3、断线重连接
 */

@ecs.register('Debug')
export class Debug extends ecs.Entity {
    //数据层
   
    //逻辑层
    DebugSocektBll!: DebugSocektBll;
    //视图层
    DebugPageViewComp!: DebugPageViewComp;
    protected init() {
        
        
    }
    async loadDebugPage(callback: Function) {

        var callbacks: UICallbacks = {
            onAdded: (node: Node, params: any) => {
                callback();
                this.add(node.getComponent(DebugBtnViewComp) as ecs.Comp);
            }
        };
        oops.gui.open(UIID.Debug, null, callbacks);
        // var node = await oops.gui.openAsync(UIID.Debug);
        // if (node) this.add(node.getComponent(DebugBtnViewComp) as ecs.Comp);
    }

    async loadLayerDebugPage() {
         var callbacks: UICallbacks = {
            onAdded: (node: Node, params: any) => {
               
                this.add(node.getComponent(LayerDebugPageViewComp) as ecs.Comp);
            }
        };
        oops.gui.open(UIID.LayerDebug, null, callbacks);
        // var node = await oops.gui.openAsync(UIID.LayerDebug);
        // if (node) this.add(node.getComponent(LayerDebugPageViewComp) as ecs.Comp);
    }

    destroy(): void {
        
        super.destroy();
    }

   

}

export class EcsDebugSystem extends ecs.System {
    constructor() {
        super();

       
    }
}
