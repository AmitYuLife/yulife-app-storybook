import React, { memo, useCallback, useMemo } from "react";
import { Navigation } from "@navigation/main";
import { PathwaysScreen } from "@components/screens";
import { gql } from "@graphql/__generated";
import moment from "moment";
import { getMoodSubmission } from "./utils/getMoodSubmission";
import { useDispatch } from "react-redux";
import { ROUTES } from "@navigation/constants";
import { useQueryOnScreenSeen } from "@hooks";

interface Props {
  componentId: string;
}

const PathwaysContainer = ({ componentId }: Props) => {
  const dispatch = useDispatch();
  const onClose = useCallback(() => {
    Navigation.pop(componentId);
  }, [componentId]);

  const [, { data, loading }] = useQueryOnScreenSeen(gql("GetUserPathwaysDocument"), componentId, {
    fetchPolicy: "cache-and-network",
    variables: {
      startDate: moment().startOf("week").format("YYYY-MM-DD"),
      endDate: moment().endOf("week").format("YYYY-MM-DD"),
    },
  });

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
        coins: 140,
        reflectAction: {},
      },
    [data]
  );

  return (
    <PathwaysScreen
      isLoading={loading}
      onClose={onClose}
      onReflect={onReflect}
      onOpenMoodCalendar={onOpenMoodCalendar}
      moodSubmissions={moodSubmissions}
      reflectionProgress={reflectionProgress.currentProgress}
      reflectedToday={reflectionProgress.reflectedToday}
      nextQuestionnaireLocalDate={data?.getUserPathways?.nextQuestionnaireLocalDate ?? ""}
      adviceSection={data?.getUserPathwayAdviceSection || { heading: "", items: [] }}
    />
  );
};

export default memo(PathwaysContainer);
