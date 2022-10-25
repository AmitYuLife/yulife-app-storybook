import { call, put } from "redux-saga/effects";
import { backPersonalProductStep } from "@graphql/personalProduct";
import { setLoadingState } from "../sdui.actions";
import { ProductStepAction } from "../sdui.types";

export function* sduiActionProductUnderwritingStepPopSaga(action: ProductStepAction) {
  const { productId, id } = action.payload;

  try {
    yield put(setLoadingState({ [id]: true, __disabled: true }));
    yield call(backPersonalProductStep, { productId });
  } catch (e) {
    // shrug (log)
    yield put(setLoadingState({ __disabled: false }));
  }
}
