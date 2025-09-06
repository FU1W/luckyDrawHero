import { LayerType, UIConfig } from "db://assets/Framework/core/gui/layer/LayerManager";



/** 界面唯一标识（方便服务器通过编号数据触发界面打开） */
export enum UIID {
    /** 资源加载界面 */
    Loading = 1000,

    /** 弹窗界面 */
    Window ,
    /** 加载与延时提示界面 */
    Netinstable ,

    /** debug界面 */
    Debug ,
    LayerDebug ,

    /** 提示弹出窗口 */
    Alert,
    /** 确认弹出窗口 */
    Confirm,
    /** DEMO */
    Demo,
    /** 角色信息 */
    Demo_Role_Info,
    /** 测试界面 */
    TestUI,

}

/** 打开界面方式的配置数据 */
export var UIConfigData: { [key: number]: UIConfig } = {
    [UIID.Loading]: { layer: LayerType.UI, prefab: "loading/prefab/loading" },
    [UIID.Netinstable]: { layer: LayerType.PopUp, prefab: "common/prefab/netinstable" },
    [UIID.Alert]: { layer: LayerType.Dialog, prefab: "common/prefab/alert", mask: true },

    [UIID.Debug]: { layer: LayerType.PopUp, prefab: "gui/DebugPage/BtnDebug" },
    [UIID.LayerDebug]: { layer: LayerType.PopUp, prefab: "gui/DebugPage/LayerDebugPage" },

    [UIID.Confirm]: { layer: LayerType.Dialog, prefab: "common/prefab/confirm", mask: true },
    [UIID.TestUI]: { layer: LayerType.UI, prefab: "gui/test_ui" },
}