import { TextTemplate } from "@atoms";
import { Switch, TouchableOpacityWithDelay } from "@components/molecules";
import { t } from "@locale";
import { Style } from "@styles";
import { memo, useCallback } from "react";
import { View, StyleSheet } from "react-native";

interface IProps {
  name: string;
  consent?: boolean;
  leaderboardId?: string;
  onChangeConsent: ({
    leaderboardId,
    consent,
    name,
  }: {
    leaderboardId: string;
    consent: boolean;
    name: string;
  }) => void;
}

const LeaderboardToggle = ({ onChangeConsent, leaderboardId, name, consent }: IProps) => {
  const onToggle = useCallback(() => {
    onChangeConsent({ leaderboardId, name, consent: !consent });
  }, [consent, leaderboardId, name, onChangeConsent]);

  return (
    <View style={styles.wrapper}>
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
    paddingRight: Style.adjust(40),
    paddingVertical: Style.adjust(20),
    flex: 1,
  },
});

export default memo(LeaderboardToggle);
