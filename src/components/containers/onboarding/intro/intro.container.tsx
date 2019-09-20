import { IConnectedScreenProps } from "@app/typings";
import { IReduxState } from "@redux/_core/reducers";
import { getCopy } from "@redux/copy/copy.selectors";
import { setShowIntro } from "@redux/onboarding/onboarding.actions";
import { IThemeStore } from "@redux/theme/theme.reducer";
import { IntroScreen } from "@screens/index";
import { IProps as IDailyStepsOnlineProps } from "@screens/member/daily-steps/daily-steps-online";
import React from "react";

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
}

type Props = ConnectedState &
    ConnectedDispatch &
    IntroScreenProps &
    Partial<IConnectedScreenProps> &
    IDailyStepsOnlineProps;

class IntroContainer extends React.PureComponent<Props> {
    public render() {
        const { copy } = this.props;
        return <IntroScreen onSetOnboardingDone={this.handleHideIntro} copy={copy} {...this.props} />;
    }

    private handleHideIntro = () => {
        this.props.setShowIntro(false);
    };
}

const mapStateToProps = (state: IReduxState) => ({
    copy: getCopy(state, "intro")
});

const mapDispatchToProps = {
    setShowIntro
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(IntroContainer);
