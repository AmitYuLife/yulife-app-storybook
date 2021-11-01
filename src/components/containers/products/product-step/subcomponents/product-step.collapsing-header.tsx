import React, { memo, useContext, useMemo } from "react";
import { Animated, StyleSheet, View, ViewStyle } from "react-native";
import { ProductStepContext } from "../product-step.context";
import { useSetDefaultAnswer } from "../hooks/useSetDefaultAnswer";
import { CoverType, YuWorld } from "@graphql/_core/schema/globalTypes";
import { ContentItemCollapsingHeaderProductInfo as Props } from "@graphql/_core/schema";
import { SlotIcon } from "../subcomponents/product-step.slot-icon";
import { PackageType, TextTemplate } from "@atoms";
import { Colours, Style } from "@styles";
import { mapCoverTypeToColor } from "../utils/mapCoverTypeToColor";
import { LOCAL_ANSWER_KEY } from "../utils/localAnswerKeys";

export const ProductStepCollapsingHeaderProductInfo = memo((props: Props) => {
  const { customerProductId, scrollValue, headerHeight, dynamicData, setDynamicData } = useContext(ProductStepContext);
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

  const safeHeaderHeight = headerHeight < 1 ? 1 : headerHeight;

  const translateY = useMemo(() => {
    return scrollValue.interpolate({
      inputRange: [0, safeHeaderHeight - 1, safeHeaderHeight],
      outputRange: [-Style.DEVICE_HEIGHT, -Style.DEVICE_HEIGHT, headerHeight],
      extrapolate: "clamp",
    });
  }, [scrollValue, headerHeight, safeHeaderHeight]);

  const activeCover = useMemo(() => {
    const selectedCover = props.coverList.find((item) => item.percentCovered === dynamicData[props.answerKey]);

    if (!selectedCover) {
      return {
        backgroundUrl: "",
        heading: "",
        cost: "",
      };
    }

    const backgroundUrl = selectedCover.slotBackgroundUrl.uri;
    const heading = selectedCover.collapsingHeaderProductInfoHeading;
    const cost = `${selectedCover.monthlyCost} ${selectedCover.monthlyCostSuffix}`;

    return {
      backgroundUrl,
      heading,
      cost,
    };
  }, [props.coverList, dynamicData[props.answerKey]]);

  const priceColour = mapCoverTypeToColor(dynamicData[LOCAL_ANSWER_KEY.CoverType] as CoverType);

  return (
    <Animated.View style={[styles.wrapper, { transform: [{ translateY }] }]}>
      <View>
        <SlotIcon
          backgroundUrl={activeCover.backgroundUrl}
          worldId={dynamicData[LOCAL_ANSWER_KEY.WorldId] as YuWorld}
          coverType={dynamicData[LOCAL_ANSWER_KEY.CoverType] as CoverType}
          customerProductId={customerProductId}
        />
      </View>
      <View style={styles.justifyCenter}>
        <TextTemplate color={priceColour} type="b2">
          {activeCover.heading}
        </TextTemplate>
        <View style={styles.row}>
          <PackageType type={dynamicData[LOCAL_ANSWER_KEY.CoverType] as CoverType} />
          <View style={styles.marginLeft}>
            <TextTemplate color={priceColour} type="l2b">
              {activeCover.cost}
            </TextTemplate>
          </View>
        </View>
      </View>
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
  row: {
    flexDirection: "row",
    alignItems: "center",
  } as ViewStyle,
  marginLeft: {
    marginLeft: Style.adjust(8),
  } as ViewStyle,
  justifyCenter: {
    justifyContent: "center",
    marginLeft: Style.adjust(16),
  } as ViewStyle,
});
