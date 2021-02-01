import React, { memo } from "react";
import { CommonWrapperWithButton } from "../common";
import { BUTTON_ICON } from "@atoms/button/tertiary-button/tertiary-button.helpers";

const CONTENT =
  "Visit our FAQs to find more information on anything you’re unsure of. If you need additional details, chat to us below!";
interface IFaqs {
  navigateToFaqsList: () => void;
}

export const Faqs = memo(({ navigateToFaqsList }: IFaqs) => (
  <CommonWrapperWithButton
    title="Have a question?"
    description={CONTENT}
    buttonLabel="FAQs"
    onPress={navigateToFaqsList}
    buttonLeftIcon={BUTTON_ICON.QUESTION_BUBBLE}
  />
));
