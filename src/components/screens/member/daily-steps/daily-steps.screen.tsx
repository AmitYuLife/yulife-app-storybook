import React from "react";
import { IThemeStore } from "@app/redux/theme/theme.reducer";
import { DAILY_STEPS_SCREEN } from "@ids";
import { TouchableOpacityWithDelay } from "@molecules/index";
import { View, Platform } from "react-native";
import * as Animatable from "react-native-animatable";
import { GetMobileCopy_getMobileCopy_screens_popUp } from "@graphql/_core/schema";
import { IUserStore } from "@redux/user/user.reducer";
import { IConnectedScreenProps } from "../../../../typings";
import { CentredScreen, Pad } from "@atoms";
import { LeaderboardPopup } from "@molecules";
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
  isLoading: boolean;
  onCoinPress: () => void;
  onStreakPress?: () => void;
  theme: IThemeStore["dailyStepsScreen"];
  popUpCopy: GetMobileCopy_getMobileCopy_screens_popUp;
  onUpdateSurgePopupVisibility?: (payload: boolean) => void;
  onUpdateLeaderboardPopupVisibility?: (payload: boolean) => void;
  popupVisibility?: IUserStore["popupVisibility"];
}

type Props = IProps;

export default function DailyStepsScreen({
  hasPermission,
  isLoading,
  onCoinPress,
  onLeftMenuPress,
  theme: { centredScreen, hasWhiteGlow, topBarType },
  popUpCopy,
  onUpdateLeaderboardPopupVisibility,
  popupVisibility = {
    leaderboard: false,
  },
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
          <YuCoin hasWhiteGlow={hasWhiteGlow} isLoading={isLoading} isGrayScale={!hasPermission} />
        </TouchableOpacityWithDelay>
        <DailyStepsContent />
        <Streak />
        {popupVisibility.leaderboard ? (
          <LeaderboardPopup copy={popUpCopy} onUpdateLeaderboardPopupVisibility={onUpdateLeaderboardPopupVisibility} />
        ) : (
          <NavBar activeIndex={0} />
        )}
      </CentredScreen>
      <View style={styles.topbarWrapper}>
        <TopBar type={topBarType} onPressLeftIcon={onLeftMenuPress} />
      </View>
    </Animatable.View>
  );
}

function getPadHeight() {
  if (isIphoneX()) {
    return 120;
  }

  if (Platform.OS === "ios") {
    return 80;
  }

  if (Style.isShortToMediumAndroid()) {
    return 100;
  }

  return 140;
}
