import React, { memo, useCallback, useMemo } from "react";
import { Alert, Platform, View, ViewStyle } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { TextTemplate } from "@atoms";
import { ActivityList, Button, Counter, EventPanels, Panel, PressableWithDelay } from "@molecules";
import { displaySecondsAsMinutes, getCurrentWorld } from "@utils";
import { getDailyEarnedCoins } from "@redux/coins/coins.selectors";
import { Style, NAV_BAR } from "@styles";
import { getUserEventsWithAds, getUserFeatures } from "@redux/user/user.selectors";
import { getDailySteps } from "@redux/daily-steps/daily-steps.selectors";
import { getDailyMeditation } from "@redux/daily-meditation/daily-meditation.selectors";
import { styles as textTemplateStyle } from "@components/atoms/text/text-template";
import { getChallengesStatus, getCurrentLevel, getHasNotification } from "@redux/levels/levels.selectors";
import { handleNavigateToQuestsTab } from "@navigation/utils";
import { getDailyCycling } from "@redux/daily-cycling/daily-cycling.selectors";
import { getDailyStepsTheme } from "@redux/theme/theme.selectors";
import { REFERRALS_BUTTON_HOMEPAGE } from "@ids";
import { ROUTES } from "@navigation/constants";
import { updateUserGoal } from "@redux/user/user.actions";
import { useMutation } from "@apollo/react-hooks";
import { JoinGoal, JoinGoalVariables, GetUserProfile_getUserProfile_events as Events } from "@graphql/_core/schema";
import { GQL_MUTATION_JOIN_GOAL } from "@graphql/goals/joinGoal.gql";
import { changePanelVisibility } from "@redux/theme/theme.action";
import Logger from "@services/logging/logger";
import { Navigation } from "react-native-navigation";
import { useFitKit } from "@services/fitkit/fitkit.hooks";
import { t } from "@locale";

type DailyStepsOnlineProps = {
  onReferralsButtonPress: () => void;
};

