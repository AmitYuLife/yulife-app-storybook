import React from "react";
import { getTotalCoins } from "@redux/coins/coins.selectors";
import { getOnboardingReferralsBadge } from "@redux/onboarding/onboarding.selectors";
import { useSelector } from "react-redux";
import TopBarView from "./top-bar.view";
import { TopBarViewProps } from "./top-bar.helpers";
import { TOP_BAR_HEIGHT } from "./top-bar.styles";

const TopBarContainer = (props: TopBarViewProps) => {
  const { onPressLeftIcon, timer, name, menuLabel, leftIcon, middleLabel, type, onLayout, rightIcon } = props;
  const coins = useSelector(getTotalCoins);
  const showBadge = useSelector(getOnboardingReferralsBadge);

  return (
    <TopBarView
      onPressLeftIcon={onPressLeftIcon}
      timer={timer}
      name={name}
      menuLabel={menuLabel}
      leftIcon={leftIcon}
      leftIconHasBadge={showBadge}
      middleLabel={middleLabel}
      type={type}
      coins={coins}
      onLayout={onLayout}
      rightIcon={rightIcon}
    />
  );
};

export default Object.assign(TopBarContainer, { HEIGHT: TOP_BAR_HEIGHT });
