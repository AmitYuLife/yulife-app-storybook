import React, { memo } from "react";
import { FIB_FAQ, FAQ, FibLocalNavigation } from "../fib.types";
import { FibFaqScreen } from "@screens/products/fib/faq/fib.faq.screen";
import faqData from "../data/faq-fib-data";

interface IFibFaqContainer {
  navigation: FibLocalNavigation;
  selectedFaqId: string;
  selectFaq: (faq: string) => void;
}

interface NestedFaq {
  onPress: () => void;
  faq: FAQ;
}

const buildChildFaqs = (navigation: FibLocalNavigation, selectFaq: (faqId: string) => void): NestedFaq => {
  return {
    onPress: () => {
      navigation.push(FIB_FAQ, {
        onNavigateBack: () => selectFaq("salary-increase"),
      });

      return selectFaq("increase-cover");
    },
    faq: faqData.find(({ id }) => id === "increase-cover"),
  };
};

const FibFaqContainer = memo(function (props: IFibFaqContainer) {
  const { selectedFaqId, navigation, selectFaq } = props;
  const { passProps } = navigation.currentRoute;
  const selectedFaq = faqData.find(({ id }) => id === selectedFaqId);

  function onNavigateBack() {
    navigation.pop();
    if (passProps.onNavigateBack) {
      passProps.onNavigateBack();
    }
  }

  if (selectedFaqId === "salary-increase") {
    const childFaqs = buildChildFaqs(navigation, selectFaq);

    return <FibFaqScreen onNavigateBack={onNavigateBack} faq={selectedFaq} childFaqs={childFaqs} />;
  }

  return <FibFaqScreen onNavigateBack={onNavigateBack} faq={selectedFaq} />;
});

export default FibFaqContainer;
