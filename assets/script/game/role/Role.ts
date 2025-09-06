import { instantiate, Node, Prefab } from "cc";
import { Logger } from "db://assets/Framework/core/common/log/Logger";
import { oops } from "db://assets/Framework/core/Oops";
import { ViewUtil } from "db://assets/Framework/core/utils/ViewUtil";
import { ecs } from "db://assets/Framework/libs/ecs/ECS";
import { RoleModelComp } from "./model/RoleModelComp";
import { RoleViewComp } from "./view/RoleViewComp";
import { RoleSkillLearnedComp } from "./model/RoleSkillLearnedComp";
import { RoleAttributeType } from "./model/RoleEnum";
import { smc } from "../common/ecs/SingletonModuleComp";
import { Skill } from "../battle/skill/Skill";
import { Vec3 } from "cc";

/** 角色模块 */
@ecs.register(`Role`)
export class Role extends ecs.Entity {
    RoleModel!: RoleModelComp;
    RoleSkillLearned!: RoleSkillLearnedComp;

    RoleView!: RoleViewComp;

    /** 实始添加的数据层组件 */
    protected init() {
        this.addComponents<ecs.Comp>(
            RoleModelComp,
            RoleSkillLearnedComp);
    }
    /**
        * 是否死亡
        * @return true为死亡;false为存活
        */
    get die(): boolean {
        return this.RoleModel.attributes.get(RoleAttributeType.hp).value == 0;
    }


    /** 准备释放技能 */
    readyCastSkill(skillId: number) {
        if (this.die || this.RoleView.isNoMove) return;

        // 普通攻击
        var skill = this.RoleSkillLearned.skills.get(skillId)!;
        var casting = skill.SkillModel.casting;
        casting.skill = skill;
        casting.caster = this;

        // 自动选目标
        if (casting.autoSelectTarget()) {
            // 验证是否在技能限制的释放范围内
            if (casting.checkDistance()) {
                this.attackCmd(skillId);
            }
            // 自动移动到技能可施放的范围
            else {

            }
        }
        else {
            oops.gui.toast("游戏中没有其它玩家可攻击，攻击时会优先攻击距离最近玩家")
        }
    }

    /** 攻击命令 */
    attackCmd(skillId: number) {
        var skill = this.RoleSkillLearned.skills.get(skillId)!;
        //是否有前摇
        if (skill.SkillModel.table.front) {

        }
    }

    /**
     * 攻击目标动作
     * @param target 攻击
     */
    attack(target: Role | Vec3, skill: Skill) {

        if (target instanceof Role) {
            this.RoleView.lootAt(target.RoleView.node.position);
        }
        else {
            this.RoleView.lootAt(target);
        }
        this.RoleView.attack();
    }

    /** 释放角色对象 */
    destroy(): void {
        Logger.logBusiness(`【角色】释放角色 - ${this.RoleModel.nickname}`);
        this.remove(RoleViewComp);

        super.destroy();
    }

    /** 加载模型 */
    async load(parent: Node, callback?: Function) {
        var path = this.RoleModel.res;
        var prefab = await oops.res.loadAsync(path, Prefab);
        var node = instantiate(prefab);
        // 注：防一个客户端切到后面，一个玩家加入又退出时，玩家模型资源后，玩家对象被释放了
        if (this.RoleModel) {
            var node = ViewUtil.createPrefabNode(path);
            var rv = node.getComponent(RoleViewComp)!;
            node.parent = parent;
            this.add(rv);

            callback && callback(node);
        }
        else {
            node.destroy();
        }
    }
}

/** Player 模块业务逻辑系统组件，如无业务逻辑处理可删除此对象 */
export class EcsRoleSystem extends ecs.System {
    constructor() {
        super();

        // this.add(new ecs.ComblockSystem());
    }
}
