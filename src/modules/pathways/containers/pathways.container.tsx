import { memo, useCallback, useEffect, useMemo, useRef } from "react";
import { Navigation } from "@navigation/main";
import { FeatureCardSection, WellbeingHubSection } from "@graphql/__generated";
import { PathwayAdviceSectionProps } from "../components/pathways-advice-section/pathways-advice-section";
import { getMoodSubmission } from "../utils/get-mood-submission.util";
import { useDispatch } from "react-redux";
import { ROUTES } from "@navigation/constants";
import PathwaysScreen from "../screens/pathways.screen";
import { usePathwayChallenge } from "@components/containers/member/quests/challenges-list/hooks/usePathwayChallenge";
import { usePathways } from "../hooks/usePathways";
import { usePathwayGoals } from "../hooks/usePathwayGoals";

interface Props {
  componentId: string;
}

const PathwaysContainer = ({ componentId }: Props) => {
  const dispatch = useDispatch();
  const onClose = useCallback(() => {
    Navigation.pop(componentId);
  }, [componentId]);

  const { data, loading, error, isStreakComplete } = usePathways(componentId);

  const { pathwayChallenge } = usePathwayChallenge({ componentId });

  const {
    goals,
    daysLeft: goalsDaysLeft,
    hasData: hasGoalsData,
    completeGoal,
    isCompletingGoal,
    bannerEvent,
    dismissBannerEvent,
  } = usePathwayGoals();

  const onOpenGoalsHistory = useCallback(() => {
    Navigation.push(componentId, {
      component: {
        id: ROUTES.goalsHistory,
        name: ROUTES.goalsHistory,
      },
    });
  }, [componentId]);

  const moodSubmissions = useMemo(() => getMoodSubmission(data), [data]);
  const hasLoadedOnce = useRef(false);

  const onReflect = useCallback(() => {
    dispatch(data?.getUserPathways?.reflectionProgress.reflectAction);
  }, [dispatch, data?.getUserPathways?.reflectionProgress.reflectAction]);

  const onOpenMoodCalendar = useCallback(() => {
    Navigation.push(componentId, {
      component: {
        id: ROUTES.moodCalendar,
        name: ROUTES.moodCalendar,
      },
    });
  }, [componentId]);

  const reflectionProgress = useMemo(
    () =>
      data?.getUserPathways?.reflectionProgress || {
        currentProgress: 0,
        reflectedToday: false,
        coinAwards: [0, 0, 0, 0, 0],
        reflectAction: {},
        currentStreak: 0,
        maxProgress: 5,
      },
    [data]
  );

  useEffect(() => {
    if (!loading && (data || error)) {
      hasLoadedOnce.current = true;
    }
  }, [loading, data, error]);

  const props = useMemo(
    () => ({
      isLoading: !hasLoadedOnce.current && (loading || !!error),
      onClose: onClose,
      onReflect: onReflect,
      onOpenMoodCalendar: onOpenMoodCalendar,
      moodSubmissions: moodSubmissions,
      reflectionProgress: reflectionProgress.currentProgress,
      coinAwards: reflectionProgress.coinAwards,
      reflectedToday: reflectionProgress.reflectedToday,
      maxProgress: reflectionProgress.maxProgress,
      nextQuestionnaireLocalDate: data?.getUserPathways?.nextQuestionnaireLocalDate ?? "",
      adviceSection: data?.getUserPathwayAdviceSection as PathwayAdviceSectionProps | undefined,
      interventionSections: data?.getInterventionItems?.sections as Array<FeatureCardSection | WellbeingHubSection>,
      pathwayChallenge: pathwayChallenge,
      isStreakComplete: isStreakComplete,
      goals: goals,
      goalsDaysLeft: goalsDaysLeft,
      showGoalsSection: hasGoalsData && goals.length > 0,
      onCompleteGoal: completeGoal,
      isCompletingGoal: isCompletingGoal,
      onOpenGoalsHistory: onOpenGoalsHistory,
      goalsBannerEvent: bannerEvent,
      onDismissGoalsBanner: dismissBannerEvent,
    }),
    [
      loading,
      error,
      onClose,
      onReflect,
      onOpenMoodCalendar,
      moodSubmissions,
      reflectionProgress.currentProgress,
      reflectionProgress.coinAwards,
      reflectionProgress.reflectedToday,
      reflectionProgress.maxProgress,
      data?.getUserPathways?.nextQuestionnaireLocalDate,
      data?.getUserPathwayAdviceSection,
      data?.getInterventionItems?.sections,
      pathwayChallenge,
      isStreakComplete,
      goals,
      goalsDaysLeft,
      hasGoalsData,
      completeGoal,
      isCompletingGoal,
      onOpenGoalsHistory,
      bannerEvent,
      dismissBannerEvent,
    ]
  );

  return <PathwaysScreen {...props} />;
};

export default memo(PathwaysContainer);
