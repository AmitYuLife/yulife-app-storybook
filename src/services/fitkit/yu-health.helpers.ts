import { IFeature } from "@redux/user/user.reducer";
import getClient from "@services/bugsnag";
import Logger from "@services/logging/logger";
import { IAggregateQueryRequest, IAggregateQueryResponse, aggregateQuery } from "@yu-life/react-native-yu-health";

interface IYuHealthAggregateQuery {
  params: IAggregateQueryRequest;
  features: IFeature;
  metadata: Record<string, string>;
}

export const yuHealthAggregateQuery = async ({
  features,
  metadata,
  params,
}: IYuHealthAggregateQuery): Promise<IAggregateQueryResponse[]> => {
  const { loggingEnabled, disableUserEntries } = {
    loggingEnabled: false,
    disableUserEntries: true,
    ...features,
  };

  try {
    getClient().leaveBreadcrumb("YuHealth Aggregation Queried", { params }, "log");

    if (loggingEnabled) {
      Logger.logMixpanelEvent("app_debug", {
        metadata,
        params,
        type: `yu_health_aggregate_query_args`,
      });
    }

    const results = await aggregateQuery({ ...params, queryOptions: { ...params?.queryOptions, disableUserEntries } });

    if (loggingEnabled && results) {
      Logger.logMixpanelEvent("app_debug", {
        metadata,
        params,
        results,
        type: `yu_health_aggregate_query_response`,
      });
    }

    return results?.result;
  } catch (e) {
    Logger.logMixpanelEvent("app_debug", {
      error: e,
      params,
      metadata,
      type: `yu_health_aggregate_query_response_error`,
    });

    return [];
  }
};
