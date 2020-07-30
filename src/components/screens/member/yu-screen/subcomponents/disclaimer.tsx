import React, { memo } from "react";
import { StyleSheet, TextStyle, Text, View } from "react-native";
import { Style } from "@styles";

function _Disclaimer() {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.sectionTitle}>
        These are all the benefits held by your company, but may differ for some YuLifers. We are working to show your
        personal benefits shortly, but if you have any questions in the meantime please reach out to your HR Manager.
      </Text>
    </View>
  );
}

export const Disclaimer = memo(_Disclaimer, () => true);

const styles = StyleSheet.create({
  wrapper: { marginBottom: 18, marginHorizontal: Style.adjust(30) },
  sectionTitle: {
    marginTop: 5,
    color: "#6E6E70",
    fontSize: 10,
    lineHeight: 15,
    letterSpacing: 0.25,
  } as TextStyle,
});
