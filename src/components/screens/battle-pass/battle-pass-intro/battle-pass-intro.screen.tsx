import { memo, useMemo, FC } from "react";
import { ImageSourcePropType, ScrollView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Box } from "@atoms";
import { TextTemplate } from "@atoms";
import { Button } from "@molecules";
import { Colours, Style, StyleSheet, TOP_BAR } from "@styles";
import { t } from "@locale";
import { ImageBackground } from "expo-image";
import BattlePassIntroStep from "./battle-pass-intro-step";
import LinearGradient from "react-native-linear-gradient";
import { BATTLE_PASS_INTRO_SCREEN, BATTLE_PASS_INTRO_SCREEN_TITLE, BATTLE_PASS_INTRO_SCREEN_CTA_BUTTON } from "@ids";

interface Props {
  onClose: () => void;
  backgroundImage: ImageSourcePropType;
  isInnerScreen?: boolean;
}

const BACKGROUND_COLOR = "#290263";
const GRADIENT_LOCATIONS = [0, 0.96, 0.99, 1];
const GRADIENT_COLORS = [BACKGROUND_COLOR, "rgba(41, 2, 99, 0.5)", "rgba(41, 2, 99, 0.1)", "transparent"];

const BattlePassIntroScreen: FC<Props> = ({ backgroundImage, onClose, isInnerScreen }) => {
  const insets = useSafeAreaInsets();

  const steps = useMemo(
    () => [
      { text: t("screens.battle_pass.ftux.intro.steps.step_1"), image: require("./assets/step-1.webp") },
      { text: t("screens.battle_pass.ftux.intro.steps.step_2"), image: require("./assets/step-2.webp") },
      { text: t("screens.battle_pass.ftux.intro.steps.step_3"), image: require("./assets/step-3.webp") },
    ],
    []
  );

  const title = t("screens.battle_pass.ftux.intro.title");

  const topBarTp = useMemo(() => {
    return isInnerScreen ? TOP_BAR.TOP_BAR_WITH_PAD : TOP_BAR.PADDING_TOP + Style.adjust(24);
  }, []);

  const imageBackgroundStyle = useMemo(() => {
    return { ...styles.backgroundImage, top: insets.top + Style.adjust(100) };
  }, [insets.top]);

  const bottomGradientStyle = useMemo(() => {
    return { ...styles.bottomGradient, paddingBottom: Style.adjust(isInnerScreen ? 100 : 24) };
  }, [isInnerScreen]);

  const topGradientStyle = useMemo(() => {
    return {
      ...styles.bottomGradient,
      paddingBottom: Style.adjust(isInnerScreen ? 30 : 10),
      top: 0,
      transform: [{ rotate: "180deg" }],
    };
  }, []);

  const contentContainerStyle = useMemo(() => {
    return {
      paddingTop: topBarTp + Style.adjust(30),
      paddingBottom: Style.adjust(isInnerScreen ? 170 : 110),
    };
  }, [topBarTp]);

  return (
    <Box flex={1} testID={BATTLE_PASS_INTRO_SCREEN}>
      <Box
        flex={1}
        bg={BACKGROUND_COLOR}
        width="100%"
        height={Style.DEVICE_HEIGHT}
        position="absolute"
        top={0}
        left={0}
      />
      <ImageBackground source={backgroundImage} contentFit="cover" style={imageBackgroundStyle} />

      <ScrollView contentContainerStyle={contentContainerStyle} showsVerticalScrollIndicator={false}>
        {steps.map((step, index) => (
          <BattlePassIntroStep key={index} stepNumber={index + 1} text={step.text} image={step.image} />
        ))}
      </ScrollView>
      <Box pt={topBarTp} position="absolute" width="100%">
        <LinearGradient
          angle={0}
          useAngle={true}
          pointerEvents="box-none"
          colors={GRADIENT_COLORS}
          style={topGradientStyle}
          locations={GRADIENT_LOCATIONS}
        />
        <TextTemplate
          type="b1b"
          color={Colours.neutral.white}
          textAlign="center"
          testID={BATTLE_PASS_INTRO_SCREEN_TITLE(title)}
        >
          {title}
        </TextTemplate>
      </Box>
      <LinearGradient
        angle={0}
        useAngle={true}
        pointerEvents="box-none"
        colors={GRADIENT_COLORS}
        style={bottomGradientStyle}
        locations={GRADIENT_LOCATIONS}
      />
      <Box px={24} position="absolute" w="100%" bottom={isInnerScreen ? 110 : 24}>
        <Button
          translationKey="screens.battle_pass.ftux.intro.button"
          onPress={onClose}
          size="Fill"
          testID={BATTLE_PASS_INTRO_SCREEN_CTA_BUTTON}
        />
      </Box>
    </Box>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    paddingBottom: Style.adjust(50),
    height: Style.adjust(304),
    position: "absolute",
    width: Style.DEVICE_WIDTH,
  },
  bottomGradient: {
    width: "100%",
    // this is gradient height
    paddingTop: Style.adjust(100),
    paddingHorizontal: Style.adjust(24),
    position: "absolute",
    bottom: 0,
  },
});

export default memo(BattlePassIntroScreen);
