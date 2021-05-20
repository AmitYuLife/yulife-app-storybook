import React from "react";
import { storiesOf } from "@storybook/react-native";
import { ScrollView, View } from "react-native";
import { DoubleChest, PackageCardPerks, Shoe, Streak } from "@atoms";
import { CoverType } from "@graphql/_core/schema/globalTypes";

const perks = [
  {
    icon: <DoubleChest />,
    title: "Double Chest",
    description: "Increases the chance of unlocking a double chest in challenges.",
    locked: false,
    coverType: CoverType.common,
  },
  {
    icon: <Streak />,
    title: "Increased Streak Bounty",
    description: "Earn a larger YuCoin bounty for hitting streaks.",
    locked: true,
    coverType: CoverType.rare,
  },
  {
    icon: <Shoe />,
    title: "Increased Daily Step Limit",
    description: "Increases the number of daily steps for which you earn YuCoin.",
    locked: true,
    coverType: CoverType.epic,
  },
];

storiesOf("PackageCardPerks", module).add("default", () => {
  return (
    <ScrollView style={{ paddingHorizontal: 20 }} contentContainerStyle={{ justifyContent: "center", flex: 1 }}>
      {perks.map((perk, index) => (
        <View key={index} style={{ marginBottom: 8 }}>
          <PackageCardPerks perk={perk} />
        </View>
      ))}
    </ScrollView>
  );
});
