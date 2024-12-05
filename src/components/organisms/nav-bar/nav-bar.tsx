import React, { memo, useMemo } from "react";
import { useSelector } from "react-redux";
import NavBarView from "./nav-bar.view";
import { getHasNotification as getQuestNotification } from "@redux/levels/levels.selectors";
import { NavBarProps } from "./nav-bar.helpers";
import { getBlackListedNavBarTabs, getTabNotifications } from "@redux/user/user.selectors";
import { Optional } from "@utils";

type NavBarContainerProps = Optional<NavBarProps, "hasQuestNotification" | "tabNotifications" | "suspendedTabs">;

const NavBarContainer = (props: NavBarContainerProps) => {
  const hasQuestNotification = useSelector(getQuestNotification);
  const tabNotifications = useSelector(getTabNotifications);
  const blackListedNavBarTabs = useSelector(getBlackListedNavBarTabs);

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
      tabNotifications={tabNotifications}
    />
  );
};

export default memo(NavBarContainer, () => true);
