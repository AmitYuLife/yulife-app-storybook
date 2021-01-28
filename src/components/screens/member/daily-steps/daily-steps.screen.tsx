import React from "react";
import { IThemeStore } from "@app/redux/theme/theme.reducer";
import { DAILY_STEPS_SCREEN } from "@ids";
import { TouchableOpacityWithDelay } from "@molecules/index";
import { View, Platform } from "react-native";
import * as Animatable from "react-native-animatable";
import { IConnectedScreenProps } from "../../../../typings";
import { CentredScreen, Pad } from "@atoms";
import { Streak } from "@components/organisms";
import YuCoin from "./assets/yu-coin";
import styles from "./daily-steps.screen.styles";
import { TopBar } from "@components/organisms";
import { NavBar } from "@components/organisms";
import { DailyStepsContent } from "@components/organisms";
import { isIphoneX } from "react-native-iphone-x-helper";
import { Style } from "@styles";

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
