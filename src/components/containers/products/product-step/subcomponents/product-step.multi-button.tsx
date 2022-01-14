import React, { memo, useContext, useCallback } from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import { ContentItemMultiButton as GqlMultiButton, ContentItemButton as GqlButton } from "@graphql/_core/schema";
import { ContentItemButtonSize } from "@graphql/_core/schema/globalTypes";
import { Style } from "@styles";
import { ContentItemButton, mapServerStyles } from "@components/sdui";
import { ProductStepContext } from "../product-step.context";
import { useSelector } from "react-redux";
import { getSduiLoading, getSduiLoadingForKey } from "@redux/server-driven-ui/sdui.selectors";
import { RIGHT_PRODUCT_STEP_MULTI_BUTTON, LEFT_PRODUCT_STEP_MULTI_BUTTON } from "@ids";

type Props = GqlMultiButton;

export const ProductStepContentItemMultiButton = memo((props: Props) => {
  const { productId, stepId, dynamicData } = useContext(ProductStepContext);
  const disabled = useSelector(getSduiLoadingForKey("__disabled"));
  const loadingState = useSelector(getSduiLoading);

  // TODO: sort out typings
  const buildDynamicOnPress = useCallback(
    ({ onPress, value, id }: GqlButton) => ({
      type: onPress.type,
      payload: {
        productId,
        stepId,
        dynamicData: { ...dynamicData, [props.answerKey]: value },
        serverPayload: onPress.payload,
        id: `${stepId} - ${id}`,
      } as any,
    }),
    [productId, stepId, dynamicData, props.answerKey]
  );

  const serverStyles = mapServerStyles(props.styles);

  return (
    <View style={[styles.wrapper, serverStyles]}>
      {props.buttons.map((button, index) => (
        <View key={button.id} style={styles.buttonWrapper}>
          <ContentItemButton
            {...button}
            testID={getTestId(index)}
            onPress={buildDynamicOnPress(button)}
            buttonSize={ContentItemButtonSize.Fill}
            disabled={disabled}
            isLoading={loadingState[`${stepId} - ${button.id}` as keyof typeof loadingState]}
          />
        </View>
      ))}
    </View>
  );
});

function getTestId(index: number) {
  return !index ? LEFT_PRODUCT_STEP_MULTI_BUTTON : RIGHT_PRODUCT_STEP_MULTI_BUTTON;
}

const styles = StyleSheet.create({
  wrapper: { flexDirection: "row" } as ViewStyle,
  buttonWrapper: {
    flex: 1,
    paddingHorizontal: Style.adjust(8),
  } as ViewStyle,
});
