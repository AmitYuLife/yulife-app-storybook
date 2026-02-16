import { GenericHeadingAbsolute, GenericHeadingPad } from "@organisms";
import { Colours, Style, StyleSheet } from "@styles";
import { ComponentProps, memo, useCallback } from "react";
import { View } from "react-native";
import { Box, TextTemplate } from "@atoms";
import { useTranslation } from "@hooks";
import { FlashList } from "@shopify/flash-list";
import LeaderboardToggle, { IChangeConsentProps } from "@organisms/leaderboard-toggle/leaderboard-toggle";
import { groupBy } from "lodash";
import { INotificationsSectionItem } from "../settings/settings.screen";
import NotificationsItem from "../settings/items/notifications-item";

interface ILeaderboardEnrollment {
  socialGroupId: string;
  socialGroupName: string;
  leaderboardId: string;
  name: string;
  consent: boolean;
  leaderboardConfigId: string;
}

interface IProps {
  onLeftIconPress: () => void;
  onRightIconPress: () => void;
  leaderboards?: ILeaderboardEnrollment[];
  inboxNotificationsSettings?: INotificationsSectionItem[];
  onChangeConsent: (consentProps: IChangeConsentProps) => void;
}

const LeaderboardSettings = ({
  onChangeConsent,
  leaderboards,
  onLeftIconPress,
  onRightIconPress,
  inboxNotificationsSettings,
}: IProps) => {
  const t = useTranslation(["screens.leaderboard_settings.title", "screens.leaderboard_settings.screen_description"]);
  const flatLeaderboardListWithHeaders = leaderboards
    ? Object.values(groupBy(leaderboards, "socialGroupId")).flatMap(([first, ...rest]) => [
        first.socialGroupName,
        first,
        ...rest,
      ])
    : [];

  const renderItem = useCallback(
    ({ item }: { item: string | ILeaderboardEnrollment }) => {
      const isSectionHeader = typeof item === "string";
      if (isSectionHeader) {
        return (
          <Box
            borderColor={Colours.neutral.n100}
            borderWidth={1}
            bg={Colours.neutral.n50}
            alignItems="center"
            justifyContent="center"
            mh={-20}
            pv={8}
          >
            <TextTemplate
              color={Colours.inkSubtle}
              type="b2"
            >{`${item} ${t["screens.leaderboard_settings.title"]}`}</TextTemplate>
          </Box>
        );
      }

      return (
        <LeaderboardToggle
          key={item.leaderboardId}
          socialGroupId={item.socialGroupId}
          leaderboardId={item.leaderboardId}
          consent={item.consent}
          name={item.name}
          onChangeConsent={onChangeConsent}
        />
      );
    },
    [onChangeConsent, t]
  );

  return (
    <View style={styles.wrapper}>
      <GenericHeadingPad />
      <FlashList
        showsVerticalScrollIndicator={false}
        estimatedItemSize={80}
        data={flatLeaderboardListWithHeaders}
        renderItem={renderItem}
        contentContainerStyle={styles.content}
        refreshing={false}
        ListHeaderComponent={
          <View style={styles.header}>
            <Box pb={16}>
              <TextTemplate type="b2">{t["screens.leaderboard_settings.screen_description"]}</TextTemplate>
            </Box>
            {renderInboxNotificationSettings(inboxNotificationsSettings)}
          </View>
        }
        ListFooterComponent={<View style={styles.footer} />}
      />
      <GenericHeadingAbsolute
        heading={t["screens.leaderboard_settings.title"]}
        onLeftIconPress={onLeftIconPress}
        onRightIconPress={onRightIconPress}
      />
    </View>
  );
};

const renderInboxNotificationSettings = (items: ComponentProps<typeof NotificationsItem>[]) => {
  return (
    <View>
      {items.map((item) => {
        if (!item) {
          return null;
        }

        return <NotificationsItem {...item} key={item.id} />;
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    height: Style.DEVICE_HEIGHT,
  },
  header: {
    paddingVertical: Style.adjust(20),
  },
  content: {
    paddingHorizontal: Style.adjust(20),
  },
  footer: {
    paddingBottom: Style.adjust(50),
  },
});

export default memo(LeaderboardSettings);
