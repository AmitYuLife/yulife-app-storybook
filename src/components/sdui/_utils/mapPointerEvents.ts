import { RnViewPointerEvents } from "@graphql/__generated";
import { ComponentProps } from "react";
import { View } from "react-native";

type PointerEvents = ComponentProps<typeof View>["pointerEvents"];

export function mapPointerEvents(props: RnViewPointerEvents): PointerEvents {
  switch (props) {
    case RnViewPointerEvents.Auto:
      return "auto";
    case RnViewPointerEvents.BoxNone:
      return "box-none";
    case RnViewPointerEvents.BoxOnly:
      return "box-only";
    default:
      return "none";
  }
}
