import React, { memo, useContext, useMemo } from "react";
import { Animated, StyleSheet, ViewStyle } from "react-native";
import { ContentItemCollapsingHeaderProductInfoType, CoverType, YuWorld } from "@graphql/_core/schema/globalTypes";
import { ContentItemCollapsingHeaderProductInfo as Props } from "@graphql/_core/schema";
import { Colours, Style } from "@styles";
import { ProductStepContext } from "../../product-step.context";
import { useSetDefaultAnswer } from "../../hooks/useSetDefaultAnswer";
import { LOCAL_ANSWER_KEY } from "../../utils/localAnswerKeys";
import { CollapsingHeaderDefault } from "./default";
import { CollapsingHeaderCoverOptions } from "./cover-options";

export const ProductStepCollapsingHeaderProductInfo = memo((props: Props) => {
  const { scrollValue, headerHeight, dynamicData, setDynamicData } = useContext(ProductStepContext);
  useSetDefaultAnswer({
    dynamicData,
    setDynamicData,
    answerKeyDefaultValue: CoverType.common,
    answerKey: LOCAL_ANSWER_KEY.CoverType,
  });
  useSetDefaultAnswer({
    dynamicData,
    setDynamicData,
    answerKeyDefaultValue: YuWorld.forest,
    answerKey: LOCAL_ANSWER_KEY.WorldId,
  });
  useSetDefaultAnswer({
    dynamicData,
    setDynamicData,
    answerKeyDefaultValue: props.coverList[0].minValue,
    answerKey: props.answerKey,
  });

  const safeHeaderHeight = headerHeight < 1 ? 1 : headerHeight;

  const translateY = useMemo(() => {
    return scrollValue.interpolate({
      inputRange: [0, safeHeaderHeight - 1, safeHeaderHeight],
      outputRange: [-Style.DEVICE_HEIGHT, -Style.DEVICE_HEIGHT, headerHeight],
      extrapolate: "clamp",
    });
  }, [scrollValue, headerHeight, safeHeaderHeight]);
  const wrapperStyle = useMemo(() => {
    return [styles.wrapper, { transform: [{ translateY }] }];
  }, [translateY]);

  const CollapsingHeader = useMemo(() => {
    if (props.type === ContentItemCollapsingHeaderProductInfoType.coverOptions) {
      return CollapsingHeaderCoverOptions;
    }

    return CollapsingHeaderDefault;
  }, [props.type]);

  return (
    <Animated.View style={wrapperStyle}>
      <CollapsingHeader {...props} />
    </Animated.View>
  );
});

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: Colours.neutral.white,
    paddingTop: Style.adjust(8),
    paddingLeft: Style.adjust(16),
    paddingBottom: Style.adjust(16),
    borderBottomWidth: 1,
    borderColor: Colours.neutral.n100,
  } as ViewStyle,
});
