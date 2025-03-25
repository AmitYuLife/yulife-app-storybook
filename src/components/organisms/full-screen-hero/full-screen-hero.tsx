import { memo, useState } from "react";
import { KeyboardAvoidingView, Platform, SafeAreaView } from "react-native";
import { Colours, Style } from "@styles";
import { Box, Logo, TextTemplate } from "@atoms";
import { Button, Markdown, TouchableOpacityWithDelay } from "@components/molecules";
import { FullScreenHeroProps } from "./types";
import { markdownStyles, styles } from "./styles";
import { BACKGROUND_IMAGE_MAP } from "./constants";
import useInterval from "@use-it/interval";
import { DEVICES } from "@styles/media";

const FullScreenHero = ({ primaryCta, secondaryCta, disclaimerMarkdown, slides }: FullScreenHeroProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useInterval(() => {
    setCurrentSlide((slide) => (slide + 1) % slides.length);
  }, 5000);

  return (
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : null} style={styles.flex}>
      <Box
        position="absolute"
        top={getTopOffset().background}
        left={0}
        right={0}
        bottom={0}
        width={Style.DEVICE_WIDTH}
        height={Style.DEVICE_HEIGHT}
        bg={Colours.neutral.white}
      >
        {BACKGROUND_IMAGE_MAP[slides[currentSlide].backgroundImage]}
      </Box>
      <SafeAreaView style={styles.wrapper}>
        <Logo type="full" width={Style.adjust(114)} style={styles.logo} />
        <Box key={currentSlide} maxWidth={311} mt={getTopOffset().heading}>
          <TextTemplate type="h3" textAlign="center" color={Colours.inkStrong}>
            {slides[currentSlide].title}
          </TextTemplate>
        </Box>
      </SafeAreaView>
      <Box
        bg={Colours.neutral.white}
        pv={40}
        ph={32}
        borderTopLeftRadius={16}
        borderTopRightRadius={16}
        shadowColor={Colours.neutral.black}
        shadowOffset={{ width: 0, height: -8 }}
        shadowOpacity={0.1}
        shadowRadius={16}
      >
        <Button size="Large" onPress={primaryCta.onPress} translatedLabel={primaryCta.label} translationKey="" />
        {secondaryCta ? (
          <TouchableOpacityWithDelay onPress={secondaryCta.onPress} delay={1000}>
            <Box pv={20}>
              <TextTemplate type="l1b" textAlign="center" color={Colours.primary.p600} decoration="underline">
                {secondaryCta.label}
              </TextTemplate>
            </Box>
          </TouchableOpacityWithDelay>
        ) : null}
        {disclaimerMarkdown ? (
          <Box pt={20}>
            <Markdown text={disclaimerMarkdown} markdownStyles={markdownStyles} />
          </Box>
        ) : null}
      </Box>
    </KeyboardAvoidingView>
  );
};

function getTopOffset() {
  if (Style.DEVICE_HEIGHT < DEVICES.iPhone8.height) {
    return {
      background: Style.adjust(-106),
      heading: Style.adjust(-16),
    };
  }

  return {
    background: 0,
    heading: 0,
  };
}

export default memo(FullScreenHero);
