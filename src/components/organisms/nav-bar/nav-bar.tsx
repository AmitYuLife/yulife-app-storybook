import React, { memo, useMemo } from "react";
import { useSelector } from "react-redux";
import NavBarView from "./nav-bar.view";
import { getHasNotification as getQuestNotification } from "@redux/levels/levels.selectors";
import { NavBarProps } from "./nav-bar.helpers";
import { getBlackListedNavBarTabs } from "@redux/user/user.selectors";
import { Optional } from "@utils";
import { useQuery } from "@apollo/client";
import { gql } from "@graphql/__generated";

type NavBarContainerProps = Optional<NavBarProps, "hasQuestNotification" | "badgeCounts" | "suspendedTabs">;

const NavBarContainer = (props: NavBarContainerProps) => {
  const hasQuestNotification = useSelector(getQuestNotification);
  const blackListedNavBarTabs = useSelector(getBlackListedNavBarTabs);

  const { data } = useQuery(gql("GetUserProfileBadgeCountDocument"), { fetchPolicy: "cache-only" });

  const badgeCounts = useMemo(() => data?.profile?.badgeCounts || {}, [data?.profile?.badgeCounts]);
  const suspendedTabs = useMemo(
    () =>
      (blackListedNavBarTabs || []).reduce<Record<string, boolean>>((acc, tab) => {
        acc[tab] = true;
        return acc;
      }, {}),
    [blackListedNavBarTabs]
  );

  return (
    <NavBarView
      activeIndex={props.activeIndex}
      labels={props.labels}
      suspendedTabs={suspendedTabs}
      hasQuestNotification={hasQuestNotification}
      badgeCounts={badgeCounts}
    />
  );
};

export default memo(NavBarContainer, () => true);
