import { GetActivityHistoryQuery } from "@graphql/user";
import moment from "moment";
import * as React from "react";
import { PureComponent } from "react";
import RNFitKit, { FitKitTypes } from "react-native-fitkit";
import { Navigation } from "react-native-navigation";
import { connect } from "react-redux";
import {
    addHistoricalStepsGql,
    AddHistoricalStepsMutation
} from "../../../../graphql/challenges/addHistoricalSteps.gql";
import { AddHistoricalStepsMutationFunction } from "../../../../graphql/challenges/addHistoricalSteps.gql";
import { IReduxState } from "../../../../redux/_core/reducers";
import { mapPedometerResults } from "../../../../redux/daily-steps/daily-steps.sagas";
import { getUserStart } from "../../../../redux/user/user.actions";
import { userFeaturesSelector } from "../../../../redux/user/user.selectors";
import Logger from "../../../../services/logging/logger";
import Loading from "../../../atoms/loading/loading";
import GenericConnectionErrorModal from "../../../modals/generic-modal/generic-error-modal";
import { ActivityHistoryLevels } from "../../../screens";

interface IProps {
    componentId: string;
}

interface IConnectedState {
    features: { [x: string]: boolean };
}

interface IConnectedDispatch {
    getUserStart: () => void;
}

type Props = IProps & IConnectedState & IConnectedDispatch;

class ActivityHistoryContainer extends PureComponent<Props> {
    public render() {
        return (
            <AddHistoricalStepsMutation mutation={addHistoricalStepsGql}>
                {(addHistoricalSteps) => (
                    <GetActivityHistoryQuery fetchPolicy="network-only">
                        {({ loading, data, refetch, error }) => {
                            if (loading) {
                                return <Loading />;
                            }

                            if (error) {
                                return <GenericConnectionErrorModal onPress={this.handleClose} />;
                            }

                            const onRefresh = async () => {
                                await this.handleReloadActivity(addHistoricalSteps, refetch);
                            };

                            return (
                                <ActivityHistoryLevels
                                    items={data.getActivityHistoryWithLevels || []}
                                    loading={loading}
                                    onPressClose={this.handleClose}
                                    onRefresh={onRefresh}
                                />
                            );
                        }}
                    </GetActivityHistoryQuery>
                )}
            </AddHistoricalStepsMutation>
        );
    }

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
            const authorised = await RNFitKit.authorise({
                read: [FitKitTypes.Types.Steps]
            });

            if (authorised) {
                const startTime = moment()
                    .subtract(30, "days")
                    .startOf("day")
                    .format();
                const endTime = moment()
                    .subtract(1, "days")
                    .endOf("day")
                    .format();
                const results = await RNFitKit.aggregateQuery({
                    aggregateBy: {
                        bucketSize: { value: 1, type: FitKitTypes.TimeRange.DAYS },
                        type: FitKitTypes.AggregateType.Time
                    },
                    endTime,
                    sampleType: FitKitTypes.Types.Steps,
                    startTime
                });

                try {
                    const response = await addHistoricalSteps({
                        variables: { payload: results.map(mapPedometerResults as any), shouldAward: true }
                    });

                    if (response && response.data && response.data.addHistoricalSteps) {
                        refetch();
                        this.props.getUserStart();
                    }
                } catch (e) {
                    return;
                }
            }
        }
    };
}

const mapStateToProps = (state: IReduxState) => ({
    features: userFeaturesSelector(state)
});

const mapDispatchToProps = {
    getUserStart
};

export default connect<IConnectedState, IConnectedDispatch>(
    mapStateToProps,
    mapDispatchToProps
)(ActivityHistoryContainer);
