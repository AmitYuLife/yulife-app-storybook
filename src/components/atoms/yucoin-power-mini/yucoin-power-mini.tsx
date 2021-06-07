import React from "react";
import { View, StyleSheet } from "react-native";
import { PressableWithDelay } from "@components/molecules";
import { TextTemplate } from "@atoms";
import { Colours, Style } from "@styles";
import LinearGradient from "react-native-linear-gradient";
import { QuestionMarkIcon } from "@atoms/icon/question-mark-icon";

interface IProps {
  coinValue: number;
  onPress: () => void;
}

const YuCoinPowerMini = ({ coinValue, onPress }: IProps) => {
  return (
    <PressableWithDelay onPress={onPress}>
      <LinearGradient
        useAngle={true}
        colors={["#FFF598", "#FFF48F", "#FDDD65"]}
        locations={[0.25, 0.35, 0.97]}
        style={styles.wrapper}
      >
        <TextTemplate type="h2" color={Colours.orange}>
          {coinValue}
        </TextTemplate>
        <View style={styles.textWrapper}>
          <TextTemplate type="b1b" color={Colours.orange}>
            YuCoin Power
          </TextTemplate>
        </View>
        <QuestionMarkIcon />
      </LinearGradient>
    </PressableWithDelay>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    alignItems: "center",
    width: Style.adjust(279),
    height: Style.adjust(48),
    borderRadius: 8,
    justifyContent: "center",
    borderColor: "#FEDF9E",
    borderWidth: 1,
  },
  textWrapper: {
    marginHorizontal: Style.adjust(4),
  },
});

export default YuCoinPowerMini;
