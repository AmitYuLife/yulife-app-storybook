import React, { memo } from "react";
import { SkeletonLoading, Wrapper } from "@atoms";
import GenericHeadingAbsolute, { GenericHeadingPad } from "@atoms/generic-heading/generic-heading-absolute";
import { StyleSheet, View, ViewStyle } from "react-native";
import { Style } from "@styles";

interface IProps {
  handleBack: () => void;
}

const RewardDetailsLoadingScreen = ({ handleBack }: IProps) => (
  <>
    <Wrapper alignItems="center">
      <GenericHeadingPad />
      <View>
        <SkeletonLoading style={styles.header} />
        <SkeletonLoading style={styles.title} />
        <SkeletonLoading style={styles.text} />
        <SkeletonLoading style={styles.text} />
        <SkeletonLoading style={styles.text} />

        <SkeletonLoading style={styles.title} />
        <SkeletonLoading style={styles.text} />
        <SkeletonLoading style={styles.text} />
        <SkeletonLoading style={styles.text} />
        <SkeletonLoading style={styles.text} />
        <SkeletonLoading style={styles.button} />
        <SkeletonLoading style={styles.title} />
        <SkeletonLoading style={styles.text} />
        <SkeletonLoading style={styles.text} />
      </View>
    </Wrapper>
    <GenericHeadingAbsolute logo="yulife" onLeftIconPress={handleBack} />
  </>
);

const styles = StyleSheet.create({
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
  button: {
    width: Style.adjust(327),
    height: Style.adjust(48),
    marginTop: Style.adjust(40),
  } as ViewStyle,
});

export default memo(RewardDetailsLoadingScreen);
