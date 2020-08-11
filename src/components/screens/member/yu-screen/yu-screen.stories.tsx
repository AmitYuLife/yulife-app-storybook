import React, { ComponentProps, useState, useEffect } from "react";
import { storiesOf } from "@storybook/react-native";
import YuScreen from "./yu-screen";
import { alphaProducts, groupProducts, yulifeProducts } from "./yu-screen.stories-helper";
import { YuScreenLoading } from "./yu-screen-loading";

type YuScreenProps = ComponentProps<typeof YuScreen>;

const fillers: YuScreenProps = {
  level: 8,
  totalCoins: 0,
  earnRate: 0,
  isAvatarCreated: true,
  userName: "userName",
  avatarUrl: "",
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
};

storiesOf("YuScreen", module)
  .add("no avatar", () => <YuScreen {...fillers} isAvatarCreated={false} />)
  .add("alpha", () => <YuScreen {...fillers} products={alphaProducts} />)
  .add("group", () => <YuScreen {...fillers} products={groupProducts} />)
  .add("yulife", () => <YuScreen {...fillers} products={yulifeProducts} />)
  .add("avatar loading", () => <YuScreenLoadingStory {...fillers} />);

function YuScreenLoadingStory(props: YuScreenProps) {
  const [isLoading, setLoadingState] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoadingState(false);
    }, 3000);
  }, []);

  if (isLoading) {
    return <YuScreenLoading />;
  }

  return <YuScreen {...props} products={yulifeProducts} />;
}
