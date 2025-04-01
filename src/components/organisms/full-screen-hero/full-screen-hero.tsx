import { Box, Logo, TextTemplate } from "@atoms";
import { Button, Markdown, TouchableOpacityWithDelay } from "@components/molecules";
import { Colours, Style } from "@styles";
import { FullScreenHeroProps } from "./types";
import { KeyboardAvoidingView, Platform, SafeAreaView } from "react-native";
import { markdownStyles, styles } from "./styles";
import { memo } from "react";
import LoopingCarousel from "./components/looping-carousel";
import { SlideInDown } from "react-native-reanimated";

const FullScreenHero = ({ primaryCta, secondaryCta, disclaimerMarkdown, slides }: FullScreenHeroProps) => {
  return (
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : null} style={styles.flex}>
      <LoopingCarousel data={slides} />
      <Box position="absolute" top={0} left={0} right={0}>
        <SafeAreaView>
          <Logo type="full" width={Style.adjust(114)} style={styles.logo} />
        </SafeAreaView>
      </Box>
      <Box position="absolute" bottom={0} left={0} right={0}>
        <Box
          forceAnimated={true}
          entering={SlideInDown.duration(1000)}
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
      </Box>
    </KeyboardAvoidingView>
  );
};

export default memo(FullScreenHero);
