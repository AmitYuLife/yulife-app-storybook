import React from "react";
import { storiesOf } from "@storybook/react-native";
import { FibFaqScreen, IRedirectFAQ } from "./fib.faq.screen";
import faqData from "@containers/products/fib/data/faq-fib-data";

const fillers = {
  onNavigateBack: (): null => null,
  redirectToAnotherFAQ: null as IRedirectFAQ,
};

const getFaq = (searchedId: string) => faqData.find(({ id }) => id === searchedId);
const faq = {
  increaseCover: getFaq("increase-cover"),
  salaryIncrease: getFaq("salary-increase"),
};

storiesOf("Fib Faq", module)
  .add("with list items and subheading", () => <FibFaqScreen {...fillers} faq={faq.increaseCover} />)
  .add("with redirect", () => (
    <FibFaqScreen {...fillers} faq={faq.salaryIncrease} childFaqs={{ onPress: () => null, faq: faq.increaseCover }} />
  ));
