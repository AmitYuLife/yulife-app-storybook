import React, { memo } from "react";
import { StyleSheet, TextStyle, Text, View } from "react-native";
import { Style } from "@styles";

function _Disclaimer() {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.sectionTitle}>
        These are the benefits held by all the employees at your company, but you may have a different category of
        cover. We are working to show your personal benefits shortly, but if you have any questions in the meantime
        please reach out to your HR Manager.
      </Text>
    </View>
  );
}

export const Disclaimer = memo(_Disclaimer, () => true);

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: Style.adjust(24),
    marginTop: Style.adjust(16),
    marginHorizontal: Style.adjust(30),
  },
  sectionTitle: {
    color: "#6E6E70",
    fontSize: Style.adjust(10),
    lineHeight: Style.adjust(15),
    letterSpacing: 0.25,
  } as TextStyle,
});
