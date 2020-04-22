import { IThemeStore } from "@app/redux/theme/theme.reducer";
import { DAILY_STEPS_SCREEN } from "@ids";
import { ILabel, TouchableOpacityWithState } from "@molecules/index";
import { Style } from "@styles/index";
import * as React from "react";
import { Platform, View } from "react-native";
import * as Animatable from "react-native-animatable";
import { isIphoneX } from "react-native-iphone-x-helper";
import {
  GetMobileCopy_getMobileCopy_screens_dailyStepsFitKitAuthorise,
  GetMobileCopy_getMobileCopy_screens_popUp,
} from "../../../../graphql/_core/schema";
import { IUserStore } from "../../../../redux/user/user.reducer";
import { IConnectedScreenProps } from "../../../../typings";
import { CentredScreen, Pad } from "../../../atoms";
import { LeaderboardPopup, NavBar, Streak, SurgePopup, TopBar } from "../../../molecules";
import YuCoin from "./assets/yu-coin";
import DailyStepsFitKitAuthorise from "./daily-steps-fitkit-authorise";
import DailyStepsFitKitUnavailable from "./daily-steps-fitkit-unavailable";
import DailyStepsLoading from "./daily-steps-loading";
import DailyStepsOnline, { IProps as IDailyStepsOnlineProps } from "./daily-steps-online";
import styles from "./daily-steps.screen.styles";

interface IProps extends IConnectedScreenProps {
  labels: ILabel[];
  showCounter?: boolean;
  currentStreak?: number;
  currentWorld?: number;
  displayStreak?: boolean;
  fitKitAvailable: boolean;
  hasNotification?: boolean;
  hasPermission: boolean;
  isDoneToday?: boolean;
  isLoading: boolean;
  maxStreak?: number;
  onAuthoriseFitKitPress: () => void;
  onCoinPress: () => void;
  onStreakPress?: () => void;
  theme: IThemeStore["dailyStepsScreen"];
  copy: {
    copy: GetMobileCopy_getMobileCopy_screens_dailyStepsFitKitAuthorise;
    popUpCopy: GetMobileCopy_getMobileCopy_screens_popUp;
  };
  onUpdateSurgePopupVisibility?: (payload: boolean) => void;
  onUpdateLeaderboardPopupVisibility?: (payload: boolean) => void;
  popupVisibility?: IUserStore["popupVisibility"];
  mindfulSeconds?: number;
  isShowingPassiveMeditation: boolean;
}

type Props = IProps & IDailyStepsOnlineProps;

export default function DailyStepsScreen({
  coinsToday,
  currentStreak,
  displayStreak = false,
  fitKitAvailable,
  hasNotification = false,
  hasPermission,
  isDoneToday,
  isLoading,
  labels,
  maxStreak,
  onAuthoriseFitKitPress,
  onCoinPress,
  onCtaPress,
  onLeftMenuPress,
  onStreakPress,
  showCounter = false,
  steps,
  totalCoins,
  theme: { centredScreen, hasWhiteGlow, topBarType, streakType, textStyle },
  copy,
  onUpdateLeaderboardPopupVisibility,
  onUpdateSurgePopupVisibility,
  popupVisibility = {
    leaderboard: false,
  },
  mindfulSeconds,
  isShowingPassiveMeditation,
}: Props) {
  return (
    <Animatable.View duration={750} animation="fadeIn" style={{ flex: 1 }}>
      <CentredScreen
        footerImage={!hasPermission ? centredScreen.offline.image : centredScreen.online.image}
        style={!hasPermission ? centredScreen.offline.style : centredScreen.online.style}
        testID={DAILY_STEPS_SCREEN}
      >
        <View style={styles.topbarWrapper}>
          <TopBar coins={totalCoins} type={topBarType} onPressLeftIcon={onLeftMenuPress} />
        </View>
        <Pad height={getPadHeight(displayStreak)} />
        {/** TODO: add surge condition: `!popupVisibility.leaderboard && popupVisibility.surge` */}
        {false ? (
          <SurgePopup
            hasWhiteGlow={hasWhiteGlow}
            onCoinPress={onCoinPress}
            isOnline={true}
            hasPermission={hasPermission}
            isLoading={true}
            copy={copy.popUpCopy}
            onUpdateSurgePopupVisibility={onUpdateSurgePopupVisibility}
          />
        ) : (
          <TouchableOpacityWithState onPress={onCoinPress} activeOpacity={1}>
            <YuCoin hasWhiteGlow={hasWhiteGlow} isLoading={isLoading} isGrayScale={!hasPermission} />
          </TouchableOpacityWithState>
        )}
        {isLoading ? (
          <DailyStepsLoading />
        ) : !fitKitAvailable ? (
          <DailyStepsFitKitUnavailable />
        ) : !hasPermission ? (
          <DailyStepsFitKitAuthorise onPress={onAuthoriseFitKitPress} copy={copy.copy} />
        ) : (
          <DailyStepsOnline
            coinsToday={coinsToday}
            showCounter={showCounter}
            steps={steps}
            onCtaPress={onCtaPress}
            textStyle={textStyle}
            mindfulSeconds={mindfulSeconds}
            isShowingPassiveMeditation={isShowingPassiveMeditation}
          />
        )}
        {!displayStreak ? null : (
          <Streak
            isFinished={isDoneToday}
            isOnline={true}
            onPress={onStreakPress}
            currentStreak={currentStreak}
            maxStreak={maxStreak}
            type={streakType}
          />
        )}
        {popupVisibility.leaderboard ? (
          <LeaderboardPopup
            copy={copy.popUpCopy}
            hasNotification={hasNotification}
            labels={labels}
            onUpdateLeaderboardPopupVisibility={onUpdateLeaderboardPopupVisibility}
          />
        ) : (
          <NavBar activeIndex={0} hasNotification={hasNotification} />
        )}
      </CentredScreen>
    </Animatable.View>
  );
}

function getPadHeight(displayStreak: boolean) {
  if (isIphoneX()) {
    return displayStreak ? 120 : 100;
  }
  if (Platform.OS === "ios") {
    return displayStreak ? 80 : 60;
  }
  if (Style.isShortToMediumAndroid()) {
    return displayStreak ? 100 : 80;
  }
  return displayStreak ? 140 : 120;
}
