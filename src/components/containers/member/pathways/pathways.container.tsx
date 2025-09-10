import React, { memo, useCallback, useMemo } from "react";
import { Navigation } from "@navigation/main";
import { PathwaysScreen } from "@components/screens";
import { useQuery } from "@apollo/client";
import { gql } from "@graphql/__generated";
import moment from "moment";
import { getMoodSubmission } from "./utils/getMoodSubmission";

interface Props {
  componentId: string;
}

const PathwaysContainer = ({ componentId }: Props) => {
  const onClose = useCallback(() => {
    Navigation.pop(componentId);
  }, [componentId]);

  const onReflect = useCallback(() => {
    // TODO: use SDUI from sever
  }, []);

  const { data, loading } = useQuery(gql("GetUserPathwaysDocument"), {
    fetchPolicy: "cache-and-network",
    variables: {
      startDate: moment().startOf("week").format("YYYY-MM-DD"),
      endDate: moment().endOf("week").format("YYYY-MM-DD"),
    },
  });

  const moodSubmissions = useMemo(() => getMoodSubmission(data), [data]);

  if (loading) {
    return null;
  }

  return <PathwaysScreen onClose={onClose} onReflect={onReflect} moodSubmissions={moodSubmissions} />;
};

export default memo(PathwaysContainer);
