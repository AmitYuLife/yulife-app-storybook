import React, { memo, useCallback, useMemo } from "react";
import { Alert, Platform, View, ViewStyle } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { TextTemplate } from "@atoms";
import { ActivityList, Button, Counter, EventPanels, HeroCards, Panel, PressableWithDelay } from "@molecules";
import { displaySecondsAsMinutes, getCurrentWorld } from "@utils";
import { getDailyEarnedCoins } from "@redux/coins/coins.selectors";
import { Style, NAV_BAR, templateTextStyles } from "@styles";
import { getUserEventsWithAds } from "@redux/user/user.selectors";
import { getDailyPanelSelector, getDailySteps } from "@redux/daily-steps/daily-steps.selectors";
import { getDailyMeditation } from "@redux/daily-meditation/daily-meditation.selectors";
import {
  getChallengesStatus,
  getCurrentLevel,
  getHasNotification,
  getYuniversalProgress,
} from "@redux/levels/levels.selectors";
import { handleNavigateToQuestsTab } from "@navigation/utils";
import { getDailyCycling } from "@redux/daily-cycling/daily-cycling.selectors";
import { REFERRALS_BUTTON_HOMEPAGE } from "@ids";
import { ROUTES } from "@navigation/constants";
import { updateUserGoal } from "@redux/user/user.actions";
import { useMutation, useQuery } from "@apollo/client";
import Logger from "@services/logging/logger";
import { Navigation } from "@navigation/main";
import { useFitKit } from "@services/fitkit/fitkit.hooks";
import { t, getCurrentLocale } from "@locale";
import { getTheme } from "@theme";
import { changePanelVisibility } from "@redux/daily-steps/daily-steps.actions";
import { getDailyPensionContribution } from "@redux/daily-pension/daily-pension.selectors";
import { useUserFeatures } from "@hooks";
import { IHealthPermissionPanelProps } from "@components/molecules/health-permission-panel/health-permission-panel";
import { UserProfileEvents, gql } from "@graphql/__generated";
import { mapHeroCard } from "@utils/heroCards";

type DailyStepsOnlineProps = {
  onReferralsButtonPress: () => void;
  isUnavailable?: boolean;
  isUnauthorised?: boolean;
};

export const DailyStepsOnline = memo(
  ({ isUnauthorised, isUnavailable, onReferralsButtonPress }: DailyStepsOnlineProps) => {
    const dailyCycling = useSelector(getDailyCycling);
    const dailyMeditation = useSelector(getDailyMeditation);
    const dailySteps = useSelector(getDailySteps);
    const dailyPension = useSelector(getDailyPensionContribution);
    const dailyEarnedCoins = useSelector(getDailyEarnedCoins);
    const { availableForToday, isAvailable } = useSelector(getChallengesStatus);
    const showPanel = useSelector(getDailyPanelSelector);
    const mindfulTotal = displaySecondsAsMinutes(dailyMeditation);
    const hasNotification = useSelector(getHasNotification);
    const mindfulTotalToDisplay = `${mindfulTotal.minutes} min`;
    const features = useUserFeatures();
    const currentLevel = useSelector(getCurrentLevel);
    const currentWorld = getCurrentWorld(currentLevel);
    const events = useSelector(getUserEventsWithAds);
    const { yuniversalMap } = useSelector(getYuniversalProgress);
    const { dailyStepsScreen } = getTheme(currentLevel, yuniversalMap);

    const dispatch = useDispatch();
    const fitkit = useFitKit();
    const [joinGoalMutation] = useMutation(gql("JoinGoalDocument"));

    const heroCardsQuery = useQuery(gql("GetMobileHeroCardsDocument"), {
      fetchPolicy: "no-cache",
    });
    const heroCards = heroCardsQuery.data?.getMobileHeroCards ?? [];

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

    const accessibilityLabel = useMemo(
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

    const showEventPanel = (isUnavailable || isUnauthorised || events.length > 0) && !features.tempEnableDailyHeroCards;
    const showHeroCards = features.tempEnableDailyHeroCards && heroCards?.length > 0;

    return (
      <>
        <PressableWithDelay onPress={navigateToTodayEarnings}>
          <View style={styles.dailyStepsOnlineWrapper}>
            <TextTemplate
              type="h1"
              color={dailyStepsScreen.textStyle.color}
              accessibilityLabel={t("screens.daily.daily_passive.coins.accessibility_label", {
                coins: dailyEarnedCoins,
              })}
            >
              <Counter duration={1200} value={dailyEarnedCoins} textStyle={counterStyle} /> {yuCoinTodayText}
            </TextTemplate>

            <View style={styles.activityListWrapper}>
              <ActivityList
                textColor={dailyStepsScreen.textStyle.color}
                steps={dailySteps}
                cycling={dailyCycling}
                mindfulness={dailyMeditation > 0 ? mindfulTotalToDisplay : null}
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
          </View>
        </PressableWithDelay>
        {showEventPanel ? (
          <EventPanels
            onJoin={joinGoal}
            componentId={ROUTES.dailySteps}
            events={events}
            currentWorld={currentWorld}
            healthPermissions={healthPermissions}
          />
        ) : null}
        {showHeroCards ? (
          <HeroCards heroCards={heroCards.map(mapHeroCard)} healthPermissions={healthPermissions} />
        ) : null}
        {!showEventPanel && showPanel ? (
          <View style={styles.panel}>
            <Panel
              title={t("screens.daily.panel.title")}
              description={t("screens.daily.panel.description")}
              onClose={closePanel}
            />
          </View>
        ) : null}
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
              label={t("labels.cta.invite")}
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
