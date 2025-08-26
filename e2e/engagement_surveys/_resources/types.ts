export interface FinancialWellnessQuizDescriptionPage {
  title: string;
  daysLeft: string;
  descTitle: string;
  desc: string;
  infoCards: FWQInfoCard[];
  button: string;
}

export interface FWQInfoCard {
  title: string;
  desc: string;
}
