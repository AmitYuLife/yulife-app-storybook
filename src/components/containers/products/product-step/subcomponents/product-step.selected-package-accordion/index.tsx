import React, { memo, useContext, useMemo } from "react";
import {
  ContentItemSelectedPackageAccordion,
  ContentItemSelectedPackageAccordion_coverOptions_items,
} from "@graphql/_core/schema";
import { ProductStepContext } from "../../product-step.context";
import { Accordion } from "@organisms";
import { LOCAL_ANSWER_KEY } from "../../utils/localAnswerKeys";
import { CoverType } from "@graphql/_core/schema/globalTypes";
import { mapServerStyles } from "@components/sdui";

export const ProductStepSelectedPackageAccordion = memo((props: ContentItemSelectedPackageAccordion) => {
  const { styles, heading, headerIcon, infoIcon, coverOptions } = props;
  const { dynamicData } = useContext(ProductStepContext);

  const activeCover = dynamicData[LOCAL_ANSWER_KEY.CoverType];

  const keyDataByCover = useMemo(
    () =>
      coverOptions.reduce((acc, curr) => {
        return { ...acc, [curr.coverType]: { items: curr.items, subheading: curr.subheading } };
      }, {} as Record<CoverType, Record<string, string | ContentItemSelectedPackageAccordion_coverOptions_items[]>>),
    [coverOptions]
  );

  const activeItems = keyDataByCover[activeCover as CoverType] || {};

  const headerIconUri = useMemo(() => {
    return { uri: headerIcon.uri };
  }, [headerIcon.uri]);

  const infoIconUri = useMemo(() => {
    return { uri: infoIcon.uri };
  }, [infoIcon.uri]);

  return (
    <Accordion
      style={mapServerStyles(styles)}
      header={heading}
      subheading={activeItems.subheading as string}
      headerIcon={headerIconUri}
      infoIcon={infoIconUri}
      items={activeItems.items as ContentItemSelectedPackageAccordion_coverOptions_items[]}
    />
  );
});
