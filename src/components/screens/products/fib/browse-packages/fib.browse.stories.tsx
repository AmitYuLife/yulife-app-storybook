import React from "react";
import { storiesOf } from "@storybook/react-native";
import { FibBrowseScreen } from "./fib.browse.screen";
import { avatarFiller } from "@components/screens/member/yu-screen/yu-screen.stories-helper";
import { View } from "react-native";
import faqData from "@components/containers/products/fib/data/faq-fib-data";
import documentsData from "@components/containers/products/fib/data/documents-data";

const onPress = (): null => null;
const faqs = faqData.map(({ question }) => ({ label: question, onPress }));
const documents = documentsData.map(({ question, iconSvgXml }) => ({
  label: question,
  onPress,
  iconSvgXml: iconSvgXml,
}));

storiesOf("FibBrowse")
  .addDecorator((g: any) => <View style={{ flex: 1 }}>{g()}</View>)
  .add("default", () => (
    <FibBrowseScreen
      navigateToEditSalary={() => null}
      onNavigateToYuScreen={(): void => null}
      avatar={avatarFiller}
      currentEarnRate={20}
      faqs={faqs}
      documents={documents}
    />
  ));
