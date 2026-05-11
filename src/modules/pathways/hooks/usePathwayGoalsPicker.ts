import { useCallback, useEffect, useMemo, useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { Navigation } from "@navigation/main";
import { MODALS } from "@navigation/constants";
import { showYuModal } from "@navigation/root";
import { gql } from "@graphql/__generated";
import {
  IPathwayGoalsPickerOption,
  PATHWAY_GOALS_PICKER_MAX_SELECTION,
  PathwayGoalsPickerChoice,
  PathwayGoalsPickerMode,
} from "../types/pathway-goals-picker.types";

interface IUsePathwayGoalsPickerParams {
  componentId: string;
}

export const usePathwayGoalsPicker = ({ componentId }: IUsePathwayGoalsPickerParams) => {
  const { data, loading: isLoadingGoals } = useQuery(gql("GetAvailablePathwayGoalsDocument"), {
    fetchPolicy: "network-only",
  });

  const [setCycle, { loading: isSubmitting }] = useMutation(gql("SetPathwayGoalCycleDocument"), {
    refetchQueries: [gql("GetUserPathwayGoalsSectionDocument")],
    awaitRefetchQueries: true,
  });

  const goals: IPathwayGoalsPickerOption[] = useMemo(
    () => data?.getAvailablePathwayGoals.goals ?? [],
    [data?.getAvailablePathwayGoals]
  );

  const [currentIndex, setCurrentIndex] = useState(0);
  const [choices, setChoices] = useState<(PathwayGoalsPickerChoice | undefined)[]>([]);
  const [mode, setMode] = useState<PathwayGoalsPickerMode>(PathwayGoalsPickerMode.Picking);

  useEffect(() => {
    if (!isLoadingGoals && goals.length === 0) {
      Navigation.popToRoot(componentId);
    }
  }, [componentId, goals.length, isLoadingGoals]);

  const selectedGoals = useMemo(
    () => goals.filter((_, index) => choices[index] === PathwayGoalsPickerChoice.Accept),
    [goals, choices]
  );
  const acceptedCount = selectedGoals.length;
  const currentChoice = choices[currentIndex];
  const canAcceptMore =
    acceptedCount < PATHWAY_GOALS_PICKER_MAX_SELECTION || currentChoice === PathwayGoalsPickerChoice.Accept;
  const canContinue = currentChoice !== undefined;

  const showConnectionErrorModal = useCallback(() => {
    showYuModal({
      component: {
        id: MODALS.genericConnectionError,
        name: MODALS.genericConnectionError,
        passProps: {
          onPress: () => Navigation.dismissModal(MODALS.genericConnectionError),
        },
      },
    });
  }, []);

  const setChoiceAt = useCallback((index: number, choice: PathwayGoalsPickerChoice) => {
    setChoices((prev) => {
      const next = [...prev];
      next[index] = choice;
      return next;
    });
  }, []);

  const onAccept = useCallback(() => {
    if (!canAcceptMore) {
      return;
    }

    setChoiceAt(currentIndex, PathwayGoalsPickerChoice.Accept);
  }, [canAcceptMore, currentIndex, setChoiceAt]);

  const onSkip = useCallback(() => {
    setChoiceAt(currentIndex, PathwayGoalsPickerChoice.Skip);
  }, [currentIndex, setChoiceAt]);

  const onContinue = useCallback(async () => {
    if (!canContinue || isSubmitting) {
      return;
    }

    const isLastGoal = currentIndex >= goals.length - 1;
    const isMaxReached = acceptedCount >= PATHWAY_GOALS_PICKER_MAX_SELECTION;

    if (isLastGoal && acceptedCount === 0) {
      Navigation.popToRoot(componentId);
      return;
    }

    if (isMaxReached || isLastGoal) {
      try {
        await setCycle({ variables: { input: { pathwayItemIds: selectedGoals.map((g) => g.id) } } });
      } catch {
        showConnectionErrorModal();
        return;
      }

      setMode(PathwayGoalsPickerMode.Recap);
      return;
    }

    setCurrentIndex((index) => index + 1);
  }, [
    acceptedCount,
    canContinue,
    componentId,
    currentIndex,
    goals.length,
    isSubmitting,
    selectedGoals,
    setCycle,
    showConnectionErrorModal,
  ]);

  const onBack = useCallback(() => {
    if (currentIndex === 0) {
      return;
    }

    setCurrentIndex(currentIndex - 1);
  }, [currentIndex]);

  const onConfirm = useCallback(() => {
    Navigation.popToRoot(componentId);
  }, [componentId]);

  const handleHardwareBack = useCallback(() => {
    if (mode !== PathwayGoalsPickerMode.Picking || currentIndex === 0) {
      Navigation.popToRoot(componentId);
      return true;
    }

    onBack();
    return true;
  }, [componentId, currentIndex, onBack, mode]);

  const currentGoal = goals[currentIndex];

  return {
    isLoading: isLoadingGoals && goals.length === 0,
    isSubmitting,
    mode,
    currentGoal,
    currentIndex,
    totalGoals: goals.length,
    selectedGoals,
    currentChoice,
    canAcceptMore,
    canContinue,
    onAccept,
    onSkip,
    onContinue,
    onConfirm,
    onBack,
    handleHardwareBack,
  };
};

export type UsePathwayGoalsPickerReturn = ReturnType<typeof usePathwayGoalsPicker>;
