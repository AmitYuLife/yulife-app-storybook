import React, { memo } from "react";
import { FibFaqScreen } from "@screens/products/fib/faq/fib.faq.screen";
import { handleNavigateBack } from "@navigation/utils";
import faqData, { IFibFAQ } from "./faq-fib-data";
import { Navigation } from "react-native-navigation";
import { ROUTES } from "@navigation/constants";

interface IFibFaqContainer {
  componentId: string;
  faq: IFibFAQ;
}

const buildRedirectFAQ = (componentId: string) => {
  const redirectFAQ = faqData.find(({ id }) => id === "increase-cover");

  const onPress = () => {
    Navigation.push(componentId, {
      component: {
        id: ROUTES.fibFaq,
        name: ROUTES.fibFaq,
        passProps: {
          componentId,
          faq: redirectFAQ,
        },
      },
    });
  };

  return {
    faq: redirectFAQ,
    onPress,
  };
};

const FibFaqContainer = memo(function (props: IFibFaqContainer) {
  const { componentId, faq } = props;
  let redirectToAnotherFAQ;

  if (faq.id === "salary-increase") {
    redirectToAnotherFAQ = buildRedirectFAQ(componentId);
  }

  return (
    <FibFaqScreen
      onNavigateBack={handleNavigateBack(componentId)}
      faq={faq}
      redirectToAnotherFAQ={redirectToAnotherFAQ}
    />
  );
});

export default FibFaqContainer;
