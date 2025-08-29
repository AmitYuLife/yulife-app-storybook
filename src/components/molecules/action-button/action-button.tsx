import { TextTemplate } from "@atoms";
import { BoxOption } from "@components/molecules";
import { Style, StyleSheet } from "@styles";
import colours from "@styles/colours";
import React, { ReactNode, memo } from "react";
import { View } from "react-native";
import { ArrowButton } from "../arrow-button";

interface IProps {
  icon: ReactNode;
  label: string;
  onPress: () => void;
  testID?: string;
}

const ActionButton = ({ onPress, icon, label, testID }: IProps) => {
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
          {icon ? <View style={styles.icon}>{icon}</View> : null}
          <TextTemplate type="b2b">{label}</TextTemplate>
        </View>
        <ArrowButton color={colours.primary.p600} />
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
    marginEnd: Style.adjust(15),
  },
});

export default memo(ActionButton);
