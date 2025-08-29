import React, { memo, useState, useCallback, useEffect } from "react";
import { ScrollView, View } from "react-native";
import { Image, TextTemplate } from "@atoms";
import { t } from "@locale";
import { Style, StyleSheet } from "@styles";
import { Switch } from "@molecules";
import { ISocialGroup } from "@redux/leaderboards/leaderboards.types";
import { LEADERBOARD_DESC, LEADERBOARD_SWITCH, LEADERBOARD_TITLE } from "@ids";

export type IConsents = Record<string, { consent: boolean; name: string }>;

interface IProps {
  activeSocialGroup: ISocialGroup;
  onSwitch: (consents: IConsents) => void;
}

const JoinLeaderboardOverlay = ({ activeSocialGroup, onSwitch }: IProps) => {
  const [leaderboardConsents, setLeaderboardConsents] = useState<IConsents>({});

  useEffect(() => {
    setLeaderboardConsents(
      activeSocialGroup?.leaderboards.reduce(
        (obj, leaderboard) => ({
          ...obj,
          [leaderboard.leaderboardId]: {
            consent: leaderboard.consent,
            name: leaderboard.name,
          },
        }),
        leaderboardConsents
      )
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onPress = useCallback(
    (leaderboardId: string) => {
      const newLeaderboardsConsents = {
        ...leaderboardConsents,
        [leaderboardId]: {
          consent: !leaderboardConsents[leaderboardId].consent,
          name: leaderboardConsents[leaderboardId].name,
        },
      };

      setLeaderboardConsents(newLeaderboardsConsents);
      onSwitch(newLeaderboardsConsents);
    },
    [leaderboardConsents, onSwitch]
  );

  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <TextTemplate type="h2" textAlign="center">
          {t("screens.leaderboard.turn_board_on.heading")}
        </TextTemplate>
        <View style={styles.description}>
          <TextTemplate type="b2" textAlign="center">
            {t("screens.leaderboard.turn_board_on.description")}
          </TextTemplate>
        </View>
      </View>
      <ScrollView style={styles.groups} showsVerticalScrollIndicator={false}>
        {activeSocialGroup?.leaderboards.map(({ leaderboardId, icon, name, description, consent }) => (
          <View key={name} style={styles.group}>
            <Image source={icon} width={Style.adjust(24)} height={Style.adjust(24)} />
            <View style={styles.groupInfo}>
              <TextTemplate type="b2" testID={LEADERBOARD_TITLE(`${name} Leaderboard`)}>
                {name} {t("leaderboard")}
              </TextTemplate>
              <TextTemplate type="l2" testID={LEADERBOARD_DESC(description)}>
                {description}
              </TextTemplate>
            </View>
            <View style={styles.switch}>
              <Switch
                value={leaderboardConsents[leaderboardId]?.consent}
                onPress={() => onPress(leaderboardId)}
                testID={LEADERBOARD_SWITCH(name, consent)}
              />
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  container: {
    paddingHorizontal: Style.adjust(36),
  },
  description: {
    marginTop: Style.adjust(8),
  },
  groups: {
    marginTop: Style.adjust(32),
    paddingHorizontal: Style.adjust(24),
    marginBottom: Style.adjust(80),
  },
  group: {
    paddingStart: Style.adjust(10),
    flexDirection: "row",
    alignItems: "center",
    marginVertical: Style.adjust(16),
  },
  groupInfo: {
    marginHorizontal: Style.adjust(10),
  },
  switch: {
    position: "absolute",
    right: 0,
  },
});

export default memo(JoinLeaderboardOverlay);
