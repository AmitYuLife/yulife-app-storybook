import { useCallback, useEffect } from "react";
import { Alert, Linking, Platform } from "react-native";
import RNFitKit, { FitKitAuthOptions, FitKitHealthTrackingPlatform, FitKitTypes } from "./fitkit.service";
import Logger from "@services/logging/logger";
import dd from "@services/datadog";
import { mapGqlFitKitTypeToFitKitType } from "./cast/fitkitTypes";
import { DATE_FORMAT_WITH_TZ, isSamsung } from "@utils";
import { useDispatch, useSelector } from "react-redux";
import { fitkitSelector } from "@redux/fitkit/fitkit.selectors";
import {
  fitkitAuthoriseFailed,
  fitkitAuthoriseStart,
  fitkitAuthoriseSucceeded,
  fitkitSetup,
} from "@redux/fitkit/fitkit.actions";
import { AndroidSystemPermissionsConfig, FitKitAndroidSystemPermission } from "./fitkit.permissions";
import { requestAndroidSystemPermissions } from "./fitkit.system-permissions";
import moment from "moment";
import { Storage, StorageKey } from "@utils/storage";
import { FitKitType } from "@graphql/__generated";

export function useFitKit() {
  const dispatch = useDispatch();
  const { loading, available, authorised, initialized } = useSelector(fitkitSelector);

  const getState = useCallback(async function () {
    let isAvailable = false;
    let isAuthorised = false;

    try {
      isAvailable = await RNFitKit.isAvailable();
    } catch (e) {
      dd.error("RNFitKit.isAvailable error", {
        error: e.message,
        location: "fitkit",
      });
    }

    try {
      if (Platform.OS === "ios") {
        const startTime = moment().subtract(5, "days").startOf("day").format(DATE_FORMAT_WITH_TZ);
        const endTime = moment().format(DATE_FORMAT_WITH_TZ);

        const args = {
          aggregateBy: {
            bucketSize: {
              value: 1,
              type: FitKitTypes.TimeRange.DAYS,
            },
            type: FitKitTypes.AggregateType.Time,
          },
          disableUserEntries: false,
          endTime,
          startTime,
        };

        const stepsResponse = await RNFitKit.aggregateQuery({
          ...args,
          types: [FitKitTypes.Types.StepCount],
        });

        isAuthorised = stepsResponse?.length > 0;

        if (!isAuthorised) {
          const mindfulResponse = await RNFitKit.sampleQuery({ ...args, type: FitKitTypes.Types.MindfulSession });
          isAuthorised = mindfulResponse?.length > 0;
        }
      } else {
        isAuthorised = await RNFitKit.isAuthorised();
      }
    } catch (e) {
      dd.error("RNFitKit.isAuthorised error", { error: e, location: "fitkit" });
    }

    await setMixpanelProperties(isAuthorised);

    return { available: isAvailable, authorised: isAuthorised };
  }, []);

  const setMixpanelProperties = async (isAuthorised: boolean) => {
    if (!isAuthorised) {
      Logger.setUserProperties({ health_app: "not_set" }, true);
      return;
    }

    if (Platform.OS === "ios") {
      Logger.setUserProperties({ health_app: "apple" }, true);
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

      Logger.setUserProperties({ health_app: healthApps }, true);
      return;
    }

    Logger.setUserProperties({ health_app: "google" }, true);
  };

  const checkSystemPermissions = async (options: FitKitAuthOptions) => {
    if (Platform.OS !== "android" || options.platform !== "GoogleFit") {
      return options;
    }

    const androidPermissions = options.read.reduce((permissions, readType) => {
      if (AndroidSystemPermissionsConfig.has(readType)) {
        const permission = AndroidSystemPermissionsConfig.get(readType);
        if (!permissions.has(permission)) {
          permissions.add(permission);
        }
      }

      return permissions;
    }, new Set<FitKitAndroidSystemPermission>());

    if (androidPermissions.size === 0) {
      return options;
    }

    const permissionState = await requestAndroidSystemPermissions([...androidPermissions]);
    if (
      options.platform === "GoogleFit" &&
      Platform.Version > 28 &&
      permissionState.get(FitKitAndroidSystemPermission.activity) === "never_ask_again"
    ) {
      Alert.alert(
        "Google Fit permissions denied",
        "To offer you rewards YuLife needs access to your physical activity through Google Fit.",
        [
          {
            text: "Cancel",
          },
          {
            text: "Open settings",
            onPress: () => {
              Linking.openSettings();
            },
          },
        ]
      );
    }

    if (
      options.platform === "GoogleFit" &&
      permissionState.get(FitKitAndroidSystemPermission.location) === "never_ask_again"
    ) {
      Alert.alert(
        "Google Fit permissions denied",
        "To offer you rewards YuLife needs access to your location through Google Fit.",
        [
          {
            text: "Cancel",
          },
          {
            text: "Open settings",
            onPress: () => {
              Linking.openSettings();
            },
          },
        ]
      );
    }

    const filteredRead = options.read.filter((readType) => {
      if (!AndroidSystemPermissionsConfig.has(readType)) {
        return true;
      }

      const permission = AndroidSystemPermissionsConfig.get(readType);
      if (!permissionState.has(permission) || permissionState.get(permission) !== "granted") {
        return false;
      }

      return true;
    });
    return {
      ...options,
      read: filteredRead,
    };
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
    async function (options: FitKitAuthOptions) {
      /**
       * ANDROID
       */
      if (Platform.OS === "android") {
        try {
          dispatch(fitkitAuthoriseStart());
          const filteredOptions = await checkSystemPermissions(options);
          if (
            options.platform === "GoogleFit" &&
            Platform.Version > 28 &&
            !filteredOptions?.read?.some((readType) => readType === FitKitTypes.Types.StepCount)
          ) {
            dispatch(fitkitAuthoriseFailed({ healthApp: options.platform }));
            return false;
          }

          const isAuthorised = await RNFitKit.authorise(filteredOptions);

          if (isAuthorised) {
            dispatch(fitkitAuthoriseSucceeded({ healthApp: options.platform }));
          } else {
            dispatch(fitkitAuthoriseFailed({ healthApp: options.platform }));
          }

          return isAuthorised;
        } catch {
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
        const isAuthorised = await Storage.getItem(StorageKey.fitKitAuthorised);

        if (isAuthorised && isAuthorised === "true") {
          wasAuthorisationShown = true;
        }
      } catch (e) {
        dd.error("RNFitKit.authorise error", {
          error: e.message,
          location: "fitkit",
        });
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
          dd.error("Linking.openURL error", {
            error: e.message,
            location: "fitkit",
          });
        }

        return false;
      }

      dispatch(fitkitAuthoriseStart());

      await RNFitKit.authorise(options);

      const newState = await getState();

      dispatch(fitkitSetup(newState));

      try {
        await Storage.setItem(StorageKey.fitKitAuthorised, "true");
      } catch (e) {
        dd.error("Storage.setItem error", {
          error: e.message,
          location: "fitkit",
        });
      }

      return newState.authorised;
    },
    [getState]
  );

  const authoriseFitKitTypes = useCallback(
    async (fitKitTypesRead: FitKitType[], platform?: FitKitHealthTrackingPlatform, checkState = true) => {
      try {
        const options = await checkSystemPermissions({
          read: fitKitTypesRead.map(mapGqlFitKitTypeToFitKitType),
          platform,
        });

        const isAuthorised = await RNFitKit.authorise(options);
        if (checkState) {
          const newState = await getState();
          dispatch(fitkitSetup(newState));
        }

        return isAuthorised;
      } catch (e) {
        Logger.error(e, {
          event: "authoriseFitKitTypes",
          fitKitTypes: fitKitTypesRead.map((fitKitType) => fitKitType.toString()).join(", "),
        });
        return false;
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
