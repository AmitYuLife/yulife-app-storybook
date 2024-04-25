import React, { memo, useContext, useCallback } from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import {
  ContentItemMultiButtonFragment as GqlMultiButton,
  ContentItemButtonFragment as GqlButton,
  ContentItemButtonSize,
} from "@graphql/__generated";
import { Style } from "@styles";
import { ContentItemButton, mapServerStyles } from "@components/sdui";
import { ProductStepContext } from "../product-step.context";
import { useDispatch, useSelector } from "react-redux";
import { getSduiLoadingForKey } from "@redux/server-driven-ui/sdui.selectors";
import { RIGHT_PRODUCT_STEP_MULTI_BUTTON, LEFT_PRODUCT_STEP_MULTI_BUTTON } from "@ids";

type Props = GqlMultiButton;

export const ProductStepContentItemMultiButton = memo((props: Props) => {
  const dispatch = useDispatch();
  const { productId, stepId, dynamicData } = useContext(ProductStepContext);
  const disabled = useSelector(getSduiLoadingForKey("__disabled"));

  const buildDynamicOnPress = useCallback(
    ({ onPress, value, id }: GqlButton) =>
      () =>
        dispatch({
          type: onPress.type,
          payload: {
            productId,
            stepId,
            dynamicData: { ...dynamicData, [props.answerKey]: value },
            serverPayload: onPress.payload,
            id: `${stepId} - ${id}`,
          },
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
            isLoading={disabled}
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
