import { useState, useRef, useEffect } from "react";
import { Linking, Platform } from "react-native";
import RNFitKit, { FitKitAuthOptions, FitKitHealthTrackingPlatform } from "@yu-life/react-native-fitkit";
import { queryPedometerFromDate } from "@yu-life/react-native-yu-health";
import moment from "moment";
import Storage from "@services/storage";
import { handleOpenWebView } from "@navigation/utils";
import Logger from "@services/logging/logger";
import { buildFitKitPermissions } from "@services/fitkit/fitkit.permissions";
import { t } from "@locale";
import { useUserFeatures } from "@hooks";

export function useAuthoriseFitkit({ authorise }: { authorise: (value: FitKitAuthOptions) => Promise<boolean> }) {
  const [fitkitPermission, setFitkitPermission] = useState("");
  const [isIosMotionAuthorised, setIsIosMotionAuthorised] = useState(false);
  const features = useUserFeatures();

  const timer = useRef(null);

  useEffect(() => {
    if (Platform.OS === "ios") {
      const now = moment();
      const dayStart = now.clone().startOf("day");
      const dayEnd = now.clone().endOf("day");

      if (features.tempGameEnableReleaseYuHealthV4) {
        queryPedometerFromDate({
          startTime: dayStart.toDate(),
          endTime: dayEnd.toDate(),
          queryOptions: {},
        })
          .then(() => {
            setIsIosMotionAuthorised(true);
          })
          .catch(() => {
            setIsIosMotionAuthorised(false);
          });
      } else {
        RNFitKit.queryPedometerFromDate(dayStart.format(), dayEnd.format())
          .then(() => {
            setIsIosMotionAuthorised(true);
          })
          .catch(() => {
            setIsIosMotionAuthorised(false);
          });
      }
    }
  }, [setIsIosMotionAuthorised]);

  useEffect(() => {
    return () => clearTimeout(timer.current);
  }, []);

  const delayedSetFitkitPermission = (permission: string) => {
    // delay so UI changes won't reflect until iOS handles native routing to settings

    timer.current = setTimeout(() => {
      setFitkitPermission(permission);
    }, 1000);
  };

  const handleAuthoriseFitkit = async (platform: FitKitHealthTrackingPlatform) => {
    if (Platform.OS === "ios") {
      try {
        if (!isIosMotionAuthorised) {
          return await Linking.openSettings();
        }

        if (fitkitPermission !== Storage.fitkit.REQUESTED) {
          await Storage.fitkit.setFitkitPermission(Storage.fitkit.REQUESTED);
          delayedSetFitkitPermission(Storage.fitkit.REQUESTED);

          return await authorise(buildFitKitPermissions());
        }

        handleOpenWebView({
          uri: t("screens.daily.fitkit.help.faq_uri"),
          title: t("screens.daily.fitkit.help.title"),
        });
      } catch (e) {
        Logger.error(e, { file: "daily-steps-content", platform: "ios" });
      }
    } else {
      try {
        return await authorise({ ...buildFitKitPermissions(), platform });
      } catch (e) {
        Logger.error(e, { file: "daily-steps-content", platform: "android" });
      }
    }
  };

  return { fitkitPermission, isIosMotionAuthorised, setFitkitPermission, handleAuthoriseFitkit };
}
