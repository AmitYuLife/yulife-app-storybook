import React from "react";
import { getOnboardingReferralsBadge } from "@redux/onboarding/onboarding.selectors";
import { useSelector } from "react-redux";
import TopBarView from "./top-bar.view";
import { TopBarViewProps } from "./top-bar.helpers";
import { TOP_BAR_HEIGHT } from "./top-bar.styles";

const TopBarContainer = (props: TopBarViewProps) => {
  const {
    onPressLeftIcon,
    timer,
    leftIcons,
    name,
    menuLabel,
    leftIcon,
    middleLabel,
    type,
    onLayout,
    rightIcon,
  } = props;
  const showBadge = useSelector(getOnboardingReferralsBadge);

  return (
    <TopBarView
      onPressLeftIcon={onPressLeftIcon}
      timer={timer}
      name={name}
      menuLabel={menuLabel}
      leftIcon={leftIcon}
      leftIconHasBadge={showBadge}
      leftIcons={leftIcons}
      middleLabel={middleLabel}
      type={type}
      onLayout={onLayout}
      rightIcon={rightIcon}
    />
  );
};

export default Object.assign(TopBarContainer, { HEIGHT: TOP_BAR_HEIGHT });
