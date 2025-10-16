import React, { memo, useCallback, useMemo } from "react";
import { Navigation } from "@navigation/main";
import { PathwaysScreen } from "@components/screens";
import { useQuery } from "@apollo/client";
import { gql } from "@graphql/__generated";
import moment from "moment";
import { getMoodSubmission } from "./utils/getMoodSubmission";
import { useDispatch } from "react-redux";

interface Props {
  componentId: string;
}

const PathwaysContainer = ({ componentId }: Props) => {
  const dispatch = useDispatch();
  const onClose = useCallback(() => {
    Navigation.pop(componentId);
  }, [componentId]);

  const { data, loading } = useQuery(gql("GetUserPathwaysDocument"), {
    fetchPolicy: "cache-and-network",
    variables: {
      startDate: moment().startOf("week").format("YYYY-MM-DD"),
      endDate: moment().endOf("week").format("YYYY-MM-DD"),
    },
  });

  const moodSubmissions = useMemo(() => getMoodSubmission(data), [data]);

  const onReflect = useCallback(() => {
    dispatch(data?.getUserPathways?.reflectionProgress.reflectAction);
  }, [data?.getUserPathways?.reflectionProgress.reflectAction]);

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

  if (loading) {
    return null;
  }

  return (
    <PathwaysScreen
      onClose={onClose}
      onReflect={onReflect}
      moodSubmissions={moodSubmissions}
      reflectionProgress={reflectionProgress.currentProgress}
      reflectedToday={reflectionProgress.reflectedToday}
    />
  );
};

export default memo(PathwaysContainer);
