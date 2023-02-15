import React from "react";
import styles from "./duel-empty.styles";
import { Text } from "@atoms";
import { Image, View } from "react-native";
import images from "./duel-empty.images";
import { t } from "@locale";

const _DuelEmpty = () => {
  return (
    <>
      <View style={styles.wrapper}>
        <Image style={styles.image} source={images.yugi} />
        <View style={styles.textWrapper}>
          <Text style={styles.text}>{t("screens.duel.empty.heading")}</Text>
        </View>
      </View>
    </>
  );
};

const DuelEmpty = React.memo(_DuelEmpty);

export default DuelEmpty;
