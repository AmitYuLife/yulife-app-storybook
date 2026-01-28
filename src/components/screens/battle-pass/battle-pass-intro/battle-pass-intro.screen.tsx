import { memo, useMemo, FC } from "react";
import { ImageSourcePropType, ScrollView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Box } from "@atoms";
import { TextTemplate } from "@atoms";
import { Button } from "@molecules";
import { Colours, Style, StyleSheet } from "@styles";
import { t } from "@locale";
import { ImageBackground } from "expo-image";
import BattlePassIntroStep from "./battle-pass-intro-step";

interface Props {
  onClose: () => void;
  backgroundImage: ImageSourcePropType;
}

const BattlePassIntroScreen: FC<Props> = ({ backgroundImage, onClose }) => {
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

  const imageBackgroundStyle = useMemo(() => {
    return { ...styles.backgroundImage, top: insets.top };
  }, [insets.top]);

  return (
    <Box flex={1} bg="transparent">
      <Box flex={1} bg="#290263" width="100%" height={Style.DEVICE_HEIGHT} position="absolute" top={0} left={0} />
      <ImageBackground source={backgroundImage} contentFit="cover" style={imageBackgroundStyle} />
      <Box top={insets.top} position="absolute" width="100%">
        <TextTemplate type="b1b" color={Colours.neutral.white} textAlign="center">
          {title}
        </TextTemplate>
      </Box>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {steps.map((step, index) => (
          <BattlePassIntroStep key={index} stepNumber={index + 1} text={step.text} image={step.image} />
        ))}
      </ScrollView>

      <Box px={24} pb={insets.bottom} mt={16}>
        <Button translationKey="screens.battle_pass.ftux.intro.button" onPress={onClose} size="Fill" />
      </Box>
    </Box>
  );
};

const styles = StyleSheet.create({
  scrollContent: {
    gap: Style.adjust(8),
    paddingTop: Style.adjust(24),
    marginTop: Style.adjust(16),
    justifyContent: "center",
    alignItems: "center",
  },
  backgroundImage: {
    paddingBottom: Style.adjust(50),
    height: Style.adjust(300),
    position: "absolute",
    width: Style.DEVICE_WIDTH,
  },
});

export default memo(BattlePassIntroScreen);
