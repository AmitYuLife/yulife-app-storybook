import React, { ComponentProps } from "react";
import { storiesOf } from "@storybook/react-native";
import YuScreen from "./yu-screen";
import { avatarFiller } from "./yu-screen.stories-helper";
import { alphaProducts, groupProducts, yulifeProducts } from "./yu-screen-products.data";

const fillers = {
  level: 8,
  totalCoins: 0,
  earnRate: 0,
  hasNotification: false,
  isAvatarCreated: true,
  loading: false,
  userName: "userName",
  avatarUrl: "",
  avatarFromLocal: avatarFiller,
  products: {
    employer: null,
    personal: null,
    charms: null,
  },
  onUnlockPress: (): null => null,
  onEditPress: (): null => null,
  onLeftMenuPress: (): null => null,
  onEarnRatePress: (): null => null,
  onProductPress: (_: any, __: any): any => (): null => null,
} as ComponentProps<typeof YuScreen>;

storiesOf("YuScreen")
  .add("no avatar", () => <YuScreen {...fillers} isAvatarCreated={false} />)
  .add("alpha", () => <YuScreen {...fillers} products={alphaProducts} />)
  .add("group", () => <YuScreen {...fillers} products={groupProducts} />)
  .add("yulife", () => <YuScreen {...fillers} products={yulifeProducts} />);
