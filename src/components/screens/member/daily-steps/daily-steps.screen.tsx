import React from "react";
import { View, Platform } from "react-native";
import * as Animatable from "react-native-animatable";
import { isIphoneX } from "react-native-iphone-x-helper";
import { IThemeStore } from "@app/redux/theme/theme.reducer";
import { DAILY_STEPS_SCREEN } from "@ids";
import { IConnectedScreenProps } from "../../../../typings";
import { CentredScreen, Pad } from "@atoms";
import { TouchableOpacityWithDelay } from "@molecules";
import { Streak, TopBar, NavBar, DailyStepsContent } from "@organisms";
import { Style } from "@styles";
import styles from "./daily-steps.screen.styles";
import YuCoin from "./assets/yu-coin";
import ReferralsPopover from "./referrals-popover";

interface IProps extends IConnectedScreenProps {
  showCounter?: boolean;
  fitKitAvailable: boolean;
  hasPermission: boolean;
  onCoinPress: () => void;
  onStreakPress?: () => void;
  theme: IThemeStore["dailyStepsScreen"];
}

type Props = IProps;

export default function DailyStepsScreen({
  hasPermission,
  onCoinPress,
  onLeftMenuPress,
  theme: { centredScreen, hasWhiteGlow, topBarType },
}: Props) {
  return (
    <Animatable.View duration={750} animation="fadeIn" style={styles.flex} useNativeDriver={true}>
      <CentredScreen
        footerImage={!hasPermission ? centredScreen.offline.image : centredScreen.online.image}
        style={!hasPermission ? centredScreen.offline.style : centredScreen.online.style}
        testID={DAILY_STEPS_SCREEN}
      >
        <Pad height={getPadHeight()} />
        <TouchableOpacityWithDelay onPress={onCoinPress} activeOpacity={1}>
          <YuCoin hasWhiteGlow={hasWhiteGlow} isGrayScale={!hasPermission} />
        </TouchableOpacityWithDelay>
        <DailyStepsContent />
        <Streak />
        <NavBar activeIndex={0} />
      </CentredScreen>
      <View style={styles.topbarWrapper}>
        <TopBar type={topBarType} onPressLeftIcon={onLeftMenuPress} />
      </View>
      <ReferralsPopover onLeftMenuPress={onLeftMenuPress} />
    </Animatable.View>
  );
}

function getPadHeight() {
  if (isIphoneX()) {
    return 110;
  }

  if (Platform.OS === "ios") {
    return 80;
  }

  if (Style.isShortToMediumAndroid()) {
    return 100;
  }

  return 110;
}
