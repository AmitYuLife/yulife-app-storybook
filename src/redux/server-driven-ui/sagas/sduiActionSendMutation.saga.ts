import { gql } from "@apollo/client";
import { get, parseJSON } from "@utils";
import { all, call, put } from "redux-saga/effects";
import client from "@graphql/_core/client";
import { setLoadingState } from "../sdui.actions";
import { SduiSagaAction } from "../sdui.types";
import { submitSduiJourney } from "../../../graphql/journey";
import { getServerPayload } from "../sdui.helpers";
import Logger from "@services/logging/logger";
import { SduiAction } from "@graphql/__generated";

type MutationSduiAction = Partial<SduiAction> & { __typename?: "SduiAction" };
type MutationRequest = (args: { variables: any; refetchQueries?: string[] }) => Promise<unknown>;

const ACCEPTED_MUTATIONS_MAP = new Map<string, MutationRequest>([["submitSduiJourney", submitSduiJourney]]);

interface IParsedJson {
  dispatchActions?: SduiAction[];
  mutation?: string;
  customMutation?: string;
  refetchQueries?: string[];
  responseGetterPath?: string;
}

const SERVER_PARSED_PAYLOAD_FALLBACK: IParsedJson = {
  dispatchActions: [],
  mutation: "",
  customMutation: "",
  refetchQueries: [],
  responseGetterPath: "",
};

const buildMutation = (data: IParsedJson): MutationRequest => {
  if (ACCEPTED_MUTATIONS_MAP.has(data.mutation)) {
    return ACCEPTED_MUTATIONS_MAP.get(data.mutation);
  }

  if (data.customMutation && data.customMutation.includes("mutation")) {
    return (args) =>
      client().mutate({
        ...args,
        mutation: gql(data.customMutation),
      });
  }
};

export function* sduiActionSendMutation(action: SduiSagaAction) {
  const {
    isValid,
    data: { dispatchActions = [], ...data },
  } = parseJSON<IParsedJson>(getServerPayload(action.payload));
  const contextPayload = action.contextPayload || {};
  const serverParsedPayload = isValid ? data : SERVER_PARSED_PAYLOAD_FALLBACK;

  try {
    yield put(setLoadingState({ __disabled: true }));
    const currentMutation = buildMutation(serverParsedPayload);

    if (!currentMutation) {
      // unsupported mutation
      return;
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { mutation: _, customMutation: __, refetchQueries, responseGetterPath, ...otherProps } = serverParsedPayload;

    const mutationArgs = {
      ...otherProps,
      data: JSON.stringify(contextPayload?.dynamicData || {}),
    };

    const response: unknown = yield call(currentMutation, {
      refetchQueries,
      variables: mutationArgs,
    });

    const responseData: MutationSduiAction = get(response, responseGetterPath || "", {});

    if (responseData?.__typename === "SduiAction") {
      yield put(responseData as SduiSagaAction);
    }

    if (dispatchActions.length) {
      yield all(dispatchActions.map((dispatchAction: SduiAction) => put(dispatchAction)));
    }
  } catch (e) {
    yield call(() =>
      Logger.logMixpanelEvent("app_debug", {
        sdui: true,
        location: "sduiActionSendMutation",
        error: e?.message,
      })
    );
  }
}
