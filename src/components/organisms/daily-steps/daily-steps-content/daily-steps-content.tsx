import React, { useContext, useCallback } from "react";
import { connect } from "react-redux";
import { DailyStepsLoading } from "./subcontainers/daily-steps-loading";
import { FitkitUnavailable } from "./subcontainers/fitkit-unavailable";
import { FitkitUnauthorised } from "./subcontainers/fitkit-unauthorised";
import { DailyStepsOnline } from "./subcontainers/daily-steps-online";
import { IReduxState } from "@redux/_core/reducers";
import { getDailyStepsIsFetching } from "@redux/daily-steps/daily-steps.selectors";
import { FitkitContext } from "@services/fitkit/fitkit.helpers";
import FitKitPermissions from "@services/fitkit/fitkit.permissions";

type Props = ReturnType<typeof mapStateToProps>;

const _DailyStepsContent = (props: Props) => {
  const { dailyStepsIsFetching } = props;
  const { authorise, loading: fitkitLoading, authorised, available } = useContext(FitkitContext);

  const isLoading = fitkitLoading && dailyStepsIsFetching;
  const unavailable = !isLoading && !available;
  const unauthorised = !isLoading && available && !authorised;

  const handleAuthoriseFitkit = useCallback(() => {
    authorise(FitKitPermissions);
  }, [authorise]);

  if (isLoading) {
    return <DailyStepsLoading />;
  }

  if (unavailable) {
    return <FitkitUnavailable />;
  }

  if (unauthorised) {
    return <FitkitUnauthorised onPress={handleAuthoriseFitkit} />;
  }

  return <DailyStepsOnline />;
};

const mapStateToProps = (state: IReduxState) => ({
  dailyStepsIsFetching: getDailyStepsIsFetching(state),
});

const redux = connect(mapStateToProps);

export const DailyStepsContent = redux(_DailyStepsContent);
