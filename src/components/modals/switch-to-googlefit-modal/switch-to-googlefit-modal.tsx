import React, { memo, useCallback } from "react";
import { Alert, View } from "react-native";
import { TextTemplate, Wrapper } from "@atoms";
import { Button, ChecklistInfoCard } from "@molecules";
import { GoogleFitIcon } from "@atoms/icon/google-fit-icon";
import { Colours, Style, StyleSheet } from "@styles";
import GenericOverlay from "@components/modals/generic-overlay/generic-overlay";
import { MODALS } from "@navigation/constants";
import { Navigation } from "@navigation/main";
import { useBackHandler } from "@hooks";
import { getFitKitConnectCopy } from "@components/screens/onboarding/fitkit-connect/copy";
import { openGoogleFit } from "@services/app-link";
import { t } from "@locale";

interface SwitchToGoogleFitModalProps {
  onConnect: () => boolean;
  onConnected: () => boolean;
  onClose?: () => void;
}

const SwitchToGoogleFitModal = (props: SwitchToGoogleFitModalProps) => {
  const { onConnect, onClose, onConnected } = props;
  const { androidAlertCopy } = getFitKitConnectCopy();

  const onModalClose = useCallback(
    (hasSwitched?: boolean) => {
      if (!hasSwitched) {
        onClose?.();
      }

      return Navigation.dismissModal(MODALS.switchToGoogleFit);
    },
    [onClose]
  );

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
          onConnected?.();
          onModalClose(true);
        },
      },
    ];
    return Alert.alert(title, alertMessage, buttons, { cancelable: true });
  }, [androidAlertCopy, onConnect, onConnected, onModalClose]);

  useBackHandler(() => {
    onModalClose();
    return true;
  });

  return (
    <GenericOverlay onClose={onModalClose}>
      <View style={styles.wrapper}>
        <Wrapper alignItems="center">
          <View style={styles.title}>
            <TextTemplate type="h1">{t("modals.switch_to_google_fit.heading")}</TextTemplate>
          </View>
          <View style={styles.message}>
            <TextTemplate type="b2" textAlign="center">
              {t("modals.switch_to_google_fit.subheading")}
            </TextTemplate>
          </View>

          <ChecklistInfoCard
            icon={<GoogleFitIcon />}
            title={t("modals.switch_to_google_fit.checklist_info_card.title")}
            description={t("modals.switch_to_google_fit.checklist_info_card.description")}
            isSelected={true}
            selectedStyle={styles.selectedStyle}
            list={[
              {
                label: t("modals.switch_to_google_fit.checklist_info_card.list.label_1"),
                checked: true,
              },
              {
                label: t("modals.switch_to_google_fit.checklist_info_card.list.label_2"),
                checked: true,
              },
              {
                label: t("modals.switch_to_google_fit.checklist_info_card.list.label_3"),
                checked: true,
              },
            ]}
          />

          <Button
            translationKey="modals.switch_to_google_fit.button_label"
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
