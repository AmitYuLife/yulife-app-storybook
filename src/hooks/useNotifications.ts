import { Message } from "@leanplum/react-native-sdk";
import Logger from "@services/logging/logger";
import moment from "moment";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import { parseJSON, appVersionSatisfies } from "@utils";
import { gql } from "@graphql/__generated";
import { useLazyQuery, useMutation } from "@apollo/client";
import { sortBy } from "lodash";

type MessageWithSource = Message & {
  source: "leanplum" | "api";
};

/**
 * TODO: This will be renamed to useInboxMessages along with containers
 * @returns
 */
export const useNotifications = () => {
  const [leanplumMessages, setLeanplumMessages] = useState<MessageWithSource[]>([]);
  const [fetchedFromLeanplum, setFetchedFromLeanplum] = useState<boolean>(false);
  const [fetchMessagesFromApi, { loading, data: appInbox }] = useLazyQuery(gql("GetInboxMessagesDocument"), {
    fetchPolicy: "network-only",
  });
  const [markInboxMessagesAsSeen] = useMutation(gql("MarkInboxMessagesAsSeenDocument"));
  const dispatch = useDispatch();

  /**
   * The combined messages from both leanplum and appInbox
   */
  const messages = useMemo(() => {
    const appInboxMessages: MessageWithSource[] = (appInbox?.data?.messages || []).map((m) => ({
      messageId: m.id,
      title: m.title,
      subtitle: m.body,
      imageUrl: m?.image?.uri,
      deliveryTimestamp: m.sentAt,
      isRead: m.isRead,
      expirationTimestamp: undefined,
      source: "api",
      data: {
        onPress: JSON.stringify(m.onPress || {}),
      },
    }));

    return sortBy([...appInboxMessages, ...leanplumMessages], (item) => moment(item.deliveryTimestamp)).reverse();
  }, [leanplumMessages, appInbox?.data?.messages]);

  /**
   * Marks all messages as seen
   */
  const markAllMessagesAsSeen = useCallback(async () => {
    const leanplumUnread = messages.filter((m) => !m.isRead && m.source === "leanplum").map((m) => m.messageId);
    const serverUnread = messages.filter((m) => !m.isRead && m.source === "api").map((m) => m.messageId);

    if (serverUnread.length > 0) {
      await markInboxMessagesAsSeen({ variables: { messageIds: serverUnread } });
    }

    await Promise.all(leanplumUnread.map((messageId) => Logger.leanplum.markAsRead(messageId)));
  }, [messages, markInboxMessagesAsSeen]);

  /**
   * Marks all messages as seen when the messages are loaded
   */
  useEffect(() => {
    if (!loading && messages.length > 0 && fetchedFromLeanplum) {
      markAllMessagesAsSeen().catch();
    }
  }, [loading, messages, fetchedFromLeanplum, markAllMessagesAsSeen]);

  /**
   * Fetches messages from Leanplum (from device local storage) and sets them to the state
   * The inbox is automatically fetched when the app loads
   */
  const fetchMessagesFromLeanplum = useCallback(async () => {
    if (!Logger?.leanplum?.getInbox) {
      return;
    }

    const inbox = await Logger.leanplum.getInbox();
    const days = appInbox?.data?.maximumAgeOfMessageInDays || 7;

    const mappedMessages = inbox.allMessages
      .filter((message) => moment(message.deliveryTimestamp).isAfter(moment().subtract(days, "days").startOf("day")))
      .filter((message) =>
        // We're doing version check in client due to the fact that we can't validate client's version in the server since these messages are redirected by third party service and no way to know which version of the app at the receiving end when the initial sending happens
        message.data?.requiredAppVersion ? appVersionSatisfies(message.data?.requiredAppVersion as string) : true
      )
      .sort((a, b) => moment.utc(b.deliveryTimestamp).unix() - moment.utc(a.deliveryTimestamp).unix())
      .map((message) => ({
        ...message,
        imageUrl: (message.data?.inboxMessageImageUrl as string) || message.imageUrl,
        source: "leanplum" as const,
      }));

    setFetchedFromLeanplum(true);
    setLeanplumMessages(mappedMessages);
  }, [appInbox?.data?.maximumAgeOfMessageInDays, setFetchedFromLeanplum, setLeanplumMessages]);

  const fetchNotifications = useCallback(async () => {
    Logger.leanplum?.refreshInbox?.();
    await fetchMessagesFromLeanplum();
    await fetchMessagesFromApi();
  }, [fetchMessagesFromLeanplum, fetchMessagesFromApi]);

  /**
   * When a message is opened
   */
  const onOpen = useCallback(
    (messageId: string, data: Message["data"]) => {
      // SDUI is coming from LP or API app inbox
      if (data?.onPress) {
        const { data: onPressData, isValid } = parseJSON(data.onPress as string, ["type", "payload"]);

        if (isValid) {
          dispatch({
            type: onPressData.type,
            payload: { serverPayload: onPressData.payload },
          });
        }

        return;
      }

      // Or it's leanplum and we want to open the native LP message
      Logger.leanplum?.readInbox?.(messageId);
    },
    [dispatch]
  );

  // initial load
  useEffect(() => {
    Logger?.leanplum?.onInboxUpdate(fetchMessagesFromLeanplum);
    fetchNotifications().catch();
  }, [fetchNotifications, fetchMessagesFromLeanplum]);

  return useMemo(
    () => ({
      messages,
      onOpen,
      isInitialized: fetchedFromLeanplum && !loading,
      fetchNotifications,
      maximumAgeOfMessageInDays: appInbox?.data?.maximumAgeOfMessageInDays,
    }),
    [onOpen, fetchedFromLeanplum, messages, fetchNotifications, loading, appInbox?.data?.maximumAgeOfMessageInDays]
  );
};
