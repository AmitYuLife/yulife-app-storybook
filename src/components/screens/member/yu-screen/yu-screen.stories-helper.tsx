import { transformAvatar } from "./avatar-builder/avatar-builder.helper";
import { GetYulifer_getYulifer_products, GetYulifer_getYulifer_products_employer } from "@graphql/_core/schema";

// eslint-disable-next-line @typescript-eslint/no-var-requires
export const sampleServerAvatar = require("./yu-screen-avatar.data");

export const avatarFiller = transformAvatar(sampleServerAvatar);

const personal = [
  {
    name: "Coming Soon",
    icon: "LifeInsurance",
    active: false,
    description: "You are currently not enrolled in Life Insurance. More information coming soon.",
    policyNumber: "SOME_WEIRD_NUMBER_001",
    earnRate: 10,
  },
  {
    name: "Coming Soon",
    icon: "IncomeProtection",
    active: false,
    description: "You are currently not enrolled in Income Protection. More information coming soon.",
    policyNumber: "SOME_WEIRD_NUMBER_001",
    earnRate: 10,
  },
  {
    name: "Coming Soon",
    icon: "CriticalIllness",
    active: false,
    description: "You are currently not enrolled in Critical Illness. More information coming soon.",
    policyNumber: "SOME_WEIRD_NUMBER_001",
    earnRate: 10,
  },
  {
    name: "Coming Soon",
    icon: "TravelInsurance",
    active: false,
    description: "You are currently not enrolled in Travel Insurance. More information coming soon.",
    policyNumber: "SOME_WEIRD_NUMBER_001",
    earnRate: 10,
  },
];

const charms = [
  {
    earnRate: 10,
    description: `You've earned an Alpha Charm!\nAs an early adopter of YuLife,\nyou earn <bold>10x</bold> YuCoin.`,
    name: "Alpha Charm",
    active: true,
    icon: "Alpha",
  },
];

const employerGroup = [
  {
    productType: "Group Life Insurance",
    name: "Group Life Insurance",
    option: "common",
    type: "employer",
    active: true,
    icon: "GroupLife",
    description: "This protection is adding 10x to your YuCoin earn rate.",
    policyNumber: "SOME_WEIRD_NUMBER_001",
    earnRate: 10,
  },
  {
    productType: "Group Critical Illness",
    name: "Group Critical Illness",
    option: "common",
    type: "employer",
    active: false,
    icon: "GroupCritical",
    earnRate: 0,
    description:
      "This protection has not been made available to you or your company. If you have any questions please contact your head of HR in your office.",
    policyNumber: "SOME_WEIRD_NUMBER_001",
  },
  {
    name: "Group Income Protection",
    active: false,
    icon: "GroupIncome",
    earnRate: 0,
    description:
      "This protection has not been made available to you or your company. If you have any questions please contact your head of HR in your office.",
    policyNumber: "SOME_WEIRD_NUMBER_001",
  },
];

export const employerYulife = [
  {
    earnRate: 10,
    active: true,
    description: "This protection is adding 10x to your YuCoin earn rate.",
    name: "Life Insurance",
    icon: "GroupLife",
  },
];

export const groupProducts = {
  employer: employerGroup,
  personal,
  charms: [],
} as GetYulifer_getYulifer_products;

export const yulifeProducts = {
  employer: employerYulife,
  personal,
  charms: [],
} as GetYulifer_getYulifer_products;

export const alphaProducts = {
  employer: [] as GetYulifer_getYulifer_products_employer[],
  personal,
  charms,
} as GetYulifer_getYulifer_products;
