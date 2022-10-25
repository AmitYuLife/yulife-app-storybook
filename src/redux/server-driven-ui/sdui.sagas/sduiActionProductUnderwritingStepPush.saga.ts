import { call, put, all } from "redux-saga/effects";
import { submitPersonalProductStep } from "@graphql/personalProduct";
import { setLoadingState } from "../sdui.actions";
import { parseJSON } from "../sdui.helpers";
import { ProductStepAction } from "../sdui.types";

export function* sduiActionProductUnderwritingStepPushSaga(action: ProductStepAction) {
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