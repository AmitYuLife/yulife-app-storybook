import React, { ComponentProps } from "react";
import { View, ViewStyle, ScrollView } from "react-native";
import { Style, StyleSheet } from "@styles";
import { Navigation } from "@navigation/main";
import { MODALS } from "@navigation/constants";
import { GroupProductDisclaimer } from "@molecules";
import GenericOverlay from "@components/modals/generic-overlay/generic-overlay";
import { useBackHandler } from "@hooks";
import { Certificate } from "@organisms";
import { initialWindowMetrics } from "react-native-safe-area-context";

interface ProductDetailsModalProps extends ComponentProps<typeof Certificate> {
  disclaimer?: string;
}

const ProductDetailsModal = (props: ProductDetailsModalProps) => {
  const { disclaimer = null, ...certificateProps } = props;

  useBackHandler(dismissOverlay);

  return (
    <GenericOverlay onClose={dismissOverlay}>
      <ScrollView style={styles.wrapper} contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>
        <Certificate {...certificateProps} />
        {!disclaimer ? null : <GroupProductDisclaimer text={disclaimer} containerStyle={styles.disclaimer} />}
        <View style={styles.bottomPad} />
      </ScrollView>
    </GenericOverlay>
  );
};

const BOTTOM_PADDING = Style.adjust(100) + (initialWindowMetrics?.insets?.bottom ?? 0);

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    paddingTop: Style.adjust(16),
  } as ViewStyle,
  scroll: {
    paddingHorizontal: Style.adjust(16),
  } as ViewStyle,
  bottomPad: {
    height: BOTTOM_PADDING,
  } as ViewStyle,
  disclaimer: {
    marginTop: Style.adjust(16),
  } as ViewStyle,
});

export default ProductDetailsModal;

function dismissOverlay() {
  Navigation.pop(MODALS.policyCertificate);
  return true;
}
