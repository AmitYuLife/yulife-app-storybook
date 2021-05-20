import mock from "@services/socket/socketClient";
import { useEffect } from "react";
import { FitKitState } from "./fitkit.types";

let globalState = { loading: false, available: true, authorised: false } as FitKitState;

export function useFitKit() {
  const authorise = function (authorised = true) {
    globalState = { ...globalState, authorised, available: authorised };
  };

  useEffect(() => {
    return mock.onFitkitAuthorised(authorise);
  }, []);

  const { loading, available, authorised } = globalState;

  return {
    loading,
    available,
    authorised,
    authorise,
  };
}
