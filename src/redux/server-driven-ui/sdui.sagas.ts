import { Alert } from "react-native";
import { Navigation } from "react-native-navigation";
import { all, call, select, ActionPattern, takeEvery, takeLeading, put } from "redux-saga/effects";
import { SduiActionType } from "@graphql/_core/schema/globalTypes";
import { MODALS, ROUTES } from "@navigation/constants";
import { showYuModal, TAB_ROUTES } from "@navigation/root";
import { handleLinkPress } from "@services/app-link";
import Intercom from "@intercom/intercom-react-native";
import Logger from "@services/logging/logger";
import { SyncAction } from "@redux/_core/types";
import { getRouteState } from "../app/app.selectors";
import {
  submitPersonalProductStep,
  backPersonalProductStep,
  normalisePersonalProductStep,
} from "@graphql/personalProduct";
import { ProductStepAction, YuScreenNextRoute } from "./sdui.types";
import { parseJSON, getServerPayload } from "./sdui.helpers";
import { setLoadingState } from "./sdui.actions";
import { getYuScreenProductSlots } from "@graphql/yuscreen";
import { store as reduxStore } from "../_core/store";
import { refreshUserProfile } from "../user/user.actions";
import { getUserFeatures } from "@redux/user/user.selectors";
import { getYuScreen } from "@graphql/yuscreen/getYuScreen.gql";

function* navigateBack({ payload }: ProductStepAction) {
  const currentRoute: ReturnType<typeof getRouteState> = yield select(getRouteState);
  const userFeatures: ReturnType<typeof getUserFeatures> = yield select(getUserFeatures);

  const onExit = () => Navigation.pop(currentRoute);

  const {
    isValid,
    data: { dispatchActions = [], ...data },
  } = parseJSON(getServerPayload(payload), ["title", "message", "cancelLabel", "confirmLabel"]);

  try {
    // update YuScreen slots incase any journey progression has changed
    const updateYuScreen = userFeatures.yuScreenV4beta ? getYuScreen : getYuScreenProductSlots;
    yield call(updateYuScreen);

    // Dispatch additional actions supplied by the server
    if (dispatchActions.length) {
      yield all(dispatchActions.map((dispatchAction: { type: string }) => put(dispatchAction)));
    }
  } catch (e) {
    // log
  }

  if (isValid) {
    const onPressSecondary = () => Navigation.dismissModal(MODALS.generic);
    const onPress = () => {
      onExit();
      onPressSecondary();
    };

    yield call(() =>
      showYuModal({
        component: {
          id: MODALS.generic,
          name: MODALS.generic,
          passProps: {
            heading: data.title,
            subheading: data.message,
            ctaLabel: data.confirmLabel,
            ctaLabelSecondary: data.cancelLabel,
            onPress,
            onPressSecondary,
          },
        },
      })
    );

    return;
  }

  yield call(onExit);
}

function* navigateTo({ payload }: ProductStepAction) {
  const currentRoute: ReturnType<typeof getRouteState> = yield select(getRouteState);

  const isPayloadObject = typeof payload === "object" && !!payload;
  const { isValid, data } = parseJSON(getServerPayload(payload), ["routeId"]);

  if (isValid) {
    const { routeId, props } = data;
    const otherProps = isPayloadObject ? { productId: payload.productId || data?.productId } : {};

    yield call(() =>
      Navigation.push(currentRoute, {
        component: {
          id: routeId,
          name: routeId,
          passProps: {
            ...otherProps,
            ...(props || {}),
          },
        },
      })
    );
  }
}

function* setBottomTab({ payload }: ProductStepAction) {
  const { isValid, data } = parseJSON(getServerPayload(payload), ["routeId"]);

  if (isValid) {
    const { routeId } = data;

    const currentTabIndex = TAB_ROUTES.findIndex((item) => item === routeId);

    if (currentTabIndex !== -1) {
      yield call(() =>
        Navigation.mergeOptions(routeId, {
          bottomTabs: {
            currentTabIndex,
          },
          statusBar: {
            drawBehind: false,
            visible: true,
          },
        })
      );
    }
  }
}

function* openUrl({ payload }: ProductStepAction) {
  try {
    yield call(handleLinkPress(payload.serverPayload));
  } catch (e) {
    // shrug (log)
  }
}

function* openChat() {
  try {
    yield call(() => Intercom.displayMessenger());
  } catch (e) {
    // shrug (log)
  }
}

// TODO: consider splitting these into sdui, underwriting

function* popStep(action: ProductStepAction) {
  const { productId, id } = action.payload;

  try {
    yield put(setLoadingState({ [id]: true, __disabled: true }));
    yield call(backPersonalProductStep, { productId });
  } catch (e) {
    // shrug (log)
    yield put(setLoadingState({ __disabled: false }));
  }
}

