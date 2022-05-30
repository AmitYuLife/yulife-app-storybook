import React, { memo } from "react";
import { StyleSheet, View } from "react-native";
import LottieView from "lottie-react-native";
import { Style, Colours } from "@styles";
import { TextTemplate } from "@atoms";
const lottieJson = require("./meditation-anim-lottie.json");

const VideoPlayerLoading = () => (
  <View style={styles.wrapper}>
    <LottieView resizeMode="cover" style={styles.lottie} source={lottieJson} autoPlay={true} />
    <View style={styles.loading}>
      <TextTemplate type="b1b" color={Colours.neutral.n400}>
        Loading...
      </TextTemplate>
    </View>
  </View>
);

const styles = StyleSheet.create({
  wrapper: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    backgroundColor: Colours.neutral.white,
    ...StyleSheet.absoluteFillObject,
  },
  lottie: {
    width: Style.adjust(320),
    height: Style.adjust(261),
  },
  loading: {
    marginTop: Style.adjust(40),
  },
});

export default memo(VideoPlayerLoading);
