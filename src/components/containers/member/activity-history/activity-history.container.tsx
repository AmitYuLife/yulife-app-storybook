import { GetActivityHistoryQuery } from "@graphql/user";
import { querySteps } from "@services/fitkit/fitkit.helpers";
import moment from "moment";
import { PureComponent } from "react";
import * as React from "react";
import { LargeList } from "react-native-largelist-v3";
import { Navigation } from "react-native-navigation";
import { connect } from "react-redux";
import { AddHistoricalStepsMutationFunction } from "../../../../graphql/challenges/addHistoricalSteps.gql";
import {
    addHistoricalStepsGql,
    AddHistoricalStepsMutation
} from "../../../../graphql/challenges/addHistoricalSteps.gql";
import { IReduxState } from "../../../../redux/_core/reducers";
import { getCopy } from "../../../../redux/copy/copy.selectors";
import { getUserStart } from "../../../../redux/user/user.actions";
import { getUserFeatures } from "../../../../redux/user/user.selectors";
import Logger from "../../../../services/logging/logger";
import GenericConnectionErrorModal from "../../../modals/generic-modal/generic-connection-error-modal";
import { ActivityHistoryLevels } from "../../../screens";
import { groupDatesByMonth } from "./activity-history.helpers";

interface IProps {
    componentId: string;
}

interface IState {
    monthsAgo: number;
}

type ConnectedState = ReturnType<typeof mapStateToProps>;
type ConnectedDispatch = typeof mapDispatchToProps;

type Props = IProps & ConnectedState & ConnectedDispatch;

class ActivityHistoryContainer extends PureComponent<Props, IState> {
    public state = {
        monthsAgo: 0
    };

    public largeList: LargeList = null;

    public render() {
        const { copy } = this.props;
        const { monthsAgo } = this.state;

        return (
            <AddHistoricalStepsMutation mutation={addHistoricalStepsGql}>
                {(addHistoricalSteps) => (
                    <GetActivityHistoryQuery
                        onCompleted={this.endLoading}
                        onError={this.endLoading}
                        variables={{ monthsAgo, isFullActivity: true }}
                        fetchPolicy="cache-and-network"
                    >
                        {({ loading, data, refetch, error }) => {
                            if (error && (!data || !data.getActivityHistoryWithLevels)) {
                                return <GenericConnectionErrorModal onPress={this.handleClose} />;
                            }

                            const onRefresh = async () => {
                                await this.handleReloadActivity(addHistoricalSteps, refetch);
                                if (this.largeList) {
                                    this.largeList.endRefresh();
                                }
                            };

                            return (
                                // return empty array if data.getActivityHistoryWithLevels is undefined
                                <ActivityHistoryLevels
                                    items={groupDatesByMonth(data.getActivityHistoryWithLevels || [])}
                                    loading={loading}
                                    onPressClose={this.handleClose}
                                    onFetchMoreData={this.fetchMoreData}
                                    onRefresh={onRefresh}
                                    copy={copy}
                                    onSetLargelistRef={this.setLargeListRef}
                                />
                            );
                        }}
                    </GetActivityHistoryQuery>
                )}
            </AddHistoricalStepsMutation>
        );
    }

    private endLoading = () => {
        this.largeList.endLoading();
    };

    private setLargeListRef = (ref: LargeList) => {
        this.largeList = ref;
    };

    private fetchMoreData = () => {
        this.setState({
            monthsAgo: this.state.monthsAgo + 1
        });
    };

    private handleClose = () => {
        Navigation.popToRoot(this.props.componentId);
    };

    private handleReloadActivity = async (
        addHistoricalSteps: AddHistoricalStepsMutationFunction,
        refetch: () => void
    ) => {
        const { features } = this.props;

        Logger.logEvent("activity_history_updated");

        if (features.canUpdateActivityHistory) {
            const start = moment().subtract(30, "days");
            const end = moment().subtract(1, "days");

            const { results, error } = await querySteps(start, end, features);

            if (results && !!results.length) {
                try {
                    const response = await addHistoricalSteps({
                        variables: { payload: results, shouldAward: true }
                    });

                    if (response && response.data && response.data.addHistoricalSteps) {
                        refetch();
                        this.props.getUserStart();
                    }
                } catch (e) {
                    Logger.logMixpanelError(error, "@activity_history_reload_catched");
                }
            } else {
                Logger.logMixpanelError(error, "@activity_history_reload");
            }
        } else {
            refetch();
        }
    };
}

const mapStateToProps = (state: IReduxState) => ({
    features: getUserFeatures(state),
    copy: getCopy(state, "activityHistoryLevels")
});

const mapDispatchToProps = {
    getUserStart
};

export default connect<ConnectedState, ConnectedDispatch>(
    mapStateToProps,
    mapDispatchToProps
)(ActivityHistoryContainer);
