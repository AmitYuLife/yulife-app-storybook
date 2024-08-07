import React, { memo, useCallback, useMemo } from "react";
import { View, StyleSheet } from "react-native";
import { TextTemplate } from "@atoms";
import { SuccessIcon } from "@atoms/icon/success-icon";
import { Colours, Style } from "@styles";
import { PressableWithDelay } from "..";

export interface IRadioBattlePassRewardItem {
  reward: {
    id: string;
    title: string;
  };
  checked: boolean;
  theme: "dark" | "light";
  onPress: (id: string) => void;
}

const RadioBattlePassRewardItem = ({ reward, checked, theme, onPress }: IRadioBattlePassRewardItem) => {
  const selectedTheme = componentTheme[theme];
  const wrapperStyle = useMemo(
    () => ({
      ...styles.wrapper,
      borderColor: checked ? selectedTheme.selected.borderColor : selectedTheme.inactive.borderColor,
      backgroundColor: checked ? selectedTheme.selected.backgroundColor : selectedTheme.inactive.backgroundColor,
    }),
    [checked, selectedTheme]
  );

  const successIconStyle = useMemo(
    () => ({
      fill: theme === "dark" ? "#4F377B" : undefined,
      stroke: theme === "dark" ? "#5C4488" : undefined,
    }),
    [theme]
  );

  const handleOnPress = useCallback(() => onPress(reward.id), [onPress, reward.id]);

  return (
    <PressableWithDelay style={wrapperStyle} onPress={handleOnPress} delay={0}>
      <TextTemplate type="b2b" color={selectedTheme.color}>
        {reward.title}
      </TextTemplate>
      <View style={styles.icon}>
        <SuccessIcon size={24} checked={checked} colour="#E30D76" {...successIconStyle} />
      </View>
    </PressableWithDelay>
  );
};

const componentTheme = {
  dark: {
    color: Colours.neutral.white,
    selected: {
      borderColor: "#E30D76",
      backgroundColor: "transparent",
    },
    inactive: {
      borderColor: "#5C4488",
      backgroundColor: "transparent",
    },
  },
  light: {
    color: "#464647",
    selected: {
      borderColor: "#F43E8E",
      backgroundColor: "#FCE7F1",
    },
    inactive: {
      borderColor: "#D9D9D7",
      backgroundColor: Colours.neutral.white,
    },
  },
};

const styles = StyleSheet.create({
  wrapper: {
    borderWidth: 2,
    borderRadius: 16,
    paddingVertical: Style.adjust(16),
    paddingHorizontal: Style.adjust(24),
    justifyContent: "center",
  },
  icon: {
    position: "absolute",
    right: Style.adjust(24),
  },
});

export default memo(RadioBattlePassRewardItem);
