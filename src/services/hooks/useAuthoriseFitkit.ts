import { useState, useRef, useEffect } from "react";
import { Platform } from "react-native";
import Storage from "@services/storage";
import { handleOpenWebView } from "@navigation/utils";
import Logger from "@services/logging/logger";
import FitKitPermissions from "@services/fitkit/fitkit.permissions";
import { FitKitAuthOptions } from "react-native-fitkit";

// we can move to env if we have different variants, for now keep as constant since this is the only variant
const FAQ_LINK = "https://faq.yulife.com/en/articles/2813117-connecting-health-apps-to-yulife";

export function useAuthoriseFitkit({ authorise }: { authorise: (value: FitKitAuthOptions) => void }) {
  const [fitkitPermission, setFitkitPermission] = useState("");
  const timer = useRef(null);

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

  return { fitkitPermission, setFitkitPermission, handleAuthoriseFitkit };
}
