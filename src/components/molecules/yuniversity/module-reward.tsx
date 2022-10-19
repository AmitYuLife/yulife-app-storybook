import React, { memo } from "react";
import { Image, TextTemplate } from "@atoms";
import { StyleSheet, View } from "react-native";
import { Style } from "@styles";

interface IModuleReward {
  coin: number;
}

const YuniversityModuleReward = ({ coin }: IModuleReward) => (
  <>
    {!coin ? null : (
      <View style={styles.quizRewardWrapper}>
        <TextTemplate textAlign="center" type={"b2"}>
          Earn
        </TextTemplate>
        <View style={styles.quizRewardAmountWrapper}>
          <TextTemplate textAlign="center" type={"b2b"}>
            {coin}
          </TextTemplate>
          <Image
            style={styles.quizReward}
            height={Style.adjust(20)}
            width={Style.adjust(20)}
            source={require("@assets/icons/yucoin.png")}
          />
        </View>
      </View>
    )}
  </>
);

export default memo(YuniversityModuleReward);

const styles = StyleSheet.create({
  quizReward: {
    alignSelf: "center",
    marginLeft: Style.adjust(4),
  },
  quizRewardWrapper: {
    alignItems: "center",
    marginBottom: Style.adjust(16),
    justifyContent: "space-between",
    flexDirection: "row",
  },
  quizRewardAmountWrapper: {
    flexDirection: "row",
  },
});
