

import { error } from "cc";
import { IProtocolHelper, IRequestProtocol, IResponseProtocol } from "../../libs/network/NetInterface";

/** 自定义通用包头长度 */
var Head_Length = 8;

/** Protobuf.js 编码与解码逻辑 */
export class NetProtocolProtobuf extends IProtocolHelper {
    private _messageId: number = 0;

    private getNextMessageId(): number {
        this._messageId = (this._messageId >= 65535) ? 0 : this._messageId + 1;
        return this._messageId;
    }
    private PBEncoder(module: number, cmd: number, msg: any): Uint8Array | null {
        //@ts-ignore
        const type = msg.constructor;
        if (!type || !type.encode) {
            error("无效的 Protobuf 消息类型:", type);
            return null;
        }

        return type.encode(msg).finish();


    }

    encode(ireqp: IRequestProtocol): void {
        const metaSize = 10; // 匹配客户端 8 字节包头 [id(2),module(2), cmd(2), reserved(4)]
        // 生成消息ID
        if (!ireqp.id) {
            ireqp.id = this.getNextMessageId();
        }
        // 使用 Protobuf 编码消息体
        const objBytes = this.PBEncoder(ireqp.Modile, ireqp.cmd, ireqp.params);
        if (!objBytes) {
            error("协议参数序列化失败:", ireqp.params);
            return;
        }

        // 创建完整数据缓冲区
        const buffer = new ArrayBuffer(metaSize + objBytes.length);
        const dv = new DataView(buffer);
        // 新协议头结构（大端序）
        dv.setUint16(0, ireqp.id, false);        // 消息ID（2字节）
        dv.setUint16(2, ireqp.Modile, false);    // 模块号（2字节）
        dv.setUint16(4, ireqp.cmd, false);       // 命令号（2字节）
        dv.setUint32(6, 0, false);               // 保留字段（4字节）

        // 写入消息体数据
        new Uint8Array(buffer).set(objBytes, metaSize);

        ireqp.buffer = buffer;
    }

    decodeCommon(msg: ArrayBuffer): IResponseProtocol {
        let dv = new DataView(msg);
        /** 【开发者自定义通用包头协议修改点】 */
        // 调整字段读取顺序和位宽（与服务端10字节包头对齐）
        var id = dv.getUint16(0, false);        // 消息ID（2字节，大端序）
        var module = dv.getUint16(2, false);   // 模块号（2字节，大端序）
        var cmd = dv.getUint16(4, false);      // 命令号（2字节，大端序）
        var code = dv.getUint32(6, false);     // 错误码（4字节，大端序，对应服务端保留字段）

        // 调整包头长度常量
        const Head_Length = 10; // 与服务端包头长度一致

        var bytes: Uint8Array = null!;
        if (msg.byteLength >= Head_Length) {
            bytes = new Uint8Array(msg, Head_Length, msg.byteLength - Head_Length)
        }

        var ipp: IResponseProtocol = {
            id: id,
            Modile: module,
            code: code,
            cmd: cmd
        }
        if (bytes) ipp.data = bytes;

        return ipp;
    }

    decodeCustom(ireqp: IRequestProtocol, iresp: IResponseProtocol): void {
        // 处理错误码映射
        if (iresp.code !== 0) {
            // 服务端错误码转换
            const errorMessages: { [key: number]: string } = {
                4001: "参数错误",
                4002: "协议解码失败",
                5000: "系统错误",
                5001: "请求超时",
                5002: "请求过于频繁",
                5003: "协议格式错误"
            };
            iresp.data = errorMessages[iresp.code] || `未知错误 (${iresp.code})`;
            return;
        }

        // 成功时解码protobuf消息体
        else {
            try {
                //@ts-ignore
                const decoder = proto[ireqp.respName];
                if (decoder && decoder.decode) {
                    iresp.data = decoder.decode(iresp.data);
                } else {
                    iresp.code = 4002; // DECODE_ERROR
                    iresp.data = "协议解码器不存在";
                }
            } catch (e) {
                iresp.code = 4002; // DECODE_ERROR
                iresp.data = `协议解码失败: ${ireqp}`;
            }
        }
    }

    onHearbeat(): void {
        console.log("心跳包");
    }
}