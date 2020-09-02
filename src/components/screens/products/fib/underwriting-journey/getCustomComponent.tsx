import { FinancialQuestionsFormScreen } from "./subcomponents/financial-questions/financial-questions-form.screen";
import { FinancialQuestionsCoverListScreen } from "./subcomponents/financial-questions/financial-questions-cover-list.screen";
import { IFibUnderwritingJourneyScreenProps } from "./fib.underwriting-journey.screen";
import {
  FIB_FINANCIAL_COVER_LIST_SCREEN_ID,
  FIB_FINANCIAL_CUSTOM_COVER_FORM_SCREEN_ID,
} from "../../../../containers/products/fib/data/underwriting-journey-data";

type CustomComponents = typeof FIB_FINANCIAL_CUSTOM_COVER_FORM_SCREEN_ID | typeof FIB_FINANCIAL_COVER_LIST_SCREEN_ID;

export function getCustomComponent(id: string) {
  const customComponents: Record<CustomComponents, (props: IFibUnderwritingJourneyScreenProps) => JSX.Element> = {
    fib_financial_custom_cover_form: FinancialQuestionsFormScreen,
    fib_financial_cover_list: FinancialQuestionsCoverListScreen,
  };

  return customComponents[id as CustomComponents] || null;
}
