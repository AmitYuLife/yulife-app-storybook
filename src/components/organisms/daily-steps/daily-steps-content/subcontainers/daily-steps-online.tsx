import React, { memo, useMemo } from "react";
import { Button, TextTemplate } from "@atoms";
import { ActivityList, Counter } from "@molecules";
import { View, ViewStyle } from "react-native";
import { displaySecondsAsMinutes } from "@utils";
import { useSelector } from "react-redux";
import { getDailyEarnedCoins } from "@redux/coins/coins.selectors";
import { Style } from "@styles";
import { getUserFeatures } from "@redux/user/user.selectors";
import { getDailySteps } from "@redux/daily-steps/daily-steps.selectors";
import { getDailyMeditation } from "@redux/daily-meditation/daily-meditation.selectors";
import { styles as textTemplateStyle } from "@components/atoms/text/text-template";
import { getChallengesStatus, getHasNotification } from "@redux/levels/levels.selectors";
import { handleNavigateToQuestsTab } from "@navigation/utils";
import { getPositionBottom } from "@organisms/nav-bar/nav-bar.styles";
import { getDailyCycling } from "@redux/daily-cycling/daily-cycling.selectors";
import { getDailyStepsTheme } from "@redux/theme/theme.selectors";

type DailyStepsOnlineProps = {
  isIntro?: boolean;
};

export const DailyStepsOnline = memo(({ isIntro }: DailyStepsOnlineProps) => {
  const dailyCycling = useSelector(getDailyCycling);
  const dailyMeditation = useSelector(getDailyMeditation);
  const dailySteps = useSelector(getDailySteps);
  const dailyEarnedCoins = useSelector(getDailyEarnedCoins);
  const { usePassiveMeditation } = useSelector(getUserFeatures);
  const { availableForToday, isAvailable } = useSelector(getChallengesStatus);
  const { textStyle } = useSelector(getDailyStepsTheme);
  const mindfulTotal = displaySecondsAsMinutes(dailyMeditation);
  const hasNotification = useSelector(getHasNotification);
  const mindfulTotalToDisplay = `${mindfulTotal.minutes} min`;

  const counterStyle = useMemo(
    () => ({
      ...textTemplateStyle.h1,
      color: textStyle.color,
    }),
    [textStyle?.color]
  );

  const buttonLabel = hasNotification ? "Back to challenge" : `Take a challenge (${availableForToday} left)`;

  return (
    <>
      <View style={styles.dailyStepsOnlineWrapper}>
        <TextTemplate type="h1" color={textStyle.color}>
          <Counter duration={1200} value={dailyEarnedCoins} textStyle={counterStyle} /> YuCoin today
        </TextTemplate>

        <View style={styles.activityListWrapper}>
          <ActivityList
            textColor={textStyle.color}
            steps={dailySteps}
            cycling={dailyCycling}
            mindfulness={usePassiveMeditation && dailyMeditation > 0 ? mindfulTotalToDisplay : null}
          />
        </View>
      </View>
      {isIntro || availableForToday === 0 || !isAvailable ? null : (
        <View style={styles.buttonWrapper}>
          <Button onPress={handleNavigateToQuestsTab} size="Large" label={buttonLabel} />
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
