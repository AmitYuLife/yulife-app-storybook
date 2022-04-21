import React, { ComponentProps, memo, useCallback, useMemo } from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import { useDispatch } from "react-redux";
import { GenericHeading } from "@organisms";
import { Colours, TOP_BAR } from "@styles";
import { useBackHandler } from "@services/hooks/useBackHandler";
import { ProductStepAction } from "@redux/server-driven-ui/sdui.types";

interface Props {
  leftIcon: ComponentProps<typeof GenericHeading>["leftIcon"];
  rightIcon: ComponentProps<typeof GenericHeading>["rightIcon"];
  logo: ComponentProps<typeof GenericHeading>["logo"];
  heading: ComponentProps<typeof GenericHeading>["heading"];
  onLeftIconPress: ProductStepAction;
  onRightIconPress: ProductStepAction;
}

export const ContentItemHeaderBar = memo((props: Props) => {
  const { leftIcon, logo, heading, onLeftIconPress, onRightIconPress, rightIcon } = props;
  const dispatch = useDispatch();

  const pressAction = useCallback(
    (action: ProductStepAction) => {
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
        leftIcon={leftIcon}
        rightIcon={rightIcon}
        logo={logo}
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
