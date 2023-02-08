import { t } from "@locale";
import { isSamsung } from "@utils";
import { Platform } from "react-native";

export const androidAlertCopy = {
  title: t("screens.fitkit_connect.android_alert.title"),
  message: t("screens.fitkit_connect.android_alert.message"),
  dismissLabel: t("labels.cta.go_back"),
  downloadLabel: t("screens.fitkit_connect.android_alert.download_label"),
  confirmLabel: t("screens.fitkit_connect.android_alert.confirm_label"),
};

const healthAppName = Platform.select({ ios: t("apple_health"), android: t("google_fit") });
const heading = Platform.select({
  ios: t("screens.fitkit_connect.ios_heading"),
  android: isSamsung() ? t("screens.fitkit_connect.samsung_heading") : t("screens.fitkit_connect.android_heading"),
});
const connectMessage = isSamsung()
  ? t("screens.fitkit_connect.connect_health_app")
  : t("screens.fitkit_connect.connect_message", { healthAppName });

export const fitKitConnectCopy = {
  heading,
  connectMessage,
  connectButton: t("screens.fitkit_connect.connect_button"),
};
