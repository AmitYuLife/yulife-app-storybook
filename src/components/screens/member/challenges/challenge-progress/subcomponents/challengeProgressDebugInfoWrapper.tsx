import { memo, useMemo } from "react";
import ChallengeProgressDebugInfo from "./challengeProgressDebugInfo";
import { useSelector } from "react-redux";
import { getActiveLevel } from "@redux/levels/levels.selectors";
import { getFitkitHealthApp } from "@redux/fitkit/fitkit.selectors";
import { getActiveProvider } from "@redux/yu-health/yu-health.selectors";
import { useUserFeatures } from "@hooks";
import { HealthProvider } from "@yu-life/react-native-yu-health";
import { t } from "@locale";
import { first } from "lodash";
import { getDebugPedometerHistorySteps } from "@redux/debug/debug.selectors";

const ChallengeProgressDebugInfoWrapper = () => {
  const { tempGameEnableReleaseYuHealthV3 } = useUserFeatures();

  const fitkitHealthApp = useSelector(getFitkitHealthApp);
  const yuHealthProvider = useSelector(getActiveProvider);

  const healthProvider = useMemo(() => {
    if (!tempGameEnableReleaseYuHealthV3) {
      switch (fitkitHealthApp) {
        case "GoogleFit":
          return t("yu_health.providers.googleFit");
        case "AppleHealth":
          return t("yu_health.providers.healthKit");
        case "SamsungHealth":
          return t("yu_health.providers.samsungHealth");
        default:
          return t("yu_health.providers.generic");
      }
    }

    switch (yuHealthProvider) {
      case HealthProvider.googleFit:
        return t("yu_health.providers.googleFit");
      case HealthProvider.healthKit:
        return t("yu_health.providers.healthKit");
      case HealthProvider.samsungHealth:
        return t("yu_health.providers.samsungHealth");
      case HealthProvider.healthConnect:
        return t("yu_health.providers.healthConnect");
      default:
        return t("yu_health.providers.generic");
    }
  }, [tempGameEnableReleaseYuHealthV3, fitkitHealthApp, yuHealthProvider]);

  const { initialPedometerResult } = useSelector(getActiveLevel);
  const historySteps = useSelector(getDebugPedometerHistorySteps);

  return (
    <ChallengeProgressDebugInfo
      historySteps={historySteps}
      healthProvider={healthProvider}
      initialDailySteps={initialPedometerResult}
      currentPedometerSteps={first(historySteps)}
      progressCalculation={first(historySteps) - initialPedometerResult}
    />
  );
};

export default memo(ChallengeProgressDebugInfoWrapper);
