import { call, put } from "redux-saga/effects";
import { setLoadingState } from "../sdui.actions";
import { ProductStepAction } from "../sdui.types";
import client from "@graphql/_core/client";
import { gql } from "@graphql/__generated";

export function* sduiActionProductUnderwritingStepPopSaga(action: ProductStepAction) {
  const { productId, id } = action.payload;

  try {
    yield put(setLoadingState({ [id]: true, __disabled: true }));
    yield call(() =>
      client().mutate({
        mutation: gql("BackPersonalProductStepDocument"),
        variables: { productId },
        refetchQueries: ["GetPersonalProductStep"],
      })
    );
  } catch (e) {
    // shrug (log)
    yield put(setLoadingState({ __disabled: false }));
  }
}
