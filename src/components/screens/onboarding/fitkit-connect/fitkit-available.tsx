import { openGoogleFit } from "@services/app-link";
import { isSamsung } from "@services/utils";
import { Colours, Style } from "@styles";
import React, { FC } from "react";
import { Alert, StyleSheet } from "react-native";
import { GetMobileCopy_getMobileCopy_screens_fitkitConnect } from "@graphql/_core/schema";
import { Blurb, Button, Heading, Pad, SecondaryButton } from "@atoms";
import { alertCopy, fitKitConnectCopy } from "./copy";

interface IProps {
  connecting: boolean;
  onConnectPress: () => void;
  copy: GetMobileCopy_getMobileCopy_screens_fitkitConnect;
}

const FitKitAvailable: FC<IProps> = ({ connecting, onConnectPress }) => {
  const { heading, connectMessage, connectButton } = fitKitConnectCopy;
  const _onConnectPress = () => {
    if (isSamsung()) {
      const { title, message, confirmLabel, cancelLabel } = alertCopy;
      const buttons = [
        {
          text: confirmLabel,
          onPress: onConnectPress,
        },
        {
          text: cancelLabel,
        },
      ];

      return Alert.alert(title, message, buttons);
    }

    return onConnectPress();
  };

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
      <Button isLoading={connecting} disabled={connecting} label={connectButton} onPress={_onConnectPress} />
      {!isSamsung() ? null : <DownloadGoogleFitButton />}
    </>
  );
};

const DownloadGoogleFitButton = () => (
  <>
    <Pad height={10} />
    <SecondaryButton label={"Download Google Fit"} onPress={openGoogleFit} />
  </>
);

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
