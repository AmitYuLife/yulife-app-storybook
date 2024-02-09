import React, { memo, useMemo } from "react";
import { Accordion } from "@organisms";
import { mapServerStyles } from "@components/sdui";
import { ContentItemAccordionFragment as Props } from "@graphql/__generated";

export const ContentItemAccordion = memo(({ styles, heading, headerIcon, infoIcon, items, subheading }: Props) => {
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
      subheading={subheading}
      headerIcon={headerIconUri}
      infoIcon={infoIconUri}
      items={items}
    />
  );
});
