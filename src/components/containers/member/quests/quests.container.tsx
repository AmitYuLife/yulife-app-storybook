import React from "react";
import { PureComponent } from "react";
import { connect } from "react-redux";
import GetCurrentWorld, { getCurrentWorldGql } from "../../../../graphql/challenges/getCurrentWorld.gql";
import { IReduxState } from "../../../../redux/_core/reducers";
import { getOfflineState } from "../../../../redux/app/app.selectors";
import Loading from "../../../atoms/loading/loading";
import { QuestsScreen, QuestsScreenOffline } from "../../../screens";

// TODO find where these props actually come from in RNN types
interface IProps {
    componentId?: string;
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

                    return <QuestsScreen data={data.getCurrentWorld || []} />;
                }}
            </GetCurrentWorld>
        );
    }
}

const mapStateToProps = (state: IReduxState) => ({
    offline: getOfflineState(state)
});

export default connect<IConnectedState>(mapStateToProps)(QuestsContainer);
