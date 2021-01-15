import React from "react";
import styles from "./duel-empty.styles";
import { Text } from "@atoms";
import { Image, View } from "react-native";
import images from "./duel-empty.images";

const _DuelEmpty = () => {
  return (
    <>
      <View style={styles.wrapper}>
        <Image style={styles.image} source={images.yugi} />
        <View style={styles.textWrapper}>
          <Text style={styles.text}>You don’t have any past duels recorded. Why not challenge a friend?</Text>
        </View>
      </View>
    </>
  );
};

const DuelEmpty = React.memo(_DuelEmpty);

export default DuelEmpty;
