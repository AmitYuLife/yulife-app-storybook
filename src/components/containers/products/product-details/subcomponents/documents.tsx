import React from "react";
import { View, StyleSheet, ViewStyle } from "react-native";
import { TextTemplate, Button } from "@atoms";
import { Style } from "@styles";
import { BUTTON_ICON } from "@atoms/button/tertiary-button/tertiary-button.helpers";
import { Navigation } from "react-native-navigation";
import { MODALS } from "@navigation/constants";

export const Documents = () => (
  <>
    <View style={styles.headingWrapper}>
      <TextTemplate type="h2">Documents</TextTemplate>
    </View>
    <View style={styles.buttonWrapper}>
      <Button
        type="Tertiary"
        size="Fill"
        onPress={showCertificateModal}
        label="Policy Details"
        height={Style.adjust(60)}
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

const showCertificateModal = () => {
  Navigation.showModal({
    component: {
      id: MODALS.yuProductDetails,
      name: MODALS.yuProductDetails,
    },
  });
};
