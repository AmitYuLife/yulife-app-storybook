import React, { memo } from "react";
import { View } from "react-native";
import { GenericHeading } from "@atoms";
import { Style } from "@styles";

interface IFibFaqScreenProps {
  onNavigateBack: () => void;
}

export const FibFaqScreen = memo(function (props: IFibFaqScreenProps) {
  const { onNavigateBack } = props;
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <View style={{ position: "absolute", top: Style.getSafeAreaStart(), left: 0, right: 0 }}>
        <GenericHeading heading="faq" onLeftIconPress={onNavigateBack} />
      </View>
    </View>
  );
});
