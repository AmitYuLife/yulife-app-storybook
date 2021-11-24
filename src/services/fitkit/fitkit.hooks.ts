import { useCallback, useEffect } from "react";
import { Linking, Platform } from "react-native";
import AsyncStorage from "@react-native-community/async-storage";
import RNFitKit, { FitKitTypes } from "./fitkit.service";
import Logger from "@services/logging/logger";
import { FitKitType } from "@graphql/_core/schema/globalTypes";
import { mapGqlFitKitTypeToFitKitType } from "./fitkit.helpers";
import { isSamsung } from "@utils";
import { useDispatch, useSelector } from "react-redux";
import { fitkitSelector } from "@redux/fitkit/fitkit.selectors";
import {
  fitkitAuthoriseFailed,
  fitkitAuthoriseStart,
  fitkitAuthoriseSucceeded,
  fitkitSetup,
} from "@redux/fitkit/fitkit.actions";

const RNFITKIT_PERMISSIONS_SHOWN = "@RNFitKit:authorised";

export function useFitKit() {
  const dispatch = useDispatch();
  const { loading, available, authorised, initialized } = useSelector(fitkitSelector);

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
      Logger.logMixpanelEvent("rn_fitKit_isAuthorised_error", { error: e });
    }

    await setMixpanelProperties(isAuthorised);

    return { available: isAvailable, authorised: isAuthorised };
  }, []);

  const setMixpanelProperties = async (isAuthorised: boolean) => {
    if (!isAuthorised) {
      Logger.setUserProperties({ health_app: [] });
      return;
    }

    if (Platform.OS === "ios") {
      Logger.setUserProperties({ health_app: ["apple"] });
      return;
    }

    if (isSamsung()) {
      const healthApps: string[] = [];

      const googleFitAuthorised = await RNFitKit.isAuthorised({
        read: [],
        platform: "GoogleFit",
      });
      if (googleFitAuthorised) {
        healthApps.push("google");
      }

      const samsungHealthAuthorised = await RNFitKit.isAuthorised({
        read: [],
        platform: "SamsungHealth",
      });
      if (samsungHealthAuthorised) {
        healthApps.push("samsung");
      }

      Logger.setUserProperties({ health_app: healthApps });
      return;
    }

    Logger.setUserProperties({ health_app: ["google"] });
  };

  useEffect(() => {
    (async function () {
      if (initialized) {
        return;
      }

      dispatch(fitkitAuthoriseStart());
      const newState = await getState();
      dispatch(fitkitSetup(newState));
    })();
  }, []);

  const authorise = useCallback(
    async function (options) {
      /**
       * ANDROID
       */
      if (Platform.OS === "android") {
        try {
          dispatch(fitkitAuthoriseStart());
          const isAuthorised = await RNFitKit.authorise(options);

          if (isAuthorised) {
            dispatch(fitkitAuthoriseSucceeded({ healthApp: options.platform }));
          } else {
            dispatch(fitkitAuthoriseFailed({ healthApp: options.platform }));
          }

          return isAuthorised;
        } catch (e) {
          dispatch(fitkitAuthoriseFailed({ healthApp: options.platform }));
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
          dispatch(fitkitSetup(newState));

          return true;
        }

        try {
          await Linking.openURL("app-settings:");
        } catch (e) {
          Logger.logMixpanelEvent("rn_fitKit_open_app_settings_error", { error: e.message });
        }

        return false;
      }

      dispatch(fitkitAuthoriseStart());

      await RNFitKit.authorise(options);

      const newState = await getState();

      dispatch(fitkitSetup(newState));

      try {
        await AsyncStorage.setItem(RNFITKIT_PERMISSIONS_SHOWN, "true");
      } catch (e) {
        Logger.logMixpanelEvent("rn_fitKit_authorise_error", { error: e.message });
      }

      return newState.authorised;
    },
    [getState]
  );

  const authoriseFitKitTypes = useCallback(
    async (fitKitTypes: FitKitType[]) => {
      try {
        await RNFitKit.authorise({ read: fitKitTypes.map(mapGqlFitKitTypeToFitKitType) });
        const newState = await getState();
        dispatch(fitkitSetup(newState));
      } catch (e) {
        Logger.error(e, {
          event: "authoriseFitKitTypes",
          fitKitTypes: fitKitTypes.map((fitKitType) => fitKitType.toString()).join(", "),
        });
      }
    },
    [getState]
  );

  return {
    loading,
    available,
    authorised,
    authorise,
    authoriseFitKitTypes,
  };
}
