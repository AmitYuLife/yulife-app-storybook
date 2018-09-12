import React from "react";
import { PureComponent } from "react";
import { Navigation } from "react-native-navigation";
import { connect } from "react-redux";
import { GetCurrentWorld_getCurrentWorld } from "../../../../graphql/_core/schema";
import GetCurrentWorld, { getCurrentWorldGql } from "../../../../graphql/challenges/getCurrentWorld.gql";
import { ROUTES } from "../../../../navigation/routes";
import { IReduxState } from "../../../../redux/_core/reducers";
import { getOfflineState } from "../../../../redux/app/app.selectors";
import { SideEffect } from "../../../../typings";
import Loading from "../../../atoms/loading/loading";
import { QuestsScreen, QuestsScreenOffline } from "../../../screens";

// TODO find where these props actually come from in RNN types
interface IProps {
    onNavBarIndexChange: SideEffect<number>;
}

interface IConnectedState {
    offline: boolean;
}

type Props = IProps & IConnectedState;

class QuestsContainer extends PureComponent<Props> {
    public render() {
        const { offline } = this.props;

        return (
            <GetCurrentWorld query={getCurrentWorldGql} fetchPolicy="cache-first">
                {({ loading, data }) => {
                    if (offline) {
                        return <QuestsScreenOffline />;
                    }

                    if (loading) {
                        return <Loading />;
                    }

                    return <QuestsScreen data={this.formatData(data.getCurrentWorld)} />;
                }}
            </GetCurrentWorld>
        );
    }

    private formatData = (data: GetCurrentWorld_getCurrentWorld[] = []) => {
        const { onNavBarIndexChange } = this.props;

        return data.map((level) => ({
            ...level,
            onPress: async () => {
                await Navigation.push(ROUTES.member, {
                    component: {
                        id: ROUTES.questsChallengesList,
                        name: ROUTES.questsChallengesList,
                        passProps: {
                            level,
                            onNavBarIndexChange
                        }
                    }
                });
            }
        }));
    }
}

const mapStateToProps = (state: IReduxState) => ({
    offline: getOfflineState(state)
});

export default connect<IConnectedState>(mapStateToProps)(QuestsContainer);
