import { takeEvery, takeLeading } from "redux-saga/effects";
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
import { sduiActionSendMutation } from "./sduiActionSendMutation.saga";
import { sduiActionGenericNavigateBack } from "./sduiActionGenericNavigateBack.saga";
import { sduiActionGenericNavigateBackToRoot } from "./sduiActionGenericNavigateBackToRoot.saga";

export default [
  takeLeading(SduiActionType.SDUI_ACTION_NAVIGATE_BACK, sduiActionNavigateBackSaga),
  takeLeading(SduiActionType.SDUI_ACTION_NAVIGATE, sduiActionNavigateSaga),
  takeLeading(SduiActionType.SDUI_ACTION_SET_BOTTOM_TAB, sduiActionSetBottomTabSaga),
  takeLeading(SduiActionType.SDUI_ACTION_OPEN_URL, sduiActionOpenUrlSaga),
  takeLeading(SduiActionType.SDUI_ACTION_OPEN_SUPPORT_CHAT, sduiActionOpenSupportChatSaga),
  takeLeading(SduiActionType.SDUI_ACTION_PRODUCT_UNDERWRITING_STEP_POP, sduiActionProductUnderwritingStepPopSaga),
  takeLeading(SduiActionType.SDUI_ACTION_PRODUCT_UNDERWRITING_STEP_FINISH, sduiActionProductUnderwritingStepFinishSaga),
  takeLeading(SduiActionType.SDUI_ACTION_PRODUCT_UNDERWRITING_STEP_PUSH, sduiActionProductUnderwritingStepPushSaga),
  takeLeading(SduiActionType.SDUI_ACTION_OPEN_MODAL, sduiActionOpenModalSaga),
  takeLeading(SduiActionType.SDUI_ACTION_OPEN_ALERT_DIALOG, sduiActionOpenAlertDialogSaga),
  takeLeading(SduiActionType.SDUI_ACTION_SEND_MUTATION, sduiActionSendMutation),
  takeLeading(SduiActionType.SDUI_ACTION_GENERIC_NAVIGATE_BACK, sduiActionGenericNavigateBack),
  takeLeading(SduiActionType.SDUI_ACTION_GENERIC_NAVIGATE_BACK_TO_ROOT, sduiActionGenericNavigateBackToRoot),
  takeEvery(SduiActionType.SDUI_ACTION_LOG_EVENT, sduiActionLogEventSaga),
];
