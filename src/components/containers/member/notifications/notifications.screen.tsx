import NotificationFooter from "@components/screens/member/notifications/notification-footer";
import NotificationItem from "@components/screens/member/notifications/notification-item";
import { NotificationsEmpty } from "@components/screens/member/notifications/notifications-empty";
import { useTranslation } from "@hooks";
import { Message } from "@leanplum/react-native-sdk";
import { GenericHeadingAbsolute, GenericHeadingPad } from "@organisms";
import { FlashList } from "@shopify/flash-list";
import { Style } from "@styles";
import React, { memo, useCallback } from "react";
import { StyleSheet, View } from "react-native";
import { useNotifications } from "@hooks";

interface IProps {
  onClose: () => void;
  notifications: Message[];
  isInitialized?: boolean;
  onRefresh: () => void;
  onOpen: ReturnType<typeof useNotifications>["onOpen"];
  maximumAgeOfMessageInDays: number;
}

export const NotificationsScreen = ({
  onClose,
  onOpen,
  isInitialized,
  notifications,
  onRefresh,
  maximumAgeOfMessageInDays,
}: IProps) => {
  const t = useTranslation(["screens.notifications.title"]);

  const renderItem = useCallback(
    ({ item }: { item: Message }) => {
      return (
        <View style={styles.itemWrapper}>
          <NotificationItem item={item} onOpen={onOpen} />
        </View>
      );
    },
    [onOpen]
  );

  return (
    <>
      <GenericHeadingPad />

      <FlashList
        ListEmptyComponent={!isInitialized ? null : <NotificationsEmpty />}
        onRefresh={onRefresh}
        refreshing={!isInitialized}
        estimatedItemSize={Style.adjust(100)}
        ListFooterComponent={
          !isInitialized || !notifications.length ? null : (
            <NotificationFooter maximumAgeOfMessageInDays={maximumAgeOfMessageInDays} />
          )
        }
        data={notifications}
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
  itemWrapper: {
    marginBottom: Style.adjust(10),
  },
});
export default memo(NotificationsScreen);
