import React, { memo, useCallback } from "react";
import NotificationsScreen from "./notifications.screen";
import { Navigation } from "@navigation/main";
import { useNotifications } from "@hooks";

interface IProps {
  componentId: string;
}

const NotificationsContainer = ({ componentId }: IProps) => {
  const { notifications, isInitialized, onRefresh, onOpen } = useNotifications();
  const onClose = useCallback(() => Navigation.pop(componentId), [componentId]);

  return (
    <NotificationsScreen
      onOpen={onOpen}
      notifications={notifications}
      onRefresh={onRefresh}
      onClose={onClose}
      isInitialized={isInitialized}
    />
  );
};

export default memo(NotificationsContainer);
