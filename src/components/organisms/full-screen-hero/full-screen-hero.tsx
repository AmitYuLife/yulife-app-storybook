import { Box, Logo, TextTemplate } from "@atoms";
import { Button, Markdown, TouchableOpacityWithDelay } from "@components/molecules";
import { Colours, Style } from "@styles";
import { FullScreenHeroProps } from "./types";
import { KeyboardAvoidingView, LayoutChangeEvent, Platform, SafeAreaView } from "react-native";
import { markdownStyles, styles } from "./styles";
import { memo, useCallback, useState } from "react";
import LoopingCarousel from "./components/looping-carousel";
import { FadeIn, SlideInDown } from "react-native-reanimated";
import { FULL_SCREEN_HERO_BUTTON } from "@ids";
import { useLoginHeroContext } from "@components/screens/login/login-hero/login-hero.context";

const FullScreenHero = ({ primaryCta, secondaryCta, disclaimerMarkdown, slides }: FullScreenHeroProps) => {
  const { setCtaContainerHeight } = useLoginHeroContext();
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleLayout = useCallback(
    (e: LayoutChangeEvent) => {
      setCtaContainerHeight(e.nativeEvent.layout.height);
    },
    [setCtaContainerHeight]
  );

  return (
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : null} style={styles.flex}>
      <Box
        forceAnimated={true}
        entering={FadeIn.duration(1000)}
        justifyContent="space-between"
        alignContent="space-between"
        flex={1}
      >
        <LoopingCarousel data={slides} setCurrentSlide={(index: number) => setCurrentSlide(index)} />
        <Box position="absolute" top={0} left={0} right={0}>
          <SafeAreaView>
            <Logo type="full" width={Style.adjust(76)} style={styles.logo} colour={Colours.neutral.white} />
          </SafeAreaView>
        </Box>
        <Box position="absolute" bottom={0} left={0} right={0} entering={SlideInDown.duration(1000)}>
          <Box position="relative" left={0} right={0} bottom={0} entering={FadeIn.duration(1000)}>
            {slides[currentSlide].foregroundComponent}
          </Box>
          <Box
            forceAnimated={true}
            bg={Colours.neutral.white}
            pv={40}
            ph={32}
            borderTopLeftRadius={16}
            borderTopRightRadius={16}
            shadowColor={Colours.neutral.black}
            shadowOffset={{ width: 0, height: -8 }}
            shadowOpacity={0.1}
            shadowRadius={16}
            entering={FadeIn.duration(1000)}
            onLayout={handleLayout}
          >
            <Button
              size="Large"
              onPress={primaryCta.onPress}
              translatedLabel={primaryCta.label}
              translationKey=""
              testID={FULL_SCREEN_HERO_BUTTON(primaryCta.label)}
            />
            {secondaryCta ? (
              <TouchableOpacityWithDelay onPress={secondaryCta.onPress} delay={1000}>
                <Box pv={16}>
                  <TextTemplate
                    type="l1b"
                    textAlign="center"
                    color={Colours.primary.p600}
                    decoration="underline"
                    testID={FULL_SCREEN_HERO_BUTTON(secondaryCta.label)}
                  >
                    {secondaryCta.label}
                  </TextTemplate>
                </Box>
              </TouchableOpacityWithDelay>
            ) : null}
            {disclaimerMarkdown ? (
              <Box pt={12}>
                <Markdown text={disclaimerMarkdown} markdownStyles={markdownStyles} />
              </Box>
            ) : null}
          </Box>
        </Box>
      </Box>
    </KeyboardAvoidingView>
  );
};

export default memo(FullScreenHero);
