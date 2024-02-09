import React, { memo, useContext, useMemo } from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import { ContentItemCollapsingHeaderProductInfoFragment as Props } from "@graphql/__generated";
import { Style } from "@styles";
import { mapCoverTypeToColorTheme } from "@styles";
import { ProductStepContext } from "../../../product-step.context";
import { CoverListItems } from "./cover-list-items";
import { CoverCost } from "./cover-cost";

export const CollapsingHeaderCoverOptions = memo(({ coverList, answerKey }: Props) => {
  const { dynamicData } = useContext(ProductStepContext);

  const activeCover = useMemo(() => {
    const selectedCover = coverList.find((item) => item.minValue === dynamicData[answerKey]);
    if (!selectedCover) {
      return {
        cost: "",
      };
    }

    const cost = `${selectedCover.monthlyCost}\n${selectedCover.monthlyCostSuffix}`;

    return {
      cost,
      coverType: selectedCover.coverType,
    };
  }, [coverList, dynamicData[answerKey]]);

  const colorTheme = useMemo(() => mapCoverTypeToColorTheme(activeCover.coverType), [activeCover.coverType]);

  return (
    <>
      <View style={styles.row}>
        <CoverListItems
          colorTheme={colorTheme}
          coverList={coverList}
          answerKey={answerKey}
          coverType={activeCover.coverType}
        />
        <CoverCost color={colorTheme.primary} cost={activeCover.cost} />
      </View>
    </>
  );
});

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    marginRight: Style.adjust(16),
  } as ViewStyle,
  marginLeft: {
    marginLeft: Style.adjust(8),
  } as ViewStyle,
  justifyCenter: {
    justifyContent: "center",
    marginLeft: Style.adjust(16),
  } as ViewStyle,
});
