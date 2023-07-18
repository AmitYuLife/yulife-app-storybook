import React, { memo } from "react";
import { StyleSheet, View } from "react-native";
import { GenericHeadingAbsolute, GenericHeadingPad } from "@organisms";
import { Navigation } from "@navigation/main";
import { ROUTES } from "@navigation/constants";
import { Style } from "@styles";

export const PlayGround = () => {
  return (
    <View style={styles.wrapper}>
      <GenericHeadingPad />
      <View style={styles.container} />
      <GenericHeadingAbsolute heading={"Playground"} onLeftIconPress={() => Navigation.popToRoot(ROUTES.debug)} />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  container: {
    justifyContent: "center",
    padding: Style.adjust(16),
  },
});

export default memo(PlayGround);
