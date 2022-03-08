import { CoverType } from "@graphql/_core/schema/globalTypes";

export const MIN_AGE = 30;
export const MIN_SALARY_PERCENTAGE = 0.25;
export const MAX_AGE = 70;
export const RANGE = MAX_AGE - MIN_AGE + 1;

export const options = [
  {
    value: 25,
    coverType: CoverType.common,
    subheading: "",
    heading: "25%",
  },
  {
    value: 50,
    coverType: CoverType.rare,
    subheading: "",
    heading: "50%",
  },
  {
    value: 75,
    coverType: CoverType.epic,
    subheading: "",
    heading: "75%",
  },
];
