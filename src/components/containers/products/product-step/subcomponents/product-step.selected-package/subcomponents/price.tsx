import { TextTemplate } from "@atoms";
import { Colours, Style } from "@styles";
import React, { memo } from "react";
import { StyleSheet, View, ViewStyle } from "react-native";

interface Props {
  price: string;
  priceDescription: string;
}

export const Price = memo(({ price, priceDescription }: Props) => {
  return (
    <View style={styles.pricing}>
      <TextTemplate color={Colours.neutral.white} type="b2b">
        {`${price} ${priceDescription}`}
      </TextTemplate>
    </View>
  );
});

const styles = StyleSheet.create({
  pricing: {
    alignItems: "center",
    flexDirection: "row",
    marginTop: Style.adjust(8),
  } as ViewStyle,
});
