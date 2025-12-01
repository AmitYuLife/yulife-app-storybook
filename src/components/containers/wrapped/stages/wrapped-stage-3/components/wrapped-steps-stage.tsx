import { Colours } from "@styles";
import { Box, Text, TextTemplate } from "@atoms";
import { Button } from "@components/molecules";
import { t } from "@locale";
import { Style, StyleSheet } from "@styles";
import colours from "@styles/colours";
import { addCommasToNumber } from "@utils";
import { memo } from "react";
import { FadeOut, FadeInUp, FadeOutDown, FadeInDown } from "react-native-reanimated";

const CONTENT_DELAY = 3000;

interface IWrappedStepsStage {
  totalSteps: number;
  onPress: () => void;
}

const WrappedStepsStage = ({ totalSteps, onPress }: IWrappedStepsStage) => {
  return (
    <>
      <Box exiting={FadeOut.duration(500)}>
        <Box mt={25} gap={10} justifyContent="center" alignItems="center">
          <Box entering={FadeInUp.delay(CONTENT_DELAY).duration(1000)}>
            <TextTemplate type="h2" textAlign="center" color="#464647">
              {t("screens.wrapped.stage_3.title")}
            </TextTemplate>
          </Box>
          <Box
            flexDirection="row"
            pb={4}
            mt={40}
            pr={4}
            br={12}
            bg={Colours.overlay.black10}
            entering={FadeInUp.delay(CONTENT_DELAY + 1000).duration(1000)}
          >
            <Box justifyContent="center" alignItems="center" gap={5} bg="white" px={20} py={Style.adjust(20)} br={10}>
              <Box>
                <Text style={styles.yearlySteps}>{addCommasToNumber(totalSteps)}</Text>
              </Box>
              <Box>
                <TextTemplate type="b1b">{t("screens.wrapped.stage_3.steps")}</TextTemplate>
              </Box>
            </Box>
          </Box>
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
  yearlySteps: { fontFamily: Style.FONT_FAMILY_PRIMARY_BOLD, color: colours.primary.p600, fontSize: 40 },
});

export default memo(WrappedStepsStage);
