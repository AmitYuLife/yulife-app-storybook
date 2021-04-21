import React from "react";
import { View, StyleSheet, ViewStyle } from "react-native";
import { TextTemplate, TertiaryButton } from "@atoms";
import { Style } from "@styles";
import { BUTTON_ICON } from "@atoms/button/tertiary-button/tertiary-button.helpers";
import { Navigation } from "react-native-navigation";
import { MODALS } from "@navigation/constants";
import ProductDetailsModal from "../product-details.modal";

interface Props {
  modalProps: React.ComponentProps<typeof ProductDetailsModal>;
}

export const Documents = ({ modalProps }: Props) =>
  !modalProps ? null : (
    <>
      <View style={styles.headingWrapper}>
        <TextTemplate type="h2">Documents</TextTemplate>
      </View>
      <View style={styles.buttonWrapper}>
        <TertiaryButton
          size="Fill"
          onPress={showCertificateModal(modalProps)}
          label="Policy Details"
          leftIcon={BUTTON_ICON.DOCUMENT}
          rightIcon={BUTTON_ICON.ARROW_RIGHT}
        />
      </View>
    </>
  );

const styles = StyleSheet.create({
  headingWrapper: {
    marginTop: Style.adjust(36),
  } as ViewStyle,
  buttonWrapper: {
    marginTop: Style.adjust(16),
  } as ViewStyle,
});

const showCertificateModal = (modalProps: Props["modalProps"]) => {
  return () =>
    Navigation.showModal({
      component: {
        id: MODALS.policyCertificate,
        name: MODALS.policyCertificate,
        passProps: modalProps,
      },
    });
};
