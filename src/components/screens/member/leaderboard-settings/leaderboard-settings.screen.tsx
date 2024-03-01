import { GenericHeadingAbsolute, GenericHeadingPad } from "@organisms";
import { Style } from "@styles";
import React, { memo, useCallback } from "react";
import { StyleSheet, View } from "react-native";
import { TextTemplate } from "@atoms";
import { useTranslation } from "@hooks";
import { FlashList } from "@shopify/flash-list";
import LeaderboardToggle, { IChangeConsentProps } from "@organisms/leaderboard-toggle/leaderboard-toggle";
import colours from "@styles/colours";
import { ISocialGroupLeaderboard } from "@redux/leaderboards/leaderboards.types";

interface ILeaderboardItem extends ISocialGroupLeaderboard {
  socialGroupId: string;
  socialGroupName: string;
}

interface IProps {
  onLeftIconPress: () => void;
  onRightIconPress: () => void;
  leaderboards?: ILeaderboardItem[];
  onChangeConsent: (consentProps: IChangeConsentProps) => void;
}

const LeaderboardSettings = ({ onChangeConsent, leaderboards, onLeftIconPress, onRightIconPress }: IProps) => {
  const t = useTranslation(["screens.leaderboard_settings.title", "screens.leaderboard_settings.screen_description"]);

  const renderItem = useCallback(
    ({ item }: { item: ILeaderboardItem }) => {
      const name = `${item.socialGroupName} ${item.name}`;
      return (
        <LeaderboardToggle
          key={item.leaderboardId}
          socialGroupId={item.socialGroupId}
          leaderboardId={item.leaderboardId}
          consent={item.consent}
          name={name}
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
  footer: {
    paddingBottom: Style.adjust(50),
  },
});

export default memo(LeaderboardSettings);
