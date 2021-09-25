import React, { ComponentProps, memo, useCallback, useMemo } from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import { useDispatch } from "react-redux";
import GenericHeading from "@atoms/generic-heading/generic-heading";
import {
  ContentItemHeaderBar as GqlHeaderBar,
  ContentItemHeaderBar_onLeftIconPress,
  ContentItemHeaderBar_onRightIconPress,
} from "@graphql/_core/schema";
import { Colours, TOP_BAR } from "@styles";
import { useBackHandler } from "@services/hooks/useBackHandler";

type Props = GqlHeaderBar;

export const ContentItemHeaderBar = memo((props: Props) => {
  const { leftIcon, logo, heading, onLeftIconPress, onRightIconPress, rightIcon } = props;
  const dispatch = useDispatch();

  const pressAction = useCallback(
    (action: ContentItemHeaderBar_onLeftIconPress | ContentItemHeaderBar_onRightIconPress) => {
      if (!action) {
        return null;
      }

      return () => dispatch(action);
    },
    [dispatch]
  );

  const onLeftIconPressAction = useMemo(() => pressAction(onLeftIconPress), [onLeftIconPress]);
  const onRightIconPressAction = useMemo(() => pressAction(onRightIconPress), [onRightIconPress]);

  const backHandler = useCallback(() => {
    if (onLeftIconPressAction) {
      onLeftIconPressAction();
    }

    return true;
  }, [onLeftIconPressAction]);

  useBackHandler(backHandler);

  return (
    <View style={styles.wrapper}>
      <GenericHeading
        leftIcon={leftIcon as ComponentProps<typeof GenericHeading>["leftIcon"]}
        rightIcon={rightIcon as ComponentProps<typeof GenericHeading>["rightIcon"]}
        logo={logo as ComponentProps<typeof GenericHeading>["logo"]}
        heading={heading}
        onLeftIconPress={onLeftIconPressAction}
        onRightIconPress={onRightIconPressAction}
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
