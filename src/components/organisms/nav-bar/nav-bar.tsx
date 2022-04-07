import React, { memo } from "react";
import { connect } from "react-redux";
import NavBarView from "./nav-bar.view";
import { IReduxState } from "@redux/_core/reducers";
import { getHasNotification } from "@redux/levels/levels.selectors";
import { NavBarProps } from "./nav-bar.helpers";
import { getYuScreenNotification } from "@redux/user/user.selectors";

type ConnectedState = ReturnType<typeof mapStateToProps>;
type NavBarContainerProps = NavBarProps & ConnectedState;

const NavBarContainer = (props: NavBarContainerProps) => (
  <NavBarView
    activeIndex={props.activeIndex}
    hasNotification={props.hasNotification}
    labels={props.labels}
    highlightedLabel={props.highlightedLabel}
    additionalBottom={props.additionalBottom}
    hasYuScreenNotification={props.hasYuScreenNotification}
  />
);

const mapStateToProps = (state: IReduxState) => ({
  hasNotification: getHasNotification(state),
  hasYuScreenNotification: getYuScreenNotification(state),
});

const NavBar = connect<ConnectedState, null, NavBarProps>(mapStateToProps)(NavBarContainer);

export default memo(NavBar, () => true);
