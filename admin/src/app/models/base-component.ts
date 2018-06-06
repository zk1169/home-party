import { EventBus } from '@src/app/shared';
import { EventType } from './enum';
import EventModel from './event.model';

export class BaseComponent {
    constructor(private eventBus : EventBus) {
        // this.eventBus = eventBus;
    }

    /**
     * 事件通知
     * type      必填    事件类型
     * params   非必填  事件参数
     */
    eventNotice(event: string, params: any) {
        this.eventBus.notifyDataChanged(event, params);
    }

    successAlert(msg) {
        this.eventNotice(EventType.ALERT ,EventModel.getInfoEvent(msg));
    }

    warnAlert(msg) {
        this.eventNotice(EventType.ALERT ,EventModel.getInfoEvent(msg));
    }

    errorAlert(msg) {
        this.eventNotice(EventType.ALERT ,EventModel.getInfoEvent(msg));
    }

    startProgressBar() {
        this.eventNotice(EventType.PROGRESS_BAR ,true);
    }

    stopProgressBar() {
        this.eventNotice(EventType.PROGRESS_BAR ,false);
    }

    changePageTitle(title) {
        this.eventNotice(EventType.PAGE_TITLE_CHANGE, title);
    }

    /**
    * 百度统计 事件追踪
    * category 必填 监控目标类型名称 ex:统计，收银，会员
    * action   必填 用户目标交互行为 ex:保存，修改，删除
    * lable    非必填 事件额外信息   ex: 随意填写
    * value    非必填 事件额外数据信息  ex:时间，权重
    * 
    * 百度统计 页面追踪
    * pathname 必填
    * */
    // baiduStatistical(params: any) {
    //     if (!params || !window['_hmt']) {
    //         return;
    //     }
    //     if (params.category && params.action) {
    //         window['_hmt'].push(['_trackEvent', params.category, params.action, params.lable, params.value]);
    //     }
    //     if (params.pathname) {
    //         window['_hmt'].push(['_trackPageview', params.pathname]);
    //     }
    // }
}

// export class FormBaseComponent extends BaseComponent {
//     /**
//      * 表单集合
//      */
//     formList: BaseForm<Object>[];
//     constructor(slimLoader?: MwLoadingBarService, eventBus?: EventBus) {
//         super(slimLoader, eventBus);
//     }
// }

// export class DialogBaseComponent extends BaseComponent {
//     /**
//      * 窗口名称
//      */
//     dialogName: string;

//     /**
//      * 窗口参数
//      */
//     dialogArgs: any;

//     constructor(slimLoader?: MwLoadingBarService, eventBus?: EventBus) {
//         super(slimLoader, eventBus);
//     }

//     /**
//      * 打开窗口
//      */
//     showDialog(type: string, message: any, dialogName: string, dialogArgs?: any) {
//         this.dialogName = dialogName;
//         this.dialogArgs = dialogArgs;
//         this.eventNotice(type, message);
//     }
// }
