import { _decorator, Component, EventTouch, find, Node, UITransform, v2, v3, Vec2, view } from 'cc';
import { ViewUtil } from '../../../../Framework/core/utils/ViewUtil';
import { CCVMParentComp } from '../../../../Framework/module/common/CCVMParentComp';
import { Debug } from '../debug';
import { oops } from 'db://assets/Framework/core/Oops';
import { UIID } from '../../common/config/GameUIConfig';
import { smc } from '../../common/ecs/SingletonModuleComp';
import { ecs } from 'db://assets/Framework/libs/ecs/ECS';

const { ccclass, property } = _decorator;

@ccclass('DebugBtnViewComp')
@ecs.register('DebugPageViewComp', false)
export class DebugBtnViewComp extends CCVMParentComp {


    private _v2StartPos: Vec2 = null!;
    private _v2CurPos: Vec2 = null!;
    private _bMove: boolean = false;
    public get BMove(): boolean {
        return this._bMove;
    }

    onLoad(): void {
        
        //@ts-ignore
        this.node.position = v3(cc.winSize.width / 2 - (this.node.getComponent(UITransform)?.contentSize.width / 2), 200, 0);
        this.node.getChildByName("BtnOpenDebug")?.on(Node.EventType.TOUCH_END, this.OnClick_BtnOpenDebug, this);

        this.node.on(Node.EventType.TOUCH_START, this._onTouchStart, this);
        this.node.on(Node.EventType.TOUCH_MOVE, this._onTouchMove, this);
        this.node.on(Node.EventType.TOUCH_END, this._onTouchEndOrCancel, this);
        this.node.on(Node.EventType.TOUCH_CANCEL, this._onTouchEndOrCancel, this);
    }

    start(): void {
        
    }
    protected onEnable(): void {
        
    }

    protected onDisable(): void {

    }

    private _onTouchStart(event: EventTouch) {
        const uiTransform = this.node.getComponent(UITransform)!;
        const touchPos = event.getUILocation();
        const worldPos = v3(touchPos.x, touchPos.y, 0);
        const localPos = this.node.parent?.getComponent(UITransform)?.convertToNodeSpaceAR(worldPos);
        const anchorOffset = v3(
            uiTransform.anchorX * uiTransform.width,
            uiTransform.anchorY * uiTransform.height,
            0
        );
        this._v2CurPos = v2(localPos!.x - anchorOffset.x, localPos!.y - anchorOffset.y);
        this._v2StartPos = this._v2CurPos.clone();
        this._bMove = false;
    }

    private _onTouchMove(event: EventTouch) {
        if (!this._v2CurPos) return;

        const uiTransform = this.node.getComponent(UITransform)!;
        const touchPos = event.getUILocation();
        const worldPos = v3(touchPos.x, touchPos.y, 0);
        const localPos = this.node.parent?.getComponent(UITransform)?.convertToNodeSpaceAR(worldPos);
        const anchorOffset = v3(
            uiTransform.anchorX * uiTransform.width,
            uiTransform.anchorY * uiTransform.height,
            0
        );
        let posNode = v2(localPos!.x - anchorOffset.x, localPos!.y - anchorOffset.y);
        const winSize = view.getVisibleSize();
        const anchorX = uiTransform.anchorX;
        const anchorY = uiTransform.anchorY;
        const contentSize = uiTransform.contentSize;
        const iWidth = contentSize.width;
        const iHeight = contentSize.height;

        const maxX = winSize.width - iWidth * (1 - anchorX);
        const minX = -maxX / 2 + (iWidth / 2 * (1 - anchorX));
        const maxY = winSize.height - iHeight * (1 - anchorY);
        const minY = -maxY / 2 + (iHeight / 2 * (1 - anchorY));
        if (posNode.x > maxX) {
            posNode.x = maxX;
        } else if (posNode.x < minX) {
            posNode.x = minX;
        }
        if (posNode.y > maxY) {
            posNode.y = maxY;
        } else if (posNode.y < minY) {
            posNode.y = minY;
        }
        this.node.position = v3(posNode.x, posNode.y, 0);
        this._v2CurPos = posNode;
        let v2Dis = posNode.subtract(this._v2StartPos);
        if (v2Dis.length() > 4) {
            this._bMove = true;
        }
    }

    private _onTouchEndOrCancel(event: EventTouch) {
        this._bMove = false;
    }

    OnClick_BtnOpenDebug() {
        console.log("OnClick_BtnOpenDebug");
        (this.ent as Debug).loadLayerDebugPage();
    }
    reset(): void {
        oops.gui.remove(UIID.Debug);
    }

}


