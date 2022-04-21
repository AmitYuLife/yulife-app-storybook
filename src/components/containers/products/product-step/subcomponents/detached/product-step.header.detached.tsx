import React, { ComponentProps, memo, useContext } from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import { useDispatch } from "react-redux";
import { GenericHeading } from "@organisms";
import { ContentItemHeaderBar as GqlHeaderBar } from "@graphql/_core/schema";
import { Colours } from "@styles";
import { useBackHandler } from "@services/hooks/useBackHandler";
import { ProductStepDetachedNavigationContext } from "../../product-step-detached-navigation.context";

type Props = GqlHeaderBar;

export const ProductStepContentItemHeaderDetached = memo((props: Props) => {
  const { leftIcon, logo, heading, onLeftIconPress, onRightIconPress, rightIcon } = props;
  const { nestedHistory, popNestedHistory } = useContext(ProductStepDetachedNavigationContext);

  const dispatch = useDispatch();

  useBackHandler(() => {
    dispatch(onRightIconPress);
    return true;
  });

  return (
    <View style={styles.wrapper}>
      <GenericHeading
        leftIcon={leftIcon as ComponentProps<typeof GenericHeading>["leftIcon"]}
        rightIcon={rightIcon as ComponentProps<typeof GenericHeading>["rightIcon"]}
        heading={heading}
        logo={logo as ComponentProps<typeof GenericHeading>["logo"]}
        onLeftIconPress={() => (nestedHistory.length === 0 ? dispatch(onLeftIconPress) : popNestedHistory())}
        onRightIconPress={() => dispatch(onRightIconPress)}
      />
    </View>
  );
});

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: Colours.neutral.white,
  } as ViewStyle,
});
