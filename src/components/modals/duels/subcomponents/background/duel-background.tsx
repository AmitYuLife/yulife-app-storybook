import * as React from "react";
import { Image, StyleSheet, View } from "react-native";
import images from "./duel-background.images";
import styles from "./duel-background.styles";

export default function DuelBackground() {
  return (
    <View style={StyleSheet.absoluteFill}>
      <Image resizeMethod="resize" resizeMode="cover" source={images.background} style={styles.backgroundImage} />
    </View>
  );
}
