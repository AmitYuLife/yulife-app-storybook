import React, { memo, useContext, useMemo } from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import { ContentItemPersonalProductReviewItem as GqlReviewItem } from "@graphql/_core/schema";
import { TouchableOpacityWithDelay } from "@components/molecules";
import { Style } from "@styles";
import { Image, TextTemplate } from "@atoms";
import { ProductStepContext } from "../product-step.context";
import { useDispatch } from "react-redux";

type Props = GqlReviewItem;

export const ProductStepContentItemReviewAnswer = memo(
  ({ onPress, leftIcon, text, rightIcon, subheading, answerKey }: Props) => {
    const { productId, stepId, dynamicData } = useContext(ProductStepContext);

    const dispatch = useDispatch();

    // TODO: sort out typings
    const dynamicOnPress: any = useMemo(
      () => ({
        type: onPress.type,
        payload: {
          productId,
          stepId,
          dynamicData: { ...dynamicData, [answerKey]: onPress.payload },
          serverPayload: onPress.payload,
        },
      }),
      [onPress, productId, stepId, dynamicData, answerKey]
    );

    return (
      <TouchableOpacityWithDelay style={styles.wrapper} onPress={() => dispatch(dynamicOnPress)}>
        <View style={styles.detailsWrapper}>
          <View style={styles.leftIconWrapper}>
            <Image height={Style.adjust(24)} width={Style.adjust(24)} source={{ uri: leftIcon.uri }} />
          </View>
          <View style={styles.textWrapper}>
            <TextTemplate type="b2b">{text}</TextTemplate>
            <TextTemplate type="b2">{subheading}</TextTemplate>
          </View>
        </View>
        <View style={styles.imageWrapper}>
          <Image height={24} width={24} source={{ uri: rightIcon.uri }} />
        </View>
      </TouchableOpacityWithDelay>
    );
  }
);

const styles = StyleSheet.create({
  wrapper: {
    paddingLeft: Style.adjust(24),
    paddingVertical: Style.adjust(16),
    minHeight: Style.adjust(80),
    flexDirection: "row",
    borderColor: "#F3F3F3",
    borderBottomWidth: 1,
    alignItems: "center",
  } as ViewStyle,
  detailsWrapper: {
    flex: 1,
    flexDirection: "row",
  } as ViewStyle,
  textWrapper: {
    flex: 1,
    paddingLeft: Style.adjust(8),
  } as ViewStyle,
  leftIconWrapper: {
    marginRight: Style.adjust(8),
  } as ViewStyle,
  imageWrapper: {
    marginLeft: "auto",
    marginRight: Style.adjust(7),
  } as ViewStyle,
});
