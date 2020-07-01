import React, { memo } from "react";
import { View } from "react-native";
import { Text } from "@atoms";

export const FibBrowseScreen = memo(function () {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>fib browse</Text>
    </View>
  );
});
