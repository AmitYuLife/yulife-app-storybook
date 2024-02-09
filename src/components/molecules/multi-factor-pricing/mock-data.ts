import { CoverType } from "@graphql/__generated";

export const MIN_AGE = 30;
export const MIN_SALARY_PERCENTAGE = 0.25;
export const MAX_AGE = 70;
export const RANGE = MAX_AGE - MIN_AGE + 1;

export const options = [
  {
    value: 25,
    coverType: CoverType.Common,
    subheading: "",
    heading: "25%",
  },
  {
    value: 50,
    coverType: CoverType.Rare,
    subheading: "",
    heading: "50%",
  },
  {
    value: 75,
    coverType: CoverType.Epic,
    subheading: "",
    heading: "75%",
  },
];
