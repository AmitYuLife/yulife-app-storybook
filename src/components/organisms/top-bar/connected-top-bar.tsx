import React from "react";
import { TopBar, TopBarProps } from "@components/molecules";
import { IReduxState } from "@redux/_core/reducers";
import { getTotalCoins } from "@redux/coins/coins.selectors";
import { connect } from "react-redux";

type ConnectedState = ReturnType<typeof mapStateToProps>;
type OwnProps = TopBarProps;
type Props = OwnProps & ConnectedState;

const TopBarContainer = (props: Props) => <TopBar {...props} />;

const mapStateToProps = (state: IReduxState) => ({
  coins: getTotalCoins(state),
});

export const ConnectedTopBar = connect<ConnectedState, null, OwnProps>(mapStateToProps)(TopBarContainer);
