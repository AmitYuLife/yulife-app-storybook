import React from "react";
import { SkeletonLoading } from "@atoms";
import GenericHeadingAbsolute, { GenericHeadingPad } from "@atoms/generic-heading/generic-heading-absolute";
import { StyleSheet, View, ViewStyle } from "react-native";
import { Style } from "@styles";

interface IProps {
  handleBack: () => void;
}

export const WellbeingHubDetailsLoading = ({ handleBack }: IProps) => (
  <View style={styles.wrapper}>
    <GenericHeadingPad />
    <View>
      <SkeletonLoading style={styles.header} />
      <SkeletonLoading style={styles.title} />
      <SkeletonLoading style={styles.text} />
      <SkeletonLoading style={styles.text} />
      <SkeletonLoading style={styles.text} />
      <SkeletonLoading style={{ ...styles.text, marginBottom: 40 }} />

      <SkeletonLoading style={styles.subHeader} />
      <SkeletonLoading style={styles.title} />
      <SkeletonLoading style={styles.text} />
      <SkeletonLoading style={styles.text} />
      <SkeletonLoading style={styles.text} />
      <SkeletonLoading style={styles.text} />
    </View>
    <GenericHeadingAbsolute logo="yulife" onLeftIconPress={handleBack} />
  </View>
);

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    paddingHorizontal: Style.adjust(24),
  } as ViewStyle,
  header: {
    width: Style.adjust(327),
    height: Style.adjust(196),
  } as ViewStyle,
  subHeader: {
    width: Style.adjust(327),
    height: Style.adjust(120),
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
});
