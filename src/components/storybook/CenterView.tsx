import React from "react";
import { View } from "react-native";

export function withCenterView(getStory: () => React.ReactNode) {
  return <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>{getStory()}</View>;
}
