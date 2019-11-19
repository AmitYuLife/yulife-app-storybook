import { IConnectedScreenProps } from "@app/typings";
import { IReduxState } from "@redux/_core/reducers";
import { getCopy } from "@redux/copy/copy.selectors";
import { setShowIntro } from "@redux/onboarding/onboarding.actions";
import { IThemeStore } from "@redux/theme/theme.reducer";
import { setShowSurgeIntro } from "@redux/user/user.actions";
import { IntroScreen } from "@screens/index";
import { IProps as IDailyStepsOnlineProps } from "@screens/member/daily-steps/daily-steps-online";
import React from "react";

import { IUserStore } from "@redux/user/user.reducer";
import { connect } from "react-redux";

type ConnectedState = ReturnType<typeof mapStateToProps>;
type ConnectedDispatch = typeof mapDispatchToProps;

interface IntroScreenProps {
    displayStreak: boolean;
    showCounter?: boolean;
    currentStreak?: number;
    isDoneToday?: boolean;
    isLoading: boolean;
    maxStreak?: number;
    onCoinPress: () => void;
    onStreakPress?: () => void;
    theme: IThemeStore["dailyStepsScreen"];
    shouldDisplaySurge: boolean;
    showIntro: boolean;
    surgeIntro: IUserStore["surgeIntro"];
    isShowingPassiveMeditation: boolean;
    totalCoins: number;
}

type Props = ConnectedState &
    ConnectedDispatch &
    IntroScreenProps &
    Partial<IConnectedScreenProps> &
    IDailyStepsOnlineProps;

class IntroContainer extends React.PureComponent<Props> {
    public render() {
        return <IntroScreen onSetIntroDone={this.handleHideIntro} {...this.props} />;
    }

    private handleHideIntro = () => {
        const { surgeIntro } = this.props;
        if (surgeIntro.visibility) {
            this.props.setShowSurgeIntro({
                visibility: false,
                activity: null,
                rate: 1
            });
        }
        this.props.setShowIntro(false);
    };
}

const mapStateToProps = (state: IReduxState) => ({
    copy: getCopy(state, "intro")
});

const mapDispatchToProps = {
    setShowIntro,
    setShowSurgeIntro
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(IntroContainer);
