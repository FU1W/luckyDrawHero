import { DynamicAtlasManager, _decorator, macro, profiler } from 'cc';
import { DEBUG, JSB } from 'cc/env';
import { oops } from '../Framework/core/Oops';
import { Root } from '../Framework/core/Root';
import { ecs } from '../Framework/libs/ecs/ECS';
import { UIConfigData } from './game/common/config/GameUIConfig';
import { smc } from './game/common/ecs/SingletonModuleComp';
import { EcsPositionSystem } from './game/common/ecs/position/EcsPositionSystem';
import { EcsInitializeSystem, Initialize } from './game/initialize/Initialize';
import { Account, EcsAccountSystem } from './game/account/Account';
import { Debug, EcsDebugSystem } from './game/debug/debug';
import { EcsSceneSystem, Scene } from './game/scene/Scene';
import { EcsBuildSystem } from './game/build/Build';

const { ccclass, property } = _decorator;

macro.CLEANUP_IMAGE_CACHE = false;
DynamicAtlasManager.instance.enabled = true;
DynamicAtlasManager.instance.maxFrameSize = 512;

@ccclass('Main')
export class Main extends Root {
    start() {

    }

    protected run() {
        smc.initialize = ecs.getEntity<Initialize>(Initialize);
        smc.account = ecs.getEntity<Account>(Account);
        smc.debug = ecs.getEntity<Debug>(Debug);
        smc.scene = ecs.getEntity<Scene>(Scene);
        console.log("Main run");


    }

    protected initGui() {
        oops.gui.init(UIConfigData);
    }

    protected async initEcsSystem() {
        oops.ecs.add(new EcsInitializeSystem());
        oops.ecs.add(new EcsPositionSystem())
        oops.ecs.add(new EcsAccountSystem());
        oops.ecs.add(new EcsDebugSystem());
        oops.ecs.add(new EcsSceneSystem());
        oops.ecs.add(new EcsBuildSystem());
        
    }
}