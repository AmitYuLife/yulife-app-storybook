import React, { memo, useCallback, useMemo } from "react";
import { View, Platform, AccessibilityPropsAndroid } from "react-native";
import { isIphoneX } from "react-native-iphone-x-helper";
import { DAILY_STEPS_SCREEN, NOTIF_CENTRE } from "@ids";
import { IConnectedScreenProps } from "@app/typings";
import { Pad, YuCoinBadge } from "@atoms";
import { TouchableOpacityWithDelay, CentredScreen } from "@molecules";
import { Surge, Streak, TopBar, NavBar, DailyStepsContentOld } from "@organisms";
import { Style, TOP_BAR } from "@styles";
import styles from "./daily-steps.screen.styles";
import ReferralsPopover from "./referrals-popover";
import { ContentItemLottieFragment, GetUserSurgeQuery } from "@graphql/__generated";
import { SurgeModal, showFloatingModal } from "@components/modals";
import { MODALS } from "@navigation/constants";
import { InformationIcon } from "@atoms/icon/information-icon";
import { YUCOIN_POWER_INFO, DAILYSTEP_SCREEN_COIN } from "@ids";
import { t } from "@locale";
import { useSelector } from "react-redux";
import { getModalState } from "@redux/app/app.selectors";
import { IThemeScreens } from "@theme";
import { LeftIcon } from "@organisms/top-bar/subcomponents/left";
import DailyStepsContent, {
  IDailyStepsContentProps,
} from "@organisms/daily-steps/daily-steps-content/daily-steps-content";
import { useUserFeatures } from "@hooks";
import { handleTakeAChallengeCTA } from "@navigation/utils";
import Logger from "@services/logging/logger";
import Animated, { FadeIn } from "react-native-reanimated";
import media from "@styles/media";

const FADE_IN_ANIMATION_DURATION = 750;

interface IProps extends IConnectedScreenProps {
  hasPermission: boolean;
  onCoinPress: () => void;
  onNotificationPress?: () => void;
  onStreakPress?: () => void;
  userSurge: GetUserSurgeQuery["getUserSurge"];
  currentWorld: number;
  currentYuniverse: number;
  currentLevel: number;
  yuniversalLevel: number;
  yuniversalMap: number;
  hasDoneChallengeToday: boolean;
  isChallengeActive: boolean;
  theme: IThemeScreens;
  hasEvents: boolean;
  hideInformationIcon: boolean;
  contentProps?: IDailyStepsContentProps;
}

type Props = IProps;

