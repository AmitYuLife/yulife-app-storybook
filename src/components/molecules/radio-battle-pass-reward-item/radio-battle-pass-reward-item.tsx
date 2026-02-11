import React, { memo, useCallback } from "react";
import { Box, TextTemplate } from "@atoms";
import { SuccessIcon } from "@atoms/icon/success-icon";
import { Colours, Style, StyleSheet } from "@styles";
import { Pressable } from "..";
import LinearGradient from "react-native-linear-gradient";
import { RADIO_BATTLE_PASS_REWARD_ITEM } from "@ids";

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
      <Pressable style={styles.wrapper} onPress={handleOnPress} delay={1000} testID={RADIO_BATTLE_PASS_REWARD_ITEM}>
        <LinearGradient colors={gradient} style={styles.gradient} useAngle={true} angle={270}>
          <Box p={2} br={Style.adjust(16)} alignItems="center" justifyContent="center">
            <Box bg="#290163" br={16} justifyContent="center" w="100%" pv={16} ph={24}>
              <TextTemplate type="b2b" color={Colours.neutral.white}>
                {reward.title}
              </TextTemplate>
              <Box position="absolute" right={24}>
                <SuccessIcon size={24} checked={checked} colour="#E30D76" fill="#4F377B" stroke="#5C4488" />
              </Box>
            </Box>
          </Box>
        </LinearGradient>
      </Pressable>
    </>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    borderRadius: Style.adjust(16),
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  gradient: {
    width: "100%",
  },
});

export default memo(RadioBattlePassRewardItem);
