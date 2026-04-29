import { memo, useCallback } from "react";
import PathwaysGoalsHistoryScreen from "@app/modules/pathways/screens/pathways-goals-history.screen";
import { ROUTES } from "@navigation/constants";
import { Navigation } from "@navigation/main";

const PathwaysGoalsHistoryContainer = () => {
  const onClose = useCallback(() => {
    Navigation.pop(ROUTES.goalsHistory);
  }, []);

  return <PathwaysGoalsHistoryScreen onClose={onClose} sections={[]} loading={false} />;
};

export default memo(PathwaysGoalsHistoryContainer);
