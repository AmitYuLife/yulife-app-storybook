import React, { memo, useContext, useEffect } from "react";
import { useSelector } from "react-redux";
import { DailyStepsLoading } from "./subcontainers/daily-steps-loading";
import { FitkitUnavailable } from "./subcontainers/fitkit-unavailable";
import { FitkitUnauthorised } from "./subcontainers/fitkit-unauthorised";
import { DailyStepsOnline } from "./subcontainers/daily-steps-online";
import { getDailyStepsIsFetching } from "@redux/daily-steps/daily-steps.selectors";
import { FitkitContext } from "@services/fitkit/fitkit.helpers";
import { useAuthoriseFitkit } from "@services/hooks/useAuthoriseFitkit";
import Storage from "@services/storage";

const _DailyStepsContent = () => {
  const { authorise, loading: fitkitLoading, authorised, available } = useContext(FitkitContext);
  const { isIosMotionAuthorised, fitkitPermission, setFitkitPermission, handleAuthoriseFitkit } = useAuthoriseFitkit({
    authorise,
  });
  const dailyStepsIsFetching = useSelector(getDailyStepsIsFetching);

  const isLoading = fitkitLoading || dailyStepsIsFetching;
  const unavailable = !isLoading && !available;
  const unauthorised = !isLoading && available && !authorised;

  useEffect(() => {
    Storage.fitkit.getFitkitPermission().then((storageValue) => setFitkitPermission(storageValue));
  }, [setFitkitPermission]);

  if (isLoading) {
    return <DailyStepsLoading />;
  }

  if (unavailable) {
    return <FitkitUnavailable />;
  }

  if (unauthorised) {
    return (
      <FitkitUnauthorised
        onPress={handleAuthoriseFitkit}
        isIosMotionAuthorised={isIosMotionAuthorised}
        hasRequestedPermission={fitkitPermission === Storage.fitkit.REQUESTED}
      />
    );
  }

  return <DailyStepsOnline />;
};

export const DailyStepsContent = memo(_DailyStepsContent);
