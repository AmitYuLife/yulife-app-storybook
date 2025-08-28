import { TextTemplate } from "@atoms";
import { Switch, TouchableOpacityWithDelay } from "@components/molecules";
import { SETTINGS_SWITCH } from "@ids";
import { t } from "@locale";
import { Style } from "@styles";
import { memo, useCallback } from "react";
import { View, StyleSheet } from "react-native";

export interface IChangeConsentProps {
  name: string;
  socialGroupId?: string;
  leaderboardId: string;
  consent: boolean;
}

interface IProps {
  name: string;
  consent?: boolean;
  socialGroupId?: string;
  leaderboardId?: string;
  onChangeConsent: (consentProps: IChangeConsentProps) => void;
}

const LeaderboardToggle = ({ onChangeConsent, socialGroupId, leaderboardId, name, consent }: IProps) => {
  const onToggle = useCallback(() => {
    onChangeConsent({ socialGroupId, leaderboardId, name, consent: !consent });
  }, [consent, socialGroupId, leaderboardId, name, onChangeConsent]);

  return (
    <View style={styles.wrapper} testID={SETTINGS_SWITCH(name, !!consent)}>
      <TouchableOpacityWithDelay style={styles.nameWrapper} onPress={onToggle}>
        <TextTemplate type="b2">{t("screens.leaderboard_settings.item_title", { name })}</TextTemplate>
        <TextTemplate type="l1">
          {consent ? t("screens.leaderboard_settings.consented") : t("screens.leaderboard_settings.not_consented")}
        </TextTemplate>
      </TouchableOpacityWithDelay>
      <Switch value={consent} onPress={onToggle} />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  nameWrapper: {
    paddingEnd: Style.adjust(40),
    paddingVertical: Style.adjust(20),
    flex: 1,
  },
});

export default memo(LeaderboardToggle);
