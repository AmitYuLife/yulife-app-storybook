import React, { memo, useCallback, useContext } from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import { ContentItemScrollPicker as GqlScrollPicker } from "@graphql/_core/schema";
import { Style } from "@styles";
import { TertiaryButton } from "@atoms";
import { ProductStepContext } from "../product-step.context";

type Props = GqlScrollPicker;

export const ProductStepContentItemScrollPicker = memo(
  ({ variants, answerKey, displayFormat, button, pickerCancelButtonLabel, pickerConfirmButtonLabel }: Props) => {
    const { dynamicData, setScrollPicker } = useContext(ProductStepContext);

    const handlePress = useCallback(() => {
      const index = variants.findIndex((v) => v.id === dynamicData[v.answerKey]);
      const activeVariantIndex = index > 0 ? index : 0;

      setScrollPicker({
        activeVariantIndex,
        variants,
        answerKey,
        displayFormat,
        pickerCancelButtonLabel,
        pickerConfirmButtonLabel,
      });
    }, [answerKey]);

    return (
      <View style={styles.wrapper}>
        <TertiaryButton
          rightIconUri={button.rightIcon.uri}
          iconUri={button.icon.uri}
          label={(dynamicData[answerKey] as string) || button.label}
          onPress={handlePress}
          height={Style.adjust(80)}
          size={button.buttonSize}
        />
      </View>
    );
  }
);

const styles = StyleSheet.create({
  wrapper: {
    margin: Style.adjust(24),
  } as ViewStyle,
});
