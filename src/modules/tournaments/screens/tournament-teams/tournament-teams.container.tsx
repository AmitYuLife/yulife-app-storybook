import React, { useCallback } from "react";
import { useQuery } from "@apollo/client";
import { useBackHandler } from "@hooks";
import { Navigation } from "@navigation/main";
import { ROUTES } from "@navigation/constants";
import { gql } from "@graphql/__generated";
import TournamentTeamsScreen from "./tournament-teams.screen";
import EventDialogLoadingScreen from "@components/screens/member/events/event-dialog/event-dialog-loading.screen";

interface ITournamentTeamsContainerProps {
  eventId: string;
  componentId: string;
}

const TournamentTeamsContainer = ({ componentId, eventId }: ITournamentTeamsContainerProps) => {
  const { loading, data } = useQuery(gql("GetTournamentLeaderboardDocument"), {
    variables: { eventId },
    fetchPolicy: "network-only",
  });

  const leaderboard = data?.getTournamentLeaderboard;

  useBackHandler(() => {
    Navigation.pop(componentId);
    return true;
  });

  const handleLeftIconPress = useCallback(() => {
    Navigation.pop(componentId);
  }, [componentId]);

  const onTeamPress = useCallback(
    (teamId: string) => {
      Navigation.push(componentId, {
        component: {
          id: ROUTES.tournamentTeamView,
          name: ROUTES.tournamentTeamView,
          passProps: { eventId, teamId },
        },
      });
    },
    [componentId, eventId]
  );

  if (loading || !leaderboard) {
    return <EventDialogLoadingScreen onLeftIconPress={handleLeftIconPress} />;
  }

  return (
    <TournamentTeamsScreen teams={leaderboard.teams} onLeftIconPress={handleLeftIconPress} onTeamPress={onTeamPress} />
  );
};

export default TournamentTeamsContainer;
