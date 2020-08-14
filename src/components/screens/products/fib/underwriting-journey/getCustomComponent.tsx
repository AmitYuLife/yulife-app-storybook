import { FinancialQuestionsFormScreen } from "./subcomponents/financial-questions/financial-questions-form.screen";
import { FinancialQuestionsCoverListScreen } from "./subcomponents/financial-questions/financial-questions-cover-list.screen";
import { IFibUnderwritingJourneyScreenProps } from "./fib.underwriting-journey.screen";

const FINANCIAL_QUESTIONS_FORM_SCREEN = "financial_cover_details";
const FINANCIAL_QUESTIONS_COVER_LIST_SCREEN = "financial_other_cover";

type CustomComponents = typeof FINANCIAL_QUESTIONS_FORM_SCREEN | typeof FINANCIAL_QUESTIONS_COVER_LIST_SCREEN;

export function getCustomComponent(id: string) {
  const customComponents: Record<CustomComponents, (props: IFibUnderwritingJourneyScreenProps) => JSX.Element> = {
    financial_cover_details: FinancialQuestionsFormScreen,
    financial_other_cover: FinancialQuestionsCoverListScreen,
  };

  return customComponents[id as CustomComponents] || null;
}
