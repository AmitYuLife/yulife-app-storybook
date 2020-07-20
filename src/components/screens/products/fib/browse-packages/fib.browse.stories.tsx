import React from "react";
import { storiesOf } from "@storybook/react-native";
import { FibBrowseScreen } from "./fib.browse.screen";
import { avatarFiller } from "@components/screens/member/yu-screen/yu-screen.stories-helper";
import { View } from "react-native";
import faqData from "@components/containers/products/fib/data/faq-fib-data";
import documentsData from "@components/containers/products/fib/data/documents-data";
import { Package } from "./fib.browse.types";
import { IFaq } from "./subcomponents/faqs/faq";

const selectedPackage: Package = {
  earnRate: 20,
  salaryPercentageCovered: 50,
  estimatedCost: 20,
  id: "common",
  label: "Common",
  descriptionHeading: "basic cover",
};

const onPress = (): null => null;
const faqs: IFaq[] = faqData.map(({ question }) => ({ label: question, onPress, redirectType: "internal" }));
const documents: IFaq[] = documentsData.map(({ question, iconSvgXml }) => ({
  label: question,
  onPress,
  iconSvgXml: iconSvgXml,
  redirectType: "external",
}));

storiesOf("FibBrowse")
  .addDecorator((g: any) => <View style={{ flex: 1 }}>{g()}</View>)
  .add("default", () => (
    <FibBrowseScreen
      selectedPackage={selectedPackage}
      navigateToEditSalary={() => null}
      onNavigateToYuScreen={(): void => null}
      avatar={avatarFiller}
      currentEarnRate={20}
      faqs={faqs}
      selectCoverType={() => null}
      documents={documents}
    />
  ));
