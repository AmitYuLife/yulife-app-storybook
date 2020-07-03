import React, { memo } from "react";
import { View } from "react-native";
import { GenericHeading } from "@atoms";
import { Style, Colours } from "@styles";
import FIBHowItWorks from "./how-it-works/how-it-works";

interface IFibBrowseScreenProps {
  onNavigateBack: () => void;
}

export const FibBrowseScreen = memo(function (props: IFibBrowseScreenProps) {
  const { onNavigateBack } = props;
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <View style={{ position: "absolute", top: Style.getSafeAreaStart(), left: 0, right: 0 }}>
        <GenericHeading heading="browse packages" onLeftIconPress={onNavigateBack} />
      </View>
      <FIBHowItWorks
        coverTypeColor={Colours.products.fib.common}
        coverType={"common"}
        paragraphs={"In the event of death, your loved ones will receive 25% of your future earnings from the date of death until age 70 (based on your current salary)./nThis means if you pass away near the beginning of the insurance term, your loved ones will receive more money than if you pass away near the end./nThis is paid as a single payment.".split(
          "/n"
        )}
      />
    </View>
  );
});
