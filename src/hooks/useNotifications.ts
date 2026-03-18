import moment from "moment";
import { useCallback, useEffect, useMemo } from "react";
import { useDispatch } from "react-redux";
import { parseJSON } from "@utils";
import { gql, UserProfileBadgeCountType } from "@graphql/__generated";
import { useLazyQuery, useMutation } from "@apollo/client";
import { sortBy } from "lodash";

export type InboxMessage = {
  messageId: string;
  title: string;
  subtitle: string;
  imageUrl?: string;
  iconImageUrl?: string;
  deliveryTimestamp: string;
  isRead: boolean;
  expirationTimestamp?: string;
  source: "api";
  data: {
    source: "api";
    isRead: boolean;
    onPress: string;
  };
};

/**
 * TODO: This will be renamed to useInboxMessages along with containers
 * @returns
 */
export const useNotifications = () => {
  const [fetchMessagesFromApi, { loading, data: appInbox }] = useLazyQuery(gql("GetInboxMessagesDocument"), {
    fetchPolicy: "network-only",
  });
  const [markInboxMessagesAsSeen] = useMutation(gql("MarkInboxMessagesAsSeenDocument"));
  const [clearUserProfileBadgeCount] = useMutation(gql("ClearUserProfileBadgeCountDocument"));
  const dispatch = useDispatch();

  /**
   * The messages from appInbox
   */
  const messages = useMemo(() => {
    const appInboxMessages: InboxMessage[] = (appInbox?.data?.messages || []).map((m) => ({
      messageId: m.id,
      title: m.title,
      subtitle: m.body,
      imageUrl: m?.image?.uri,
      iconImageUrl: m?.iconImage?.uri,
      deliveryTimestamp: m.sentAt,
      isRead: m.isRead,
      expirationTimestamp: undefined as string,
      source: "api",
      data: {
        source: "api",
        isRead: m.isRead,
        onPress: JSON.stringify(m.onPress || {}),
      },
    }));

    return sortBy(appInboxMessages, (item) => moment(item.deliveryTimestamp).toDate()).reverse();
  }, [appInbox?.data?.messages]);

  /**
   * Marks all messages as seen
   */
  const markAllMessagesAsSeen = useCallback(async () => {
    const serverUnread = messages.filter((m) => !m.isRead).map((m) => m.messageId);

    if (serverUnread.length > 0) {
      await clearUserProfileBadgeCount({ variables: { type: UserProfileBadgeCountType.InboxMessages } });
    }
  }, [messages, clearUserProfileBadgeCount]);

  /**
   * Marks all messages as seen when the messages are loaded
   */
  useEffect(() => {
    if (!loading && messages.length > 0) {
      markAllMessagesAsSeen().catch();
    }
  }, [loading, messages, markAllMessagesAsSeen]);

  /**
   * When a message is opened
   */
  const onOpen = useCallback(
    (messageId: string, data: InboxMessage["data"]) => {
      if (!data?.isRead) {
        markInboxMessagesAsSeen({ variables: { messageIds: [messageId] } })
          .then(() => fetchMessagesFromApi())
          .catch();
      }

      if (data?.onPress) {
        const { data: onPressData, isValid } = parseJSON(data.onPress as string, ["type", "payload"]);

        if (isValid) {
          dispatch({
            type: onPressData.type,
            payload: { serverPayload: onPressData.payload },
          });
        }
      }
    },
    [dispatch, markInboxMessagesAsSeen, fetchMessagesFromApi]
  );

  // initial load
  useEffect(() => {
    fetchMessagesFromApi().catch();
  }, []);

  return useMemo(
    () => ({
      messages,
      onOpen,
      isInitialized: !loading,
      fetchNotifications: fetchMessagesFromApi,
      maximumAgeOfMessageInDays: appInbox?.data?.maximumAgeOfMessageInDays,
    }),
    [onOpen, messages, fetchMessagesFromApi, loading, appInbox?.data?.maximumAgeOfMessageInDays]
  );
};
