import { IFeature } from "@redux/user/user.types";
import getClient from "@services/bugsnag";
import Logger from "@services/logging/logger";
import {
  IAggregateQueryRequest,
  IAggregateQueryResponse,
  ISampleQueryParams,
  ISampleQueryResponse,
  aggregateQuery,
  sampleQuery,
} from "@yu-life/react-native-yu-health";

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
        location: "yu-health",
      });
    }

    const results = await aggregateQuery({ ...params, queryOptions: { ...params?.queryOptions, disableUserEntries } });

    if (loggingEnabled && results) {
      Logger.logMixpanelEvent("app_debug", {
        metadata,
        params,
        results,
        type: `yu_health_aggregate_query_response`,
        location: "yu-health",
      });
    }

    return results?.result;
  } catch (e) {
    Logger.logMixpanelEvent("app_debug", {
      error: e,
      params,
      metadata,
      type: `yu_health_aggregate_query_response_error`,
      location: "yu-health",
    });

    return [];
  }
};

interface IYuHealthSampleQuery {
  params: ISampleQueryParams;
  features: IFeature;
  metadata: Record<string, string>;
}

export async function yuHealthSampleQuery({
  features,
  metadata,
  params,
}: IYuHealthSampleQuery): Promise<ISampleQueryResponse[]> {
  const { disableUserEntries = true, loggingEnabled = false } = features || {
    disableUserEntries: true,
    loggingEnabled: false,
  };

  getClient().leaveBreadcrumb("YuHealth Sample Queried", { params }, "log");

  try {
    const args: ISampleQueryParams = {
      queryOptions: { disableUserEntries },
      ...params,
    };

    if (loggingEnabled) {
      Logger.logMixpanelEvent("app_debug", {
        ...metadata,
        ...args,
        type: `yu_health_sample_query_args`,
        location: "yu-health",
      });
    }

    const results = await sampleQuery(args);

    if (loggingEnabled && results) {
      Logger.logMixpanelEvent("app_debug", {
        ...metadata,
        results,
        type: `yu_health_sample_query_results`,
        location: "yu-health",
      });
    }

    return results.result;
  } catch (e) {
    Logger.error(e, { event: "yuHealthSampleQuery" });

    Logger.logMixpanelEvent("app_debug", {
      ...metadata,
      error: e.message,
      params,
      type: `yu_health_sample_query_error`,
      location: "yu-health",
    });

    return [];
  }
}
