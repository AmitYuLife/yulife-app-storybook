import React, { useCallback } from "react";
import { useQuery } from "@apollo/client";
import { useBackHandler, useUserFeatures } from "@hooks";
import { Navigation } from "@navigation/main";
import { ROUTES } from "@navigation/constants";
import { gql } from "@graphql/__generated";
import { useSelector } from "react-redux";
import { getCurrentUserId } from "@redux/user/user.selectors";
import TournamentDetailsScreen from "./tournament-details.screen";
import EventDialogLoadingScreen from "@components/screens/member/events/event-dialog/event-dialog-loading.screen";

interface ITournamentDetailsContainerProps {
  eventId: string;
  componentId: string;
  onLeftIconPress?: () => void;
}

const TournamentDetailsContainer = ({ componentId, eventId, onLeftIconPress }: ITournamentDetailsContainerProps) => {
  const currentUserId = useSelector(getCurrentUserId);
  const { tempEnableEnhancedTournament } = useUserFeatures();
  const { loading: detailsLoading, data: detailsData } = useQuery(gql("GetTournamentDetailsDocument"), {
    variables: { eventId },
    fetchPolicy: "network-only",
  });

  const { data: leaderboardData } = useQuery(gql("GetTournamentLeaderboardDocument"), {
    variables: { eventId },
    fetchPolicy: "network-only",
  });

  const currentTeamId = leaderboardData?.getTournamentLeaderboard?.teams?.find((t) => t.includesCurrentUser)?.id;
  const { data: teamData } = useQuery(gql("GetTournamentTeamLeaderboardDocument"), {
    variables: { eventId, teamId: currentTeamId || "" },
    skip: !currentTeamId,
    fetchPolicy: "network-only",
  });

  const tournament = detailsData?.getTournamentDetails;
  const leaderboard = leaderboardData?.getTournamentLeaderboard;
  const myTeam = teamData?.getTournamentTeamLeaderboard;

  useBackHandler(() => {
    Navigation.popToRoot(componentId);
    return true;
  });

  const handleLeftIconPress = useCallback(() => {
    if (onLeftIconPress) {
      return onLeftIconPress();
    }

    return Navigation.pop(componentId);
  }, [onLeftIconPress, componentId]);

  const onViewAllTeams = useCallback(() => {
    Navigation.push(componentId, {
      component: {
        id: ROUTES.tournamentTeams,
        name: ROUTES.tournamentTeams,
        passProps: {
          eventId,
          title: tournament?.title || "Teams",
        },
      },
    });
  }, [componentId, eventId, tournament?.title]);

  const onHowToPlay = useCallback(() => {
    if (!tempEnableEnhancedTournament) return;
    Navigation.push(componentId, {
      component: {
        id: ROUTES.tournamentHowToPlay,
        name: ROUTES.tournamentHowToPlay,
        passProps: {
          aboutTitle: tournament?.about?.title,
          aboutMarkdown: tournament?.about?.markdown,
        },
      },
    });
  }, [componentId, tournament?.about, tempEnableEnhancedTournament]);

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

  if (detailsLoading || !tournament) {
    return <EventDialogLoadingScreen onLeftIconPress={handleLeftIconPress} />;
  }

  return (
    <TournamentDetailsScreen
      myTeam={myTeam}
      title={tournament.title}
      about={tournament.about}
      onHowToPlay={onHowToPlay}
      onTeamPress={onTeamPress}
      labels={tournament.labels}
      teams={leaderboard?.teams}
      banner={tournament.banner}
      button={tournament.button}
      onMemberPress={onMemberPress}
      currentUserId={currentUserId}
      daysLeft={tournament.daysLeft}
      onViewAllTeams={onViewAllTeams}
      onLeftIconPress={handleLeftIconPress}
      headerTextColor={tournament.headerTextColor}
      headerBackgroundColor={tournament.headerBackgroundColor}
      headerImage={tournament.headerImage ? { uri: tournament.headerImage.uri } : undefined}
    />
  );
};

export default TournamentDetailsContainer;
