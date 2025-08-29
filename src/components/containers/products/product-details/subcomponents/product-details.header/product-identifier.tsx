import React, { memo } from "react";
import { TextTemplate } from "@atoms";
import { Colours, Style, StyleSheet } from "@styles";
import { View, ViewStyle } from "react-native";

type IProductIdentifier = { label: string; value: string };

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
