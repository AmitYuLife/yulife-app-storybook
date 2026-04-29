import { memo, useCallback, useState } from "react";
import { Alert, Keyboard } from "react-native";
import { useMutation, useQuery } from "@apollo/client";
import { gql } from "@graphql/__generated";
import { Navigation } from "@navigation/main";
import { ROUTES } from "@navigation/constants";
import { useDispatch } from "react-redux";
import { getUserDataStart } from "@redux/user/user.actions";
import TournamentDebugScreen from "@components/screens/member/debug/tournament-debug/tournament-debug.screen";

const TournamentDebugContainer = () => {
  const dispatch = useDispatch();
  const [steps, setSteps] = useState("5000");
  const [selectedTournamentId, setSelectedTournamentId] = useState<string | null>(null);

  const {
    data: tournamentsData,
    loading: tournamentsLoading,
    refetch: refetchTournaments,
  } = useQuery(gql("DebugGetActiveTournamentsDocument"), { fetchPolicy: "network-only" });

  const [endTournamentMutation, { loading: isEndTournamentLoading }] = useMutation(
    gql("DebugEndTournamentEarlyDocument")
  );
  const [resetDataMutation, { loading: isResetDataLoading }] = useMutation(gql("ResetDataDocument"));

  const onLeftIconPress = useCallback(() => {
    Keyboard.dismiss();
    Navigation.pop(ROUTES.debug);
  }, []);

  const onAddSteps = useCallback(async () => {
    Keyboard.dismiss();
    const stepCount = parseInt(steps, 10);

    if (isNaN(stepCount) || stepCount <= 0) {
      Alert.alert("Error", "Please enter a valid step count");
      return;
    }

    try {
      await resetDataMutation({ variables: { code: "add-steps", value: stepCount } });
      Alert.alert("Success", `Added ${stepCount} steps`);
      dispatch(getUserDataStart());
    } catch {
      Alert.alert("Error", "Failed to add steps");
    }
  }, [steps, resetDataMutation, dispatch]);

  const onCreateActiveTournament = useCallback(async () => {
    Keyboard.dismiss();

    try {
      await resetDataMutation({ variables: { code: "create-active-tournament" } });
      await refetchTournaments();
      Alert.alert("Success", "Active tournament created");
      dispatch(getUserDataStart());
    } catch {
      Alert.alert("Error", "Failed to create active tournament");
    }
  }, [resetDataMutation, dispatch, refetchTournaments]);

  const onEndSelectedTournament = useCallback(async () => {
    Keyboard.dismiss();

    if (!selectedTournamentId) {
      Alert.alert("Error", "Please select a tournament first");
      return;
    }

    try {
      await endTournamentMutation({ variables: { tournamentId: selectedTournamentId } });
      Alert.alert("Success", "Tournament ended early");
      setSelectedTournamentId(null);
      dispatch(getUserDataStart());
      refetchTournaments();
    } catch {
      Alert.alert("Error", "Failed to end tournament");
    }
  }, [selectedTournamentId, endTournamentMutation, dispatch, refetchTournaments]);

  const tournaments = (tournamentsData?.debugGetActiveTournaments ?? []).map((t) => ({
    id: t.id,
    name: t.name,
    teamName: t.teamName ?? null,
  }));

  return (
    <TournamentDebugScreen
      steps={steps}
      onStepsChange={setSteps}
      onAddSteps={onAddSteps}
      onEndSelectedTournament={onEndSelectedTournament}
      onCreateActiveTournament={onCreateActiveTournament}
      isEndTournamentLoading={isEndTournamentLoading}
      isResetDataLoading={isResetDataLoading}
      onLeftIconPress={onLeftIconPress}
      tournaments={tournaments}
      selectedTournamentId={selectedTournamentId}
      onSelectTournament={setSelectedTournamentId}
      tournamentsLoading={tournamentsLoading}
    />
  );
};

export default memo(TournamentDebugContainer);
