import React from "react";
import LinearGradient from "react-native-linear-gradient";
import { Colours, StyleSheet } from "@styles";

function _UnauthorisedGradient() {
  return (
    <LinearGradient
      colors={[Colours.neutral.white, "#ebf9fb"]}
      locations={[0.2, 0.8]}
      style={StyleSheet.absoluteFillObject}
    />
  );
}

export const UnauthorisedGradient = React.memo(_UnauthorisedGradient);
