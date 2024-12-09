import { Box, TextTemplate } from "@atoms";
import { memo, useCallback, useRef } from "react";
import { Alert, StyleSheet, useWindowDimensions } from "react-native";
import { FadeIn, FadeInUp } from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Sharing from "expo-sharing";

import ViewShot from "react-native-view-shot";
import WrappedFlyingAsset from "../../components/wrapped-flying-asset";
import { IWrappedStageProps } from "../../wrapped.types";
import SharableCard from "./components/wrapped-sharable-card";
import { Button, LottieView, SecondaryButton } from "@components/molecules";
import { t } from "@locale";
import Logger from "@services/logging/logger";

const CONTENT_DELAY = 2000;
const BACKGROUND_ANIMATION = require("@assets/yuniversal/yuniversal_quest_map_1.json");

const WrappedEndingScreen = ({ stats, nextStage }: IWrappedStageProps) => {
  const insets = useSafeAreaInsets();
  const viewShotRef = useRef<ViewShot>();
  const { height } = useWindowDimensions();

  const share = useCallback(async () => {
    try {
      const uri = await viewShotRef?.current?.capture();
      const isAvailable = await Sharing.isAvailableAsync();
      if (isAvailable && uri) {
        Logger.logEvent("wrapped_share_pressed");

        await Sharing.shareAsync(uri);
      } else {
        Alert.alert(t("screens.wrapped.ending.share_unavailable"));
      }
    } catch (error) {
      Alert.alert(t("screens.wrapped.ending.share_error"));
    }
  }, []);

  return (
    <>
      <Box w="100%" h="100%" bg="#290163">
        <Box position="absolute" h="100%" w="100%" forceAnimated={true}>
          <Box entering={FadeIn.duration(3000)} position="absolute" w="100%" h="100%">
            <LottieView
              loop={true}
              autoPlay={true}
              resizeMode="cover"
              suppressLoadingUi={true}
              style={styles.background}
              source={BACKGROUND_ANIMATION}
            />
          </Box>

          <Box position="absolute" top={height * 0.05}>
            <WrappedFlyingAsset
              size={200}
              rotation="-5deg"
              translationFloat={0}
              assetRotation="-5deg"
              duration={3000}
              asset={require("./rocket-yugi.webp")}
            />
          </Box>
          <Box w="100%" h="100%" pt={insets.top} justifyContent="center" alignItems="center" px={40} gap={10}>
            <Box flex={1} justifyContent="center">
              <Box gap={10} justifyContent="center" alignItems="center" mb={40}>
                <Box entering={FadeInUp.delay(CONTENT_DELAY).duration(800)}>
                  <TextTemplate type="h2" textAlign="center" color="#fff">
                    {t("screens.wrapped.ending.title")}
                  </TextTemplate>
                </Box>
                <Box entering={FadeInUp.delay(CONTENT_DELAY + 200).duration(800)}>
                  <TextTemplate type="b1" color="rgba(255,255,255,.9)">
                    {t("screens.wrapped.ending.subtitle")}
                  </TextTemplate>
                </Box>
              </Box>
              <Box entering={FadeInUp.delay(CONTENT_DELAY + 1000).duration(800)}>
                <SharableCard viewShotRef={viewShotRef} stats={stats} />
              </Box>
              <Box entering={FadeInUp.delay(CONTENT_DELAY + 1500).duration(1000)} mt={20}>
                <SecondaryButton testID="share_button" onPress={share} translatedLabel="Share" />
              </Box>
            </Box>
            <Box
              entering={FadeInUp.delay(CONTENT_DELAY + 2000).duration(2000)}
              justifyContent="flex-end"
              pb={insets.bottom}
            >
              <Button testID="finish_button" onPress={nextStage} translatedLabel="Finish" />
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

const styles = StyleSheet.create({
  background: { width: "100%", height: "100%" },
});

export default memo(WrappedEndingScreen);
