import { EditBox, _decorator } from "cc";
import { oops } from "db://assets/Framework/core/Oops";

import { ecs } from "db://assets/Framework/libs/ecs/ECS";
import { CCVMParentComp } from "db://assets/Framework/module/common/CCVMParentComp";
import { UIID } from "../../common/config/GameUIConfig";
import { DebugBtnViewComp } from "./DebugBtnViewComp";
import { Debug } from "../debug";


const { ccclass, property } = _decorator;

/** 购买通用 视图层 */
@ccclass('DebugPageViewComp')
@ecs.register('DebugPageViewComp', false)
export class DebugPageViewComp extends CCVMParentComp {
   
    onBind() {
     
    }

    /** 视图层逻辑代码分离演示 */
    start() {
        
    }

    
    /** 视图对象通过 ecs.Entity.remove(ModuleViewComp) 删除组件是触发组件处理自定义释放逻辑 */
    reset() {
       
    }
}