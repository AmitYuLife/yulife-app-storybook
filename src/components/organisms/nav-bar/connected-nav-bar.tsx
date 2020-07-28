import React from "react";
import { connect } from "react-redux";
import { NavBar, NavBarProps } from "@components/molecules";
import { IReduxState } from "@redux/_core/reducers";
import { getHasNotification } from "@redux/levels/levels.selectors";

type ConnectedState = ReturnType<typeof mapStateToProps>;
type OwnProps = NavBarProps;
type Props = OwnProps & ConnectedState;

const NavBarContainer = (props: Props) => <NavBar {...props} />;

const mapStateToProps = (state: IReduxState) => ({
  hasNotification: getHasNotification(state),
});

export const ConnectedNavBar = connect<ConnectedState, null, OwnProps>(mapStateToProps)(NavBarContainer);
