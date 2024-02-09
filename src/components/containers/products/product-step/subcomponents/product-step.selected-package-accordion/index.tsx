import React, { memo, useContext, useMemo } from "react";
import { ContentItemSelectedPackageAccordionFragment, CoverType } from "@graphql/__generated";
import { ProductStepContext } from "../../product-step.context";
import { Accordion } from "@organisms";
import { LOCAL_ANSWER_KEY } from "../../utils/localAnswerKeys";
import { mapServerStyles } from "@components/sdui";

type CoverOptionsItems = ContentItemSelectedPackageAccordionFragment["coverOptions"][0]["items"];

export const ProductStepSelectedPackageAccordion = memo((props: ContentItemSelectedPackageAccordionFragment) => {
  const { styles, heading, headerIcon, infoIcon, coverOptions } = props;
  const { dynamicData } = useContext(ProductStepContext);

  const activeCover = dynamicData[LOCAL_ANSWER_KEY.CoverType];

  const keyDataByCover = useMemo(
    () =>
      coverOptions.reduce((acc, curr) => {
        return { ...acc, [curr.coverType]: { items: curr.items, subheading: curr.subheading } };
      }, {} as Record<CoverType, Record<string, string | CoverOptionsItems>>),
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
      items={activeItems.items as CoverOptionsItems}
    />
  );
});
