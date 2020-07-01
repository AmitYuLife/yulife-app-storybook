import React, { memo } from "react";
import { View } from "react-native";
import { GenericHeading } from "@atoms";
import { Style } from "@styles";

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
    </View>
  );
});
