import { pushToScreen } from "@navigation/root";
import { getRouteState } from "@redux/app/app.selectors";
import { all, call, put, select, spawn } from "redux-saga/effects";
import { getServerPayload } from "../sdui.helpers";
import { ProductStepAction } from "../sdui.types";
import { parseJSON } from "@utils";
import { dynamicallyRegisteredRoutes, preRegisteredRoutes } from "@navigation/routes";
import { registerComponentWithOptions } from "@navigation/registerComponentWithOptions";
import Logger from "@services/logger/logger";

export function* sduiActionNavigateSaga({ payload }: ProductStepAction) {
  const currentRoute: ReturnType<typeof getRouteState> = yield select(getRouteState);
  const isPayloadObject = typeof payload === "object" && !!payload;
  const {
    isValid,
    data: { dispatchActions = [], ...data },
  } = parseJSON(getServerPayload(payload), ["routeId"]);

  try {
    // Dispatch additional actions supplied by the server
    if (dispatchActions.length) {
      yield all(dispatchActions.map((dispatchAction: { type: string; payload?: string }) => put(dispatchAction)));
    }
  } catch (e) {
    yield spawn(() => {
      Logger.notify(e, { event: "dispatchActions", file: "sduiActionNavigateSaga" });
    });
  }

  if (isValid) {
    const { routeId, props, isSduiStatic, options } = data;
    const otherProps = isPayloadObject ? { productId: payload.productId || data?.productId } : {};

    if (isSduiStatic && ![...preRegisteredRoutes, ...dynamicallyRegisteredRoutes].includes(routeId)) {
      dynamicallyRegisteredRoutes.push(routeId);
      registerComponentWithOptions({
        name: routeId,
        component: require("../../../components/containers/sdui-static/sdui-static.container").default,
      });
    }

    yield call(() =>
      pushToScreen(currentRoute, {
        component: {
          id: routeId,
          name: routeId,
          options: {
            ...(options || {}),
          },
          passProps: {
            ...otherProps,
            ...(props || {}),
          },
        },
      })
    );
  }
}
