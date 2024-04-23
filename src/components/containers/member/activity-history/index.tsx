import React, { memo } from "react";
import ActivityHistoryContainer from "./activity-history.container";

interface IProps {
  componentId: string;
}

const ActivityHistory = ({ componentId }: IProps) => {
  return <ActivityHistoryContainer componentId={componentId} />;
};

export default memo(ActivityHistory);
