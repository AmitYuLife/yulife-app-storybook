import { IThemeStore } from "@app/redux/theme/theme.reducer";
import { DAILY_STEPS_SCREEN } from "@ids";
import { TouchableOpacityWithDelay } from "@molecules/index";
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
import { LeaderboardPopup, SurgePopup } from "../../../molecules";
import { Streak } from "@components/organisms";
import YuCoin from "./assets/yu-coin";
import DailyStepsFitKitAuthorise from "./daily-steps-fitkit-authorise";
import DailyStepsFitKitUnavailable from "./daily-steps-fitkit-unavailable";
import DailyStepsLoading from "./daily-steps-loading";
import DailyStepsOnline, { IProps as IDailyStepsOnlineProps } from "./daily-steps-online";
import styles from "./daily-steps.screen.styles";
import { TopBar } from "@components/organisms";
import { ILabel } from "@components/organisms/nav-bar/nav-bar.helpers";
import { NavBar } from "@components/organisms";

interface IProps extends IConnectedScreenProps {
  labels: ILabel[];
  showCounter?: boolean;
  currentWorld?: number;
  fitKitAvailable: boolean;
  hasPermission: boolean;
  isLoading: boolean;
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
  fitKitAvailable,
  hasPermission,
  isLoading,
  labels,
  onAuthoriseFitKitPress,
  onCoinPress,
  onCtaPress,
  onLeftMenuPress,
  showCounter = false,
  steps,
  theme: { centredScreen, hasWhiteGlow, topBarType, textStyle },
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
    <Animatable.View duration={750} animation="fadeIn" style={styles.flex} useNativeDriver={true}>
      <CentredScreen
        footerImage={!hasPermission ? centredScreen.offline.image : centredScreen.online.image}
        style={!hasPermission ? centredScreen.offline.style : centredScreen.online.style}
        testID={DAILY_STEPS_SCREEN}
      >
        <Pad height={getPadHeight()} />
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
          <TouchableOpacityWithDelay onPress={onCoinPress} activeOpacity={1}>
            <YuCoin hasWhiteGlow={hasWhiteGlow} isLoading={isLoading} isGrayScale={!hasPermission} />
          </TouchableOpacityWithDelay>
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
        <Streak />
        {popupVisibility.leaderboard ? (
          <LeaderboardPopup
            copy={copy.popUpCopy}
            labels={labels}
            onUpdateLeaderboardPopupVisibility={onUpdateLeaderboardPopupVisibility}
          />
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
