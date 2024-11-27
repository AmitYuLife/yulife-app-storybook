import { getRouteState } from "@redux/app/app.selectors";
import { refreshUserProfile } from "@redux/user/user.actions";
import { getUserFeatures } from "@redux/user/user.selectors";
import { Navigation } from "@navigation/main";
import { call, select, put } from "redux-saga/effects";
import { parseJSON } from "@utils";
import { ProductStepAction } from "../sdui.types";
import client from "@graphql/_core/client";
import { gql } from "@graphql/__generated";

export function* sduiActionProductUnderwritingStepFinishSaga(action: ProductStepAction) {
  const { productId, stepId, dynamicData, serverPayload } = action.payload;
  const { isValid, data } = parseJSON(serverPayload);
  const serverDynamicData = isValid ? data : {};

  const currentRoute: ReturnType<typeof getRouteState> = yield select(getRouteState);
  const userFeatures: ReturnType<typeof getUserFeatures> = yield select(getUserFeatures);
  const refetchQuery = userFeatures.yuScreenV4 ? "GetYuScreen" : "YuScreenProductSlots";

  try {
    yield call(() =>
      client().mutate({
        mutation: gql("SubmitPersonalProductStepDocument"),
        variables: {
          productId,
          stepId,
          data: JSON.stringify({ ...serverDynamicData, ...dynamicData }),
        },
        refetchQueries: [refetchQuery],
      })
    );
    yield put(refreshUserProfile());
    yield call(() => Navigation.pop(currentRoute));
  } catch (e) {
    // shrug (log)
  }
}
