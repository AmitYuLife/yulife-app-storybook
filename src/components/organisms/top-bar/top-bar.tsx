import React from "react";
import { getTotalCoins } from "@redux/coins/coins.selectors";
import { useSelector } from "react-redux";
import TopBarView from "./top-bar.view";
import { TopBarViewProps } from "./top-bar.helpers";
import { TOP_BAR_HEIGHT } from "./top-bar.styles";

const TopBarContainer = (props: TopBarViewProps) => {
  const { onPressLeftIcon, timer, name, menuLabel, leftIcon, middleLabel, type, onLayout } = props;
  const coins = useSelector(getTotalCoins);

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

export default Object.assign(TopBarContainer, { HEIGHT: TOP_BAR_HEIGHT });
