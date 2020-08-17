import React from "react";
import { storiesOf } from "@storybook/react-native";
import { FinancialQuestionsFormScreen } from "./financial-questions-form.screen";
import { data } from "@components/containers/products/fib/data/underwriting-journey-data";
import { FinancialQuestionsCoverListScreen } from "./financial-questions-cover-list.screen";
import { withProvider } from "@components/storybook/withProvider";

function voidFunc(): void {
  return null;
}

const formScreenData = data.find((x) => x.id === "financial_custom_cover_form");
const coverListData = data.find((x) => x.id === "financial_cover_list");

storiesOf("Financial Questions", module)
  .addDecorator(withProvider)
  .add("financial questions form", () => (
    <FinancialQuestionsFormScreen onNavigateBack={voidFunc} data={formScreenData} onFirstButtonPressed={() => null} />
  ))
  .add("financial questions cover list", () => (
    <FinancialQuestionsCoverListScreen
      onNavigateBack={voidFunc}
      data={coverListData}
      onFirstButtonPressed={() => null}
    />
  ));
