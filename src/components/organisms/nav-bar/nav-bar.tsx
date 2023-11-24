import React, { memo } from "react";
import { useSelector } from "react-redux";
import NavBarView from "./nav-bar.view";
import { getHasNotification as getQuestNotification } from "@redux/levels/levels.selectors";
import { NavBarProps } from "./nav-bar.helpers";
import { getTabNotifications } from "@redux/user/user.selectors";
import { Optional } from "@utils";

type NavBarContainerProps = Optional<NavBarProps, "hasQuestNotification" | "tabNotifications">;

const NavBarContainer = (props: NavBarContainerProps) => {
  const hasQuestNotification = useSelector(getQuestNotification);
  const tabNotifications = useSelector(getTabNotifications);

  return (
    <NavBarView
      activeIndex={props.activeIndex}
      labels={props.labels}
      additionalBottom={props.additionalBottom}
      hasQuestNotification={hasQuestNotification}
      tabNotifications={tabNotifications}
    />
  );
};

export default memo(NavBarContainer, () => true);
