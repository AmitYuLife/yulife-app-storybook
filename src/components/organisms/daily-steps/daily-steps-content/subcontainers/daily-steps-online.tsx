import React, { memo, useCallback, useMemo } from "react";
import { Platform, View, ViewStyle } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { TextTemplate } from "@atoms";
import { ActivityList, Button, Counter, HeroCards, Panel, Pressable } from "@molecules";
import { displaySecondsAsMinutes } from "@utils";
import { getDailyEarnedCoins } from "@redux/coins/coins.selectors";
import { NAV_BAR, Style, templateTextStyles } from "@styles";
import { getUserHeroCards } from "@redux/user/user.selectors";
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
import { ROUTES } from "@navigation/constants";
import Logger from "@services/logging/logger";
import { Navigation } from "@navigation/main";
import { useFitKit } from "@services/fitkit/fitkit.hooks";
import { getCurrentLocale, t } from "@locale";
import { getTheme } from "@theme";
import { changePanelVisibility } from "@redux/daily-steps/daily-steps.actions";
import { getDailyPensionContribution } from "@redux/daily-pension/daily-pension.selectors";
import { useUserFeatures } from "@hooks";
import { IHealthPermissionPanelProps } from "@components/molecules/health-permission-panel/health-permission-panel";
import { useQuery } from "@apollo/client";
import { gql } from "@graphql/__generated";
import Box from "@atoms/box/box";

type DailyStepsOnlineProps = {
  isUnavailable?: boolean;
  isUnauthorised?: boolean;
  hasEvents?: boolean;
  showHeroCards?: boolean;
};

export const DailyStepsOnline = memo(({ isUnauthorised, isUnavailable, showHeroCards }: DailyStepsOnlineProps) => {
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
  const { yuniversalMap, yuniversalLevel } = useSelector(getYuniversalProgress);
  const { dailyStepsScreen } = getTheme(currentLevel, yuniversalMap);

  const { data: todayScreenData } = useQuery(gql("GetUserTodayScreenDocument"), { fetchPolicy: "cache-only" });
  const todayScreen = todayScreenData?.getUserTodayScreen;

  const dispatch = useDispatch();
  const fitkit = useFitKit();

  const heroCards = useSelector(getUserHeroCards);

  const counterStyle = useMemo(
    () => ({
      ...templateTextStyles.h1,
      color: dailyStepsScreen.textStyle.color,
    }),
    [dailyStepsScreen.textStyle.color]
  );

  const hideButtons = isShort && heroCards.length > 0;
  const showChallengeButton = isAvailable && availableForToday > 0;

  const challengeButtonLabel = useMemo(
    () =>
      hasNotification
        ? t("screens.daily.challenge_button.back_to_challenge")
        : t("screens.daily.challenge_button.take_challenge", { challenges: availableForToday }),
    [hasNotification, availableForToday]
  );

  const closePanel = useCallback(() => dispatch(changePanelVisibility(false)), []);

  const locale = getCurrentLocale();
  const yuCoinTodayText = useMemo(() => `${t("yu_coin.camel_case")} ${t("period.today")}`, [locale]);

  const eventStyleBottom = useMemo(
    () => NAV_BAR.getPositionBottom({ additionalBottom: hideButtons ? Style.adjust(75) : Style.adjust(145) }),
    [hideButtons]
  );

  const navigateToTodayEarnings = useCallback(() => {
    if (!features.tempGameEnableReleaseYuHealthV4) {
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
  }, [features.tempGameEnableReleaseYuHealthV4, fitkit.authorised]);

  const healthPermissions = useMemo((): Omit<IHealthPermissionPanelProps, "width"> => {
    if (!((isUnauthorised || isUnavailable) && features.tempGameEnableReleaseYuHealthV4)) {
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
  }, [features.tempGameEnableReleaseYuHealthV4, isUnauthorised, isUnavailable]);

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
    });
  }, [currentLevel, yuniversalLevel, yuniversalMap, hasDone, hasNotification]);

  const handleButtonPress = useCallback(() => {
    if (todayScreen?.button?.onPress) {
      dispatch(todayScreen.button.onPress);
    }
  }, [todayScreen?.button?.onPress, dispatch]);

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
      <Box position="absolute" bottom={eventStyleBottom}>
        {showHeroCards ? (
          <HeroCards heroCards={heroCards} healthPermissions={healthPermissions} />
        ) : showPanel ? (
          <Panel
            title={t("screens.daily.panel.title")}
            description={t("screens.daily.panel.description")}
            onClose={closePanel}
          />
        ) : null}
      </Box>
      {showChallengeButton && !hideButtons ? (
        <View style={styles.buttonWrapper}>
          <Button
            testID="DAILY_STEPS_ONLINE_TAKE_CHALLENGE_BUTTON"
            onPress={handleTakeAChallengeButtonPress}
            size="Large"
            translatedLabel={challengeButtonLabel}
          />
        </View>
      ) : null}
      {!showChallengeButton && !hideButtons && todayScreen?.button?.onPress ? (
        <View style={styles.buttonWrapper} testID="DAILY_STEPS_ONLINE_TAKE_CHALLENGE_BUTTON">
          <Button
            size="Large"
            translatedLabel={todayScreen.button.label}
            onPress={handleButtonPress}
            testID={todayScreen.button.id}
          />
        </View>
      ) : null}
    </>
  );
});

const isShort = Platform.select({ ios: Style.isXShort(), android: Style.isShorterThan(750) });

const styles = {
  center: {
    alignItems: "center",
  } as ViewStyle,
  activityListWrapper: {
    marginTop: isShort ? 0 : Style.adjust(8),
  } as ViewStyle,
  buttonWrapper: {
    left: 0,
    right: 0,
    bottom: NAV_BAR.getPositionBottom({ additionalBottom: Style.adjust(75) }),
    position: "absolute",
  } as ViewStyle,
};
