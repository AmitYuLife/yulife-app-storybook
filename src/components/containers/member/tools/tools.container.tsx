import React, { memo, useCallback } from "react";
import { Navigation } from "react-native-navigation";
import ToolsScreen from "@components/screens/member/tools/tools.screen";

interface IOwnProps {
  componentId: string;
}

const ToolsContainer = ({ componentId }: IOwnProps) => {
  const handleClose = useCallback(() => Navigation.popToRoot(componentId), [componentId]);
  return <ToolsScreen onClose={handleClose} />;
};

export default memo(ToolsContainer);
