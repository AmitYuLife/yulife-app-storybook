import React, { memo } from "react";
import { useUserFeatures } from "@hooks";
import ActivityHistoryContainerLegacy from "./_legacy/activity-history.container";
import ActivityHistoryContainer from "./activity-history.container";

interface IProps {
  componentId: string;
}

const ActivityHistory = ({ componentId }: IProps) => {
  const { tempGameEnableNewActivityHistory } = useUserFeatures();

  return tempGameEnableNewActivityHistory ? (
    <ActivityHistoryContainer componentId={componentId} />
  ) : (
    <ActivityHistoryContainerLegacy componentId={componentId} />
  );
};

export default memo(ActivityHistory);
