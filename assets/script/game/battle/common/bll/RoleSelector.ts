import { Vec3 } from "cc";
import { Role } from "../../../role/Role";
import { BattleBridge } from "./BattleBridge";

/** 角色选择器 */
export class RoleSelector {
    /** 获取所有角色集合 */
    static all(): Map<string, Role> {
        return BattleBridge.roles;
    }

    /** 根据技能施放者阵营选择所有敌对角色 */
    static hostile(): Map<string, Role> {
        var m = new Map<string, Role>();
        // 选择所有敌对角色


        return m;
    }

    /** 根据技能施放者阵营选择所有友军角色 */
    static friendly(): Map<string, Role> {
        var m = new Map<string, Role>();
        // 选择所有友军角色

        return m;
    }

    /** 获取距离自定目标最近的其它目标 */
    static nearest(caster: Role): Role | null {
        var temp = Number.MAX_VALUE;
        var current: number;                      // 当前距离
        var t: Role | null = null;                // 找到的目标

        // 选择最近存活的玩家
        BattleBridge.roles.forEach(p => {
            if (caster != p && !p.die) {
                current = Vec3.distance(p.RoleView.node.position, caster.RoleView.node.position);
                if (current < temp) {
                    temp = current;
                    t = p;
                }
            }
        });

        return t;
    }
}