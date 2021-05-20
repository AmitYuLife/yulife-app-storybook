import { useState, useCallback, useEffect } from "react";
import { Linking, Platform } from "react-native";
import AsyncStorage from "@react-native-community/async-storage";
import RNFitKit, { FitKitTypes } from "./fitkit.service";
import { FitKitState } from "./fitkit.types";
import Logger from "@services/logging/logger";

const RNFITKIT_PERMISSIONS_SHOWN = "@RNFitKit:authorised";

export function useFitKit() {
  const [state, setState] = useState({ available: true, authorised: true, loading: true } as FitKitState);
  const { loading, available, authorised } = state;

  const getState = useCallback(async function () {
    let isAvailable = false;
    let isAuthorised = false;

    try {
      isAvailable = await RNFitKit.isAvailable();
    } catch (e) {
      Logger.logMixpanelEvent("rn_fitKit_isAvailable_error", { error: e.message });
    }

    try {
      if (Platform.OS === "ios") {
        const start = new Date();
        start.setDate(start.getDate() - 5);
        start.setHours(0, 0, 0, 0);

        const startTime = start.toISOString().slice(0, 19);
        const endTime = new Date().toISOString().slice(0, 19);

        const res = await RNFitKit.aggregateQuery({
          aggregateBy: {
            bucketSize: { value: 1, type: FitKitTypes.TimeRange.DAYS },
            type: FitKitTypes.AggregateType.Time,
          },
          disableUserEntries: false,
          endTime,
          startTime,
          type: FitKitTypes.Types.StepCount,
        });

        isAuthorised = res && res.length > 0;
      } else {
        isAuthorised = await RNFitKit.isAuthorised();
      }
    } catch (e) {
      Logger.logMixpanelEvent("rn_fitKit_isAuthorised_error", { error: e.message });
    }

    return { available: isAvailable, authorised: isAuthorised, loading: false };
  }, []);

  useEffect(() => {
    (async function () {
      const newState = await getState();
      setState(newState);
    })();
  }, [getState]);

  const authorise = useCallback(
    async function (options) {
      /**
       * ANDROID
       */
      if (Platform.OS === "android") {
        try {
          const isAuthorised = await RNFitKit.authorise(options);

          setState((oldState) => ({ ...oldState, authorised: isAuthorised }));

          return isAuthorised;
        } catch (e) {
          return false;
        }
      }

      /**
       * IOS is a nightmare. There's no way we would know if they have it enabled.
       * Improvise. Adapt. Overcome.
       */
      let wasAuthorisationShown = false;

      try {
        const isAuthorised = await AsyncStorage.getItem(RNFITKIT_PERMISSIONS_SHOWN);

        if (isAuthorised && isAuthorised === "true") {
          wasAuthorisationShown = true;
        }
      } catch (e) {
        Logger.logMixpanelEvent("rn_fitKit_authorisation_shown_error", { error: e.message });
      }

      if (wasAuthorisationShown) {
        const newState = await getState();

        if (newState.authorised) {
          setState(newState);

          return true;
        }

        try {
          await Linking.openURL("app-settings:");
        } catch (e) {
          Logger.logMixpanelEvent("rn_fitKit_open_app_settings_error", { error: e.message });
        }

        return false;
      }

      await RNFitKit.authorise(options);

      const newState = await getState();

      setState(newState);

      try {
        await AsyncStorage.setItem(RNFITKIT_PERMISSIONS_SHOWN, "true");
      } catch (e) {
        Logger.logMixpanelEvent("rn_fitKit_authorise_error", { error: e.message });
      }

      return newState.authorised;
    },
    [getState]
  );

  return {
    loading,
    available,
    authorised,
    authorise,
  };
}
