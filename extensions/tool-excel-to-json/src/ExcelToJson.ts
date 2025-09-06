import path from "path";
import { createTs } from "./JsonToTs";
import { config } from "./main";

const fs = require('fs')
const excel = require('exceljs');

/**
 * Excel转Json数据
 * @param {*} src           读取的excel文件目录
 * @param {*} dst           导出的json文件目录
 * @param {*} name          excel文件名
 * @param {*} isClient      是否为客户端数据
 */
async function convert(src: string, dst: string, name: string, isClient: boolean) {
    let r: any = {};
    let names: any[] = [];          // 文名字段名
    let keys: any[] = [];           // 字段名
    let types: any[] = [];          // 通用字段数据类型
    let types_client: any = {};     // 客户端数据类型
    let primary: string[] = [];     // 多主键配置
    let primary_index: number[] = []; // 删除 servers 和 clients 数组

    const workbook = new excel.Workbook();

    // 读取excel
    await workbook.xlsx.readFile(src);
    const worksheet = workbook.getWorksheet(1);                 // 获取第一个worksheet 
    worksheet.eachRow((row: any, rowNumber: number) => {
        let data: any = {};
        let name = "";
        row.eachCell((cell: any, colNumber: number) => {
            const value = cell.value;
            if (rowNumber === 1) {                              // 字段中文名
                names.push(value);
                if (value.indexOf("【KEY】") > -1) primary_index.push(colNumber);
            }
            else if (rowNumber === 2) {                         // 字段英文名
                keys.push(value);
                if (primary_index.indexOf(colNumber) > -1) primary.push(value);
            }
            else if (rowNumber === 3) {                         // 通用字段数据类型
                types.push(value);
            }

            else {
                let index = colNumber - 1;
                let type = types[index];
                let key = keys[index];
                switch (type) {
                    case "int":
                        data[key] = parseInt(value);
                        types_client[key] = { en: "number", zh: names[index] };
                        break;
                    case "float":
                        data[key] = parseFloat(value);
                        types_client[key] = { en: "number", zh: names[index] };
                        break;
                    case "string":
                        data[key] = value;
                        types_client[key] = { en: "string", zh: names[index] };
                        break;
                    case "any":
                        data[key] = JSON.parse(value);
                        types_client[key] = { en: "any", zh: names[index] };
                        break;
                }
            }
        });
     

        // 生成数据（多主键）
        if (rowNumber > 3) {
            let temp: any = null;
            for (var i = 0; i < primary.length; i++) {
                let k = primary[i];
                let id = data[k];
                delete data[k];           // 主键数据删除

                if (primary.length == 1) {
                    r[id] = data;
                }
                else {
                    if (i == primary.length - 1) {
                        temp[id] = data;
                    }
                    else if (i == 0) {
                        if (r[id] == undefined) {
                            r[id] = {};
                        }
                        temp = r[id];
                    }
                    else {
                        temp[id] = {};
                        temp = temp[id];
                    }
                }
            }
        }
    });

    // 写入流
    if (r["undefined"] == null) {
        await fs.writeFileSync(dst, JSON.stringify(r));
        createTs(name, types_client, r, primary); // 移除 isClient 判断
        console.log("数据生成成功", dst);
    }
}

export function run() {
    var inputExcelPath = path.join(__dirname, config.PathExcel);
    var outJsonPath = path.join(__dirname, config.PathJson);

    // 新增清空目录函数
    const clearDirectory = (dirPath: string) => {
        if (fs.existsSync(dirPath)) {
            fs.readdirSync(dirPath).forEach((file: string) => {
                const curPath = path.join(dirPath, file);
                if (fs.lstatSync(curPath).isDirectory()) return; // 跳过子目录
                try {
                    fs.unlinkSync(curPath);
                    console.log(`已删除旧文件: ${curPath}`);
                } catch (e) {
                    console.error(`删除文件失败: ${curPath}`, e);
                }
            });
        }
    };

    // 清空JSON和TS输出目录
    clearDirectory(outJsonPath);
    clearDirectory(path.join(__dirname, config.PathTs));

    const files = fs.readdirSync(inputExcelPath);
    files.forEach((f: any) => {
        let name = f.substring(0, f.indexOf("_"));
        console.warn("生成客户端脚本", name);
        let ext = f.toString().substring(f.lastIndexOf(".") + 1);
        if (ext == "xlsx") {
            // convert(inputExcelPath + f, inputExcelPath + "server\\" + name + ".json", name, false);        // 服务器数据
            convert(inputExcelPath + f, outJsonPath + name + ".json", name, true);                         // 客户端数据
        }
    });
}