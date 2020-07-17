import { PackageId } from "../fib.helper";

export interface Package {
  estimatedCost: number;
  earnRate: number;
  salaryPercentageCovered: number;
  label: string;
  descriptionHeading: string;
  id: PackageId;
}
