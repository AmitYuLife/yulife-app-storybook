import React, { memo } from "react";
import { FibFaqScreen, IRedirectFAQ } from "@screens/products/fib/faq/fib.faq.screen";
import { handleNavigateBack } from "@navigation/utils";
import faqData, { IFibFAQ } from "./data/faq-fib-data";
import { Navigation } from "react-native-navigation";

interface IFibFaqContainer {
  componentId: string;
  faq: IFibFAQ;
  onNavigateBack?: () => void;
}

const buildRedirectFAQ = (componentId: string, originalFAQ: IFibFAQ): IRedirectFAQ => {
  const redirectFAQ = faqData.find(({ id }) => id === "increase-cover");
  const onPress = () => {
    Navigation.updateProps(componentId, {
      faq: redirectFAQ,
      onNavigateBack: () =>
        Navigation.updateProps(componentId, {
          faq: originalFAQ,
        }),
    } as IFibFaqContainer);
  };
  return {
    faq: redirectFAQ,
    onPress,
  };
};

const FibFaqContainer = memo(function (props: IFibFaqContainer) {
  const { componentId, faq, onNavigateBack = handleNavigateBack(componentId) } = props;
  let redirectToAnotherFAQ: IRedirectFAQ = null;
  if (faq.id === "salary-increase") {
    redirectToAnotherFAQ = buildRedirectFAQ(componentId, faq);
  }
  return <FibFaqScreen onNavigateBack={onNavigateBack} faq={faq} redirectToAnotherFAQ={redirectToAnotherFAQ} />;
});

export default FibFaqContainer;
