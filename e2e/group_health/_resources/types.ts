export interface GHI_PAGE_INFO {
  productId: string;
  startDate: string;
  membershipNumber?: string;
}
export interface GHI_REWARD_CLAIM_PAGE_DETAILS {
  heading: string;
  companyDescription: string[];
  rewardDescription?: string[];
  secondaryHeader?: string;
  secondaryDescription?: string[];
  rewardStepsAmount: number;
  rewardSteps: string[];
  buttonText: string;
  voucherDescription?: string;
  voucherClaimMessage?: string[];
  voucherExpiryYears: number;
}

export type GHI_SINGLE_VOUCHER_DETAILS = {
  value: string;
  cost: string;
};

export interface GHI_VOUCHER_LIST_DETAILS {
  vouchers: GHI_SINGLE_VOUCHER_DETAILS[];
}
export interface IMPORTANT_NOTES_PAGE_DETAILS {
  heading: string;
  subheadings: string[];
  importantNotes: string[];
}

export interface CAROUSEL_CARD {
  title: string;
  img: string;
}

export interface GAME_CAROUSEL {
  cards: CAROUSEL_CARD[];
}
