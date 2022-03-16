import React, { memo, useContext, useMemo } from "react";
import { ContentItemCollapsingHeaderAgePercentProductInfo as Props } from "@graphql/_core/schema";
import { ProductStepContext } from "../../product-step.context";
import { ContentItemCollapsingHeaderAgePercentProductInfo } from "@components/sdui";
import { CoverType, YuWorld } from "@graphql/_core/schema/globalTypes";
import { SlotIcon } from "../product-step.slot-icon";

export const ProductStepCollapsingHeaderAgePercentProductInfo = memo((props: Props) => {
  const { scrollValue, headerHeight, stepId, componentsLayout, dynamicData, customerProductId } = useContext(
    ProductStepContext
  );
  const { expandOnComponentId, collapsingHeaderAgePercentProductInfoData, expandThreshold: gqlExpandThreshold } = props;
  const { answerKeys } = collapsingHeaderAgePercentProductInfoData;

  const activeAgeToEnd = (dynamicData[answerKeys.ageToEnd] ||
    collapsingHeaderAgePercentProductInfoData.defaultActiveAgeToEnd) as number;

  const activeCoverType = (dynamicData[answerKeys.coverType] ||
    collapsingHeaderAgePercentProductInfoData.defaultActiveCoverType) as CoverType;

  const activeSalaryPercent = (dynamicData[answerKeys.salaryPercent] ||
    collapsingHeaderAgePercentProductInfoData.defaultActiveSalaryPercent) as number;

  const activeWorldId = (dynamicData[answerKeys.worldId] ||
    collapsingHeaderAgePercentProductInfoData.defaultActiveWorldId) as YuWorld;

  const safeHeaderHeight = headerHeight < 1 ? 1 : headerHeight;
  const expandThreshold = useMemo(() => {
    if (typeof gqlExpandThreshold === "number" && !isNaN(gqlExpandThreshold)) {
      return gqlExpandThreshold;
    }

    const stepComponents = componentsLayout[stepId];

    if (!expandOnComponentId || !stepComponents?.[expandOnComponentId]) {
      return safeHeaderHeight;
    }

    const expandOnComponent = stepComponents[expandOnComponentId];

    return expandOnComponent.height / 2 + expandOnComponent.y - safeHeaderHeight;
  }, [stepId, safeHeaderHeight, componentsLayout]);

  return (
    <ContentItemCollapsingHeaderAgePercentProductInfo
      {...props}
      expandThreshold={expandThreshold}
      expandOffset={safeHeaderHeight}
      scrollValue={scrollValue}
      activeAgeToEnd={activeAgeToEnd}
      activeCoverType={activeCoverType}
      activeSalaryPercent={activeSalaryPercent}
      activeWorldId={activeWorldId}
      SlotIcon={
        <SlotIcon
          backgroundUrl=""
          worldId={activeWorldId}
          coverType={activeCoverType}
          customerProductId={customerProductId}
        />
      }
    />
  );
});
