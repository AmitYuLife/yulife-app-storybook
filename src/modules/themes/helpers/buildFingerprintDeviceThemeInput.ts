import Logger from "@services/logging/logger";
import { getDeviceName, isAndroid } from "@utils";
import { getInstallReferrerAsync } from "expo-application";
import { Dimensions, Platform } from "react-native";

const buildFingerprintDeviceInput = async () => {
  const screenDimensions = Dimensions.get("screen");
  const osVersion = `${Platform.Version}`;
  const deviceModel = getDeviceName();
  const installationReferrerId = await getInstallationReferrerId();
  return {
    deviceWidth: Math.ceil(screenDimensions.width),
    deviceHeight: Math.ceil(screenDimensions.height),
    osVersion,
    deviceModel,
    installationReferrerId,
  };
};

const getInstallationReferrerId = async (): Promise<string | undefined> => {
  const isAndroidPlatform = isAndroid();
  if (!isAndroidPlatform) {
    return undefined;
  }

  try {
    const installReferrer = await getInstallReferrerAsync();

    const source = installReferrer.match(/utm_source=([^&]*)/)?.[1];

    return source === "google-play" ? undefined : source;
  } catch (e) {
    Logger.error(e, { event: "getInstallationReferrerId", location: "useFingerprintTheme" });
  }
};

export default buildFingerprintDeviceInput;
