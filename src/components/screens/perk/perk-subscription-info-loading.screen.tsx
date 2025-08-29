import React, { memo } from "react";
import { SkeletonLoading } from "@atoms";
import { GenericHeadingPad, GenericHeadingAbsolute } from "@organisms";
import { View, ViewStyle } from "react-native";
import { Style, StyleSheet } from "@styles";

interface IProps {
  handleBack: () => void;
}

export const PerkSubscriptionInfoLoadingScreen = ({ handleBack }: IProps) => (
  <View style={styles.wrapper}>
    <GenericHeadingPad />
    <View>
      <SkeletonLoading style={styles.header} />
      <SkeletonLoading style={styles.title} />
      <SkeletonLoading style={styles.text} />
      <SkeletonLoading style={styles.text} />
      <SkeletonLoading style={styles.text} />
      <SkeletonLoading style={{ ...styles.text, marginBottom: 40 }} />

      <SkeletonLoading style={styles.input} />
      <SkeletonLoading style={styles.input} />
      <SkeletonLoading style={styles.input} />
      <SkeletonLoading style={styles.button} />
    </View>
    <GenericHeadingAbsolute logo="yulife" onLeftIconPress={handleBack} />
  </View>
);

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    paddingHorizontal: Style.adjust(24),
    alignItems: "center",
  } as ViewStyle,
  header: {
    width: Style.adjust(327),
    height: Style.adjust(196),
  } as ViewStyle,
  input: {
    width: Style.adjust(327),
    height: Style.adjust(40),
    marginBottom: Style.adjust(10),
  } as ViewStyle,
  title: {
    width: Style.adjust(227),
    height: Style.adjust(20),
    marginTop: Style.adjust(40),
    marginBottom: Style.adjust(16),
  } as ViewStyle,
  text: {
    width: Style.adjust(327),
    height: Style.adjust(15),
    marginTop: Style.adjust(5),
  } as ViewStyle,
  button: {
    width: Style.adjust(300),
    height: Style.adjust(48),
    alignSelf: "center",
  },
});

export default memo(PerkSubscriptionInfoLoadingScreen);
