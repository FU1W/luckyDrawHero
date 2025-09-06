// Common aliases
var $Reader = protobuf.Reader, $Writer = protobuf.Writer, $util = protobuf.util;

// Exported root namespace
var $root = protobuf.roots.creator || (protobuf.roots.creator = $util.global);

/**
 * Cmd enum.
 * @exports Cmd
 * @enum {number}
 * @property {number} eGuestLoginReq=1 eGuestLoginReq value
 * @property {number} eGuestLoginRes=2 eGuestLoginRes value
 * @property {number} eRegisterUserReq=3 eRegisterUserReq value
 * @property {number} eRegisterUserRes=4 eRegisterUserRes value
 * @property {number} eUserLoginReq=5 eUserLoginReq value
 * @property {number} eUserLoginRes=6 eUserLoginRes value
 * @property {number} eGuestUpgradeReq=7 eGuestUpgradeReq value
 * @property {number} eGuestUpgradeRes=8 eGuestUpgradeRes value
 * @property {number} ePullingPlayerDataReq=9 ePullingPlayerDataReq value
 * @property {number} ePullingPlayerDataRes=10 ePullingPlayerDataRes value
 * @property {number} eRecvLoginBonuesReq=11 eRecvLoginBonuesReq value
 * @property {number} eRecvLoginBonuesRes=12 eRecvLoginBonuesRes value
 * @property {number} ePullingBonuesListReq=13 ePullingBonuesListReq value
 * @property {number} ePullingBonuesListRes=14 ePullingBonuesListRes value
 * @property {number} eRecvBonuesReq=15 eRecvBonuesReq value
 * @property {number} eRecvBonuesRes=16 eRecvBonuesRes value
 * @property {number} eSelectPlayerReq=17 eSelectPlayerReq value
 * @property {number} eSelectPlayerRes=18 eSelectPlayerRes value
 * @property {number} ePullingTaskListReq=19 ePullingTaskListReq value
 * @property {number} ePullingTaskListRes=20 ePullingTaskListRes value
 * @property {number} ePullingMailMsgReq=21 ePullingMailMsgReq value
 * @property {number} ePullingMailMsgRes=22 ePullingMailMsgRes value
 * @property {number} eUpdateMailMsgReq=23 eUpdateMailMsgReq value
 * @property {number} eUpdategMailMsgRes=24 eUpdategMailMsgRes value
 * @property {number} ePullingRankReq=25 ePullingRankReq value
 * @property {number} ePullingRankRes=26 ePullingRankRes value
 * @property {number} ePullingPackDataReq=27 ePullingPackDataReq value
 * @property {number} ePullingPackDataRes=28 ePullingPackDataRes value
 * @property {number} eExchangeProductReq=29 eExchangeProductReq value
 * @property {number} eExchangeProductRes=30 eExchangeProductRes value
 * @property {number} eEnterLogicServerReq=31 eEnterLogicServerReq value
 * @property {number} eEnterLogicServerRes=32 eEnterLogicServerRes value
 * @property {number} eExitLogicServerReq=33 eExitLogicServerReq value
 * @property {number} eExitLogicServerRes=34 eExitLogicServerRes value
 * @property {number} eSitdownReq=35 eSitdownReq value
 * @property {number} eSitdownRes=36 eSitdownRes value
 * @property {number} eStandupReq=37 eStandupReq value
 * @property {number} eStandupRes=38 eStandupRes value
 * @property {number} eTalkMsgReq=39 eTalkMsgReq value
 * @property {number} eTalkMsgRes=40 eTalkMsgRes value
 * @property {number} ePlayerIsReadyReq=41 ePlayerIsReadyReq value
 * @property {number} ePlayerIsReadyRes=42 ePlayerIsReadyRes value
 * @property {number} ePlayerOptReq=43 ePlayerOptReq value
 * @property {number} ePlayerOptRes=44 ePlayerOptRes value
 * @property {number} eEnterRoomRes=45 eEnterRoomRes value
 * @property {number} eUserArrivedSeatRes=46 eUserArrivedSeatRes value
 * @property {number} eUserExitSeatRes=47 eUserExitSeatRes value
 * @property {number} eRoundReadyRes=48 eRoundReadyRes value
 * @property {number} eRoundStartedRes=49 eRoundStartedRes value
 * @property {number} eRoundCheckOutRes=50 eRoundCheckOutRes value
 * @property {number} eRoundClearRes=51 eRoundClearRes value
 * @property {number} eReconnRoomRes=52 eReconnRoomRes value
 * @property {number} ePlayerEscapeRes=53 ePlayerEscapeRes value
 * @property {number} ePlayerSpawnReq=54 ePlayerSpawnReq value
 * @property {number} ePlayerSpawnRes=55 ePlayerSpawnRes value
 * @property {number} eNavToDstReq=56 eNavToDstReq value
 * @property {number} eNavToDstRes=57 eNavToDstRes value
 * @property {number} eNavInDirReq=58 eNavInDirReq value
 * @property {number} eNavInDirRes=59 eNavInDirRes value
 * @property {number} eStartSkillReq=60 eStartSkillReq value
 * @property {number} eStartSkillRes=61 eStartSkillRes value
 * @property {number} eStartBuffReq=62 eStartBuffReq value
 * @property {number} eStartBuffRes=63 eStartBuffRes value
 * @property {number} eEnterAOIRes=64 eEnterAOIRes value
 * @property {number} eLeaveAOIRes=65 eLeaveAOIRes value
 * @property {number} eSyncCharactorRes=66 eSyncCharactorRes value
 * @property {number} eLostHpRes=67 eLostHpRes value
 * @property {number} eTestGetGoodReq=68 eTestGetGoodReq value
 * @property {number} eTestGetGoodRes=69 eTestGetGoodRes value
 * @property {number} eTestUpdateGoodsReq=70 eTestUpdateGoodsReq value
 * @property {number} eTestUpdateGoddsRes=71 eTestUpdateGoddsRes value
 * @property {number} eTestLogicCmdEchoReq=72 eTestLogicCmdEchoReq value
 * @property {number} eTestLogicCmdEchoRes=73 eTestLogicCmdEchoRes value
 * @property {number} eNetHearbeatMsgReq=74 eNetHearbeatMsgReq value
 * @property {number} eNetHearbeatMsgRes=75 eNetHearbeatMsgRes value
 */
$root.Cmd = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[1] = "eGuestLoginReq"] = 1;
    values[valuesById[2] = "eGuestLoginRes"] = 2;
    values[valuesById[3] = "eRegisterUserReq"] = 3;
    values[valuesById[4] = "eRegisterUserRes"] = 4;
    values[valuesById[5] = "eUserLoginReq"] = 5;
    values[valuesById[6] = "eUserLoginRes"] = 6;
    values[valuesById[7] = "eGuestUpgradeReq"] = 7;
    values[valuesById[8] = "eGuestUpgradeRes"] = 8;
    values[valuesById[9] = "ePullingPlayerDataReq"] = 9;
    values[valuesById[10] = "ePullingPlayerDataRes"] = 10;
    values[valuesById[11] = "eRecvLoginBonuesReq"] = 11;
    values[valuesById[12] = "eRecvLoginBonuesRes"] = 12;
    values[valuesById[13] = "ePullingBonuesListReq"] = 13;
    values[valuesById[14] = "ePullingBonuesListRes"] = 14;
    values[valuesById[15] = "eRecvBonuesReq"] = 15;
    values[valuesById[16] = "eRecvBonuesRes"] = 16;
    values[valuesById[17] = "eSelectPlayerReq"] = 17;
    values[valuesById[18] = "eSelectPlayerRes"] = 18;
    values[valuesById[19] = "ePullingTaskListReq"] = 19;
    values[valuesById[20] = "ePullingTaskListRes"] = 20;
    values[valuesById[21] = "ePullingMailMsgReq"] = 21;
    values[valuesById[22] = "ePullingMailMsgRes"] = 22;
    values[valuesById[23] = "eUpdateMailMsgReq"] = 23;
    values[valuesById[24] = "eUpdategMailMsgRes"] = 24;
    values[valuesById[25] = "ePullingRankReq"] = 25;
    values[valuesById[26] = "ePullingRankRes"] = 26;
    values[valuesById[27] = "ePullingPackDataReq"] = 27;
    values[valuesById[28] = "ePullingPackDataRes"] = 28;
    values[valuesById[29] = "eExchangeProductReq"] = 29;
    values[valuesById[30] = "eExchangeProductRes"] = 30;
    values[valuesById[31] = "eEnterLogicServerReq"] = 31;
    values[valuesById[32] = "eEnterLogicServerRes"] = 32;
    values[valuesById[33] = "eExitLogicServerReq"] = 33;
    values[valuesById[34] = "eExitLogicServerRes"] = 34;
    values[valuesById[35] = "eSitdownReq"] = 35;
    values[valuesById[36] = "eSitdownRes"] = 36;
    values[valuesById[37] = "eStandupReq"] = 37;
    values[valuesById[38] = "eStandupRes"] = 38;
    values[valuesById[39] = "eTalkMsgReq"] = 39;
    values[valuesById[40] = "eTalkMsgRes"] = 40;
    values[valuesById[41] = "ePlayerIsReadyReq"] = 41;
    values[valuesById[42] = "ePlayerIsReadyRes"] = 42;
    values[valuesById[43] = "ePlayerOptReq"] = 43;
    values[valuesById[44] = "ePlayerOptRes"] = 44;
    values[valuesById[45] = "eEnterRoomRes"] = 45;
    values[valuesById[46] = "eUserArrivedSeatRes"] = 46;
    values[valuesById[47] = "eUserExitSeatRes"] = 47;
    values[valuesById[48] = "eRoundReadyRes"] = 48;
    values[valuesById[49] = "eRoundStartedRes"] = 49;
    values[valuesById[50] = "eRoundCheckOutRes"] = 50;
    values[valuesById[51] = "eRoundClearRes"] = 51;
    values[valuesById[52] = "eReconnRoomRes"] = 52;
    values[valuesById[53] = "ePlayerEscapeRes"] = 53;
    values[valuesById[54] = "ePlayerSpawnReq"] = 54;
    values[valuesById[55] = "ePlayerSpawnRes"] = 55;
    values[valuesById[56] = "eNavToDstReq"] = 56;
    values[valuesById[57] = "eNavToDstRes"] = 57;
    values[valuesById[58] = "eNavInDirReq"] = 58;
    values[valuesById[59] = "eNavInDirRes"] = 59;
    values[valuesById[60] = "eStartSkillReq"] = 60;
    values[valuesById[61] = "eStartSkillRes"] = 61;
    values[valuesById[62] = "eStartBuffReq"] = 62;
    values[valuesById[63] = "eStartBuffRes"] = 63;
    values[valuesById[64] = "eEnterAOIRes"] = 64;
    values[valuesById[65] = "eLeaveAOIRes"] = 65;
    values[valuesById[66] = "eSyncCharactorRes"] = 66;
    values[valuesById[67] = "eLostHpRes"] = 67;
    values[valuesById[68] = "eTestGetGoodReq"] = 68;
    values[valuesById[69] = "eTestGetGoodRes"] = 69;
    values[valuesById[70] = "eTestUpdateGoodsReq"] = 70;
    values[valuesById[71] = "eTestUpdateGoddsRes"] = 71;
    values[valuesById[72] = "eTestLogicCmdEchoReq"] = 72;
    values[valuesById[73] = "eTestLogicCmdEchoRes"] = 73;
    values[valuesById[74] = "eNetHearbeatMsgReq"] = 74;
    values[valuesById[75] = "eNetHearbeatMsgRes"] = 75;
    return values;
})();

