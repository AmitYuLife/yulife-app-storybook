export interface SAProductData {
  productName: string;
  productLongName?: string;
  schemeType?: string;
  rightImage?: string;
  yuCoinPower?: string;
  productDescription?: string;
  yugiInfoImgSrc: string;
  yugiInfotext: string;
  longname?: string;
}
export interface keyInfo {
  keyInfo: string;
  membershipNumberText: string;
  membershipNumber: string;
  startDateText: string;
  startDate: string;
  coveredTypeText?: string;
  coverType?: string;
  keyInfoDescription?: string;
  termsText?: string;
}

export interface coverAmounts {
  coverAmountsText: string;
  youText: string;
  youAmount: string;
  increaseCoverText?: string;
  increaseCoverTextImg?: string;
  child_0_12_monthsText?: string;
  child_0_12_amount?: string;
  child_1_5_yearsText?: string;
  child_1_5_amount?: string;
  child_6_13_yearsText?: string;
  child_6_13_amount?: string;
  child_14_21_yearsText?: string;
  child_14_21_amount?: string;
  spouseText?: string;
  spouseAmount?: string;
  stillbornText?: string;
  stillbornAmount?: string;
  child_0_5_yearsText?: string;
  child_0_5_yearsAmount?: string;
  child_14_plusText?: string;
  child_14_plusAmount?: string;
  disclaimer_1?: string;
  disclaimer_2?: string;
  NOincreaseCoverText?: string;
  NOincreaseCoverTextImg?: string;
}

export interface beneficiaries {
  beneficiaresText: string;
  beneficiary_Name_1?: string;
  beneficiary_benefit_1?: string;
  beneficiary_Name_2?: string;
  beneficiary_benefit_2?: string;
  noBeneficiaryText?: string;
  addBeneficiaryImage?: string;
  beneficiaryDescription_1: string;
  beneficiaryDescription_2: string;
}

export interface productAdditionalInfo {
  additionalInfo_1: string;
  additionalInfo_2: string;
}

export interface ProductSlot {
  name: string;
  cardSize: "tall" | "square" | "wide";
  title: string;
  body?: string;
  logo?: boolean;
  img?: string;
  beneficiaries: boolean;
}
