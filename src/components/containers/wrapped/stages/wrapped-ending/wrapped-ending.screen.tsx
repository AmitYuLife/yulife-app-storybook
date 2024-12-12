import { Box, CloseSvg } from "@atoms";
import { memo, useCallback, useRef } from "react";
import { Alert, ScrollView, StyleSheet } from "react-native";
import { FadeIn, FadeInDown, FadeInUp } from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Sharing from "expo-sharing";

import ViewShot from "react-native-view-shot";
import { IWrappedStageProps } from "../../wrapped.types";
import SharableCard from "./components/wrapped-sharable-card";
import { Button, Pressable } from "@components/molecules";
import { t } from "@locale";
import Logger from "@services/logging/logger";
import LinearGradient from "react-native-linear-gradient";
import { Style } from "@styles";
import WrappedLogo from "../../components/wrapped-logo";
import { WRAPPED_BOTTOM_OFFSET } from "../../wrapped.constants";

const CONTENT_DELAY = 0;

const WrappedEndingScreen = ({ stats, nextStage }: IWrappedStageProps) => {
  const insets = useSafeAreaInsets();
  const viewShotRef = useRef<ViewShot>();

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
      <Box w="100%" h="100%" bg="#ffffff">
        <Box position="absolute" h="100%" w="100%" forceAnimated={true}>
          <Box entering={FadeInDown.duration(3000)} position="absolute" w="100%" h="20%" bottom={0}>
            <LinearGradient colors={["#ffffff", "#9179C9"]} style={styles.background} />
          </Box>

          <ScrollView
            showsVerticalScrollIndicator={true}
            contentContainerStyle={{ minHeight: Style.DEVICE_HEIGHT - insets.top - insets.bottom }}
          >
            <Box h="100%" w="100%" pt={insets.top} justifyContent="space-between" alignItems="center" px={40} gap={10}>
              <Box flex={1} justifyContent="center">
                <Box gap={10} justifyContent="center" alignItems="center" mb={30}>
                  <Box entering={FadeInUp.delay(CONTENT_DELAY).duration(800)} mt={-20}>
                    <WrappedLogo />
                  </Box>
                </Box>
                <Box entering={FadeInUp.delay(CONTENT_DELAY + 1000).duration(800)}>
                  <SharableCard viewShotRef={viewShotRef} stats={stats} />
                </Box>
              </Box>
              <Box entering={FadeInUp.delay(CONTENT_DELAY + 2000).duration(2000)} justifyContent="flex-end">
                <Box entering={FadeInUp.delay(CONTENT_DELAY + 1500).duration(1000)} mt={20} pb={WRAPPED_BOTTOM_OFFSET}>
                  <Button testID="share_button" onPress={share} translatedLabel="Share" />
                </Box>
              </Box>
            </Box>
          </ScrollView>
        </Box>
        <Box
          h={50}
          w={50}
          right={10}
          opacity={0.8}
          top={insets.top}
          position="absolute"
          alignItems="center"
          justifyContent="center"
          entering={FadeIn.duration(400)}
        >
          <Pressable onPress={nextStage} delay={1000}>
            <CloseSvg />
          </Pressable>
        </Box>
      </Box>
    </>
  );
};

export default memo(WrappedEndingScreen);

const styles = StyleSheet.create({
  background: { flex: 1 },
});
