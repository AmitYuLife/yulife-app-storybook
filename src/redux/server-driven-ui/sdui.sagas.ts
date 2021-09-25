import { SduiActionType } from "@graphql/_core/schema/globalTypes";
import { MODALS } from "@navigation/constants";
import { TAB_ROUTES } from "@navigation/root";
import { handleLinkPress } from "@services/app-link";
import { Navigation } from "react-native-navigation";
import { call, takeLatest, select, ActionPattern, takeEvery } from "redux-saga/effects";
import Logger from "@services/logging/logger";
import { SyncAction } from "@redux/_core/types";
import { getRouteState } from "../app/app.selectors";
import { submitPersonalProductStep, backPersonalProductStep } from "@graphql/personalProduct";
import { ProductStepAction } from "./sdui.types";
import { parseJSON, getServerPayload } from "./sdui.helpers";

function* navigateBack({ payload }: ProductStepAction) {
  const currentRoute: ReturnType<typeof getRouteState> = yield select(getRouteState);
  const onExit = () => Navigation.pop(currentRoute);

  const { isValid, data } = parseJSON(getServerPayload(payload), ["title", "message", "cancelLabel", "confirmLabel"]);

  if (isValid) {
    const onPressSecondary = () => Navigation.dismissModal(MODALS.generic);
    const onPress = () => {
      onExit();
      onPressSecondary();
    };

    yield call(() =>
      Navigation.showModal({
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
  // const { serverPayload, productId } = payload;

  const isPayloadObject = typeof payload === "object" && !!payload;
  const { isValid, data } = parseJSON(getServerPayload(payload), ["routeId"]);

  if (isValid) {
    const { routeId, props } = data;
    const otherProps = isPayloadObject ? { productId: payload.productId } : {};

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

// TODO: consider splitting these into sdui, underwriting

function* popStep(action: ProductStepAction) {
  const { productId } = action.payload;

  try {
    yield call(backPersonalProductStep, { productId });
  } catch (e) {
    // shrug (log)
  }
}

function* pushStep(action: ProductStepAction) {
  const { productId, stepId, dynamicData, serverPayload } = action.payload;
  const { isValid, data } = parseJSON(serverPayload);
  const serverDynamicData = isValid ? data : {};

  try {
    yield call(submitPersonalProductStep, {
      productId,
      stepId,
      data: JSON.stringify({ ...serverDynamicData, ...dynamicData }),
    });
  } catch (e) {
    // shrug (log)
  }
}

function* logEvent(action: SyncAction<string>) {
  const { isValid, data } = parseJSON(action.payload, ["name", "props"]);

  if (isValid) {
    yield call(Logger.logMixpanelEvent, data.name, data.props);
  }
}

export default [
  takeLatest(SduiActionType.SDUI_ACTION_NAVIGATE_BACK as ActionPattern, navigateBack),
  takeLatest(SduiActionType.SDUI_ACTION_NAVIGATE as ActionPattern, navigateTo),
  takeLatest(SduiActionType.SDUI_ACTION_SET_BOTTOM_TAB as ActionPattern, setBottomTab),
  takeLatest(SduiActionType.SDUI_ACTION_OPEN_URL as ActionPattern, openUrl),
  takeLatest(SduiActionType.SDUI_ACTION_PRODUCT_UNDERWRITING_STEP_POP as ActionPattern, popStep),
  takeLatest(SduiActionType.SDUI_ACTION_PRODUCT_UNDERWRITING_STEP_PUSH as ActionPattern, pushStep),
  takeEvery(SduiActionType.SDUI_ACTION_LOG_EVENT as ActionPattern, logEvent),
];
