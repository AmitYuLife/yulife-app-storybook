import { all, call, put } from "redux-saga/effects";
import { setLoadingState } from "../sdui.actions";
import { SduiSagaAction } from "../sdui.types";
import { submitSduiJourney } from "../../../graphql/journey";
import { parseJSON } from "@utils";
import { SduiAction } from "@graphql/_core/schema";

const ACCEPTED_MUTATIONS_MAP = new Map();
ACCEPTED_MUTATIONS_MAP.set("submitSduiJourney", submitSduiJourney);

interface IParsedJson {
  dispatchActions?: SduiAction[];
  mutation: string;
  refetchQueries: string[];
}
const SERVER_DYNAMIC_DATA_FALLBACK: IParsedJson = {
  dispatchActions: [],
  mutation: "",
  refetchQueries: [],
};

export function* sduiActionSendMutation(action: SduiSagaAction) {
  const serverPayload = action.payload || "";
  const contextPayload = action.contextPayload || {};
  const {
    isValid,
    data: { dispatchActions = [], ...data },
  } = parseJSON<IParsedJson>(serverPayload);
  const serverDynamicData = isValid ? data : SERVER_DYNAMIC_DATA_FALLBACK;

  try {
    yield put(setLoadingState({ __disabled: true }));
    const currentMutation = ACCEPTED_MUTATIONS_MAP.get(serverDynamicData.mutation);

    if (!currentMutation) {
      // unsupported mutation
      return;
    }

    const mutationArgs = {
      ...serverDynamicData,
      data: JSON.stringify(contextPayload?.dynamicData),
    };

    yield call(currentMutation, {
      variables: mutationArgs,
      refetchQueries: serverDynamicData.refetchQueries,
    });

    if (dispatchActions.length) {
      yield all(dispatchActions.map((dispatchAction: SduiAction) => put(dispatchAction)));
    }
  } catch (e) {
  } finally {
    yield put(setLoadingState({ __disabled: false }));
  }
}
