import React, { useCallback } from "react";
import { Navigation } from "react-native-navigation";
import { connect } from "react-redux";
import { GetCurrentWorld_getCurrentWorld } from "../../../../../graphql/_core/schema";
import { IReduxState } from "../../../../../redux/_core/reducers";
import { getTotalCoins } from "../../../../../redux/coins/coins.selectors";
import { IConnectedScreenProps } from "../../../../../typings";
import { ChallengesHistoryScreen } from "../../../../screens";

type ConnectedState = ReturnType<typeof mapStateToProps>;

interface IProps extends IConnectedScreenProps {
  componentId?: string;
  level: GetCurrentWorld_getCurrentWorld;
  onPressActivityHistory: () => void;
  onPressCta?: () => void;
}

type Props = IProps & ConnectedState;

function ChallengesHistoryContainer({ level, onPressActivityHistory, totalCoins, componentId }: Props) {
  const handleClose = useCallback(() => Navigation.popToRoot(componentId), [componentId]);

  return (
    <ChallengesHistoryScreen
      level={level}
      onPressActivityHistory={onPressActivityHistory}
      onPressCta={handleClose}
      onLeftMenuPress={handleClose}
      totalCoins={totalCoins}
    />
  );
}

const mapStateToProps = (state: IReduxState) => ({
  totalCoins: getTotalCoins(state),
});

export default connect<ConnectedState>(mapStateToProps)(ChallengesHistoryContainer);
