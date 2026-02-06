import { Box, Logo, TextTemplate } from "@atoms";
import { Button, Markdown, TouchableOpacityWithDelay } from "@components/molecules";
import { Colours, Style } from "@styles";
import { FullScreenHeroProps } from "./types";
import { LayoutChangeEvent, SafeAreaView } from "react-native";
import { markdownStyles, styles } from "./styles";
import { memo, useCallback, useState } from "react";
import LoopingCarousel from "./components/looping-carousel";
import { FadeIn, SlideInDown } from "react-native-reanimated";
import { LOGIN_HERO_CLAIM_ACCOUNT_BUTTON, LOGIN_HERO_LOGIN_BUTTON } from "@ids";
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
    <Box h="100%" alignContent="space-between" justifyContent="space-between" entering={FadeIn.duration(1000)}>
      <LoopingCarousel data={slides} setCurrentSlide={(index: number) => setCurrentSlide(index)} />
      <Box position="absolute" top={0} left={0} right={0}>
        <SafeAreaView>
          <Logo type="full" width={Style.adjust(76)} style={styles.logo} colour={Colours.neutral.white} />
        </SafeAreaView>
      </Box>
      <Box position="absolute" bottom={0} left={0} right={0} h="100%" justifyContent="flex-end">
        <Box pb={0} entering={FadeIn.duration(1000)} justifyContent="flex-end" h="100%">
          <Box entering={FadeIn.duration(1000)}>{slides[currentSlide].foregroundComponent}</Box>
          <Box entering={SlideInDown.duration(1000)}>
            <Box
              pv={40}
              ph={32}
              shadowRadius={16}
              shadowOpacity={0.1}
              onLayout={handleLayout}
              borderTopLeftRadius={16}
              borderTopRightRadius={16}
              bg={Colours.neutral.white}
              shadowColor={Colours.neutral.black}
              shadowOffset={{ width: 0, height: -8 }}
            >
              <Button
                size="Large"
                onPress={primaryCta.onPress}
                translatedLabel={primaryCta.label}
                translationKey=""
                testID={LOGIN_HERO_CLAIM_ACCOUNT_BUTTON}
              />
              {secondaryCta ? (
                <TouchableOpacityWithDelay onPress={secondaryCta.onPress} delay={1000}>
                  <Box pv={16}>
                    <TextTemplate
                      type="l1b"
                      textAlign="center"
                      color={Colours.primary.p600}
                      decoration="underline"
                      testID={LOGIN_HERO_LOGIN_BUTTON}
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
      </Box>
    </Box>
  );
};

export default memo(FullScreenHero);
