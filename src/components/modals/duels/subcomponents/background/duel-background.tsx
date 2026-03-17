import * as React from "react";
import { Image, View } from "react-native";
import styles from "./duel-background.styles";

import { StyleSheet } from "@styles";
const DuelBackground = () => {
  return (
    <View style={StyleSheet.absoluteFill}>
      <Image
        resizeMethod="resize"
        resizeMode="cover"
        source={require("../../../../../../assets/duels/background.png")}
        style={styles.backgroundImage}
      />
    </View>
  );
};

export default DuelBackground;
