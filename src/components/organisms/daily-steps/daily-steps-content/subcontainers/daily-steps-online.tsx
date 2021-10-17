import React, { memo, useMemo } from "react";
import { Button, TextTemplate } from "@atoms";
import { ActivityList, Counter } from "@molecules";
import { View, ViewStyle } from "react-native";
import { displaySecondsAsMinutes, getCurrentWorld } from "@utils";
import { useSelector } from "react-redux";
import { getDailyEarnedCoins } from "@redux/coins/coins.selectors";
import { Style, Colours } from "@styles";
import { getUserFeatures } from "@redux/user/user.selectors";
import { getDailySteps } from "@redux/daily-steps/daily-steps.selectors";
import { getDailyMeditation } from "@redux/daily-meditation/daily-meditation.selectors";
import { styles as textTemplateStyle } from "@components/atoms/text/text-template";
import { getChallengesStatus, getCurrentLevel } from "@redux/levels/levels.selectors";
import { handleNavigateToQuestsTab } from "@navigation/utils";
import { getPositionBottom } from "@organisms/nav-bar/nav-bar.styles";

type DailyStepsOnlineProps = {
  isIntro?: boolean;
};

export const DailyStepsOnline = memo(({ isIntro }: DailyStepsOnlineProps) => {
  const dailyMeditation = useSelector(getDailyMeditation);
  const dailySteps = useSelector(getDailySteps);
  const dailyEarnedCoins = useSelector(getDailyEarnedCoins);
  const { usePassiveMeditation } = useSelector(getUserFeatures);
  const { available, done } = useSelector(getChallengesStatus);
  const availableForToday = useMemo(() => available - done, [available, done]);
  const currentLevel = useSelector(getCurrentLevel);
  const currentWorld = getCurrentWorld(currentLevel);
  const textColor = currentWorld === 1 ? Colours.neutral.white : Colours.neutral.n900;
  const mindfulTotal = displaySecondsAsMinutes(dailyMeditation);
  const mindfulTotalToDisplay = `${mindfulTotal.minutes} min`;

  const counterStyle = useMemo(
    () => ({
      ...textTemplateStyle.h1,
      color: textColor,
    }),
    [textColor]
  );

  return (
    <>
      <View style={styles.dailyStepsOnlineWrapper}>
        <TextTemplate type="h1" color={textColor}>
          <Counter duration={1200} value={dailyEarnedCoins} textStyle={counterStyle} /> YuCoin today
        </TextTemplate>

        <View style={styles.activityListWrapper}>
          <ActivityList
            textColor={textColor}
            steps={dailySteps}
            cycling={0} //@TODO: enable this when we have the cycling data
            mindfulness={usePassiveMeditation && dailyMeditation > 0 ? mindfulTotalToDisplay : null}
          />
        </View>
      </View>
      {isIntro || availableForToday === 0 ? null : (
        <View style={styles.buttonWrapper}>
          <Button
            onPress={handleNavigateToQuestsTab}
            size="Large"
            label={`Take a challenge (${availableForToday} left)`}
          />
        </View>
      )}
    </>
  );
});

const styles = {
  dailyStepsOnlineWrapper: {
    alignItems: "center",
  } as ViewStyle,
  activityListWrapper: {
    marginTop: Style.adjust(8),
  } as ViewStyle,
  buttonWrapper: {
    left: 0,
    right: 0,
    bottom: getPositionBottom({ additionalBottom: Style.adjust(85) }),
    position: "absolute",
  } as ViewStyle,
};
