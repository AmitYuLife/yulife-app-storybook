import React, { memo } from "react";
import { View } from "react-native";
import { Text } from "@atoms";

export const FibFaqScreen = memo(function () {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>fib faq</Text>
    </View>
  );
});
