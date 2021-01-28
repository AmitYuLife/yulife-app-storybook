import React, { useContext, useCallback, memo } from "react";
import { useSelector } from "react-redux";
import { DailyStepsLoading } from "./subcontainers/daily-steps-loading";
import { FitkitUnavailable } from "./subcontainers/fitkit-unavailable";
import { FitkitUnauthorised } from "./subcontainers/fitkit-unauthorised";
import { DailyStepsOnline } from "./subcontainers/daily-steps-online";
import { getDailyStepsIsFetching } from "@redux/daily-steps/daily-steps.selectors";
import { FitkitContext } from "@services/fitkit/fitkit.helpers";
import FitKitPermissions from "@services/fitkit/fitkit.permissions";

const _DailyStepsContent = () => {
  const { authorise, loading: fitkitLoading, authorised, available } = useContext(FitkitContext);

  const dailyStepsIsFetching = useSelector(getDailyStepsIsFetching);

  const isLoading = fitkitLoading || dailyStepsIsFetching;
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

export const DailyStepsContent = memo(_DailyStepsContent);
