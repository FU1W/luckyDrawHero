
import { ecs } from "db://assets/Framework/libs/ecs/ECS";
import { Account } from "../account/Account";
import { InitResComp, InitResSystem } from "./bll/InitRes";
import { UICallbacks } from "db://assets/Framework/core/gui/layer/Defines";
import { oops } from "db://assets/Framework/core/Oops";
import { LoadingViewComp } from "./view/LoadingViewComp";
import { Node } from "cc";
import { UIID } from "../common/config/GameUIConfig";
/**
 * 游戏进入初始化模块
 * 1、热更新
 * 2、加载默认资源
 */
@ecs.register('Initialize')
export class Initialize extends ecs.Entity {
    /** 帐号管理 */
    account: Account = null!;

    protected init() {
        // 帐号模块为初始化模块的子实体对象

        // 初始化游戏公共资源
        this.add(InitResComp);
    }

    loadLoadingPage() {
        var callbacks: UICallbacks = {
            onAdded: (node: Node, params: any) => {
                this.add(node.getComponent(LoadingViewComp) as ecs.Comp);
            }
        };
        oops.gui.open(UIID.Loading, null, callbacks);

    }



}

export class EcsInitializeSystem extends ecs.System {
    constructor() {
        super();

        this.add(new InitResSystem());
    }
}