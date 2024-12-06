import { Back, Box, Logo, TextTemplate } from "@atoms";
import { IWrappedStageProps } from "../../wrapped.types";
import { memo, useCallback, useState } from "react";
import { Pressable } from "react-native";
import { FadeIn, FadeInUp, FadeOutDown } from "react-native-reanimated";
import { Button } from "@components/molecules";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import WrappedSpaceYugi from "./components/wrapped-space-yugi";
import { Navigation } from "@navigation/main";
import { ROUTES } from "@navigation/constants";
import { WrappedSpaceBackground } from "../../components/wrapped-space-background";
import { t } from "@locale";

const EXIT_DELAY = 2200;

const WrappedStagingScreen = ({ nextStage, stats }: IWrappedStageProps) => {
  const insets = useSafeAreaInsets();
  const [isExiting, setIsExiting] = useState(false);

  const onBack = useCallback(() => {
    Navigation.pop(ROUTES.wrapped);
  }, []);

  const onPress = () => {
    setIsExiting(true);

    setTimeout(
      () => {
        nextStage();
      },

      EXIT_DELAY
    );
  };

  return (
    <>
      <Box w="100%" h="100%" bg="#290163">
        <Box position="absolute" h="100%" w="100%" forceAnimated={true}>
          <Box entering={FadeIn.duration(3000)} position="absolute" w="100%" h="100%">
            <WrappedSpaceBackground />
          </Box>
          <Box h="100%" w="100%" bg="rgba(0,0,0,.2)" position="absolute" />
          <Box
            px={40}
            w="100%"
            h="100%"
            gap={10}
            pt={insets.top}
            pb={insets.bottom}
            alignItems="center"
            justifyContent="space-between"
            entering={FadeInUp.duration(800)}
          >
            <Box pt={80} w="100%" justifyContent="center" alignItems="center">
              <Box h={200} w="100%" justifyContent="center" alignItems="center">
                {!isExiting ? <WrappedSpaceYugi size={200} /> : null}
              </Box>
            </Box>
            {!isExiting ? (
              <>
                <Box mt={0} pb={100}>
                  <Box
                    alignItems="center"
                    justifyContent="center"
                    exiting={FadeOutDown.delay(400).duration(500)}
                    entering={FadeInUp.delay(1000).duration(1000)}
                  >
                    <Logo type="full" colour="white" height={60} />
                  </Box>
                  <Box mt={20} gap={5}>
                    <Box exiting={FadeOutDown.delay(200).duration(500)} entering={FadeInUp.delay(1100).duration(800)}>
                      <TextTemplate type="h1" textAlign="center" color="#fff">
                        {t("screens.wrapped.staging.title")}
                      </TextTemplate>
                    </Box>
                    <Box
                      mt={5}
                      entering={FadeInUp.delay(1200).duration(800)}
                      exiting={FadeOutDown.delay(200).duration(500)}
                    >
                      <TextTemplate type="b1" color="rgba(255,255,255,.9)" textAlign="center">
                        {t("screens.wrapped.staging.description")}
                      </TextTemplate>
                    </Box>
                  </Box>
                </Box>
                <Box
                  bottom={insets.bottom}
                  entering={FadeInUp.delay(1300).duration(800)}
                  exiting={FadeOutDown.delay(1000).duration(500)}
                >
                  <Button isLoading={!stats} onPress={onPress} translationKey="labels.cta.continue" />
                </Box>
              </>
            ) : null}
          </Box>
        </Box>
      </Box>

      <Box position="absolute" w="100%" mt={insets.top} top={0} px={20}>
        <Pressable hitSlop={20} onPress={onBack}>
          <Back color={"white"} />
        </Pressable>
      </Box>

      {isExiting ? (
        <Box entering={FadeIn.delay(1200).duration(1000)} h="100%" w="100%" bg="#FFFABF" position="absolute" />
      ) : null}
    </>
  );
};

export default memo(WrappedStagingScreen);