const DailyStepsScreen = ({
  hasPermission,
  onCoinPress,
  onLeftMenuPress,
  onNotificationPress,
  userSurge,
  hasEvents,
  hideInformationIcon,
  currentWorld,
  currentYuniverse,
  currentLevel,
  yuniversalLevel,
  yuniversalMap,
  hasDoneChallengeToday,
  isChallengeActive,
  theme,
  contentProps,
}: Props) => {
  const { tempGameEnableReleaseYuHealthV3 } = useUserFeatures();
  const currentModal = useSelector(getModalState);

  const { androidImportantForAccessibility, accessibilityElementsHidden } = useMemo(
    () =>
      currentModal === MODALS.blurredOverlay
        ? {
            androidImportantForAccessibility:
              "no-hide-descendants" as AccessibilityPropsAndroid["importantForAccessibility"],
            accessibilityElementsHidden: true,
          }
        : {
            androidImportantForAccessibility: "auto" as AccessibilityPropsAndroid["importantForAccessibility"],
            accessibilityElementsHidden: false,
          },
    [currentModal]
  );

  const onSurgePress = useCallback(async () => {
    const children = <SurgeModal {...userSurge} />;
    await showFloatingModal({
      children,
      lottie: userSurge?.lottie as unknown as ContentItemLottieFragment,
      modalId: MODALS.surgeOverlay,
    });
  }, [userSurge]);

  const getScreenProps = useMemo(
    () => (!hasPermission ? theme.dailyStepsScreen.offline : theme.dailyStepsScreen.online),
    [hasPermission, theme]
  );

  const leftIcons = useMemo(
    () => [
      {
        icon: LeftIcon.MENU,
        onPress: onLeftMenuPress,
        style: { marginRight: Style.adjust(16) },
      },
      ...(onNotificationPress
        ? [
            {
              icon: LeftIcon.NOTIFICATIONS,
              onPress: onNotificationPress,
              testID: NOTIF_CENTRE,
              style: { paddingLeft: Style.adjust(8) },
              hitSlop: {
                ...TOP_BAR.HIT_SLOP,
                left: 0,
              },
            },
          ]
        : []),
    ],
    [onNotificationPress, onLeftMenuPress]
  );

  const onStreakPrimaryPress = useCallback(
    async (isDoneToday: boolean) => {
      if (isDoneToday) {
        return;
      }

      Logger.logMixpanelEvent("button_pressed", {
        button_id: isChallengeActive ? "back_to_challenge" : "take_a_challenge",
        location: "streak",
      });

      await handleTakeAChallengeCTA({
        currentLevel,
        yuniversalLevel,
        yuniversalMap,
        hasDoneChallengeToday,
        isChallengeActive,
      });
    },
    [currentLevel, hasDoneChallengeToday, isChallengeActive, yuniversalLevel, yuniversalMap]
  );

  return (
    <Animated.View
      entering={FadeIn.duration(FADE_IN_ANIMATION_DURATION)}
      style={styles.flex}
      importantForAccessibility={androidImportantForAccessibility}
      accessibilityElementsHidden={accessibilityElementsHidden}
    >
      <CentredScreen {...getScreenProps} testID={DAILY_STEPS_SCREEN}>
        <Pad height={getPadHeight(hasEvents)} />
        <TouchableOpacityWithDelay
          onPress={onCoinPress}
          activeOpacity={1}
          testID={DAILYSTEP_SCREEN_COIN}
          accessibilityLabel={t("screens.daily.today_yu_coin.accessibility_label")}
        >
          {hideInformationIcon || !hasPermission ? null : (
            <View style={styles.informationIcon} testID={YUCOIN_POWER_INFO}>
              <InformationIcon />
            </View>
          )}
          <View style={styles.yucoinBadgeWrapper}>
            <View style={styles.yucoinBadge}>
              <YuCoinBadge
                hasWhiteGlow={theme.dailyStepsScreen.hasWhiteGlow}
                isGrayScale={!hasPermission}
                width={200}
                height={200}
                currentWorld={currentWorld}
                currentYuniverse={currentYuniverse}
              />
            </View>
          </View>
        </TouchableOpacityWithDelay>
        {!tempGameEnableReleaseYuHealthV3 ? <DailyStepsContentOld /> : <DailyStepsContent {...contentProps} />}
        <View style={styles.leftIconList}>
          {!userSurge?.endDateTime ? null : (
            <Surge multiplier={userSurge?.multiplier} endDateTime={userSurge?.endDateTime} onPress={onSurgePress} />
          )}
        </View>
        <View style={styles.rightIconList}>
          <Streak onPrimaryPress={onStreakPrimaryPress} />
        </View>
        <NavBar activeIndex={0} />
      </CentredScreen>
      <View style={styles.topbarWrapper}>
        <TopBar type={theme.dailyStepsScreen.topBarType} leftIcons={leftIcons} />
      </View>
      <ReferralsPopover onLeftMenuPress={onLeftMenuPress} />
    </Animated.View>
  );
};

export default memo(DailyStepsScreen);

function getPadHeight(hasEvents: boolean) {
  if (isIphoneX() || Style.isLargeScreen()) {
    return 110;
  }

  if (Platform.OS === "ios") {
    return hasEvents ? 15 : 80;
  }

  if (Style.DEVICE_HEIGHT <= media.DEVICES.Pixel2.height) {
    return hasEvents ? Style.adjust(42) : 100;
  }

  return 100;
}
