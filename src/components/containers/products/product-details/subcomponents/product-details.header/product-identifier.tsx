import React, { memo } from "react";
import { TextTemplate } from "@atoms";
import { Colours, Style } from "@styles";
import { StyleSheet, View, ViewStyle } from "react-native";
import { GetYuScreenProductDetails_getYuScreenProductDetails_body_ContentItemProductDetailsHeader_productIdentifier as IProductIdentifier } from "@graphql/_core/schema";

interface Props {
  productIdentifier?: IProductIdentifier;
}

export const ProductIdentifier = memo(({ productIdentifier }: Props) => {
  if (!productIdentifier) {
    return null;
  }

  return (
    <View style={styles.wrapper}>
      <TextTemplate color={Colours.neutral.white} type="l2b">
        {`${productIdentifier.label} `}
      </TextTemplate>
      <TextTemplate color={Colours.neutral.white} type="l2">
        {productIdentifier.value}
      </TextTemplate>
    </View>
  );
});

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    marginTop: Style.adjust(16),
  } as ViewStyle,
});
