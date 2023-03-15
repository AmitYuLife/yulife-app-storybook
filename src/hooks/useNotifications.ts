import { Message } from "@leanplum/react-native-sdk";
import Logger from "@services/logging/logger";
import moment from "moment";
import { useCallback, useEffect, useMemo, useState } from "react";

export const useNotifications = () => {
  const [notifications, setNotifications] = useState<Message[]>([]);
  const [isInitialized, setIsInitialized] = useState<boolean>(false);

  const getMessages = useCallback(async () => {
    const inbox = await Logger.leanplum.getInbox();
    setIsInitialized(true);
    setNotifications(
      inbox.allMessages
        .filter((message) => moment(message.deliveryTimestamp).isAfter(moment().subtract(7, "day")))
        .sort((a, b) => moment.utc(b.deliveryTimestamp).unix() - moment.utc(a.deliveryTimestamp).unix())
    );
  }, []);

  const onRefresh = useCallback(() => {
    Logger.leanplum.refreshInbox();
  }, []);

  useEffect(() => {
    onRefresh();

    Logger.leanplum.onInboxUpdate(() => {
      getMessages();
    });

    getMessages();
  }, [getMessages, onRefresh]);

  const onOpen = useCallback((messageId: string) => {
    Logger.leanplum.readInbox(messageId);
  }, []);

  return useMemo(
    () => ({
      notifications,
      onRefresh,
      onOpen,
      isInitialized,
    }),
    [onRefresh, onOpen, isInitialized, notifications]
  );
};
