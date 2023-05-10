import React, { memo } from "react";
import { ContentItemWrapper as Props } from "@graphql/_core/schema";
import { View } from "react-native";
import { parseJSON } from "@utils";
import { renderItemContent } from "@components/screens/sdui/renderer";
import { mapServerStyles } from "../_utils/mapServerStyles";
import { mapPointerEvents } from "../_utils/mapPointerEvents";

export const ContentItemWrapper = memo(({ children, styles, pointerEvents }: Props) => {
  const { data, isValid } = parseJSON(children);

  if (!isValid) {
    return null;
  }

  return (
    <View pointerEvents={mapPointerEvents(pointerEvents)} style={mapServerStyles(styles)}>
      {!data?.length ? null : data.map(renderItemContent)}
    </View>
  );
});
