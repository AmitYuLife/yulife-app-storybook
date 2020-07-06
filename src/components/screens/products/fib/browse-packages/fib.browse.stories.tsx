import React from "react";
import { storiesOf } from "@storybook/react-native";
import { FibBrowseScreen } from "./fib.browse.screen";
import { avatarFiller } from "@components/screens/member/yu-screen/yu-screen.stories-helper";
import { View } from "react-native";
import faqData from "@containers/products/fib/faq-fib-data";

const onPress = (): null => null;
const faqs = faqData.map(({ question }) => ({ label: question, onPress }));

storiesOf("FibBrowse")
  .addDecorator((g: any) => <View style={{ flex: 1 }}>{g()}</View>)
  .add("default", () => (
    <FibBrowseScreen onNavigateBack={(): void => null} avatar={avatarFiller} currentEarnRate={20} faqs={faqs} />
  ));
