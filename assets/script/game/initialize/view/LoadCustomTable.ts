import { JsonUtil } from "db://assets/Framework/core/utils/JsonUtil";
import { TableRoleJob } from "../../common/table/TableRoleJob";
import { TableRoleLevelUp } from "../../common/table/TableRoleLevelUp";


// import { AllCustomTable } from '../../common/table/AllCustomTable';
/**
 * 加载自定义表
 */
export class LoadCustomTable {

    public static loadAsyncCustom(): any {
        return new Promise(async (resolve, reject) => {
            await JsonUtil.loadAsync(TableRoleJob.TableName);
            await JsonUtil.loadAsync(TableRoleLevelUp.TableName);
            resolve(null);
        });
    }

}