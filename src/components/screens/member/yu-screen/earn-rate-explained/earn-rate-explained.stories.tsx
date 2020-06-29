import React, { ComponentProps } from "react";
import { storiesOf } from "@storybook/react-native";
import EarnRateExplained from "./earn-rate-explained";
import { alphaProducts, groupProducts, yulifeProducts } from "./story.helper";

const fillers = {
  earnRate: 1,
  loading: false,
  onExitConfirmed: () => null,
  onProductDetails: (_, __) => () => null,
  products: { employer: [], charms: [], personal: [] },
  explainData: [
    {
      icon: "steps",
      label: "2000 Steps",
      standardValue: 1,
    },
    {
      icon: "mindfulness",
      label: "5 Mindful Minutes",
      standardValue: 1,
    },
    {
      icon: "challenges",
      label: "1 Challenge",
      standardValue: 6,
    },
    {
      icon: "streaks",
      label: "Streaks",
      standardValue: 40,
    },
    {
      icon: "chests",
      label: "Chests",
      standardValue: 20,
    },
  ],
} as ComponentProps<typeof EarnRateExplained>;

storiesOf("EarnRateExplained", module)
  .add("products: alpha", () => <EarnRateExplained {...fillers} earnRate={1} products={alphaProducts} />)
  .add("products: group", () => <EarnRateExplained {...fillers} earnRate={30} products={groupProducts} />)
  .add("products: yulife", () => <EarnRateExplained {...fillers} earnRate={10} products={yulifeProducts} />);
