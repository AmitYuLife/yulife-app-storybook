import React from "react";
import { storiesOf } from "@storybook/react-native";
import { FinancialQuestionsScreen } from "../../financial-questions.screen";

function voidFunc(): void {
  return null;
}

storiesOf("FinancialQuestionsForm").add("default", () => (
  <FinancialQuestionsScreen
    onNavigateBack={voidFunc}
    data={{
      id: "financial_cover_details",
      heading: "Financial",
      icon: `<svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 15.5396H18" stroke="#838385" stroke-width="1.41667" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M1 17.6646H18" stroke="#838385" stroke-width="1.41667" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M1 5.92285H18" stroke="#838385" stroke-width="1.41667" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M3.125 8.04785V15.0589" stroke="#838385" stroke-width="1.41667" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M9.5 8.04785V15.0589" stroke="#838385" stroke-width="1.41667" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M15.875 8.04785V15.0589" stroke="#838385" stroke-width="1.41667" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M1 3.79818L9.39102 0.964844L18 3.79818H1Z" stroke="#838385" stroke-width="1.41667" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        `,
      title: "Cover Details",
      question: "Please enter your cover details in below.",
      firstButton: { label: "Continue", actionId: "your_name" },
    }}
  />
));
