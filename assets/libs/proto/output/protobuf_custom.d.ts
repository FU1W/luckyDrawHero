declare global {
// DO NOT EDIT! This is a generated file. Edit the JSDoc in src/*.js instead and run 'npm run types'.

/** Cmd enum. */
export enum Cmd {
    eGuestLoginReq = 1,
    eGuestLoginRes = 2,
    eRegisterUserReq = 3,
    eRegisterUserRes = 4,
    eUserLoginReq = 5,
    eUserLoginRes = 6,
    eGuestUpgradeReq = 7,
    eGuestUpgradeRes = 8,
    ePullingPlayerDataReq = 9,
    ePullingPlayerDataRes = 10,
    eRecvLoginBonuesReq = 11,
    eRecvLoginBonuesRes = 12,
    ePullingBonuesListReq = 13,
    ePullingBonuesListRes = 14,
    eRecvBonuesReq = 15,
    eRecvBonuesRes = 16,
    eSelectPlayerReq = 17,
    eSelectPlayerRes = 18,
    ePullingTaskListReq = 19,
    ePullingTaskListRes = 20,
    ePullingMailMsgReq = 21,
    ePullingMailMsgRes = 22,
    eUpdateMailMsgReq = 23,
    eUpdategMailMsgRes = 24,
    ePullingRankReq = 25,
    ePullingRankRes = 26,
    ePullingPackDataReq = 27,
    ePullingPackDataRes = 28,
    eExchangeProductReq = 29,
    eExchangeProductRes = 30,
    eEnterLogicServerReq = 31,
    eEnterLogicServerRes = 32,
    eExitLogicServerReq = 33,
    eExitLogicServerRes = 34,
    eSitdownReq = 35,
    eSitdownRes = 36,
    eStandupReq = 37,
    eStandupRes = 38,
    eTalkMsgReq = 39,
    eTalkMsgRes = 40,
    ePlayerIsReadyReq = 41,
    ePlayerIsReadyRes = 42,
    ePlayerOptReq = 43,
    ePlayerOptRes = 44,
    eEnterRoomRes = 45,
    eUserArrivedSeatRes = 46,
    eUserExitSeatRes = 47,
    eRoundReadyRes = 48,
    eRoundStartedRes = 49,
    eRoundCheckOutRes = 50,
    eRoundClearRes = 51,
    eReconnRoomRes = 52,
    ePlayerEscapeRes = 53,
    ePlayerSpawnReq = 54,
    ePlayerSpawnRes = 55,
    eNavToDstReq = 56,
    eNavToDstRes = 57,
    eNavInDirReq = 58,
    eNavInDirRes = 59,
    eStartSkillReq = 60,
    eStartSkillRes = 61,
    eStartBuffReq = 62,
    eStartBuffRes = 63,
    eEnterAOIRes = 64,
    eLeaveAOIRes = 65,
    eSyncCharactorRes = 66,
    eLostHpRes = 67,
    eTestGetGoodReq = 68,
    eTestGetGoodRes = 69,
    eTestUpdateGoodsReq = 70,
    eTestUpdateGoddsRes = 71,
    eTestLogicCmdEchoReq = 72,
    eTestLogicCmdEchoRes = 73,
    eNetHearbeatMsgReq = 74,
    eNetHearbeatMsgRes = 75
}

/** Namespace proto. */
export namespace proto {

    /** Properties of an AccountInfo. */
    interface IAccountInfo {

        /** AccountInfo unick */
        unick?: (string|null);

        /** AccountInfo uface */
        uface?: (number|null);

        /** AccountInfo uvip */
        uvip?: (number|null);

        /** AccountInfo isGuest */
        isGuest?: (number|null);
    }

    /** Represents an AccountInfo. */
    class AccountInfo implements IAccountInfo {

        /**
         * Constructs a new AccountInfo.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IAccountInfo);

        /** AccountInfo unick. */
        public unick: string;

        /** AccountInfo uface. */
        public uface: number;

        /** AccountInfo uvip. */
        public uvip: number;

        /** AccountInfo isGuest. */
        public isGuest: number;

        /**
         * Encodes the specified AccountInfo message. Does not implicitly {@link proto.AccountInfo.verify|verify} messages.
         * @param m AccountInfo message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IAccountInfo, w?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an AccountInfo message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns AccountInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): proto.AccountInfo;
    }

    /** Properties of an ArrivedCharactor. */
    interface IArrivedCharactor {

        /** ArrivedCharactor worldId */
        worldId?: (number|null);

        /** ArrivedCharactor chInfo */
        chInfo?: (proto.ICharactorInfo|null);

        /** ArrivedCharactor transform */
        transform?: (proto.ICharactorTransform|null);

        /** ArrivedCharactor status */
        status?: (number|null);
    }

    /** Represents an ArrivedCharactor. */
    class ArrivedCharactor implements IArrivedCharactor {

        /**
         * Constructs a new ArrivedCharactor.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IArrivedCharactor);

        /** ArrivedCharactor worldId. */
        public worldId: number;

        /** ArrivedCharactor chInfo. */
        public chInfo?: (proto.ICharactorInfo|null);

        /** ArrivedCharactor transform. */
        public transform?: (proto.ICharactorTransform|null);

        /** ArrivedCharactor status. */
        public status: number;

        /**
         * Encodes the specified ArrivedCharactor message. Does not implicitly {@link proto.ArrivedCharactor.verify|verify} messages.
         * @param m ArrivedCharactor message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IArrivedCharactor, w?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes an ArrivedCharactor message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns ArrivedCharactor
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): proto.ArrivedCharactor;
    }

    /** Properties of a BonuesItem. */
    interface IBonuesItem {

        /** BonuesItem bonuesId */
        bonuesId?: (number|null);

        /** BonuesItem bonuesDesic */
        bonuesDesic?: (string|null);

        /** BonuesItem status */
        status?: (number|null);

        /** BonuesItem typeId */
        typeId?: (number|null);
    }

    /** Represents a BonuesItem. */
    class BonuesItem implements IBonuesItem {

        /**
         * Constructs a new BonuesItem.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IBonuesItem);

        /** BonuesItem bonuesId. */
        public bonuesId: number;

        /** BonuesItem bonuesDesic. */
        public bonuesDesic: string;

        /** BonuesItem status. */
        public status: number;

        /** BonuesItem typeId. */
        public typeId: number;

        /**
         * Encodes the specified BonuesItem message. Does not implicitly {@link proto.BonuesItem.verify|verify} messages.
         * @param m BonuesItem message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IBonuesItem, w?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a BonuesItem message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns BonuesItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): proto.BonuesItem;
    }

    /** Properties of a CharactorInfo. */
    interface ICharactorInfo {

        /** CharactorInfo unick */
        unick?: (string|null);

        /** CharactorInfo job */
        job?: (number|null);

        /** CharactorInfo sex */
        sex?: (number|null);

        /** CharactorInfo charactorId */
        charactorId?: (number|null);
    }

    /** Represents a CharactorInfo. */
    class CharactorInfo implements ICharactorInfo {

        /**
         * Constructs a new CharactorInfo.
         * @param [p] Properties to set
         */
        constructor(p?: proto.ICharactorInfo);

        /** CharactorInfo unick. */
        public unick: string;

        /** CharactorInfo job. */
        public job: number;

        /** CharactorInfo sex. */
        public sex: number;

        /** CharactorInfo charactorId. */
        public charactorId: number;

        /**
         * Encodes the specified CharactorInfo message. Does not implicitly {@link proto.CharactorInfo.verify|verify} messages.
         * @param m CharactorInfo message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.ICharactorInfo, w?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a CharactorInfo message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns CharactorInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): proto.CharactorInfo;
    }

    /** Properties of a CharactorTransform. */
    interface ICharactorTransform {

        /** CharactorTransform pos */
        pos?: (number[]|null);

        /** CharactorTransform eulerAngles */
        eulerAngles?: (number[]|null);
    }

    /** Represents a CharactorTransform. */
    class CharactorTransform implements ICharactorTransform {

        /**
         * Constructs a new CharactorTransform.
         * @param [p] Properties to set
         */
        constructor(p?: proto.ICharactorTransform);

        /** CharactorTransform pos. */
        public pos: number[];

        /** CharactorTransform eulerAngles. */
        public eulerAngles: number[];

        /**
         * Encodes the specified CharactorTransform message. Does not implicitly {@link proto.CharactorTransform.verify|verify} messages.
         * @param m CharactorTransform message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.ICharactorTransform, w?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a CharactorTransform message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns CharactorTransform
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): proto.CharactorTransform;
    }

    /** Properties of a DicGoodsItem. */
    interface IDicGoodsItem {

        /** DicGoodsItem mainType */
        mainType?: (number|null);

        /** DicGoodsItem Value */
        Value?: (proto.IGoodsItem[]|null);
    }

    /** Represents a DicGoodsItem. */
    class DicGoodsItem implements IDicGoodsItem {

        /**
         * Constructs a new DicGoodsItem.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IDicGoodsItem);

        /** DicGoodsItem mainType. */
        public mainType: number;

        /** DicGoodsItem Value. */
        public Value: proto.IGoodsItem[];

        /**
         * Encodes the specified DicGoodsItem message. Does not implicitly {@link proto.DicGoodsItem.verify|verify} messages.
         * @param m DicGoodsItem message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IDicGoodsItem, w?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a DicGoodsItem message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns DicGoodsItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): proto.DicGoodsItem;
    }

    /** Properties of a GoodsItem. */
    interface IGoodsItem {

        /** GoodsItem typeId */
        typeId?: (number|null);

        /** GoodsItem num */
        num?: (number|null);

        /** GoodsItem strengData */
        strengData?: (Uint8Array|null);
    }

    /** Represents a GoodsItem. */
    class GoodsItem implements IGoodsItem {

        /**
         * Constructs a new GoodsItem.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IGoodsItem);

        /** GoodsItem typeId. */
        public typeId: number;

        /** GoodsItem num. */
        public num: number;

        /** GoodsItem strengData. */
        public strengData: Uint8Array;

        /**
         * Encodes the specified GoodsItem message. Does not implicitly {@link proto.GoodsItem.verify|verify} messages.
         * @param m GoodsItem message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IGoodsItem, w?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a GoodsItem message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns GoodsItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): proto.GoodsItem;
    }

    /** Properties of a MailMsgItem. */
    interface IMailMsgItem {

        /** MailMsgItem status */
        status?: (number|null);

        /** MailMsgItem msgBody */
        msgBody?: (string|null);

        /** MailMsgItem sendTime */
        sendTime?: (number|null);

        /** MailMsgItem msgId */
        msgId?: (number|null);
    }

    /** Represents a MailMsgItem. */
    class MailMsgItem implements IMailMsgItem {

        /**
         * Constructs a new MailMsgItem.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMailMsgItem);

        /** MailMsgItem status. */
        public status: number;

        /** MailMsgItem msgBody. */
        public msgBody: string;

        /** MailMsgItem sendTime. */
        public sendTime: number;

        /** MailMsgItem msgId. */
        public msgId: number;

        /**
         * Encodes the specified MailMsgItem message. Does not implicitly {@link proto.MailMsgItem.verify|verify} messages.
         * @param m MailMsgItem message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMailMsgItem, w?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a MailMsgItem message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns MailMsgItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): proto.MailMsgItem;
    }

    /** Properties of a PlayerInfo. */
    interface IPlayerInfo {

        /** PlayerInfo unick */
        unick?: (string|null);

        /** PlayerInfo hp */
        hp?: (number|null);

        /** PlayerInfo exp */
        exp?: (number|null);

        /** PlayerInfo mp */
        mp?: (number|null);

        /** PlayerInfo umoney */
        umoney?: (number|null);

        /** PlayerInfo ucion */
        ucion?: (number|null);

        /** PlayerInfo usex */
        usex?: (number|null);

        /** PlayerInfo hasBonues */
        hasBonues?: (number|null);

        /** PlayerInfo days */
        days?: (number|null);

        /** PlayerInfo loginBonues */
        loginBonues?: (number|null);
    }

    /** Represents a PlayerInfo. */
    class PlayerInfo implements IPlayerInfo {

        /**
         * Constructs a new PlayerInfo.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IPlayerInfo);

        /** PlayerInfo unick. */
        public unick: string;

        /** PlayerInfo hp. */
        public hp: number;

        /** PlayerInfo exp. */
        public exp: number;

        /** PlayerInfo mp. */
        public mp: number;

        /** PlayerInfo umoney. */
        public umoney: number;

        /** PlayerInfo ucion. */
        public ucion: number;

        /** PlayerInfo usex. */
        public usex: number;

        /** PlayerInfo hasBonues. */
        public hasBonues: number;

        /** PlayerInfo days. */
        public days: number;

        /** PlayerInfo loginBonues. */
        public loginBonues: number;

        /**
         * Encodes the specified PlayerInfo message. Does not implicitly {@link proto.PlayerInfo.verify|verify} messages.
         * @param m PlayerInfo message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IPlayerInfo, w?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a PlayerInfo message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns PlayerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): proto.PlayerInfo;
    }

    /** Properties of a RankItem. */
    interface IRankItem {

        /** RankItem unick */
        unick?: (string|null);

        /** RankItem value */
        value?: (number|null);

        /** RankItem uface */
        uface?: (number|null);
    }

    /** Represents a RankItem. */
    class RankItem implements IRankItem {

        /**
         * Constructs a new RankItem.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IRankItem);

        /** RankItem unick. */
        public unick: string;

        /** RankItem value. */
        public value: number;

        /** RankItem uface. */
        public uface: number;

        /**
         * Encodes the specified RankItem message. Does not implicitly {@link proto.RankItem.verify|verify} messages.
         * @param m RankItem message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IRankItem, w?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a RankItem message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns RankItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): proto.RankItem;
    }

    /** Properties of a ReqEnterLogicServer. */
    interface IReqEnterLogicServer {

        /** ReqEnterLogicServer typeId */
        typeId?: (number|null);

        /** ReqEnterLogicServer zoneId */
        zoneId?: (number|null);

        /** ReqEnterLogicServer instId */
        instId?: (number|null);
    }

    /** Represents a ReqEnterLogicServer. */
    class ReqEnterLogicServer implements IReqEnterLogicServer {

        /**
         * Constructs a new ReqEnterLogicServer.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IReqEnterLogicServer);

        /** ReqEnterLogicServer typeId. */
        public typeId: number;

        /** ReqEnterLogicServer zoneId. */
        public zoneId: number;

        /** ReqEnterLogicServer instId. */
        public instId: number;

        /**
         * Encodes the specified ReqEnterLogicServer message. Does not implicitly {@link proto.ReqEnterLogicServer.verify|verify} messages.
         * @param m ReqEnterLogicServer message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IReqEnterLogicServer, w?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a ReqEnterLogicServer message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns ReqEnterLogicServer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): proto.ReqEnterLogicServer;
    }

    /** Properties of a ReqExchangeProduct. */
    interface IReqExchangeProduct {

        /** ReqExchangeProduct productId */
        productId?: (number|null);
    }

    /** Represents a ReqExchangeProduct. */
    class ReqExchangeProduct implements IReqExchangeProduct {

        /**
         * Constructs a new ReqExchangeProduct.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IReqExchangeProduct);

        /** ReqExchangeProduct productId. */
        public productId: number;

        /**
         * Encodes the specified ReqExchangeProduct message. Does not implicitly {@link proto.ReqExchangeProduct.verify|verify} messages.
         * @param m ReqExchangeProduct message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IReqExchangeProduct, w?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a ReqExchangeProduct message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns ReqExchangeProduct
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): proto.ReqExchangeProduct;
    }

    /** Properties of a ReqExitLogicServer. */
    interface IReqExitLogicServer {

        /** ReqExitLogicServer quitReason */
        quitReason?: (number|null);
    }

    /** Represents a ReqExitLogicServer. */
    class ReqExitLogicServer implements IReqExitLogicServer {

        /**
         * Constructs a new ReqExitLogicServer.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IReqExitLogicServer);

        /** ReqExitLogicServer quitReason. */
        public quitReason: number;

        /**
         * Encodes the specified ReqExitLogicServer message. Does not implicitly {@link proto.ReqExitLogicServer.verify|verify} messages.
         * @param m ReqExitLogicServer message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IReqExitLogicServer, w?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a ReqExitLogicServer message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns ReqExitLogicServer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): proto.ReqExitLogicServer;
    }

    /** Properties of a ReqGuestLogin. */
    interface IReqGuestLogin {

        /** ReqGuestLogin guestKey */
        guestKey?: (string|null);

        /** ReqGuestLogin channal */
        channal?: (number|null);
    }

    /** Represents a ReqGuestLogin. */
    class ReqGuestLogin implements IReqGuestLogin {

        /**
         * Constructs a new ReqGuestLogin.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IReqGuestLogin);

        /** ReqGuestLogin guestKey. */
        public guestKey: string;

        /** ReqGuestLogin channal. */
        public channal: number;

        /**
         * Encodes the specified ReqGuestLogin message. Does not implicitly {@link proto.ReqGuestLogin.verify|verify} messages.
         * @param m ReqGuestLogin message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IReqGuestLogin, w?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a ReqGuestLogin message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns ReqGuestLogin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): proto.ReqGuestLogin;
    }

    /** Properties of a ReqGuestUpgrade. */
    interface IReqGuestUpgrade {

        /** ReqGuestUpgrade uname */
        uname?: (string|null);

        /** ReqGuestUpgrade upwd */
        upwd?: (string|null);

        /** ReqGuestUpgrade unick */
        unick?: (string|null);
    }

    /** Represents a ReqGuestUpgrade. */
    class ReqGuestUpgrade implements IReqGuestUpgrade {

        /**
         * Constructs a new ReqGuestUpgrade.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IReqGuestUpgrade);

        /** ReqGuestUpgrade uname. */
        public uname: string;

        /** ReqGuestUpgrade upwd. */
        public upwd: string;

        /** ReqGuestUpgrade unick. */
        public unick: string;

        /**
         * Encodes the specified ReqGuestUpgrade message. Does not implicitly {@link proto.ReqGuestUpgrade.verify|verify} messages.
         * @param m ReqGuestUpgrade message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IReqGuestUpgrade, w?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a ReqGuestUpgrade message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns ReqGuestUpgrade
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): proto.ReqGuestUpgrade;
    }

    /** Properties of a ReqNavInDir. */
    interface IReqNavInDir {

        /** ReqNavInDir dirx */
        dirx?: (number|null);

        /** ReqNavInDir diry */
        diry?: (number|null);
    }

    /** Represents a ReqNavInDir. */
    class ReqNavInDir implements IReqNavInDir {

        /**
         * Constructs a new ReqNavInDir.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IReqNavInDir);

        /** ReqNavInDir dirx. */
        public dirx: number;

        /** ReqNavInDir diry. */
        public diry: number;

        /**
         * Encodes the specified ReqNavInDir message. Does not implicitly {@link proto.ReqNavInDir.verify|verify} messages.
         * @param m ReqNavInDir message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IReqNavInDir, w?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a ReqNavInDir message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns ReqNavInDir
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): proto.ReqNavInDir;
    }

    /** Properties of a ReqNavToDst. */
    interface IReqNavToDst {

        /** ReqNavToDst x */
        x?: (number|null);

        /** ReqNavToDst y */
        y?: (number|null);

        /** ReqNavToDst z */
        z?: (number|null);
    }

    /** Represents a ReqNavToDst. */
    class ReqNavToDst implements IReqNavToDst {

        /**
         * Constructs a new ReqNavToDst.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IReqNavToDst);

        /** ReqNavToDst x. */
        public x: number;

        /** ReqNavToDst y. */
        public y: number;

        /** ReqNavToDst z. */
        public z: number;

        /**
         * Encodes the specified ReqNavToDst message. Does not implicitly {@link proto.ReqNavToDst.verify|verify} messages.
         * @param m ReqNavToDst message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IReqNavToDst, w?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a ReqNavToDst message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns ReqNavToDst
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): proto.ReqNavToDst;
    }

    /** Properties of a ReqNetHearbeatMsg. */
    interface IReqNetHearbeatMsg {

        /** ReqNetHearbeatMsg content */
        content?: (string|null);
    }

    /** Represents a ReqNetHearbeatMsg. */
    class ReqNetHearbeatMsg implements IReqNetHearbeatMsg {

        /**
         * Constructs a new ReqNetHearbeatMsg.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IReqNetHearbeatMsg);

        /** ReqNetHearbeatMsg content. */
        public content: string;

        /**
         * Encodes the specified ReqNetHearbeatMsg message. Does not implicitly {@link proto.ReqNetHearbeatMsg.verify|verify} messages.
         * @param m ReqNetHearbeatMsg message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IReqNetHearbeatMsg, w?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a ReqNetHearbeatMsg message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns ReqNetHearbeatMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): proto.ReqNetHearbeatMsg;
    }

    /** Properties of a ReqPlayerIsReady. */
    interface IReqPlayerIsReady {

        /** ReqPlayerIsReady reserve */
        reserve?: (number|null);
    }

    /** Represents a ReqPlayerIsReady. */
    class ReqPlayerIsReady implements IReqPlayerIsReady {

        /**
         * Constructs a new ReqPlayerIsReady.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IReqPlayerIsReady);

        /** ReqPlayerIsReady reserve. */
        public reserve: number;

        /**
         * Encodes the specified ReqPlayerIsReady message. Does not implicitly {@link proto.ReqPlayerIsReady.verify|verify} messages.
         * @param m ReqPlayerIsReady message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IReqPlayerIsReady, w?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a ReqPlayerIsReady message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns ReqPlayerIsReady
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): proto.ReqPlayerIsReady;
    }

    /** Properties of a ReqPlayerOpt. */
    interface IReqPlayerOpt {

        /** ReqPlayerOpt optType */
        optType?: (number|null);

        /** ReqPlayerOpt v1 */
        v1?: (number|null);

        /** ReqPlayerOpt v2 */
        v2?: (number|null);

        /** ReqPlayerOpt v3 */
        v3?: (number|null);
    }

    /** Represents a ReqPlayerOpt. */
    class ReqPlayerOpt implements IReqPlayerOpt {

        /**
         * Constructs a new ReqPlayerOpt.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IReqPlayerOpt);

        /** ReqPlayerOpt optType. */
        public optType: number;

        /** ReqPlayerOpt v1. */
        public v1: number;

        /** ReqPlayerOpt v2. */
        public v2: number;

        /** ReqPlayerOpt v3. */
        public v3: number;

        /**
         * Encodes the specified ReqPlayerOpt message. Does not implicitly {@link proto.ReqPlayerOpt.verify|verify} messages.
         * @param m ReqPlayerOpt message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IReqPlayerOpt, w?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a ReqPlayerOpt message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns ReqPlayerOpt
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): proto.ReqPlayerOpt;
    }

    /** Properties of a ReqPlayerSpawn. */
    interface IReqPlayerSpawn {

        /** ReqPlayerSpawn SpawnPoint */
        SpawnPoint?: (number|null);
    }

    /** Represents a ReqPlayerSpawn. */
    class ReqPlayerSpawn implements IReqPlayerSpawn {

        /**
         * Constructs a new ReqPlayerSpawn.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IReqPlayerSpawn);

        /** ReqPlayerSpawn SpawnPoint. */
        public SpawnPoint: number;

        /**
         * Encodes the specified ReqPlayerSpawn message. Does not implicitly {@link proto.ReqPlayerSpawn.verify|verify} messages.
         * @param m ReqPlayerSpawn message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IReqPlayerSpawn, w?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a ReqPlayerSpawn message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns ReqPlayerSpawn
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): proto.ReqPlayerSpawn;
    }

    /** Properties of a ReqPullingBonuesList. */
    interface IReqPullingBonuesList {

        /** ReqPullingBonuesList typeId */
        typeId?: (number|null);
    }

    /** Represents a ReqPullingBonuesList. */
    class ReqPullingBonuesList implements IReqPullingBonuesList {

        /**
         * Constructs a new ReqPullingBonuesList.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IReqPullingBonuesList);

        /** ReqPullingBonuesList typeId. */
        public typeId: number;

        /**
         * Encodes the specified ReqPullingBonuesList message. Does not implicitly {@link proto.ReqPullingBonuesList.verify|verify} messages.
         * @param m ReqPullingBonuesList message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IReqPullingBonuesList, w?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a ReqPullingBonuesList message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns ReqPullingBonuesList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): proto.ReqPullingBonuesList;
    }

    /** Properties of a ReqPullingMailMsg. */
    interface IReqPullingMailMsg {

        /** ReqPullingMailMsg typeId */
        typeId?: (number|null);
    }

    /** Represents a ReqPullingMailMsg. */
    class ReqPullingMailMsg implements IReqPullingMailMsg {

        /**
         * Constructs a new ReqPullingMailMsg.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IReqPullingMailMsg);

        /** ReqPullingMailMsg typeId. */
        public typeId: number;

        /**
         * Encodes the specified ReqPullingMailMsg message. Does not implicitly {@link proto.ReqPullingMailMsg.verify|verify} messages.
         * @param m ReqPullingMailMsg message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IReqPullingMailMsg, w?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a ReqPullingMailMsg message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns ReqPullingMailMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): proto.ReqPullingMailMsg;
    }

    /** Properties of a ReqPullingPackData. */
    interface IReqPullingPackData {

        /** ReqPullingPackData typeId */
        typeId?: (number|null);
    }

    /** Represents a ReqPullingPackData. */
    class ReqPullingPackData implements IReqPullingPackData {

        /**
         * Constructs a new ReqPullingPackData.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IReqPullingPackData);

        /** ReqPullingPackData typeId. */
        public typeId: number;

        /**
         * Encodes the specified ReqPullingPackData message. Does not implicitly {@link proto.ReqPullingPackData.verify|verify} messages.
         * @param m ReqPullingPackData message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IReqPullingPackData, w?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a ReqPullingPackData message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns ReqPullingPackData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): proto.ReqPullingPackData;
    }

    /** Properties of a ReqPullingPlayerData. */
    interface IReqPullingPlayerData {

        /** ReqPullingPlayerData job */
        job?: (number|null);
    }

    /** Represents a ReqPullingPlayerData. */
    class ReqPullingPlayerData implements IReqPullingPlayerData {

        /**
         * Constructs a new ReqPullingPlayerData.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IReqPullingPlayerData);

        /** ReqPullingPlayerData job. */
        public job: number;

        /**
         * Encodes the specified ReqPullingPlayerData message. Does not implicitly {@link proto.ReqPullingPlayerData.verify|verify} messages.
         * @param m ReqPullingPlayerData message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IReqPullingPlayerData, w?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a ReqPullingPlayerData message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns ReqPullingPlayerData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): proto.ReqPullingPlayerData;
    }

    /** Properties of a ReqPullingRank. */
    interface IReqPullingRank {

        /** ReqPullingRank typeId */
        typeId?: (number|null);
    }

    /** Represents a ReqPullingRank. */
    class ReqPullingRank implements IReqPullingRank {

        /**
         * Constructs a new ReqPullingRank.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IReqPullingRank);

        /** ReqPullingRank typeId. */
        public typeId: number;

        /**
         * Encodes the specified ReqPullingRank message. Does not implicitly {@link proto.ReqPullingRank.verify|verify} messages.
         * @param m ReqPullingRank message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IReqPullingRank, w?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a ReqPullingRank message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns ReqPullingRank
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): proto.ReqPullingRank;
    }

    /** Properties of a ReqPullingTaskList. */
    interface IReqPullingTaskList {

        /** ReqPullingTaskList typeId */
        typeId?: (number|null);
    }

    /** Represents a ReqPullingTaskList. */
    class ReqPullingTaskList implements IReqPullingTaskList {

        /**
         * Constructs a new ReqPullingTaskList.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IReqPullingTaskList);

        /** ReqPullingTaskList typeId. */
        public typeId: number;

        /**
         * Encodes the specified ReqPullingTaskList message. Does not implicitly {@link proto.ReqPullingTaskList.verify|verify} messages.
         * @param m ReqPullingTaskList message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IReqPullingTaskList, w?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a ReqPullingTaskList message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns ReqPullingTaskList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): proto.ReqPullingTaskList;
    }

    /** Properties of a ReqRecvBonues. */
    interface IReqRecvBonues {

        /** ReqRecvBonues bonuesId */
        bonuesId?: (number|null);
    }

    /** Represents a ReqRecvBonues. */
    class ReqRecvBonues implements IReqRecvBonues {

        /**
         * Constructs a new ReqRecvBonues.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IReqRecvBonues);

        /** ReqRecvBonues bonuesId. */
        public bonuesId: number;

        /**
         * Encodes the specified ReqRecvBonues message. Does not implicitly {@link proto.ReqRecvBonues.verify|verify} messages.
         * @param m ReqRecvBonues message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IReqRecvBonues, w?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a ReqRecvBonues message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns ReqRecvBonues
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): proto.ReqRecvBonues;
    }

    /** Properties of a ReqRecvLoginBonues. */
    interface IReqRecvLoginBonues {

        /** ReqRecvLoginBonues type */
        type?: (number|null);
    }

    /** Represents a ReqRecvLoginBonues. */
    class ReqRecvLoginBonues implements IReqRecvLoginBonues {

        /**
         * Constructs a new ReqRecvLoginBonues.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IReqRecvLoginBonues);

        /** ReqRecvLoginBonues type. */
        public type: number;

        /**
         * Encodes the specified ReqRecvLoginBonues message. Does not implicitly {@link proto.ReqRecvLoginBonues.verify|verify} messages.
         * @param m ReqRecvLoginBonues message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IReqRecvLoginBonues, w?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a ReqRecvLoginBonues message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns ReqRecvLoginBonues
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): proto.ReqRecvLoginBonues;
    }

    /** Properties of a ReqRegisterUser. */
    interface IReqRegisterUser {

        /** ReqRegisterUser uname */
        uname?: (string|null);

        /** ReqRegisterUser upwd */
        upwd?: (string|null);

        /** ReqRegisterUser channal */
        channal?: (number|null);
    }

    /** Represents a ReqRegisterUser. */
    class ReqRegisterUser implements IReqRegisterUser {

        /**
         * Constructs a new ReqRegisterUser.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IReqRegisterUser);

        /** ReqRegisterUser uname. */
        public uname: string;

        /** ReqRegisterUser upwd. */
        public upwd: string;

        /** ReqRegisterUser channal. */
        public channal: number;

        /**
         * Encodes the specified ReqRegisterUser message. Does not implicitly {@link proto.ReqRegisterUser.verify|verify} messages.
         * @param m ReqRegisterUser message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IReqRegisterUser, w?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a ReqRegisterUser message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns ReqRegisterUser
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): proto.ReqRegisterUser;
    }

    /** Properties of a ReqSelectPlayer. */
    interface IReqSelectPlayer {

        /** ReqSelectPlayer job */
        job?: (number|null);

        /** ReqSelectPlayer uname */
        uname?: (string|null);

        /** ReqSelectPlayer usex */
        usex?: (number|null);

        /** ReqSelectPlayer charactorId */
        charactorId?: (number|null);
    }

    /** Represents a ReqSelectPlayer. */
    class ReqSelectPlayer implements IReqSelectPlayer {

        /**
         * Constructs a new ReqSelectPlayer.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IReqSelectPlayer);

        /** ReqSelectPlayer job. */
        public job: number;

        /** ReqSelectPlayer uname. */
        public uname: string;

        /** ReqSelectPlayer usex. */
        public usex: number;

        /** ReqSelectPlayer charactorId. */
        public charactorId: number;

        /**
         * Encodes the specified ReqSelectPlayer message. Does not implicitly {@link proto.ReqSelectPlayer.verify|verify} messages.
         * @param m ReqSelectPlayer message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IReqSelectPlayer, w?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a ReqSelectPlayer message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns ReqSelectPlayer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): proto.ReqSelectPlayer;
    }

    /** Properties of a ReqSitdown. */
    interface IReqSitdown {

        /** ReqSitdown seatId */
        seatId?: (number|null);
    }

    /** Represents a ReqSitdown. */
    class ReqSitdown implements IReqSitdown {

        /**
         * Constructs a new ReqSitdown.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IReqSitdown);

        /** ReqSitdown seatId. */
        public seatId: number;

        /**
         * Encodes the specified ReqSitdown message. Does not implicitly {@link proto.ReqSitdown.verify|verify} messages.
         * @param m ReqSitdown message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IReqSitdown, w?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a ReqSitdown message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns ReqSitdown
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): proto.ReqSitdown;
    }

    /** Properties of a ReqStandup. */
    interface IReqStandup {

        /** ReqStandup reserve */
        reserve?: (number|null);
    }

    /** Represents a ReqStandup. */
    class ReqStandup implements IReqStandup {

        /**
         * Constructs a new ReqStandup.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IReqStandup);

        /** ReqStandup reserve. */
        public reserve: number;

        /**
         * Encodes the specified ReqStandup message. Does not implicitly {@link proto.ReqStandup.verify|verify} messages.
         * @param m ReqStandup message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IReqStandup, w?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a ReqStandup message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns ReqStandup
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): proto.ReqStandup;
    }

    /** Properties of a ReqStartBuff. */
    interface IReqStartBuff {

        /** ReqStartBuff buffId */
        buffId?: (number|null);
    }

    /** Represents a ReqStartBuff. */
    class ReqStartBuff implements IReqStartBuff {

        /**
         * Constructs a new ReqStartBuff.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IReqStartBuff);

        /** ReqStartBuff buffId. */
        public buffId: number;

        /**
         * Encodes the specified ReqStartBuff message. Does not implicitly {@link proto.ReqStartBuff.verify|verify} messages.
         * @param m ReqStartBuff message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IReqStartBuff, w?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a ReqStartBuff message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns ReqStartBuff
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): proto.ReqStartBuff;
    }

    /** Properties of a ReqStartSkill. */
    interface IReqStartSkill {

        /** ReqStartSkill skillId */
        skillId?: (number|null);
    }

    /** Represents a ReqStartSkill. */
    class ReqStartSkill implements IReqStartSkill {

        /**
         * Constructs a new ReqStartSkill.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IReqStartSkill);

        /** ReqStartSkill skillId. */
        public skillId: number;

        /**
         * Encodes the specified ReqStartSkill message. Does not implicitly {@link proto.ReqStartSkill.verify|verify} messages.
         * @param m ReqStartSkill message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IReqStartSkill, w?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a ReqStartSkill message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns ReqStartSkill
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): proto.ReqStartSkill;
    }

    /** Properties of a ReqTalkMsg. */
    interface IReqTalkMsg {

        /** ReqTalkMsg talkType */
        talkType?: (number|null);

        /** ReqTalkMsg msgBodyOrAudioUrl */
        msgBodyOrAudioUrl?: (string|null);
    }

    /** Represents a ReqTalkMsg. */
    class ReqTalkMsg implements IReqTalkMsg {

        /**
         * Constructs a new ReqTalkMsg.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IReqTalkMsg);

        /** ReqTalkMsg talkType. */
        public talkType: number;

        /** ReqTalkMsg msgBodyOrAudioUrl. */
        public msgBodyOrAudioUrl: string;

        /**
         * Encodes the specified ReqTalkMsg message. Does not implicitly {@link proto.ReqTalkMsg.verify|verify} messages.
         * @param m ReqTalkMsg message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IReqTalkMsg, w?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a ReqTalkMsg message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns ReqTalkMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): proto.ReqTalkMsg;
    }

    /** Properties of a ReqTestGetGoods. */
    interface IReqTestGetGoods {

        /** ReqTestGetGoods typeId */
        typeId?: (number|null);

        /** ReqTestGetGoods num */
        num?: (number|null);
    }

    /** Represents a ReqTestGetGoods. */
    class ReqTestGetGoods implements IReqTestGetGoods {

        /**
         * Constructs a new ReqTestGetGoods.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IReqTestGetGoods);

        /** ReqTestGetGoods typeId. */
        public typeId: number;

        /** ReqTestGetGoods num. */
        public num: number;

        /**
         * Encodes the specified ReqTestGetGoods message. Does not implicitly {@link proto.ReqTestGetGoods.verify|verify} messages.
         * @param m ReqTestGetGoods message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IReqTestGetGoods, w?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a ReqTestGetGoods message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns ReqTestGetGoods
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): proto.ReqTestGetGoods;
    }

    /** Properties of a ReqTestLogicCmdEcho. */
    interface IReqTestLogicCmdEcho {

        /** ReqTestLogicCmdEcho content */
        content?: (string|null);
    }

    /** Represents a ReqTestLogicCmdEcho. */
    class ReqTestLogicCmdEcho implements IReqTestLogicCmdEcho {

        /**
         * Constructs a new ReqTestLogicCmdEcho.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IReqTestLogicCmdEcho);

        /** ReqTestLogicCmdEcho content. */
        public content: string;

        /**
         * Encodes the specified ReqTestLogicCmdEcho message. Does not implicitly {@link proto.ReqTestLogicCmdEcho.verify|verify} messages.
         * @param m ReqTestLogicCmdEcho message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IReqTestLogicCmdEcho, w?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a ReqTestLogicCmdEcho message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns ReqTestLogicCmdEcho
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): proto.ReqTestLogicCmdEcho;
    }

    /** Properties of a ReqTestUpdateGooods. */
    interface IReqTestUpdateGooods {

        /** ReqTestUpdateGooods typeId */
        typeId?: (number|null);

        /** ReqTestUpdateGooods num */
        num?: (number|null);
    }

    /** Represents a ReqTestUpdateGooods. */
    class ReqTestUpdateGooods implements IReqTestUpdateGooods {

        /**
         * Constructs a new ReqTestUpdateGooods.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IReqTestUpdateGooods);

        /** ReqTestUpdateGooods typeId. */
        public typeId: number;

        /** ReqTestUpdateGooods num. */
        public num: number;

        /**
         * Encodes the specified ReqTestUpdateGooods message. Does not implicitly {@link proto.ReqTestUpdateGooods.verify|verify} messages.
         * @param m ReqTestUpdateGooods message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IReqTestUpdateGooods, w?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a ReqTestUpdateGooods message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns ReqTestUpdateGooods
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): proto.ReqTestUpdateGooods;
    }

    /** Properties of a ReqUpdateMailMsg. */
    interface IReqUpdateMailMsg {

        /** ReqUpdateMailMsg mailMsgId */
        mailMsgId?: (number|null);

        /** ReqUpdateMailMsg status */
        status?: (number|null);
    }

    /** Represents a ReqUpdateMailMsg. */
    class ReqUpdateMailMsg implements IReqUpdateMailMsg {

        /**
         * Constructs a new ReqUpdateMailMsg.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IReqUpdateMailMsg);

        /** ReqUpdateMailMsg mailMsgId. */
        public mailMsgId: number;

        /** ReqUpdateMailMsg status. */
        public status: number;

        /**
         * Encodes the specified ReqUpdateMailMsg message. Does not implicitly {@link proto.ReqUpdateMailMsg.verify|verify} messages.
         * @param m ReqUpdateMailMsg message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IReqUpdateMailMsg, w?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a ReqUpdateMailMsg message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns ReqUpdateMailMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): proto.ReqUpdateMailMsg;
    }

    /** Properties of a ReqUserLogin. */
    interface IReqUserLogin {

        /** ReqUserLogin uname */
        uname?: (string|null);

        /** ReqUserLogin upwd */
        upwd?: (string|null);

        /** ReqUserLogin code */
        code?: (string|null);
    }

    /** Represents a ReqUserLogin. */
    class ReqUserLogin implements IReqUserLogin {

        /**
         * Constructs a new ReqUserLogin.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IReqUserLogin);

        /** ReqUserLogin uname. */
        public uname: string;

        /** ReqUserLogin upwd. */
        public upwd: string;

        /** ReqUserLogin code. */
        public code: string;

        /**
         * Encodes the specified ReqUserLogin message. Does not implicitly {@link proto.ReqUserLogin.verify|verify} messages.
         * @param m ReqUserLogin message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IReqUserLogin, w?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a ReqUserLogin message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns ReqUserLogin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): proto.ReqUserLogin;
    }

    /** Properties of a ResEnterAOI. */
    interface IResEnterAOI {

        /** ResEnterAOI charactors */
        charactors?: (proto.IArrivedCharactor[]|null);
    }

    /** Represents a ResEnterAOI. */
    class ResEnterAOI implements IResEnterAOI {

        /**
         * Constructs a new ResEnterAOI.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IResEnterAOI);

        /** ResEnterAOI charactors. */
        public charactors: proto.IArrivedCharactor[];

        /**
         * Encodes the specified ResEnterAOI message. Does not implicitly {@link proto.ResEnterAOI.verify|verify} messages.
         * @param m ResEnterAOI message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IResEnterAOI, w?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a ResEnterAOI message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns ResEnterAOI
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): proto.ResEnterAOI;
    }

    /** Properties of a ResEnterLogicServer. */
    interface IResEnterLogicServer {

        /** ResEnterLogicServer status */
        status?: (number|null);
    }

    /** Represents a ResEnterLogicServer. */
    class ResEnterLogicServer implements IResEnterLogicServer {

        /**
         * Constructs a new ResEnterLogicServer.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IResEnterLogicServer);

        /** ResEnterLogicServer status. */
        public status: number;

        /**
         * Encodes the specified ResEnterLogicServer message. Does not implicitly {@link proto.ResEnterLogicServer.verify|verify} messages.
         * @param m ResEnterLogicServer message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IResEnterLogicServer, w?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a ResEnterLogicServer message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns ResEnterLogicServer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): proto.ResEnterLogicServer;
    }

    /** Properties of a ResEnterRoom. */
    interface IResEnterRoom {

        /** ResEnterRoom roomId */
        roomId?: (number|null);

        /** ResEnterRoom roomState */
        roomState?: (number|null);

        /** ResEnterRoom roomInViewId */
        roomInViewId?: (number|null);
    }

    /** Represents a ResEnterRoom. */
    class ResEnterRoom implements IResEnterRoom {

        /**
         * Constructs a new ResEnterRoom.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IResEnterRoom);

        /** ResEnterRoom roomId. */
        public roomId: number;

        /** ResEnterRoom roomState. */
        public roomState: number;

        /** ResEnterRoom roomInViewId. */
        public roomInViewId: number;

        /**
         * Encodes the specified ResEnterRoom message. Does not implicitly {@link proto.ResEnterRoom.verify|verify} messages.
         * @param m ResEnterRoom message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IResEnterRoom, w?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a ResEnterRoom message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns ResEnterRoom
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): proto.ResEnterRoom;
    }

    /** Properties of a ResExchangeProduct. */
    interface IResExchangeProduct {

        /** ResExchangeProduct status */
        status?: (number|null);
    }

    /** Represents a ResExchangeProduct. */
    class ResExchangeProduct implements IResExchangeProduct {

        /**
         * Constructs a new ResExchangeProduct.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IResExchangeProduct);

        /** ResExchangeProduct status. */
        public status: number;

        /**
         * Encodes the specified ResExchangeProduct message. Does not implicitly {@link proto.ResExchangeProduct.verify|verify} messages.
         * @param m ResExchangeProduct message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IResExchangeProduct, w?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a ResExchangeProduct message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns ResExchangeProduct
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): proto.ResExchangeProduct;
    }

    /** Properties of a ResExitLogicServer. */
    interface IResExitLogicServer {

        /** ResExitLogicServer status */
        status?: (number|null);
    }

    /** Represents a ResExitLogicServer. */
    class ResExitLogicServer implements IResExitLogicServer {

        /**
         * Constructs a new ResExitLogicServer.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IResExitLogicServer);

        /** ResExitLogicServer status. */
        public status: number;

        /**
         * Encodes the specified ResExitLogicServer message. Does not implicitly {@link proto.ResExitLogicServer.verify|verify} messages.
         * @param m ResExitLogicServer message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IResExitLogicServer, w?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a ResExitLogicServer message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns ResExitLogicServer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): proto.ResExitLogicServer;
    }

    /** Properties of a ResGuestLogin. */
    interface IResGuestLogin {

        /** ResGuestLogin status */
        status?: (number|null);

        /** ResGuestLogin uinfo */
        uinfo?: (proto.IAccountInfo|null);
    }

    /** Represents a ResGuestLogin. */
    class ResGuestLogin implements IResGuestLogin {

        /**
         * Constructs a new ResGuestLogin.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IResGuestLogin);

        /** ResGuestLogin status. */
        public status: number;

        /** ResGuestLogin uinfo. */
        public uinfo?: (proto.IAccountInfo|null);

        /**
         * Encodes the specified ResGuestLogin message. Does not implicitly {@link proto.ResGuestLogin.verify|verify} messages.
         * @param m ResGuestLogin message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IResGuestLogin, w?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a ResGuestLogin message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns ResGuestLogin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): proto.ResGuestLogin;
    }

    /** Properties of a ResGuestUpgrade. */
    interface IResGuestUpgrade {

        /** ResGuestUpgrade status */
        status?: (number|null);

        /** ResGuestUpgrade uinfo */
        uinfo?: (proto.IAccountInfo|null);
    }

    /** Represents a ResGuestUpgrade. */
    class ResGuestUpgrade implements IResGuestUpgrade {

        /**
         * Constructs a new ResGuestUpgrade.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IResGuestUpgrade);

        /** ResGuestUpgrade status. */
        public status: number;

        /** ResGuestUpgrade uinfo. */
        public uinfo?: (proto.IAccountInfo|null);

        /**
         * Encodes the specified ResGuestUpgrade message. Does not implicitly {@link proto.ResGuestUpgrade.verify|verify} messages.
         * @param m ResGuestUpgrade message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IResGuestUpgrade, w?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a ResGuestUpgrade message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns ResGuestUpgrade
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): proto.ResGuestUpgrade;
    }

    /** Properties of a ResLeaveAOI. */
    interface IResLeaveAOI {

        /** ResLeaveAOI leavePlayers */
        leavePlayers?: (number[]|null);
    }

    /** Represents a ResLeaveAOI. */
    class ResLeaveAOI implements IResLeaveAOI {

        /**
         * Constructs a new ResLeaveAOI.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IResLeaveAOI);

        /** ResLeaveAOI leavePlayers. */
        public leavePlayers: number[];

        /**
         * Encodes the specified ResLeaveAOI message. Does not implicitly {@link proto.ResLeaveAOI.verify|verify} messages.
         * @param m ResLeaveAOI message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IResLeaveAOI, w?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a ResLeaveAOI message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns ResLeaveAOI
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): proto.ResLeaveAOI;
    }

    /** Properties of a ResLostHp. */
    interface IResLostHp {

        /** ResLostHp seatOrWorldId */
        seatOrWorldId?: (number|null);

        /** ResLostHp lostHp */
        lostHp?: (number|null);
    }

    /** Represents a ResLostHp. */
    class ResLostHp implements IResLostHp {

        /**
         * Constructs a new ResLostHp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IResLostHp);

        /** ResLostHp seatOrWorldId. */
        public seatOrWorldId: number;

        /** ResLostHp lostHp. */
        public lostHp: number;

        /**
         * Encodes the specified ResLostHp message. Does not implicitly {@link proto.ResLostHp.verify|verify} messages.
         * @param m ResLostHp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IResLostHp, w?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a ResLostHp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns ResLostHp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): proto.ResLostHp;
    }

    /** Properties of a ResNavInDir. */
    interface IResNavInDir {

        /** ResNavInDir worldId */
        worldId?: (number|null);

        /** ResNavInDir dirx */
        dirx?: (number|null);

        /** ResNavInDir diry */
        diry?: (number|null);

        /** ResNavInDir speed */
        speed?: (number|null);
    }

    /** Represents a ResNavInDir. */
    class ResNavInDir implements IResNavInDir {

        /**
         * Constructs a new ResNavInDir.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IResNavInDir);

        /** ResNavInDir worldId. */
        public worldId: number;

        /** ResNavInDir dirx. */
        public dirx: number;

        /** ResNavInDir diry. */
        public diry: number;

        /** ResNavInDir speed. */
        public speed: number;

        /**
         * Encodes the specified ResNavInDir message. Does not implicitly {@link proto.ResNavInDir.verify|verify} messages.
         * @param m ResNavInDir message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IResNavInDir, w?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a ResNavInDir message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns ResNavInDir
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): proto.ResNavInDir;
    }

    /** Properties of a ResNavToDst. */
    interface IResNavToDst {

        /** ResNavToDst worldId */
        worldId?: (number|null);

        /** ResNavToDst x */
        x?: (number|null);

        /** ResNavToDst y */
        y?: (number|null);

        /** ResNavToDst z */
        z?: (number|null);

        /** ResNavToDst speed */
        speed?: (number|null);
    }

    /** Represents a ResNavToDst. */
    class ResNavToDst implements IResNavToDst {

        /**
         * Constructs a new ResNavToDst.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IResNavToDst);

        /** ResNavToDst worldId. */
        public worldId: number;

        /** ResNavToDst x. */
        public x: number;

        /** ResNavToDst y. */
        public y: number;

        /** ResNavToDst z. */
        public z: number;

        /** ResNavToDst speed. */
        public speed: number;

        /**
         * Encodes the specified ResNavToDst message. Does not implicitly {@link proto.ResNavToDst.verify|verify} messages.
         * @param m ResNavToDst message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IResNavToDst, w?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a ResNavToDst message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns ResNavToDst
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): proto.ResNavToDst;
    }

    /** Properties of a ResNetHearbeatMsg. */
    interface IResNetHearbeatMsg {

        /** ResNetHearbeatMsg content */
        content?: (string|null);
    }

    /** Represents a ResNetHearbeatMsg. */
    class ResNetHearbeatMsg implements IResNetHearbeatMsg {

        /**
         * Constructs a new ResNetHearbeatMsg.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IResNetHearbeatMsg);

        /** ResNetHearbeatMsg content. */
        public content: string;

        /**
         * Encodes the specified ResNetHearbeatMsg message. Does not implicitly {@link proto.ResNetHearbeatMsg.verify|verify} messages.
         * @param m ResNetHearbeatMsg message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IResNetHearbeatMsg, w?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a ResNetHearbeatMsg message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns ResNetHearbeatMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): proto.ResNetHearbeatMsg;
    }

    /** Properties of a ResPlayerEscape. */
    interface IResPlayerEscape {

        /** ResPlayerEscape seatId */
        seatId?: (number|null);
    }

    /** Represents a ResPlayerEscape. */
    class ResPlayerEscape implements IResPlayerEscape {

        /**
         * Constructs a new ResPlayerEscape.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IResPlayerEscape);

        /** ResPlayerEscape seatId. */
        public seatId: number;

        /**
         * Encodes the specified ResPlayerEscape message. Does not implicitly {@link proto.ResPlayerEscape.verify|verify} messages.
         * @param m ResPlayerEscape message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IResPlayerEscape, w?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a ResPlayerEscape message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns ResPlayerEscape
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): proto.ResPlayerEscape;
    }

    /** Properties of a ResPlayerIsReady. */
    interface IResPlayerIsReady {

        /** ResPlayerIsReady status */
        status?: (number|null);

        /** ResPlayerIsReady seatId */
        seatId?: (number|null);
    }

    /** Represents a ResPlayerIsReady. */
    class ResPlayerIsReady implements IResPlayerIsReady {

        /**
         * Constructs a new ResPlayerIsReady.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IResPlayerIsReady);

        /** ResPlayerIsReady status. */
        public status: number;

        /** ResPlayerIsReady seatId. */
        public seatId: number;

        /**
         * Encodes the specified ResPlayerIsReady message. Does not implicitly {@link proto.ResPlayerIsReady.verify|verify} messages.
         * @param m ResPlayerIsReady message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IResPlayerIsReady, w?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a ResPlayerIsReady message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns ResPlayerIsReady
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): proto.ResPlayerIsReady;
    }

    /** Properties of a ResPlayerOpt. */
    interface IResPlayerOpt {

        /** ResPlayerOpt status */
        status?: (number|null);

        /** ResPlayerOpt seatId */
        seatId?: (number|null);

        /** ResPlayerOpt optType */
        optType?: (number|null);

        /** ResPlayerOpt v1 */
        v1?: (number|null);

        /** ResPlayerOpt v2 */
        v2?: (number|null);

        /** ResPlayerOpt v3 */
        v3?: (number|null);
    }

    /** Represents a ResPlayerOpt. */
    class ResPlayerOpt implements IResPlayerOpt {

        /**
         * Constructs a new ResPlayerOpt.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IResPlayerOpt);

        /** ResPlayerOpt status. */
        public status: number;

        /** ResPlayerOpt seatId. */
        public seatId: number;

        /** ResPlayerOpt optType. */
        public optType: number;

        /** ResPlayerOpt v1. */
        public v1: number;

        /** ResPlayerOpt v2. */
        public v2: number;

        /** ResPlayerOpt v3. */
        public v3: number;

        /**
         * Encodes the specified ResPlayerOpt message. Does not implicitly {@link proto.ResPlayerOpt.verify|verify} messages.
         * @param m ResPlayerOpt message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IResPlayerOpt, w?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a ResPlayerOpt message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns ResPlayerOpt
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): proto.ResPlayerOpt;
    }

    /** Properties of a ResPlayerSpawn. */
    interface IResPlayerSpawn {

        /** ResPlayerSpawn status */
        status?: (number|null);

        /** ResPlayerSpawn worldId */
        worldId?: (number|null);
    }

    /** Represents a ResPlayerSpawn. */
    class ResPlayerSpawn implements IResPlayerSpawn {

        /**
         * Constructs a new ResPlayerSpawn.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IResPlayerSpawn);

        /** ResPlayerSpawn status. */
        public status: number;

        /** ResPlayerSpawn worldId. */
        public worldId: number;

        /**
         * Encodes the specified ResPlayerSpawn message. Does not implicitly {@link proto.ResPlayerSpawn.verify|verify} messages.
         * @param m ResPlayerSpawn message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IResPlayerSpawn, w?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a ResPlayerSpawn message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns ResPlayerSpawn
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): proto.ResPlayerSpawn;
    }

    /** Properties of a ResPullingBonuesList. */
    interface IResPullingBonuesList {

        /** ResPullingBonuesList status */
        status?: (number|null);

        /** ResPullingBonuesList bonues */
        bonues?: (proto.IBonuesItem[]|null);
    }

    /** Represents a ResPullingBonuesList. */
    class ResPullingBonuesList implements IResPullingBonuesList {

        /**
         * Constructs a new ResPullingBonuesList.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IResPullingBonuesList);

        /** ResPullingBonuesList status. */
        public status: number;

        /** ResPullingBonuesList bonues. */
        public bonues: proto.IBonuesItem[];

        /**
         * Encodes the specified ResPullingBonuesList message. Does not implicitly {@link proto.ResPullingBonuesList.verify|verify} messages.
         * @param m ResPullingBonuesList message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IResPullingBonuesList, w?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a ResPullingBonuesList message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns ResPullingBonuesList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): proto.ResPullingBonuesList;
    }

    /** Properties of a ResPullingMailMsg. */
    interface IResPullingMailMsg {

        /** ResPullingMailMsg status */
        status?: (number|null);

        /** ResPullingMailMsg mailMessages */
        mailMessages?: (proto.IMailMsgItem[]|null);
    }

    /** Represents a ResPullingMailMsg. */
    class ResPullingMailMsg implements IResPullingMailMsg {

        /**
         * Constructs a new ResPullingMailMsg.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IResPullingMailMsg);

        /** ResPullingMailMsg status. */
        public status: number;

        /** ResPullingMailMsg mailMessages. */
        public mailMessages: proto.IMailMsgItem[];

        /**
         * Encodes the specified ResPullingMailMsg message. Does not implicitly {@link proto.ResPullingMailMsg.verify|verify} messages.
         * @param m ResPullingMailMsg message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IResPullingMailMsg, w?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a ResPullingMailMsg message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns ResPullingMailMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): proto.ResPullingMailMsg;
    }

    /** Properties of a ResPullingPackData. */
    interface IResPullingPackData {

        /** ResPullingPackData status */
        status?: (number|null);

        /** ResPullingPackData packGoods */
        packGoods?: (proto.IDicGoodsItem[]|null);
    }

    /** Represents a ResPullingPackData. */
    class ResPullingPackData implements IResPullingPackData {

        /**
         * Constructs a new ResPullingPackData.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IResPullingPackData);

        /** ResPullingPackData status. */
        public status: number;

        /** ResPullingPackData packGoods. */
        public packGoods: proto.IDicGoodsItem[];

        /**
         * Encodes the specified ResPullingPackData message. Does not implicitly {@link proto.ResPullingPackData.verify|verify} messages.
         * @param m ResPullingPackData message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IResPullingPackData, w?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a ResPullingPackData message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns ResPullingPackData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): proto.ResPullingPackData;
    }

    /** Properties of a ResPullingPlayerData. */
    interface IResPullingPlayerData {

        /** ResPullingPlayerData status */
        status?: (number|null);

        /** ResPullingPlayerData pInfo */
        pInfo?: (proto.IPlayerInfo|null);

        /** ResPullingPlayerData isReConnectGame */
        isReConnectGame?: (number|null);
    }

    /** Represents a ResPullingPlayerData. */
    class ResPullingPlayerData implements IResPullingPlayerData {

        /**
         * Constructs a new ResPullingPlayerData.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IResPullingPlayerData);

        /** ResPullingPlayerData status. */
        public status: number;

        /** ResPullingPlayerData pInfo. */
        public pInfo?: (proto.IPlayerInfo|null);

        /** ResPullingPlayerData isReConnectGame. */
        public isReConnectGame: number;

        /**
         * Encodes the specified ResPullingPlayerData message. Does not implicitly {@link proto.ResPullingPlayerData.verify|verify} messages.
         * @param m ResPullingPlayerData message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IResPullingPlayerData, w?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a ResPullingPlayerData message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns ResPullingPlayerData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): proto.ResPullingPlayerData;
    }

    /** Properties of a ResPullingRank. */
    interface IResPullingRank {

        /** ResPullingRank status */
        status?: (number|null);

        /** ResPullingRank selfIndex */
        selfIndex?: (number|null);

        /** ResPullingRank ranks */
        ranks?: (proto.IRankItem[]|null);
    }

    /** Represents a ResPullingRank. */
    class ResPullingRank implements IResPullingRank {

        /**
         * Constructs a new ResPullingRank.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IResPullingRank);

        /** ResPullingRank status. */
        public status: number;

        /** ResPullingRank selfIndex. */
        public selfIndex: number;

        /** ResPullingRank ranks. */
        public ranks: proto.IRankItem[];

        /**
         * Encodes the specified ResPullingRank message. Does not implicitly {@link proto.ResPullingRank.verify|verify} messages.
         * @param m ResPullingRank message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IResPullingRank, w?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a ResPullingRank message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns ResPullingRank
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): proto.ResPullingRank;
    }

    /** Properties of a ResPullingTaskList. */
    interface IResPullingTaskList {

        /** ResPullingTaskList status */
        status?: (number|null);

        /** ResPullingTaskList tasks */
        tasks?: (proto.ITaskItem[]|null);
    }

    /** Represents a ResPullingTaskList. */
    class ResPullingTaskList implements IResPullingTaskList {

        /**
         * Constructs a new ResPullingTaskList.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IResPullingTaskList);

        /** ResPullingTaskList status. */
        public status: number;

        /** ResPullingTaskList tasks. */
        public tasks: proto.ITaskItem[];

        /**
         * Encodes the specified ResPullingTaskList message. Does not implicitly {@link proto.ResPullingTaskList.verify|verify} messages.
         * @param m ResPullingTaskList message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IResPullingTaskList, w?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a ResPullingTaskList message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns ResPullingTaskList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): proto.ResPullingTaskList;
    }

    /** Properties of a ResReconnRoom. */
    interface IResReconnRoom {

        /** ResReconnRoom room */
        room?: (proto.IResEnterRoom|null);

        /** ResReconnRoom selfSitdown */
        selfSitdown?: (proto.IResSitdown|null);

        /** ResReconnRoom seats */
        seats?: (proto.IResUserArrivedSeat[]|null);
    }

    /** Represents a ResReconnRoom. */
    class ResReconnRoom implements IResReconnRoom {

        /**
         * Constructs a new ResReconnRoom.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IResReconnRoom);

        /** ResReconnRoom room. */
        public room?: (proto.IResEnterRoom|null);

        /** ResReconnRoom selfSitdown. */
        public selfSitdown?: (proto.IResSitdown|null);

        /** ResReconnRoom seats. */
        public seats: proto.IResUserArrivedSeat[];

        /**
         * Encodes the specified ResReconnRoom message. Does not implicitly {@link proto.ResReconnRoom.verify|verify} messages.
         * @param m ResReconnRoom message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IResReconnRoom, w?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a ResReconnRoom message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns ResReconnRoom
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): proto.ResReconnRoom;
    }

    /** Properties of a ResRecvBonues. */
    interface IResRecvBonues {

        /** ResRecvBonues status */
        status?: (number|null);

        /** ResRecvBonues typeId */
        typeId?: (number|null);

        /** ResRecvBonues b1 */
        b1?: (number|null);

        /** ResRecvBonues b2 */
        b2?: (number|null);

        /** ResRecvBonues b3 */
        b3?: (number|null);

        /** ResRecvBonues b4 */
        b4?: (number|null);

        /** ResRecvBonues b5 */
        b5?: (number|null);
    }

    /** Represents a ResRecvBonues. */
    class ResRecvBonues implements IResRecvBonues {

        /**
         * Constructs a new ResRecvBonues.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IResRecvBonues);

        /** ResRecvBonues status. */
        public status: number;

        /** ResRecvBonues typeId. */
        public typeId: number;

        /** ResRecvBonues b1. */
        public b1: number;

        /** ResRecvBonues b2. */
        public b2: number;

        /** ResRecvBonues b3. */
        public b3: number;

        /** ResRecvBonues b4. */
        public b4: number;

        /** ResRecvBonues b5. */
        public b5: number;

        /**
         * Encodes the specified ResRecvBonues message. Does not implicitly {@link proto.ResRecvBonues.verify|verify} messages.
         * @param m ResRecvBonues message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IResRecvBonues, w?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a ResRecvBonues message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns ResRecvBonues
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): proto.ResRecvBonues;
    }

    /** Properties of a ResRecvLoginBonues. */
    interface IResRecvLoginBonues {

        /** ResRecvLoginBonues status */
        status?: (number|null);

        /** ResRecvLoginBonues num */
        num?: (number|null);
    }

    /** Represents a ResRecvLoginBonues. */
    class ResRecvLoginBonues implements IResRecvLoginBonues {

        /**
         * Constructs a new ResRecvLoginBonues.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IResRecvLoginBonues);

        /** ResRecvLoginBonues status. */
        public status: number;

        /** ResRecvLoginBonues num. */
        public num: number;

        /**
         * Encodes the specified ResRecvLoginBonues message. Does not implicitly {@link proto.ResRecvLoginBonues.verify|verify} messages.
         * @param m ResRecvLoginBonues message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IResRecvLoginBonues, w?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a ResRecvLoginBonues message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns ResRecvLoginBonues
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): proto.ResRecvLoginBonues;
    }

    /** Properties of a ResRegisterUser. */
    interface IResRegisterUser {

        /** ResRegisterUser status */
        status?: (number|null);

        /** ResRegisterUser errorStr */
        errorStr?: (string|null);
    }

    /** Represents a ResRegisterUser. */
    class ResRegisterUser implements IResRegisterUser {

        /**
         * Constructs a new ResRegisterUser.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IResRegisterUser);

        /** ResRegisterUser status. */
        public status: number;

        /** ResRegisterUser errorStr. */
        public errorStr: string;

        /**
         * Encodes the specified ResRegisterUser message. Does not implicitly {@link proto.ResRegisterUser.verify|verify} messages.
         * @param m ResRegisterUser message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IResRegisterUser, w?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a ResRegisterUser message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns ResRegisterUser
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): proto.ResRegisterUser;
    }

    /** Properties of a ResRoundCheckOut. */
    interface IResRoundCheckOut {

        /** ResRoundCheckOut reserve */
        reserve?: (number|null);
    }

    /** Represents a ResRoundCheckOut. */
    class ResRoundCheckOut implements IResRoundCheckOut {

        /**
         * Constructs a new ResRoundCheckOut.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IResRoundCheckOut);

        /** ResRoundCheckOut reserve. */
        public reserve: number;

        /**
         * Encodes the specified ResRoundCheckOut message. Does not implicitly {@link proto.ResRoundCheckOut.verify|verify} messages.
         * @param m ResRoundCheckOut message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IResRoundCheckOut, w?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a ResRoundCheckOut message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns ResRoundCheckOut
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): proto.ResRoundCheckOut;
    }

    /** Properties of a ResRoundClear. */
    interface IResRoundClear {

        /** ResRoundClear reserve */
        reserve?: (number|null);
    }

    /** Represents a ResRoundClear. */
    class ResRoundClear implements IResRoundClear {

        /**
         * Constructs a new ResRoundClear.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IResRoundClear);

        /** ResRoundClear reserve. */
        public reserve: number;

        /**
         * Encodes the specified ResRoundClear message. Does not implicitly {@link proto.ResRoundClear.verify|verify} messages.
         * @param m ResRoundClear message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IResRoundClear, w?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a ResRoundClear message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns ResRoundClear
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): proto.ResRoundClear;
    }

    /** Properties of a ResRoundReady. */
    interface IResRoundReady {

        /** ResRoundReady roundTime */
        roundTime?: (number|null);
    }

    /** Represents a ResRoundReady. */
    class ResRoundReady implements IResRoundReady {

        /**
         * Constructs a new ResRoundReady.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IResRoundReady);

        /** ResRoundReady roundTime. */
        public roundTime: number;

        /**
         * Encodes the specified ResRoundReady message. Does not implicitly {@link proto.ResRoundReady.verify|verify} messages.
         * @param m ResRoundReady message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IResRoundReady, w?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a ResRoundReady message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns ResRoundReady
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): proto.ResRoundReady;
    }

    /** Properties of a ResRoundStarted. */
    interface IResRoundStarted {

        /** ResRoundStarted reserve */
        reserve?: (number|null);
    }

    /** Represents a ResRoundStarted. */
    class ResRoundStarted implements IResRoundStarted {

        /**
         * Constructs a new ResRoundStarted.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IResRoundStarted);

        /** ResRoundStarted reserve. */
        public reserve: number;

        /**
         * Encodes the specified ResRoundStarted message. Does not implicitly {@link proto.ResRoundStarted.verify|verify} messages.
         * @param m ResRoundStarted message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IResRoundStarted, w?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a ResRoundStarted message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns ResRoundStarted
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): proto.ResRoundStarted;
    }

    /** Properties of a ResSelectPlayer. */
    interface IResSelectPlayer {

        /** ResSelectPlayer status */
        status?: (number|null);

        /** ResSelectPlayer pInfo */
        pInfo?: (proto.IPlayerInfo|null);

        /** ResSelectPlayer isReConnectGame */
        isReConnectGame?: (number|null);
    }

    /** Represents a ResSelectPlayer. */
    class ResSelectPlayer implements IResSelectPlayer {

        /**
         * Constructs a new ResSelectPlayer.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IResSelectPlayer);

        /** ResSelectPlayer status. */
        public status: number;

        /** ResSelectPlayer pInfo. */
        public pInfo?: (proto.IPlayerInfo|null);

        /** ResSelectPlayer isReConnectGame. */
        public isReConnectGame: number;

        /**
         * Encodes the specified ResSelectPlayer message. Does not implicitly {@link proto.ResSelectPlayer.verify|verify} messages.
         * @param m ResSelectPlayer message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IResSelectPlayer, w?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a ResSelectPlayer message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns ResSelectPlayer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): proto.ResSelectPlayer;
    }

    /** Properties of a ResSitdown. */
    interface IResSitdown {

        /** ResSitdown status */
        status?: (number|null);

        /** ResSitdown seatId */
        seatId?: (number|null);
    }

    /** Represents a ResSitdown. */
    class ResSitdown implements IResSitdown {

        /**
         * Constructs a new ResSitdown.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IResSitdown);

        /** ResSitdown status. */
        public status: number;

        /** ResSitdown seatId. */
        public seatId: number;

        /**
         * Encodes the specified ResSitdown message. Does not implicitly {@link proto.ResSitdown.verify|verify} messages.
         * @param m ResSitdown message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IResSitdown, w?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a ResSitdown message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns ResSitdown
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): proto.ResSitdown;
    }

    /** Properties of a ResStandup. */
    interface IResStandup {

        /** ResStandup status */
        status?: (number|null);
    }

    /** Represents a ResStandup. */
    class ResStandup implements IResStandup {

        /**
         * Constructs a new ResStandup.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IResStandup);

        /** ResStandup status. */
        public status: number;

        /**
         * Encodes the specified ResStandup message. Does not implicitly {@link proto.ResStandup.verify|verify} messages.
         * @param m ResStandup message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IResStandup, w?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a ResStandup message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns ResStandup
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): proto.ResStandup;
    }

    /** Properties of a ResStartBuff. */
    interface IResStartBuff {

        /** ResStartBuff seatOrWorldId */
        seatOrWorldId?: (number|null);

        /** ResStartBuff buffId */
        buffId?: (number|null);
    }

    /** Represents a ResStartBuff. */
    class ResStartBuff implements IResStartBuff {

        /**
         * Constructs a new ResStartBuff.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IResStartBuff);

        /** ResStartBuff seatOrWorldId. */
        public seatOrWorldId: number;

        /** ResStartBuff buffId. */
        public buffId: number;

        /**
         * Encodes the specified ResStartBuff message. Does not implicitly {@link proto.ResStartBuff.verify|verify} messages.
         * @param m ResStartBuff message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IResStartBuff, w?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a ResStartBuff message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns ResStartBuff
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): proto.ResStartBuff;
    }

    /** Properties of a ResStartSkill. */
    interface IResStartSkill {

        /** ResStartSkill seatOrWorldId */
        seatOrWorldId?: (number|null);

        /** ResStartSkill skillId */
        skillId?: (number|null);
    }

    /** Represents a ResStartSkill. */
    class ResStartSkill implements IResStartSkill {

        /**
         * Constructs a new ResStartSkill.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IResStartSkill);

        /** ResStartSkill seatOrWorldId. */
        public seatOrWorldId: number;

        /** ResStartSkill skillId. */
        public skillId: number;

        /**
         * Encodes the specified ResStartSkill message. Does not implicitly {@link proto.ResStartSkill.verify|verify} messages.
         * @param m ResStartSkill message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IResStartSkill, w?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a ResStartSkill message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns ResStartSkill
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): proto.ResStartSkill;
    }

    /** Properties of a ResSyncCharactorStatus. */
    interface IResSyncCharactorStatus {

        /** ResSyncCharactorStatus worldId */
        worldId?: (number|null);

        /** ResSyncCharactorStatus transform */
        transform?: (proto.ICharactorTransform|null);

        /** ResSyncCharactorStatus statusData */
        statusData?: (proto.ISyncStatusData|null);
    }

    /** Represents a ResSyncCharactorStatus. */
    class ResSyncCharactorStatus implements IResSyncCharactorStatus {

        /**
         * Constructs a new ResSyncCharactorStatus.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IResSyncCharactorStatus);

        /** ResSyncCharactorStatus worldId. */
        public worldId: number;

        /** ResSyncCharactorStatus transform. */
        public transform?: (proto.ICharactorTransform|null);

        /** ResSyncCharactorStatus statusData. */
        public statusData?: (proto.ISyncStatusData|null);

        /**
         * Encodes the specified ResSyncCharactorStatus message. Does not implicitly {@link proto.ResSyncCharactorStatus.verify|verify} messages.
         * @param m ResSyncCharactorStatus message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IResSyncCharactorStatus, w?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a ResSyncCharactorStatus message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns ResSyncCharactorStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): proto.ResSyncCharactorStatus;
    }

    /** Properties of a ResTalkMsg. */
    interface IResTalkMsg {

        /** ResTalkMsg roomInViewId */
        roomInViewId?: (number|null);

        /** ResTalkMsg talkType */
        talkType?: (number|null);

        /** ResTalkMsg msgBodyOrAudioUrl */
        msgBodyOrAudioUrl?: (string|null);
    }

    /** Represents a ResTalkMsg. */
    class ResTalkMsg implements IResTalkMsg {

        /**
         * Constructs a new ResTalkMsg.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IResTalkMsg);

        /** ResTalkMsg roomInViewId. */
        public roomInViewId: number;

        /** ResTalkMsg talkType. */
        public talkType: number;

        /** ResTalkMsg msgBodyOrAudioUrl. */
        public msgBodyOrAudioUrl: string;

        /**
         * Encodes the specified ResTalkMsg message. Does not implicitly {@link proto.ResTalkMsg.verify|verify} messages.
         * @param m ResTalkMsg message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IResTalkMsg, w?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a ResTalkMsg message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns ResTalkMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): proto.ResTalkMsg;
    }

    /** Properties of a ResTestGetGoods. */
    interface IResTestGetGoods {

        /** ResTestGetGoods status */
        status?: (number|null);
    }

    /** Represents a ResTestGetGoods. */
    class ResTestGetGoods implements IResTestGetGoods {

        /**
         * Constructs a new ResTestGetGoods.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IResTestGetGoods);

        /** ResTestGetGoods status. */
        public status: number;

        /**
         * Encodes the specified ResTestGetGoods message. Does not implicitly {@link proto.ResTestGetGoods.verify|verify} messages.
         * @param m ResTestGetGoods message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IResTestGetGoods, w?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a ResTestGetGoods message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns ResTestGetGoods
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): proto.ResTestGetGoods;
    }

    /** Properties of a ResTestLogicCmdEcho. */
    interface IResTestLogicCmdEcho {

        /** ResTestLogicCmdEcho content */
        content?: (string|null);
    }

    /** Represents a ResTestLogicCmdEcho. */
    class ResTestLogicCmdEcho implements IResTestLogicCmdEcho {

        /**
         * Constructs a new ResTestLogicCmdEcho.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IResTestLogicCmdEcho);

        /** ResTestLogicCmdEcho content. */
        public content: string;

        /**
         * Encodes the specified ResTestLogicCmdEcho message. Does not implicitly {@link proto.ResTestLogicCmdEcho.verify|verify} messages.
         * @param m ResTestLogicCmdEcho message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IResTestLogicCmdEcho, w?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a ResTestLogicCmdEcho message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns ResTestLogicCmdEcho
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): proto.ResTestLogicCmdEcho;
    }

    /** Properties of a ResTestUpdateGoods. */
    interface IResTestUpdateGoods {

        /** ResTestUpdateGoods status */
        status?: (number|null);
    }

    /** Represents a ResTestUpdateGoods. */
    class ResTestUpdateGoods implements IResTestUpdateGoods {

        /**
         * Constructs a new ResTestUpdateGoods.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IResTestUpdateGoods);

        /** ResTestUpdateGoods status. */
        public status: number;

        /**
         * Encodes the specified ResTestUpdateGoods message. Does not implicitly {@link proto.ResTestUpdateGoods.verify|verify} messages.
         * @param m ResTestUpdateGoods message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IResTestUpdateGoods, w?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a ResTestUpdateGoods message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns ResTestUpdateGoods
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): proto.ResTestUpdateGoods;
    }

    /** Properties of a ResUpdateMailMsg. */
    interface IResUpdateMailMsg {

        /** ResUpdateMailMsg status */
        status?: (number|null);
    }

    /** Represents a ResUpdateMailMsg. */
    class ResUpdateMailMsg implements IResUpdateMailMsg {

        /**
         * Constructs a new ResUpdateMailMsg.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IResUpdateMailMsg);

        /** ResUpdateMailMsg status. */
        public status: number;

        /**
         * Encodes the specified ResUpdateMailMsg message. Does not implicitly {@link proto.ResUpdateMailMsg.verify|verify} messages.
         * @param m ResUpdateMailMsg message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IResUpdateMailMsg, w?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a ResUpdateMailMsg message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns ResUpdateMailMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): proto.ResUpdateMailMsg;
    }

    /** Properties of a ResUserArrivedSeat. */
    interface IResUserArrivedSeat {

        /** ResUserArrivedSeat unick */
        unick?: (string|null);

        /** ResUserArrivedSeat usex */
        usex?: (number|null);

        /** ResUserArrivedSeat uface */
        uface?: (number|null);

        /** ResUserArrivedSeat seatId */
        seatId?: (number|null);

        /** ResUserArrivedSeat playInRoomState */
        playInRoomState?: (number|null);
    }

    /** Represents a ResUserArrivedSeat. */
    class ResUserArrivedSeat implements IResUserArrivedSeat {

        /**
         * Constructs a new ResUserArrivedSeat.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IResUserArrivedSeat);

        /** ResUserArrivedSeat unick. */
        public unick: string;

        /** ResUserArrivedSeat usex. */
        public usex: number;

        /** ResUserArrivedSeat uface. */
        public uface: number;

        /** ResUserArrivedSeat seatId. */
        public seatId: number;

        /** ResUserArrivedSeat playInRoomState. */
        public playInRoomState: number;

        /**
         * Encodes the specified ResUserArrivedSeat message. Does not implicitly {@link proto.ResUserArrivedSeat.verify|verify} messages.
         * @param m ResUserArrivedSeat message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IResUserArrivedSeat, w?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a ResUserArrivedSeat message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns ResUserArrivedSeat
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): proto.ResUserArrivedSeat;
    }

    /** Properties of a ResUserExitSeat. */
    interface IResUserExitSeat {

        /** ResUserExitSeat seatId */
        seatId?: (number|null);
    }

    /** Represents a ResUserExitSeat. */
    class ResUserExitSeat implements IResUserExitSeat {

        /**
         * Constructs a new ResUserExitSeat.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IResUserExitSeat);

        /** ResUserExitSeat seatId. */
        public seatId: number;

        /**
         * Encodes the specified ResUserExitSeat message. Does not implicitly {@link proto.ResUserExitSeat.verify|verify} messages.
         * @param m ResUserExitSeat message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IResUserExitSeat, w?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a ResUserExitSeat message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns ResUserExitSeat
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): proto.ResUserExitSeat;
    }

    /** Properties of a ResUserLogin. */
    interface IResUserLogin {

        /** ResUserLogin status */
        status?: (number|null);

        /** ResUserLogin uinfo */
        uinfo?: (proto.IAccountInfo|null);
    }

    /** Represents a ResUserLogin. */
    class ResUserLogin implements IResUserLogin {

        /**
         * Constructs a new ResUserLogin.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IResUserLogin);

        /** ResUserLogin status. */
        public status: number;

        /** ResUserLogin uinfo. */
        public uinfo?: (proto.IAccountInfo|null);

        /**
         * Encodes the specified ResUserLogin message. Does not implicitly {@link proto.ResUserLogin.verify|verify} messages.
         * @param m ResUserLogin message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IResUserLogin, w?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a ResUserLogin message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns ResUserLogin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): proto.ResUserLogin;
    }

    /** Properties of a SyncStatusData. */
    interface ISyncStatusData {

        /** SyncStatusData status */
        status?: (number|null);
    }

    /** Represents a SyncStatusData. */
    class SyncStatusData implements ISyncStatusData {

        /**
         * Constructs a new SyncStatusData.
         * @param [p] Properties to set
         */
        constructor(p?: proto.ISyncStatusData);

        /** SyncStatusData status. */
        public status: number;

        /**
         * Encodes the specified SyncStatusData message. Does not implicitly {@link proto.SyncStatusData.verify|verify} messages.
         * @param m SyncStatusData message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.ISyncStatusData, w?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a SyncStatusData message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SyncStatusData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): proto.SyncStatusData;
    }

    /** Properties of a TaskItem. */
    interface ITaskItem {

        /** TaskItem status */
        status?: (number|null);

        /** TaskItem taskDesic */
        taskDesic?: (string|null);

        /** TaskItem typeId */
        typeId?: (number|null);
    }

    /** Represents a TaskItem. */
    class TaskItem implements ITaskItem {

        /**
         * Constructs a new TaskItem.
         * @param [p] Properties to set
         */
        constructor(p?: proto.ITaskItem);

        /** TaskItem status. */
        public status: number;

        /** TaskItem taskDesic. */
        public taskDesic: string;

        /** TaskItem typeId. */
        public typeId: number;

        /**
         * Encodes the specified TaskItem message. Does not implicitly {@link proto.TaskItem.verify|verify} messages.
         * @param m TaskItem message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.ITaskItem, w?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a TaskItem message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns TaskItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: (protobuf.Reader|Uint8Array), l?: number): proto.TaskItem;
    }
}

/** Module enum. */
export enum Module {
    GameLogic1 = 1,
    GameLogic2 = 2,
    AUTH = 101,
    PLAYER = 102,
    SCENE = 103,
    ACTIVITY = 104,
    SKILL = 105,
    CHAT = 106,
    LADDER = 501,
    Net = 1001
}
}
export {}