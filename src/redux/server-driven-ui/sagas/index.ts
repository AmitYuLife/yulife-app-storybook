import { takeEvery, takeLeading } from "redux-saga/effects";
import { SduiActionType } from "../../../graphql/__generated/graphql";
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
import { sduiActionShowOverlayListPicker } from "./sduiActionShowOverlayListPicker.saga";
import { sduiActionOpenMagicLink } from "./sduiActionOpenMagicLink.saga";
import { sduiActionShowFloatingModal } from "./sduiActionShowFloatingModal";
import { sduiActionDismissOverlay } from "./sduiActionDismissOverlay.saga";
import { sduiActionDisplayStepFeedback } from "./sduiActionDisplayStepFeedback.saga";
import { sduiActionRefetchQueriesSaga } from "./sduiActionRefetchQueries.saga";

export default [
  takeLeading(SduiActionType.SduiActionShowOverlayListPicker, sduiActionShowOverlayListPicker),
  takeLeading(SduiActionType.SduiActionNavigateBack, sduiActionNavigateBackSaga),
  takeLeading(SduiActionType.SduiActionNavigate, sduiActionNavigateSaga),
  takeLeading(SduiActionType.SduiActionSetBottomTab, sduiActionSetBottomTabSaga),
  takeLeading(SduiActionType.SduiActionOpenUrl, sduiActionOpenUrlSaga),
  takeLeading(SduiActionType.SduiActionOpenSupportChat, sduiActionOpenSupportChatSaga),
  takeLeading(SduiActionType.SduiActionProductUnderwritingStepPop, sduiActionProductUnderwritingStepPopSaga),
  takeLeading(SduiActionType.SduiActionProductUnderwritingStepFinish, sduiActionProductUnderwritingStepFinishSaga),
  takeLeading(SduiActionType.SduiActionProductUnderwritingStepPush, sduiActionProductUnderwritingStepPushSaga),
  takeLeading(SduiActionType.SduiActionOpenModal, sduiActionOpenModalSaga),
  takeLeading(SduiActionType.SduiActionOpenAlertDialog, sduiActionOpenAlertDialogSaga),
  takeLeading(SduiActionType.SduiActionSendMutation, sduiActionSendMutation),
  takeLeading(SduiActionType.SduiActionGenericNavigateBack, sduiActionGenericNavigateBack),
  takeLeading(SduiActionType.SduiActionGenericNavigateBackToRoot, sduiActionGenericNavigateBackToRoot),
  takeLeading(SduiActionType.SduiActionOpenMagicLink, sduiActionOpenMagicLink),
  takeLeading(SduiActionType.SduiActionDismissOverlay, sduiActionDismissOverlay),
  takeLeading(SduiActionType.SduiActionDisplayStepFeedback, sduiActionDisplayStepFeedback),
  takeEvery(SduiActionType.SduiActionLogEvent, sduiActionLogEventSaga),
  takeEvery(SduiActionType.SduiActionShowFloatingModal, sduiActionShowFloatingModal),
  takeLeading(SduiActionType.SduiActionRefetchQueries, sduiActionRefetchQueriesSaga),
];
