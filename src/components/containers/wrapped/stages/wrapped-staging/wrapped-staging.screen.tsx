import { Back, Box, TextTemplate } from "@atoms";
import { memo, useState } from "react";
import { Pressable } from "react-native";
import { FadeIn, FadeInDown, FadeOut, FadeOutDown } from "react-native-reanimated";
import { Button } from "@components/molecules";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import LinearGradient from "react-native-linear-gradient";
import WrappedLogo from "../../components/wrapped-logo";
import { Style, StyleSheet } from "@styles";
import BalloonYugi from "./components/balloon-yugi";
import { WRAPPED_BOTTOM_OFFSET } from "../../wrapped.constants";
import { t } from "@locale";
import { GenericHeadingPad } from "@organisms";
import { HEIGHT } from "@styles/top-bar.styles";

const EXIT_DELAY = 5000;

interface IWrappedStagingScreenProps {
  isLoading?: boolean;
  isError?: boolean;
  onBack?: () => void;
  onStartPress?: () => void;
  onAnimationEnd?: () => void;
}

const WrappedStagingScreen = ({
  onAnimationEnd,
  onStartPress,
  onBack,
  isError,
  isLoading,
}: IWrappedStagingScreenProps) => {
  const insets = useSafeAreaInsets();
  const [isExiting, setIsExiting] = useState(false);

  const onPress = () => {
    setIsExiting(true);
    onStartPress();

    setTimeout(
      () => {
        onAnimationEnd?.();
      },

      EXIT_DELAY
    );
  };

  return (
    <>
      <Box w="100%" h="100%" bg="#fff">
        <Box
          h="100%"
          w="100%"
          bottom={0}
          bg="white"
          position="absolute"
          justifyContent="flex-end"
          entering={FadeInDown.duration(1000)}
        >
          <Box h="30%" w="100%">
            <LinearGradient colors={["#ffffff", "#FFFABF"]} style={styles.background} />
          </Box>
        </Box>
        <Box position="absolute" h="100%" w="100%" forceAnimated={true}>
          <Box
            px={40}
            w="100%"
            h="100%"
            gap={10}
            pt={insets.top}
            pb={insets.bottom}
            alignItems="center"
            justifyContent="space-between"
          >
            {!isExiting ? (
              <Box
                h="100%"
                justifyContent="center"
                alignItems="center"
                pb={40}
                exiting={FadeOutDown.duration(500)}
                mt={-Style.adjust(40)}
              >
                <Box flex={1} justifyContent="center" alignItems="center">
                  <Box mb={30}>
                    <TextTemplate type="b1">{t("screens.wrapped.staging.title")}</TextTemplate>
                  </Box>
                  <Box transform={[{ scale: 1.2 }]} mt={20}>
                    <WrappedLogo size="large" />
                  </Box>
                </Box>
                <Box pb={80}>
                  {isError ? (
                    <TextTemplate type="h3" textAlign="center">
                      {t("screens.wrapped.error")}
                    </TextTemplate>
                  ) : null}
                </Box>
              </Box>
            ) : null}

            <Box
              position="absolute"
              h={100}
              bottom={insets.bottom + WRAPPED_BOTTOM_OFFSET}
              w="100%"
              // don't remove - fixes layout issue for some reason
              bg="transparent"
              justifyContent="flex-end"
            >
              {!isExiting && !isError ? (
                <Box entering={FadeInDown.delay(200).duration(800)} exiting={FadeOutDown.duration(600)}>
                  <Button isLoading={isLoading} onPress={onPress} translationKey="labels.cta.lets_go" />
                </Box>
              ) : null}
            </Box>
          </Box>
        </Box>
      </Box>
      {!isExiting ? (
        <Box position="absolute" w="100%" top={-HEIGHT} px={20} exiting={FadeOut.duration(500)}>
          <GenericHeadingPad />
          <Pressable hitSlop={20} onPress={onBack}>
            <Back />
          </Pressable>
        </Box>
      ) : null}

      {isExiting ? (
        <Box position="absolute" left={Style.DEVICE_WIDTH * 0.2}>
          <BalloonYugi />
        </Box>
      ) : null}

      {isExiting ? (
        <Box entering={FadeIn.delay(4000).duration(1000)} h="100%" w="100%" bg="#FFFABF" position="absolute" />
      ) : null}
    </>
  );
};

export default memo(WrappedStagingScreen);

const styles = StyleSheet.create({
  background: { flex: 1 },
});
