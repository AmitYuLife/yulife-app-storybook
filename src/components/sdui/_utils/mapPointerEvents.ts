import { RNViewPointerEvents } from "@graphql/_core/schema/globalTypes";
import { ComponentProps } from "react";
import { View } from "react-native";

type PointerEvents = ComponentProps<typeof View>["pointerEvents"];

export function mapPointerEvents(props: RNViewPointerEvents): PointerEvents {
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