$root.proto = (function() {

    /**
     * Namespace proto.
     * @exports proto
     * @namespace
     */
    var proto = {};

    proto.AccountInfo = (function() {

        /**
         * Properties of an AccountInfo.
         * @memberof proto
         * @interface IAccountInfo
         * @property {string|null} [unick] AccountInfo unick
         * @property {number|null} [uface] AccountInfo uface
         * @property {number|null} [uvip] AccountInfo uvip
         * @property {number|null} [isGuest] AccountInfo isGuest
         */

        /**
         * Constructs a new AccountInfo.
         * @memberof proto
         * @classdesc Represents an AccountInfo.
         * @implements IAccountInfo
         * @constructor
         * @param {proto.IAccountInfo=} [p] Properties to set
         */
        function AccountInfo(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * AccountInfo unick.
         * @member {string} unick
         * @memberof proto.AccountInfo
         * @instance
         */
        AccountInfo.prototype.unick = "";

        /**
         * AccountInfo uface.
         * @member {number} uface
         * @memberof proto.AccountInfo
         * @instance
         */
        AccountInfo.prototype.uface = 0;

        /**
         * AccountInfo uvip.
         * @member {number} uvip
         * @memberof proto.AccountInfo
         * @instance
         */
        AccountInfo.prototype.uvip = 0;

        /**
         * AccountInfo isGuest.
         * @member {number} isGuest
         * @memberof proto.AccountInfo
         * @instance
         */
        AccountInfo.prototype.isGuest = 0;

        /**
         * Encodes the specified AccountInfo message. Does not implicitly {@link proto.AccountInfo.verify|verify} messages.
         * @function encode
         * @memberof proto.AccountInfo
         * @static
         * @param {proto.IAccountInfo} m AccountInfo message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        AccountInfo.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.unick != null && Object.hasOwnProperty.call(m, "unick"))
                w.uint32(10).string(m.unick);
            if (m.uface != null && Object.hasOwnProperty.call(m, "uface"))
                w.uint32(16).int32(m.uface);
            if (m.uvip != null && Object.hasOwnProperty.call(m, "uvip"))
                w.uint32(24).int32(m.uvip);
            if (m.isGuest != null && Object.hasOwnProperty.call(m, "isGuest"))
                w.uint32(32).int32(m.isGuest);
            return w;
        };

        /**
         * Decodes an AccountInfo message from the specified reader or buffer.
         * @function decode
         * @memberof proto.AccountInfo
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {proto.AccountInfo} AccountInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        AccountInfo.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.proto.AccountInfo();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.unick = r.string();
                    break;
                case 2:
                    m.uface = r.int32();
                    break;
                case 3:
                    m.uvip = r.int32();
                    break;
                case 4:
                    m.isGuest = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return AccountInfo;
    })();

    proto.ArrivedCharactor = (function() {

        /**
         * Properties of an ArrivedCharactor.
         * @memberof proto
         * @interface IArrivedCharactor
         * @property {number|null} [worldId] ArrivedCharactor worldId
         * @property {proto.ICharactorInfo|null} [chInfo] ArrivedCharactor chInfo
         * @property {proto.ICharactorTransform|null} [transform] ArrivedCharactor transform
         * @property {number|null} [status] ArrivedCharactor status
         */

        /**
         * Constructs a new ArrivedCharactor.
         * @memberof proto
         * @classdesc Represents an ArrivedCharactor.
         * @implements IArrivedCharactor
         * @constructor
         * @param {proto.IArrivedCharactor=} [p] Properties to set
         */
        function ArrivedCharactor(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * ArrivedCharactor worldId.
         * @member {number} worldId
         * @memberof proto.ArrivedCharactor
         * @instance
         */
        ArrivedCharactor.prototype.worldId = 0;

        /**
         * ArrivedCharactor chInfo.
         * @member {proto.ICharactorInfo|null|undefined} chInfo
         * @memberof proto.ArrivedCharactor
         * @instance
         */
        ArrivedCharactor.prototype.chInfo = null;

        /**
         * ArrivedCharactor transform.
         * @member {proto.ICharactorTransform|null|undefined} transform
         * @memberof proto.ArrivedCharactor
         * @instance
         */
        ArrivedCharactor.prototype.transform = null;

        /**
         * ArrivedCharactor status.
         * @member {number} status
         * @memberof proto.ArrivedCharactor
         * @instance
         */
        ArrivedCharactor.prototype.status = 0;

        /**
         * Encodes the specified ArrivedCharactor message. Does not implicitly {@link proto.ArrivedCharactor.verify|verify} messages.
         * @function encode
         * @memberof proto.ArrivedCharactor
         * @static
         * @param {proto.IArrivedCharactor} m ArrivedCharactor message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        ArrivedCharactor.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.worldId != null && Object.hasOwnProperty.call(m, "worldId"))
                w.uint32(8).int32(m.worldId);
            if (m.chInfo != null && Object.hasOwnProperty.call(m, "chInfo"))
                $root.proto.CharactorInfo.encode(m.chInfo, w.uint32(18).fork()).ldelim();
            if (m.transform != null && Object.hasOwnProperty.call(m, "transform"))
                $root.proto.CharactorTransform.encode(m.transform, w.uint32(26).fork()).ldelim();
            if (m.status != null && Object.hasOwnProperty.call(m, "status"))
                w.uint32(32).int32(m.status);
            return w;
        };

        /**
         * Decodes an ArrivedCharactor message from the specified reader or buffer.
         * @function decode
         * @memberof proto.ArrivedCharactor
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {proto.ArrivedCharactor} ArrivedCharactor
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        ArrivedCharactor.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.proto.ArrivedCharactor();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.worldId = r.int32();
                    break;
                case 2:
                    m.chInfo = $root.proto.CharactorInfo.decode(r, r.uint32());
                    break;
                case 3:
                    m.transform = $root.proto.CharactorTransform.decode(r, r.uint32());
                    break;
                case 4:
                    m.status = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return ArrivedCharactor;
    })();

    proto.BonuesItem = (function() {

        /**
         * Properties of a BonuesItem.
         * @memberof proto
         * @interface IBonuesItem
         * @property {number|null} [bonuesId] BonuesItem bonuesId
         * @property {string|null} [bonuesDesic] BonuesItem bonuesDesic
         * @property {number|null} [status] BonuesItem status
         * @property {number|null} [typeId] BonuesItem typeId
         */

        /**
         * Constructs a new BonuesItem.
         * @memberof proto
         * @classdesc Represents a BonuesItem.
         * @implements IBonuesItem
         * @constructor
         * @param {proto.IBonuesItem=} [p] Properties to set
         */
        function BonuesItem(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * BonuesItem bonuesId.
         * @member {number} bonuesId
         * @memberof proto.BonuesItem
         * @instance
         */
        BonuesItem.prototype.bonuesId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * BonuesItem bonuesDesic.
         * @member {string} bonuesDesic
         * @memberof proto.BonuesItem
         * @instance
         */
        BonuesItem.prototype.bonuesDesic = "";

        /**
         * BonuesItem status.
         * @member {number} status
         * @memberof proto.BonuesItem
         * @instance
         */
        BonuesItem.prototype.status = 0;

        /**
         * BonuesItem typeId.
         * @member {number} typeId
         * @memberof proto.BonuesItem
         * @instance
         */
        BonuesItem.prototype.typeId = 0;

        /**
         * Encodes the specified BonuesItem message. Does not implicitly {@link proto.BonuesItem.verify|verify} messages.
         * @function encode
         * @memberof proto.BonuesItem
         * @static
         * @param {proto.IBonuesItem} m BonuesItem message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        BonuesItem.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.bonuesId != null && Object.hasOwnProperty.call(m, "bonuesId"))
                w.uint32(8).int64(m.bonuesId);
            if (m.bonuesDesic != null && Object.hasOwnProperty.call(m, "bonuesDesic"))
                w.uint32(18).string(m.bonuesDesic);
            if (m.status != null && Object.hasOwnProperty.call(m, "status"))
                w.uint32(24).int32(m.status);
            if (m.typeId != null && Object.hasOwnProperty.call(m, "typeId"))
                w.uint32(32).int32(m.typeId);
            return w;
        };

        /**
         * Decodes a BonuesItem message from the specified reader or buffer.
         * @function decode
         * @memberof proto.BonuesItem
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {proto.BonuesItem} BonuesItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        BonuesItem.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.proto.BonuesItem();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.bonuesId = r.int64();
                    break;
                case 2:
                    m.bonuesDesic = r.string();
                    break;
                case 3:
                    m.status = r.int32();
                    break;
                case 4:
                    m.typeId = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return BonuesItem;
    })();

    proto.CharactorInfo = (function() {

        /**
         * Properties of a CharactorInfo.
         * @memberof proto
         * @interface ICharactorInfo
         * @property {string|null} [unick] CharactorInfo unick
         * @property {number|null} [job] CharactorInfo job
         * @property {number|null} [sex] CharactorInfo sex
         * @property {number|null} [charactorId] CharactorInfo charactorId
         */

        /**
         * Constructs a new CharactorInfo.
         * @memberof proto
         * @classdesc Represents a CharactorInfo.
         * @implements ICharactorInfo
         * @constructor
         * @param {proto.ICharactorInfo=} [p] Properties to set
         */
        function CharactorInfo(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * CharactorInfo unick.
         * @member {string} unick
         * @memberof proto.CharactorInfo
         * @instance
         */
        CharactorInfo.prototype.unick = "";

        /**
         * CharactorInfo job.
         * @member {number} job
         * @memberof proto.CharactorInfo
         * @instance
         */
        CharactorInfo.prototype.job = 0;

        /**
         * CharactorInfo sex.
         * @member {number} sex
         * @memberof proto.CharactorInfo
         * @instance
         */
        CharactorInfo.prototype.sex = 0;

        /**
         * CharactorInfo charactorId.
         * @member {number} charactorId
         * @memberof proto.CharactorInfo
         * @instance
         */
        CharactorInfo.prototype.charactorId = 0;

        /**
         * Encodes the specified CharactorInfo message. Does not implicitly {@link proto.CharactorInfo.verify|verify} messages.
         * @function encode
         * @memberof proto.CharactorInfo
         * @static
         * @param {proto.ICharactorInfo} m CharactorInfo message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        CharactorInfo.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.unick != null && Object.hasOwnProperty.call(m, "unick"))
                w.uint32(10).string(m.unick);
            if (m.job != null && Object.hasOwnProperty.call(m, "job"))
                w.uint32(16).int32(m.job);
            if (m.sex != null && Object.hasOwnProperty.call(m, "sex"))
                w.uint32(24).int32(m.sex);
            if (m.charactorId != null && Object.hasOwnProperty.call(m, "charactorId"))
                w.uint32(32).int32(m.charactorId);
            return w;
        };

        /**
         * Decodes a CharactorInfo message from the specified reader or buffer.
         * @function decode
         * @memberof proto.CharactorInfo
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {proto.CharactorInfo} CharactorInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        CharactorInfo.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.proto.CharactorInfo();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.unick = r.string();
                    break;
                case 2:
                    m.job = r.int32();
                    break;
                case 3:
                    m.sex = r.int32();
                    break;
                case 4:
                    m.charactorId = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return CharactorInfo;
    })();

    proto.CharactorTransform = (function() {

        /**
         * Properties of a CharactorTransform.
         * @memberof proto
         * @interface ICharactorTransform
         * @property {Array.<number>|null} [pos] CharactorTransform pos
         * @property {Array.<number>|null} [eulerAngles] CharactorTransform eulerAngles
         */

        /**
         * Constructs a new CharactorTransform.
         * @memberof proto
         * @classdesc Represents a CharactorTransform.
         * @implements ICharactorTransform
         * @constructor
         * @param {proto.ICharactorTransform=} [p] Properties to set
         */
        function CharactorTransform(p) {
            this.pos = [];
            this.eulerAngles = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * CharactorTransform pos.
         * @member {Array.<number>} pos
         * @memberof proto.CharactorTransform
         * @instance
         */
        CharactorTransform.prototype.pos = $util.emptyArray;

        /**
         * CharactorTransform eulerAngles.
         * @member {Array.<number>} eulerAngles
         * @memberof proto.CharactorTransform
         * @instance
         */
        CharactorTransform.prototype.eulerAngles = $util.emptyArray;

        /**
         * Encodes the specified CharactorTransform message. Does not implicitly {@link proto.CharactorTransform.verify|verify} messages.
         * @function encode
         * @memberof proto.CharactorTransform
         * @static
         * @param {proto.ICharactorTransform} m CharactorTransform message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        CharactorTransform.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.pos != null && m.pos.length) {
                for (var i = 0; i < m.pos.length; ++i)
                    w.uint32(13).float(m.pos[i]);
            }
            if (m.eulerAngles != null && m.eulerAngles.length) {
                for (var i = 0; i < m.eulerAngles.length; ++i)
                    w.uint32(21).float(m.eulerAngles[i]);
            }
            return w;
        };

        /**
         * Decodes a CharactorTransform message from the specified reader or buffer.
         * @function decode
         * @memberof proto.CharactorTransform
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {proto.CharactorTransform} CharactorTransform
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        CharactorTransform.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.proto.CharactorTransform();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    if (!(m.pos && m.pos.length))
                        m.pos = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.pos.push(r.float());
                    } else
                        m.pos.push(r.float());
                    break;
                case 2:
                    if (!(m.eulerAngles && m.eulerAngles.length))
                        m.eulerAngles = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.eulerAngles.push(r.float());
                    } else
                        m.eulerAngles.push(r.float());
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return CharactorTransform;
    })();

    proto.DicGoodsItem = (function() {

        /**
         * Properties of a DicGoodsItem.
         * @memberof proto
         * @interface IDicGoodsItem
         * @property {number|null} [mainType] DicGoodsItem mainType
         * @property {Array.<proto.IGoodsItem>|null} [Value] DicGoodsItem Value
         */

        /**
         * Constructs a new DicGoodsItem.
         * @memberof proto
         * @classdesc Represents a DicGoodsItem.
         * @implements IDicGoodsItem
         * @constructor
         * @param {proto.IDicGoodsItem=} [p] Properties to set
         */
        function DicGoodsItem(p) {
            this.Value = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * DicGoodsItem mainType.
         * @member {number} mainType
         * @memberof proto.DicGoodsItem
         * @instance
         */
        DicGoodsItem.prototype.mainType = 0;

        /**
         * DicGoodsItem Value.
         * @member {Array.<proto.IGoodsItem>} Value
         * @memberof proto.DicGoodsItem
         * @instance
         */
        DicGoodsItem.prototype.Value = $util.emptyArray;

        /**
         * Encodes the specified DicGoodsItem message. Does not implicitly {@link proto.DicGoodsItem.verify|verify} messages.
         * @function encode
         * @memberof proto.DicGoodsItem
         * @static
         * @param {proto.IDicGoodsItem} m DicGoodsItem message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        DicGoodsItem.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.mainType != null && Object.hasOwnProperty.call(m, "mainType"))
                w.uint32(8).int32(m.mainType);
            if (m.Value != null && m.Value.length) {
                for (var i = 0; i < m.Value.length; ++i)
                    $root.proto.GoodsItem.encode(m.Value[i], w.uint32(18).fork()).ldelim();
            }
            return w;
        };

        /**
         * Decodes a DicGoodsItem message from the specified reader or buffer.
         * @function decode
         * @memberof proto.DicGoodsItem
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {proto.DicGoodsItem} DicGoodsItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        DicGoodsItem.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.proto.DicGoodsItem();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.mainType = r.int32();
                    break;
                case 2:
                    if (!(m.Value && m.Value.length))
                        m.Value = [];
                    m.Value.push($root.proto.GoodsItem.decode(r, r.uint32()));
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return DicGoodsItem;
    })();

    proto.GoodsItem = (function() {

        /**
         * Properties of a GoodsItem.
         * @memberof proto
         * @interface IGoodsItem
         * @property {number|null} [typeId] GoodsItem typeId
         * @property {number|null} [num] GoodsItem num
         * @property {Uint8Array|null} [strengData] GoodsItem strengData
         */

        /**
         * Constructs a new GoodsItem.
         * @memberof proto
         * @classdesc Represents a GoodsItem.
         * @implements IGoodsItem
         * @constructor
         * @param {proto.IGoodsItem=} [p] Properties to set
         */
        function GoodsItem(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * GoodsItem typeId.
         * @member {number} typeId
         * @memberof proto.GoodsItem
         * @instance
         */
        GoodsItem.prototype.typeId = 0;

        /**
         * GoodsItem num.
         * @member {number} num
         * @memberof proto.GoodsItem
         * @instance
         */
        GoodsItem.prototype.num = 0;

        /**
         * GoodsItem strengData.
         * @member {Uint8Array} strengData
         * @memberof proto.GoodsItem
         * @instance
         */
        GoodsItem.prototype.strengData = $util.newBuffer([]);

        /**
         * Encodes the specified GoodsItem message. Does not implicitly {@link proto.GoodsItem.verify|verify} messages.
         * @function encode
         * @memberof proto.GoodsItem
         * @static
         * @param {proto.IGoodsItem} m GoodsItem message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        GoodsItem.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.typeId != null && Object.hasOwnProperty.call(m, "typeId"))
                w.uint32(8).int32(m.typeId);
            if (m.num != null && Object.hasOwnProperty.call(m, "num"))
                w.uint32(16).int32(m.num);
            if (m.strengData != null && Object.hasOwnProperty.call(m, "strengData"))
                w.uint32(26).bytes(m.strengData);
            return w;
        };

        /**
         * Decodes a GoodsItem message from the specified reader or buffer.
         * @function decode
         * @memberof proto.GoodsItem
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {proto.GoodsItem} GoodsItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        GoodsItem.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.proto.GoodsItem();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.typeId = r.int32();
                    break;
                case 2:
                    m.num = r.int32();
                    break;
                case 3:
                    m.strengData = r.bytes();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return GoodsItem;
    })();

    proto.MailMsgItem = (function() {

        /**
         * Properties of a MailMsgItem.
         * @memberof proto
         * @interface IMailMsgItem
         * @property {number|null} [status] MailMsgItem status
         * @property {string|null} [msgBody] MailMsgItem msgBody
         * @property {number|null} [sendTime] MailMsgItem sendTime
         * @property {number|null} [msgId] MailMsgItem msgId
         */

        /**
         * Constructs a new MailMsgItem.
         * @memberof proto
         * @classdesc Represents a MailMsgItem.
         * @implements IMailMsgItem
         * @constructor
         * @param {proto.IMailMsgItem=} [p] Properties to set
         */
        function MailMsgItem(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * MailMsgItem status.
         * @member {number} status
         * @memberof proto.MailMsgItem
         * @instance
         */
        MailMsgItem.prototype.status = 0;

        /**
         * MailMsgItem msgBody.
         * @member {string} msgBody
         * @memberof proto.MailMsgItem
         * @instance
         */
        MailMsgItem.prototype.msgBody = "";

        /**
         * MailMsgItem sendTime.
         * @member {number} sendTime
         * @memberof proto.MailMsgItem
         * @instance
         */
        MailMsgItem.prototype.sendTime = 0;

        /**
         * MailMsgItem msgId.
         * @member {number} msgId
         * @memberof proto.MailMsgItem
         * @instance
         */
        MailMsgItem.prototype.msgId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Encodes the specified MailMsgItem message. Does not implicitly {@link proto.MailMsgItem.verify|verify} messages.
         * @function encode
         * @memberof proto.MailMsgItem
         * @static
         * @param {proto.IMailMsgItem} m MailMsgItem message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        MailMsgItem.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.status != null && Object.hasOwnProperty.call(m, "status"))
                w.uint32(8).int32(m.status);
            if (m.msgBody != null && Object.hasOwnProperty.call(m, "msgBody"))
                w.uint32(18).string(m.msgBody);
            if (m.sendTime != null && Object.hasOwnProperty.call(m, "sendTime"))
                w.uint32(24).int32(m.sendTime);
            if (m.msgId != null && Object.hasOwnProperty.call(m, "msgId"))
                w.uint32(32).int64(m.msgId);
            return w;
        };

        /**
         * Decodes a MailMsgItem message from the specified reader or buffer.
         * @function decode
         * @memberof proto.MailMsgItem
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {proto.MailMsgItem} MailMsgItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        MailMsgItem.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.proto.MailMsgItem();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.status = r.int32();
                    break;
                case 2:
                    m.msgBody = r.string();
                    break;
                case 3:
                    m.sendTime = r.int32();
                    break;
                case 4:
                    m.msgId = r.int64();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return MailMsgItem;
    })();

    proto.PlayerInfo = (function() {

        /**
         * Properties of a PlayerInfo.
         * @memberof proto
         * @interface IPlayerInfo
         * @property {string|null} [unick] PlayerInfo unick
         * @property {number|null} [hp] PlayerInfo hp
         * @property {number|null} [exp] PlayerInfo exp
         * @property {number|null} [mp] PlayerInfo mp
         * @property {number|null} [umoney] PlayerInfo umoney
         * @property {number|null} [ucion] PlayerInfo ucion
         * @property {number|null} [usex] PlayerInfo usex
         * @property {number|null} [hasBonues] PlayerInfo hasBonues
         * @property {number|null} [days] PlayerInfo days
         * @property {number|null} [loginBonues] PlayerInfo loginBonues
         */

        /**
         * Constructs a new PlayerInfo.
         * @memberof proto
         * @classdesc Represents a PlayerInfo.
         * @implements IPlayerInfo
         * @constructor
         * @param {proto.IPlayerInfo=} [p] Properties to set
         */
        function PlayerInfo(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * PlayerInfo unick.
         * @member {string} unick
         * @memberof proto.PlayerInfo
         * @instance
         */
        PlayerInfo.prototype.unick = "";

        /**
         * PlayerInfo hp.
         * @member {number} hp
         * @memberof proto.PlayerInfo
         * @instance
         */
        PlayerInfo.prototype.hp = 0;

        /**
         * PlayerInfo exp.
         * @member {number} exp
         * @memberof proto.PlayerInfo
         * @instance
         */
        PlayerInfo.prototype.exp = 0;

        /**
         * PlayerInfo mp.
         * @member {number} mp
         * @memberof proto.PlayerInfo
         * @instance
         */
        PlayerInfo.prototype.mp = 0;

        /**
         * PlayerInfo umoney.
         * @member {number} umoney
         * @memberof proto.PlayerInfo
         * @instance
         */
        PlayerInfo.prototype.umoney = 0;

        /**
         * PlayerInfo ucion.
         * @member {number} ucion
         * @memberof proto.PlayerInfo
         * @instance
         */
        PlayerInfo.prototype.ucion = 0;

        /**
         * PlayerInfo usex.
         * @member {number} usex
         * @memberof proto.PlayerInfo
         * @instance
         */
        PlayerInfo.prototype.usex = 0;

        /**
         * PlayerInfo hasBonues.
         * @member {number} hasBonues
         * @memberof proto.PlayerInfo
         * @instance
         */
        PlayerInfo.prototype.hasBonues = 0;

        /**
         * PlayerInfo days.
         * @member {number} days
         * @memberof proto.PlayerInfo
         * @instance
         */
        PlayerInfo.prototype.days = 0;

        /**
         * PlayerInfo loginBonues.
         * @member {number} loginBonues
         * @memberof proto.PlayerInfo
         * @instance
         */
        PlayerInfo.prototype.loginBonues = 0;

        /**
         * Encodes the specified PlayerInfo message. Does not implicitly {@link proto.PlayerInfo.verify|verify} messages.
         * @function encode
         * @memberof proto.PlayerInfo
         * @static
         * @param {proto.IPlayerInfo} m PlayerInfo message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        PlayerInfo.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.unick != null && Object.hasOwnProperty.call(m, "unick"))
                w.uint32(10).string(m.unick);
            if (m.hp != null && Object.hasOwnProperty.call(m, "hp"))
                w.uint32(16).int32(m.hp);
            if (m.exp != null && Object.hasOwnProperty.call(m, "exp"))
                w.uint32(24).int32(m.exp);
            if (m.mp != null && Object.hasOwnProperty.call(m, "mp"))
                w.uint32(32).int32(m.mp);
            if (m.umoney != null && Object.hasOwnProperty.call(m, "umoney"))
                w.uint32(40).int32(m.umoney);
            if (m.ucion != null && Object.hasOwnProperty.call(m, "ucion"))
                w.uint32(48).int32(m.ucion);
            if (m.usex != null && Object.hasOwnProperty.call(m, "usex"))
                w.uint32(56).int32(m.usex);
            if (m.hasBonues != null && Object.hasOwnProperty.call(m, "hasBonues"))
                w.uint32(64).int32(m.hasBonues);
            if (m.days != null && Object.hasOwnProperty.call(m, "days"))
                w.uint32(72).int32(m.days);
            if (m.loginBonues != null && Object.hasOwnProperty.call(m, "loginBonues"))
                w.uint32(80).int32(m.loginBonues);
            return w;
        };

        /**
         * Decodes a PlayerInfo message from the specified reader or buffer.
         * @function decode
         * @memberof proto.PlayerInfo
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {proto.PlayerInfo} PlayerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        PlayerInfo.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.proto.PlayerInfo();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.unick = r.string();
                    break;
                case 2:
                    m.hp = r.int32();
                    break;
                case 3:
                    m.exp = r.int32();
                    break;
                case 4:
                    m.mp = r.int32();
                    break;
                case 5:
                    m.umoney = r.int32();
                    break;
                case 6:
                    m.ucion = r.int32();
                    break;
                case 7:
                    m.usex = r.int32();
                    break;
                case 8:
                    m.hasBonues = r.int32();
                    break;
                case 9:
                    m.days = r.int32();
                    break;
                case 10:
                    m.loginBonues = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return PlayerInfo;
    })();

    proto.RankItem = (function() {

        /**
         * Properties of a RankItem.
         * @memberof proto
         * @interface IRankItem
         * @property {string|null} [unick] RankItem unick
         * @property {number|null} [value] RankItem value
         * @property {number|null} [uface] RankItem uface
         */

        /**
         * Constructs a new RankItem.
         * @memberof proto
         * @classdesc Represents a RankItem.
         * @implements IRankItem
         * @constructor
         * @param {proto.IRankItem=} [p] Properties to set
         */
        function RankItem(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * RankItem unick.
         * @member {string} unick
         * @memberof proto.RankItem
         * @instance
         */
        RankItem.prototype.unick = "";

        /**
         * RankItem value.
         * @member {number} value
         * @memberof proto.RankItem
         * @instance
         */
        RankItem.prototype.value = 0;

        /**
         * RankItem uface.
         * @member {number} uface
         * @memberof proto.RankItem
         * @instance
         */
        RankItem.prototype.uface = 0;

        /**
         * Encodes the specified RankItem message. Does not implicitly {@link proto.RankItem.verify|verify} messages.
         * @function encode
         * @memberof proto.RankItem
         * @static
         * @param {proto.IRankItem} m RankItem message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        RankItem.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.unick != null && Object.hasOwnProperty.call(m, "unick"))
                w.uint32(10).string(m.unick);
            if (m.value != null && Object.hasOwnProperty.call(m, "value"))
                w.uint32(16).int32(m.value);
            if (m.uface != null && Object.hasOwnProperty.call(m, "uface"))
                w.uint32(24).int32(m.uface);
            return w;
        };

        /**
         * Decodes a RankItem message from the specified reader or buffer.
         * @function decode
         * @memberof proto.RankItem
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {proto.RankItem} RankItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        RankItem.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.proto.RankItem();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.unick = r.string();
                    break;
                case 2:
                    m.value = r.int32();
                    break;
                case 3:
                    m.uface = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return RankItem;
    })();

    proto.ReqEnterLogicServer = (function() {

        /**
         * Properties of a ReqEnterLogicServer.
         * @memberof proto
         * @interface IReqEnterLogicServer
         * @property {number|null} [typeId] ReqEnterLogicServer typeId
         * @property {number|null} [zoneId] ReqEnterLogicServer zoneId
         * @property {number|null} [instId] ReqEnterLogicServer instId
         */

        /**
         * Constructs a new ReqEnterLogicServer.
         * @memberof proto
         * @classdesc Represents a ReqEnterLogicServer.
         * @implements IReqEnterLogicServer
         * @constructor
         * @param {proto.IReqEnterLogicServer=} [p] Properties to set
         */
        function ReqEnterLogicServer(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * ReqEnterLogicServer typeId.
         * @member {number} typeId
         * @memberof proto.ReqEnterLogicServer
         * @instance
         */
        ReqEnterLogicServer.prototype.typeId = 0;

        /**
         * ReqEnterLogicServer zoneId.
         * @member {number} zoneId
         * @memberof proto.ReqEnterLogicServer
         * @instance
         */
        ReqEnterLogicServer.prototype.zoneId = 0;

        /**
         * ReqEnterLogicServer instId.
         * @member {number} instId
         * @memberof proto.ReqEnterLogicServer
         * @instance
         */
        ReqEnterLogicServer.prototype.instId = 0;

        /**
         * Encodes the specified ReqEnterLogicServer message. Does not implicitly {@link proto.ReqEnterLogicServer.verify|verify} messages.
         * @function encode
         * @memberof proto.ReqEnterLogicServer
         * @static
         * @param {proto.IReqEnterLogicServer} m ReqEnterLogicServer message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        ReqEnterLogicServer.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.typeId != null && Object.hasOwnProperty.call(m, "typeId"))
                w.uint32(8).int32(m.typeId);
            if (m.zoneId != null && Object.hasOwnProperty.call(m, "zoneId"))
                w.uint32(16).int32(m.zoneId);
            if (m.instId != null && Object.hasOwnProperty.call(m, "instId"))
                w.uint32(24).int32(m.instId);
            return w;
        };

        /**
         * Decodes a ReqEnterLogicServer message from the specified reader or buffer.
         * @function decode
         * @memberof proto.ReqEnterLogicServer
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {proto.ReqEnterLogicServer} ReqEnterLogicServer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        ReqEnterLogicServer.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.proto.ReqEnterLogicServer();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.typeId = r.int32();
                    break;
                case 2:
                    m.zoneId = r.int32();
                    break;
                case 3:
                    m.instId = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return ReqEnterLogicServer;
    })();

    proto.ReqExchangeProduct = (function() {

        /**
         * Properties of a ReqExchangeProduct.
         * @memberof proto
         * @interface IReqExchangeProduct
         * @property {number|null} [productId] ReqExchangeProduct productId
         */

        /**
         * Constructs a new ReqExchangeProduct.
         * @memberof proto
         * @classdesc Represents a ReqExchangeProduct.
         * @implements IReqExchangeProduct
         * @constructor
         * @param {proto.IReqExchangeProduct=} [p] Properties to set
         */
        function ReqExchangeProduct(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * ReqExchangeProduct productId.
         * @member {number} productId
         * @memberof proto.ReqExchangeProduct
         * @instance
         */
        ReqExchangeProduct.prototype.productId = 0;

        /**
         * Encodes the specified ReqExchangeProduct message. Does not implicitly {@link proto.ReqExchangeProduct.verify|verify} messages.
         * @function encode
         * @memberof proto.ReqExchangeProduct
         * @static
         * @param {proto.IReqExchangeProduct} m ReqExchangeProduct message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        ReqExchangeProduct.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.productId != null && Object.hasOwnProperty.call(m, "productId"))
                w.uint32(8).int32(m.productId);
            return w;
        };

        /**
         * Decodes a ReqExchangeProduct message from the specified reader or buffer.
         * @function decode
         * @memberof proto.ReqExchangeProduct
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {proto.ReqExchangeProduct} ReqExchangeProduct
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        ReqExchangeProduct.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.proto.ReqExchangeProduct();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.productId = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return ReqExchangeProduct;
    })();

    proto.ReqExitLogicServer = (function() {

        /**
         * Properties of a ReqExitLogicServer.
         * @memberof proto
         * @interface IReqExitLogicServer
         * @property {number|null} [quitReason] ReqExitLogicServer quitReason
         */

        /**
         * Constructs a new ReqExitLogicServer.
         * @memberof proto
         * @classdesc Represents a ReqExitLogicServer.
         * @implements IReqExitLogicServer
         * @constructor
         * @param {proto.IReqExitLogicServer=} [p] Properties to set
         */
        function ReqExitLogicServer(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * ReqExitLogicServer quitReason.
         * @member {number} quitReason
         * @memberof proto.ReqExitLogicServer
         * @instance
         */
        ReqExitLogicServer.prototype.quitReason = 0;

        /**
         * Encodes the specified ReqExitLogicServer message. Does not implicitly {@link proto.ReqExitLogicServer.verify|verify} messages.
         * @function encode
         * @memberof proto.ReqExitLogicServer
         * @static
         * @param {proto.IReqExitLogicServer} m ReqExitLogicServer message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        ReqExitLogicServer.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.quitReason != null && Object.hasOwnProperty.call(m, "quitReason"))
                w.uint32(8).int32(m.quitReason);
            return w;
        };

        /**
         * Decodes a ReqExitLogicServer message from the specified reader or buffer.
         * @function decode
         * @memberof proto.ReqExitLogicServer
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {proto.ReqExitLogicServer} ReqExitLogicServer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        ReqExitLogicServer.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.proto.ReqExitLogicServer();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.quitReason = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return ReqExitLogicServer;
    })();

    proto.ReqGuestLogin = (function() {

        /**
         * Properties of a ReqGuestLogin.
         * @memberof proto
         * @interface IReqGuestLogin
         * @property {string|null} [guestKey] ReqGuestLogin guestKey
         * @property {number|null} [channal] ReqGuestLogin channal
         */

        /**
         * Constructs a new ReqGuestLogin.
         * @memberof proto
         * @classdesc Represents a ReqGuestLogin.
         * @implements IReqGuestLogin
         * @constructor
         * @param {proto.IReqGuestLogin=} [p] Properties to set
         */
        function ReqGuestLogin(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * ReqGuestLogin guestKey.
         * @member {string} guestKey
         * @memberof proto.ReqGuestLogin
         * @instance
         */
        ReqGuestLogin.prototype.guestKey = "";

        /**
         * ReqGuestLogin channal.
         * @member {number} channal
         * @memberof proto.ReqGuestLogin
         * @instance
         */
        ReqGuestLogin.prototype.channal = 0;

        /**
         * Encodes the specified ReqGuestLogin message. Does not implicitly {@link proto.ReqGuestLogin.verify|verify} messages.
         * @function encode
         * @memberof proto.ReqGuestLogin
         * @static
         * @param {proto.IReqGuestLogin} m ReqGuestLogin message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        ReqGuestLogin.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.guestKey != null && Object.hasOwnProperty.call(m, "guestKey"))
                w.uint32(10).string(m.guestKey);
            if (m.channal != null && Object.hasOwnProperty.call(m, "channal"))
                w.uint32(16).int32(m.channal);
            return w;
        };

        /**
         * Decodes a ReqGuestLogin message from the specified reader or buffer.
         * @function decode
         * @memberof proto.ReqGuestLogin
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {proto.ReqGuestLogin} ReqGuestLogin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        ReqGuestLogin.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.proto.ReqGuestLogin();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.guestKey = r.string();
                    break;
                case 2:
                    m.channal = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return ReqGuestLogin;
    })();

    proto.ReqGuestUpgrade = (function() {

        /**
         * Properties of a ReqGuestUpgrade.
         * @memberof proto
         * @interface IReqGuestUpgrade
         * @property {string|null} [uname] ReqGuestUpgrade uname
         * @property {string|null} [upwd] ReqGuestUpgrade upwd
         * @property {string|null} [unick] ReqGuestUpgrade unick
         */

        /**
         * Constructs a new ReqGuestUpgrade.
         * @memberof proto
         * @classdesc Represents a ReqGuestUpgrade.
         * @implements IReqGuestUpgrade
         * @constructor
         * @param {proto.IReqGuestUpgrade=} [p] Properties to set
         */
        function ReqGuestUpgrade(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * ReqGuestUpgrade uname.
         * @member {string} uname
         * @memberof proto.ReqGuestUpgrade
         * @instance
         */
        ReqGuestUpgrade.prototype.uname = "";

        /**
         * ReqGuestUpgrade upwd.
         * @member {string} upwd
         * @memberof proto.ReqGuestUpgrade
         * @instance
         */
        ReqGuestUpgrade.prototype.upwd = "";

        /**
         * ReqGuestUpgrade unick.
         * @member {string} unick
         * @memberof proto.ReqGuestUpgrade
         * @instance
         */
        ReqGuestUpgrade.prototype.unick = "";

        /**
         * Encodes the specified ReqGuestUpgrade message. Does not implicitly {@link proto.ReqGuestUpgrade.verify|verify} messages.
         * @function encode
         * @memberof proto.ReqGuestUpgrade
         * @static
         * @param {proto.IReqGuestUpgrade} m ReqGuestUpgrade message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        ReqGuestUpgrade.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.uname != null && Object.hasOwnProperty.call(m, "uname"))
                w.uint32(10).string(m.uname);
            if (m.upwd != null && Object.hasOwnProperty.call(m, "upwd"))
                w.uint32(18).string(m.upwd);
            if (m.unick != null && Object.hasOwnProperty.call(m, "unick"))
                w.uint32(26).string(m.unick);
            return w;
        };

        /**
         * Decodes a ReqGuestUpgrade message from the specified reader or buffer.
         * @function decode
         * @memberof proto.ReqGuestUpgrade
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {proto.ReqGuestUpgrade} ReqGuestUpgrade
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        ReqGuestUpgrade.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.proto.ReqGuestUpgrade();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.uname = r.string();
                    break;
                case 2:
                    m.upwd = r.string();
                    break;
                case 3:
                    m.unick = r.string();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return ReqGuestUpgrade;
    })();

    proto.ReqNavInDir = (function() {

        /**
         * Properties of a ReqNavInDir.
         * @memberof proto
         * @interface IReqNavInDir
         * @property {number|null} [dirx] ReqNavInDir dirx
         * @property {number|null} [diry] ReqNavInDir diry
         */

        /**
         * Constructs a new ReqNavInDir.
         * @memberof proto
         * @classdesc Represents a ReqNavInDir.
         * @implements IReqNavInDir
         * @constructor
         * @param {proto.IReqNavInDir=} [p] Properties to set
         */
        function ReqNavInDir(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * ReqNavInDir dirx.
         * @member {number} dirx
         * @memberof proto.ReqNavInDir
         * @instance
         */
        ReqNavInDir.prototype.dirx = 0;

        /**
         * ReqNavInDir diry.
         * @member {number} diry
         * @memberof proto.ReqNavInDir
         * @instance
         */
        ReqNavInDir.prototype.diry = 0;

        /**
         * Encodes the specified ReqNavInDir message. Does not implicitly {@link proto.ReqNavInDir.verify|verify} messages.
         * @function encode
         * @memberof proto.ReqNavInDir
         * @static
         * @param {proto.IReqNavInDir} m ReqNavInDir message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        ReqNavInDir.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.dirx != null && Object.hasOwnProperty.call(m, "dirx"))
                w.uint32(8).int32(m.dirx);
            if (m.diry != null && Object.hasOwnProperty.call(m, "diry"))
                w.uint32(16).int32(m.diry);
            return w;
        };

        /**
         * Decodes a ReqNavInDir message from the specified reader or buffer.
         * @function decode
         * @memberof proto.ReqNavInDir
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {proto.ReqNavInDir} ReqNavInDir
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        ReqNavInDir.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.proto.ReqNavInDir();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.dirx = r.int32();
                    break;
                case 2:
                    m.diry = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return ReqNavInDir;
    })();

    proto.ReqNavToDst = (function() {

        /**
         * Properties of a ReqNavToDst.
         * @memberof proto
         * @interface IReqNavToDst
         * @property {number|null} [x] ReqNavToDst x
         * @property {number|null} [y] ReqNavToDst y
         * @property {number|null} [z] ReqNavToDst z
         */

        /**
         * Constructs a new ReqNavToDst.
         * @memberof proto
         * @classdesc Represents a ReqNavToDst.
         * @implements IReqNavToDst
         * @constructor
         * @param {proto.IReqNavToDst=} [p] Properties to set
         */
        function ReqNavToDst(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * ReqNavToDst x.
         * @member {number} x
         * @memberof proto.ReqNavToDst
         * @instance
         */
        ReqNavToDst.prototype.x = 0;

        /**
         * ReqNavToDst y.
         * @member {number} y
         * @memberof proto.ReqNavToDst
         * @instance
         */
        ReqNavToDst.prototype.y = 0;

        /**
         * ReqNavToDst z.
         * @member {number} z
         * @memberof proto.ReqNavToDst
         * @instance
         */
        ReqNavToDst.prototype.z = 0;

        /**
         * Encodes the specified ReqNavToDst message. Does not implicitly {@link proto.ReqNavToDst.verify|verify} messages.
         * @function encode
         * @memberof proto.ReqNavToDst
         * @static
         * @param {proto.IReqNavToDst} m ReqNavToDst message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        ReqNavToDst.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.x != null && Object.hasOwnProperty.call(m, "x"))
                w.uint32(13).float(m.x);
            if (m.y != null && Object.hasOwnProperty.call(m, "y"))
                w.uint32(21).float(m.y);
            if (m.z != null && Object.hasOwnProperty.call(m, "z"))
                w.uint32(29).float(m.z);
            return w;
        };

        /**
         * Decodes a ReqNavToDst message from the specified reader or buffer.
         * @function decode
         * @memberof proto.ReqNavToDst
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {proto.ReqNavToDst} ReqNavToDst
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        ReqNavToDst.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.proto.ReqNavToDst();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.x = r.float();
                    break;
                case 2:
                    m.y = r.float();
                    break;
                case 3:
                    m.z = r.float();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return ReqNavToDst;
    })();

    proto.ReqNetHearbeatMsg = (function() {

        /**
         * Properties of a ReqNetHearbeatMsg.
         * @memberof proto
         * @interface IReqNetHearbeatMsg
         * @property {string|null} [content] ReqNetHearbeatMsg content
         */

        /**
         * Constructs a new ReqNetHearbeatMsg.
         * @memberof proto
         * @classdesc Represents a ReqNetHearbeatMsg.
         * @implements IReqNetHearbeatMsg
         * @constructor
         * @param {proto.IReqNetHearbeatMsg=} [p] Properties to set
         */
        function ReqNetHearbeatMsg(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * ReqNetHearbeatMsg content.
         * @member {string} content
         * @memberof proto.ReqNetHearbeatMsg
         * @instance
         */
        ReqNetHearbeatMsg.prototype.content = "";

        /**
         * Encodes the specified ReqNetHearbeatMsg message. Does not implicitly {@link proto.ReqNetHearbeatMsg.verify|verify} messages.
         * @function encode
         * @memberof proto.ReqNetHearbeatMsg
         * @static
         * @param {proto.IReqNetHearbeatMsg} m ReqNetHearbeatMsg message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        ReqNetHearbeatMsg.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.content != null && Object.hasOwnProperty.call(m, "content"))
                w.uint32(10).string(m.content);
            return w;
        };

        /**
         * Decodes a ReqNetHearbeatMsg message from the specified reader or buffer.
         * @function decode
         * @memberof proto.ReqNetHearbeatMsg
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {proto.ReqNetHearbeatMsg} ReqNetHearbeatMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        ReqNetHearbeatMsg.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.proto.ReqNetHearbeatMsg();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.content = r.string();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return ReqNetHearbeatMsg;
    })();

    proto.ReqPlayerIsReady = (function() {

        /**
         * Properties of a ReqPlayerIsReady.
         * @memberof proto
         * @interface IReqPlayerIsReady
         * @property {number|null} [reserve] ReqPlayerIsReady reserve
         */

        /**
         * Constructs a new ReqPlayerIsReady.
         * @memberof proto
         * @classdesc Represents a ReqPlayerIsReady.
         * @implements IReqPlayerIsReady
         * @constructor
         * @param {proto.IReqPlayerIsReady=} [p] Properties to set
         */
        function ReqPlayerIsReady(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * ReqPlayerIsReady reserve.
         * @member {number} reserve
         * @memberof proto.ReqPlayerIsReady
         * @instance
         */
        ReqPlayerIsReady.prototype.reserve = 0;

        /**
         * Encodes the specified ReqPlayerIsReady message. Does not implicitly {@link proto.ReqPlayerIsReady.verify|verify} messages.
         * @function encode
         * @memberof proto.ReqPlayerIsReady
         * @static
         * @param {proto.IReqPlayerIsReady} m ReqPlayerIsReady message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        ReqPlayerIsReady.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.reserve != null && Object.hasOwnProperty.call(m, "reserve"))
                w.uint32(8).int32(m.reserve);
            return w;
        };

        /**
         * Decodes a ReqPlayerIsReady message from the specified reader or buffer.
         * @function decode
         * @memberof proto.ReqPlayerIsReady
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {proto.ReqPlayerIsReady} ReqPlayerIsReady
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        ReqPlayerIsReady.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.proto.ReqPlayerIsReady();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.reserve = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return ReqPlayerIsReady;
    })();

    proto.ReqPlayerOpt = (function() {

        /**
         * Properties of a ReqPlayerOpt.
         * @memberof proto
         * @interface IReqPlayerOpt
         * @property {number|null} [optType] ReqPlayerOpt optType
         * @property {number|null} [v1] ReqPlayerOpt v1
         * @property {number|null} [v2] ReqPlayerOpt v2
         * @property {number|null} [v3] ReqPlayerOpt v3
         */

        /**
         * Constructs a new ReqPlayerOpt.
         * @memberof proto
         * @classdesc Represents a ReqPlayerOpt.
         * @implements IReqPlayerOpt
         * @constructor
         * @param {proto.IReqPlayerOpt=} [p] Properties to set
         */
        function ReqPlayerOpt(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * ReqPlayerOpt optType.
         * @member {number} optType
         * @memberof proto.ReqPlayerOpt
         * @instance
         */
        ReqPlayerOpt.prototype.optType = 0;

        /**
         * ReqPlayerOpt v1.
         * @member {number} v1
         * @memberof proto.ReqPlayerOpt
         * @instance
         */
        ReqPlayerOpt.prototype.v1 = 0;

        /**
         * ReqPlayerOpt v2.
         * @member {number} v2
         * @memberof proto.ReqPlayerOpt
         * @instance
         */
        ReqPlayerOpt.prototype.v2 = 0;

        /**
         * ReqPlayerOpt v3.
         * @member {number} v3
         * @memberof proto.ReqPlayerOpt
         * @instance
         */
        ReqPlayerOpt.prototype.v3 = 0;

        /**
         * Encodes the specified ReqPlayerOpt message. Does not implicitly {@link proto.ReqPlayerOpt.verify|verify} messages.
         * @function encode
         * @memberof proto.ReqPlayerOpt
         * @static
         * @param {proto.IReqPlayerOpt} m ReqPlayerOpt message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        ReqPlayerOpt.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.optType != null && Object.hasOwnProperty.call(m, "optType"))
                w.uint32(8).int32(m.optType);
            if (m.v1 != null && Object.hasOwnProperty.call(m, "v1"))
                w.uint32(16).int32(m.v1);
            if (m.v2 != null && Object.hasOwnProperty.call(m, "v2"))
                w.uint32(24).int32(m.v2);
            if (m.v3 != null && Object.hasOwnProperty.call(m, "v3"))
                w.uint32(32).int32(m.v3);
            return w;
        };

        /**
         * Decodes a ReqPlayerOpt message from the specified reader or buffer.
         * @function decode
         * @memberof proto.ReqPlayerOpt
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {proto.ReqPlayerOpt} ReqPlayerOpt
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        ReqPlayerOpt.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.proto.ReqPlayerOpt();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.optType = r.int32();
                    break;
                case 2:
                    m.v1 = r.int32();
                    break;
                case 3:
                    m.v2 = r.int32();
                    break;
                case 4:
                    m.v3 = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return ReqPlayerOpt;
    })();

    proto.ReqPlayerSpawn = (function() {

        /**
         * Properties of a ReqPlayerSpawn.
         * @memberof proto
         * @interface IReqPlayerSpawn
         * @property {number|null} [SpawnPoint] ReqPlayerSpawn SpawnPoint
         */

        /**
         * Constructs a new ReqPlayerSpawn.
         * @memberof proto
         * @classdesc Represents a ReqPlayerSpawn.
         * @implements IReqPlayerSpawn
         * @constructor
         * @param {proto.IReqPlayerSpawn=} [p] Properties to set
         */
        function ReqPlayerSpawn(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * ReqPlayerSpawn SpawnPoint.
         * @member {number} SpawnPoint
         * @memberof proto.ReqPlayerSpawn
         * @instance
         */
        ReqPlayerSpawn.prototype.SpawnPoint = 0;

        /**
         * Encodes the specified ReqPlayerSpawn message. Does not implicitly {@link proto.ReqPlayerSpawn.verify|verify} messages.
         * @function encode
         * @memberof proto.ReqPlayerSpawn
         * @static
         * @param {proto.IReqPlayerSpawn} m ReqPlayerSpawn message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        ReqPlayerSpawn.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.SpawnPoint != null && Object.hasOwnProperty.call(m, "SpawnPoint"))
                w.uint32(8).int32(m.SpawnPoint);
            return w;
        };

        /**
         * Decodes a ReqPlayerSpawn message from the specified reader or buffer.
         * @function decode
         * @memberof proto.ReqPlayerSpawn
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {proto.ReqPlayerSpawn} ReqPlayerSpawn
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        ReqPlayerSpawn.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.proto.ReqPlayerSpawn();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.SpawnPoint = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return ReqPlayerSpawn;
    })();

    proto.ReqPullingBonuesList = (function() {

        /**
         * Properties of a ReqPullingBonuesList.
         * @memberof proto
         * @interface IReqPullingBonuesList
         * @property {number|null} [typeId] ReqPullingBonuesList typeId
         */

        /**
         * Constructs a new ReqPullingBonuesList.
         * @memberof proto
         * @classdesc Represents a ReqPullingBonuesList.
         * @implements IReqPullingBonuesList
         * @constructor
         * @param {proto.IReqPullingBonuesList=} [p] Properties to set
         */
        function ReqPullingBonuesList(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * ReqPullingBonuesList typeId.
         * @member {number} typeId
         * @memberof proto.ReqPullingBonuesList
         * @instance
         */
        ReqPullingBonuesList.prototype.typeId = 0;

        /**
         * Encodes the specified ReqPullingBonuesList message. Does not implicitly {@link proto.ReqPullingBonuesList.verify|verify} messages.
         * @function encode
         * @memberof proto.ReqPullingBonuesList
         * @static
         * @param {proto.IReqPullingBonuesList} m ReqPullingBonuesList message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        ReqPullingBonuesList.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.typeId != null && Object.hasOwnProperty.call(m, "typeId"))
                w.uint32(8).int32(m.typeId);
            return w;
        };

        /**
         * Decodes a ReqPullingBonuesList message from the specified reader or buffer.
         * @function decode
         * @memberof proto.ReqPullingBonuesList
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {proto.ReqPullingBonuesList} ReqPullingBonuesList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        ReqPullingBonuesList.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.proto.ReqPullingBonuesList();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.typeId = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return ReqPullingBonuesList;
    })();

    proto.ReqPullingMailMsg = (function() {

        /**
         * Properties of a ReqPullingMailMsg.
         * @memberof proto
         * @interface IReqPullingMailMsg
         * @property {number|null} [typeId] ReqPullingMailMsg typeId
         */

        /**
         * Constructs a new ReqPullingMailMsg.
         * @memberof proto
         * @classdesc Represents a ReqPullingMailMsg.
         * @implements IReqPullingMailMsg
         * @constructor
         * @param {proto.IReqPullingMailMsg=} [p] Properties to set
         */
        function ReqPullingMailMsg(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * ReqPullingMailMsg typeId.
         * @member {number} typeId
         * @memberof proto.ReqPullingMailMsg
         * @instance
         */
        ReqPullingMailMsg.prototype.typeId = 0;

        /**
         * Encodes the specified ReqPullingMailMsg message. Does not implicitly {@link proto.ReqPullingMailMsg.verify|verify} messages.
         * @function encode
         * @memberof proto.ReqPullingMailMsg
         * @static
         * @param {proto.IReqPullingMailMsg} m ReqPullingMailMsg message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        ReqPullingMailMsg.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.typeId != null && Object.hasOwnProperty.call(m, "typeId"))
                w.uint32(8).int32(m.typeId);
            return w;
        };

        /**
         * Decodes a ReqPullingMailMsg message from the specified reader or buffer.
         * @function decode
         * @memberof proto.ReqPullingMailMsg
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {proto.ReqPullingMailMsg} ReqPullingMailMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        ReqPullingMailMsg.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.proto.ReqPullingMailMsg();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.typeId = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return ReqPullingMailMsg;
    })();

    proto.ReqPullingPackData = (function() {

        /**
         * Properties of a ReqPullingPackData.
         * @memberof proto
         * @interface IReqPullingPackData
         * @property {number|null} [typeId] ReqPullingPackData typeId
         */

        /**
         * Constructs a new ReqPullingPackData.
         * @memberof proto
         * @classdesc Represents a ReqPullingPackData.
         * @implements IReqPullingPackData
         * @constructor
         * @param {proto.IReqPullingPackData=} [p] Properties to set
         */
        function ReqPullingPackData(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * ReqPullingPackData typeId.
         * @member {number} typeId
         * @memberof proto.ReqPullingPackData
         * @instance
         */
        ReqPullingPackData.prototype.typeId = 0;

        /**
         * Encodes the specified ReqPullingPackData message. Does not implicitly {@link proto.ReqPullingPackData.verify|verify} messages.
         * @function encode
         * @memberof proto.ReqPullingPackData
         * @static
         * @param {proto.IReqPullingPackData} m ReqPullingPackData message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        ReqPullingPackData.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.typeId != null && Object.hasOwnProperty.call(m, "typeId"))
                w.uint32(8).int32(m.typeId);
            return w;
        };

        /**
         * Decodes a ReqPullingPackData message from the specified reader or buffer.
         * @function decode
         * @memberof proto.ReqPullingPackData
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {proto.ReqPullingPackData} ReqPullingPackData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        ReqPullingPackData.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.proto.ReqPullingPackData();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.typeId = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return ReqPullingPackData;
    })();

    proto.ReqPullingPlayerData = (function() {

        /**
         * Properties of a ReqPullingPlayerData.
         * @memberof proto
         * @interface IReqPullingPlayerData
         * @property {number|null} [job] ReqPullingPlayerData job
         */

        /**
         * Constructs a new ReqPullingPlayerData.
         * @memberof proto
         * @classdesc Represents a ReqPullingPlayerData.
         * @implements IReqPullingPlayerData
         * @constructor
         * @param {proto.IReqPullingPlayerData=} [p] Properties to set
         */
        function ReqPullingPlayerData(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * ReqPullingPlayerData job.
         * @member {number} job
         * @memberof proto.ReqPullingPlayerData
         * @instance
         */
        ReqPullingPlayerData.prototype.job = 0;

        /**
         * Encodes the specified ReqPullingPlayerData message. Does not implicitly {@link proto.ReqPullingPlayerData.verify|verify} messages.
         * @function encode
         * @memberof proto.ReqPullingPlayerData
         * @static
         * @param {proto.IReqPullingPlayerData} m ReqPullingPlayerData message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        ReqPullingPlayerData.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.job != null && Object.hasOwnProperty.call(m, "job"))
                w.uint32(8).int32(m.job);
            return w;
        };

        /**
         * Decodes a ReqPullingPlayerData message from the specified reader or buffer.
         * @function decode
         * @memberof proto.ReqPullingPlayerData
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {proto.ReqPullingPlayerData} ReqPullingPlayerData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        ReqPullingPlayerData.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.proto.ReqPullingPlayerData();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.job = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return ReqPullingPlayerData;
    })();

    proto.ReqPullingRank = (function() {

        /**
         * Properties of a ReqPullingRank.
         * @memberof proto
         * @interface IReqPullingRank
         * @property {number|null} [typeId] ReqPullingRank typeId
         */

        /**
         * Constructs a new ReqPullingRank.
         * @memberof proto
         * @classdesc Represents a ReqPullingRank.
         * @implements IReqPullingRank
         * @constructor
         * @param {proto.IReqPullingRank=} [p] Properties to set
         */
        function ReqPullingRank(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * ReqPullingRank typeId.
         * @member {number} typeId
         * @memberof proto.ReqPullingRank
         * @instance
         */
        ReqPullingRank.prototype.typeId = 0;

        /**
         * Encodes the specified ReqPullingRank message. Does not implicitly {@link proto.ReqPullingRank.verify|verify} messages.
         * @function encode
         * @memberof proto.ReqPullingRank
         * @static
         * @param {proto.IReqPullingRank} m ReqPullingRank message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        ReqPullingRank.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.typeId != null && Object.hasOwnProperty.call(m, "typeId"))
                w.uint32(8).int32(m.typeId);
            return w;
        };

        /**
         * Decodes a ReqPullingRank message from the specified reader or buffer.
         * @function decode
         * @memberof proto.ReqPullingRank
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {proto.ReqPullingRank} ReqPullingRank
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        ReqPullingRank.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.proto.ReqPullingRank();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.typeId = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return ReqPullingRank;
    })();

    proto.ReqPullingTaskList = (function() {

        /**
         * Properties of a ReqPullingTaskList.
         * @memberof proto
         * @interface IReqPullingTaskList
         * @property {number|null} [typeId] ReqPullingTaskList typeId
         */

        /**
         * Constructs a new ReqPullingTaskList.
         * @memberof proto
         * @classdesc Represents a ReqPullingTaskList.
         * @implements IReqPullingTaskList
         * @constructor
         * @param {proto.IReqPullingTaskList=} [p] Properties to set
         */
        function ReqPullingTaskList(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * ReqPullingTaskList typeId.
         * @member {number} typeId
         * @memberof proto.ReqPullingTaskList
         * @instance
         */
        ReqPullingTaskList.prototype.typeId = 0;

        /**
         * Encodes the specified ReqPullingTaskList message. Does not implicitly {@link proto.ReqPullingTaskList.verify|verify} messages.
         * @function encode
         * @memberof proto.ReqPullingTaskList
         * @static
         * @param {proto.IReqPullingTaskList} m ReqPullingTaskList message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        ReqPullingTaskList.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.typeId != null && Object.hasOwnProperty.call(m, "typeId"))
                w.uint32(8).int32(m.typeId);
            return w;
        };

        /**
         * Decodes a ReqPullingTaskList message from the specified reader or buffer.
         * @function decode
         * @memberof proto.ReqPullingTaskList
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {proto.ReqPullingTaskList} ReqPullingTaskList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        ReqPullingTaskList.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.proto.ReqPullingTaskList();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.typeId = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return ReqPullingTaskList;
    })();

    proto.ReqRecvBonues = (function() {

        /**
         * Properties of a ReqRecvBonues.
         * @memberof proto
         * @interface IReqRecvBonues
         * @property {number|null} [bonuesId] ReqRecvBonues bonuesId
         */

        /**
         * Constructs a new ReqRecvBonues.
         * @memberof proto
         * @classdesc Represents a ReqRecvBonues.
         * @implements IReqRecvBonues
         * @constructor
         * @param {proto.IReqRecvBonues=} [p] Properties to set
         */
        function ReqRecvBonues(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * ReqRecvBonues bonuesId.
         * @member {number} bonuesId
         * @memberof proto.ReqRecvBonues
         * @instance
         */
        ReqRecvBonues.prototype.bonuesId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Encodes the specified ReqRecvBonues message. Does not implicitly {@link proto.ReqRecvBonues.verify|verify} messages.
         * @function encode
         * @memberof proto.ReqRecvBonues
         * @static
         * @param {proto.IReqRecvBonues} m ReqRecvBonues message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        ReqRecvBonues.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.bonuesId != null && Object.hasOwnProperty.call(m, "bonuesId"))
                w.uint32(8).int64(m.bonuesId);
            return w;
        };

        /**
         * Decodes a ReqRecvBonues message from the specified reader or buffer.
         * @function decode
         * @memberof proto.ReqRecvBonues
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {proto.ReqRecvBonues} ReqRecvBonues
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        ReqRecvBonues.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.proto.ReqRecvBonues();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.bonuesId = r.int64();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return ReqRecvBonues;
    })();

    proto.ReqRecvLoginBonues = (function() {

        /**
         * Properties of a ReqRecvLoginBonues.
         * @memberof proto
         * @interface IReqRecvLoginBonues
         * @property {number|null} [type] ReqRecvLoginBonues type
         */

        /**
         * Constructs a new ReqRecvLoginBonues.
         * @memberof proto
         * @classdesc Represents a ReqRecvLoginBonues.
         * @implements IReqRecvLoginBonues
         * @constructor
         * @param {proto.IReqRecvLoginBonues=} [p] Properties to set
         */
        function ReqRecvLoginBonues(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * ReqRecvLoginBonues type.
         * @member {number} type
         * @memberof proto.ReqRecvLoginBonues
         * @instance
         */
        ReqRecvLoginBonues.prototype.type = 0;

        /**
         * Encodes the specified ReqRecvLoginBonues message. Does not implicitly {@link proto.ReqRecvLoginBonues.verify|verify} messages.
         * @function encode
         * @memberof proto.ReqRecvLoginBonues
         * @static
         * @param {proto.IReqRecvLoginBonues} m ReqRecvLoginBonues message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        ReqRecvLoginBonues.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.type != null && Object.hasOwnProperty.call(m, "type"))
                w.uint32(8).int32(m.type);
            return w;
        };

        /**
         * Decodes a ReqRecvLoginBonues message from the specified reader or buffer.
         * @function decode
         * @memberof proto.ReqRecvLoginBonues
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {proto.ReqRecvLoginBonues} ReqRecvLoginBonues
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        ReqRecvLoginBonues.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.proto.ReqRecvLoginBonues();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.type = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return ReqRecvLoginBonues;
    })();

    proto.ReqRegisterUser = (function() {

        /**
         * Properties of a ReqRegisterUser.
         * @memberof proto
         * @interface IReqRegisterUser
         * @property {string|null} [uname] ReqRegisterUser uname
         * @property {string|null} [upwd] ReqRegisterUser upwd
         * @property {number|null} [channal] ReqRegisterUser channal
         */

        /**
         * Constructs a new ReqRegisterUser.
         * @memberof proto
         * @classdesc Represents a ReqRegisterUser.
         * @implements IReqRegisterUser
         * @constructor
         * @param {proto.IReqRegisterUser=} [p] Properties to set
         */
        function ReqRegisterUser(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * ReqRegisterUser uname.
         * @member {string} uname
         * @memberof proto.ReqRegisterUser
         * @instance
         */
        ReqRegisterUser.prototype.uname = "";

        /**
         * ReqRegisterUser upwd.
         * @member {string} upwd
         * @memberof proto.ReqRegisterUser
         * @instance
         */
        ReqRegisterUser.prototype.upwd = "";

        /**
         * ReqRegisterUser channal.
         * @member {number} channal
         * @memberof proto.ReqRegisterUser
         * @instance
         */
        ReqRegisterUser.prototype.channal = 0;

        /**
         * Encodes the specified ReqRegisterUser message. Does not implicitly {@link proto.ReqRegisterUser.verify|verify} messages.
         * @function encode
         * @memberof proto.ReqRegisterUser
         * @static
         * @param {proto.IReqRegisterUser} m ReqRegisterUser message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        ReqRegisterUser.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.uname != null && Object.hasOwnProperty.call(m, "uname"))
                w.uint32(10).string(m.uname);
            if (m.upwd != null && Object.hasOwnProperty.call(m, "upwd"))
                w.uint32(18).string(m.upwd);
            if (m.channal != null && Object.hasOwnProperty.call(m, "channal"))
                w.uint32(24).int32(m.channal);
            return w;
        };

        /**
         * Decodes a ReqRegisterUser message from the specified reader or buffer.
         * @function decode
         * @memberof proto.ReqRegisterUser
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {proto.ReqRegisterUser} ReqRegisterUser
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        ReqRegisterUser.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.proto.ReqRegisterUser();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.uname = r.string();
                    break;
                case 2:
                    m.upwd = r.string();
                    break;
                case 3:
                    m.channal = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return ReqRegisterUser;
    })();

    proto.ReqSelectPlayer = (function() {

        /**
         * Properties of a ReqSelectPlayer.
         * @memberof proto
         * @interface IReqSelectPlayer
         * @property {number|null} [job] ReqSelectPlayer job
         * @property {string|null} [uname] ReqSelectPlayer uname
         * @property {number|null} [usex] ReqSelectPlayer usex
         * @property {number|null} [charactorId] ReqSelectPlayer charactorId
         */

        /**
         * Constructs a new ReqSelectPlayer.
         * @memberof proto
         * @classdesc Represents a ReqSelectPlayer.
         * @implements IReqSelectPlayer
         * @constructor
         * @param {proto.IReqSelectPlayer=} [p] Properties to set
         */
        function ReqSelectPlayer(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * ReqSelectPlayer job.
         * @member {number} job
         * @memberof proto.ReqSelectPlayer
         * @instance
         */
        ReqSelectPlayer.prototype.job = 0;

        /**
         * ReqSelectPlayer uname.
         * @member {string} uname
         * @memberof proto.ReqSelectPlayer
         * @instance
         */
        ReqSelectPlayer.prototype.uname = "";

        /**
         * ReqSelectPlayer usex.
         * @member {number} usex
         * @memberof proto.ReqSelectPlayer
         * @instance
         */
        ReqSelectPlayer.prototype.usex = 0;

        /**
         * ReqSelectPlayer charactorId.
         * @member {number} charactorId
         * @memberof proto.ReqSelectPlayer
         * @instance
         */
        ReqSelectPlayer.prototype.charactorId = 0;

        /**
         * Encodes the specified ReqSelectPlayer message. Does not implicitly {@link proto.ReqSelectPlayer.verify|verify} messages.
         * @function encode
         * @memberof proto.ReqSelectPlayer
         * @static
         * @param {proto.IReqSelectPlayer} m ReqSelectPlayer message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        ReqSelectPlayer.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.job != null && Object.hasOwnProperty.call(m, "job"))
                w.uint32(8).int32(m.job);
            if (m.uname != null && Object.hasOwnProperty.call(m, "uname"))
                w.uint32(18).string(m.uname);
            if (m.usex != null && Object.hasOwnProperty.call(m, "usex"))
                w.uint32(24).int32(m.usex);
            if (m.charactorId != null && Object.hasOwnProperty.call(m, "charactorId"))
                w.uint32(32).int32(m.charactorId);
            return w;
        };

        /**
         * Decodes a ReqSelectPlayer message from the specified reader or buffer.
         * @function decode
         * @memberof proto.ReqSelectPlayer
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {proto.ReqSelectPlayer} ReqSelectPlayer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        ReqSelectPlayer.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.proto.ReqSelectPlayer();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.job = r.int32();
                    break;
                case 2:
                    m.uname = r.string();
                    break;
                case 3:
                    m.usex = r.int32();
                    break;
                case 4:
                    m.charactorId = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return ReqSelectPlayer;
    })();

    proto.ReqSitdown = (function() {

        /**
         * Properties of a ReqSitdown.
         * @memberof proto
         * @interface IReqSitdown
         * @property {number|null} [seatId] ReqSitdown seatId
         */

        /**
         * Constructs a new ReqSitdown.
         * @memberof proto
         * @classdesc Represents a ReqSitdown.
         * @implements IReqSitdown
         * @constructor
         * @param {proto.IReqSitdown=} [p] Properties to set
         */
        function ReqSitdown(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * ReqSitdown seatId.
         * @member {number} seatId
         * @memberof proto.ReqSitdown
         * @instance
         */
        ReqSitdown.prototype.seatId = 0;

        /**
         * Encodes the specified ReqSitdown message. Does not implicitly {@link proto.ReqSitdown.verify|verify} messages.
         * @function encode
         * @memberof proto.ReqSitdown
         * @static
         * @param {proto.IReqSitdown} m ReqSitdown message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        ReqSitdown.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.seatId != null && Object.hasOwnProperty.call(m, "seatId"))
                w.uint32(8).int32(m.seatId);
            return w;
        };

        /**
         * Decodes a ReqSitdown message from the specified reader or buffer.
         * @function decode
         * @memberof proto.ReqSitdown
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {proto.ReqSitdown} ReqSitdown
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        ReqSitdown.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.proto.ReqSitdown();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.seatId = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return ReqSitdown;
    })();

    proto.ReqStandup = (function() {

        /**
         * Properties of a ReqStandup.
         * @memberof proto
         * @interface IReqStandup
         * @property {number|null} [reserve] ReqStandup reserve
         */

        /**
         * Constructs a new ReqStandup.
         * @memberof proto
         * @classdesc Represents a ReqStandup.
         * @implements IReqStandup
         * @constructor
         * @param {proto.IReqStandup=} [p] Properties to set
         */
        function ReqStandup(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * ReqStandup reserve.
         * @member {number} reserve
         * @memberof proto.ReqStandup
         * @instance
         */
        ReqStandup.prototype.reserve = 0;

        /**
         * Encodes the specified ReqStandup message. Does not implicitly {@link proto.ReqStandup.verify|verify} messages.
         * @function encode
         * @memberof proto.ReqStandup
         * @static
         * @param {proto.IReqStandup} m ReqStandup message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        ReqStandup.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.reserve != null && Object.hasOwnProperty.call(m, "reserve"))
                w.uint32(8).int32(m.reserve);
            return w;
        };

        /**
         * Decodes a ReqStandup message from the specified reader or buffer.
         * @function decode
         * @memberof proto.ReqStandup
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {proto.ReqStandup} ReqStandup
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        ReqStandup.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.proto.ReqStandup();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.reserve = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return ReqStandup;
    })();

    proto.ReqStartBuff = (function() {

        /**
         * Properties of a ReqStartBuff.
         * @memberof proto
         * @interface IReqStartBuff
         * @property {number|null} [buffId] ReqStartBuff buffId
         */

        /**
         * Constructs a new ReqStartBuff.
         * @memberof proto
         * @classdesc Represents a ReqStartBuff.
         * @implements IReqStartBuff
         * @constructor
         * @param {proto.IReqStartBuff=} [p] Properties to set
         */
        function ReqStartBuff(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * ReqStartBuff buffId.
         * @member {number} buffId
         * @memberof proto.ReqStartBuff
         * @instance
         */
        ReqStartBuff.prototype.buffId = 0;

        /**
         * Encodes the specified ReqStartBuff message. Does not implicitly {@link proto.ReqStartBuff.verify|verify} messages.
         * @function encode
         * @memberof proto.ReqStartBuff
         * @static
         * @param {proto.IReqStartBuff} m ReqStartBuff message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        ReqStartBuff.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.buffId != null && Object.hasOwnProperty.call(m, "buffId"))
                w.uint32(8).int32(m.buffId);
            return w;
        };

        /**
         * Decodes a ReqStartBuff message from the specified reader or buffer.
         * @function decode
         * @memberof proto.ReqStartBuff
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {proto.ReqStartBuff} ReqStartBuff
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        ReqStartBuff.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.proto.ReqStartBuff();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.buffId = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return ReqStartBuff;
    })();

    proto.ReqStartSkill = (function() {

        /**
         * Properties of a ReqStartSkill.
         * @memberof proto
         * @interface IReqStartSkill
         * @property {number|null} [skillId] ReqStartSkill skillId
         */

        /**
         * Constructs a new ReqStartSkill.
         * @memberof proto
         * @classdesc Represents a ReqStartSkill.
         * @implements IReqStartSkill
         * @constructor
         * @param {proto.IReqStartSkill=} [p] Properties to set
         */
        function ReqStartSkill(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * ReqStartSkill skillId.
         * @member {number} skillId
         * @memberof proto.ReqStartSkill
         * @instance
         */
        ReqStartSkill.prototype.skillId = 0;

        /**
         * Encodes the specified ReqStartSkill message. Does not implicitly {@link proto.ReqStartSkill.verify|verify} messages.
         * @function encode
         * @memberof proto.ReqStartSkill
         * @static
         * @param {proto.IReqStartSkill} m ReqStartSkill message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        ReqStartSkill.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.skillId != null && Object.hasOwnProperty.call(m, "skillId"))
                w.uint32(8).int32(m.skillId);
            return w;
        };

        /**
         * Decodes a ReqStartSkill message from the specified reader or buffer.
         * @function decode
         * @memberof proto.ReqStartSkill
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {proto.ReqStartSkill} ReqStartSkill
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        ReqStartSkill.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.proto.ReqStartSkill();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.skillId = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return ReqStartSkill;
    })();

    proto.ReqTalkMsg = (function() {

        /**
         * Properties of a ReqTalkMsg.
         * @memberof proto
         * @interface IReqTalkMsg
         * @property {number|null} [talkType] ReqTalkMsg talkType
         * @property {string|null} [msgBodyOrAudioUrl] ReqTalkMsg msgBodyOrAudioUrl
         */

        /**
         * Constructs a new ReqTalkMsg.
         * @memberof proto
         * @classdesc Represents a ReqTalkMsg.
         * @implements IReqTalkMsg
         * @constructor
         * @param {proto.IReqTalkMsg=} [p] Properties to set
         */
        function ReqTalkMsg(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * ReqTalkMsg talkType.
         * @member {number} talkType
         * @memberof proto.ReqTalkMsg
         * @instance
         */
        ReqTalkMsg.prototype.talkType = 0;

        /**
         * ReqTalkMsg msgBodyOrAudioUrl.
         * @member {string} msgBodyOrAudioUrl
         * @memberof proto.ReqTalkMsg
         * @instance
         */
        ReqTalkMsg.prototype.msgBodyOrAudioUrl = "";

        /**
         * Encodes the specified ReqTalkMsg message. Does not implicitly {@link proto.ReqTalkMsg.verify|verify} messages.
         * @function encode
         * @memberof proto.ReqTalkMsg
         * @static
         * @param {proto.IReqTalkMsg} m ReqTalkMsg message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        ReqTalkMsg.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.talkType != null && Object.hasOwnProperty.call(m, "talkType"))
                w.uint32(8).int32(m.talkType);
            if (m.msgBodyOrAudioUrl != null && Object.hasOwnProperty.call(m, "msgBodyOrAudioUrl"))
                w.uint32(18).string(m.msgBodyOrAudioUrl);
            return w;
        };

        /**
         * Decodes a ReqTalkMsg message from the specified reader or buffer.
         * @function decode
         * @memberof proto.ReqTalkMsg
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {proto.ReqTalkMsg} ReqTalkMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        ReqTalkMsg.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.proto.ReqTalkMsg();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.talkType = r.int32();
                    break;
                case 2:
                    m.msgBodyOrAudioUrl = r.string();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return ReqTalkMsg;
    })();

    proto.ReqTestGetGoods = (function() {

        /**
         * Properties of a ReqTestGetGoods.
         * @memberof proto
         * @interface IReqTestGetGoods
         * @property {number|null} [typeId] ReqTestGetGoods typeId
         * @property {number|null} [num] ReqTestGetGoods num
         */

        /**
         * Constructs a new ReqTestGetGoods.
         * @memberof proto
         * @classdesc Represents a ReqTestGetGoods.
         * @implements IReqTestGetGoods
         * @constructor
         * @param {proto.IReqTestGetGoods=} [p] Properties to set
         */
        function ReqTestGetGoods(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * ReqTestGetGoods typeId.
         * @member {number} typeId
         * @memberof proto.ReqTestGetGoods
         * @instance
         */
        ReqTestGetGoods.prototype.typeId = 0;

        /**
         * ReqTestGetGoods num.
         * @member {number} num
         * @memberof proto.ReqTestGetGoods
         * @instance
         */
        ReqTestGetGoods.prototype.num = 0;

        /**
         * Encodes the specified ReqTestGetGoods message. Does not implicitly {@link proto.ReqTestGetGoods.verify|verify} messages.
         * @function encode
         * @memberof proto.ReqTestGetGoods
         * @static
         * @param {proto.IReqTestGetGoods} m ReqTestGetGoods message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        ReqTestGetGoods.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.typeId != null && Object.hasOwnProperty.call(m, "typeId"))
                w.uint32(8).int32(m.typeId);
            if (m.num != null && Object.hasOwnProperty.call(m, "num"))
                w.uint32(16).int32(m.num);
            return w;
        };

        /**
         * Decodes a ReqTestGetGoods message from the specified reader or buffer.
         * @function decode
         * @memberof proto.ReqTestGetGoods
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {proto.ReqTestGetGoods} ReqTestGetGoods
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        ReqTestGetGoods.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.proto.ReqTestGetGoods();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.typeId = r.int32();
                    break;
                case 2:
                    m.num = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return ReqTestGetGoods;
    })();

    proto.ReqTestLogicCmdEcho = (function() {

        /**
         * Properties of a ReqTestLogicCmdEcho.
         * @memberof proto
         * @interface IReqTestLogicCmdEcho
         * @property {string|null} [content] ReqTestLogicCmdEcho content
         */

        /**
         * Constructs a new ReqTestLogicCmdEcho.
         * @memberof proto
         * @classdesc Represents a ReqTestLogicCmdEcho.
         * @implements IReqTestLogicCmdEcho
         * @constructor
         * @param {proto.IReqTestLogicCmdEcho=} [p] Properties to set
         */
        function ReqTestLogicCmdEcho(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * ReqTestLogicCmdEcho content.
         * @member {string} content
         * @memberof proto.ReqTestLogicCmdEcho
         * @instance
         */
        ReqTestLogicCmdEcho.prototype.content = "";

        /**
         * Encodes the specified ReqTestLogicCmdEcho message. Does not implicitly {@link proto.ReqTestLogicCmdEcho.verify|verify} messages.
         * @function encode
         * @memberof proto.ReqTestLogicCmdEcho
         * @static
         * @param {proto.IReqTestLogicCmdEcho} m ReqTestLogicCmdEcho message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        ReqTestLogicCmdEcho.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.content != null && Object.hasOwnProperty.call(m, "content"))
                w.uint32(10).string(m.content);
            return w;
        };

        /**
         * Decodes a ReqTestLogicCmdEcho message from the specified reader or buffer.
         * @function decode
         * @memberof proto.ReqTestLogicCmdEcho
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {proto.ReqTestLogicCmdEcho} ReqTestLogicCmdEcho
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        ReqTestLogicCmdEcho.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.proto.ReqTestLogicCmdEcho();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.content = r.string();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return ReqTestLogicCmdEcho;
    })();

    proto.ReqTestUpdateGooods = (function() {

        /**
         * Properties of a ReqTestUpdateGooods.
         * @memberof proto
         * @interface IReqTestUpdateGooods
         * @property {number|null} [typeId] ReqTestUpdateGooods typeId
         * @property {number|null} [num] ReqTestUpdateGooods num
         */

        /**
         * Constructs a new ReqTestUpdateGooods.
         * @memberof proto
         * @classdesc Represents a ReqTestUpdateGooods.
         * @implements IReqTestUpdateGooods
         * @constructor
         * @param {proto.IReqTestUpdateGooods=} [p] Properties to set
         */
        function ReqTestUpdateGooods(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * ReqTestUpdateGooods typeId.
         * @member {number} typeId
         * @memberof proto.ReqTestUpdateGooods
         * @instance
         */
        ReqTestUpdateGooods.prototype.typeId = 0;

        /**
         * ReqTestUpdateGooods num.
         * @member {number} num
         * @memberof proto.ReqTestUpdateGooods
         * @instance
         */
        ReqTestUpdateGooods.prototype.num = 0;

        /**
         * Encodes the specified ReqTestUpdateGooods message. Does not implicitly {@link proto.ReqTestUpdateGooods.verify|verify} messages.
         * @function encode
         * @memberof proto.ReqTestUpdateGooods
         * @static
         * @param {proto.IReqTestUpdateGooods} m ReqTestUpdateGooods message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        ReqTestUpdateGooods.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.typeId != null && Object.hasOwnProperty.call(m, "typeId"))
                w.uint32(8).int32(m.typeId);
            if (m.num != null && Object.hasOwnProperty.call(m, "num"))
                w.uint32(16).int32(m.num);
            return w;
        };

        /**
         * Decodes a ReqTestUpdateGooods message from the specified reader or buffer.
         * @function decode
         * @memberof proto.ReqTestUpdateGooods
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {proto.ReqTestUpdateGooods} ReqTestUpdateGooods
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        ReqTestUpdateGooods.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.proto.ReqTestUpdateGooods();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.typeId = r.int32();
                    break;
                case 2:
                    m.num = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return ReqTestUpdateGooods;
    })();

    proto.ReqUpdateMailMsg = (function() {

        /**
         * Properties of a ReqUpdateMailMsg.
         * @memberof proto
         * @interface IReqUpdateMailMsg
         * @property {number|null} [mailMsgId] ReqUpdateMailMsg mailMsgId
         * @property {number|null} [status] ReqUpdateMailMsg status
         */

        /**
         * Constructs a new ReqUpdateMailMsg.
         * @memberof proto
         * @classdesc Represents a ReqUpdateMailMsg.
         * @implements IReqUpdateMailMsg
         * @constructor
         * @param {proto.IReqUpdateMailMsg=} [p] Properties to set
         */
        function ReqUpdateMailMsg(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * ReqUpdateMailMsg mailMsgId.
         * @member {number} mailMsgId
         * @memberof proto.ReqUpdateMailMsg
         * @instance
         */
        ReqUpdateMailMsg.prototype.mailMsgId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ReqUpdateMailMsg status.
         * @member {number} status
         * @memberof proto.ReqUpdateMailMsg
         * @instance
         */
        ReqUpdateMailMsg.prototype.status = 0;

        /**
         * Encodes the specified ReqUpdateMailMsg message. Does not implicitly {@link proto.ReqUpdateMailMsg.verify|verify} messages.
         * @function encode
         * @memberof proto.ReqUpdateMailMsg
         * @static
         * @param {proto.IReqUpdateMailMsg} m ReqUpdateMailMsg message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        ReqUpdateMailMsg.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.mailMsgId != null && Object.hasOwnProperty.call(m, "mailMsgId"))
                w.uint32(8).int64(m.mailMsgId);
            if (m.status != null && Object.hasOwnProperty.call(m, "status"))
                w.uint32(16).int32(m.status);
            return w;
        };

        /**
         * Decodes a ReqUpdateMailMsg message from the specified reader or buffer.
         * @function decode
         * @memberof proto.ReqUpdateMailMsg
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {proto.ReqUpdateMailMsg} ReqUpdateMailMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        ReqUpdateMailMsg.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.proto.ReqUpdateMailMsg();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.mailMsgId = r.int64();
                    break;
                case 2:
                    m.status = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return ReqUpdateMailMsg;
    })();

    proto.ReqUserLogin = (function() {

        /**
         * Properties of a ReqUserLogin.
         * @memberof proto
         * @interface IReqUserLogin
         * @property {string|null} [uname] ReqUserLogin uname
         * @property {string|null} [upwd] ReqUserLogin upwd
         * @property {string|null} [code] ReqUserLogin code
         */

        /**
         * Constructs a new ReqUserLogin.
         * @memberof proto
         * @classdesc Represents a ReqUserLogin.
         * @implements IReqUserLogin
         * @constructor
         * @param {proto.IReqUserLogin=} [p] Properties to set
         */
        function ReqUserLogin(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * ReqUserLogin uname.
         * @member {string} uname
         * @memberof proto.ReqUserLogin
         * @instance
         */
        ReqUserLogin.prototype.uname = "";

        /**
         * ReqUserLogin upwd.
         * @member {string} upwd
         * @memberof proto.ReqUserLogin
         * @instance
         */
        ReqUserLogin.prototype.upwd = "";

        /**
         * ReqUserLogin code.
         * @member {string} code
         * @memberof proto.ReqUserLogin
         * @instance
         */
        ReqUserLogin.prototype.code = "";

        /**
         * Encodes the specified ReqUserLogin message. Does not implicitly {@link proto.ReqUserLogin.verify|verify} messages.
         * @function encode
         * @memberof proto.ReqUserLogin
         * @static
         * @param {proto.IReqUserLogin} m ReqUserLogin message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        ReqUserLogin.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.uname != null && Object.hasOwnProperty.call(m, "uname"))
                w.uint32(10).string(m.uname);
            if (m.upwd != null && Object.hasOwnProperty.call(m, "upwd"))
                w.uint32(18).string(m.upwd);
            if (m.code != null && Object.hasOwnProperty.call(m, "code"))
                w.uint32(26).string(m.code);
            return w;
        };

        /**
         * Decodes a ReqUserLogin message from the specified reader or buffer.
         * @function decode
         * @memberof proto.ReqUserLogin
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {proto.ReqUserLogin} ReqUserLogin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        ReqUserLogin.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.proto.ReqUserLogin();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.uname = r.string();
                    break;
                case 2:
                    m.upwd = r.string();
                    break;
                case 3:
                    m.code = r.string();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return ReqUserLogin;
    })();

    proto.ResEnterAOI = (function() {

        /**
         * Properties of a ResEnterAOI.
         * @memberof proto
         * @interface IResEnterAOI
         * @property {Array.<proto.IArrivedCharactor>|null} [charactors] ResEnterAOI charactors
         */

        /**
         * Constructs a new ResEnterAOI.
         * @memberof proto
         * @classdesc Represents a ResEnterAOI.
         * @implements IResEnterAOI
         * @constructor
         * @param {proto.IResEnterAOI=} [p] Properties to set
         */
        function ResEnterAOI(p) {
            this.charactors = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * ResEnterAOI charactors.
         * @member {Array.<proto.IArrivedCharactor>} charactors
         * @memberof proto.ResEnterAOI
         * @instance
         */
        ResEnterAOI.prototype.charactors = $util.emptyArray;

        /**
         * Encodes the specified ResEnterAOI message. Does not implicitly {@link proto.ResEnterAOI.verify|verify} messages.
         * @function encode
         * @memberof proto.ResEnterAOI
         * @static
         * @param {proto.IResEnterAOI} m ResEnterAOI message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        ResEnterAOI.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.charactors != null && m.charactors.length) {
                for (var i = 0; i < m.charactors.length; ++i)
                    $root.proto.ArrivedCharactor.encode(m.charactors[i], w.uint32(10).fork()).ldelim();
            }
            return w;
        };

        /**
         * Decodes a ResEnterAOI message from the specified reader or buffer.
         * @function decode
         * @memberof proto.ResEnterAOI
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {proto.ResEnterAOI} ResEnterAOI
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        ResEnterAOI.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.proto.ResEnterAOI();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    if (!(m.charactors && m.charactors.length))
                        m.charactors = [];
                    m.charactors.push($root.proto.ArrivedCharactor.decode(r, r.uint32()));
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return ResEnterAOI;
    })();

    proto.ResEnterLogicServer = (function() {

        /**
         * Properties of a ResEnterLogicServer.
         * @memberof proto
         * @interface IResEnterLogicServer
         * @property {number|null} [status] ResEnterLogicServer status
         */

        /**
         * Constructs a new ResEnterLogicServer.
         * @memberof proto
         * @classdesc Represents a ResEnterLogicServer.
         * @implements IResEnterLogicServer
         * @constructor
         * @param {proto.IResEnterLogicServer=} [p] Properties to set
         */
        function ResEnterLogicServer(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * ResEnterLogicServer status.
         * @member {number} status
         * @memberof proto.ResEnterLogicServer
         * @instance
         */
        ResEnterLogicServer.prototype.status = 0;

        /**
         * Encodes the specified ResEnterLogicServer message. Does not implicitly {@link proto.ResEnterLogicServer.verify|verify} messages.
         * @function encode
         * @memberof proto.ResEnterLogicServer
         * @static
         * @param {proto.IResEnterLogicServer} m ResEnterLogicServer message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        ResEnterLogicServer.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.status != null && Object.hasOwnProperty.call(m, "status"))
                w.uint32(8).int32(m.status);
            return w;
        };

        /**
         * Decodes a ResEnterLogicServer message from the specified reader or buffer.
         * @function decode
         * @memberof proto.ResEnterLogicServer
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {proto.ResEnterLogicServer} ResEnterLogicServer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        ResEnterLogicServer.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.proto.ResEnterLogicServer();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.status = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return ResEnterLogicServer;
    })();

    proto.ResEnterRoom = (function() {

        /**
         * Properties of a ResEnterRoom.
         * @memberof proto
         * @interface IResEnterRoom
         * @property {number|null} [roomId] ResEnterRoom roomId
         * @property {number|null} [roomState] ResEnterRoom roomState
         * @property {number|null} [roomInViewId] ResEnterRoom roomInViewId
         */

        /**
         * Constructs a new ResEnterRoom.
         * @memberof proto
         * @classdesc Represents a ResEnterRoom.
         * @implements IResEnterRoom
         * @constructor
         * @param {proto.IResEnterRoom=} [p] Properties to set
         */
        function ResEnterRoom(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * ResEnterRoom roomId.
         * @member {number} roomId
         * @memberof proto.ResEnterRoom
         * @instance
         */
        ResEnterRoom.prototype.roomId = 0;

        /**
         * ResEnterRoom roomState.
         * @member {number} roomState
         * @memberof proto.ResEnterRoom
         * @instance
         */
        ResEnterRoom.prototype.roomState = 0;

        /**
         * ResEnterRoom roomInViewId.
         * @member {number} roomInViewId
         * @memberof proto.ResEnterRoom
         * @instance
         */
        ResEnterRoom.prototype.roomInViewId = 0;

        /**
         * Encodes the specified ResEnterRoom message. Does not implicitly {@link proto.ResEnterRoom.verify|verify} messages.
         * @function encode
         * @memberof proto.ResEnterRoom
         * @static
         * @param {proto.IResEnterRoom} m ResEnterRoom message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        ResEnterRoom.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.roomId != null && Object.hasOwnProperty.call(m, "roomId"))
                w.uint32(8).int32(m.roomId);
            if (m.roomState != null && Object.hasOwnProperty.call(m, "roomState"))
                w.uint32(16).int32(m.roomState);
            if (m.roomInViewId != null && Object.hasOwnProperty.call(m, "roomInViewId"))
                w.uint32(24).int32(m.roomInViewId);
            return w;
        };

        /**
         * Decodes a ResEnterRoom message from the specified reader or buffer.
         * @function decode
         * @memberof proto.ResEnterRoom
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {proto.ResEnterRoom} ResEnterRoom
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        ResEnterRoom.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.proto.ResEnterRoom();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.roomId = r.int32();
                    break;
                case 2:
                    m.roomState = r.int32();
                    break;
                case 3:
                    m.roomInViewId = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return ResEnterRoom;
    })();

    proto.ResExchangeProduct = (function() {

        /**
         * Properties of a ResExchangeProduct.
         * @memberof proto
         * @interface IResExchangeProduct
         * @property {number|null} [status] ResExchangeProduct status
         */

        /**
         * Constructs a new ResExchangeProduct.
         * @memberof proto
         * @classdesc Represents a ResExchangeProduct.
         * @implements IResExchangeProduct
         * @constructor
         * @param {proto.IResExchangeProduct=} [p] Properties to set
         */
        function ResExchangeProduct(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * ResExchangeProduct status.
         * @member {number} status
         * @memberof proto.ResExchangeProduct
         * @instance
         */
        ResExchangeProduct.prototype.status = 0;

        /**
         * Encodes the specified ResExchangeProduct message. Does not implicitly {@link proto.ResExchangeProduct.verify|verify} messages.
         * @function encode
         * @memberof proto.ResExchangeProduct
         * @static
         * @param {proto.IResExchangeProduct} m ResExchangeProduct message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        ResExchangeProduct.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.status != null && Object.hasOwnProperty.call(m, "status"))
                w.uint32(8).int32(m.status);
            return w;
        };

        /**
         * Decodes a ResExchangeProduct message from the specified reader or buffer.
         * @function decode
         * @memberof proto.ResExchangeProduct
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {proto.ResExchangeProduct} ResExchangeProduct
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        ResExchangeProduct.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.proto.ResExchangeProduct();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.status = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return ResExchangeProduct;
    })();

    proto.ResExitLogicServer = (function() {

        /**
         * Properties of a ResExitLogicServer.
         * @memberof proto
         * @interface IResExitLogicServer
         * @property {number|null} [status] ResExitLogicServer status
         */

        /**
         * Constructs a new ResExitLogicServer.
         * @memberof proto
         * @classdesc Represents a ResExitLogicServer.
         * @implements IResExitLogicServer
         * @constructor
         * @param {proto.IResExitLogicServer=} [p] Properties to set
         */
        function ResExitLogicServer(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * ResExitLogicServer status.
         * @member {number} status
         * @memberof proto.ResExitLogicServer
         * @instance
         */
        ResExitLogicServer.prototype.status = 0;

        /**
         * Encodes the specified ResExitLogicServer message. Does not implicitly {@link proto.ResExitLogicServer.verify|verify} messages.
         * @function encode
         * @memberof proto.ResExitLogicServer
         * @static
         * @param {proto.IResExitLogicServer} m ResExitLogicServer message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        ResExitLogicServer.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.status != null && Object.hasOwnProperty.call(m, "status"))
                w.uint32(8).int32(m.status);
            return w;
        };

        /**
         * Decodes a ResExitLogicServer message from the specified reader or buffer.
         * @function decode
         * @memberof proto.ResExitLogicServer
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {proto.ResExitLogicServer} ResExitLogicServer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        ResExitLogicServer.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.proto.ResExitLogicServer();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.status = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return ResExitLogicServer;
    })();

    proto.ResGuestLogin = (function() {

        /**
         * Properties of a ResGuestLogin.
         * @memberof proto
         * @interface IResGuestLogin
         * @property {number|null} [status] ResGuestLogin status
         * @property {proto.IAccountInfo|null} [uinfo] ResGuestLogin uinfo
         */

        /**
         * Constructs a new ResGuestLogin.
         * @memberof proto
         * @classdesc Represents a ResGuestLogin.
         * @implements IResGuestLogin
         * @constructor
         * @param {proto.IResGuestLogin=} [p] Properties to set
         */
        function ResGuestLogin(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * ResGuestLogin status.
         * @member {number} status
         * @memberof proto.ResGuestLogin
         * @instance
         */
        ResGuestLogin.prototype.status = 0;

        /**
         * ResGuestLogin uinfo.
         * @member {proto.IAccountInfo|null|undefined} uinfo
         * @memberof proto.ResGuestLogin
         * @instance
         */
        ResGuestLogin.prototype.uinfo = null;

        /**
         * Encodes the specified ResGuestLogin message. Does not implicitly {@link proto.ResGuestLogin.verify|verify} messages.
         * @function encode
         * @memberof proto.ResGuestLogin
         * @static
         * @param {proto.IResGuestLogin} m ResGuestLogin message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        ResGuestLogin.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.status != null && Object.hasOwnProperty.call(m, "status"))
                w.uint32(8).int32(m.status);
            if (m.uinfo != null && Object.hasOwnProperty.call(m, "uinfo"))
                $root.proto.AccountInfo.encode(m.uinfo, w.uint32(18).fork()).ldelim();
            return w;
        };

        /**
         * Decodes a ResGuestLogin message from the specified reader or buffer.
         * @function decode
         * @memberof proto.ResGuestLogin
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {proto.ResGuestLogin} ResGuestLogin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        ResGuestLogin.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.proto.ResGuestLogin();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.status = r.int32();
                    break;
                case 2:
                    m.uinfo = $root.proto.AccountInfo.decode(r, r.uint32());
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return ResGuestLogin;
    })();

    proto.ResGuestUpgrade = (function() {

        /**
         * Properties of a ResGuestUpgrade.
         * @memberof proto
         * @interface IResGuestUpgrade
         * @property {number|null} [status] ResGuestUpgrade status
         * @property {proto.IAccountInfo|null} [uinfo] ResGuestUpgrade uinfo
         */

        /**
         * Constructs a new ResGuestUpgrade.
         * @memberof proto
         * @classdesc Represents a ResGuestUpgrade.
         * @implements IResGuestUpgrade
         * @constructor
         * @param {proto.IResGuestUpgrade=} [p] Properties to set
         */
        function ResGuestUpgrade(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * ResGuestUpgrade status.
         * @member {number} status
         * @memberof proto.ResGuestUpgrade
         * @instance
         */
        ResGuestUpgrade.prototype.status = 0;

        /**
         * ResGuestUpgrade uinfo.
         * @member {proto.IAccountInfo|null|undefined} uinfo
         * @memberof proto.ResGuestUpgrade
         * @instance
         */
        ResGuestUpgrade.prototype.uinfo = null;

        /**
         * Encodes the specified ResGuestUpgrade message. Does not implicitly {@link proto.ResGuestUpgrade.verify|verify} messages.
         * @function encode
         * @memberof proto.ResGuestUpgrade
         * @static
         * @param {proto.IResGuestUpgrade} m ResGuestUpgrade message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        ResGuestUpgrade.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.status != null && Object.hasOwnProperty.call(m, "status"))
                w.uint32(8).int32(m.status);
            if (m.uinfo != null && Object.hasOwnProperty.call(m, "uinfo"))
                $root.proto.AccountInfo.encode(m.uinfo, w.uint32(18).fork()).ldelim();
            return w;
        };

        /**
         * Decodes a ResGuestUpgrade message from the specified reader or buffer.
         * @function decode
         * @memberof proto.ResGuestUpgrade
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {proto.ResGuestUpgrade} ResGuestUpgrade
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        ResGuestUpgrade.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.proto.ResGuestUpgrade();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.status = r.int32();
                    break;
                case 2:
                    m.uinfo = $root.proto.AccountInfo.decode(r, r.uint32());
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return ResGuestUpgrade;
    })();

    proto.ResLeaveAOI = (function() {

        /**
         * Properties of a ResLeaveAOI.
         * @memberof proto
         * @interface IResLeaveAOI
         * @property {Array.<number>|null} [leavePlayers] ResLeaveAOI leavePlayers
         */

        /**
         * Constructs a new ResLeaveAOI.
         * @memberof proto
         * @classdesc Represents a ResLeaveAOI.
         * @implements IResLeaveAOI
         * @constructor
         * @param {proto.IResLeaveAOI=} [p] Properties to set
         */
        function ResLeaveAOI(p) {
            this.leavePlayers = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * ResLeaveAOI leavePlayers.
         * @member {Array.<number>} leavePlayers
         * @memberof proto.ResLeaveAOI
         * @instance
         */
        ResLeaveAOI.prototype.leavePlayers = $util.emptyArray;

        /**
         * Encodes the specified ResLeaveAOI message. Does not implicitly {@link proto.ResLeaveAOI.verify|verify} messages.
         * @function encode
         * @memberof proto.ResLeaveAOI
         * @static
         * @param {proto.IResLeaveAOI} m ResLeaveAOI message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        ResLeaveAOI.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.leavePlayers != null && m.leavePlayers.length) {
                for (var i = 0; i < m.leavePlayers.length; ++i)
                    w.uint32(8).int32(m.leavePlayers[i]);
            }
            return w;
        };

        /**
         * Decodes a ResLeaveAOI message from the specified reader or buffer.
         * @function decode
         * @memberof proto.ResLeaveAOI
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {proto.ResLeaveAOI} ResLeaveAOI
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        ResLeaveAOI.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.proto.ResLeaveAOI();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    if (!(m.leavePlayers && m.leavePlayers.length))
                        m.leavePlayers = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.leavePlayers.push(r.int32());
                    } else
                        m.leavePlayers.push(r.int32());
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return ResLeaveAOI;
    })();

    proto.ResLostHp = (function() {

        /**
         * Properties of a ResLostHp.
         * @memberof proto
         * @interface IResLostHp
         * @property {number|null} [seatOrWorldId] ResLostHp seatOrWorldId
         * @property {number|null} [lostHp] ResLostHp lostHp
         */

        /**
         * Constructs a new ResLostHp.
         * @memberof proto
         * @classdesc Represents a ResLostHp.
         * @implements IResLostHp
         * @constructor
         * @param {proto.IResLostHp=} [p] Properties to set
         */
        function ResLostHp(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * ResLostHp seatOrWorldId.
         * @member {number} seatOrWorldId
         * @memberof proto.ResLostHp
         * @instance
         */
        ResLostHp.prototype.seatOrWorldId = 0;

        /**
         * ResLostHp lostHp.
         * @member {number} lostHp
         * @memberof proto.ResLostHp
         * @instance
         */
        ResLostHp.prototype.lostHp = 0;

        /**
         * Encodes the specified ResLostHp message. Does not implicitly {@link proto.ResLostHp.verify|verify} messages.
         * @function encode
         * @memberof proto.ResLostHp
         * @static
         * @param {proto.IResLostHp} m ResLostHp message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        ResLostHp.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.seatOrWorldId != null && Object.hasOwnProperty.call(m, "seatOrWorldId"))
                w.uint32(8).int32(m.seatOrWorldId);
            if (m.lostHp != null && Object.hasOwnProperty.call(m, "lostHp"))
                w.uint32(16).int32(m.lostHp);
            return w;
        };

        /**
         * Decodes a ResLostHp message from the specified reader or buffer.
         * @function decode
         * @memberof proto.ResLostHp
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {proto.ResLostHp} ResLostHp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        ResLostHp.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.proto.ResLostHp();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.seatOrWorldId = r.int32();
                    break;
                case 2:
                    m.lostHp = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return ResLostHp;
    })();

    proto.ResNavInDir = (function() {

        /**
         * Properties of a ResNavInDir.
         * @memberof proto
         * @interface IResNavInDir
         * @property {number|null} [worldId] ResNavInDir worldId
         * @property {number|null} [dirx] ResNavInDir dirx
         * @property {number|null} [diry] ResNavInDir diry
         * @property {number|null} [speed] ResNavInDir speed
         */

        /**
         * Constructs a new ResNavInDir.
         * @memberof proto
         * @classdesc Represents a ResNavInDir.
         * @implements IResNavInDir
         * @constructor
         * @param {proto.IResNavInDir=} [p] Properties to set
         */
        function ResNavInDir(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * ResNavInDir worldId.
         * @member {number} worldId
         * @memberof proto.ResNavInDir
         * @instance
         */
        ResNavInDir.prototype.worldId = 0;

        /**
         * ResNavInDir dirx.
         * @member {number} dirx
         * @memberof proto.ResNavInDir
         * @instance
         */
        ResNavInDir.prototype.dirx = 0;

        /**
         * ResNavInDir diry.
         * @member {number} diry
         * @memberof proto.ResNavInDir
         * @instance
         */
        ResNavInDir.prototype.diry = 0;

        /**
         * ResNavInDir speed.
         * @member {number} speed
         * @memberof proto.ResNavInDir
         * @instance
         */
        ResNavInDir.prototype.speed = 0;

        /**
         * Encodes the specified ResNavInDir message. Does not implicitly {@link proto.ResNavInDir.verify|verify} messages.
         * @function encode
         * @memberof proto.ResNavInDir
         * @static
         * @param {proto.IResNavInDir} m ResNavInDir message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        ResNavInDir.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.worldId != null && Object.hasOwnProperty.call(m, "worldId"))
                w.uint32(8).int32(m.worldId);
            if (m.dirx != null && Object.hasOwnProperty.call(m, "dirx"))
                w.uint32(16).int32(m.dirx);
            if (m.diry != null && Object.hasOwnProperty.call(m, "diry"))
                w.uint32(24).int32(m.diry);
            if (m.speed != null && Object.hasOwnProperty.call(m, "speed"))
                w.uint32(37).float(m.speed);
            return w;
        };

        /**
         * Decodes a ResNavInDir message from the specified reader or buffer.
         * @function decode
         * @memberof proto.ResNavInDir
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {proto.ResNavInDir} ResNavInDir
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        ResNavInDir.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.proto.ResNavInDir();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.worldId = r.int32();
                    break;
                case 2:
                    m.dirx = r.int32();
                    break;
                case 3:
                    m.diry = r.int32();
                    break;
                case 4:
                    m.speed = r.float();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return ResNavInDir;
    })();

    proto.ResNavToDst = (function() {

        /**
         * Properties of a ResNavToDst.
         * @memberof proto
         * @interface IResNavToDst
         * @property {number|null} [worldId] ResNavToDst worldId
         * @property {number|null} [x] ResNavToDst x
         * @property {number|null} [y] ResNavToDst y
         * @property {number|null} [z] ResNavToDst z
         * @property {number|null} [speed] ResNavToDst speed
         */

        /**
         * Constructs a new ResNavToDst.
         * @memberof proto
         * @classdesc Represents a ResNavToDst.
         * @implements IResNavToDst
         * @constructor
         * @param {proto.IResNavToDst=} [p] Properties to set
         */
        function ResNavToDst(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * ResNavToDst worldId.
         * @member {number} worldId
         * @memberof proto.ResNavToDst
         * @instance
         */
        ResNavToDst.prototype.worldId = 0;

        /**
         * ResNavToDst x.
         * @member {number} x
         * @memberof proto.ResNavToDst
         * @instance
         */
        ResNavToDst.prototype.x = 0;

        /**
         * ResNavToDst y.
         * @member {number} y
         * @memberof proto.ResNavToDst
         * @instance
         */
        ResNavToDst.prototype.y = 0;

        /**
         * ResNavToDst z.
         * @member {number} z
         * @memberof proto.ResNavToDst
         * @instance
         */
        ResNavToDst.prototype.z = 0;

        /**
         * ResNavToDst speed.
         * @member {number} speed
         * @memberof proto.ResNavToDst
         * @instance
         */
        ResNavToDst.prototype.speed = 0;

        /**
         * Encodes the specified ResNavToDst message. Does not implicitly {@link proto.ResNavToDst.verify|verify} messages.
         * @function encode
         * @memberof proto.ResNavToDst
         * @static
         * @param {proto.IResNavToDst} m ResNavToDst message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        ResNavToDst.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.worldId != null && Object.hasOwnProperty.call(m, "worldId"))
                w.uint32(8).int32(m.worldId);
            if (m.x != null && Object.hasOwnProperty.call(m, "x"))
                w.uint32(21).float(m.x);
            if (m.y != null && Object.hasOwnProperty.call(m, "y"))
                w.uint32(29).float(m.y);
            if (m.z != null && Object.hasOwnProperty.call(m, "z"))
                w.uint32(37).float(m.z);
            if (m.speed != null && Object.hasOwnProperty.call(m, "speed"))
                w.uint32(45).float(m.speed);
            return w;
        };

        /**
         * Decodes a ResNavToDst message from the specified reader or buffer.
         * @function decode
         * @memberof proto.ResNavToDst
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {proto.ResNavToDst} ResNavToDst
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        ResNavToDst.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.proto.ResNavToDst();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.worldId = r.int32();
                    break;
                case 2:
                    m.x = r.float();
                    break;
                case 3:
                    m.y = r.float();
                    break;
                case 4:
                    m.z = r.float();
                    break;
                case 5:
                    m.speed = r.float();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return ResNavToDst;
    })();

    proto.ResNetHearbeatMsg = (function() {

        /**
         * Properties of a ResNetHearbeatMsg.
         * @memberof proto
         * @interface IResNetHearbeatMsg
         * @property {string|null} [content] ResNetHearbeatMsg content
         */

        /**
         * Constructs a new ResNetHearbeatMsg.
         * @memberof proto
         * @classdesc Represents a ResNetHearbeatMsg.
         * @implements IResNetHearbeatMsg
         * @constructor
         * @param {proto.IResNetHearbeatMsg=} [p] Properties to set
         */
        function ResNetHearbeatMsg(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * ResNetHearbeatMsg content.
         * @member {string} content
         * @memberof proto.ResNetHearbeatMsg
         * @instance
         */
        ResNetHearbeatMsg.prototype.content = "";

        /**
         * Encodes the specified ResNetHearbeatMsg message. Does not implicitly {@link proto.ResNetHearbeatMsg.verify|verify} messages.
         * @function encode
         * @memberof proto.ResNetHearbeatMsg
         * @static
         * @param {proto.IResNetHearbeatMsg} m ResNetHearbeatMsg message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        ResNetHearbeatMsg.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.content != null && Object.hasOwnProperty.call(m, "content"))
                w.uint32(10).string(m.content);
            return w;
        };

        /**
         * Decodes a ResNetHearbeatMsg message from the specified reader or buffer.
         * @function decode
         * @memberof proto.ResNetHearbeatMsg
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {proto.ResNetHearbeatMsg} ResNetHearbeatMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        ResNetHearbeatMsg.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.proto.ResNetHearbeatMsg();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.content = r.string();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return ResNetHearbeatMsg;
    })();

    proto.ResPlayerEscape = (function() {

        /**
         * Properties of a ResPlayerEscape.
         * @memberof proto
         * @interface IResPlayerEscape
         * @property {number|null} [seatId] ResPlayerEscape seatId
         */

        /**
         * Constructs a new ResPlayerEscape.
         * @memberof proto
         * @classdesc Represents a ResPlayerEscape.
         * @implements IResPlayerEscape
         * @constructor
         * @param {proto.IResPlayerEscape=} [p] Properties to set
         */
        function ResPlayerEscape(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * ResPlayerEscape seatId.
         * @member {number} seatId
         * @memberof proto.ResPlayerEscape
         * @instance
         */
        ResPlayerEscape.prototype.seatId = 0;

        /**
         * Encodes the specified ResPlayerEscape message. Does not implicitly {@link proto.ResPlayerEscape.verify|verify} messages.
         * @function encode
         * @memberof proto.ResPlayerEscape
         * @static
         * @param {proto.IResPlayerEscape} m ResPlayerEscape message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        ResPlayerEscape.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.seatId != null && Object.hasOwnProperty.call(m, "seatId"))
                w.uint32(8).int32(m.seatId);
            return w;
        };

        /**
         * Decodes a ResPlayerEscape message from the specified reader or buffer.
         * @function decode
         * @memberof proto.ResPlayerEscape
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {proto.ResPlayerEscape} ResPlayerEscape
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        ResPlayerEscape.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.proto.ResPlayerEscape();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.seatId = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return ResPlayerEscape;
    })();

    proto.ResPlayerIsReady = (function() {

        /**
         * Properties of a ResPlayerIsReady.
         * @memberof proto
         * @interface IResPlayerIsReady
         * @property {number|null} [status] ResPlayerIsReady status
         * @property {number|null} [seatId] ResPlayerIsReady seatId
         */

        /**
         * Constructs a new ResPlayerIsReady.
         * @memberof proto
         * @classdesc Represents a ResPlayerIsReady.
         * @implements IResPlayerIsReady
         * @constructor
         * @param {proto.IResPlayerIsReady=} [p] Properties to set
         */
        function ResPlayerIsReady(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * ResPlayerIsReady status.
         * @member {number} status
         * @memberof proto.ResPlayerIsReady
         * @instance
         */
        ResPlayerIsReady.prototype.status = 0;

        /**
         * ResPlayerIsReady seatId.
         * @member {number} seatId
         * @memberof proto.ResPlayerIsReady
         * @instance
         */
        ResPlayerIsReady.prototype.seatId = 0;

        /**
         * Encodes the specified ResPlayerIsReady message. Does not implicitly {@link proto.ResPlayerIsReady.verify|verify} messages.
         * @function encode
         * @memberof proto.ResPlayerIsReady
         * @static
         * @param {proto.IResPlayerIsReady} m ResPlayerIsReady message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        ResPlayerIsReady.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.status != null && Object.hasOwnProperty.call(m, "status"))
                w.uint32(8).int32(m.status);
            if (m.seatId != null && Object.hasOwnProperty.call(m, "seatId"))
                w.uint32(16).int32(m.seatId);
            return w;
        };

        /**
         * Decodes a ResPlayerIsReady message from the specified reader or buffer.
         * @function decode
         * @memberof proto.ResPlayerIsReady
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {proto.ResPlayerIsReady} ResPlayerIsReady
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        ResPlayerIsReady.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.proto.ResPlayerIsReady();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.status = r.int32();
                    break;
                case 2:
                    m.seatId = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return ResPlayerIsReady;
    })();

    proto.ResPlayerOpt = (function() {

        /**
         * Properties of a ResPlayerOpt.
         * @memberof proto
         * @interface IResPlayerOpt
         * @property {number|null} [status] ResPlayerOpt status
         * @property {number|null} [seatId] ResPlayerOpt seatId
         * @property {number|null} [optType] ResPlayerOpt optType
         * @property {number|null} [v1] ResPlayerOpt v1
         * @property {number|null} [v2] ResPlayerOpt v2
         * @property {number|null} [v3] ResPlayerOpt v3
         */

        /**
         * Constructs a new ResPlayerOpt.
         * @memberof proto
         * @classdesc Represents a ResPlayerOpt.
         * @implements IResPlayerOpt
         * @constructor
         * @param {proto.IResPlayerOpt=} [p] Properties to set
         */
        function ResPlayerOpt(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * ResPlayerOpt status.
         * @member {number} status
         * @memberof proto.ResPlayerOpt
         * @instance
         */
        ResPlayerOpt.prototype.status = 0;

        /**
         * ResPlayerOpt seatId.
         * @member {number} seatId
         * @memberof proto.ResPlayerOpt
         * @instance
         */
        ResPlayerOpt.prototype.seatId = 0;

        /**
         * ResPlayerOpt optType.
         * @member {number} optType
         * @memberof proto.ResPlayerOpt
         * @instance
         */
        ResPlayerOpt.prototype.optType = 0;

        /**
         * ResPlayerOpt v1.
         * @member {number} v1
         * @memberof proto.ResPlayerOpt
         * @instance
         */
        ResPlayerOpt.prototype.v1 = 0;

        /**
         * ResPlayerOpt v2.
         * @member {number} v2
         * @memberof proto.ResPlayerOpt
         * @instance
         */
        ResPlayerOpt.prototype.v2 = 0;

        /**
         * ResPlayerOpt v3.
         * @member {number} v3
         * @memberof proto.ResPlayerOpt
         * @instance
         */
        ResPlayerOpt.prototype.v3 = 0;

        /**
         * Encodes the specified ResPlayerOpt message. Does not implicitly {@link proto.ResPlayerOpt.verify|verify} messages.
         * @function encode
         * @memberof proto.ResPlayerOpt
         * @static
         * @param {proto.IResPlayerOpt} m ResPlayerOpt message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        ResPlayerOpt.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.status != null && Object.hasOwnProperty.call(m, "status"))
                w.uint32(8).int32(m.status);
            if (m.seatId != null && Object.hasOwnProperty.call(m, "seatId"))
                w.uint32(16).int32(m.seatId);
            if (m.optType != null && Object.hasOwnProperty.call(m, "optType"))
                w.uint32(24).int32(m.optType);
            if (m.v1 != null && Object.hasOwnProperty.call(m, "v1"))
                w.uint32(32).int32(m.v1);
            if (m.v2 != null && Object.hasOwnProperty.call(m, "v2"))
                w.uint32(40).int32(m.v2);
            if (m.v3 != null && Object.hasOwnProperty.call(m, "v3"))
                w.uint32(48).int32(m.v3);
            return w;
        };

        /**
         * Decodes a ResPlayerOpt message from the specified reader or buffer.
         * @function decode
         * @memberof proto.ResPlayerOpt
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {proto.ResPlayerOpt} ResPlayerOpt
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        ResPlayerOpt.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.proto.ResPlayerOpt();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.status = r.int32();
                    break;
                case 2:
                    m.seatId = r.int32();
                    break;
                case 3:
                    m.optType = r.int32();
                    break;
                case 4:
                    m.v1 = r.int32();
                    break;
                case 5:
                    m.v2 = r.int32();
                    break;
                case 6:
                    m.v3 = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return ResPlayerOpt;
    })();

    proto.ResPlayerSpawn = (function() {

        /**
         * Properties of a ResPlayerSpawn.
         * @memberof proto
         * @interface IResPlayerSpawn
         * @property {number|null} [status] ResPlayerSpawn status
         * @property {number|null} [worldId] ResPlayerSpawn worldId
         */

        /**
         * Constructs a new ResPlayerSpawn.
         * @memberof proto
         * @classdesc Represents a ResPlayerSpawn.
         * @implements IResPlayerSpawn
         * @constructor
         * @param {proto.IResPlayerSpawn=} [p] Properties to set
         */
        function ResPlayerSpawn(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * ResPlayerSpawn status.
         * @member {number} status
         * @memberof proto.ResPlayerSpawn
         * @instance
         */
        ResPlayerSpawn.prototype.status = 0;

        /**
         * ResPlayerSpawn worldId.
         * @member {number} worldId
         * @memberof proto.ResPlayerSpawn
         * @instance
         */
        ResPlayerSpawn.prototype.worldId = 0;

        /**
         * Encodes the specified ResPlayerSpawn message. Does not implicitly {@link proto.ResPlayerSpawn.verify|verify} messages.
         * @function encode
         * @memberof proto.ResPlayerSpawn
         * @static
         * @param {proto.IResPlayerSpawn} m ResPlayerSpawn message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        ResPlayerSpawn.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.status != null && Object.hasOwnProperty.call(m, "status"))
                w.uint32(8).int32(m.status);
            if (m.worldId != null && Object.hasOwnProperty.call(m, "worldId"))
                w.uint32(16).int32(m.worldId);
            return w;
        };

        /**
         * Decodes a ResPlayerSpawn message from the specified reader or buffer.
         * @function decode
         * @memberof proto.ResPlayerSpawn
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {proto.ResPlayerSpawn} ResPlayerSpawn
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        ResPlayerSpawn.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.proto.ResPlayerSpawn();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.status = r.int32();
                    break;
                case 2:
                    m.worldId = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return ResPlayerSpawn;
    })();

    proto.ResPullingBonuesList = (function() {

        /**
         * Properties of a ResPullingBonuesList.
         * @memberof proto
         * @interface IResPullingBonuesList
         * @property {number|null} [status] ResPullingBonuesList status
         * @property {Array.<proto.IBonuesItem>|null} [bonues] ResPullingBonuesList bonues
         */

        /**
         * Constructs a new ResPullingBonuesList.
         * @memberof proto
         * @classdesc Represents a ResPullingBonuesList.
         * @implements IResPullingBonuesList
         * @constructor
         * @param {proto.IResPullingBonuesList=} [p] Properties to set
         */
        function ResPullingBonuesList(p) {
            this.bonues = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * ResPullingBonuesList status.
         * @member {number} status
         * @memberof proto.ResPullingBonuesList
         * @instance
         */
        ResPullingBonuesList.prototype.status = 0;

        /**
         * ResPullingBonuesList bonues.
         * @member {Array.<proto.IBonuesItem>} bonues
         * @memberof proto.ResPullingBonuesList
         * @instance
         */
        ResPullingBonuesList.prototype.bonues = $util.emptyArray;

        /**
         * Encodes the specified ResPullingBonuesList message. Does not implicitly {@link proto.ResPullingBonuesList.verify|verify} messages.
         * @function encode
         * @memberof proto.ResPullingBonuesList
         * @static
         * @param {proto.IResPullingBonuesList} m ResPullingBonuesList message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        ResPullingBonuesList.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.status != null && Object.hasOwnProperty.call(m, "status"))
                w.uint32(8).int32(m.status);
            if (m.bonues != null && m.bonues.length) {
                for (var i = 0; i < m.bonues.length; ++i)
                    $root.proto.BonuesItem.encode(m.bonues[i], w.uint32(18).fork()).ldelim();
            }
            return w;
        };

        /**
         * Decodes a ResPullingBonuesList message from the specified reader or buffer.
         * @function decode
         * @memberof proto.ResPullingBonuesList
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {proto.ResPullingBonuesList} ResPullingBonuesList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        ResPullingBonuesList.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.proto.ResPullingBonuesList();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.status = r.int32();
                    break;
                case 2:
                    if (!(m.bonues && m.bonues.length))
                        m.bonues = [];
                    m.bonues.push($root.proto.BonuesItem.decode(r, r.uint32()));
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return ResPullingBonuesList;
    })();

    proto.ResPullingMailMsg = (function() {

        /**
         * Properties of a ResPullingMailMsg.
         * @memberof proto
         * @interface IResPullingMailMsg
         * @property {number|null} [status] ResPullingMailMsg status
         * @property {Array.<proto.IMailMsgItem>|null} [mailMessages] ResPullingMailMsg mailMessages
         */

        /**
         * Constructs a new ResPullingMailMsg.
         * @memberof proto
         * @classdesc Represents a ResPullingMailMsg.
         * @implements IResPullingMailMsg
         * @constructor
         * @param {proto.IResPullingMailMsg=} [p] Properties to set
         */
        function ResPullingMailMsg(p) {
            this.mailMessages = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * ResPullingMailMsg status.
         * @member {number} status
         * @memberof proto.ResPullingMailMsg
         * @instance
         */
        ResPullingMailMsg.prototype.status = 0;

        /**
         * ResPullingMailMsg mailMessages.
         * @member {Array.<proto.IMailMsgItem>} mailMessages
         * @memberof proto.ResPullingMailMsg
         * @instance
         */
        ResPullingMailMsg.prototype.mailMessages = $util.emptyArray;

        /**
         * Encodes the specified ResPullingMailMsg message. Does not implicitly {@link proto.ResPullingMailMsg.verify|verify} messages.
         * @function encode
         * @memberof proto.ResPullingMailMsg
         * @static
         * @param {proto.IResPullingMailMsg} m ResPullingMailMsg message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        ResPullingMailMsg.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.status != null && Object.hasOwnProperty.call(m, "status"))
                w.uint32(8).int32(m.status);
            if (m.mailMessages != null && m.mailMessages.length) {
                for (var i = 0; i < m.mailMessages.length; ++i)
                    $root.proto.MailMsgItem.encode(m.mailMessages[i], w.uint32(18).fork()).ldelim();
            }
            return w;
        };

        /**
         * Decodes a ResPullingMailMsg message from the specified reader or buffer.
         * @function decode
         * @memberof proto.ResPullingMailMsg
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {proto.ResPullingMailMsg} ResPullingMailMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        ResPullingMailMsg.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.proto.ResPullingMailMsg();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.status = r.int32();
                    break;
                case 2:
                    if (!(m.mailMessages && m.mailMessages.length))
                        m.mailMessages = [];
                    m.mailMessages.push($root.proto.MailMsgItem.decode(r, r.uint32()));
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return ResPullingMailMsg;
    })();

    proto.ResPullingPackData = (function() {

        /**
         * Properties of a ResPullingPackData.
         * @memberof proto
         * @interface IResPullingPackData
         * @property {number|null} [status] ResPullingPackData status
         * @property {Array.<proto.IDicGoodsItem>|null} [packGoods] ResPullingPackData packGoods
         */

        /**
         * Constructs a new ResPullingPackData.
         * @memberof proto
         * @classdesc Represents a ResPullingPackData.
         * @implements IResPullingPackData
         * @constructor
         * @param {proto.IResPullingPackData=} [p] Properties to set
         */
        function ResPullingPackData(p) {
            this.packGoods = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * ResPullingPackData status.
         * @member {number} status
         * @memberof proto.ResPullingPackData
         * @instance
         */
        ResPullingPackData.prototype.status = 0;

        /**
         * ResPullingPackData packGoods.
         * @member {Array.<proto.IDicGoodsItem>} packGoods
         * @memberof proto.ResPullingPackData
         * @instance
         */
        ResPullingPackData.prototype.packGoods = $util.emptyArray;

        /**
         * Encodes the specified ResPullingPackData message. Does not implicitly {@link proto.ResPullingPackData.verify|verify} messages.
         * @function encode
         * @memberof proto.ResPullingPackData
         * @static
         * @param {proto.IResPullingPackData} m ResPullingPackData message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        ResPullingPackData.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.status != null && Object.hasOwnProperty.call(m, "status"))
                w.uint32(8).int32(m.status);
            if (m.packGoods != null && m.packGoods.length) {
                for (var i = 0; i < m.packGoods.length; ++i)
                    $root.proto.DicGoodsItem.encode(m.packGoods[i], w.uint32(18).fork()).ldelim();
            }
            return w;
        };

        /**
         * Decodes a ResPullingPackData message from the specified reader or buffer.
         * @function decode
         * @memberof proto.ResPullingPackData
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {proto.ResPullingPackData} ResPullingPackData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        ResPullingPackData.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.proto.ResPullingPackData();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.status = r.int32();
                    break;
                case 2:
                    if (!(m.packGoods && m.packGoods.length))
                        m.packGoods = [];
                    m.packGoods.push($root.proto.DicGoodsItem.decode(r, r.uint32()));
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return ResPullingPackData;
    })();

    proto.ResPullingPlayerData = (function() {

        /**
         * Properties of a ResPullingPlayerData.
         * @memberof proto
         * @interface IResPullingPlayerData
         * @property {number|null} [status] ResPullingPlayerData status
         * @property {proto.IPlayerInfo|null} [pInfo] ResPullingPlayerData pInfo
         * @property {number|null} [isReConnectGame] ResPullingPlayerData isReConnectGame
         */

        /**
         * Constructs a new ResPullingPlayerData.
         * @memberof proto
         * @classdesc Represents a ResPullingPlayerData.
         * @implements IResPullingPlayerData
         * @constructor
         * @param {proto.IResPullingPlayerData=} [p] Properties to set
         */
        function ResPullingPlayerData(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * ResPullingPlayerData status.
         * @member {number} status
         * @memberof proto.ResPullingPlayerData
         * @instance
         */
        ResPullingPlayerData.prototype.status = 0;

        /**
         * ResPullingPlayerData pInfo.
         * @member {proto.IPlayerInfo|null|undefined} pInfo
         * @memberof proto.ResPullingPlayerData
         * @instance
         */
        ResPullingPlayerData.prototype.pInfo = null;

        /**
         * ResPullingPlayerData isReConnectGame.
         * @member {number} isReConnectGame
         * @memberof proto.ResPullingPlayerData
         * @instance
         */
        ResPullingPlayerData.prototype.isReConnectGame = 0;

        /**
         * Encodes the specified ResPullingPlayerData message. Does not implicitly {@link proto.ResPullingPlayerData.verify|verify} messages.
         * @function encode
         * @memberof proto.ResPullingPlayerData
         * @static
         * @param {proto.IResPullingPlayerData} m ResPullingPlayerData message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        ResPullingPlayerData.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.status != null && Object.hasOwnProperty.call(m, "status"))
                w.uint32(8).int32(m.status);
            if (m.pInfo != null && Object.hasOwnProperty.call(m, "pInfo"))
                $root.proto.PlayerInfo.encode(m.pInfo, w.uint32(18).fork()).ldelim();
            if (m.isReConnectGame != null && Object.hasOwnProperty.call(m, "isReConnectGame"))
                w.uint32(24).int32(m.isReConnectGame);
            return w;
        };

        /**
         * Decodes a ResPullingPlayerData message from the specified reader or buffer.
         * @function decode
         * @memberof proto.ResPullingPlayerData
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {proto.ResPullingPlayerData} ResPullingPlayerData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        ResPullingPlayerData.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.proto.ResPullingPlayerData();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.status = r.int32();
                    break;
                case 2:
                    m.pInfo = $root.proto.PlayerInfo.decode(r, r.uint32());
                    break;
                case 3:
                    m.isReConnectGame = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return ResPullingPlayerData;
    })();

    proto.ResPullingRank = (function() {

        /**
         * Properties of a ResPullingRank.
         * @memberof proto
         * @interface IResPullingRank
         * @property {number|null} [status] ResPullingRank status
         * @property {number|null} [selfIndex] ResPullingRank selfIndex
         * @property {Array.<proto.IRankItem>|null} [ranks] ResPullingRank ranks
         */

        /**
         * Constructs a new ResPullingRank.
         * @memberof proto
         * @classdesc Represents a ResPullingRank.
         * @implements IResPullingRank
         * @constructor
         * @param {proto.IResPullingRank=} [p] Properties to set
         */
        function ResPullingRank(p) {
            this.ranks = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * ResPullingRank status.
         * @member {number} status
         * @memberof proto.ResPullingRank
         * @instance
         */
        ResPullingRank.prototype.status = 0;

        /**
         * ResPullingRank selfIndex.
         * @member {number} selfIndex
         * @memberof proto.ResPullingRank
         * @instance
         */
        ResPullingRank.prototype.selfIndex = 0;

        /**
         * ResPullingRank ranks.
         * @member {Array.<proto.IRankItem>} ranks
         * @memberof proto.ResPullingRank
         * @instance
         */
        ResPullingRank.prototype.ranks = $util.emptyArray;

        /**
         * Encodes the specified ResPullingRank message. Does not implicitly {@link proto.ResPullingRank.verify|verify} messages.
         * @function encode
         * @memberof proto.ResPullingRank
         * @static
         * @param {proto.IResPullingRank} m ResPullingRank message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        ResPullingRank.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.status != null && Object.hasOwnProperty.call(m, "status"))
                w.uint32(8).int32(m.status);
            if (m.selfIndex != null && Object.hasOwnProperty.call(m, "selfIndex"))
                w.uint32(16).int32(m.selfIndex);
            if (m.ranks != null && m.ranks.length) {
                for (var i = 0; i < m.ranks.length; ++i)
                    $root.proto.RankItem.encode(m.ranks[i], w.uint32(26).fork()).ldelim();
            }
            return w;
        };

        /**
         * Decodes a ResPullingRank message from the specified reader or buffer.
         * @function decode
         * @memberof proto.ResPullingRank
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {proto.ResPullingRank} ResPullingRank
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        ResPullingRank.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.proto.ResPullingRank();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.status = r.int32();
                    break;
                case 2:
                    m.selfIndex = r.int32();
                    break;
                case 3:
                    if (!(m.ranks && m.ranks.length))
                        m.ranks = [];
                    m.ranks.push($root.proto.RankItem.decode(r, r.uint32()));
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return ResPullingRank;
    })();

    proto.ResPullingTaskList = (function() {

        /**
         * Properties of a ResPullingTaskList.
         * @memberof proto
         * @interface IResPullingTaskList
         * @property {number|null} [status] ResPullingTaskList status
         * @property {Array.<proto.ITaskItem>|null} [tasks] ResPullingTaskList tasks
         */

        /**
         * Constructs a new ResPullingTaskList.
         * @memberof proto
         * @classdesc Represents a ResPullingTaskList.
         * @implements IResPullingTaskList
         * @constructor
         * @param {proto.IResPullingTaskList=} [p] Properties to set
         */
        function ResPullingTaskList(p) {
            this.tasks = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * ResPullingTaskList status.
         * @member {number} status
         * @memberof proto.ResPullingTaskList
         * @instance
         */
        ResPullingTaskList.prototype.status = 0;

        /**
         * ResPullingTaskList tasks.
         * @member {Array.<proto.ITaskItem>} tasks
         * @memberof proto.ResPullingTaskList
         * @instance
         */
        ResPullingTaskList.prototype.tasks = $util.emptyArray;

        /**
         * Encodes the specified ResPullingTaskList message. Does not implicitly {@link proto.ResPullingTaskList.verify|verify} messages.
         * @function encode
         * @memberof proto.ResPullingTaskList
         * @static
         * @param {proto.IResPullingTaskList} m ResPullingTaskList message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        ResPullingTaskList.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.status != null && Object.hasOwnProperty.call(m, "status"))
                w.uint32(8).int32(m.status);
            if (m.tasks != null && m.tasks.length) {
                for (var i = 0; i < m.tasks.length; ++i)
                    $root.proto.TaskItem.encode(m.tasks[i], w.uint32(18).fork()).ldelim();
            }
            return w;
        };

        /**
         * Decodes a ResPullingTaskList message from the specified reader or buffer.
         * @function decode
         * @memberof proto.ResPullingTaskList
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {proto.ResPullingTaskList} ResPullingTaskList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        ResPullingTaskList.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.proto.ResPullingTaskList();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.status = r.int32();
                    break;
                case 2:
                    if (!(m.tasks && m.tasks.length))
                        m.tasks = [];
                    m.tasks.push($root.proto.TaskItem.decode(r, r.uint32()));
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return ResPullingTaskList;
    })();

    proto.ResReconnRoom = (function() {

        /**
         * Properties of a ResReconnRoom.
         * @memberof proto
         * @interface IResReconnRoom
         * @property {proto.IResEnterRoom|null} [room] ResReconnRoom room
         * @property {proto.IResSitdown|null} [selfSitdown] ResReconnRoom selfSitdown
         * @property {Array.<proto.IResUserArrivedSeat>|null} [seats] ResReconnRoom seats
         */

        /**
         * Constructs a new ResReconnRoom.
         * @memberof proto
         * @classdesc Represents a ResReconnRoom.
         * @implements IResReconnRoom
         * @constructor
         * @param {proto.IResReconnRoom=} [p] Properties to set
         */
        function ResReconnRoom(p) {
            this.seats = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * ResReconnRoom room.
         * @member {proto.IResEnterRoom|null|undefined} room
         * @memberof proto.ResReconnRoom
         * @instance
         */
        ResReconnRoom.prototype.room = null;

        /**
         * ResReconnRoom selfSitdown.
         * @member {proto.IResSitdown|null|undefined} selfSitdown
         * @memberof proto.ResReconnRoom
         * @instance
         */
        ResReconnRoom.prototype.selfSitdown = null;

        /**
         * ResReconnRoom seats.
         * @member {Array.<proto.IResUserArrivedSeat>} seats
         * @memberof proto.ResReconnRoom
         * @instance
         */
        ResReconnRoom.prototype.seats = $util.emptyArray;

        /**
         * Encodes the specified ResReconnRoom message. Does not implicitly {@link proto.ResReconnRoom.verify|verify} messages.
         * @function encode
         * @memberof proto.ResReconnRoom
         * @static
         * @param {proto.IResReconnRoom} m ResReconnRoom message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        ResReconnRoom.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.room != null && Object.hasOwnProperty.call(m, "room"))
                $root.proto.ResEnterRoom.encode(m.room, w.uint32(10).fork()).ldelim();
            if (m.selfSitdown != null && Object.hasOwnProperty.call(m, "selfSitdown"))
                $root.proto.ResSitdown.encode(m.selfSitdown, w.uint32(18).fork()).ldelim();
            if (m.seats != null && m.seats.length) {
                for (var i = 0; i < m.seats.length; ++i)
                    $root.proto.ResUserArrivedSeat.encode(m.seats[i], w.uint32(26).fork()).ldelim();
            }
            return w;
        };

        /**
         * Decodes a ResReconnRoom message from the specified reader or buffer.
         * @function decode
         * @memberof proto.ResReconnRoom
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {proto.ResReconnRoom} ResReconnRoom
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        ResReconnRoom.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.proto.ResReconnRoom();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.room = $root.proto.ResEnterRoom.decode(r, r.uint32());
                    break;
                case 2:
                    m.selfSitdown = $root.proto.ResSitdown.decode(r, r.uint32());
                    break;
                case 3:
                    if (!(m.seats && m.seats.length))
                        m.seats = [];
                    m.seats.push($root.proto.ResUserArrivedSeat.decode(r, r.uint32()));
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return ResReconnRoom;
    })();

    proto.ResRecvBonues = (function() {

        /**
         * Properties of a ResRecvBonues.
         * @memberof proto
         * @interface IResRecvBonues
         * @property {number|null} [status] ResRecvBonues status
         * @property {number|null} [typeId] ResRecvBonues typeId
         * @property {number|null} [b1] ResRecvBonues b1
         * @property {number|null} [b2] ResRecvBonues b2
         * @property {number|null} [b3] ResRecvBonues b3
         * @property {number|null} [b4] ResRecvBonues b4
         * @property {number|null} [b5] ResRecvBonues b5
         */

        /**
         * Constructs a new ResRecvBonues.
         * @memberof proto
         * @classdesc Represents a ResRecvBonues.
         * @implements IResRecvBonues
         * @constructor
         * @param {proto.IResRecvBonues=} [p] Properties to set
         */
        function ResRecvBonues(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * ResRecvBonues status.
         * @member {number} status
         * @memberof proto.ResRecvBonues
         * @instance
         */
        ResRecvBonues.prototype.status = 0;

        /**
         * ResRecvBonues typeId.
         * @member {number} typeId
         * @memberof proto.ResRecvBonues
         * @instance
         */
        ResRecvBonues.prototype.typeId = 0;

        /**
         * ResRecvBonues b1.
         * @member {number} b1
         * @memberof proto.ResRecvBonues
         * @instance
         */
        ResRecvBonues.prototype.b1 = 0;

        /**
         * ResRecvBonues b2.
         * @member {number} b2
         * @memberof proto.ResRecvBonues
         * @instance
         */
        ResRecvBonues.prototype.b2 = 0;

        /**
         * ResRecvBonues b3.
         * @member {number} b3
         * @memberof proto.ResRecvBonues
         * @instance
         */
        ResRecvBonues.prototype.b3 = 0;

        /**
         * ResRecvBonues b4.
         * @member {number} b4
         * @memberof proto.ResRecvBonues
         * @instance
         */
        ResRecvBonues.prototype.b4 = 0;

        /**
         * ResRecvBonues b5.
         * @member {number} b5
         * @memberof proto.ResRecvBonues
         * @instance
         */
        ResRecvBonues.prototype.b5 = 0;

        /**
         * Encodes the specified ResRecvBonues message. Does not implicitly {@link proto.ResRecvBonues.verify|verify} messages.
         * @function encode
         * @memberof proto.ResRecvBonues
         * @static
         * @param {proto.IResRecvBonues} m ResRecvBonues message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        ResRecvBonues.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.status != null && Object.hasOwnProperty.call(m, "status"))
                w.uint32(8).int32(m.status);
            if (m.typeId != null && Object.hasOwnProperty.call(m, "typeId"))
                w.uint32(16).int32(m.typeId);
            if (m.b1 != null && Object.hasOwnProperty.call(m, "b1"))
                w.uint32(24).int32(m.b1);
            if (m.b2 != null && Object.hasOwnProperty.call(m, "b2"))
                w.uint32(32).int32(m.b2);
            if (m.b3 != null && Object.hasOwnProperty.call(m, "b3"))
                w.uint32(40).int32(m.b3);
            if (m.b4 != null && Object.hasOwnProperty.call(m, "b4"))
                w.uint32(48).int32(m.b4);
            if (m.b5 != null && Object.hasOwnProperty.call(m, "b5"))
                w.uint32(56).int32(m.b5);
            return w;
        };

        /**
         * Decodes a ResRecvBonues message from the specified reader or buffer.
         * @function decode
         * @memberof proto.ResRecvBonues
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {proto.ResRecvBonues} ResRecvBonues
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        ResRecvBonues.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.proto.ResRecvBonues();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.status = r.int32();
                    break;
                case 2:
                    m.typeId = r.int32();
                    break;
                case 3:
                    m.b1 = r.int32();
                    break;
                case 4:
                    m.b2 = r.int32();
                    break;
                case 5:
                    m.b3 = r.int32();
                    break;
                case 6:
                    m.b4 = r.int32();
                    break;
                case 7:
                    m.b5 = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return ResRecvBonues;
    })();

    proto.ResRecvLoginBonues = (function() {

        /**
         * Properties of a ResRecvLoginBonues.
         * @memberof proto
         * @interface IResRecvLoginBonues
         * @property {number|null} [status] ResRecvLoginBonues status
         * @property {number|null} [num] ResRecvLoginBonues num
         */

        /**
         * Constructs a new ResRecvLoginBonues.
         * @memberof proto
         * @classdesc Represents a ResRecvLoginBonues.
         * @implements IResRecvLoginBonues
         * @constructor
         * @param {proto.IResRecvLoginBonues=} [p] Properties to set
         */
        function ResRecvLoginBonues(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * ResRecvLoginBonues status.
         * @member {number} status
         * @memberof proto.ResRecvLoginBonues
         * @instance
         */
        ResRecvLoginBonues.prototype.status = 0;

        /**
         * ResRecvLoginBonues num.
         * @member {number} num
         * @memberof proto.ResRecvLoginBonues
         * @instance
         */
        ResRecvLoginBonues.prototype.num = 0;

        /**
         * Encodes the specified ResRecvLoginBonues message. Does not implicitly {@link proto.ResRecvLoginBonues.verify|verify} messages.
         * @function encode
         * @memberof proto.ResRecvLoginBonues
         * @static
         * @param {proto.IResRecvLoginBonues} m ResRecvLoginBonues message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        ResRecvLoginBonues.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.status != null && Object.hasOwnProperty.call(m, "status"))
                w.uint32(8).int32(m.status);
            if (m.num != null && Object.hasOwnProperty.call(m, "num"))
                w.uint32(16).int32(m.num);
            return w;
        };

        /**
         * Decodes a ResRecvLoginBonues message from the specified reader or buffer.
         * @function decode
         * @memberof proto.ResRecvLoginBonues
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {proto.ResRecvLoginBonues} ResRecvLoginBonues
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        ResRecvLoginBonues.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.proto.ResRecvLoginBonues();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.status = r.int32();
                    break;
                case 2:
                    m.num = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return ResRecvLoginBonues;
    })();

    proto.ResRegisterUser = (function() {

        /**
         * Properties of a ResRegisterUser.
         * @memberof proto
         * @interface IResRegisterUser
         * @property {number|null} [status] ResRegisterUser status
         * @property {string|null} [errorStr] ResRegisterUser errorStr
         */

        /**
         * Constructs a new ResRegisterUser.
         * @memberof proto
         * @classdesc Represents a ResRegisterUser.
         * @implements IResRegisterUser
         * @constructor
         * @param {proto.IResRegisterUser=} [p] Properties to set
         */
        function ResRegisterUser(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * ResRegisterUser status.
         * @member {number} status
         * @memberof proto.ResRegisterUser
         * @instance
         */
        ResRegisterUser.prototype.status = 0;

        /**
         * ResRegisterUser errorStr.
         * @member {string} errorStr
         * @memberof proto.ResRegisterUser
         * @instance
         */
        ResRegisterUser.prototype.errorStr = "";

        /**
         * Encodes the specified ResRegisterUser message. Does not implicitly {@link proto.ResRegisterUser.verify|verify} messages.
         * @function encode
         * @memberof proto.ResRegisterUser
         * @static
         * @param {proto.IResRegisterUser} m ResRegisterUser message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        ResRegisterUser.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.status != null && Object.hasOwnProperty.call(m, "status"))
                w.uint32(8).int32(m.status);
            if (m.errorStr != null && Object.hasOwnProperty.call(m, "errorStr"))
                w.uint32(18).string(m.errorStr);
            return w;
        };

        /**
         * Decodes a ResRegisterUser message from the specified reader or buffer.
         * @function decode
         * @memberof proto.ResRegisterUser
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {proto.ResRegisterUser} ResRegisterUser
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        ResRegisterUser.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.proto.ResRegisterUser();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.status = r.int32();
                    break;
                case 2:
                    m.errorStr = r.string();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return ResRegisterUser;
    })();

    proto.ResRoundCheckOut = (function() {

        /**
         * Properties of a ResRoundCheckOut.
         * @memberof proto
         * @interface IResRoundCheckOut
         * @property {number|null} [reserve] ResRoundCheckOut reserve
         */

        /**
         * Constructs a new ResRoundCheckOut.
         * @memberof proto
         * @classdesc Represents a ResRoundCheckOut.
         * @implements IResRoundCheckOut
         * @constructor
         * @param {proto.IResRoundCheckOut=} [p] Properties to set
         */
        function ResRoundCheckOut(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * ResRoundCheckOut reserve.
         * @member {number} reserve
         * @memberof proto.ResRoundCheckOut
         * @instance
         */
        ResRoundCheckOut.prototype.reserve = 0;

        /**
         * Encodes the specified ResRoundCheckOut message. Does not implicitly {@link proto.ResRoundCheckOut.verify|verify} messages.
         * @function encode
         * @memberof proto.ResRoundCheckOut
         * @static
         * @param {proto.IResRoundCheckOut} m ResRoundCheckOut message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        ResRoundCheckOut.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.reserve != null && Object.hasOwnProperty.call(m, "reserve"))
                w.uint32(8).int32(m.reserve);
            return w;
        };

        /**
         * Decodes a ResRoundCheckOut message from the specified reader or buffer.
         * @function decode
         * @memberof proto.ResRoundCheckOut
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {proto.ResRoundCheckOut} ResRoundCheckOut
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        ResRoundCheckOut.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.proto.ResRoundCheckOut();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.reserve = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return ResRoundCheckOut;
    })();

    proto.ResRoundClear = (function() {

        /**
         * Properties of a ResRoundClear.
         * @memberof proto
         * @interface IResRoundClear
         * @property {number|null} [reserve] ResRoundClear reserve
         */

        /**
         * Constructs a new ResRoundClear.
         * @memberof proto
         * @classdesc Represents a ResRoundClear.
         * @implements IResRoundClear
         * @constructor
         * @param {proto.IResRoundClear=} [p] Properties to set
         */
        function ResRoundClear(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * ResRoundClear reserve.
         * @member {number} reserve
         * @memberof proto.ResRoundClear
         * @instance
         */
        ResRoundClear.prototype.reserve = 0;

        /**
         * Encodes the specified ResRoundClear message. Does not implicitly {@link proto.ResRoundClear.verify|verify} messages.
         * @function encode
         * @memberof proto.ResRoundClear
         * @static
         * @param {proto.IResRoundClear} m ResRoundClear message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        ResRoundClear.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.reserve != null && Object.hasOwnProperty.call(m, "reserve"))
                w.uint32(8).int32(m.reserve);
            return w;
        };

        /**
         * Decodes a ResRoundClear message from the specified reader or buffer.
         * @function decode
         * @memberof proto.ResRoundClear
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {proto.ResRoundClear} ResRoundClear
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        ResRoundClear.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.proto.ResRoundClear();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.reserve = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return ResRoundClear;
    })();

    proto.ResRoundReady = (function() {

        /**
         * Properties of a ResRoundReady.
         * @memberof proto
         * @interface IResRoundReady
         * @property {number|null} [roundTime] ResRoundReady roundTime
         */

        /**
         * Constructs a new ResRoundReady.
         * @memberof proto
         * @classdesc Represents a ResRoundReady.
         * @implements IResRoundReady
         * @constructor
         * @param {proto.IResRoundReady=} [p] Properties to set
         */
        function ResRoundReady(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * ResRoundReady roundTime.
         * @member {number} roundTime
         * @memberof proto.ResRoundReady
         * @instance
         */
        ResRoundReady.prototype.roundTime = 0;

        /**
         * Encodes the specified ResRoundReady message. Does not implicitly {@link proto.ResRoundReady.verify|verify} messages.
         * @function encode
         * @memberof proto.ResRoundReady
         * @static
         * @param {proto.IResRoundReady} m ResRoundReady message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        ResRoundReady.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.roundTime != null && Object.hasOwnProperty.call(m, "roundTime"))
                w.uint32(8).int32(m.roundTime);
            return w;
        };

        /**
         * Decodes a ResRoundReady message from the specified reader or buffer.
         * @function decode
         * @memberof proto.ResRoundReady
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {proto.ResRoundReady} ResRoundReady
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        ResRoundReady.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.proto.ResRoundReady();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.roundTime = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return ResRoundReady;
    })();

    proto.ResRoundStarted = (function() {

        /**
         * Properties of a ResRoundStarted.
         * @memberof proto
         * @interface IResRoundStarted
         * @property {number|null} [reserve] ResRoundStarted reserve
         */

        /**
         * Constructs a new ResRoundStarted.
         * @memberof proto
         * @classdesc Represents a ResRoundStarted.
         * @implements IResRoundStarted
         * @constructor
         * @param {proto.IResRoundStarted=} [p] Properties to set
         */
        function ResRoundStarted(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * ResRoundStarted reserve.
         * @member {number} reserve
         * @memberof proto.ResRoundStarted
         * @instance
         */
        ResRoundStarted.prototype.reserve = 0;

        /**
         * Encodes the specified ResRoundStarted message. Does not implicitly {@link proto.ResRoundStarted.verify|verify} messages.
         * @function encode
         * @memberof proto.ResRoundStarted
         * @static
         * @param {proto.IResRoundStarted} m ResRoundStarted message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        ResRoundStarted.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.reserve != null && Object.hasOwnProperty.call(m, "reserve"))
                w.uint32(8).int32(m.reserve);
            return w;
        };

        /**
         * Decodes a ResRoundStarted message from the specified reader or buffer.
         * @function decode
         * @memberof proto.ResRoundStarted
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {proto.ResRoundStarted} ResRoundStarted
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        ResRoundStarted.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.proto.ResRoundStarted();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.reserve = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return ResRoundStarted;
    })();

    proto.ResSelectPlayer = (function() {

        /**
         * Properties of a ResSelectPlayer.
         * @memberof proto
         * @interface IResSelectPlayer
         * @property {number|null} [status] ResSelectPlayer status
         * @property {proto.IPlayerInfo|null} [pInfo] ResSelectPlayer pInfo
         * @property {number|null} [isReConnectGame] ResSelectPlayer isReConnectGame
         */

        /**
         * Constructs a new ResSelectPlayer.
         * @memberof proto
         * @classdesc Represents a ResSelectPlayer.
         * @implements IResSelectPlayer
         * @constructor
         * @param {proto.IResSelectPlayer=} [p] Properties to set
         */
        function ResSelectPlayer(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * ResSelectPlayer status.
         * @member {number} status
         * @memberof proto.ResSelectPlayer
         * @instance
         */
        ResSelectPlayer.prototype.status = 0;

        /**
         * ResSelectPlayer pInfo.
         * @member {proto.IPlayerInfo|null|undefined} pInfo
         * @memberof proto.ResSelectPlayer
         * @instance
         */
        ResSelectPlayer.prototype.pInfo = null;

        /**
         * ResSelectPlayer isReConnectGame.
         * @member {number} isReConnectGame
         * @memberof proto.ResSelectPlayer
         * @instance
         */
        ResSelectPlayer.prototype.isReConnectGame = 0;

        /**
         * Encodes the specified ResSelectPlayer message. Does not implicitly {@link proto.ResSelectPlayer.verify|verify} messages.
         * @function encode
         * @memberof proto.ResSelectPlayer
         * @static
         * @param {proto.IResSelectPlayer} m ResSelectPlayer message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        ResSelectPlayer.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.status != null && Object.hasOwnProperty.call(m, "status"))
                w.uint32(8).int32(m.status);
            if (m.pInfo != null && Object.hasOwnProperty.call(m, "pInfo"))
                $root.proto.PlayerInfo.encode(m.pInfo, w.uint32(18).fork()).ldelim();
            if (m.isReConnectGame != null && Object.hasOwnProperty.call(m, "isReConnectGame"))
                w.uint32(24).int32(m.isReConnectGame);
            return w;
        };

        /**
         * Decodes a ResSelectPlayer message from the specified reader or buffer.
         * @function decode
         * @memberof proto.ResSelectPlayer
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {proto.ResSelectPlayer} ResSelectPlayer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        ResSelectPlayer.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.proto.ResSelectPlayer();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.status = r.int32();
                    break;
                case 2:
                    m.pInfo = $root.proto.PlayerInfo.decode(r, r.uint32());
                    break;
                case 3:
                    m.isReConnectGame = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return ResSelectPlayer;
    })();

    proto.ResSitdown = (function() {

        /**
         * Properties of a ResSitdown.
         * @memberof proto
         * @interface IResSitdown
         * @property {number|null} [status] ResSitdown status
         * @property {number|null} [seatId] ResSitdown seatId
         */

        /**
         * Constructs a new ResSitdown.
         * @memberof proto
         * @classdesc Represents a ResSitdown.
         * @implements IResSitdown
         * @constructor
         * @param {proto.IResSitdown=} [p] Properties to set
         */
        function ResSitdown(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * ResSitdown status.
         * @member {number} status
         * @memberof proto.ResSitdown
         * @instance
         */
        ResSitdown.prototype.status = 0;

        /**
         * ResSitdown seatId.
         * @member {number} seatId
         * @memberof proto.ResSitdown
         * @instance
         */
        ResSitdown.prototype.seatId = 0;

        /**
         * Encodes the specified ResSitdown message. Does not implicitly {@link proto.ResSitdown.verify|verify} messages.
         * @function encode
         * @memberof proto.ResSitdown
         * @static
         * @param {proto.IResSitdown} m ResSitdown message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        ResSitdown.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.status != null && Object.hasOwnProperty.call(m, "status"))
                w.uint32(8).int32(m.status);
            if (m.seatId != null && Object.hasOwnProperty.call(m, "seatId"))
                w.uint32(16).int32(m.seatId);
            return w;
        };

        /**
         * Decodes a ResSitdown message from the specified reader or buffer.
         * @function decode
         * @memberof proto.ResSitdown
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {proto.ResSitdown} ResSitdown
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        ResSitdown.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.proto.ResSitdown();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.status = r.int32();
                    break;
                case 2:
                    m.seatId = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return ResSitdown;
    })();

    proto.ResStandup = (function() {

        /**
         * Properties of a ResStandup.
         * @memberof proto
         * @interface IResStandup
         * @property {number|null} [status] ResStandup status
         */

        /**
         * Constructs a new ResStandup.
         * @memberof proto
         * @classdesc Represents a ResStandup.
         * @implements IResStandup
         * @constructor
         * @param {proto.IResStandup=} [p] Properties to set
         */
        function ResStandup(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * ResStandup status.
         * @member {number} status
         * @memberof proto.ResStandup
         * @instance
         */
        ResStandup.prototype.status = 0;

        /**
         * Encodes the specified ResStandup message. Does not implicitly {@link proto.ResStandup.verify|verify} messages.
         * @function encode
         * @memberof proto.ResStandup
         * @static
         * @param {proto.IResStandup} m ResStandup message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        ResStandup.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.status != null && Object.hasOwnProperty.call(m, "status"))
                w.uint32(8).int32(m.status);
            return w;
        };

        /**
         * Decodes a ResStandup message from the specified reader or buffer.
         * @function decode
         * @memberof proto.ResStandup
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {proto.ResStandup} ResStandup
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        ResStandup.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.proto.ResStandup();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.status = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return ResStandup;
    })();

    proto.ResStartBuff = (function() {

        /**
         * Properties of a ResStartBuff.
         * @memberof proto
         * @interface IResStartBuff
         * @property {number|null} [seatOrWorldId] ResStartBuff seatOrWorldId
         * @property {number|null} [buffId] ResStartBuff buffId
         */

        /**
         * Constructs a new ResStartBuff.
         * @memberof proto
         * @classdesc Represents a ResStartBuff.
         * @implements IResStartBuff
         * @constructor
         * @param {proto.IResStartBuff=} [p] Properties to set
         */
        function ResStartBuff(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * ResStartBuff seatOrWorldId.
         * @member {number} seatOrWorldId
         * @memberof proto.ResStartBuff
         * @instance
         */
        ResStartBuff.prototype.seatOrWorldId = 0;

        /**
         * ResStartBuff buffId.
         * @member {number} buffId
         * @memberof proto.ResStartBuff
         * @instance
         */
        ResStartBuff.prototype.buffId = 0;

        /**
         * Encodes the specified ResStartBuff message. Does not implicitly {@link proto.ResStartBuff.verify|verify} messages.
         * @function encode
         * @memberof proto.ResStartBuff
         * @static
         * @param {proto.IResStartBuff} m ResStartBuff message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        ResStartBuff.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.seatOrWorldId != null && Object.hasOwnProperty.call(m, "seatOrWorldId"))
                w.uint32(8).int32(m.seatOrWorldId);
            if (m.buffId != null && Object.hasOwnProperty.call(m, "buffId"))
                w.uint32(16).int32(m.buffId);
            return w;
        };

        /**
         * Decodes a ResStartBuff message from the specified reader or buffer.
         * @function decode
         * @memberof proto.ResStartBuff
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {proto.ResStartBuff} ResStartBuff
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        ResStartBuff.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.proto.ResStartBuff();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.seatOrWorldId = r.int32();
                    break;
                case 2:
                    m.buffId = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return ResStartBuff;
    })();

    proto.ResStartSkill = (function() {

        /**
         * Properties of a ResStartSkill.
         * @memberof proto
         * @interface IResStartSkill
         * @property {number|null} [seatOrWorldId] ResStartSkill seatOrWorldId
         * @property {number|null} [skillId] ResStartSkill skillId
         */

        /**
         * Constructs a new ResStartSkill.
         * @memberof proto
         * @classdesc Represents a ResStartSkill.
         * @implements IResStartSkill
         * @constructor
         * @param {proto.IResStartSkill=} [p] Properties to set
         */
        function ResStartSkill(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * ResStartSkill seatOrWorldId.
         * @member {number} seatOrWorldId
         * @memberof proto.ResStartSkill
         * @instance
         */
        ResStartSkill.prototype.seatOrWorldId = 0;

        /**
         * ResStartSkill skillId.
         * @member {number} skillId
         * @memberof proto.ResStartSkill
         * @instance
         */
        ResStartSkill.prototype.skillId = 0;

        /**
         * Encodes the specified ResStartSkill message. Does not implicitly {@link proto.ResStartSkill.verify|verify} messages.
         * @function encode
         * @memberof proto.ResStartSkill
         * @static
         * @param {proto.IResStartSkill} m ResStartSkill message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        ResStartSkill.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.seatOrWorldId != null && Object.hasOwnProperty.call(m, "seatOrWorldId"))
                w.uint32(8).int32(m.seatOrWorldId);
            if (m.skillId != null && Object.hasOwnProperty.call(m, "skillId"))
                w.uint32(16).int32(m.skillId);
            return w;
        };

        /**
         * Decodes a ResStartSkill message from the specified reader or buffer.
         * @function decode
         * @memberof proto.ResStartSkill
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {proto.ResStartSkill} ResStartSkill
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        ResStartSkill.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.proto.ResStartSkill();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.seatOrWorldId = r.int32();
                    break;
                case 2:
                    m.skillId = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return ResStartSkill;
    })();

    proto.ResSyncCharactorStatus = (function() {

        /**
         * Properties of a ResSyncCharactorStatus.
         * @memberof proto
         * @interface IResSyncCharactorStatus
         * @property {number|null} [worldId] ResSyncCharactorStatus worldId
         * @property {proto.ICharactorTransform|null} [transform] ResSyncCharactorStatus transform
         * @property {proto.ISyncStatusData|null} [statusData] ResSyncCharactorStatus statusData
         */

        /**
         * Constructs a new ResSyncCharactorStatus.
         * @memberof proto
         * @classdesc Represents a ResSyncCharactorStatus.
         * @implements IResSyncCharactorStatus
         * @constructor
         * @param {proto.IResSyncCharactorStatus=} [p] Properties to set
         */
        function ResSyncCharactorStatus(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * ResSyncCharactorStatus worldId.
         * @member {number} worldId
         * @memberof proto.ResSyncCharactorStatus
         * @instance
         */
        ResSyncCharactorStatus.prototype.worldId = 0;

        /**
         * ResSyncCharactorStatus transform.
         * @member {proto.ICharactorTransform|null|undefined} transform
         * @memberof proto.ResSyncCharactorStatus
         * @instance
         */
        ResSyncCharactorStatus.prototype.transform = null;

        /**
         * ResSyncCharactorStatus statusData.
         * @member {proto.ISyncStatusData|null|undefined} statusData
         * @memberof proto.ResSyncCharactorStatus
         * @instance
         */
        ResSyncCharactorStatus.prototype.statusData = null;

        /**
         * Encodes the specified ResSyncCharactorStatus message. Does not implicitly {@link proto.ResSyncCharactorStatus.verify|verify} messages.
         * @function encode
         * @memberof proto.ResSyncCharactorStatus
         * @static
         * @param {proto.IResSyncCharactorStatus} m ResSyncCharactorStatus message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        ResSyncCharactorStatus.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.worldId != null && Object.hasOwnProperty.call(m, "worldId"))
                w.uint32(8).int32(m.worldId);
            if (m.transform != null && Object.hasOwnProperty.call(m, "transform"))
                $root.proto.CharactorTransform.encode(m.transform, w.uint32(18).fork()).ldelim();
            if (m.statusData != null && Object.hasOwnProperty.call(m, "statusData"))
                $root.proto.SyncStatusData.encode(m.statusData, w.uint32(26).fork()).ldelim();
            return w;
        };

        /**
         * Decodes a ResSyncCharactorStatus message from the specified reader or buffer.
         * @function decode
         * @memberof proto.ResSyncCharactorStatus
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {proto.ResSyncCharactorStatus} ResSyncCharactorStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        ResSyncCharactorStatus.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.proto.ResSyncCharactorStatus();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.worldId = r.int32();
                    break;
                case 2:
                    m.transform = $root.proto.CharactorTransform.decode(r, r.uint32());
                    break;
                case 3:
                    m.statusData = $root.proto.SyncStatusData.decode(r, r.uint32());
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return ResSyncCharactorStatus;
    })();

    proto.ResTalkMsg = (function() {

        /**
         * Properties of a ResTalkMsg.
         * @memberof proto
         * @interface IResTalkMsg
         * @property {number|null} [roomInViewId] ResTalkMsg roomInViewId
         * @property {number|null} [talkType] ResTalkMsg talkType
         * @property {string|null} [msgBodyOrAudioUrl] ResTalkMsg msgBodyOrAudioUrl
         */

        /**
         * Constructs a new ResTalkMsg.
         * @memberof proto
         * @classdesc Represents a ResTalkMsg.
         * @implements IResTalkMsg
         * @constructor
         * @param {proto.IResTalkMsg=} [p] Properties to set
         */
        function ResTalkMsg(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * ResTalkMsg roomInViewId.
         * @member {number} roomInViewId
         * @memberof proto.ResTalkMsg
         * @instance
         */
        ResTalkMsg.prototype.roomInViewId = 0;

        /**
         * ResTalkMsg talkType.
         * @member {number} talkType
         * @memberof proto.ResTalkMsg
         * @instance
         */
        ResTalkMsg.prototype.talkType = 0;

        /**
         * ResTalkMsg msgBodyOrAudioUrl.
         * @member {string} msgBodyOrAudioUrl
         * @memberof proto.ResTalkMsg
         * @instance
         */
        ResTalkMsg.prototype.msgBodyOrAudioUrl = "";

        /**
         * Encodes the specified ResTalkMsg message. Does not implicitly {@link proto.ResTalkMsg.verify|verify} messages.
         * @function encode
         * @memberof proto.ResTalkMsg
         * @static
         * @param {proto.IResTalkMsg} m ResTalkMsg message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        ResTalkMsg.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.roomInViewId != null && Object.hasOwnProperty.call(m, "roomInViewId"))
                w.uint32(8).int32(m.roomInViewId);
            if (m.talkType != null && Object.hasOwnProperty.call(m, "talkType"))
                w.uint32(16).int32(m.talkType);
            if (m.msgBodyOrAudioUrl != null && Object.hasOwnProperty.call(m, "msgBodyOrAudioUrl"))
                w.uint32(26).string(m.msgBodyOrAudioUrl);
            return w;
        };

        /**
         * Decodes a ResTalkMsg message from the specified reader or buffer.
         * @function decode
         * @memberof proto.ResTalkMsg
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {proto.ResTalkMsg} ResTalkMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        ResTalkMsg.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.proto.ResTalkMsg();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.roomInViewId = r.int32();
                    break;
                case 2:
                    m.talkType = r.int32();
                    break;
                case 3:
                    m.msgBodyOrAudioUrl = r.string();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return ResTalkMsg;
    })();

    proto.ResTestGetGoods = (function() {

        /**
         * Properties of a ResTestGetGoods.
         * @memberof proto
         * @interface IResTestGetGoods
         * @property {number|null} [status] ResTestGetGoods status
         */

        /**
         * Constructs a new ResTestGetGoods.
         * @memberof proto
         * @classdesc Represents a ResTestGetGoods.
         * @implements IResTestGetGoods
         * @constructor
         * @param {proto.IResTestGetGoods=} [p] Properties to set
         */
        function ResTestGetGoods(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * ResTestGetGoods status.
         * @member {number} status
         * @memberof proto.ResTestGetGoods
         * @instance
         */
        ResTestGetGoods.prototype.status = 0;

        /**
         * Encodes the specified ResTestGetGoods message. Does not implicitly {@link proto.ResTestGetGoods.verify|verify} messages.
         * @function encode
         * @memberof proto.ResTestGetGoods
         * @static
         * @param {proto.IResTestGetGoods} m ResTestGetGoods message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        ResTestGetGoods.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.status != null && Object.hasOwnProperty.call(m, "status"))
                w.uint32(8).int32(m.status);
            return w;
        };

        /**
         * Decodes a ResTestGetGoods message from the specified reader or buffer.
         * @function decode
         * @memberof proto.ResTestGetGoods
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {proto.ResTestGetGoods} ResTestGetGoods
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        ResTestGetGoods.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.proto.ResTestGetGoods();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.status = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return ResTestGetGoods;
    })();

    proto.ResTestLogicCmdEcho = (function() {

        /**
         * Properties of a ResTestLogicCmdEcho.
         * @memberof proto
         * @interface IResTestLogicCmdEcho
         * @property {string|null} [content] ResTestLogicCmdEcho content
         */

        /**
         * Constructs a new ResTestLogicCmdEcho.
         * @memberof proto
         * @classdesc Represents a ResTestLogicCmdEcho.
         * @implements IResTestLogicCmdEcho
         * @constructor
         * @param {proto.IResTestLogicCmdEcho=} [p] Properties to set
         */
        function ResTestLogicCmdEcho(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * ResTestLogicCmdEcho content.
         * @member {string} content
         * @memberof proto.ResTestLogicCmdEcho
         * @instance
         */
        ResTestLogicCmdEcho.prototype.content = "";

        /**
         * Encodes the specified ResTestLogicCmdEcho message. Does not implicitly {@link proto.ResTestLogicCmdEcho.verify|verify} messages.
         * @function encode
         * @memberof proto.ResTestLogicCmdEcho
         * @static
         * @param {proto.IResTestLogicCmdEcho} m ResTestLogicCmdEcho message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        ResTestLogicCmdEcho.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.content != null && Object.hasOwnProperty.call(m, "content"))
                w.uint32(10).string(m.content);
            return w;
        };

        /**
         * Decodes a ResTestLogicCmdEcho message from the specified reader or buffer.
         * @function decode
         * @memberof proto.ResTestLogicCmdEcho
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {proto.ResTestLogicCmdEcho} ResTestLogicCmdEcho
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        ResTestLogicCmdEcho.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.proto.ResTestLogicCmdEcho();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.content = r.string();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return ResTestLogicCmdEcho;
    })();

    proto.ResTestUpdateGoods = (function() {

        /**
         * Properties of a ResTestUpdateGoods.
         * @memberof proto
         * @interface IResTestUpdateGoods
         * @property {number|null} [status] ResTestUpdateGoods status
         */

        /**
         * Constructs a new ResTestUpdateGoods.
         * @memberof proto
         * @classdesc Represents a ResTestUpdateGoods.
         * @implements IResTestUpdateGoods
         * @constructor
         * @param {proto.IResTestUpdateGoods=} [p] Properties to set
         */
        function ResTestUpdateGoods(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * ResTestUpdateGoods status.
         * @member {number} status
         * @memberof proto.ResTestUpdateGoods
         * @instance
         */
        ResTestUpdateGoods.prototype.status = 0;

        /**
         * Encodes the specified ResTestUpdateGoods message. Does not implicitly {@link proto.ResTestUpdateGoods.verify|verify} messages.
         * @function encode
         * @memberof proto.ResTestUpdateGoods
         * @static
         * @param {proto.IResTestUpdateGoods} m ResTestUpdateGoods message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        ResTestUpdateGoods.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.status != null && Object.hasOwnProperty.call(m, "status"))
                w.uint32(8).int32(m.status);
            return w;
        };

        /**
         * Decodes a ResTestUpdateGoods message from the specified reader or buffer.
         * @function decode
         * @memberof proto.ResTestUpdateGoods
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {proto.ResTestUpdateGoods} ResTestUpdateGoods
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        ResTestUpdateGoods.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.proto.ResTestUpdateGoods();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.status = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return ResTestUpdateGoods;
    })();

    proto.ResUpdateMailMsg = (function() {

        /**
         * Properties of a ResUpdateMailMsg.
         * @memberof proto
         * @interface IResUpdateMailMsg
         * @property {number|null} [status] ResUpdateMailMsg status
         */

        /**
         * Constructs a new ResUpdateMailMsg.
         * @memberof proto
         * @classdesc Represents a ResUpdateMailMsg.
         * @implements IResUpdateMailMsg
         * @constructor
         * @param {proto.IResUpdateMailMsg=} [p] Properties to set
         */
        function ResUpdateMailMsg(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * ResUpdateMailMsg status.
         * @member {number} status
         * @memberof proto.ResUpdateMailMsg
         * @instance
         */
        ResUpdateMailMsg.prototype.status = 0;

        /**
         * Encodes the specified ResUpdateMailMsg message. Does not implicitly {@link proto.ResUpdateMailMsg.verify|verify} messages.
         * @function encode
         * @memberof proto.ResUpdateMailMsg
         * @static
         * @param {proto.IResUpdateMailMsg} m ResUpdateMailMsg message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        ResUpdateMailMsg.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.status != null && Object.hasOwnProperty.call(m, "status"))
                w.uint32(8).int32(m.status);
            return w;
        };

        /**
         * Decodes a ResUpdateMailMsg message from the specified reader or buffer.
         * @function decode
         * @memberof proto.ResUpdateMailMsg
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {proto.ResUpdateMailMsg} ResUpdateMailMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        ResUpdateMailMsg.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.proto.ResUpdateMailMsg();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.status = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return ResUpdateMailMsg;
    })();

    proto.ResUserArrivedSeat = (function() {

        /**
         * Properties of a ResUserArrivedSeat.
         * @memberof proto
         * @interface IResUserArrivedSeat
         * @property {string|null} [unick] ResUserArrivedSeat unick
         * @property {number|null} [usex] ResUserArrivedSeat usex
         * @property {number|null} [uface] ResUserArrivedSeat uface
         * @property {number|null} [seatId] ResUserArrivedSeat seatId
         * @property {number|null} [playInRoomState] ResUserArrivedSeat playInRoomState
         */

        /**
         * Constructs a new ResUserArrivedSeat.
         * @memberof proto
         * @classdesc Represents a ResUserArrivedSeat.
         * @implements IResUserArrivedSeat
         * @constructor
         * @param {proto.IResUserArrivedSeat=} [p] Properties to set
         */
        function ResUserArrivedSeat(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * ResUserArrivedSeat unick.
         * @member {string} unick
         * @memberof proto.ResUserArrivedSeat
         * @instance
         */
        ResUserArrivedSeat.prototype.unick = "";

        /**
         * ResUserArrivedSeat usex.
         * @member {number} usex
         * @memberof proto.ResUserArrivedSeat
         * @instance
         */
        ResUserArrivedSeat.prototype.usex = 0;

        /**
         * ResUserArrivedSeat uface.
         * @member {number} uface
         * @memberof proto.ResUserArrivedSeat
         * @instance
         */
        ResUserArrivedSeat.prototype.uface = 0;

        /**
         * ResUserArrivedSeat seatId.
         * @member {number} seatId
         * @memberof proto.ResUserArrivedSeat
         * @instance
         */
        ResUserArrivedSeat.prototype.seatId = 0;

        /**
         * ResUserArrivedSeat playInRoomState.
         * @member {number} playInRoomState
         * @memberof proto.ResUserArrivedSeat
         * @instance
         */
        ResUserArrivedSeat.prototype.playInRoomState = 0;

        /**
         * Encodes the specified ResUserArrivedSeat message. Does not implicitly {@link proto.ResUserArrivedSeat.verify|verify} messages.
         * @function encode
         * @memberof proto.ResUserArrivedSeat
         * @static
         * @param {proto.IResUserArrivedSeat} m ResUserArrivedSeat message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        ResUserArrivedSeat.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.unick != null && Object.hasOwnProperty.call(m, "unick"))
                w.uint32(10).string(m.unick);
            if (m.usex != null && Object.hasOwnProperty.call(m, "usex"))
                w.uint32(16).int32(m.usex);
            if (m.uface != null && Object.hasOwnProperty.call(m, "uface"))
                w.uint32(24).int32(m.uface);
            if (m.seatId != null && Object.hasOwnProperty.call(m, "seatId"))
                w.uint32(32).int32(m.seatId);
            if (m.playInRoomState != null && Object.hasOwnProperty.call(m, "playInRoomState"))
                w.uint32(40).int32(m.playInRoomState);
            return w;
        };

        /**
         * Decodes a ResUserArrivedSeat message from the specified reader or buffer.
         * @function decode
         * @memberof proto.ResUserArrivedSeat
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {proto.ResUserArrivedSeat} ResUserArrivedSeat
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        ResUserArrivedSeat.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.proto.ResUserArrivedSeat();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.unick = r.string();
                    break;
                case 2:
                    m.usex = r.int32();
                    break;
                case 3:
                    m.uface = r.int32();
                    break;
                case 4:
                    m.seatId = r.int32();
                    break;
                case 5:
                    m.playInRoomState = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return ResUserArrivedSeat;
    })();

    proto.ResUserExitSeat = (function() {

        /**
         * Properties of a ResUserExitSeat.
         * @memberof proto
         * @interface IResUserExitSeat
         * @property {number|null} [seatId] ResUserExitSeat seatId
         */

        /**
         * Constructs a new ResUserExitSeat.
         * @memberof proto
         * @classdesc Represents a ResUserExitSeat.
         * @implements IResUserExitSeat
         * @constructor
         * @param {proto.IResUserExitSeat=} [p] Properties to set
         */
        function ResUserExitSeat(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * ResUserExitSeat seatId.
         * @member {number} seatId
         * @memberof proto.ResUserExitSeat
         * @instance
         */
        ResUserExitSeat.prototype.seatId = 0;

        /**
         * Encodes the specified ResUserExitSeat message. Does not implicitly {@link proto.ResUserExitSeat.verify|verify} messages.
         * @function encode
         * @memberof proto.ResUserExitSeat
         * @static
         * @param {proto.IResUserExitSeat} m ResUserExitSeat message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        ResUserExitSeat.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.seatId != null && Object.hasOwnProperty.call(m, "seatId"))
                w.uint32(8).int32(m.seatId);
            return w;
        };

        /**
         * Decodes a ResUserExitSeat message from the specified reader or buffer.
         * @function decode
         * @memberof proto.ResUserExitSeat
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {proto.ResUserExitSeat} ResUserExitSeat
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        ResUserExitSeat.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.proto.ResUserExitSeat();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.seatId = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return ResUserExitSeat;
    })();

    proto.ResUserLogin = (function() {

        /**
         * Properties of a ResUserLogin.
         * @memberof proto
         * @interface IResUserLogin
         * @property {number|null} [status] ResUserLogin status
         * @property {proto.IAccountInfo|null} [uinfo] ResUserLogin uinfo
         */

        /**
         * Constructs a new ResUserLogin.
         * @memberof proto
         * @classdesc Represents a ResUserLogin.
         * @implements IResUserLogin
         * @constructor
         * @param {proto.IResUserLogin=} [p] Properties to set
         */
        function ResUserLogin(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * ResUserLogin status.
         * @member {number} status
         * @memberof proto.ResUserLogin
         * @instance
         */
        ResUserLogin.prototype.status = 0;

        /**
         * ResUserLogin uinfo.
         * @member {proto.IAccountInfo|null|undefined} uinfo
         * @memberof proto.ResUserLogin
         * @instance
         */
        ResUserLogin.prototype.uinfo = null;

        /**
         * Encodes the specified ResUserLogin message. Does not implicitly {@link proto.ResUserLogin.verify|verify} messages.
         * @function encode
         * @memberof proto.ResUserLogin
         * @static
         * @param {proto.IResUserLogin} m ResUserLogin message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        ResUserLogin.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.status != null && Object.hasOwnProperty.call(m, "status"))
                w.uint32(8).int32(m.status);
            if (m.uinfo != null && Object.hasOwnProperty.call(m, "uinfo"))
                $root.proto.AccountInfo.encode(m.uinfo, w.uint32(18).fork()).ldelim();
            return w;
        };

        /**
         * Decodes a ResUserLogin message from the specified reader or buffer.
         * @function decode
         * @memberof proto.ResUserLogin
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {proto.ResUserLogin} ResUserLogin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        ResUserLogin.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.proto.ResUserLogin();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.status = r.int32();
                    break;
                case 2:
                    m.uinfo = $root.proto.AccountInfo.decode(r, r.uint32());
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return ResUserLogin;
    })();

    proto.SyncStatusData = (function() {

        /**
         * Properties of a SyncStatusData.
         * @memberof proto
         * @interface ISyncStatusData
         * @property {number|null} [status] SyncStatusData status
         */

        /**
         * Constructs a new SyncStatusData.
         * @memberof proto
         * @classdesc Represents a SyncStatusData.
         * @implements ISyncStatusData
         * @constructor
         * @param {proto.ISyncStatusData=} [p] Properties to set
         */
        function SyncStatusData(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * SyncStatusData status.
         * @member {number} status
         * @memberof proto.SyncStatusData
         * @instance
         */
        SyncStatusData.prototype.status = 0;

        /**
         * Encodes the specified SyncStatusData message. Does not implicitly {@link proto.SyncStatusData.verify|verify} messages.
         * @function encode
         * @memberof proto.SyncStatusData
         * @static
         * @param {proto.ISyncStatusData} m SyncStatusData message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        SyncStatusData.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.status != null && Object.hasOwnProperty.call(m, "status"))
                w.uint32(8).int32(m.status);
            return w;
        };

        /**
         * Decodes a SyncStatusData message from the specified reader or buffer.
         * @function decode
         * @memberof proto.SyncStatusData
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {proto.SyncStatusData} SyncStatusData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        SyncStatusData.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.proto.SyncStatusData();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.status = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SyncStatusData;
    })();

    proto.TaskItem = (function() {

        /**
         * Properties of a TaskItem.
         * @memberof proto
         * @interface ITaskItem
         * @property {number|null} [status] TaskItem status
         * @property {string|null} [taskDesic] TaskItem taskDesic
         * @property {number|null} [typeId] TaskItem typeId
         */

        /**
         * Constructs a new TaskItem.
         * @memberof proto
         * @classdesc Represents a TaskItem.
         * @implements ITaskItem
         * @constructor
         * @param {proto.ITaskItem=} [p] Properties to set
         */
        function TaskItem(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        /**
         * TaskItem status.
         * @member {number} status
         * @memberof proto.TaskItem
         * @instance
         */
        TaskItem.prototype.status = 0;

        /**
         * TaskItem taskDesic.
         * @member {string} taskDesic
         * @memberof proto.TaskItem
         * @instance
         */
        TaskItem.prototype.taskDesic = "";

        /**
         * TaskItem typeId.
         * @member {number} typeId
         * @memberof proto.TaskItem
         * @instance
         */
        TaskItem.prototype.typeId = 0;

        /**
         * Encodes the specified TaskItem message. Does not implicitly {@link proto.TaskItem.verify|verify} messages.
         * @function encode
         * @memberof proto.TaskItem
         * @static
         * @param {proto.ITaskItem} m TaskItem message or plain object to encode
         * @param {protobuf.Writer} [w] Writer to encode to
         * @returns {protobuf.Writer} Writer
         */
        TaskItem.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.status != null && Object.hasOwnProperty.call(m, "status"))
                w.uint32(8).int32(m.status);
            if (m.taskDesic != null && Object.hasOwnProperty.call(m, "taskDesic"))
                w.uint32(18).string(m.taskDesic);
            if (m.typeId != null && Object.hasOwnProperty.call(m, "typeId"))
                w.uint32(24).int32(m.typeId);
            return w;
        };

        /**
         * Decodes a TaskItem message from the specified reader or buffer.
         * @function decode
         * @memberof proto.TaskItem
         * @static
         * @param {protobuf.Reader|Uint8Array} r Reader or buffer to decode from
         * @param {number} [l] Message length if known beforehand
         * @returns {proto.TaskItem} TaskItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        TaskItem.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.proto.TaskItem();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.status = r.int32();
                    break;
                case 2:
                    m.taskDesic = r.string();
                    break;
                case 3:
                    m.typeId = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return TaskItem;
    })();

    return proto;
})();

/**
 * Module enum.
 * @exports Module
 * @enum {number}
 * @property {number} GameLogic1=1 GameLogic1 value
 * @property {number} GameLogic2=2 GameLogic2 value
 * @property {number} AUTH=101 AUTH value
 * @property {number} PLAYER=102 PLAYER value
 * @property {number} SCENE=103 SCENE value
 * @property {number} ACTIVITY=104 ACTIVITY value
 * @property {number} SKILL=105 SKILL value
 * @property {number} CHAT=106 CHAT value
 * @property {number} LADDER=501 LADDER value
 * @property {number} Net=1001 Net value
 */
$root.Module = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[1] = "GameLogic1"] = 1;
    values[valuesById[2] = "GameLogic2"] = 2;
    values[valuesById[101] = "AUTH"] = 101;
    values[valuesById[102] = "PLAYER"] = 102;
    values[valuesById[103] = "SCENE"] = 103;
    values[valuesById[104] = "ACTIVITY"] = 104;
    values[valuesById[105] = "SKILL"] = 105;
    values[valuesById[106] = "CHAT"] = 106;
    values[valuesById[501] = "LADDER"] = 501;
    values[valuesById[1001] = "Net"] = 1001;
    return values;
})();