import { TextTemplate } from "@atoms";
import { Switch, TouchableOpacityWithDelay } from "@components/molecules";
import { t } from "@locale";
import { Style } from "@styles";
import { memo, useCallback } from "react";
import { View, StyleSheet } from "react-native";
export interface IChangeBirthdayVisibilityProps {
  isVisible: boolean;
}

interface IProps {
  isVisible: boolean;
  disabled?: boolean;
  onBirthdayVisibilityChange: (consentProps: IChangeBirthdayVisibilityProps) => void;
}

const BirthdayVisibilityToggle = ({ onBirthdayVisibilityChange, isVisible, disabled = false }: IProps) => {
  const onToggle = useCallback(() => {
    onBirthdayVisibilityChange({ isVisible: !isVisible });
  }, [isVisible, onBirthdayVisibilityChange]);

  return (
    <View style={styles.wrapper}>
      <TouchableOpacityWithDelay disabled={disabled} style={styles.nameWrapper} onPress={onToggle}>
        <TextTemplate type="b2">{t("screens.leaderboard_settings.birthday_visibility.title")}</TextTemplate>
        <TextTemplate type="l1">
          {isVisible
            ? t("screens.leaderboard_settings.birthday_visibility.consented")
            : t("screens.leaderboard_settings.birthday_visibility.not_consented")}
        </TextTemplate>
      </TouchableOpacityWithDelay>
      <Switch disabled={disabled} value={isVisible} onPress={onToggle} />
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

export default memo(BirthdayVisibilityToggle);
