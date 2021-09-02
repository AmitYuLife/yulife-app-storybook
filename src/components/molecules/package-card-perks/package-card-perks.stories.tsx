import React from "react";
import { View } from "react-native";
import { storiesOf } from "@storybook/react-native";
import { PackageCardPerks } from "./package-card-perks";

const DEFAULT_DATA = {
  rightIcon: {
    id: "content/icons/slot-badge-locked.svg",
    uri:
      "https://yulife-local.imgix.net/content/icons/slot-badge-locked.svg?ixlib=js-3.2.1&fit=clip&fm=png&s=d96f2e0f32c38ff31a3f1b144cbdd6d7",
  },
  title: "Increased Daily Step Limit",
  leftIcon: {
    id: "duotone/steps.svg",
    uri:
      "https://yulife-local.imgix.net/duotone/steps.svg?ixlib=js-3.2.1&fit=clip&fm=png&s=72da13188ae2876415b4566aedbd89b0",
  },
  description: "Unlocked with Rare",
  isLocked: true,
  wrapperStyle: { width: "100%" },
};

const data = [
  DEFAULT_DATA,
  {
    ...DEFAULT_DATA,
    description: "Increases the number of daily steps for which you earn YuCoin.",
    rightIcon: null,
    isLocked: false,
  },
];

storiesOf("molecules/package-card-perks", module).add("default", () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", paddingHorizontal: 48 }}>
      {data.map((item, index) => (
        <PackageCardPerks key={index} {...item} />
      ))}
    </View>
  );
});
