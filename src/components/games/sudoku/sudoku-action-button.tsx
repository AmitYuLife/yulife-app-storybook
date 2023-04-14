import { TextTemplate } from "@atoms";
import { ArrowIcon } from "@atoms/icon/arrow";
import { BoxOption } from "@components/molecules";
import { Style } from "@styles";
import colours from "@styles/colours";
import React, { ReactNode, memo } from "react";
import { StyleSheet, View } from "react-native";

interface IProps {
  icon: ReactNode;
  label: string;
  onPress: () => void;
  testID?: string;
}

const SudokuActionButton = ({ onPress, icon, label, testID }: IProps) => {
  return (
    <BoxOption
      onPress={onPress}
      isSelected={false}
      selectedStyle={null}
      innerHeight={60}
      wrapperStyle={styles.wrapper}
      innerWrapperStyle={styles.inner}
      testID={testID}
    >
      <>
        <View style={styles.text}>
          <View style={styles.icon}>{icon}</View>
          <TextTemplate type="b2b">{label}</TextTemplate>
        </View>
        <ArrowIcon color={colours.primary.p600} />
      </>
    </BoxOption>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
    marginTop: Style.adjust(10),
  },
  inner: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: Style.adjust(15),
  },
  text: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    marginRight: Style.adjust(15),
  },
});

export default memo(SudokuActionButton);
