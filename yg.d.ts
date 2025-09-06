declare namespace yg {

    /**
     * 提示飘字
     * @param sLanguageKey   多语言key值
     * @param param   替换 %s 符号的值，非必填
     */
    export function Tip(sLanguageKey: string, ...param: any[]): void;


    namespace sdk {
        /** 版本号 */
        export const Ver: string;
        /** 开始游戏 调用 */
        export function OnPluginGameStart(): void;
        /** 结束游戏 调用 */
        export function OnPluginGameEnd(): void;
    }

    namespace ad {

        /** 激励视频播放完成事件 */
        export const SVideoAdCompleteEvent: string;

        /**
         * 视频是否加载成功
         * @param isTipNotReady 是否提示未就绪
         */
        export function IsVideoReady(isTipNotReady?: boolean): boolean;

        /**
         * 显示视频广告
         * @description 调用前自行调用 IsVideoReady 判断广告是否准备就绪
         * @description 用意：插件需要自行根据不同的情况进行统计处理
         * @param funVideoCompleted 用户看完的回调
         * @param funVideoEndNoCompleted 没看完就结束的回调
         * @param funLowMemoryShowVideoFail 内存不足时播放视频失败回调
         * @param bAutoHintFailTip 是否自动提示失败弹窗
         */
        export function ShowVideoAd(funVideoCompleted: () => void, funVideoEndNoCompleted: () => void, funLowMemoryShowVideoFail: () => void, bAutoHintFailTip?: boolean): void;

        /** 显示横幅 */
        export function ShowBanner(): void;

        /** 隐藏横幅 */
        export function HideBanner(): void;

        /**
         * 显示插屏广告
         * @param funOpenNotifyBack   打开插屏前弹窗提示回调
         * @param funCloseNotifyBack  关闭插屏前弹窗提示回调
         * @param bDebugClick 传true跳过弹窗判断
         */
        export function ShowFullscreenAds(funOpenNotifyBack?: () => void, funCloseNotifyBack?: () => void, bDebugClick?: boolean): void;

    }


    namespace log {

    }

}

declare namespace scparam {
    /** 简单字典 */
    export type DictSimple<T> = { [key: symbol]: T; };
}