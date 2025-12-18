import React, { memo, useCallback, useMemo } from "react";
import { Navigation } from "@navigation/main";
import { gql, YuScreenSection } from "@graphql/__generated";
import moment from "moment";
import { getMoodSubmission } from "../utils/get-mood-submission";
import { useDispatch } from "react-redux";
import { ROUTES } from "@navigation/constants";
import { useQueryOnScreenSeen } from "@hooks";
import PathwaysOldScreen from "../screens/pathways-old.screen";
import PathwaysScreen from "../screens/pathways.screen";
import { usePathwayChallenge } from "@components/containers/member/quests/challenges-list/hooks/usePathwayChallenge";

interface Props {
  componentId: string;
}

const PathwaysContainer = ({ componentId }: Props) => {
  const dispatch = useDispatch();
  const onClose = useCallback(() => {
    Navigation.pop(componentId);
  }, [componentId]);

  const [, { data, loading }] = useQueryOnScreenSeen(
    gql("GetUserPathwaysDocument"),
    componentId,
    {
      fetchPolicy: "cache-and-network",
      variables: {
        startDate: moment().startOf("week").format("YYYY-MM-DD"),
        endDate: moment().endOf("week").format("YYYY-MM-DD"),
      },
    },
    {
      fetchImmediately: true,
    }
  );

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
      interventionSections: data?.getInterventionItems?.sections as YuScreenSection[],
      pathwayChallenge: pathwayChallenge,
    }),
    [data, loading, onClose, onReflect, onOpenMoodCalendar, moodSubmissions, reflectionProgress, pathwayChallenge]
  );

  if (!data?.getUserPathways?.isStreaksEnabled) {
    return <PathwaysOldScreen {...props} />;
  }

  return <PathwaysScreen {...props} />;
};

export default memo(PathwaysContainer);
