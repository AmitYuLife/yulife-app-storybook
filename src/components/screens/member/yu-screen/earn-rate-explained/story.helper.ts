import { GetYulifer_getYulifer_products, GetYulifer_getYulifer_products_employer } from "@graphql/_core/schema";

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
    description: `You've earned an Alpha Charm! As an early adopter of YuLife, you earn <bold>10x</bold> YuCoin.`,
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
    description: "The protections you own are giving you a 10x increase on your yucoin earn rate from all sources.",
    policyNumber: "SOME_WEIRD_NUMBER_001",
    earnRate: 10,
  },
  {
    productType: "Group Critical Illness",
    name: "Group Critical Illness",
    option: "common",
    type: "employer",
    active: true,
    icon: "GroupCritical",
    earnRate: 20,
    description:
      "You are currently not enrolled in Group Critical Illness. For more information, contact your head of HR in your office.",
    policyNumber: "SOME_WEIRD_NUMBER_001",
  },
  {
    name: "Group Income Protection",
    active: false,
    icon: "GroupIncome",
    earnRate: 0,
    description:
      "You are currently not enrolled in Group Income Protection. For more information, contact your head of HR in your office.",
    policyNumber: "SOME_WEIRD_NUMBER_001",
  },
];

export const employerYulife = [
  {
    earnRate: 10,
    active: true,
    description: "The protections you own are giving you a x_earn_rate increase on your yucoin earn rate from all sources.".replace(
      "x_earn_rate",
      `<bold>10x</bold>`
    ),
    name: "Group Life Insurance",
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
