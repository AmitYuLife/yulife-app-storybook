import { TextTemplate } from "@atoms";
import { Colours, Style, StyleSheet } from "@styles";
import { memo } from "react";
import { View } from "react-native";

interface IProps {
  date: string;
}

const SudokuDate = ({ date }: IProps) => {
  return (
    <View style={styles.dateContainer}>
      <View style={styles.dateWrapper}>
        <TextTemplate type="l1">{date}</TextTemplate>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  dateWrapper: {
    backgroundColor: Colours.neutral.white,
    borderRadius: Style.adjust(4),
    padding: Style.adjust(5),
    paddingHorizontal: Style.adjust(7),
  },
  dateContainer: {
    marginTop: Style.adjust(15),
    flexDirection: "row",
  },
});

export default memo(SudokuDate);
