import React, { ComponentProps, memo } from "react";
import { ContentItemPad as GqlPad } from "@graphql/_core/schema";
import { View } from "react-native";
import { RNViewPointerEvents } from "@graphql/_core/schema/globalTypes";
import { mapServerStyles } from "..";
import { useDynamicServerStyles } from "../_hooks/useDynamicServerStyles";

type Props = GqlPad;
type PointerEvents = ComponentProps<typeof View>["pointerEvents"];

export const ContentItemPad = memo((props: Props) => {
  const { amount: height = 0, pointerEvents = RNViewPointerEvents.NONE, styles, dynamicStyles } = props;
  const { dynamicServerStyles } = useDynamicServerStyles(dynamicStyles);

  return (
    <View
      pointerEvents={mapGqlPointerEvents(pointerEvents)}
      style={[{ height }, mapServerStyles(styles), dynamicServerStyles]}
    />
  );
});

function mapGqlPointerEvents(props: Props["pointerEvents"]): PointerEvents {
  switch (props) {
    case RNViewPointerEvents.AUTO:
      return "auto";
    case RNViewPointerEvents.BOX_NONE:
      return "box-none";
    case RNViewPointerEvents.BOX_ONLY:
      return "box-only";
    default:
      return "none";
  }
}
