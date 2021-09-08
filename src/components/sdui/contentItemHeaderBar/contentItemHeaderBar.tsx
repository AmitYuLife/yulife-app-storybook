import React, { ComponentProps, memo } from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import { useDispatch } from "react-redux";
import GenericHeading from "@atoms/generic-heading/generic-heading";
import {
  ContentItemHeaderBar as GqlHeaderBar,
  ContentItemHeaderBar_onLeftIconPress,
  ContentItemHeaderBar_onRightIconPress,
} from "@graphql/_core/schema";
import { Colours, TOP_BAR } from "@styles";

type Props = GqlHeaderBar;

export const ContentItemHeaderBar = memo((props: Props) => {
  const { leftIcon, logo, onLeftIconPress, onRightIconPress, rightIcon } = props;
  const dispatch = useDispatch();

  const pressAction = (action: ContentItemHeaderBar_onLeftIconPress | ContentItemHeaderBar_onRightIconPress) => {
    if (!action) {
      return null;
    }

    return () => dispatch(action);
  };

  return (
    <View style={styles.wrapper}>
      <GenericHeading
        leftIcon={leftIcon as ComponentProps<typeof GenericHeading>["leftIcon"]}
        rightIcon={rightIcon as ComponentProps<typeof GenericHeading>["rightIcon"]}
        logo={logo as ComponentProps<typeof GenericHeading>["logo"]}
        onLeftIconPress={pressAction(onLeftIconPress)}
        onRightIconPress={pressAction(onRightIconPress)}
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
