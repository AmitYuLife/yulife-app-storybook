import React, { memo } from "react";
import { ContentItemPadFragment as GqlPad, RnViewPointerEvents } from "@graphql/__generated";
import { View } from "react-native";
import { mapServerStyles } from "..";
import { useDynamicServerStyles } from "../_hooks/useDynamicServerStyles";
import { mapPointerEvents } from "../_utils/mapPointerEvents";

type Props = GqlPad;

export const ContentItemPad = memo((props: Props) => {
  const { amount: height = 0, pointerEvents = RnViewPointerEvents.None, styles, dynamicStyles } = props;
  const { dynamicServerStyles } = useDynamicServerStyles(dynamicStyles);

  return (
    <View
      pointerEvents={mapPointerEvents(pointerEvents)}
      style={[{ height }, mapServerStyles(styles), dynamicServerStyles]}
    />
  );
});
