import * as React from "react";
import { ILeaderboard } from "../../../../redux/user/user.reducer";
import ChooseLeaderboardScreen from "../../../screens/member/leaderboards/choose-leaderboard/choose-leaderboard.screen";
import LeaderboardInfoScreen from "../../../screens/member/leaderboards/leaderboard-info/leaderboard-info.screen";
import { Navigation } from "react-native-navigation";

interface IProps {
  componentId: string;
  leaderboards?: ILeaderboard[];
  activePage?: number;
  onChangeActiveLeaderboard?: (index: number) => void;
  showInfo?: boolean;
}

function ChooseLeaderboard(props: IProps) {
  const { leaderboards, activePage, onChangeActiveLeaderboard, componentId, showInfo } = props;

  function handleBackPress() {
    Navigation.popToRoot(componentId);
  }

  if (showInfo) {
    return <LeaderboardInfoScreen componentId={componentId} onLeftIconPress={handleBackPress} />;
  }

  return (
    <ChooseLeaderboardScreen
      componentId={componentId}
      leaderboards={leaderboards}
      activePage={activePage}
      onChangeActiveLeaderboard={onChangeActiveLeaderboard}
      onLeftIconPress={handleBackPress}
    />
  );
}

export default ChooseLeaderboard;
