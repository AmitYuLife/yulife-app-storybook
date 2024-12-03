import React, { memo, useMemo } from "react";
import { getOnboardingReferralsBadge } from "@redux/onboarding/onboarding.selectors";
import { useSelector } from "react-redux";
import TopBarView from "./top-bar.view";
import { TopBarViewProps } from "./top-bar.helpers";
import { LeftIcon } from "./subcomponents/left";
import { useQuery } from "@apollo/client";
import { gql } from "@graphql/__generated";

const CACHE_ONLY_OPTIONS = { fetchPolicy: "cache-only" as const };

const TopBarContainer = (props: Omit<TopBarViewProps, "badges">) => {
  const { onPressLeftIcon, timer, leftIcons, name, menuLabel, leftIcon, middleLabel, type, onLayout, rightIcon } =
    props;

  const { data } = useQuery(gql("GetUserProfileDocument"), CACHE_ONLY_OPTIONS);

  const hasNotificationBadge = useMemo(
    () => !!data?.getUserProfile?.notification?.hasUnreadInboxMessages,
    [data?.getUserProfile?.notification?.hasUnreadInboxMessages]
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
