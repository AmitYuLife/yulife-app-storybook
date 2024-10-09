import React, { memo, useCallback, useMemo } from "react";
import { Alert, Platform, View, ViewStyle } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { TextTemplate } from "@atoms";
import { ActivityList, Button, Counter, EventPanels, HeroCards, Panel, Pressable } from "@molecules";
import { displaySecondsAsMinutes, getCurrentWorld } from "@utils";
import { getDailyEarnedCoins } from "@redux/coins/coins.selectors";
import { NAV_BAR, Style, templateTextStyles } from "@styles";
import { getUserEventsWithAds, getUserHeroCards } from "@redux/user/user.selectors";
import { getDailyPanelSelector, getDailySteps } from "@redux/daily-steps/daily-steps.selectors";
import { getDailyMeditation } from "@redux/daily-meditation/daily-meditation.selectors";
import {
  getChallengesStatus,
  getCurrentLevel,
  getHasNotification,
  getYuniversalProgress,
} from "@redux/levels/levels.selectors";
import { handleTakeAChallengeCTA } from "@navigation/utils";
import { getDailyCycling } from "@redux/daily-cycling/daily-cycling.selectors";
import { REFERRALS_BUTTON_HOMEPAGE } from "@ids";
import { ROUTES } from "@navigation/constants";
import { updateUserGoal } from "@redux/user/user.actions";
import { useMutation } from "@apollo/client";
import Logger from "@services/logging/logger";
import { Navigation } from "@navigation/main";
import { useFitKit } from "@services/fitkit/fitkit.hooks";
import { getCurrentLocale, t } from "@locale";
import { getTheme } from "@theme";
import { changePanelVisibility } from "@redux/daily-steps/daily-steps.actions";
import { getDailyPensionContribution } from "@redux/daily-pension/daily-pension.selectors";
import { useUserFeatures } from "@hooks";
import { IHealthPermissionPanelProps } from "@components/molecules/health-permission-panel/health-permission-panel";
import { gql, UserProfileEvents } from "@graphql/__generated";

type DailyStepsOnlineProps = {
  onReferralsButtonPress: () => void;
  isUnavailable?: boolean;
  isUnauthorised?: boolean;
  hasEvents?: boolean;
  showEventPanel?: boolean;
  showHeroCards?: boolean;
};

