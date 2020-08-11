import { IntroContainer } from "@containers/index";
import { MODALS } from "@navigation/constants";
import { IMainTabsProps, labels } from "@navigation/root";
import { getShowIntro } from "@redux/onboarding/onboarding.selectors";
import { FitKitAvailable } from "@services/fitkit/fitkit.service";
import { getCurrentWorld } from "@services/utils";
import React from "react";
import { BackHandler, NativeEventSubscription } from "react-native";
import { Navigation } from "react-native-navigation";
import { connect } from "react-redux";
import { IReduxState } from "../../../../redux/_core/reducers";
import { getDailyEarnedCoins } from "../../../../redux/coins/coins.selectors";
import { getCopy } from "../../../../redux/copy/copy.selectors";
import { getDailyMeditation } from "../../../../redux/daily-meditation/daily-meditation.selectors";
import { startDailySteps } from "../../../../redux/daily-steps/daily-steps.actions";
import {
  getDailySteps,
  getDailyStepsIsFetching,
  getLastUpdated,
} from "../../../../redux/daily-steps/daily-steps.selectors";
import { getChallengesStatus, getCurrentLevel } from "../../../../redux/levels/levels.selectors";
import { dailyStepsCoinClicked } from "../../../../redux/logging/logging.actions";
import { getStreaks } from "../../../../redux/streaks/streaks.selectors";
import { getDailyStepsTheme } from "../../../../redux/theme/theme.selectors";
import { updateLeaderboardPopupVisibility, updateSurgePopupVisibility } from "../../../../redux/user/user.actions";
import { getSurgeIntro, getUserFeatures, getVisiblePopups } from "../../../../redux/user/user.selectors";
import FitKitPermissions from "../../../../services/fitkit/fitkit.permissions";
import { DailyStepsScreen } from "../../../screens";

type ConnectedState = ReturnType<typeof mapStateToProps>;
type ConnectedDispatch = typeof mapDispatchToProps;

type Props = IMainTabsProps & ConnectedState & ConnectedDispatch;

class DailyStepsContainer extends React.Component<Props> {
  private backHandler: NativeEventSubscription;
  private backPressed: number = 0;

  constructor(props: Props) {
    super(props);
    Navigation.events().bindComponent(this);
  }

  public componentDidAppear() {
    this.backPressed = 0;
    this.backHandler = BackHandler.addEventListener("hardwareBackPress", () => {
      if (this.backPressed > 0) {
        return false;
      }

      this.backPressed += 1;
      return true;
    });
    this.props.startDailySteps();
  }

  public componentDidDisappear() {
    if (this.backHandler) {
      this.backHandler.remove();
    }
  }

  public shouldComponentUpdate(nextProps: Props) {
    const thisSurgeIntro = this.props.surgeIntro;
    const nextSurgeIntro = nextProps.surgeIntro;
    return (
      nextProps.currentLevel !== this.props.currentLevel ||
      nextProps.dailyEarnedCoins !== this.props.dailyEarnedCoins ||
      nextProps.dailySteps !== this.props.dailySteps ||
      nextProps.displayEarnMore !== this.props.displayEarnMore ||
      nextProps.isFetching !== this.props.isFetching ||
      nextProps.lastUpdated !== this.props.lastUpdated ||
      nextProps.popupVisibility.leaderboard !== this.props.popupVisibility.leaderboard ||
      nextProps.streaks.displayStreak !== this.props.streaks.displayStreak ||
      nextProps.streaks.isAvailable !== this.props.streaks.isAvailable ||
      nextProps.streaks.currentStreak !== this.props.streaks.currentStreak ||
      nextProps.streaks.isDoneToday !== this.props.streaks.isDoneToday ||
      nextProps.streaks.maxStreak !== this.props.streaks.maxStreak ||
      nextProps.dailyMeditation !== this.props.dailyMeditation ||
      !!(
        nextProps.surgeIntro &&
        this.props.surgeIntro &&
        (nextSurgeIntro.rate !== thisSurgeIntro.rate ||
          nextSurgeIntro.activity !== thisSurgeIntro.activity ||
          nextSurgeIntro.visibility !== thisSurgeIntro.visibility)
      ) ||
      nextProps.showIntro !== this.props.showIntro
    );
  }

