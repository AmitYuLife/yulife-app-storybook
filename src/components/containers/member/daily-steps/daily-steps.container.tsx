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
            theme,
            copy,
            popUpCopy,
            popupVisibility,
            showIntro,
            surgeIntro,
            onLeftMenuPress,
          } = this.props;
          const shouldDisplaySurge = features.showSurge;
          if (showIntro || surgeIntro.visibility) {
            return (
              <IntroContainer
                shouldDisplaySurge={shouldDisplaySurge}
                coinsToday={dailyEarnedCoins}
                showCounter={features.showCounter}
                isLoading={isFetching || loading}
                onCoinPress={this.onCoinPress}
                onCtaPress={displayEarnMore ? this.onCta : null}
                onLeftMenuPress={onLeftMenuPress}
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
              currentWorld={getCurrentWorld(currentLevel)}
              fitKitAvailable={available}
              hasPermission={authorised}
              isLoading={isFetching || loading}
              labels={labels}
              onAuthoriseFitKitPress={() => authorise(FitKitPermissions)}
              onCoinPress={this.onCoinPress}
              onCtaPress={displayEarnMore ? this.onCta : null}
              onLeftMenuPress={onLeftMenuPress}
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
