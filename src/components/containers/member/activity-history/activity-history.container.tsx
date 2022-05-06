import { useMutation, useQuery } from "@apollo/react-hooks";
import { GQL_QUERY_GET_ACTIVITY_HISTORY } from "@graphql/user";
import {
  processResult,
  queryFitKitByTypes,
  queryAggregatedBiking,
  querySteps,
  returnEmptyResult,
} from "@services/fitkit/fitkit.helpers";
import moment from "moment";
import React, { useCallback, useState, useRef, FC } from "react";
import { LargeList } from "react-native-largelist-v3";
import { Navigation } from "react-native-navigation";
import { connect } from "react-redux";
import { IReduxState } from "@redux/_core/reducers";
import { getCopy } from "@redux/copy/copy.selectors";
import { getUserStart } from "@redux/user/user.actions";
import { getUserFeatures } from "@redux/user/user.selectors";
import Logger from "@services/logging/logger";
import GenericConnectionErrorModal from "@modals/generic-modal/generic-connection-error-modal";
import { ActivityHistoryLevels } from "@screens";
import { groupDatesByMonth } from "./activity-history.helpers";
import {
  GQL_MUTATION_UPSERT_PASSIVE_CHALLENGES,
  UpsertPassiveChallengesMutationTuple,
} from "@graphql/challenges/upsertPassiveChallenges.gql";
import {
  GQL_MUTATION_UPSERT_DAILY_PASSIVES,
  UpsertDailyPassivesMutationTuple,
} from "@graphql/challenges/upsertDailyPassives.gql";
import { getDailyCyclingMeasurement } from "@redux/daily-cycling/daily-cycling.selectors";
import { FitKitType } from "@graphql/_core/schema/globalTypes";
import { DATE_FORMAT_WITH_TZ } from "@utils";

interface IProps {
  componentId: string;
}

type ConnectedState = ReturnType<typeof mapStateToProps>;
type ConnectedDispatch = typeof mapDispatchToProps;

type Props = IProps & ConnectedState & ConnectedDispatch;

const ActivityHistoryContainer: FC<Props> = ({
  componentId,
  copy,
  cyclingMeasurement,
  features = {},
  getUserStart: dispatchGetUserStart,
}) => {
  const [monthsAgo, setMonthsAgo] = useState(0);
  const largeList = useRef<LargeList>(null);

  const handleClose = useCallback(() => {
    Navigation.popToRoot(componentId);
  }, [componentId]);

  const onComplete = useCallback(() => {
    if (largeList && largeList.current) {
      largeList.current.endLoading();
    }
  }, [largeList]);

  const { loading, data, refetch, error } = useQuery(GQL_QUERY_GET_ACTIVITY_HISTORY, {
    variables: { monthsAgo, isFullActivity: true },
    fetchPolicy: "cache-and-network",
    onCompleted: onComplete,
    onError: onComplete,
  });

  const [addHistoricalSteps]: UpsertPassiveChallengesMutationTuple = useMutation(
    GQL_MUTATION_UPSERT_PASSIVE_CHALLENGES
  );

  const [addHistoricalStepsNew]: UpsertDailyPassivesMutationTuple = useMutation(GQL_MUTATION_UPSERT_DAILY_PASSIVES);

  const fetchMoreData = useCallback(() => {
    setMonthsAgo((months) => months + 1);
  }, []);

  const onRefresh = useCallback(async () => {
    Logger.logEvent("activity_history_updated");

    if (features.canUpdateActivityHistory) {
      const start = moment().subtract(30, "days").startOf("day");
      const end = moment().subtract(1, "days").endOf("day");

      const [steps, meditation, cycling] = await Promise.all([
        querySteps(start, end, features),
        queryFitKitByTypes(
          start.format(DATE_FORMAT_WITH_TZ),
          end.format(DATE_FORMAT_WITH_TZ),
          [FitKitType.MindfulSession],
          features
        ),
        features.passiveCyclingEnabled ? queryAggregatedBiking(start, end, features) : returnEmptyResult(),
      ]);

      const meditationResults = processResult(meditation, "MindfulSession", start, end);
      const cyclingResults = features.passiveCyclingEnabled ? processResult(cycling, "Biking", start, end) : [];
      const payload = [...steps.results, ...meditationResults, ...cyclingResults];

      if (payload.length) {
        try {
          const mutation = features.useCoreChallengesService ? addHistoricalStepsNew : addHistoricalSteps;
          const response = await mutation({
            variables: { payload },
          });

          if (
            response &&
            response.data &&
            (Object.prototype.hasOwnProperty.call(response.data, "upsertPassiveChallenges") ||
              Object.prototype.hasOwnProperty.call(response.data, "upsertDailyPassives"))
          ) {
            refetch();
            dispatchGetUserStart();
          }
        } catch (e) {
          Logger.error(error, { event: "@activity_history_reload_catched" });
        }
      } else {
        Logger.error(error, { event: "@activity_history_reload" });
      }
    } else {
      refetch();
    }

    if (largeList && largeList.current) {
      largeList.current.endRefresh();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [features, largeList]);

  if (error && (!data || !data.getActivityHistoryWithLevels)) {
    return <GenericConnectionErrorModal onPress={handleClose} />;
  }

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
      cyclingMeasurement={cyclingMeasurement}
    />
  );
};

const mapStateToProps = (state: IReduxState) => ({
  features: getUserFeatures(state),
  copy: getCopy(state, "activityHistoryLevels"),
  cyclingMeasurement: getDailyCyclingMeasurement(state),
});

const mapDispatchToProps = {
  getUserStart,
};

export default connect<ConnectedState, ConnectedDispatch>(
  mapStateToProps,
  mapDispatchToProps
)(ActivityHistoryContainer);
