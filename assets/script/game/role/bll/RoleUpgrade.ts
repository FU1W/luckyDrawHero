
import { ecs } from "db://assets/Framework/libs/ecs/ECS";
import { RoleAttributeType } from "../model/RoleEnum";
import { RoleModelLevelComp } from "../model/RoleModelLevelComp";
import { Role } from "../Role";

/**
 * 角色升级
 */
@ecs.register('RoleUpgrade')
export class RoleUpgradeComp extends ecs.Comp {
    /** 当前等级 */
    lv: number = 0;

    reset() {
        this.lv = 0;
    }
}

@ecs.register('Role')
export class RoleUpgradeSystem extends ecs.ComblockSystem implements ecs.IEntityEnterSystem {
    filter(): ecs.IMatcher {
        return ecs.allOf(RoleUpgradeComp, RoleModelLevelComp);
    }

    entityEnter(e: Role): void {
        let rm = e.RoleModel;
      
      
        e.remove(RoleUpgradeComp);
    }
}