import React, { memo } from "react";
import { Animated, View, ViewStyle } from "react-native";
import { useDispatch } from "react-redux";
import { DETOX_ENABLED } from "@services/socket";
import { ContentItemCollapsingGenericHeaderFragment as Props } from "@graphql/__generated";
import { CloseSvg } from "@atoms";
import { GenericHeadingAbsolute } from "@organisms";
import { Colours, StyleSheet } from "@styles";

type OwnProps = Props & {
  scrollValue: Animated.Value;
};

export const ContentItemCollapsingGenericHeader = memo((props: OwnProps) => {
  const dispatch = useDispatch();
  const scrolledHeaderTranslateY = DETOX_ENABLED
    ? -1000
    : props.scrollValue.interpolate({
        inputRange: [0, 0, 1],
        outputRange: [-1000, -1000, 0],
        extrapolate: "clamp",
      });

  return (
    <View style={styles.absoluteBase}>
      <Animated.View style={styles.absoluteBase}>
        <GenericHeadingAbsolute
          heading=""
          RightIcon={<CloseSvg stroke={Colours.neutral.white} />}
          onRightIconPress={() => dispatch(props.onPressRightIcon)}
          backgroundColor="transparent"
        />
      </Animated.View>
      <Animated.View style={[styles.absoluteBase, { transform: [{ translateY: scrolledHeaderTranslateY }] }]}>
        <GenericHeadingAbsolute
          heading={props.title}
          RightIcon={<CloseSvg />}
          onRightIconPress={() => dispatch(props.onPressRightIcon)}
          backgroundColor={Colours.neutral.white}
          hideBorder={false}
        />
      </Animated.View>
    </View>
  );
});

const styles = StyleSheet.create({
  absoluteBase: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
  } as ViewStyle,
});
