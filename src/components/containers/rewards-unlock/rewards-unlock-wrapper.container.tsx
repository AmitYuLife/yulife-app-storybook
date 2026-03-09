import { memo } from "react";
import RewardsUnlockOldContainer from "./rewards-unlock-old.container";
import RewardsUnlockContainer from "./rewards-unlock.container";
import { useUserFeatures } from "@hooks";

interface RewardsUnlockWrapperProps {
  showNavigation?: boolean;
  onPressWallet?: () => void;
  isInnerScreen?: boolean;
  passType?: string;
}

const RewardsUnlockWrapper = (props: RewardsUnlockWrapperProps) => {
  const { tempGameEnableNewRewardScreen } = useUserFeatures();

  if (!tempGameEnableNewRewardScreen) {
    return <RewardsUnlockOldContainer {...props} />;
  }

  return <RewardsUnlockContainer {...props} />;
};

export default memo(RewardsUnlockWrapper);
