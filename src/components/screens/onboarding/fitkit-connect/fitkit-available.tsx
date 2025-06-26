import React, { FC, useState, useCallback } from "react";
import { isSamsung } from "@utils";
import { Colours, Style } from "@styles";
import { Alert, StyleSheet } from "react-native";
import { Blurb, Heading, Pad } from "@atoms";
import { Button } from "@molecules";
import { getFitKitConnectCopy } from "./copy";
import { ConnectCheckList } from "@molecules";
import { openGoogleFit } from "@services/app-link";
import { FitKitHealthTrackingPlatform } from "@services/fitkit/fitkit.service";
import { t } from "@locale";
import { FITKIT_CONNECT_BUTTON } from "@ids";

interface IProps {
  connecting: boolean;
  onConnectPress: (platform: FitKitHealthTrackingPlatform) => void;
}

const FitKitAvailable: FC<IProps> = ({ connecting, onConnectPress }) => {
  const { fitKitConnectCopy, androidAlertCopy } = getFitKitConnectCopy();

  const { heading, connectMessage, connectButton } = fitKitConnectCopy;
  // send the platform for iOS as well?
  const [selectedFitkitPlatform, setSelectedFitkitPlatform] = useState<FitKitHealthTrackingPlatform>("GoogleFit");
  const [connectButtonLabel, setConnectButtonLabel] = useState(
    isSamsung() ? t("labels.cta.connect_health_app", { healthApp: t("google_fit") }) : connectButton
  );

  const _setSelectedFitkitPlatform = (platform: FitKitHealthTrackingPlatform) => {
    setConnectButtonLabel(
      t("labels.cta.connect_health_app", {
        healthApp: platform === "SamsungHealth" ? t("samsung_health") : t("google_fit"),
      })
    );
    setSelectedFitkitPlatform(platform);
  };

  const _onConnectPress = useCallback(() => {
    if (isSamsung() && selectedFitkitPlatform === "GoogleFit") {
      const { title, message: alertMessage, dismissLabel, downloadLabel, confirmLabel } = androidAlertCopy;
      const buttons = [
        {
          text: dismissLabel,
        },
        {
          text: downloadLabel,
          onPress: openGoogleFit,
        },
        {
          text: confirmLabel,
          onPress: () => onConnectPress(selectedFitkitPlatform),
        },
      ];
      return Alert.alert(title, alertMessage, buttons, { cancelable: true });
    }

    return onConnectPress(selectedFitkitPlatform);
  }, [openGoogleFit, onConnectPress, selectedFitkitPlatform]);

  return (
    <>
      <Heading label={heading} bold={true} style={styles.heading} />
      <Pad height={14} />
      <Blurb
        label={connectMessage}
        wrapperStyle={styles.connectMessageWrapperStyle}
        textStyle={styles.connectMessage}
      />
      <Pad height={34} />
      {!isSamsung() ? null : (
        <>
          <ConnectCheckList setSelectedFitkitPlatform={_setSelectedFitkitPlatform} />
          <Pad height={34} />
        </>
      )}
      <Button
        testID={FITKIT_CONNECT_BUTTON}
        isLoading={connecting}
        disabled={connecting}
        translatedLabel={connectButtonLabel}
        onPress={_onConnectPress}
      />
    </>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontSize: Style.adjust(32),
    lineHeight: Style.adjust(40),
    color: Colours.neutral.n800,
    letterSpacing: Style.adjust(1),
  },
  connectMessage: {
    fontSize: Style.adjust(16),
    lineHeight: Style.adjust(24),
    letterSpacing: Style.adjust(0.6),
    color: Colours.neutral.n800,
  },
  connectMessageWrapperStyle: {
    paddingHorizontal: Style.adjust(32),
  },
});

export default FitKitAvailable;
