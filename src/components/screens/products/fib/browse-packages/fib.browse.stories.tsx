import React from "react";
import { storiesOf } from "@storybook/react-native";
import { FibBrowseScreen } from "./fib.browse.screen";
import { avatarFiller } from "@components/screens/member/yu-screen/yu-screen.stories-helper";
import { View } from "react-native";

const onPress = (): null => null;
const faqs = [
  {
    label: "What is a single cash payment?",
    onPress,
  },
  {
    label: "What happens if YuLife needs medical evidence?",
    onPress,
  },
];

storiesOf("FibBrowse")
  .addDecorator((g: any) => <View style={{ flex: 1 }}>{g()}</View>)
  .add("default", () => (
    <FibBrowseScreen onNavigateBack={(): void => null} avatar={avatarFiller} currentEarnRate={20} faqs={faqs} />
  ));
