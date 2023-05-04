import { GenericHeadingAbsolute, GenericHeadingPad } from "@organisms";
import { Style } from "@styles";
import React, { memo, useCallback } from "react";
import { StyleSheet, View } from "react-native";
import { SettingsPermissions } from "@services/fitkit/permissions.helpers";
import { TextTemplate } from "@atoms";
import { useTranslation } from "@hooks";
import { ILeaderboard } from "@redux/user/user.reducer";
import { FlashList } from "@shopify/flash-list";
import LeaderboardToggle from "@organisms/leaderboard-toggle/leaderboard-toggle";
import colours from "@styles/colours";

interface IProps {
  loading: boolean;
  onLeftIconPress: () => void;
  onRightIconPress: () => void;
  leaderboards?: ILeaderboard[];
  updatePermissions: () => Promise<void>;
  settingsPermissions: SettingsPermissions;
  onChangeConsent: ({
    leaderboardId,
    name,
    consent,
  }: {
    leaderboardId: string;
    consent: boolean;
    name: string;
  }) => void;
}

const LeaderboardSettings = ({ onChangeConsent, leaderboards, onLeftIconPress, onRightIconPress }: IProps) => {
  const t = useTranslation(["screens.leaderboard_settings.title", "screens.leaderboard_settings.screen_description"]);

  const renderItem = useCallback(
    ({ item }: { item: ILeaderboard }) => {
      return (
        <LeaderboardToggle
          key={item.leaderboardId}
          leaderboardId={item.leaderboardId}
          consent={item.consent}
          name={item.name}
          onChangeConsent={onChangeConsent}
        />
      );
    },
    [onChangeConsent]
  );

  return (
    <View style={styles.wrapper}>
      <GenericHeadingPad />
      <FlashList
        showsVerticalScrollIndicator={false}
        estimatedItemSize={80}
        data={leaderboards}
        renderItem={renderItem}
        contentContainerStyle={styles.content}
        refreshing={false}
        ListHeaderComponent={
          <View style={styles.header}>
            <TextTemplate type="b2">{t["screens.leaderboard_settings.screen_description"]}</TextTemplate>
          </View>
        }
      />
      <GenericHeadingAbsolute
        heading={t["screens.leaderboard_settings.title"]}
        onLeftIconPress={onLeftIconPress}
        onRightIconPress={onRightIconPress}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    height: Style.DEVICE_HEIGHT,
  },
  header: {
    paddingVertical: Style.adjust(20),
    borderBottomWidth: Style.adjust(1),
    marginBottom: Style.adjust(10),
    borderBottomColor: colours.slider.greyBar,
  },
  content: {
    paddingHorizontal: Style.adjust(20),
  },
});

export default memo(LeaderboardSettings);
