import { call, put, all } from "redux-saga/effects";
import { setLoadingState } from "../sdui.actions";
import { parseJSON } from "@utils";
import { ProductStepAction } from "../sdui.types";
import client from "@graphql/_core/client";
import { gql } from "@graphql/__generated";

export function* sduiActionProductUnderwritingStepPushSaga(action: ProductStepAction) {
  const { productId, stepId, dynamicData, serverPayload, id } = action.payload;
  const {
    isValid,
    data: { dispatchActions = [], ...data },
  } = parseJSON(serverPayload);
  const serverDynamicData = isValid ? data : {};

  try {
    yield put(setLoadingState({ [id]: true, __disabled: true }));
    yield call(() =>
      client().mutate({
        mutation: gql("SubmitPersonalProductStepDocument"),
        variables: {
          productId,
          stepId,
          data: JSON.stringify({ ...serverDynamicData, ...dynamicData }),
        },
        refetchQueries: ["GetPersonalProductStep"],
      })
    );
    if (dispatchActions.length) {
      yield all(dispatchActions.map((dispatchAction: { type: string; payload?: string }) => put(dispatchAction)));
    }
  } catch (e) {
    // shrug (log)
    yield put(setLoadingState({ __disabled: false }));
  }
}
