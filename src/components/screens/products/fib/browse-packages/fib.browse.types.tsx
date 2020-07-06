import { CoverType } from "../fib.helper";

export interface Package {
  salaryPercentage: number;
  earnRate: number;
  cost: number;
  packageLabel: string;
  coverType: CoverType;
  descriptionHeading: string;
}
