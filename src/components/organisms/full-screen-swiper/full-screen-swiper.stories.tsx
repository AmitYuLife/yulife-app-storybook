import React, { ComponentProps } from "react";
import { storiesOf } from "@storybook/react-native";
import { FullScreenSwiper } from "./full-screen-swiper";
import { MobileOnboardingStepPerformed } from "@graphql/_core/schema/globalTypes";

const NAME = "organisms/FullScreenSwiper";

const DEFAULT = {
  onPress: {
    type: "",
  },
  styles: [],
  backgroundImage: {
    id: "",
    uri: "",
  },
} as any;

const ITEMS = [
  {
    ...DEFAULT,
    heading: "Power-up your Yuniverse",
    paragraph:
      "Discover whole new ways of earning YuCoin. Every policy comes with Perks that power-up your Yumoji, from increased YuCoin power to bonus Chest rewards.",
    title: "Personal Insurance",
  },
  {
    ...DEFAULT,
    heading: "It’s all yours",
    paragraph:
      "Personal Insurance built by you, for you. That means the policy, plus the YuLife app and benefits are yours to keep, even if your employment status changes.",
    title: "Personal Insurance",
  },
  {
    ...DEFAULT,
    heading: "Get piece of mind",
    paragraph:
      "Should you pass away, your family will receive a percentage of your pre-tax salary every month. Whether it’s monthly expenses or piece of mind for the future, Personal Life Insurance ensures your family is covered.",
    title: "Personal Insurance",
  },
] as ComponentProps<typeof FullScreenSwiper>["items"];

const props = {
  id: MobileOnboardingStepPerformed.personalLifeIntro,
  close: {
    onPress: (): null => null,
    icon: {
      id: "",
      uri: "",
    },
  },
  items: ITEMS,
  button: {
    onPress: (): null => null,
    label: "Start my quote (+1000 YuCoin)",
  },
  onClose: (): null => null,
  title: "Personal Life Insurance",
  dismissMinVisibleIndex: 2,
  autoPlaySpeedMs: 2000,
  theme: {
    primaryColor: "#F00",
  },
};

storiesOf(NAME, module).add("default", () => <FullScreenSwiper {...props} />);
