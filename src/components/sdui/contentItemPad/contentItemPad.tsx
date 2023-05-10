import React, { memo } from "react";
import { ContentItemPad as GqlPad } from "@graphql/_core/schema";
import { View } from "react-native";
import { RNViewPointerEvents } from "@graphql/_core/schema/globalTypes";
import { mapServerStyles } from "..";
import { useDynamicServerStyles } from "../_hooks/useDynamicServerStyles";
import { mapPointerEvents } from "../_utils/mapPointerEvents";

type Props = GqlPad;

export const ContentItemPad = memo((props: Props) => {
  const { amount: height = 0, pointerEvents = RNViewPointerEvents.NONE, styles, dynamicStyles } = props;
  const { dynamicServerStyles } = useDynamicServerStyles(dynamicStyles);

  return (
    <View
      pointerEvents={mapPointerEvents(pointerEvents)}
      style={[{ height }, mapServerStyles(styles), dynamicServerStyles]}
    />
  );
});
