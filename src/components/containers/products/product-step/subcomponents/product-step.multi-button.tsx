import React, { memo } from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import { ContentItemMultiButton as GqlButton } from "@graphql/_core/schema/ContentItemMultiButton";
import { ProductStepContentItemButton } from "./product-step.button";
import { ContentItemButtonSize } from "@graphql/_core/schema/globalTypes";
import { Style } from "@styles";

type Props = GqlButton;

export const ProductStepContentItemMultiButton = memo((props: Props) => {
  return (
    <View style={styles.wrapper}>
      {props.buttons.map((button) => (
        <View key={button.id} style={styles.buttonWrapper}>
          <ProductStepContentItemButton onPress={button.onPress} {...button} buttonSize={ContentItemButtonSize.Fill} />
        </View>
      ))}
    </View>
  );
});

const styles = StyleSheet.create({
  wrapper: { flexDirection: "row" } as ViewStyle,
  buttonWrapper: {
    flex: 1,
    paddingHorizontal: Style.adjust(8),
  } as ViewStyle,
});
