import React, { ComponentProps, memo } from "react";
import { ContentItemPad as GqlPad } from "@graphql/_core/schema";
import { View } from "react-native";
import { RNViewPointerEvents } from "@graphql/_core/schema/globalTypes";

type Props = GqlPad;
type PointerEvents = ComponentProps<typeof View>["pointerEvents"];

export const ContentItemPad = memo((props: Props) => {
  const { amount: height = 0, pointerEvents = RNViewPointerEvents.NONE } = props;

  return <View pointerEvents={mapGqlPointerEvents(pointerEvents)} style={{ height }} />;
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
