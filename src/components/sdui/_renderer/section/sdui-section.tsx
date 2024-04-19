import React, { useMemo } from "react";
import { View } from "react-native";
import { mapServerStyles } from "@components/sdui";
import { renderItemContent } from "@components/sdui/_renderer/renderer";
import { GetSduiJourneyQuery, SduiStyle } from "@graphql/__generated";

interface ISduiSection {
  content?: {
    body?: GetSduiJourneyQuery["getSduiJourney"]["body"];
    containerStyles?: SduiStyle[];
  };
}

export const SduiSection = ({ content }: ISduiSection) => {
  const { body = [], containerStyles = [] } = content || {};
  const wrapperStyles = useMemo(() => mapServerStyles(containerStyles), [containerStyles]);

  if (!body) {
    return null;
  }

  return <View style={wrapperStyles}>{!body?.length ? null : body.map(renderItemContent)}</View>;
};
