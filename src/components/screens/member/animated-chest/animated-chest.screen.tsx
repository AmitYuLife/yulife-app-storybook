import { memo, useCallback, useMemo, useState } from "react";
import { AnimatedPlusPoints, Button, CentredScreen } from "@molecules";
import { useSelector } from "react-redux";
import { getCurrentLevel, getYuniversalProgress } from "@redux/levels/levels.selectors";
import { getTheme } from "@app/theme";
import { LottieView } from "@molecules";
import { Box, TextTemplate } from "@atoms";
import { ControlledYuCoinCounter } from "@organisms";
import { Style, StyleSheet } from "@styles";
import { SafeAreaView } from "react-native";
import { getTotalCoins } from "@redux/coins/coins.selectors";
import { t } from "@locale";

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
      <CentredScreen {...challengeSuccessScreen}>
        <ControlledYuCoinCounter
          coins={totalCoins}
          backgroundColor="transparent"
          textStyle={challengeSuccessScreen?.textStyle}
        />

        {isLocked || !reward ? null : (
          <Box top={130}>
            <AnimatedPlusPoints type="collect-reward" coins={reward} textType="h3" />
          </Box>
        )}
        <Box position="absolute" top={70}>
          {isLocked ? (
            <LottieView
              source={require("./assets/chest-closed.json")}
              autoPlay={true}
              loop={true}
              style={styles.lottie}
            />
          ) : (
            <>
              <LottieView
                source={require("./assets/chest-opened.json")}
                autoPlay={true}
                loop={false}
                style={styles.lottie}
              />
            </>
          )}
        </Box>
        <Box
          flex={1}
          alignItems="center"
          justifyContent="flex-start"
          pt={Style.DEVICE_HEIGHT * 0.4}
          disableAutoAdjust={true}
        >
          <TextTemplate type={Style.isShortToMedium() ? "h3" : "h2"} textAlign="center">
            {heading}
          </TextTemplate>
          {!subheading ? null : (
            <TextTemplate type={Style.isShortToMedium() ? "b2" : "b1"} textAlign="center">
              {subheading}
            </TextTemplate>
          )}
        </Box>
        <SafeAreaView>
          <Button
            testID="animated-chest-screen-cta-button"
            size="Large"
            translatedLabel={ctaLabel}
            onPress={onButtonPress}
          />
        </SafeAreaView>
      </CentredScreen>
    </>
  );
};

export default memo(AnimatedChestScreen);

const styles = StyleSheet.create({
  lottie: {
    width: Style.adjust(800),
    height: Style.adjust(800),
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
