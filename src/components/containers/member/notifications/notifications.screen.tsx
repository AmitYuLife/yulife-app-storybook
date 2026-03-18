import { useTranslation } from "@hooks";
import { InboxMessage } from "@hooks";
import { GenericHeadingAbsolute, GenericHeadingPad } from "@organisms";
import { FlashList } from "@shopify/flash-list";
import { Colours, Style, StyleSheet } from "@styles";
import React, { memo, useCallback, useMemo } from "react";
import { useNotifications } from "@hooks";
import moment from "moment";
import { DATE_FORMAT } from "@utils";
import { Box, TextTemplate } from "@atoms";
import {
  NotificationFooter,
  NotificationItem,
  NotificationLoading,
  NotificationsEmpty,
} from "@components/screens/member/notifications";

interface IProps {
  onClose: () => void;
  notifications: InboxMessage[];
  isInitialized?: boolean;
  onRefresh: () => void;
  onOpen: ReturnType<typeof useNotifications>["onOpen"];
  maximumAgeOfMessageInDays: number;
}

interface NotificationReducer {
  result: (InboxMessage | string)[];
  hasTodayMarker: boolean;
  hasLast7Marker: boolean;
  today: string;
}

export const NotificationsScreen = ({
  onClose,
  onOpen,
  isInitialized,
  notifications,
  onRefresh,
  maximumAgeOfMessageInDays,
}: IProps) => {
  const t = useTranslation([
    "screens.notifications.title",
    "screens.notifications.headers.today",
    "screens.notifications.headers.last_7",
  ]);

  const items = useMemo(
    () =>
      notifications.reduce<NotificationReducer>(
        (acc, item) => {
          if (moment(item.deliveryTimestamp).format(DATE_FORMAT) === acc.today) {
            if (!acc.hasTodayMarker) {
              acc.result.push(t["screens.notifications.headers.today"]);
              acc.hasTodayMarker = true;
            }
          } else {
            if (!acc.hasLast7Marker) {
              acc.result.push(t["screens.notifications.headers.last_7"]);
              acc.hasLast7Marker = true;
            }
          }

          acc.result.push(item);

          return acc;
        },
        { result: [], hasTodayMarker: false, hasLast7Marker: false, today: moment().format(DATE_FORMAT) }
      ),
    [notifications, t]
  ).result;

  const renderItem = useCallback(
    ({ item }: { item: InboxMessage | string }) => {
      if (typeof item === "string") {
        const isToday = item === t["screens.notifications.headers.today"];
        return (
          <Box ph={20} mt={isToday ? 0 : 16}>
            <TextTemplate type="b2b" color={Colours.inkSubtle}>
              {item}
            </TextTemplate>
          </Box>
        );
      }

      return (
        <Box mb={12}>
          <NotificationItem item={item} onOpen={onOpen} />
        </Box>
      );
    },
    [onOpen, t]
  );

  return (
    <>
      <GenericHeadingPad />
      <FlashList
        ListEmptyComponent={!isInitialized ? <NotificationLoading /> : <NotificationsEmpty />}
        onRefresh={onRefresh}
        refreshing={false}
        ListFooterComponent={
          !isInitialized || !notifications.length ? null : (
            <NotificationFooter maximumAgeOfMessageInDays={maximumAgeOfMessageInDays} />
          )
        }
        data={!isInitialized ? [] : items}
        renderItem={renderItem}
        contentContainerStyle={styles.wrapper}
      />
      <GenericHeadingAbsolute heading={t["screens.notifications.title"]} onRightIconPress={onClose} />
    </>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    padding: Style.adjust(12),
  },
});
export default memo(NotificationsScreen);
