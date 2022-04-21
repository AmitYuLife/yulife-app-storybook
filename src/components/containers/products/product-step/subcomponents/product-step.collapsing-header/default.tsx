import React, { memo, useContext, useMemo } from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import { TextTemplate } from "@atoms";
import { PackageType } from "@molecules";
import { ContentItemCollapsingHeaderProductInfo as Props } from "@graphql/_core/schema";
import { LOCAL_ANSWER_KEY } from "../../utils";
import { CoverType, YuWorld } from "@graphql/_core/schema/globalTypes";
import { ProductStepContext } from "../../product-step.context";
import { SlotIcon } from "../../subcomponents/product-step.slot-icon";
import { Style, mapCoverTypeToColor } from "@styles";

export const CollapsingHeaderDefault = memo(({ coverList, answerKey }: Props) => {
  const { customerProductId, dynamicData } = useContext(ProductStepContext);

  const activeCover = useMemo(() => {
    const selectedCover = coverList.find((item) => item.percentCovered === dynamicData[answerKey]);

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
  }, [coverList, dynamicData[answerKey]]);

  const priceColour = mapCoverTypeToColor(dynamicData[LOCAL_ANSWER_KEY.CoverType] as CoverType);

  return (
    <>
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
    </>
  );
});

const styles = StyleSheet.create({
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
