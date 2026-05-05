import { useCallback } from "react";
import { useMutation, useQuery } from "@apollo/client";
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

  const {
    loading: detailsLoading,
    data: detailsData,
    refetch: refetchDetails,
  } = useQuery(gql("GetTournamentDetailsDocument"), { variables: { eventId }, fetchPolicy: "network-only" });

  const tournament = detailsData?.getTournamentDetails;
  const hasJoined = !!tournament?.hasJoined;

  const { data: leaderboardData, refetch: refetchLeaderboard } = useQuery(gql("GetTournamentLeaderboardDocument"), {
    variables: { eventId },
    skip: !hasJoined,
    fetchPolicy: "network-only",
  });

  const leaderboard = leaderboardData?.getTournamentLeaderboard;

  const { data: myTeamData, refetch: refetchMyTeam } = useQuery(gql("GetTournamentTeamLeaderboardDocument"), {
    variables: { eventId },
    skip: !hasJoined,
    fetchPolicy: "network-only",
  });

  const [joinGoal, { loading: joining }] = useMutation(gql("JoinGoalDocument"));

  const myTeam = myTeamData?.getTournamentTeamLeaderboard;

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
    if (!tempEnableEnhancedTournament) {
      return;
    }

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

  const onJoinPress = useCallback(async () => {
    await joinGoal({ variables: { goalId: eventId } });
    await Promise.all([refetchDetails(), refetchLeaderboard(), refetchMyTeam()]);
  }, [joinGoal, eventId, refetchDetails, refetchLeaderboard, refetchMyTeam]);

  if (detailsLoading || !tournament) {
    return <EventDialogLoadingScreen onLeftIconPress={handleLeftIconPress} />;
  }

  return (
    <TournamentDetailsScreen
      myTeam={myTeam ?? undefined}
      hasJoined={hasJoined}
      title={tournament.title}
      about={tournament.about}
      onHowToPlay={onHowToPlay}
      labels={tournament.labels ?? undefined}
      teams={leaderboard?.teams}
      banner={tournament.banner}
      onMemberPress={onMemberPress}
      currentUserId={currentUserId}
      daysLeft={tournament.daysLeft ?? undefined}
      onViewAllTeams={onViewAllTeams}
      onLeftIconPress={handleLeftIconPress}
      onJoinPress={onJoinPress}
      joining={joining}
      headerTextColor={tournament.headerTextColor}
      headerBackgroundColor={tournament.headerBackgroundColor}
      headerImage={tournament.headerImage?.uri ? { uri: tournament.headerImage.uri } : undefined}
    />
  );
};

export default TournamentDetailsContainer;
