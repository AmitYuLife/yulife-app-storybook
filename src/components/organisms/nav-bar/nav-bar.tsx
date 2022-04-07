import React, { memo } from "react";
import { useSelector } from "react-redux";
import NavBarView from "./nav-bar.view";
import { getHasNotification as getQuestNotification } from "@redux/levels/levels.selectors";
import { NavBarProps } from "./nav-bar.helpers";
import { getYuScreenNotification } from "@redux/user/user.selectors";

type NavBarContainerProps = NavBarProps;

const NavBarContainer = (props: NavBarContainerProps) => {
  const hasQuestNotification = useSelector(getQuestNotification);
  const hasYuScreenNotification = useSelector(getYuScreenNotification);

  return (
    <NavBarView
      activeIndex={props.activeIndex}
      hasNotification={hasQuestNotification}
      labels={props.labels}
      highlightedLabel={props.highlightedLabel}
      additionalBottom={props.additionalBottom}
      hasYuScreenNotification={hasYuScreenNotification}
    />
  );
};

export default memo(NavBarContainer, () => true);
