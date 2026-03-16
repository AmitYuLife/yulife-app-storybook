import React, { memo } from "react";
import { View } from "react-native";
import { Style, Colours, StyleSheet } from "@styles";
import { Box, DeferredRender, TextTemplate } from "@atoms";
const lottieJson = require("./meditation-lottie.json");
import { MEDITOPIA_CHALLENGE_LOAD_SCREEN } from "@ids";
import { t } from "@locale";
import { LottieView } from "@molecules";

const AvPlayerLoading = () => (
  <View style={styles.wrapper} testID={MEDITOPIA_CHALLENGE_LOAD_SCREEN}>
    <LottieView resizeMode="cover" style={styles.lottie} source={lottieJson} autoPlay={true} />
    <DeferredRender>
      <Box mt={40} w="100%" justifyContent="center" alignItems="center">
        <TextTemplate type="b1b" color={Colours.neutral.n400}>
          {t("screens.challenges.details.loading")}
        </TextTemplate>
      </Box>
    </DeferredRender>
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
});

export default memo(AvPlayerLoading);
