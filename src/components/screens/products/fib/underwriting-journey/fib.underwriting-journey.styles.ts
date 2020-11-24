import { StyleSheet, ViewStyle } from "react-native";
import { Style } from "@styles";
import { UnderwritingJourneyChild } from "@components/containers/products/fib/data/underwriting-journey-data";

export const styles = StyleSheet.create({
  radioInputStyles: {
    marginTop: Style.adjust(48),
  } as ViewStyle,
});

export function getChildWrapperStyle(childType: UnderwritingJourneyChild["type"]) {
  switch (childType) {
    case "chiplist":
      return {};
    default:
      return { paddingHorizontal: Style.adjust(24) };
  }
}
