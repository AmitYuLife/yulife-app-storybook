import { useState, useRef, useEffect } from "react";
import { Linking, Platform } from "react-native";
import RNFitKit, { FitKitAuthOptions } from "react-native-fitkit";
import moment from "moment";
import Storage from "@services/storage";
import { handleOpenWebView } from "@navigation/utils";
import Logger from "@services/logging/logger";
import FitKitPermissions from "@services/fitkit/fitkit.permissions";

// we can move to env if we have different variants, for now keep as constant since this is the only variant
const FAQ_LINK = "https://faq.yulife.com/en/articles/2813117-connecting-health-apps-to-yulife";

export function useAuthoriseFitkit({ authorise }: { authorise: (value: FitKitAuthOptions) => void }) {
  const [fitkitPermission, setFitkitPermission] = useState("");
  const [isIosMotionAuthorised, setIsIosMotionAuthorised] = useState(false);
  const timer = useRef(null);

  useEffect(() => {
    if (Platform.OS === "ios") {
      const now = moment();
      const dayStart = now.clone().startOf("day").format();
      const dayEnd = now.clone().endOf("day").format();
      RNFitKit.queryPedometerFromDate(dayStart, dayEnd)
        .then(() => {
          setIsIosMotionAuthorised(true);
        })
        .catch(() => {
          setIsIosMotionAuthorised(false);
        });
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

  const handleAuthoriseFitkit = async () => {
    if (Platform.OS === "ios") {
      try {
        if (!isIosMotionAuthorised) {
          return await Linking.openSettings();
        }

        if (fitkitPermission !== Storage.fitkit.REQUESTED) {
          await Storage.fitkit.setFitkitPermission(Storage.fitkit.REQUESTED);
          delayedSetFitkitPermission(Storage.fitkit.REQUESTED);

          return authorise(FitKitPermissions);
        }

        handleOpenWebView({ uri: FAQ_LINK, title: "Help" });
      } catch (e) {
        Logger.error(e, { file: "daily-steps-content", platform: "ios" });
      }
    } else {
      try {
        return authorise(FitKitPermissions);
      } catch (e) {
        Logger.error(e, { file: "daily-steps-content", platform: "android" });
      }
    }
  };

  return { fitkitPermission, isIosMotionAuthorised, setFitkitPermission, handleAuthoriseFitkit };
}
