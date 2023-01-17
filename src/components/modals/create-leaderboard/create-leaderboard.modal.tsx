import { GQL_MUTATION_CREATE_LEADERBOARD, CreateLeaderboardMutationTuple } from "@graphql/member";
import { getUserLeaderboardsStart } from "@redux/user/user.actions";
import * as React from "react";
import { Keyboard } from "react-native";
import { Navigation } from "@navigation/main";
import { useDispatch } from "react-redux";
import { CreateLeaderboardScreen } from "@screens";
import { useMutation } from "@apollo/client";
import Logger from "@services/logging/logger";
import { memo, useCallback } from "react";

interface IProps {
  componentId: string;
}

const CreateLeaderboardModal = ({ componentId }: IProps) => {
  const dispatch = useDispatch();
  const [createLeaderboard, { loading }]: CreateLeaderboardMutationTuple = useMutation(GQL_MUTATION_CREATE_LEADERBOARD);

  const handleClose = () => {
    Keyboard.dismiss();
    Navigation.dismissModal(componentId);
  };

  const handleCreateLeaderboard = useCallback(
    async (variables: Parameters<CreateLeaderboardMutationTuple["0"]>["0"]["variables"]) => {
      try {
        Keyboard.dismiss();
        await createLeaderboard({ variables });
        dispatch(getUserLeaderboardsStart());

        await Navigation.dismissModal(componentId);
      } catch (e) {
        Logger.error(e, { file: "create-leaderboard.modal" });
      }
    },
    [dispatch, componentId, createLeaderboard]
  );

  return (
    <CreateLeaderboardScreen
      isLoading={loading}
      onCreateLeaderboard={handleCreateLeaderboard}
      onPressClose={handleClose}
    />
  );
};

export default memo(CreateLeaderboardModal);
