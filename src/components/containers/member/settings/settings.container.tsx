import * as React from "react";
import { PureComponent } from "react";
import { Navigation } from "react-native-navigation";
import { connect } from "react-redux";
import { MobileConsentInput } from "../../../../graphql/_core/schema";
import { MODALS } from "../../../../navigation/routes";
import { IReduxState } from "../../../../redux/_core/reducers";
import { updateUserConsent, UpdateUserConsentAction } from "../../../../redux/user/user.actions";
import { userConsentSelector } from "../../../../redux/user/user.selectors";
import { SettingsScreen } from "../../../screens";

interface IConnectedState {
    consent: MobileConsentInput;
}

interface IConnectedDispatch {
    updateUserConsent: UpdateUserConsentAction;
}

interface IOwnProps {
    componentId: string;
}

type IProps = IOwnProps & IConnectedState & IConnectedDispatch;

class SettingsContainer extends PureComponent<IProps> {
    public render() {
        const { consent = {} } = this.props;
        const leaderboard = {
            items: [
                {
                    name: "company",
                    onPress: this.handleUpdateLeaderboardConsent(consent.companyLeaderboard),
                    status: consent.companyLeaderboard ? "active" : "inactive"
                }
            ],
            name: "leaderboard"
        } as any;

        return <SettingsScreen onPressClose={this.handleClose} sections={[leaderboard]} />;
    }

    private handleUpdateLeaderboardConsent = (active: boolean) => () => {
        if (active) {
            const onPress = () => Navigation.dismissModal(MODALS.generic);

            Navigation.showModal({
                component: {
                    id: MODALS.generic,
                    name: MODALS.generic,
                    passProps: {
                        ctaLabel: "keep it on!",
                        ctaLabelSecondary: "turn it off",
                        heading: "turn it off?",
                        onPress,
                        onPressSecondary: () => {
                            this.props.updateUserConsent({ companyLeaderboard: !active });
                            onPress();
                        },
                        /* tslint:disable-next-line */
                        subheading: "This means you won’t be able to see how well you’re doing compared to others in your business or workspace.",
                    }
                }
            });
        } else {
            this.props.updateUserConsent({ companyLeaderboard: !active });
        }
    }

    private handleClose = () => {
        Navigation.popToRoot(this.props.componentId);
    }
}

const mapStateToProps = (state: IReduxState) => ({
    consent: userConsentSelector(state)
});

const mapDispatchToProps = {
    updateUserConsent
};

export default connect<IConnectedState, IConnectedDispatch>(
    mapStateToProps,
    mapDispatchToProps
)(SettingsContainer);
