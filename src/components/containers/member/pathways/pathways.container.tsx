import React, { memo, useCallback } from "react";
import { Navigation } from "@navigation/main";
import { PathwaysScreen } from "@components/screens";

interface Props {
  componentId: string;
}

const PathwaysContainer = ({ componentId }: Props) => {
  const onClose = useCallback(() => {
    Navigation.pop(componentId);
  }, [componentId]);

  return <PathwaysScreen onClose={onClose} />;
};

export default memo(PathwaysContainer);
