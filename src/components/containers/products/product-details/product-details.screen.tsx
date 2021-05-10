import React, { memo } from "react";
import { View, StyleSheet, ViewStyle, ScrollView, Platform } from "react-native";
import { Navigation } from "react-native-navigation";
import GenericHeadingAbsolute, { GenericHeadingPad } from "@atoms/generic-heading/generic-heading-absolute";
import { GroupProductDisclaimer } from "@molecules";
import { useBackHandler } from "@services/hooks/useBackHandler";
import { ROUTES } from "@navigation/constants";
import { CoverType } from "@graphql/_core/schema/globalTypes";
import { Style } from "@styles";
import { Documents } from "./subcomponents/documents";
import { Card } from "./subcomponents/card";
import { Stamp } from "./subcomponents/stamp";
import media from "@styles/media";
import ProductDetailsModal from "./product-details.modal";
import { Beneficiaries } from "./subcomponents/beneficiaries";

type ProductDetailsModalProps = React.ComponentProps<typeof ProductDetailsModal>;

interface Props {
  coverType: CoverType;
  productName: string;
  productIconUri: string;
  benefitValue: string;
  benefitDescription: string;
  benefitDescriptionLong: string;
  yuCoinValue: string;
  yuCoinDescription: string;
  lastUpdated: string;
  modalProps?: ProductDetailsModalProps;
  productId: string;
  disclaimer?: string;
}

export const ProductDetailsScreen = memo((props: Props) => {
  const { modalProps, lastUpdated, productId, disclaimer } = props;
  const handleClose = () => {
    Navigation.pop(ROUTES.productDetails);
    return true;
  };

  useBackHandler(handleClose);

  return (
    <View style={styles.wrapper}>
      <GenericHeadingPad />
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scroll}>
        <View style={styles.topPadding} />
        <Card {...props} />
        <Documents modalProps={modalProps} />
        <Beneficiaries productId={productId} />
        <Stamp value={lastUpdated} />
        {!disclaimer ? null : <GroupProductDisclaimer text={disclaimer} containerStyle={styles.disclaimer} />}
        <View style={styles.bottomPadding} />
      </ScrollView>
      <GenericHeadingAbsolute logo="yulife" onLeftIconPress={handleClose} />
    </View>
  );
});

const BOTTOM_PADDING = media.select(
  [
    {
      condition: Platform.OS === "ios" && Style.hasNotch,
      value: Style.adjust(140),
    },
  ],
  Style.adjust(40)
);

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  } as ViewStyle,
  topPadding: {
    height: Style.adjust(24),
  } as ViewStyle,
  scroll: {
    paddingHorizontal: Style.adjust(24),
  },
  bottomPadding: {
    height: BOTTOM_PADDING,
  },
  disclaimer: {
    marginTop: Style.adjust(16),
  },
});
