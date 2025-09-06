import { director } from 'cc';
import { oops } from 'db://assets/Framework/core/Oops';
import { JsonUtil } from 'db://assets/Framework/core/utils/JsonUtil';
import { ecs } from 'db://assets/Framework/libs/ecs/ECS';
import { GameEvent } from "../../common/config/GameEvent";
import { smc } from "../../common/ecs/SingletonModuleComp";
import { Account } from "../Account";
import { AccountModelComp } from "../model/AccountModelComp";
import { netChannel } from 'db://assets/Framework/net/custom/NetChannelManager';

/** 初始化游戏帐号 */
@ecs.register('InitAccount')
export class InitAccountComp extends ecs.Comp {
    reset() { }
}

export class InitAccountSystem extends ecs.ComblockSystem implements ecs.IEntityEnterSystem {
    filter(): ecs.IMatcher {
        return ecs.allOf(InitAccountComp, AccountModelComp);
    }

    async entityEnter(e: Account) {
        await this.login(e);
        //netChannel.game.addResponeHandler();
        e.remove(InitAccountComp);
    }
    private login(e: Account) {
        console.log("登录游戏");
    }



} 