export const DailyStepsOnline = memo(({ onReferralsButtonPress }: DailyStepsOnlineProps) => {
  const dailyCycling = useSelector(getDailyCycling);
  const dailyMeditation = useSelector(getDailyMeditation);
  const dailySteps = useSelector(getDailySteps);
  const dailyEarnedCoins = useSelector(getDailyEarnedCoins);
  const { usePassiveMeditation } = useSelector(getUserFeatures);
  const { availableForToday, isAvailable } = useSelector(getChallengesStatus);
  const { textStyle, showPanel } = useSelector(getDailyStepsTheme);
  const mindfulTotal = displaySecondsAsMinutes(dailyMeditation);
  const hasNotification = useSelector(getHasNotification);
  const mindfulTotalToDisplay = `${mindfulTotal.minutes} min`;
  const features = useSelector(getUserFeatures);
  const currentLevel = useSelector(getCurrentLevel);
  const currentWorld = getCurrentWorld(currentLevel);
  const events = useSelector(getUserEventsWithAds);

  const dispatch = useDispatch();
  const fitkit = useFitKit();
  const [joinGoalMutation] = useMutation<JoinGoal, JoinGoalVariables>(GQL_MUTATION_JOIN_GOAL);

  const counterStyle = useMemo(
    () => ({
      ...textTemplateStyle.h1,
      color: textStyle.color,
    }),
    [textStyle?.color]
  );

  const [showChallengeButton, showReferralsButton] = useMemo(() => {
    const showChallenge = isAvailable && availableForToday > 0;
    const showReferrals = !showChallenge && features.showReferrals;

    if (isShort && events.length > 0) {
      return [false, false];
    }

    return [showChallenge, showReferrals];
  }, [isAvailable, availableForToday, features, events.length]);

  const challengeButtonLabel = useMemo(
    () => (hasNotification ? "Back to challenge" : `Take a challenge (${availableForToday} left)`),
    [hasNotification, availableForToday]
  );

  const accessibilityLabel = useMemo(
    () =>
      hasNotification
        ? t("screens.daily.challenge_button.back_to_challenge.accessibility_label")
        : t("screens.daily.challenge_button.take_challenge.accessibility_label", { challenges: availableForToday }),
    [hasNotification, availableForToday]
  );

  const joinGoal = useCallback(
    async (event: Events) => {
      return new Promise<void>((resolve, reject) =>
        Alert.alert("Ready to join?", "Join the event to participate", [
          {
            text: "Cancel",
            style: "cancel",
            onPress: () => reject(),
          },
          {
            text: "Confirm",
            onPress: async () => {
              try {
                const response = await joinGoalMutation({ variables: { goalId: event.id } });

                if (response?.data?.joinGoal) {
                  dispatch(updateUserGoal(response.data.joinGoal));
                }

                resolve();
              } catch (error) {
                Logger.logMixpanelEvent("goal_join_error", { error: error.message, event });
                reject();
              }
            },
          },
        ])
      );
    },
    [dispatch, joinGoalMutation]
  );

  const closePanel = useCallback(() => dispatch(changePanelVisibility(false)), []);

  const navigateToTodayEarnings = useCallback(
    () =>
      !fitkit.authorised
        ? null
        : Navigation.push(ROUTES.dailySteps, {
            component: {
              id: ROUTES.todayEarnings,
              name: ROUTES.todayEarnings,
            },
          }),
    []
  );

  return (
    <>
      <PressableWithDelay onPress={navigateToTodayEarnings}>
        <View style={styles.dailyStepsOnlineWrapper}>
          <TextTemplate
            type="h1"
            color={textStyle.color}
            accessibilityLabel={t("screens.daily.daily_passive.coins.accessibility_label", { coins: dailyEarnedCoins })}
          >
            <Counter duration={1200} value={dailyEarnedCoins} textStyle={counterStyle} /> YuCoin today
          </TextTemplate>

          <View style={styles.activityListWrapper}>
            <ActivityList
              textColor={textStyle.color}
              steps={dailySteps}
              cycling={dailyCycling}
              mindfulness={usePassiveMeditation && dailyMeditation > 0 ? mindfulTotalToDisplay : null}
              stepsAccessibilityLabel={t("screens.daily.daily_passive.steps.accessibility_label", {
                steps: dailySteps,
              })}
              mindfulnessAccessibilityLabel={t("screens.daily.daily_passive.mindfulness.accessibility_label", {
                mindfulness: mindfulTotal.minutes,
              })}
              cyclingAccessibilityLabel={t("screens.daily.daily_passive.cycling.accessibility_label", {
                cycling: dailyCycling,
              })}
            />
          </View>
        </View>
      </PressableWithDelay>
      {events?.length === 0 ? null : (
        <EventPanels onJoin={joinGoal} componentId={ROUTES.dailySteps} events={events} currentWorld={currentWorld} />
      )}

      {!showPanel ? null : (
        <View style={styles.panel}>
          <Panel
            title={t("screens.daily.panel.title")}
            description={t("screens.daily.panel.description")}
            onClose={closePanel}
          />
        </View>
      )}
      {!showChallengeButton ? null : (
        <View style={styles.buttonWrapper}>
          <Button
            onPress={handleNavigateToQuestsTab}
            size="Large"
            label={challengeButtonLabel}
            accessibilityLabel={accessibilityLabel}
          />
        </View>
      )}
      {!showReferralsButton ? null : (
        <View style={styles.buttonWrapper}>
          <Button
            size="Large"
            label="Invite a colleague"
            onPress={onReferralsButtonPress}
            testID={REFERRALS_BUTTON_HOMEPAGE}
          />
        </View>
      )}
    </>
  );
});

const isShort = Platform.select({ ios: Style.isXShort(), android: Style.isShorterThan(750) });
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
    bottom: NAV_BAR.getPositionBottom({ additionalBottom: Style.adjust(75) }),
    position: "absolute",
  } as ViewStyle,
  panel: {
    position: "absolute",
    bottom: NAV_BAR.getPositionBottom({ additionalBottom: Style.adjust(isShort ? 85 : 145) }),
  } as ViewStyle,
};
