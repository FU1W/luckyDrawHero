import { Sprite, SpriteFrame, UITransform, _decorator } from 'cc';
import { oops } from 'db://assets/Framework/core/Oops';
import { ecs } from 'db://assets/Framework/libs/ecs/ECS';
import { CCComp } from 'db://assets/Framework/module/common/CCComp';
import { smc } from '../../common/ecs/SingletonModuleComp';
import { BuildModelComp } from '../model/BuildModelComp';

const { ccclass, property } = _decorator;

/** 建筑 */
@ccclass('BuildViewComp')
@ecs.register('BuildView', false)
export class BuildViewComp extends CCComp {
    /** 是否已被选中 */
    selected: boolean = false;

    /** 合成物图片 */
    @property({ type: Sprite })
    sprite: Sprite = null!;

    onLoad() {
        this.show();
    }

    private show() {
        var bm = this.ent.get(BuildModelComp);
        oops.res.load(`game/scene/${bm.id}/spriteFrame`, SpriteFrame, (err: Error, asset: SpriteFrame) => {
            this.sprite.spriteFrame = asset;

            var ui = this.node.getComponent(UITransform)!;
            var width = smc.scene.MapModel.tiledWidth * bm.table.x;
            var height = smc.scene.MapModel.tiledHeight * bm.table.y;
            ui.setContentSize(width, height);
        });
    }

    reset(): void {
        this.node.destroy();
    }
}