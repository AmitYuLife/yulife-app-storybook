import React, { memo, useContext, useMemo } from "react";
import { Animated, StyleSheet, ViewStyle } from "react-native";
import { YuWorld } from "@graphql/_core/schema/globalTypes";
import {
  ContentItemCollapsingHeaderProductInfoType,
  CoverType,
  ContentItemCollapsingHeaderProductInfoFragment as Props,
} from "@graphql/__generated";
import { Colours, Style } from "@styles";
import { ProductStepContext } from "../../product-step.context";
import { useSetDefaultAnswer } from "../../hooks/useSetDefaultAnswer";
import { LOCAL_ANSWER_KEY } from "../../utils/localAnswerKeys";
import { CollapsingHeaderDefault } from "./default";
import { CollapsingHeaderCoverOptions } from "./cover-options";

export const ProductStepCollapsingHeaderProductInfo = memo((props: Props) => {
  const { scrollValue, headerHeight, stepId, dynamicData, setDynamicData, componentsLayout } =
    useContext(ProductStepContext);
  const { answerKey, coverList, expandOnComponentId, type } = props;

  useSetDefaultAnswer({
    dynamicData,
    setDynamicData,
    answerKeyDefaultValue: CoverType.Common,
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
    answerKeyDefaultValue: coverList[0].minValue,
    answerKey: answerKey,
  });

  const safeHeaderHeight = headerHeight < 1 ? 1 : headerHeight;
  const expandThreshold = useMemo(() => {
    const stepComponents = componentsLayout[stepId];

    if (!expandOnComponentId || !stepComponents?.[expandOnComponentId]) {
      return safeHeaderHeight;
    }

    const expandOnComponent = stepComponents[expandOnComponentId];

    return expandOnComponent.height / 2 + expandOnComponent.y - safeHeaderHeight;
  }, [stepId, safeHeaderHeight, componentsLayout]);

  const translateY = useMemo(() => {
    return scrollValue.interpolate({
      inputRange: [0, expandThreshold - 1, expandThreshold],
      outputRange: [-Style.DEVICE_HEIGHT, -Style.DEVICE_HEIGHT, headerHeight],
      extrapolate: "clamp",
    });
  }, [scrollValue, headerHeight, expandThreshold]);
  const wrapperStyle = useMemo(() => {
    return [styles.wrapper, { transform: [{ translateY }] }];
  }, [translateY]);

  const CollapsingHeader = useMemo(() => {
    if (type === ContentItemCollapsingHeaderProductInfoType.CoverOptions) {
      return CollapsingHeaderCoverOptions;
    }

    return CollapsingHeaderDefault;
  }, [type]);

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
