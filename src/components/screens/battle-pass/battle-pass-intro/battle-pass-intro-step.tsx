import { Box, TextTemplate, Image, Source } from "@atoms";
import { Markdown } from "@molecules";
import { Colours, Style, StyleSheet } from "@styles";
import { FC, memo } from "react";
import { ViewStyle } from "react-native";
import { BATTLE_PASS_INTRO_STEP } from "@ids";

interface Props {
  stepNumber: number;
  text: string;
  image?: Source;
}

const markdownStyles = {
  text: {
    color: Colours.neutral.white,
    fontSize: Style.adjust(16),
    lineHeight: Style.adjust(24),
    fontFamily: Style.FONT_FAMILY_PRIMARY,
  },
  strong: {
    color: Colours.neutral.white,
    fontFamily: Style.FONT_FAMILY_PRIMARY_BOLD,
  },
  paragraph: {
    paddingVertical: 0,
  },
};

const BattlePassIntroStep: FC<Props> = ({ stepNumber, text, image }) => {
  return (
    <Box
      flex={1}
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
      mx={28}
      testID={BATTLE_PASS_INTRO_STEP(stepNumber)}
    >
      <Box flexDirection="row" gap={16}>
        <Box w={22} h={22} br={11} mt={4} alignItems="center" justifyContent="center" bg={Colours.secondary.s100S3}>
          <TextTemplate type="b2b" color={Colours.neutral.white}>
            {stepNumber}
          </TextTemplate>
        </Box>
        <Box>
          <Markdown text={text} markdownStyles={markdownStyles} containerStyle={styles.markdownContainer} />
        </Box>
      </Box>
      <Box flex={1} right={-20} alignItems="flex-end">
        <Image source={image} width={200} position="absolute" contentFit="contain" />
      </Box>
    </Box>
  );
};

const styles = StyleSheet.create({
  markdownContainer: {
    flexShrink: 1,
    maxWidth: Style.adjust(130),
  } as ViewStyle,
});

export default memo(BattlePassIntroStep);
