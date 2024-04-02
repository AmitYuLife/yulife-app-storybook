export interface PensionContributionInfo {
    balance: number,
    employersContribution: number,
    yourContribution: number,
    valuationDate: string,
    valuation: number
    period: "week" | "month",
}