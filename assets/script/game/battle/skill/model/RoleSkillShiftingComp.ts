import { ecs } from "db://assets/Framework/libs/ecs/ECS";

/** 
 * 角色技能位移状态
 * 1、处于位移状态时，不触发与服务器的位置修正
 * 2、使用ECS组件的目的是方便后续扩展其它业务逻辑
 */
@ecs.register('RoleSkillShifting')
export class RoleSkillShiftingComp extends ecs.Comp {
    reset() {

    }
}