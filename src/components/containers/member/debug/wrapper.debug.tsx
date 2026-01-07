import { GenericHeadingAbsolute, GenericHeadingPad } from "@organisms";
import { ROUTES } from "@navigation/constants";
import { Colours, StyleSheet } from "@styles";
import React, { useCallback } from "react";
import { ScrollView, View } from "react-native";
import { Navigation } from "@navigation/main";

interface IProps {
  children: React.ReactNode;
}

const WrapperDebug = ({ children }: IProps) => {
  const onLeftIconPress = useCallback(() => Navigation.pop(ROUTES.debug), []);
  return (
    <View style={styles.wrapper}>
      <GenericHeadingPad />
      <ScrollView contentContainerStyle={styles.center}>{children}</ScrollView>
      <GenericHeadingAbsolute logo="yulife" onLeftIconPress={onLeftIconPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: Colours.neutral.n50,
  },
  center: {
    justifyContent: "center",
  },
});

export default WrapperDebug;
