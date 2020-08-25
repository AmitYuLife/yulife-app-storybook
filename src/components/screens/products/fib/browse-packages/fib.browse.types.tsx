import { PackageId } from "../fib.helper";

interface IServerPackageProps {
  payoutAmount: number;
  estimatedCost: number;
  earnRate: number;
  newEarnRate: number;
  salaryPercentageCovered: number;
  term: number;
  monthlyAmountProtected: number;
}

interface ILocalPackageProps {
  id: PackageId;
  label: string;
  descriptionHeading: string;
}

export type Package = IServerPackageProps & ILocalPackageProps;