function* finishStepJourney(action: ProductStepAction) {
  const { productId, stepId, dynamicData, serverPayload } = action.payload;
  const { isValid, data } = parseJSON(serverPayload);
  const serverDynamicData = isValid ? data : {};

  const currentRoute: ReturnType<typeof getRouteState> = yield select(getRouteState);
  const userFeatures: ReturnType<typeof getUserFeatures> = yield select(getUserFeatures);
  const refetchQuery = userFeatures.yuScreenV4beta ? "GetYuScreen" : "YuScreenProductSlots";

  try {
    yield call(
      submitPersonalProductStep,
      {
        productId,
        stepId,
        data: JSON.stringify({ ...serverDynamicData, ...dynamicData }),
      },
      [refetchQuery]
    );
    yield put(refreshUserProfile());
    yield call(() => Navigation.pop(currentRoute));
  } catch (e) {
    // shrug (log)
  }
}

function* pushStep(action: ProductStepAction) {
  const { productId, stepId, dynamicData, serverPayload, id } = action.payload;
  const {
    isValid,
    data: { dispatchActions = [], ...data },
  } = parseJSON(serverPayload);
  const serverDynamicData = isValid ? data : {};

  try {
    yield put(setLoadingState({ [id]: true, __disabled: true }));
    yield call(
      submitPersonalProductStep,
      {
        productId,
        stepId,
        data: JSON.stringify({ ...serverDynamicData, ...dynamicData }),
      },
      ["GetPersonalProductStep"]
    );
    if (dispatchActions.length) {
      yield all(dispatchActions.map((dispatchAction: { type: string }) => put(dispatchAction)));
    }
  } catch (e) {
    // shrug (log)
    yield put(setLoadingState({ __disabled: false }));
  }
}

function* logEvent(action: SyncAction<string>) {
  const { isValid, data } = parseJSON(action.payload, ["name", "props"]);

  if (isValid) {
    yield call(Logger.logMixpanelEvent, data.name, data.props);
  }
}

function* openModal(action: ProductStepAction) {
  try {
    const serverPayload = JSON.parse(action.payload.serverPayload);

    const { heading, subheading, ctaLabel, onPress, textAlign } = serverPayload.props;

    yield call(() =>
      showYuModal({
        component: {
          id: MODALS.generic,
          name: MODALS.generic,
          passProps: {
            heading,
            subheading,
            ctaLabel,
            textAlign,
            onPress: onPress ? onPress : () => Navigation.dismissModal(MODALS.generic),
          },
        },
      })
    );
  } catch (error) {
    // log
  }
}

function* openAlertDialog(action: ProductStepAction) {
  try {
    const dispatch = reduxStore.dispatch;
    const serverPayload = JSON.parse(action.payload.serverPayload);

    const { title, message, buttons } = serverPayload;

    yield call(() => {
      Alert.alert(
        title,
        message,
        buttons.map((button: { text: string; onPress: ProductStepAction }) => ({
          ...button,
          onPress: !button.onPress ? null : () => dispatch(button.onPress),
        }))
      );
    });
  } catch (error) {
    // log
  }
}

function* yuScreenNavigate(action: SyncAction<string>) {
  const { isValid, data } = parseJSON<YuScreenNextRoute>(action.payload, ["productId"]);

  if (isValid) {
    if (data.shouldBeNormalised) {
      try {
        yield call(normalisePersonalProductStep, {
          productId: data.productId,
        });
      } catch (e) {
        Logger.error(e, { where: "product-step-normalise" });
      }
    }

    if (data.nextModalId) {
      yield call(() =>
        showYuModal({
          component: {
            id: data.nextModalId,
            name: data.nextModalId,
            passProps: {
              productId: data.productId,
            },
          },
        })
      );
      return;
    }

    yield call(() =>
      Navigation.push(ROUTES.yuScreen, {
        component: {
          id: data.nextRouteId,
          name: data.nextRouteId,
          passProps: {
            productId: data.productId,
          },
        },
      })
    );
  }
}

export default [
  takeLeading(SduiActionType.SDUI_ACTION_NAVIGATE_BACK as ActionPattern, navigateBack),
  takeLeading(SduiActionType.SDUI_ACTION_NAVIGATE as ActionPattern, navigateTo),
  takeLeading(SduiActionType.SDUI_ACTION_SET_BOTTOM_TAB as ActionPattern, setBottomTab),
  takeLeading(SduiActionType.SDUI_ACTION_OPEN_URL as ActionPattern, openUrl),
  takeLeading(SduiActionType.SDUI_ACTION_OPEN_SUPPORT_CHAT as ActionPattern, openChat),
  takeLeading(SduiActionType.SDUI_ACTION_PRODUCT_UNDERWRITING_STEP_POP as ActionPattern, popStep),
  takeLeading(SduiActionType.SDUI_ACTION_PRODUCT_UNDERWRITING_STEP_FINISH as ActionPattern, finishStepJourney),
  takeLeading(SduiActionType.SDUI_ACTION_PRODUCT_UNDERWRITING_STEP_PUSH as ActionPattern, pushStep),
  takeLeading(SduiActionType.SDUI_ACTION_OPEN_MODAL as ActionPattern, openModal),
  takeLeading(SduiActionType.SDUI_ACTION_OPEN_ALERT_DIALOG as ActionPattern, openAlertDialog),
  takeEvery(SduiActionType.SDUI_ACTION_LOG_EVENT as ActionPattern, logEvent),
  takeEvery(SduiActionType.SDUI_ACTION_YU_SCREEN_NAVIGATE as ActionPattern, yuScreenNavigate),
];
