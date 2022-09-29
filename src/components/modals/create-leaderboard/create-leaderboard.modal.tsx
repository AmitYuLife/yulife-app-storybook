import { GQL_MUTATION_CREATE_LEADERBOARD, CreateLeaderboardMutationTuple } from "@graphql/member";
import { getUserStart } from "@redux/user/user.actions";
import * as React from "react";
import { Keyboard } from "react-native";
import { Navigation } from "react-native-navigation";
import { connect } from "react-redux";
import { CreateLeaderboardScreen } from "@screens";
import { useMutation } from "@apollo/client";
import Logger from "@services/logging/logger";

type ConnectedDispatch = typeof mapDispatchToProps;

interface IProps {
  componentId: string;
}

type Props = IProps & ConnectedDispatch;

const CreateLeaderboardModal: React.FC<Props> = ({ componentId, getUserStart: dispatchGetUserStart }) => {
  const [createLeaderboard, { loading }]: CreateLeaderboardMutationTuple = useMutation(GQL_MUTATION_CREATE_LEADERBOARD);

  const handleClose = () => {
    Keyboard.dismiss();
    Navigation.dismissModal(componentId);
  };

  const handleCreateLeaderboard = async (
    variables: Parameters<CreateLeaderboardMutationTuple["0"]>["0"]["variables"]
  ) => {
    try {
      Keyboard.dismiss();
      await createLeaderboard({ variables });
      dispatchGetUserStart();
      await Navigation.dismissModal(componentId);
    } catch (e) {
      Logger.error(e, { file: "create-leaderboard.modal" });
    }
  };

  return (
    <CreateLeaderboardScreen
      isLoading={loading}
      onCreateLeaderboard={handleCreateLeaderboard}
      onPressClose={handleClose}
    />
  );
};

const mapDispatchToProps = {
  getUserStart,
};

export default connect<null, ConnectedDispatch>(null, mapDispatchToProps)(CreateLeaderboardModal);
