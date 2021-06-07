import React from "react";
import { storiesOf } from "@storybook/react-native";
import { ScrollView } from "react-native";
import { YuCoinPowerMini } from "@atoms";

let voidFunc: () => null;

storiesOf("YuCoinPowerMini", module).add("default", () => {
  return (
    <ScrollView
      style={{ paddingHorizontal: 20 }}
      contentContainerStyle={{ justifyContent: "center", flex: 1, alignItems: "center" }}
    >
      <YuCoinPowerMini onPress={voidFunc} coinValue={60} />
    </ScrollView>
  );
});
