import React, { memo, useContext, useCallback } from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import { ContentItemMultiButton as GqlMultiButton, ContentItemButton as GqlButton } from "@graphql/_core/schema";
import { ContentItemButtonSize } from "@graphql/_core/schema/globalTypes";
import { Style } from "@styles";
import { ContentItemButton, mapServerStyles } from "@components/sdui";
import { ProductStepContext } from "../product-step.context";

type Props = GqlMultiButton;

export const ProductStepContentItemMultiButton = memo((props: Props) => {
  const { productId, stepId, dynamicData } = useContext(ProductStepContext);

  // TODO: sort out typings
  const buildDynamicOnPress = useCallback(
    ({ onPress, value }: GqlButton) => ({
      type: onPress.type,
      payload: {
        productId,
        stepId,
        dynamicData: { ...dynamicData, [props.answerKey]: value },
        serverPayload: onPress.payload,
      } as any,
    }),
    [productId, stepId, dynamicData, props.answerKey]
  );

  const serverStyles = mapServerStyles(props.styles);

  return (
    <View style={[styles.wrapper, serverStyles]}>
      {props.buttons.map((button) => (
        <View key={button.id} style={styles.buttonWrapper}>
          <ContentItemButton
            {...button}
            onPress={buildDynamicOnPress(button)}
            buttonSize={ContentItemButtonSize.Fill}
          />
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
