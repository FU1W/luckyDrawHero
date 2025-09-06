
import { JsonUtil } from "db://assets/Framework/core/utils/JsonUtil";

export class TableBuild {
    static TableName: string = "Build";

    private data: any;

    init(id: number) {
    var table = JsonUtil.get(TableBuild.TableName);
    this.data = table[id];
    this.id = id;
    }

    /** 编号【KEY】 */
    id: number = 0;
    
    /** 建筑名 */
    get name(): string {   
        return this.data.name;
    }
    /** 横向尺寸 */
    get x(): number {   
        return this.data.x;
    }
    /** 纵向尺寸 */
    get y(): number {   
        return this.data.y;
    }
    }
        