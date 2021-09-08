import React, { ComponentProps, memo, useContext } from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import { useDispatch } from "react-redux";
import GenericHeading from "@atoms/generic-heading/generic-heading";
import { ContentItemHeaderBar as GqlHeaderBar } from "@graphql/_core/schema";
import { Colours, TOP_BAR } from "@styles";
import { ProductStepFaqsContext } from "../../product-step.faqs.context";

type Props = GqlHeaderBar;

export const ProductStepContentItemHeaderDetached = memo((props: Props) => {
  const { leftIcon, logo, onLeftIconPress, onRightIconPress, rightIcon } = props;
  const { nestedHistory, popNestedHistory } = useContext(ProductStepFaqsContext);

  const dispatch = useDispatch();

  return (
    <View style={styles.wrapper}>
      <GenericHeading
        leftIcon={leftIcon as ComponentProps<typeof GenericHeading>["leftIcon"]}
        rightIcon={rightIcon as ComponentProps<typeof GenericHeading>["rightIcon"]}
        logo={logo as ComponentProps<typeof GenericHeading>["logo"]}
        onLeftIconPress={() => (nestedHistory.length === 0 ? dispatch(onLeftIconPress) : popNestedHistory())}
        onRightIconPress={() => dispatch(onRightIconPress)}
      />
    </View>
  );
});

const styles = StyleSheet.create({
  wrapper: {
    paddingTop: TOP_BAR.PADDING_TOP,
    backgroundColor: Colours.neutral.white,
  } as ViewStyle,
});
