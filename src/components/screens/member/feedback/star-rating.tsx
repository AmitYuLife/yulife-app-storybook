import React from "react";
import { Image, View } from "react-native";
import { Style, StyleSheet } from "@styles";
import assets from "./assets";
import { TouchableOpacityWithDelay } from "@molecules";

interface IProps {
  onSelect: (value: number) => void;
  rating: number;
}
const StarRating = ({ onSelect, rating }: IProps) => (
  <View style={styles.starWrapper}>
    {Array.from(Array(5)).map((_, i) => (
      <TouchableOpacityWithDelay key={i} onPress={() => onSelect(i + 1)} style={styles.star}>
        {i < rating ? <Image source={assets.starActive} /> : <Image source={assets.starInactive} />}
      </TouchableOpacityWithDelay>
    ))}
  </View>
);

export default StarRating;

const styles = StyleSheet.create({
  star: {
    marginHorizontal: Style.SCALE_UP_AND_DOWN(5),
  },
  starWrapper: {
    flexDirection: "row",
  },
});
