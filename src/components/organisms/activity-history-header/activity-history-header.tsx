import React, { memo, useState } from "react";
import { StyleSheet, View } from "react-native";
import { BottomShadow, TextTemplate } from "@atoms";
import { Pressable } from "@molecules";
import { Style, Colours } from "@styles";
import { last, upperFirst } from "lodash";
import { DATE_FORMAT } from "@utils";
import moment from "moment";

type ISelectedMonth = {
  startDate: string;
  endDate: string;
};
interface IProps {
  onPress: (selectedMonth: ISelectedMonth) => void;
}

const ActivityHistoryHeader = ({ onPress }: IProps) => {
  const [monthSelected, setMonthSelected] = useState(last(getMonths()).label);

  return (
    <View>
      <View style={styles.wrapper}>
        {getMonths().map((month) => (
          <Pressable
            delay={1000}
            key={month.label}
            style={[styles.button, monthSelected === month.label ? styles.selectedButtonStyle : null]}
            onPress={() => {
              setMonthSelected(month.label);
              onPress(month.value);
            }}
          >
            <TextTemplate type="b2b" color={monthSelected === month.label ? Colours.neutral.white : null}>
              {month.label}
            </TextTemplate>
          </Pressable>
        ))}
      </View>
      <BottomShadow />
    </View>
  );
};

const getMonths = () => {
  const currentMonth = moment().month();
  return Array.from({ length: 3 }).map((_, index) => {
    const month = moment().month(currentMonth - 2 + index);
    return {
      label: upperFirst(month.format("MMMM")),
      value: {
        startDate: month.startOf("month").format(DATE_FORMAT),
        endDate: month.endOf("month").format(DATE_FORMAT),
      },
    };
  });
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    marginHorizontal: Style.adjust(16),
    paddingBottom: Style.adjust(10),
  },
  button: {
    borderWidth: 1,
    borderColor: "#D9D9D7",
    borderRadius: 100,
    paddingHorizontal: Style.adjust(12),
    paddingTop: Style.adjust(4),
    paddingBottom: Style.adjust(4),
    flex: 0.5,
    alignItems: "center",
    marginHorizontal: Style.adjust(6),
  },
  selectedButtonStyle: {
    backgroundColor: Colours.primary.p600,
    borderWidth: 0,
  },
});

export default memo(ActivityHistoryHeader);
