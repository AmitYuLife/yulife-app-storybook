import React, { memo, useCallback } from "react";
import { Alert, StyleSheet, View } from "react-native";
import { TextTemplate, Wrapper } from "@atoms";
import { Button, ChecklistInfoCard } from "@molecules";
import { GoogleFitIcon } from "@atoms/icon/google-fit-icon";
import { Colours, Style } from "@styles";
import GenericOverlay from "@components/modals/generic-overlay/generic-overlay";
import { MODALS } from "@navigation/constants";
import { Navigation } from "@navigation/main";
import { useBackHandler } from "@hooks";
import { androidAlertCopy } from "@components/screens/onboarding/fitkit-connect/copy";
import { openGoogleFit } from "@services/app-link";

const list = [
  {
    label: "Steps",
    checked: true,
  },
  {
    label: "Meditation",
    checked: true,
  },
  {
    label: "3rd party apps",
    checked: true,
  },
];

interface SwitchToGoogleFitModalProps {
  onConnect: () => boolean;
  onConnected: () => boolean;
}

const SwitchToGoogleFitModal = (props: SwitchToGoogleFitModalProps) => {
  const { onConnect, onConnected } = props;
  const onClose = useCallback(() => Navigation.dismissModal(MODALS.switchToGoogleFit), []);

  const onGoogleFitConnect = useCallback(async () => {
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
        onPress: async () => {
          // TODO: check why onConnect is returning undefined, call onConnected only if is authorised === true,
          // if false show a failed message?
          await onConnect();
          onConnected && onConnected();
          onClose();
        },
      },
    ];
    return Alert.alert(title, alertMessage, buttons, { cancelable: true });
  }, [onConnect, onClose, onConnected, openGoogleFit]);

  useBackHandler(() => {
    onClose();
    return true;
  });

  return (
    <GenericOverlay onClose={onClose}>
      <View style={styles.wrapper}>
        <Wrapper alignItems="center">
          <View style={styles.title}>
            <TextTemplate type="h1">Heads up!</TextTemplate>
          </View>
          <View style={styles.message}>
            <TextTemplate type="b2" textAlign="center">
              Samsung Health does not currently sync the data we need in order to reward you for your session. To sync
              mindful minutes & 3rd party apps, please switch to Google Fit.
            </TextTemplate>
          </View>

          <ChecklistInfoCard
            icon={<GoogleFitIcon />}
            title="Google Fit"
            description="Supports all activities for the full experience & rewards"
            isSelected={true}
            selectedStyle={styles.selectedStyle}
            list={list}
          />

          <Button
            label="Switch to Google Fit"
            onPress={onGoogleFitConnect}
            wrapperStyle={styles.connectButtonWrapper}
          />
        </Wrapper>
      </View>
    </GenericOverlay>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    alignItems: "center",
  },
  connectButtonWrapper: {
    marginTop: Style.isShortToMediumAndroid() ? Style.adjust(16) : Style.adjust(32),
  },
  title: {
    marginTop: Style.isShortToMediumAndroid() ? Style.adjust(24) : Style.adjust(32),
    marginBottom: Style.adjust(16),
  },
  message: {
    marginBottom: Style.adjust(16),
  },
  selectedStyle: {
    backgroundColor: Colours.neutral.white,
    borderColor: Colours.metallic.m100,
  },
});

export default memo(SwitchToGoogleFitModal);
