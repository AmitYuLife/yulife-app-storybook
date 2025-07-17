import React, { memo, useMemo } from "react";
import { getOnboardingReferralsBadge } from "@redux/onboarding/onboarding.selectors";
import { useSelector } from "react-redux";
import TopBarView from "./top-bar.view";
import { TopBarViewProps } from "./top-bar.helpers";
import { LeftIcon } from "./subcomponents/left";
import { useQuery } from "@apollo/client";
import { gql } from "@graphql/__generated";

export interface TopBarContainerProps extends Omit<TopBarViewProps, "badges" | "badgeProps"> {
  skipFetchingNotifications?: boolean;
}

const TopBarContainer = (props: TopBarContainerProps) => {
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
    skipFetchingNotifications,
  } = props;
  const { data } = useQuery(gql("GetUserProfileBadgeCountDocument"), {
    fetchPolicy: "cache-only",
    skip: skipFetchingNotifications,
  });

  const hasMenuBadge = useSelector(getOnboardingReferralsBadge);

  const badges = useMemo(
    () => ({
      [LeftIcon.MENU]: hasMenuBadge,
    }),
    [hasMenuBadge]
  );

  const badgeProps = useMemo(
    () => ({
      [LeftIcon.NOTIFICATIONS]: {
        count: data?.profile?.badgeCounts?.inboxMessages || 0,
      } as const,
    }),
    [data?.profile?.badgeCounts?.inboxMessages]
  );

  return (
    <TopBarView
      onPressLeftIcon={onPressLeftIcon}
      timer={timer}
      name={name}
      badges={badges}
      badgeProps={badgeProps}
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
