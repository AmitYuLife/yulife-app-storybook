import React, { memo } from "react";
import { IReduxState } from "@redux/_core/reducers";
import { getTotalCoins } from "@redux/coins/coins.selectors";
import { connect } from "react-redux";
import TopBarView from "./top-bar.view";
import { TopBarViewProps } from "./top-bar.helpers";

type ConnectedState = ReturnType<typeof mapStateToProps>;
type TopBarProps = TopBarViewProps & ConnectedState;

const TopBarContainer = (props: TopBarProps) => {
  const { onPressLeftIcon, timer, name, menuLabel, leftIcon, middleLabel, type, coins, onLayout } = props;
  return (
    <TopBarView
      onPressLeftIcon={onPressLeftIcon}
      timer={timer}
      name={name}
      menuLabel={menuLabel}
      leftIcon={leftIcon}
      middleLabel={middleLabel}
      type={type}
      coins={coins}
      onLayout={onLayout}
    />
  );
};

const mapStateToProps = (state: IReduxState) => ({
  coins: getTotalCoins(state),
});

const TopBar = connect<ConnectedState, null, TopBarViewProps>(mapStateToProps)(TopBarContainer);

export default memo(TopBar);
