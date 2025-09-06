import { _decorator, Component, EventTouch, find, Node, UITransform, v2, v3, Vec2, view } from 'cc';
import { ViewUtil } from '../../../../Framework/core/utils/ViewUtil';
import { CCVMParentComp } from '../../../../Framework/module/common/CCVMParentComp';
import { Debug } from '../debug';
import { oops } from 'db://assets/Framework/core/Oops';
import { UIID } from '../../common/config/GameUIConfig';
import { ecs } from 'db://assets/Framework/libs/ecs/ECS';

const { ccclass, property } = _decorator;

@ccclass('LayerDebugPageViewComp')
@ecs.register('LayerDebugPageViewComp', false)
export class LayerDebugPageViewComp extends CCVMParentComp {
   

   
    onBind(): void {
        
      this.onRegisterEvent(this.getNode("BtnHideDebug"), this.OnClick_BtnHideDebug);
    }

    start(): void {
        
    }
    
    

    OnClick_BtnHideDebug() {
        console.log("关闭Debug界面");
        (this.ent as Debug).remove(LayerDebugPageViewComp);

    }
    reset(): void {
       oops.gui.remove(UIID.LayerDebug);
    }

}


