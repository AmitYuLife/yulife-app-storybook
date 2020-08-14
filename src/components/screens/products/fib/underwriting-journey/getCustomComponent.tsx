import { FinancialQuestionsFormScreen } from "./subcomponents/financial-questions/financial-questions-form.screen";
import { FinancialQuestionsCoverListScreen } from "./subcomponents/financial-questions/financial-questions-cover-list.screen";
import { IFibUnderwritingJourneyScreenProps } from "./fib.underwriting-journey.screen";

const FINANCIAL_QUESTIONS_FORM_SCREEN = "financial_custom_cover_form";
const FINANCIAL_QUESTIONS_COVER_LIST_SCREEN = "financial_cover_list";

type CustomComponents = typeof FINANCIAL_QUESTIONS_FORM_SCREEN | typeof FINANCIAL_QUESTIONS_COVER_LIST_SCREEN;

export function getCustomComponent(id: string) {
  const customComponents: Record<CustomComponents, (props: IFibUnderwritingJourneyScreenProps) => JSX.Element> = {
    financial_custom_cover_form: FinancialQuestionsFormScreen,
    financial_cover_list: FinancialQuestionsCoverListScreen,
  };

  return customComponents[id as CustomComponents] || null;
}
