import { Message } from "@leanplum/react-native-sdk";
import leanplum from "@services/logging/leanplum";
import moment from "moment";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import { parseJSON, appVersionSatisfies } from "@utils";
import { gql, UserProfileBadgeCountType } from "@graphql/__generated";
import { useLazyQuery, useMutation } from "@apollo/client";
import { isNumber, sortBy } from "lodash";

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
  const [clearUserProfileBadgeCount] = useMutation(gql("ClearUserProfileBadgeCountDocument"));
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
      iconImageUrl: m?.iconImage?.uri,
      deliveryTimestamp: m.sentAt,
      isRead: m.isRead,
      expirationTimestamp: undefined,
      source: "api",
      data: {
        source: "api",
        isRead: m.isRead,
        onPress: JSON.stringify(m.onPress || {}),
      },
    }));

    return sortBy([...appInboxMessages, ...leanplumMessages], (item) =>
      moment(item.deliveryTimestamp).toDate()
    ).reverse();
  }, [leanplumMessages, appInbox?.data?.messages]);

  /**
   * Marks all messages as seen
   */
  const markAllMessagesAsSeen = useCallback(async () => {
    const leanplumUnread = messages.filter((m) => !m.isRead && m.source === "leanplum").map((m) => m.messageId);
    const serverUnread = messages.filter((m) => !m.isRead && m.source === "api").map((m) => m.messageId);

    if (serverUnread.length > 0) {
      await clearUserProfileBadgeCount({ variables: { type: UserProfileBadgeCountType.InboxMessages } });
    }

    await Promise.all(leanplumUnread.map((messageId) => leanplum.markAsRead(messageId)));
  }, [messages, clearUserProfileBadgeCount]);

  /**
   * Marks all messages as seen when the messages are loaded
   */
  useEffect(() => {
    if (!loading && messages.length > 0 && fetchedFromLeanplum) {
      markAllMessagesAsSeen().catch();
    }
  }, [loading, messages, markAllMessagesAsSeen]);

  /**
   * Fetches messages from Leanplum (from device local storage) and sets them to the state
   * The inbox is automatically fetched when the app loads
   */
  const fetchMessagesFromLeanplum = useCallback(async () => {
    if (!leanplum?.getInbox) {
      return;
    }

    const inbox = await leanplum.getInbox();
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
  }, [appInbox, setFetchedFromLeanplum, setLeanplumMessages]);

  /**
   * When a message is opened
   */
  const onOpen = useCallback(
    (messageId: string, data: Message["data"]) => {
      if (data?.source === "api" && !data?.isRead) {
        markInboxMessagesAsSeen({ variables: { messageIds: [messageId] } })
          .then(() => fetchMessagesFromApi())
          .catch();
      }

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

      // If it's leanplum and we want to open the native LP message
      if (data?.source !== "api") {
        leanplum.readInbox?.(messageId);
        return;
      }
    },
    [dispatch, markInboxMessagesAsSeen, fetchMessagesFromApi]
  );

  useEffect(() => {
    if (isNumber(appInbox?.data?.maximumAgeOfMessageInDays)) {
      leanplum.refreshInbox?.();
      fetchMessagesFromLeanplum();
    }
  }, [appInbox?.data?.maximumAgeOfMessageInDays, fetchMessagesFromLeanplum]);

  // initial load
  useEffect(() => {
    fetchMessagesFromApi().catch();
  }, []);

  return useMemo(
    () => ({
      messages,
      onOpen,
      isInitialized: fetchedFromLeanplum && !loading,
      fetchNotifications: fetchMessagesFromApi,
      maximumAgeOfMessageInDays: appInbox?.data?.maximumAgeOfMessageInDays,
    }),
    [onOpen, fetchedFromLeanplum, messages, fetchMessagesFromApi, loading, appInbox?.data?.maximumAgeOfMessageInDays]
  );
};
