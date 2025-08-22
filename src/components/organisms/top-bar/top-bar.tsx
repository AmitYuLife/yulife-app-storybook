import React, { memo, useMemo } from "react";
import { getOnboardingReferralsBadge } from "@redux/onboarding/onboarding.selectors";
import { useSelector } from "react-redux";
import TopBarView from "./top-bar.view";
import { TopBarViewProps } from "./top-bar.helpers";
import { LeftIcon } from "./subcomponents/left";
import { useQuery } from "@apollo/client";
import { gql } from "@graphql/__generated";

export interface TopBarContainerProps extends Omit<TopBarViewProps, "badges"> {
  skipFetchingNotifications?: boolean;
}

const TopBarContainer = (props: TopBarContainerProps) => {
  const {
    onPressLeftIcon,
    timer,
    leftIcons,
    name,
    menuLabel,
    leftRef,
    leftIcon,
    middleLabel,
    type,
    onLayout,
    rightIcon,
    skipFetchingNotifications,
  } = props;

  const { data } = useQuery(gql("GetUserProfileBadgeCountDocument"), {
    fetchPolicy: "cache-only",
    skip: skipFetchingNotifications,
  });

  const hasNotificationBadge = useMemo(
    () => (data?.profile?.badgeCounts?.inboxMessages || 0) > 0,
    [data?.profile?.badgeCounts?.inboxMessages]
  );
  const hasMenuBadge = useSelector(getOnboardingReferralsBadge);

  const badges = useMemo(
    () => ({
      [LeftIcon.MENU]: hasMenuBadge,
      [LeftIcon.NOTIFICATIONS]: hasNotificationBadge,
    }),
    [hasMenuBadge, hasNotificationBadge]
  );

  return (
    <TopBarView
      onPressLeftIcon={onPressLeftIcon}
      timer={timer}
      name={name}
      leftRef={leftRef}
      badges={badges}
      menuLabel={menuLabel}
      leftIcon={leftIcon}
      leftIcons={leftIcons}
      middleLabel={middleLabel}
      type={type}
      onLayout={onLayout}
      rightIcon={rightIcon}
    />
  );
};

export default memo(TopBarContainer);
