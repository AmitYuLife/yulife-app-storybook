import React, { memo, useCallback, useMemo } from "react";
import { Navigation } from "@navigation/main";
import { FeatureCardSection, WellbeingHubSection } from "@graphql/__generated";
import { getMoodSubmission } from "../utils/get-mood-submission.util";
import { useDispatch } from "react-redux";
import { ROUTES } from "@navigation/constants";
import { useUserFeatures } from "@hooks";
import PathwaysOldScreen from "../screens/pathways-old.screen";
import PathwaysScreen from "../screens/pathways.screen";
import { usePathwayChallenge } from "@components/containers/member/quests/challenges-list/hooks/usePathwayChallenge";
import { usePathways } from "../hooks/usePathways";

interface Props {
  componentId: string;
}

const PathwaysContainer = ({ componentId }: Props) => {
  const dispatch = useDispatch();
  const onClose = useCallback(() => {
    Navigation.pop(componentId);
  }, [componentId]);

  const { tempGameEnablePathwaysStreaks } = useUserFeatures();

  const { data, loading, isStreakComplete } = usePathways(componentId);

  const { pathwayChallenge } = usePathwayChallenge({ componentId });

  const moodSubmissions = useMemo(() => getMoodSubmission(data), [data]);

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

  const props = useMemo(
    () => ({
      isLoading: loading,
      onClose: onClose,
      onReflect: onReflect,
      onOpenMoodCalendar: onOpenMoodCalendar,
      moodSubmissions: moodSubmissions,
      reflectionProgress: reflectionProgress.currentProgress,
      coinAwards: reflectionProgress.coinAwards,
      reflectedToday: reflectionProgress.reflectedToday,
      maxProgress: reflectionProgress.maxProgress,
      nextQuestionnaireLocalDate: data?.getUserPathways?.nextQuestionnaireLocalDate ?? "",
      adviceSection: data?.getUserPathwayAdviceSection,
      interventionSections: data?.getInterventionItems?.sections as Array<FeatureCardSection | WellbeingHubSection>,
      pathwayChallenge: pathwayChallenge,
      isStreakComplete: isStreakComplete,
    }),
    [
      data,
      loading,
      onClose,
      onReflect,
      onOpenMoodCalendar,
      moodSubmissions,
      reflectionProgress,
      pathwayChallenge,
      isStreakComplete,
    ]
  );

  if (!tempGameEnablePathwaysStreaks) {
    return <PathwaysOldScreen {...props} />;
  }

  return <PathwaysScreen {...props} />;
};

export default memo(PathwaysContainer);
