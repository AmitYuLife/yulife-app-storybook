/* eslint-disable react-compiler/react-compiler */
import mock from "@services/socket/socketClient";
import { useCallback, useEffect, useState } from "react";
import { FitKitState } from "./fitkit.types";

let initialState = { loading: false, available: true, authorised: false } as FitKitState;

export function useFitKit() {
  "use no memo";
  const [globalState, setGlobalState] = useState(initialState);

  const authorise = useCallback(
    (authorised = true) => {
      // save this for next time useFitKit is called, we want it to persist globally
      initialState = { ...initialState, authorised, available: authorised };
      // if component is mounted, update the state
      setGlobalState(initialState);
    },
    [setGlobalState]
  );

  useEffect(() => {
    const cb = mock.onFitkitAuthorised(authorise);
    return () => {
      cb();
    };
  }, []);

  const authoriseFitKitTypes = function () {
    authorise();
  };

  const { loading, available, authorised } = globalState;

  return {
    loading,
    available,
    authorised,
    authorise,
    authoriseFitKitTypes,
  };
}
