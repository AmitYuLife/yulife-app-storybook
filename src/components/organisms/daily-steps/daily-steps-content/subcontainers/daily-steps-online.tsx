import React, { memo } from "react";
import { Button, Pad, Text } from "@atoms";
import { Counter } from "@molecules";
import { StyleSheet, TextStyle, View, ViewStyle } from "react-native";
import { displaySecondsAsMinutes, padNum } from "@utils";
import { useSelector } from "react-redux";
import { getDailyEarnedCoins } from "@redux/coins/coins.selectors";
import { Style } from "@styles";
import { getUserFeatures } from "@redux/user/user.selectors";
import { getChallengesStatus } from "@redux/levels/levels.selectors";
import { handleNavigateToQuestsTab } from "@navigation/utils";
import { getDailySteps } from "@redux/daily-steps/daily-steps.selectors";
import { getDailyMeditation } from "@redux/daily-meditation/daily-meditation.selectors";
import { getDailyStepsTheme } from "@redux/theme/theme.selectors";
import { setScreen } from "@navigation/root";
import { ROUTES } from "@navigation/constants";

const _DailyStepsOnline = () => {
  const dailyMeditation = useSelector(getDailyMeditation);
  const { usePassiveMeditation, showReferralsOnDailyScreen } = useSelector(getUserFeatures);
  const { textStyle } = useSelector(getDailyStepsTheme);

  const flattenStyle = StyleSheet.flatten([styles.heading, textStyle]);
  const mindfulTotal = displaySecondsAsMinutes(dailyMeditation);
  const mindfulTotalToDisplay =
    mindfulTotal.minutes === 1
      ? ` | ${mindfulTotal.minutes}:${padNum(mindfulTotal.seconds)} mindful min`
      : ` | ${mindfulTotal.minutes}:${padNum(mindfulTotal.seconds)} mindful mins`;

  return (
    <View style={styles.dailyStepsOnlineWrapper}>
      {
        <View style={styles.counterWrapper}>
          <StepCounter textStyle={textStyle} />
          {usePassiveMeditation && dailyMeditation > 0 ? (
            <Text style={textStyle}>{dailyMeditation ? mindfulTotalToDisplay : ""}</Text>
          ) : null}
        </View>
      }
      <Pad height={4} />
      <Text>
        <YuCoinCounter textStyle={flattenStyle} />
        <Text style={flattenStyle} bold={true}>
          {` yu`}
        </Text>
        <Text style={flattenStyle}>{`coin `}</Text>
        <Text style={flattenStyle}>today</Text>
      </Text>
      <Pad height={18} />
      <EarnMore hasReferralsEnabled={showReferralsOnDailyScreen} />
    </View>
  );
};

interface CounterProps {
  textStyle: TextStyle;
}

const StepCounter = memo(function _StepsCounter({ textStyle }: CounterProps) {
  const dailySteps = useSelector(getDailySteps);
  const counterType = dailySteps === 1 ? "step" : "steps";

  return <Counter value={dailySteps} textStyle={textStyle} textAfterValue={counterType} />;
});

const YuCoinCounter = memo(function _YuCoinCounter({ textStyle }: CounterProps) {
  const dailyEarnedCoins = useSelector(getDailyEarnedCoins);

  return <Counter duration={1200} value={dailyEarnedCoins} textStyle={textStyle} />;
});

interface EarnMoreProps {
  hasReferralsEnabled: boolean;
}

const EarnMore = memo(function _EarnMore({ hasReferralsEnabled }: EarnMoreProps) {
  const { isAvailable } = useSelector(getChallengesStatus);

  if (!isAvailable) {
    if (!hasReferralsEnabled) {
      return null;
    }

    return (
      <Button
        onPress={() => setScreen(ROUTES.dailySteps, ROUTES.referralInformation)}
        size="Medium"
        label="Invite a colleague"
      />
    );
  }

  return <Button onPress={handleNavigateToQuestsTab} size="Medium" label="Earn more" />;
});

export const DailyStepsOnline = memo(_DailyStepsOnline);

const styles = {
  counterWrapper: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  } as ViewStyle,
  dailyStepsOnlineWrapper: {
    alignItems: "center",
    marginTop: Style.SCALE_UP_AND_DOWN(-2),
  } as ViewStyle,
  heading: {
    fontSize: Style.SCALE_UP_AND_DOWN(35),
  } as TextStyle,
};
