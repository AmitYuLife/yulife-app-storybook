import { CPE_93_GDent } from "@data";
import { AccordionDatum, OnboardingYuScreenInfo, ProductStartsSoon } from "./types";

export const noProductText = "More protection coming soon";
export const wellbeingAccessText = "Wellbeing Access";
export const availableProducts = "More protection";
export const protectionPowered = "Protection, powered up!";
export const allPoweredUp = "You are all powered up!";
export const earnRewardsCopy = "Earn rewards faster with increased YuCoin Power";
export const buttonText = "Check out my power";
export const yuCoinText = "YuCoin";
export const powerText = "Power";
export const paidBy = "Employer paid";
export const lifeInsurance = "Life Insurance";
export const criticalIllness = "Critical Illness";
export const incomeProtection = "Income Protection";
export const groupDental = "Dental Cover";
export const productYuCoin = "10";
export const dentalYuCoin = "5";
export const HealthInsurance = "Health Insurance";
export const StartsSoon = "Starts soon";
export const employerScheme = "Employer scheme";
export const availableSoon = "Available soon";
export const surveyText = "We love hearing from you.\nHelp shape the future of YuLife!";
export const applicationProcessed = "Your application is being processed";
export const notCoveredYugiInfo =
  "You are not covered, and cannot claim for any treatments carried out before your cover starts.";
export const GdentMarkDown =
  "You can claim cash back, get access to Bupa clinics across the UK, and reach Bupa’s experts on their 24/7 Anytime HealthLine.";
export const coverDetailsText = "Cover details";
export const bupaDentalPlanText = "Bupa Dental Plan";
export const coveredForText = "What I’m covered for";
export const membershipGuideText = "Membership guide";
export const faqText = "FAQs";

//images slot button

export const coveredForImageSlot =
  "https://yulife-develop.imgix.net/content/icons/doc_arrow.svg?ixlib=js-3.2.1&w=72&h=72&s=b6e91db995b14b97734bc356aa842902";
export const membershipGuideImageSlot =
  "https://yulife-develop.imgix.net/duotone/policy-summary.svg?ixlib=js-3.2.1&w=72&h=72&s=92cb17210cec9cb652d34b59aa4ed723";
export const faqImageSlot =
  "https://yulife-develop.imgix.net/personalProducts/faqs.svg?ixlib=js-3.2.1&w=72&h=72&s=55f7d3ef6f114b8b9b0f11d069b88844";

//Buttons

export const gotItText = "Got it";

//Date formats

export const dotSeperatedDateFormat = "DD.MM.YYYY";

export const GdentAvailableSoon: OnboardingYuScreenInfo = {
  mainYuCoinPower: "10",
  firstSlotYucoinPower: `+${CPE_93_GDent.data.earn_rate}`,
  firstSlotProductTitle: groupDental,
  firstSlotProductSubtitle: availableSoon,
  lastSlotProductTitle: allPoweredUp,
};

export const GdentAvailableSoonProduct: ProductStartsSoon = {
  productName: groupDental,
  goLiveDate: CPE_93_GDent.data.start_date,
  yugiInfoText: notCoveredYugiInfo,
  additionalProductInfo: GdentMarkDown,
  coverDetailsText: coverDetailsText,
  planName: bupaDentalPlanText,
  pricePerMonth: "0.00",
  yuCoinPower: `${CPE_93_GDent.data.earn_rate}`,
  coveredForText: coveredForText,
  coveredForImgSlot: coveredForImageSlot,
  membershipGuideImgSlot: membershipGuideImageSlot,
  membershipText: membershipGuideText,
  faqImageSlot: faqImageSlot,
  faqText: faqText,
  button: gotItText,
};

export type AccordionData = Array<AccordionDatum>;

export const level1Benefit: AccordionData = [
  {
    leftText: "Routine examination",
    rightTextBody: "up to £60",
    rightTextLabel: "maximum of two £30 visits per policy year",
  },
  {
    leftText: "Scale and polish",
    rightTextBody: "up to £80",
    rightTextLabel: "maximum of two £40 visits per policy year",
  },
  {
    leftText: "Virtual routine examination",
    rightTextBody: "up to £20",
  },
  {
    leftText: "Dental X-rays and scans",
    rightTextBody: "up to £40",
  },
  {
    leftText: "Fillings, fissure sealant and topical fluoride",
    rightTextBody: "up to £150",
  },
  {
    leftText: "Extractions",
    rightTextBody: "up to £100",
  },
  {
    leftText: "Major restorative dental treatment",
    rightTextBody: "80% contribution",
    rightTextLabel: "up to £275",
  },
  {
    leftText: "UK Orthodontic treatment",
    rightTextBody: "up to £300",
  },
  {
    leftText: "Worldwide emergency dental treatment",
    rightTextBody: "up to £1,000",
    rightTextLabel: "maximum of four £250 emergencies per policy year",
  },
  {
    leftText: "Worldwide dental injury treatment",
    rightTextBody: "UK Oral cancer treatment",
  },
  {
    leftText: "UK Oral cancer treatment",
    rightTextBody: "Paid in full",
  },
  {
    leftText: "Cash benefit for UK hospital stay",
    rightTextBody: "up to £1,000",
    rightTextLabel: "maximum of ten £100 hospital stays per policy year",
  },
];
