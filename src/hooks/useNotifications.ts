import { Message } from "@leanplum/react-native-sdk";
import Logger from "@services/logging/logger";
import moment from "moment";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import { parseJSON, appVersionSatisfies } from "@utils";

export const useNotifications = () => {
  const [notifications, setNotifications] = useState<Message[]>([]);
  const [isInitialized, setIsInitialized] = useState<boolean>(false);
  const dispatch = useDispatch();

  const getMessages = useCallback(async () => {
    if (!Logger?.leanplum?.getInbox) {
      return;
    }

    const inbox = await Logger.leanplum.getInbox();
    const messages = inbox.allMessages
      .filter((message) => moment(message.deliveryTimestamp).isAfter(moment().subtract(7, "day").startOf("day")))
      .filter((message) =>
        // We're doing version check in client due to the fact that we can't validate client's version in the server since these messages are redirected by third party service and no way to know which version of the app at the receiving end when the initial sending happens
        message.data?.requiredAppVersion ? appVersionSatisfies(message.data?.requiredAppVersion as string) : true
      )
      .sort((a, b) => moment.utc(b.deliveryTimestamp).unix() - moment.utc(a.deliveryTimestamp).unix())
      .map((message) => ({
        ...message,
        imageUrl: (message.data?.inboxMessageImageUrl as string) || message.imageUrl,
      }));
    setIsInitialized(true);
    setNotifications(messages);
  }, []);

  const onRefresh = useCallback(() => {
    Logger.leanplum?.refreshInbox?.();
  }, []);

  useEffect(() => {
    onRefresh();

    Logger.leanplum?.onInboxUpdate?.(() => {
      getMessages();
    });

    getMessages();
  }, [getMessages, onRefresh]);

  const onOpen = useCallback((messageId: string, data: Message["data"]) => {
    if (data?.onPress) {
      const { data: onPressData, isValid } = parseJSON(data.onPress as string, ["type", "payload"]);

      if (isValid) {
        dispatch({
          type: onPressData.type,
          payload: { serverPayload: onPressData.payload },
        });
      }

      // Replace the native leanplum action event with our own then mark the given message as read state
      Logger.leanplum?.markAsRead(messageId);
      return;
    }

    Logger.leanplum?.readInbox?.(messageId);
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
