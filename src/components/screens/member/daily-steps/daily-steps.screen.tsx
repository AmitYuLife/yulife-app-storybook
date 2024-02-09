import React, { memo, useCallback, useMemo } from "react";
import { View, Platform, AccessibilityPropsAndroid } from "react-native";
import * as Animatable from "react-native-animatable";
import { isIphoneX } from "react-native-iphone-x-helper";
import { DAILY_STEPS_SCREEN, NOTIF_CENTRE } from "@ids";
import { IConnectedScreenProps } from "@app/typings";
import { Pad, YuCoinBadge } from "@atoms";
import { TouchableOpacityWithDelay, CentredScreen } from "@molecules";
import { Surge, Streak, TopBar, NavBar, DailyStepsContent, CustomIcon } from "@organisms";
import { Style, TOP_BAR } from "@styles";
import styles from "./daily-steps.screen.styles";
import ReferralsPopover from "./referrals-popover";
import { GetUserProfile_getUserProfile_surge } from "@graphql/_core/schema";
import { ContentItemLottieFragment, GetDailyScreenCustomIconQuery } from "@graphql/__generated";
import { SurgeModal, showFloatingModal } from "@components/modals";
import { MODALS } from "@navigation/constants";
import { InformationIcon } from "@atoms/icon/information-icon";
import { YUCOIN_POWER_INFO, DAILYSTEP_SCREEN_COIN } from "@ids";
import { t } from "@locale";
import { useSelector } from "react-redux";
import { getModalState } from "@redux/app/app.selectors";
import { IThemeScreens } from "@theme";
import { LeftIcon } from "@organisms/top-bar/subcomponents/left";

interface IProps extends IConnectedScreenProps {
  showCounter?: boolean;
  fitKitAvailable: boolean;
  hasPermission: boolean;
  onCoinPress: () => void;
  onNotificationPress?: () => void;
  onStreakPress?: () => void;
  userSurge: GetUserProfile_getUserProfile_surge;
  customIcon: GetDailyScreenCustomIconQuery["getDailyScreenCustomIcon"];
  currentWorld: number;
  currentYuniverse: number;
  theme: IThemeScreens;
  hasEvents: boolean;
  hideInformationIcon: boolean;
}

type Props = IProps;

const DailyStepsScreen = ({
  hasPermission,
  onCoinPress,
  onLeftMenuPress,
  onNotificationPress,
  userSurge,
  customIcon,
  hasEvents,
  hideInformationIcon,
  currentWorld,
  currentYuniverse,
  theme,
}: Props) => {
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

  return (
    <Animatable.View
      duration={750}
      animation="fadeIn"
      style={styles.flex}
      useNativeDriver={true}
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
        <DailyStepsContent />
        <View style={styles.leftIconList}>
          {!userSurge?.endDateTime ? null : (
            <Surge multiplier={userSurge?.multiplier} endDateTime={userSurge?.endDateTime} onPress={onSurgePress} />
          )}
          {customIcon?.position !== "left" ? null : <CustomIcon icon={customIcon} />}
        </View>
        <View style={styles.rightIconList}>
          <Streak />
          {customIcon?.position !== "right" ? null : <CustomIcon icon={customIcon} />}
        </View>
        <NavBar activeIndex={0} />
      </CentredScreen>
      <View style={styles.topbarWrapper}>
        <TopBar type={theme.dailyStepsScreen.topBarType} leftIcons={leftIcons} />
      </View>
      <ReferralsPopover onLeftMenuPress={onLeftMenuPress} />
    </Animatable.View>
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

  if (Style.isShortToMediumAndroid()) {
    return hasEvents ? 19 : 100;
  }

  return 100;
}
