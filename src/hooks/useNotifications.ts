import { Leanplum, LeanplumInbox, Message } from "@leanplum/react-native-sdk";
import moment from "moment";
import { useCallback, useEffect, useMemo, useState } from "react";

export const useNotifications = () => {
  const [notifications, setNotifications] = useState<Message[]>([]);
  const [isInitialized, setIsInitialized] = useState<boolean>(false);

  const getMessages = useCallback(async () => {
    const inbox = await LeanplumInbox.inbox();
    setIsInitialized(true);
    setNotifications(
      inbox.allMessages
        .filter((message) => moment(message.deliveryTimestamp).isAfter(moment().subtract(7, "day")))
        .sort(function (a, b) {
          return moment.utc(b.deliveryTimestamp).diff(moment.utc(a.deliveryTimestamp));
        })
    );
  }, []);

  useEffect(() => {
    LeanplumInbox.onForceContentUpdate(() => {
      getMessages();
    });

    getMessages();
  }, [getMessages]);

  const onRefresh = useCallback(() => {
    Leanplum.forceContentUpdate();
  }, []);

  const onOpen = useCallback((messageId: string) => {
    LeanplumInbox.read(messageId);
  }, []);

  return useMemo(
    () => ({
      notifications,
      onRefresh,
      onOpen,
      isInitialized,
    }),
    [onRefresh, onOpen, notifications]
  );
};
