export interface CostBenefit {
  cost: string;
  monthlyPayout: string;
}
/**
 * utility types, for more readable naming
 */
export type Age = number;
export type SalaryPercent = number;
export type KeyedPricing = Record<Age, Record<SalaryPercent, CostBenefit>>;
