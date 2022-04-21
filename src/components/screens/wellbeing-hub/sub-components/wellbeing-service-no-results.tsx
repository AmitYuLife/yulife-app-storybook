import React, { FC } from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import { Style } from "@styles";
import { TextTemplate } from "@atoms";
import { Button } from "@molecules";
import { GenericHeadingAbsolute, GenericHeadingPad } from "@organisms";
import { YugiProcessingIcon } from "@atoms/icon/yugi-processing-icon";

interface IProps {
  handleClose: () => void;
}

const WellBeingServiceNoResults: FC<IProps> = ({ handleClose }) => (
  <View style={styles.wrapper}>
    <GenericHeadingPad />
    <View style={styles.container}>
      <YugiProcessingIcon />
      <View style={styles.title}>
        <TextTemplate type="h1">Check back later!</TextTemplate>
      </View>
      <TextTemplate type="b2" textAlign="center">
        You currently don’t have any company wellbeing benefits. You may be able to find them here at a later date.
      </TextTemplate>
    </View>
    <Button onPress={handleClose} label="Back" />
    <GenericHeadingAbsolute logo="yulife" onLeftIconPress={handleClose} />
  </View>
);

const styles = StyleSheet.create({
  wrapper: {
    flexGrow: 0.8,
    paddingHorizontal: Style.adjust(32),
    justifyContent: "space-between",
  } as ViewStyle,
  container: {
    alignItems: "center",
  } as ViewStyle,
  title: {
    marginTop: Style.adjust(32),
    marginBottom: Style.adjust(16),
  } as ViewStyle,
});

export default WellBeingServiceNoResults;
