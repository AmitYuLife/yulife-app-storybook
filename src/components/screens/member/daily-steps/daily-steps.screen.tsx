import React, { memo, useCallback } from "react";
import { View, Platform } from "react-native";
import * as Animatable from "react-native-animatable";
import { isIphoneX } from "react-native-iphone-x-helper";
import { IThemeStore } from "@app/redux/theme/theme.reducer";
import { DAILY_STEPS_SCREEN } from "@ids";
import { IConnectedScreenProps } from "@app/typings";
import { Pad } from "@atoms";
import { Surge, TouchableOpacityWithDelay, CentredScreen } from "@molecules";
import { Streak, TopBar, NavBar, DailyStepsContent, CustomIcon } from "@organisms";
import { Style } from "@styles";
import styles from "./daily-steps.screen.styles";
import YuCoin from "./assets/yu-coin";
import ReferralsPopover from "./referrals-popover";
import {
  GetDailyScreenCustomIcon_getDailyScreenCustomIcon,
  GetUserProfile_getUserProfile_surge,
} from "@graphql/_core/schema";
import { SurgeModal } from "@components/modals";
import { showFloatingModal } from "@components/modals/floating-modals/showFloatingModal";
import { MODALS } from "@navigation/constants";

interface IProps extends IConnectedScreenProps {
  showCounter?: boolean;
  fitKitAvailable: boolean;
  hasPermission: boolean;
  onCoinPress: () => void;
  onStreakPress?: () => void;
  theme: IThemeStore["dailyStepsScreen"];
  userSurge: GetUserProfile_getUserProfile_surge;
  customIcon: GetDailyScreenCustomIcon_getDailyScreenCustomIcon;
  currentWorld: number;
  hasEvents: boolean;
}

type Props = IProps;

const DailyStepsScreen = ({
  hasPermission,
  onCoinPress,
  onLeftMenuPress,
  theme: { centredScreen, hasWhiteGlow, topBarType },
  userSurge,
  customIcon,
  hasEvents,
}: Props) => {
  const onSurgePress = useCallback(async () => {
    const child = <SurgeModal {...userSurge} />;
    await showFloatingModal(child, userSurge?.lottie, MODALS.surgeOverlay);
  }, [userSurge]);

  return (
    <Animatable.View duration={750} animation="fadeIn" style={styles.flex} useNativeDriver={true}>
      <CentredScreen
        footerImage={!hasPermission ? centredScreen.offline.image : centredScreen.online.image}
        style={!hasPermission ? centredScreen.offline.style : centredScreen.online.style}
        testID={DAILY_STEPS_SCREEN}
      >
        <Pad height={getPadHeight(hasEvents)} />
        <TouchableOpacityWithDelay onPress={onCoinPress} activeOpacity={1}>
          <YuCoin hasWhiteGlow={hasWhiteGlow} isGrayScale={!hasPermission} />
        </TouchableOpacityWithDelay>
        <DailyStepsContent />
        <View style={styles.leftIconList}>
          {!userSurge?.endDateTime ? null : (
            <Surge multiplier={userSurge?.multiplier} expireDate={userSurge?.endDateTime} onPress={onSurgePress} />
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
        <TopBar type={topBarType} onPressLeftIcon={onLeftMenuPress} />
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

  return 110;
}
