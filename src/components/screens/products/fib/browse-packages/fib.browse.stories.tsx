import React from "react";
import { storiesOf } from "@storybook/react-native";
import { FibBrowseScreen } from "./fib.browse.screen";
import { avatarFiller } from "@components/screens/member/yu-screen/yu-screen.stories-helper";
import { View } from "react-native";

const mockProduct = {
  heading: `Designed to\ncover the basics`,
  earnRate: 10,
  salaryPercentage: 25,
};

storiesOf("FibBrowse")
  .addDecorator((g: any) => <View style={{ flex: 1 }}>{g()}</View>)
  .add("default", () => (
    <FibBrowseScreen
      onNavigateBack={(): void => null}
      fibPackage={mockProduct}
      avatar={avatarFiller}
      currentEarnRate={20}
    />
  ));
