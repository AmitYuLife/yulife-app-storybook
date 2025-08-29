import { memo, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Dimensions } from "react-native";
import RNLottieView from "lottie-react-native";
import { DONATION_LEVEL_UP_MODAL } from "@ids";
import { t } from "@locale";
import { ItemDetailsReward } from "@organisms";
import { Colours, Style, StyleSheet } from "@styles";
import { FadeIn, FadeInDown } from "react-native-reanimated";
import { EndOfSeasonRewardsInfo, LottieView } from "@molecules";
import { Box, TextTemplate } from "@atoms";
import { Navigation } from "@navigation/main";
import BattlePassBlurredRaysWrapper, {
  BATTLE_PASS_BLURRED_RAYS_Y_OFFSET,
} from "@organisms/battle-pass-blurred-rays-wrapper/battle-pass-blurred-rays-wrapper";

export interface IBattlePassEndOfSeasonModalProps {
  title: string;
  onComplete: () => void;
  isLoading: boolean;
  items: {
    title: string;
    score: string;
    icon: {
      uri?: string;
    };
  }[];
}

const { height: screenHeight } = Dimensions.get("screen");
const ANIMATION_START_DELAY = 700;
const REWARD_IMAGE_SIZE = Style.adjust(140);
const IMAGE_TOP = screenHeight / 2.4 - BATTLE_PASS_BLURRED_RAYS_Y_OFFSET / 1.9 - REWARD_IMAGE_SIZE / 2;

const BattlePassEndOfSeasonModal = ({ items, title, onComplete, isLoading }: IBattlePassEndOfSeasonModalProps) => {
  const [animationStage, setAnimationStage] = useState(0);
  const [showStatics, setShowStatics] = useState(false);
  const lottieRef = useRef<RNLottieView>(null);
  const onButtonPress = async () => {
    await onComplete();
    Navigation.dismissAllOverlays();
  };

  useEffect(() => {
    lottieRef.current?.play(FRAMES[animationStage].startFrame, FRAMES[animationStage].endFrame);
  }, []);

  const validItemsIndexes = items.map((item, index) => (item.title ? index : null)).filter((i) => i !== null);

  const validItems = useMemo(
    () => items.filter((_, index) => validItemsIndexes.includes(index)),
    [validItemsIndexes, items]
  );

  const validFrames = FRAMES.filter((_, index) => validItemsIndexes.includes(index));

  const onAnimationFinish = useCallback(() => {
    if (animationStage === validFrames.length - 1) {
      setShowStatics(true);
      return;
    }

    const newStage = animationStage + 1;
    setAnimationStage(newStage);
    lottieRef.current?.play(validFrames[newStage].startFrame, validFrames[newStage].endFrame);
  }, [animationStage, validFrames]);

  return (
    <BattlePassBlurredRaysWrapper
      testID={DONATION_LEVEL_UP_MODAL}
      title={title}
      buttonLabel={t("screens.battle_pass.season_complete.modal.button_label")}
      buttonTestID="battle-pass-end-of-season-button"
      isLoading={isLoading}
      buttonIsEnabled={showStatics}
      onButtonPress={onButtonPress}
    >
      {showStatics ? (
        <Box p={53} mt={(BATTLE_PASS_BLURRED_RAYS_Y_OFFSET / validFrames.length) * 1.5}>
          <Box forceAnimated={true} entering={FadeInDown.delay(100).duration(600)}>
            <EndOfSeasonRewardsInfo items={validItems} />
          </Box>
        </Box>
      ) : (
        <>
          <Box alignItems="center" mt={30}>
            {validItems.map((i) => {
              const itemTitle = validItems[animationStage]?.title;
              const itemScore = validItems[animationStage]?.score;

              if (i.title === itemTitle) {
                return (
                  <Box key={itemTitle} alignItems="center" gap={5}>
                    <Box forceAnimated={true} entering={FadeIn.delay(350).duration(350)}>
                      <TextTemplate type="b1" color={Colours.neutral.white}>
                        {itemTitle}
                      </TextTemplate>
                    </Box>
                    <Box forceAnimated={true} entering={FadeInDown.delay(350).duration(350)}>
                      <TextTemplate type="b1b" color={Colours.neutral.white}>
                        {itemScore}
                      </TextTemplate>
                    </Box>
                  </Box>
                );
              }
            })}
          </Box>
          <Box top={IMAGE_TOP} position="absolute" justifyContent="center" alignItems="center" left={0} right={0}>
            <ItemDetailsReward size={REWARD_IMAGE_SIZE + 21} starMultiplier={3} delay={ANIMATION_START_DELAY}>
              <Box position="absolute">
                <LottieView
                  ref={lottieRef}
                  loop={false}
                  source={require("./donations-list.json")}
                  style={styles.lottie}
                  onAnimationFinish={onAnimationFinish}
                />
              </Box>
            </ItemDetailsReward>
          </Box>
        </>
      )}
    </BattlePassBlurredRaysWrapper>
  );
};

const FRAMES = [
  { startFrame: 0, endFrame: 24 },
  { startFrame: 25, endFrame: 52 },
  { startFrame: 53, endFrame: 80 },
  { startFrame: 81, endFrame: 108 },
];
const styles = StyleSheet.create({
  lottie: {
    width: REWARD_IMAGE_SIZE,
    height: REWARD_IMAGE_SIZE,
  },
});

export default memo(BattlePassEndOfSeasonModal);
