import React, { memo } from "react";
import { StyleSheet, View } from "react-native";
import { Image, TextTemplate } from "@atoms";
import { Rank } from "@atoms/icon/rank";
import { Colours, Style } from "@styles";
import { addCommasToNumber } from "@utils";

export interface IAverageItem {
  id?: string;
  icon: string;
  name: string;
  value: number;
  opponentValue?: number;
  opponentIsWinner?: boolean;
  label?: string;
}

const TEXT_COLOR = "#545454";
const AverageItem = ({ icon, name, value, opponentValue, opponentIsWinner, label: itemLabel }: IAverageItem) => {
  const label = itemLabel || "";
  return (
    <View style={styles.wrapper}>
      <View style={styles.topLine} />
      <View style={styles.middleLine} />
      <View style={styles.iconWrapper}>
        <Image width={Style.adjust(22)} source={{ uri: icon }} />
      </View>
      <View style={styles.nameWrapper}>
        <TextTemplate type="b2b" color={TEXT_COLOR}>
          {name}
        </TextTemplate>
      </View>

      {opponentValue >= 0 ? (
        <View style={styles.valuesWrapper}>
          <View style={styles.valueWrapper}>
            <View style={styles.leftRankWrapper}>
              <Rank isWinner={!opponentIsWinner} />
            </View>
            <TextTemplate type={!opponentIsWinner ? "b1b" : "b1"} color={TEXT_COLOR}>
              {`${addCommasToNumber(value)}${label}`}
            </TextTemplate>
          </View>
          <View style={styles.valueWrapper}>
            <TextTemplate type={opponentIsWinner ? "b1b" : "b1"} color={TEXT_COLOR}>
              {`${addCommasToNumber(opponentValue)}${label}`}
            </TextTemplate>
            <View style={styles.rightRankWrapper}>
              <Rank isWinner={opponentIsWinner} />
            </View>
          </View>
          <View style={styles.wrapperSeparator}>
            <View style={styles.separator} />
          </View>
        </View>
      ) : (
        <View style={styles.singleValueWrapper}>
          <TextTemplate type="b1" color={TEXT_COLOR}>
            {`${addCommasToNumber(value)}${label}`}
          </TextTemplate>
        </View>
      )}
    </View>
  );
};

export default memo(AverageItem);

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: Style.adjust(8),
    marginTop: Style.adjust(16),
    marginBottom: Style.adjust(8),
  },
  topLine: {
    height: Style.adjust(1),
    borderWidth: Style.adjust(1),
    borderRadius: Style.adjust(8),
    borderColor: Colours.neutral.n100,
  },
  middleLine: {
    alignSelf: "center",
    height: Style.adjust(24),
    width: Style.adjust(1),
    borderWidth: Style.adjust(1),
    borderRadius: Style.adjust(8),
    borderColor: Colours.neutral.n100,
  },
  iconWrapper: {
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: Style.adjust(8),
    height: Style.adjust(40),
    width: Style.adjust(40),
    borderWidth: Style.adjust(1),
    borderRadius: Style.adjust(20),
    borderColor: Colours.neutral.n100,
  },
  nameWrapper: {
    alignItems: "center",
    marginBottom: Style.adjust(8),
  },
  valuesWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  valueWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  wrapperSeparator: {
    position: "absolute",
    width: "100%",
  },
  separator: {
    height: Style.adjust(4),
    width: Style.adjust(4),
    borderRadius: Style.adjust(2),
    backgroundColor: Colours.neutral.n800,
    alignSelf: "center",
  },
  leftRankWrapper: {
    height: Style.adjust(24),
    width: Style.adjust(24),
    marginRight: Style.adjust(11),
  },
  rightRankWrapper: {
    height: Style.adjust(24),
    width: Style.adjust(24),
    marginLeft: Style.adjust(11),
  },
  singleValueWrapper: {
    alignItems: "center",
  },
});