  public render() {
    return (
      <FitKitAvailable>
        {({ available, authorised, authorise, loading }) => {
          const {
            currentLevel,
            displayEarnMore,
            dailyEarnedCoins,
            dailySteps,
            dailyMeditation,
            features = {},
            isFetching,
            streaks,
            theme,
            copy,
            popUpCopy,
            popupVisibility,
            showIntro,
            surgeIntro,
            onLeftMenuPress,
          } = this.props;
          const shouldDisplaySurge = features.showSurge;
          const displayStreak = features.showStreaks && streaks.displayStreak && streaks.isAvailable;
          if (showIntro || surgeIntro.visibility) {
            return (
              <IntroContainer
                shouldDisplaySurge={shouldDisplaySurge}
                coinsToday={dailyEarnedCoins}
                showCounter={features.showCounter}
                displayStreak={displayStreak}
                currentStreak={streaks.currentStreak}
                isDoneToday={streaks.isDoneToday}
                isLoading={isFetching || loading}
                maxStreak={streaks.maxStreak}
                onCoinPress={this.onCoinPress}
                onCtaPress={displayEarnMore ? this.onCta : null}
                onLeftMenuPress={onLeftMenuPress}
                onStreakPress={this.onStreak}
                steps={dailySteps}
                theme={theme}
                showIntro={showIntro}
                surgeIntro={surgeIntro}
                isShowingPassiveMeditation={features.usePassiveMeditation}
              />
            );
          }

          return (
            <DailyStepsScreen
              coinsToday={dailyEarnedCoins}
              showCounter={features.showCounter}
              currentStreak={streaks.currentStreak}
              currentWorld={getCurrentWorld(currentLevel)}
              displayStreak={displayStreak}
              fitKitAvailable={available}
              hasPermission={authorised}
              isDoneToday={streaks.isDoneToday}
              isLoading={isFetching || loading}
              labels={labels}
              maxStreak={streaks.maxStreak}
              onAuthoriseFitKitPress={() => authorise(FitKitPermissions)}
              onCoinPress={this.onCoinPress}
              onCtaPress={displayEarnMore ? this.onCta : null}
              onLeftMenuPress={onLeftMenuPress}
              onStreakPress={this.onStreak}
              steps={dailySteps}
              theme={theme}
              copy={{ copy, popUpCopy }}
              onUpdateLeaderboardPopupVisibility={this.props.updateLeaderboardPopupVisibility}
              onUpdateSurgePopupVisibility={this.props.updateSurgePopupVisibility}
              popupVisibility={popupVisibility}
              mindfulSeconds={dailyMeditation}
              isShowingPassiveMeditation={features.usePassiveMeditation}
            />
          );
        }}
      </FitKitAvailable>
    );
  }

  private onCoinPress = () => {
    const { features = {}, dailyStepsCoinClicked: clickDailySteps } = this.props;
    clickDailySteps();

    if (features.showTodayYucoin) {
      Navigation.showModal({
        component: {
          id: MODALS.todayYucoin,
          name: MODALS.todayYucoin,
          passProps: {
            onCtaPress: this.onCta,
          },
        },
      });
    }
  };

  private onCta = () => {
    labels[1].onPress();
  };

  private onStreak = () => {
    const {
      streaks: { currentStreak, isDoneToday, maxStreak, reward, nextStreakAvailableAt },
    } = this.props;
    const modalName = MODALS.streaks;

    Navigation.showModal({
      component: {
        id: modalName,
        name: modalName,
        passProps: {
          isDoneToday,
          onPressCtaPrimary: () => {
            if (!isDoneToday) {
              labels[1].onPress();
            }

            Navigation.dismissModal(modalName);
          },
          onPressCtaSecondary: isDoneToday
            ? null
            : () => {
                Navigation.dismissModal(modalName);
              },
          reward,
          streakCompleted: currentStreak,
          streakMax: maxStreak,
          nextStreakAvailableAt,
        },
      },
    });
  };
}

const mapStateToProps = (state: IReduxState) => ({
  currentLevel: getCurrentLevel(state),
  dailyEarnedCoins: getDailyEarnedCoins(state),
  dailySteps: getDailySteps(state),
  displayEarnMore: getChallengesStatus(state).isAvailable,
  dailyMeditation: getDailyMeditation(state),
  features: getUserFeatures(state),
  isFetching: getDailyStepsIsFetching(state),
  lastUpdated: getLastUpdated(state),
  streaks: getStreaks(state),
  theme: getDailyStepsTheme(state),
  copy: getCopy(state, "dailyStepsFitKitAuthorise"),
  popUpCopy: getCopy(state, "popUp"),
  popupVisibility: getVisiblePopups(state),
  showIntro: getShowIntro(state),
  surgeIntro: getSurgeIntro(state),
});

const mapDispatchToProps = {
  dailyStepsCoinClicked,
  startDailySteps,
  updateLeaderboardPopupVisibility,
  updateSurgePopupVisibility,
};

export default connect<ConnectedState, ConnectedDispatch>(mapStateToProps, mapDispatchToProps)(DailyStepsContainer);
