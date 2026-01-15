import { memo, useCallback, useMemo, useState } from "react";
import { Button, CentredScreen } from "@molecules";
import { useSelector } from "react-redux";
import { getCurrentLevel, getYuniversalProgress } from "@redux/levels/levels.selectors";
import { getTheme } from "@app/theme";
import { Box, TextTemplate } from "@atoms";
import { ChestLottieView, ControlledYuCoinCounter, GenericHeadingPad } from "@organisms";
import { Style, StyleSheet } from "@styles";
import { getTotalCoins } from "@redux/coins/coins.selectors";
import { t } from "@locale";
import { ANIMATED_CHEST_BUTTON, ANIMATED_CHEST_MODAL } from "@ids";

interface IProps {
  reward: number;
  onPressCta: () => void;
}

const AnimatedChestScreen = ({ onPressCta, reward }: IProps) => {
  const [isLocked, setIsLocked] = useState(true);

  const currentLevel = useSelector(getCurrentLevel);
  const { yuniversalMap } = useSelector(getYuniversalProgress);
  const { challengeSuccessScreen } = getTheme(currentLevel, yuniversalMap);

  const currentCoins = useSelector(getTotalCoins);

  const { heading, subheading, ctaLabel } = useMemo(() => getCopy(isLocked), [isLocked]);

  // because the chest coins are awarded as soon as the challenge is completed, we need to subtract the reward from the current coins
  // until the chest is opened
  const totalCoins = isLocked ? currentCoins - reward : currentCoins;

  const onButtonPress = useCallback(() => {
    if (isLocked) {
      setIsLocked(false);
      return;
    }

    onPressCta();
  }, [isLocked, onPressCta]);

  return (
    <>
      <CentredScreen {...challengeSuccessScreen} testID={ANIMATED_CHEST_MODAL}>
        <ControlledYuCoinCounter
          coins={totalCoins}
          backgroundColor="transparent"
          textStyle={challengeSuccessScreen?.textStyle}
        />

        <GenericHeadingPad />
        <Box alignItems="center" justifyContent="center" width={Style.DEVICE_WIDTH} disableAutoAdjust={true}>
          <ChestLottieView
            showPlusPoints={!isLocked && !!reward}
            reward={reward}
            source={isLocked ? require("@assets/lottie/chest/day-4.json") : require("@assets/lottie/chest/day-5.json")}
            autoPlay={true}
          />
        </Box>

        <Box alignItems="center" ph={16} mt={Style.isShortToMedium() ? 220 : 250}>
          <TextTemplate
            type={Style.isShortToMedium() ? "h3" : "h2"}
            textAlign="center"
            color={challengeSuccessScreen?.textStyle?.color}
          >
            {heading}
          </TextTemplate>
          {!subheading ? null : (
            <Box mt={16}>
              <TextTemplate
                type={Style.isShortToMedium() ? "b2" : "b1"}
                textAlign="center"
                color={challengeSuccessScreen?.textStyle?.color}
              >
                {subheading}
              </TextTemplate>
            </Box>
          )}
        </Box>
        <Box flex={1} justifyContent="flex-end" width={Style.DEVICE_WIDTH} disableAutoAdjust={true} ph={24}>
          <Button
            testID={ANIMATED_CHEST_BUTTON}
            translatedLabel={ctaLabel}
            onPress={onButtonPress}
            size="Fill"
            wrapperStyle={styles.cta}
          />
        </Box>
      </CentredScreen>
    </>
  );
};

export default memo(AnimatedChestScreen);

const styles = StyleSheet.create({
  cta: {
    marginBottom: Style.adjust(32),
  },
});

const getCopy = (isLocked: boolean) => {
  if (isLocked) {
    return {
      heading: t("screens.animated_chest.closed_chest.heading"),
      subheading: t("screens.animated_chest.closed_chest.subheading"),
      ctaLabel: t("screens.animated_chest.closed_chest.cta_label"),
    };
  }

  return {
    heading: t("screens.animated_chest.opened_chest.heading"),
    ctaLabel: t("screens.animated_chest.opened_chest.cta_label"),
  };
};
