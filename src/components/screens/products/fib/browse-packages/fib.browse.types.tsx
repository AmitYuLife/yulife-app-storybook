import { CoverType } from "../../../../../graphql/_core/schema/globalTypes";

interface IPackagePowersProps {
  id: string;
  title: string;
  description: string;
  icon: string;
}
interface IServerPackageProps {
  payoutAmount?: number;
  earnRate: number;
  newEarnRate: number;
  salaryPercentageCovered: number;
  term?: number;
  monthlyAmountProtected?: number;
  actualCost?: number;
  title?: string;
  powers?: IPackagePowersProps[];
  filterBySelected?: boolean;
}

interface ILocalPackageProps {
  id: CoverType;
  label: string;
  descriptionHeading: string;
}

export type Package = IServerPackageProps & ILocalPackageProps;
