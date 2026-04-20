import React, { useCallback } from "react";
import { useQuery } from "@apollo/client";
import { useBackHandler } from "@hooks";
import { Navigation } from "@navigation/main";
import { ROUTES } from "@navigation/constants";
import { gql } from "@graphql/__generated";
import TournamentTeamViewScreen from "./tournament-team-view.screen";
import EventDialogLoadingScreen from "@components/screens/member/events/event-dialog/event-dialog-loading.screen";

interface ITournamentTeamViewContainerProps {
  eventId: string;
  teamId: string;
  componentId: string;
}

const TournamentTeamViewContainer = ({ componentId, eventId, teamId }: ITournamentTeamViewContainerProps) => {
  const { loading, data } = useQuery(gql("GetTournamentTeamLeaderboardDocument"), {
    variables: { eventId, teamId },
    fetchPolicy: "network-only",
  });

  const team = data?.getTournamentTeamLeaderboard;

  useBackHandler(() => {
    Navigation.pop(componentId);
    return true;
  });

  const handleLeftIconPress = useCallback(() => {
    Navigation.pop(componentId);
  }, [componentId]);

  const onMemberPress = useCallback(
    (userId: string) => {
      Navigation.push(componentId, {
        component: {
          id: ROUTES.inspect,
          name: ROUTES.inspect,
          passProps: { userId },
        },
      });
    },
    [componentId]
  );

  if (loading || !team) {
    return <EventDialogLoadingScreen onLeftIconPress={handleLeftIconPress} />;
  }

  return <TournamentTeamViewScreen team={team} onLeftIconPress={handleLeftIconPress} onMemberPress={onMemberPress} />;
};

export default TournamentTeamViewContainer;
