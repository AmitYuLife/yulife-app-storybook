import { Box, Text, TextTemplate } from "@atoms";
import { Button } from "@components/molecules";
import { t } from "@locale";
import { Style } from "@styles";
import { addCommasToNumber } from "@utils";
import { memo } from "react";
import { StyleSheet } from "react-native";
import { FadeOut, FadeInUp, ZoomIn, FadeIn, FadeOutDown, FadeInDown } from "react-native-reanimated";

const CONTENT_DELAY = 3000;

interface IWrappedStepsStage {
  marathonCount: number;
  totalSteps: number;
  onPress: () => void;
}

const WrappedStepsStage = ({ totalSteps, marathonCount, onPress }: IWrappedStepsStage) => {
  return (
    <>
      <Box exiting={FadeOut.duration(500)}>
        <Box mt={55} gap={10}>
          <Box entering={FadeInUp.delay(CONTENT_DELAY).duration(1000)}>
            <TextTemplate type="h3" textAlign="center" color="#464647">
              {t("screens.wrapped.stage_3.title")}
            </TextTemplate>
          </Box>
          <Box entering={FadeInUp.delay(CONTENT_DELAY + 1000).duration(1000)}>
            <TextTemplate type="b1b" textAlign="center" color="#464647">
              {t("screens.wrapped.stage_3.marathon", { smart_count: Math.floor(marathonCount) })}
            </TextTemplate>
          </Box>
        </Box>
      </Box>
      <Box
        mt={0}
        gap={5}
        h="100%"
        pt={140}
        w="100%"
        position="absolute"
        alignItems="center"
        justifyContent="center"
        exiting={FadeOut.duration(500)}
      >
        <Box entering={ZoomIn.delay(CONTENT_DELAY + 2000).duration(1000)}>
          <Text style={styles.yearlySteps}>{addCommasToNumber(totalSteps)}</Text>
        </Box>
        <Box entering={FadeIn.delay(CONTENT_DELAY + 2300).duration(1000)} mt={0}>
          <TextTemplate type="b1b">{t("screens.wrapped.stage_3.steps")}</TextTemplate>
        </Box>
      </Box>

      <Box exiting={FadeOutDown.duration(500)} entering={FadeInDown.delay(CONTENT_DELAY + 2800).duration(800)}>
        <Button onPress={onPress} translationKey="labels.cta.continue" />
      </Box>
    </>
  );
};

const styles = StyleSheet.create({
  fill: { width: "100%", height: "100%" },
  yugiHifi: { width: Style.adjust(200), height: Style.adjust(200) },
  yearlySteps: { fontFamily: Style.FONT_FAMILY_PRIMARY_BOLD, color: "#640038", fontSize: 40 },
});

export default memo(WrappedStepsStage);
