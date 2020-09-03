import { IntroContainer } from "@containers/index";
import { MODALS } from "@navigation/constants";
import { IMainTabsProps, labels } from "@navigation/root";
import { getShowIntro } from "@redux/onboarding/onboarding.selectors";
import { FitKitAvailable, FitKitAvailableChildrenProps } from "@services/fitkit/fitkit.service";
import React from "react";
import { BackHandler, NativeEventSubscription } from "react-native";
import { Navigation } from "react-native-navigation";
import { connect } from "react-redux";
import { IReduxState } from "@redux/_core/reducers";
import { getCopy } from "@redux/copy/copy.selectors";
import { startDailySteps } from "@redux/daily-steps/daily-steps.actions";
import { getDailyStepsIsFetching } from "@redux/daily-steps/daily-steps.selectors";
import { dailyStepsCoinClicked } from "@redux/logging/logging.actions";
import { getDailyStepsTheme } from "@redux/theme/theme.selectors";
import { updateLeaderboardPopupVisibility, updateSurgePopupVisibility } from "@redux/user/user.actions";
import { getSurgeIntro, getUserFeatures, getVisiblePopups } from "@redux/user/user.selectors";
import { DailyStepsScreen } from "@screens";
import { FitkitContext } from "@services/fitkit/fitkit.helpers";

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
      nextProps.isFetching !== this.props.isFetching ||
      nextProps.popupVisibility.leaderboard !== this.props.popupVisibility.leaderboard ||
      !!(
        nextProps.surgeIntro &&
        this.props.surgeIntro &&
        (nextSurgeIntro.rate !== thisSurgeIntro.rate ||
          nextSurgeIntro.activity !== thisSurgeIntro.activity ||
          nextSurgeIntro.visibility !== thisSurgeIntro.visibility)
      ) ||
      nextProps.showIntro !== this.props.showIntro ||
      nextProps.theme !== this.props.theme
    );
  }

  public render() {
    return (
      <FitKitAvailable>
        {(fitkit: FitKitAvailableChildrenProps) => {
          const { features = {}, isFetching, theme, popUpCopy, showIntro, surgeIntro, onLeftMenuPress } = this.props;
          const shouldDisplaySurge = features.showSurge;
          if (showIntro || surgeIntro.visibility) {
            return (
              <FitkitContext.Provider value={fitkit}>
                <IntroContainer
                  shouldDisplaySurge={shouldDisplaySurge}
                  isLoading={isFetching || fitkit.loading}
                  onCoinPress={this.onCoinPress}
                  onLeftMenuPress={onLeftMenuPress}
                  theme={theme}
                  showIntro={showIntro}
                  surgeIntro={surgeIntro}
                  isShowingPassiveMeditation={features.usePassiveMeditation}
                />
              </FitkitContext.Provider>
            );
          }

          return (
            <FitkitContext.Provider value={fitkit}>
              <DailyStepsScreen
                onCoinPress={this.onCoinPress}
                theme={theme}
                popUpCopy={popUpCopy}
                onLeftMenuPress={onLeftMenuPress}
                fitKitAvailable={fitkit.available}
                hasPermission={fitkit.authorised}
              />
            </FitkitContext.Provider>
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
  features: getUserFeatures(state),
  isFetching: getDailyStepsIsFetching(state),
  theme: getDailyStepsTheme(state),
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
