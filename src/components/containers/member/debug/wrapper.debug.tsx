import GenericHeadingAbsolute, { GenericHeadingPad } from "@atoms/generic-heading/generic-heading-absolute";
import { ROUTES } from "@navigation/constants";
import { Colours, Style } from "@styles";
import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { Navigation } from "react-native-navigation";

interface IProps {
  children: JSX.Element | JSX.Element[];
}

const WrapperDebug = ({ children }: IProps) => (
  <View style={styles.wrapper}>
    <GenericHeadingPad />
    <ScrollView contentContainerStyle={styles.center}>{children}</ScrollView>
    <GenericHeadingAbsolute logo="yulife" onLeftIconPress={() => Navigation.pop(ROUTES.debug)} />
  </View>
);

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: Colours.neutral.n50,
  },
  center: {
    justifyContent: "center",
    margin: Style.adjust(12),
  },
});

export default WrapperDebug;
