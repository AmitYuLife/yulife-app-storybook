import React from "react";
import { View, StyleSheet, ViewStyle } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { PressableWithDelay } from "@components/molecules";
import { TextTemplate } from "@atoms";
import { Colours, Style } from "@styles";
import { QuestionMarkIcon } from "@atoms/icon/question-mark-icon";

interface IProps {
  coinValue: number;
  onPress: () => void;
}

const YuCoinPowerMini = ({ coinValue, onPress }: IProps) => {
  return (
    <View>
      <PressableWithDelay onPress={onPress}>
        <View style={styles.wrapper}>
          <LinearGradient
            useAngle={true}
            colors={["#FFF598", "#FFF48F", "#FDDD65"]}
            locations={[0.25, 0.35, 0.97]}
            style={styles.linearGradient}
          />
          <TextTemplate type="h2" color={Colours.orange}>
            {`+${coinValue}`}
          </TextTemplate>
          <View style={styles.textWrapper}>
            <TextTemplate type="b1b" color={Colours.orange}>
              YuCoin Power
            </TextTemplate>
          </View>
          <View style={styles.questionMarkWrapper}>
            <QuestionMarkIcon width={Style.adjust(24)} height={Style.adjust(24)} />
          </View>
        </View>
      </PressableWithDelay>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    alignItems: "center",
    height: Style.adjust(48),
    borderRadius: 8,
    justifyContent: "center",
    borderColor: "#FEDF9E",
    borderWidth: 1,
    paddingHorizontal: Style.adjust(16),
    width: "100%",
  } as ViewStyle,
  linearGradient: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: 6,
  } as ViewStyle,
  textWrapper: {
    marginHorizontal: Style.adjust(4),
  } as ViewStyle,
  questionMarkWrapper: {
    marginLeft: "auto",
  } as ViewStyle,
});

export default YuCoinPowerMini;
