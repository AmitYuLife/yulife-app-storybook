import { Box, TextTemplate } from "@atoms";
import { Button, LikertScale, LinkButton, CentredScreen } from "@molecules";
import { StyleSheet, Colours, Style } from "@styles";
import { memo, useMemo, useState } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { getTheme } from "@theme";
import { getCurrentLevel, getYuniversalProgress } from "@redux/levels/levels.selectors";
import { useSelector } from "react-redux";
import { t } from "@locale";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import EmojiBad from "./icons/emoji-bad";
import EmojiWorse from "./icons/emoji-worse";
import EmojiNeutral from "./icons/emoji-neutral";
import EmojiBetter from "./icons/emoji-better";
import EmojiGreat from "./icons/emoji-great";

interface IPathwaysChallengeFeedbackScreenProps {
  onPressCta: (rating: number) => void;
  onPressSkip: () => void;
}

const HANDLE_SIZE = 32;
const STATIC_CIRCLE_SIZE = 48;

const PathwaysChallengeFeedbackScreen = ({ onPressCta, onPressSkip }: IPathwaysChallengeFeedbackScreenProps) => {
  const currentLevel = useSelector(getCurrentLevel);
  const { yuniversalMap } = useSelector(getYuniversalProgress);
  const { challengeSuccessScreen } = getTheme(currentLevel, yuniversalMap);

  const insets = useSafeAreaInsets();

  const [value, setValue] = useState(3);

  const feedbackOptions = useMemo(
    () => [
      { value: "1", label: t("screens.pathway_challenge_feedback.scale.bad") },
      { value: "2", label: t("screens.pathway_challenge_feedback.scale.worse") },
      { value: "3", label: t("screens.pathway_challenge_feedback.scale.no_change") },
      { value: "4", label: t("screens.pathway_challenge_feedback.scale.better") },
      { value: "5", label: t("screens.pathway_challenge_feedback.scale.great") },
    ],
    []
  );

  const emojiMap = useMemo(
    () => ({
      1: EmojiBad,
      2: EmojiWorse,
      3: EmojiNeutral,
      4: EmojiBetter,
      5: EmojiGreat,
    }),
    []
  );

  const CurrentEmoji = emojiMap[value as keyof typeof emojiMap];

  const handlePressCta = () => {
    onPressCta(value);
  };

  return (
    <GestureHandlerRootView style={styles.root}>
      <CentredScreen {...challengeSuccessScreen}>
        <Box flex={1} justifyContent="space-between" mt={insets.top + Style.adjust(50)} disableAutoAdjust={true}>
          <Box>
            <Box alignItems="center" px={16} pt={32}>
              <TextTemplate color={challengeSuccessScreen.textStyle.color} textAlign="center" type="h2">
                {t("screens.pathway_challenge_feedback.heading")}
              </TextTemplate>
              <Box mt={16} pl={32} pr={32}>
                <TextTemplate color={challengeSuccessScreen.textStyle.color} textAlign="center" type="b2">
                  {t("screens.pathway_challenge_feedback.description")}
                </TextTemplate>
              </Box>
            </Box>
            <Box pt={32}>
              <Box
                w={STATIC_CIRCLE_SIZE}
                h={STATIC_CIRCLE_SIZE}
                br={STATIC_CIRCLE_SIZE / 2}
                bg={Colours.neutral.n200}
                borderWidth={3}
                borderColor={Colours.neutral.white}
                alignItems="center"
                justifyContent="center"
                alignSelf="center"
              >
                <CurrentEmoji size={32} />
              </Box>
              <LikertScale
                handleWidth={HANDLE_SIZE}
                handleHeight={HANDLE_SIZE}
                value={value}
                onChange={setValue}
                options={feedbackOptions}
                labelColor={challengeSuccessScreen.textStyle.color}
              >
                <Box
                  w={HANDLE_SIZE}
                  h={HANDLE_SIZE}
                  br={HANDLE_SIZE / 2}
                  bg={Colours.primary.p600}
                  borderWidth={3}
                  borderColor={Colours.neutral.white}
                  mt={18}
                />
              </LikertScale>
            </Box>
          </Box>
          <Box alignSelf="stretch" px={16} pb={16}>
            <Button translationKey="labels.cta.continue" onPress={handlePressCta} size="Fill" />
            <LinkButton translationKey="screens.pathway_challenge_feedback.skip" onPress={onPressSkip} />
          </Box>
        </Box>
      </CentredScreen>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});

export default memo(PathwaysChallengeFeedbackScreen);
