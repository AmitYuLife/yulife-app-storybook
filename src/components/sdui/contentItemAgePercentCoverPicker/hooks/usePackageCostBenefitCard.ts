import moment from "moment";
import { CoverType } from "@graphql/__generated";

interface UsePackageCostBenefitCardParameters {
  keyedPricing: Record<number, Record<number, { cost: string; monthlyPayout: string }>>;
  policyEndAge: number;
  activeSalaryPercent: number;
  activeCover: CoverType;
  userAge: number;
  costPayoutBenefitHeading: string;
  costPayoutBenefitPayoutSchedule: string;
  costPayoutBenefitCostSchedule: string;
}

const INITIAL_VALUE = {
  costValue: "",
  costDescription: "",
  coverType: CoverType.Common,
  benefitDescription: "",
  benefitValue: "",
  benefitIntervalMarkdown: "",
};

export const usePackageCostBenefitCard = ({
  keyedPricing,
  policyEndAge,
  activeSalaryPercent,
  activeCover,
  userAge,
  costPayoutBenefitHeading,
  costPayoutBenefitPayoutSchedule,
  costPayoutBenefitCostSchedule,
}: UsePackageCostBenefitCardParameters) => {
  const now = moment();
  const dayMonth = now.clone().format("Do MMMM");
  const year = parseInt(now.clone().format("YYYY"), 10);
  const termLength = policyEndAge - userAge;

  if (!keyedPricing?.[policyEndAge]) {
    return INITIAL_VALUE;
  }

  const pricesForAge = keyedPricing[policyEndAge];

  if (!pricesForAge?.[activeSalaryPercent]) {
    return INITIAL_VALUE;
  }

  const packageForSalaryPercent = pricesForAge[activeSalaryPercent];

  return {
    costValue: `${packageForSalaryPercent.cost}*`,
    costDescription: costPayoutBenefitCostSchedule,
    coverType: activeCover,
    benefitDescription: costPayoutBenefitHeading,
    benefitValue: packageForSalaryPercent.monthlyPayout,
    benefitIntervalMarkdown: `${costPayoutBenefitPayoutSchedule}\n**${dayMonth} ${year + termLength}**`,
  };
};
