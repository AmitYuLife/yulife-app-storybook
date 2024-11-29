import React, { memo, useCallback } from "react";
import NotificationsScreen from "./notifications.screen";
import { Navigation } from "@navigation/main";
import { useNotifications } from "@hooks";

interface IProps {
  componentId: string;
}

const NotificationsContainer = ({ componentId }: IProps) => {
  const { messages, fetchNotifications, isInitialized, onOpen, maximumAgeOfMessageInDays } = useNotifications();
  const onClose = useCallback(() => Navigation.pop(componentId), [componentId]);

  return (
    <NotificationsScreen
      onOpen={onOpen}
      notifications={messages}
      onRefresh={fetchNotifications}
      onClose={onClose}
      isInitialized={isInitialized}
      maximumAgeOfMessageInDays={maximumAgeOfMessageInDays}
    />
  );
};

export default memo(NotificationsContainer);
