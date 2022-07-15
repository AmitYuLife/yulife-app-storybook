import React from "react";
import { StyleSheet, ViewStyle, View, ScrollView } from "react-native";
import { YUSCREEN } from "@ids";
import { Style } from "@styles";
import { NameAndLevel } from "@components/molecules";
import { AvatarAndEquipment } from "./subcomponents/avatar-and-equipment/avatar-and-equipment";

export const YuScreen = () => {
  return (
    <View style={styles.wrapper} testID={YUSCREEN}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.padTop} />
        <NameAndLevel hideWorldIcon={true} useWorldColor={true} />
        <AvatarAndEquipment />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: "center",
  } as ViewStyle,
  scrollView: {
    width: Style.DEVICE_WIDTH,
  } as ViewStyle,
  padTop: {
    height: Style.adjust(32),
  } as ViewStyle,
  userInfoWrapper: {
    alignItems: "center",
  } as ViewStyle,
});
