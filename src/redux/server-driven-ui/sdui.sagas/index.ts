import { ActionPattern, takeEvery, takeLeading } from "redux-saga/effects";
import { SduiActionType } from "@graphql/_core/schema/globalTypes";
import { sduiActionNavigateBackSaga } from "./sduiActionNavigateBack.saga";
import { sduiActionNavigateSaga } from "./sduiActionNavigate.saga";
import { sduiActionSetBottomTabSaga } from "./sduiActionSetBottomTab.saga";
import { sduiActionOpenUrlSaga } from "./sduiActionOpenUrl.saga";
import { sduiActionOpenSupportChatSaga } from "./sduiActionOpenSupportChat.saga";
import { sduiActionProductUnderwritingStepPopSaga } from "./sduiActionProductUnderwritingStepPop.saga";
import { sduiActionProductUnderwritingStepFinishSaga } from "./sduiActionProductUnderwritingStepFinish.saga";
import { sduiActionProductUnderwritingStepPushSaga } from "./sduiActionProductUnderwritingStepPush.saga";
import { sduiActionOpenModalSaga } from "./sduiActionOpenModal.saga";
import { sduiActionOpenAlertDialogSaga } from "./sduiActionOpenAlertDialog.saga";
import { sduiActionLogEventSaga } from "./sduiActionLogEvent.saga";

export default [
  takeLeading(SduiActionType.SDUI_ACTION_NAVIGATE_BACK as ActionPattern, sduiActionNavigateBackSaga),
  takeLeading(SduiActionType.SDUI_ACTION_NAVIGATE as ActionPattern, sduiActionNavigateSaga),
  takeLeading(SduiActionType.SDUI_ACTION_SET_BOTTOM_TAB as ActionPattern, sduiActionSetBottomTabSaga),
  takeLeading(SduiActionType.SDUI_ACTION_OPEN_URL as ActionPattern, sduiActionOpenUrlSaga),
  takeLeading(SduiActionType.SDUI_ACTION_OPEN_SUPPORT_CHAT as ActionPattern, sduiActionOpenSupportChatSaga),
  takeLeading(
    SduiActionType.SDUI_ACTION_PRODUCT_UNDERWRITING_STEP_POP as ActionPattern,
    sduiActionProductUnderwritingStepPopSaga
  ),
  takeLeading(
    SduiActionType.SDUI_ACTION_PRODUCT_UNDERWRITING_STEP_FINISH as ActionPattern,
    sduiActionProductUnderwritingStepFinishSaga
  ),
  takeLeading(
    SduiActionType.SDUI_ACTION_PRODUCT_UNDERWRITING_STEP_PUSH as ActionPattern,
    sduiActionProductUnderwritingStepPushSaga
  ),
  takeLeading(SduiActionType.SDUI_ACTION_OPEN_MODAL as ActionPattern, sduiActionOpenModalSaga),
  takeLeading(SduiActionType.SDUI_ACTION_OPEN_ALERT_DIALOG as ActionPattern, sduiActionOpenAlertDialogSaga),
  takeEvery(SduiActionType.SDUI_ACTION_LOG_EVENT as ActionPattern, sduiActionLogEventSaga),
];
