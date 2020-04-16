import { useMutation, useQuery } from "@apollo/react-hooks";
import { GQL_MUTATION_ADD_HISTORICAL_STEPS, AddHistoricalStepsMutationTuple } from "@graphql/challenges";
import { GQL_QUERY_GET_ACTIVITY_HISTORY } from "@graphql/user";
import { querySteps } from "@services/fitkit/fitkit.helpers";
import moment from "moment";
import React, { useCallback, useState, useRef, FC } from "react";
import { LargeList } from "react-native-largelist-v3";
import { Navigation } from "react-native-navigation";
import { connect } from "react-redux";
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

type ConnectedState = ReturnType<typeof mapStateToProps>;
type ConnectedDispatch = typeof mapDispatchToProps;

type Props = IProps & ConnectedState & ConnectedDispatch;

const ActivityHistoryContainer: FC<Props> = ({
    componentId,
    copy,
    features = {},
    getUserStart: dispatchGetUserStart
}) => {
    const [monthsAgo, setMonthsAgo] = useState(0);
    const largeList = useRef<LargeList>(null);

    const handleClose = useCallback(() => {
        Navigation.popToRoot(componentId);
    }, []);

    const onComplete = useCallback(() => {
        if (largeList && largeList.current) {
            largeList.current.endLoading();
        }
    }, [largeList]);

    const { loading, data, refetch, error } = useQuery(GQL_QUERY_GET_ACTIVITY_HISTORY, {
        variables: { monthsAgo, isFullActivity: true },
        fetchPolicy: "cache-and-network",
        onCompleted: onComplete,
        onError: onComplete
    });

    if (error && (!data || !data.getActivityHistoryWithLevels)) {
        return <GenericConnectionErrorModal onPress={handleClose} />;
    }

    const [addHistoricalSteps]: AddHistoricalStepsMutationTuple = useMutation(GQL_MUTATION_ADD_HISTORICAL_STEPS);

    const fetchMoreData = useCallback(() => {
        setMonthsAgo((months) => months + 1);
    }, []);

    const onRefresh = useCallback(async () => {
        Logger.logEvent("activity_history_updated");

        if (features.canUpdateActivityHistory) {
            const start = moment().subtract(30, "days");
            const end = moment().subtract(1, "days");

            const res = await querySteps(start, end, features);

            if (res.results && !!res.results.length) {
                try {
                    const response = await addHistoricalSteps({
                        variables: { payload: res.results, shouldAward: true }
                    });

                    if (response && response.data && response.data.addHistoricalSteps) {
                        refetch();
                        dispatchGetUserStart();
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

        if (largeList && largeList.current) {
            largeList.current.endRefresh();
        }
    }, [features, largeList]);

    return (
        // return empty array if data.getActivityHistoryWithLevels is undefined
        <ActivityHistoryLevels
            items={groupDatesByMonth((data && data.getActivityHistoryWithLevels) || [])}
            loading={loading}
            onPressClose={handleClose}
            onFetchMoreData={fetchMoreData}
            onRefresh={onRefresh}
            copy={copy}
            largeListRef={largeList}
        />
    );
};

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
