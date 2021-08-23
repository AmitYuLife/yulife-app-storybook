import { ContentItemSDUIAction } from "@graphql/_core/schema/globalTypes";
import { MODALS } from "@navigation/constants";
import { handleLinkPress } from "@services/app-link";
import { Navigation } from "react-native-navigation";
import { call, takeLatest, select, ActionPattern } from "redux-saga/effects";
// import Logger from "../../services/logging/logger";
import { getRouteState } from "../app/app.selectors";
import submitPersonalProductStepGql from "@graphql/personalProduct/submitPersonalProductStep.gql";
import { SyncAction } from "@redux/_core/types";
import { ProductStepAction } from "./sdui.types";
import { parseJSON } from "./sdui.helpers";

function* navigateBack({ payload }: SyncAction<string>) {
  const currentRoute: ReturnType<typeof getRouteState> = yield select(getRouteState);
  const onExit = () => Navigation.pop(currentRoute);

  if (payload) {
    const { isValid, data } = parseJSON(payload, ["title", "message", "cancelLabel", "confirmLabel"]);

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
  }

  yield call(onExit);
}

function* navigateTo({ payload }: ProductStepAction) {
  const { serverPayload } = payload;

  if (serverPayload) {
    const currentRoute: ReturnType<typeof getRouteState> = yield select(getRouteState);

    const { isValid, data } = parseJSON(serverPayload, ["routeId"]);

    if (isValid) {
      const { routeId, props } = data;

      // TODO: validate the route

      yield call(() =>
        Navigation.push(currentRoute, {
          component: {
            id: routeId,
            name: routeId,
            passProps: {
              ...props,
            },
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
    // shrug
  }
}

// TODO: consider splitting these into sdui, underwriting

// function* popStep({ payload }: ServerPayload) {}

function* pushStep(action: ProductStepAction) {
  const { productId, stepId, dynamicData } = action.payload;
  yield call(submitPersonalProductStepGql, {
    payload: { productId, stepId, data: JSON.stringify(dynamicData) },
  });
}

export default [
  takeLatest(ContentItemSDUIAction.SDUI_ACTION_NAVIGATE_BACK as ActionPattern, navigateBack),
  takeLatest(ContentItemSDUIAction.SDUI_ACTION_NAVIGATE as ActionPattern, navigateTo),
  takeLatest(ContentItemSDUIAction.SDUI_ACTION_OPEN_URL as ActionPattern, openUrl),
  // takeLatest(ContentItemSDUIAction.SDUI_ACTION_PRODUCT_UNDERWRITING_STEP_POP as ActionPattern, popStep),
  takeLatest(ContentItemSDUIAction.SDUI_ACTION_PRODUCT_UNDERWRITING_STEP_PUSH as ActionPattern, pushStep),
];
