import React, { memo, useCallback } from "react";
import { View, StyleSheet } from "react-native";
import { TextTemplate } from "@atoms";
import { SuccessIcon } from "@atoms/icon/success-icon";
import { Colours, Style } from "@styles";
import { PressableWithDelay } from "..";
import LinearGradient from "react-native-linear-gradient";

export interface IRadioBattlePassRewardItem {
  reward: {
    id: string;
    title: string;
  };
  checked: boolean;
  onPress: (id: string) => void;
}

const RadioBattlePassRewardItem = ({ reward, checked, onPress }: IRadioBattlePassRewardItem) => {
  const handleOnPress = useCallback(() => onPress(reward.id), [onPress, reward.id]);
  const gradient = checked ? ["#E30D76", "#7249FE"] : ["#5C4488", "#5C4488"];

  return (
    <>
      <PressableWithDelay style={styles.wrapper} onPress={handleOnPress} delay={1000}>
        <LinearGradient colors={gradient} style={styles.gradient} useAngle={true} angle={270}>
          <View style={styles.innerContainer}>
            <TextTemplate type="b2b" color={Colours.neutral.white}>
              {reward.title}
            </TextTemplate>
            <View style={styles.icon}>
              <SuccessIcon size={24} checked={checked} colour="#E30D76" fill="#4F377B" stroke="#5C4488" />
            </View>
          </View>
        </LinearGradient>
      </PressableWithDelay>
    </>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    borderRadius: Style.adjust(16),
    overflow: "hidden",
  },
  innerContainer: {
    backgroundColor: "#290163",
    borderRadius: Style.adjust(14),
    justifyContent: "center",
    paddingVertical: Style.adjust(16),
    paddingHorizontal: Style.adjust(24),
  },
  gradient: {
    padding: Style.adjust(2),
  },
  icon: {
    position: "absolute",
    right: Style.adjust(24),
  },
});

export default memo(RadioBattlePassRewardItem);
