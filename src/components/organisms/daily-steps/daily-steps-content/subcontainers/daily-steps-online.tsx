import React from "react";
import { Button, Pad, Text } from "@atoms";
import { Counter } from "@molecules";
import { StyleSheet, TextStyle, View, ViewStyle } from "react-native";
import { displaySecondsAsMinutes, padNum } from "@services/utils";
import { connect } from "react-redux";
import { getDailyEarnedCoins } from "@redux/coins/coins.selectors";
import { IReduxState } from "@redux/_core/reducers";
import { Style } from "@styles";
import { getUserFeatures } from "@redux/user/user.selectors";
import { getChallengesStatus } from "@redux/levels/levels.selectors";
import { handleNavigateToQuestsTab } from "@navigation/utils";
import { getDailySteps } from "@redux/daily-steps/daily-steps.selectors";
import { getDailyMeditation } from "@redux/daily-meditation/daily-meditation.selectors";
import { getDailyStepsTheme } from "@redux/theme/theme.selectors";

type ConnectedProps = ReturnType<typeof mapStateToProps>;

type Props = ConnectedProps;

const _DailyStepsOnline = (props: Props) => {
  const {
    dailyEarnedCoins,
    usePassiveMeditation,
    showCounter = false,
    displayEarnMore,
    dailySteps,
    dailyMeditation,
    textStyle,
  } = props;

  const flattenStyle = StyleSheet.flatten([styles.heading, textStyle]);
  const counterType = dailySteps === 1 ? "step" : "steps";
  const mindfulTotal = displaySecondsAsMinutes(dailyMeditation);
  const mindfulTotalToDisplay =
    mindfulTotal.minutes === 1
      ? ` | ${mindfulTotal.minutes}:${padNum(mindfulTotal.seconds)} mindful min`
      : ` | ${mindfulTotal.minutes}:${padNum(mindfulTotal.seconds)} mindful mins`;

  return (
    <View style={styles.dailyStepsOnlineWrapper}>
      {showCounter ? (
        <View style={styles.counterWrapper}>
          <Counter value={dailySteps} textStyle={textStyle} textAfterValue={counterType} />
          {usePassiveMeditation && dailyMeditation > 0 ? (
            <Text style={textStyle}>{dailyMeditation ? mindfulTotalToDisplay : ""}</Text>
          ) : null}
        </View>
      ) : (
        <Text style={textStyle}>
          {dailySteps} {counterType}
          {usePassiveMeditation && dailyMeditation > 0 ? mindfulTotalToDisplay : ""}
        </Text>
      )}
      <Pad height={4} />
      <Text>
        {showCounter ? (
          <Counter duration={1200} value={dailyEarnedCoins} textStyle={flattenStyle} />
        ) : (
          <Text style={flattenStyle}>{dailyEarnedCoins}</Text>
        )}
        <Text style={flattenStyle} bold={true}>
          {` yu`}
        </Text>
        <Text style={flattenStyle}>{`coin `}</Text>
        <Text style={flattenStyle}>today</Text>
      </Text>
      <Pad height={18} />
      {!displayEarnMore ? null : (
        <Button onPress={handleNavigateToQuestsTab} type="Primary" size="Medium" label="earn more" />
      )}
    </View>
  );
};

const mapStateToProps = (state: IReduxState) => ({
  dailyEarnedCoins: getDailyEarnedCoins(state),
  usePassiveMeditation: getUserFeatures(state).usePassiveMeditation,
  showCounter: getUserFeatures(state).showCounter,
  displayEarnMore: getChallengesStatus(state).isAvailable,
  dailySteps: getDailySteps(state),
  dailyMeditation: getDailyMeditation(state),
  textStyle: getDailyStepsTheme(state).textStyle,
});

const redux = connect(mapStateToProps);

export const DailyStepsOnline = redux(_DailyStepsOnline);

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
