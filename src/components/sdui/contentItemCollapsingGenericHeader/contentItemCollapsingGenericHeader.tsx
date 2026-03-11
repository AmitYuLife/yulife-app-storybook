import React, { memo } from "react";
import {
  SharedValue,
  useAnimatedReaction,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { useDispatch } from "react-redux";
import { DETOX_ENABLED } from "@services/socket";
import { ContentItemCollapsingGenericHeaderFragment as Props } from "@graphql/__generated";
import { CloseSvg } from "@atoms";
import { GenericHeadingAbsolute } from "@organisms";
import { Colours } from "@styles";

type OwnProps = Props & {
  scrollValue: SharedValue<number>;
};

export const ContentItemCollapsingGenericHeader = memo((props: OwnProps) => {
  const dispatch = useDispatch();
  const headerOpacity = useSharedValue(0);

  useAnimatedReaction(
    () => props.scrollValue.value,
    (scrollY) => {
      if (DETOX_ENABLED) {
        headerOpacity.value = 0;
        return;
      }

      const target = scrollY > 0 ? 1 : 0;
      if (headerOpacity.value !== target) {
        headerOpacity.value = withTiming(target, { duration: 200 });
      }
    }
  );

  const scrolledHeaderAnimatedStyle = useAnimatedStyle(() => ({
    opacity: headerOpacity.value,
  }));

  return (
    <>
      <GenericHeadingAbsolute
        heading=""
        RightIcon={<CloseSvg stroke={Colours.neutral.white} />}
        onRightIconPress={() => dispatch(props.onPressRightIcon)}
        backgroundColor="transparent"
      />
      <GenericHeadingAbsolute
        heading={props.title}
        RightIcon={<CloseSvg />}
        onRightIconPress={() => dispatch(props.onPressRightIcon)}
        backgroundColor={Colours.neutral.white}
        hideBorder={false}
        scrollValue={props.scrollValue}
        hasShadow={true}
        animatedStyle={scrolledHeaderAnimatedStyle}
      />
    </>
  );
});
