import { pushToScreen } from "@navigation/root";
import { getRouteState } from "@redux/app/app.selectors";
import { call, select } from "redux-saga/effects";
import { getServerPayload } from "../sdui.helpers";
import { ProductStepAction } from "../sdui.types";
import { parseJSON } from "@utils";

export function* sduiActionNavigateSaga({ payload }: ProductStepAction) {
  const currentRoute: ReturnType<typeof getRouteState> = yield select(getRouteState);

  const isPayloadObject = typeof payload === "object" && !!payload;
  const { isValid, data } = parseJSON(getServerPayload(payload), ["routeId"]);

  if (isValid) {
    const { routeId, props } = data;
    const otherProps = isPayloadObject ? { productId: payload.productId || data?.productId } : {};

    yield call(() =>
      pushToScreen(currentRoute, {
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
