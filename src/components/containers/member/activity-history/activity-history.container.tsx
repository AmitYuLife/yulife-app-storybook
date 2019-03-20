import { GetActivityHistoryQuery } from "@graphql/user";
import { querySteps } from "@services/fitkit/fitkit.helpers";
import * as React from "react";
import { PureComponent } from "react";
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
import { getUserFeatures } from "../../../../redux/user/user.selectors";
import Logger from "../../../../services/logging/logger";
import GenericConnectionErrorModal from "../../../modals/generic-modal/generic-error-modal";
import { ActivityHistoryLevels } from "../../../screens";

interface IProps {
    componentId: string;
}

type ConnectedState = ReturnType<typeof mapStateToProps>;
type ConnectedDispatch = typeof mapDispatchToProps;

type Props = IProps & ConnectedState & ConnectedDispatch;

class ActivityHistoryContainer extends PureComponent<Props> {
    public render() {
        return (
            <AddHistoricalStepsMutation mutation={addHistoricalStepsGql}>
                {(addHistoricalSteps) => (
                    <GetActivityHistoryQuery fetchPolicy="cache-and-network">
                        {({ loading, data, refetch, error }) => {
                            if (error && (!data || !data.getActivityHistoryWithLevels)) {
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
            const { results, error } = await querySteps(30, 1);

            if (results && !!results.length) {
                try {
                    const response = await addHistoricalSteps({
                        variables: { payload: results.map(mapPedometerResults as any), shouldAward: true }
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
        }
    };
}

const mapStateToProps = (state: IReduxState) => ({
    features: getUserFeatures(state)
});

const mapDispatchToProps = {
    getUserStart
};

export default connect<ConnectedState, ConnectedDispatch>(
    mapStateToProps,
    mapDispatchToProps
)(ActivityHistoryContainer);