export const DailyStepsOnline = memo(
  ({ isUnauthorised, isUnavailable, showEventPanel, showHeroCards, onReferralsButtonPress }: DailyStepsOnlineProps) => {
    const dailyCycling = useSelector(getDailyCycling);
    const dailyMeditation = useSelector(getDailyMeditation);
    const dailySteps = useSelector(getDailySteps);
    const dailyPension = useSelector(getDailyPensionContribution);
    const dailyEarnedCoins = useSelector(getDailyEarnedCoins);
    const { availableForToday, isAvailable, hasDone } = useSelector(getChallengesStatus);
    const showPanel = useSelector(getDailyPanelSelector);
    const mindfulTotal = displaySecondsAsMinutes(dailyMeditation);
    const hasNotification = useSelector(getHasNotification);
    const features = useUserFeatures();
    const currentLevel = useSelector(getCurrentLevel);
    const currentWorld = getCurrentWorld(currentLevel);
    const { yuniversalMap, yuniversalLevel } = useSelector(getYuniversalProgress);
    const { dailyStepsScreen } = getTheme(currentLevel, yuniversalMap);

    const dispatch = useDispatch();
    const fitkit = useFitKit();
    const [joinGoalMutation] = useMutation(gql("JoinGoalDocument"));

    const events = useSelector(getUserEventsWithAds);
    const heroCards = useSelector(getUserHeroCards);

    const counterStyle = useMemo(
      () => ({
        ...templateTextStyles.h1,
        color: dailyStepsScreen.textStyle.color,
      }),
      [dailyStepsScreen.textStyle.color]
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
      () =>
        hasNotification
          ? t("screens.daily.challenge_button.back_to_challenge")
          : t("screens.daily.challenge_button.take_challenge", { challenges: availableForToday }),
      [hasNotification, availableForToday]
    );

    const joinGoal = useCallback(
      async (event: UserProfileEvents) => {
        return new Promise<void>((resolve, reject) =>
          Alert.alert(t("screens.daily.join_event.title"), t("screens.daily.join_event.description"), [
            {
              text: t("labels.cta.cancel"),
              style: "cancel",
              onPress: () => reject(),
            },
            {
              text: t("labels.cta.confirm"),
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

    const locale = getCurrentLocale();
    const yuCoinTodayText = useMemo(() => `${t("yu_coin.camel_case")} ${t("period.today")}`, [locale]);

    const navigateToTodayEarnings = useCallback(() => {
      if (!features.tempGameEnableReleaseYuHealthV2) {
        if (!fitkit.authorised) {
          return;
        }
      }

      Navigation.push(ROUTES.dailySteps, {
        component: {
          id: ROUTES.todayEarnings,
          name: ROUTES.todayEarnings,
        },
      });
    }, [features.tempGameEnableReleaseYuHealthV2, fitkit.authorised]);

    const healthPermissions = useMemo((): Omit<IHealthPermissionPanelProps, "width"> => {
      if (!((isUnauthorised || isUnavailable) && features.tempGameEnableReleaseYuHealthV2)) {
        return;
      }

      const onPress = () => {
        // If they have not setup a provider yet, go to the connect screen
        if (isUnavailable) {
          return Navigation.push(ROUTES.dailySteps, {
            component: {
              id: ROUTES.yuHealthConnect,
              name: ROUTES.yuHealthConnect,
            },
          });
        }

        // Otherwise go to settings -> activity permissions
        Navigation.push(ROUTES.dailySteps, {
          component: {
            id: ROUTES.permissions,
            name: ROUTES.permissions,
          },
        });
      };

      return { isUnauthorised, isUnavailable, onPress };
    }, [features.tempGameEnableReleaseYuHealthV2, isUnauthorised, isUnavailable]);

    const handleTakeAChallengeButtonPress = useCallback(() => {
      Logger.logMixpanelEvent("button_pressed", {
        button_id: hasNotification ? "back_to_challenge" : "take_a_challenge",
        location: "daily_steps",
      });

      return handleTakeAChallengeCTA({
        currentLevel,
        yuniversalLevel,
        yuniversalMap,
        hasDoneChallengeToday: hasDone,
        isChallengeActive: hasNotification,
        allowDirectNavigation: features.tempTakeAChallengeDirectV2,
      });
    }, [currentLevel, yuniversalLevel, yuniversalMap, hasDone, hasNotification, features.tempTakeAChallengeDirectV2]);

    return (
      <>
        <Pressable onPress={navigateToTodayEarnings} delay={1000}>
          <View style={styles.center}>
            <TextTemplate
              type="h1"
              color={dailyStepsScreen.textStyle.color}
              accessibilityLabel={t("screens.daily.daily_passive.coins.accessibility_label", {
                coins: dailyEarnedCoins,
              })}
            >
              <Counter duration={1200} value={dailyEarnedCoins} textStyle={counterStyle} /> {yuCoinTodayText}
            </TextTemplate>
          </View>

          <View style={styles.activityListWrapper}>
            <ActivityList
              showUnsynced={(isUnavailable || isUnauthorised) && features.tempShowUnsyncedDailyStepsPassiveActivities}
              textColor={dailyStepsScreen.textStyle.color}
              steps={dailySteps}
              cycling={dailyCycling}
              mindfulness={dailyMeditation ? t("activity_types.meditation.short", { min: mindfulTotal.minutes }) : null}
              isPensionActive={dailyPension.active}
              pension={dailyPension.contribution}
              stepsAccessibilityLabel={t("screens.daily.daily_passive.steps.accessibility_label", {
                steps: dailySteps,
              })}
              mindfulnessAccessibilityLabel={t("screens.daily.daily_passive.mindfulness.accessibility_label", {
                mindfulness: mindfulTotal.minutes,
              })}
              cyclingAccessibilityLabel={t("screens.daily.daily_passive.cycling.accessibility_label", {
                cycling: dailyCycling,
              })}
              pensionAccessibilityLabel={t("screens.daily.daily_passive.pension.accessibility_label", {
                contribution: dailyPension.contribution,
              })}
            />
          </View>
        </Pressable>
        <View style={styles.aboveButton}>
          {showEventPanel ? (
            <EventPanels
              onJoin={joinGoal}
              componentId={ROUTES.dailySteps}
              events={events}
              currentWorld={currentWorld}
              healthPermissions={healthPermissions}
            />
          ) : showHeroCards ? (
            <HeroCards heroCards={heroCards} healthPermissions={healthPermissions} />
          ) : showPanel ? (
            <Panel
              title={t("screens.daily.panel.title")}
              description={t("screens.daily.panel.description")}
              onClose={closePanel}
            />
          ) : null}
        </View>
        {!showChallengeButton ? null : (
          <View style={styles.buttonWrapper}>
            <Button
              testID="DAILY_STEPS_ONLINE_TAKE_CHALLENGE_BUTTON"
              onPress={handleTakeAChallengeButtonPress}
              size="Large"
              translatedLabel={challengeButtonLabel}
            />
          </View>
        )}
        {!showReferralsButton ? null : (
          <View style={styles.buttonWrapper}>
            <Button
              size="Large"
              translationKey="labels.cta.invite"
              onPress={onReferralsButtonPress}
              testID={REFERRALS_BUTTON_HOMEPAGE}
            />
          </View>
        )}
      </>
    );
  }
);

const isShort = Platform.select({ ios: Style.isXShort(), android: Style.isShorterThan(750) });

const styles = {
  center: {
    alignItems: "center",
  } as ViewStyle,
  activityListWrapper: {
    marginTop: isShort ? 0 : Style.adjust(8),
  } as ViewStyle,
  aboveButton: {
    bottom: NAV_BAR.getPositionBottom({ additionalBottom: Style.adjust(145) }),
    position: "absolute",
  } as ViewStyle,
  buttonWrapper: {
    left: 0,
    right: 0,
    bottom: NAV_BAR.getPositionBottom({ additionalBottom: Style.adjust(75) }),
    position: "absolute",
  } as ViewStyle,
};
