import { memo, useCallback, useState } from "react";
import { useSelector } from "react-redux";
import { getHealthSmokingState } from "@redux/health-smoking/health-smoking.selectors";
import { Navigation } from "@navigation/main";
import { ROUTES } from "@navigation/constants";
import { useEditState, useIntroModal, useOptOut, useStreakCheckIn } from "./hooks";
import GenericErrorScreen from "@components/screens/generic-error/generic-error.screen";
import LoadingScreen from "@components/screens/member/loading/loading.screen";
import { SmokingHubScreen } from "@screens";
import { navigateToCommitmentScreen } from "./helpers/navigateToCommitmentScreen";
import { HealthSmokingState } from "@redux/health-smoking/health-smoking.types";
import { useNotificationForAutoClaimedYuCoin } from "./hooks/useNotificationForAutoClaimedYuCoin";

type Props = {
  swiper: Parameters<typeof useIntroModal>[0];
};

const SmokingContainer = (props: Props) => {
  const smokingState = useSelector(getHealthSmokingState);
  const [lastStreakCheckInDoneAt, setLastStreakCheckInDoneAt] = useState<number>(null);
  const [initialSmokingState, setInitialSmokingState] = useState<Partial<HealthSmokingState>>({});
  const onSmokingStreakCelebrationClose = useCallback(() => {
    setLastStreakCheckInDoneAt(Date.now());
  }, []);
  const { error, loading } = useStreakCheckIn(smokingState, onSmokingStreakCelebrationClose, setInitialSmokingState);
  const { showOptOutOverlay } = useOptOut(smokingState);
  const { editTriggers, editReasons } = useEditState(smokingState);
  const { showIntroModal } = useIntroModal(props.swiper, smokingState);
  useNotificationForAutoClaimedYuCoin();

  const navigateToCommitmentScreenAction = useCallback(() => navigateToCommitmentScreen(smokingState), [smokingState]);

  if (showIntroModal) {
    return null;
  }

  if (error) {
    return <GenericErrorScreen onPressBack={onClose} />;
  }

  if (!smokingState || loading) {
    return <LoadingScreen onClose={onClose} />;
  }

  return (
    <SmokingHubScreen
      smokingState={smokingState}
      showOptOutOverlay={showOptOutOverlay}
      editTriggers={editTriggers}
      editReasons={editReasons}
      navigateToCommitmentScreen={navigateToCommitmentScreenAction}
      animationsEnabled={!!lastStreakCheckInDoneAt}
      initialSmokingState={initialSmokingState}
    />
  );
};

export default memo(SmokingContainer);

const onClose = () => {
  Navigation.popToRoot(ROUTES.smoking);
};
