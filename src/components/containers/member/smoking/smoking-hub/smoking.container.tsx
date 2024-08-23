import React, { memo, useCallback, useState } from "react";
import { useSelector } from "react-redux";
import { getHealthSmokingState } from "@redux/health-smoking/health-smoking.selectors";
import { Navigation } from "@navigation/main";
import { ROUTES } from "@navigation/constants";
import { useIntroModal, useStreakCheckIn, useEditState, useOptOut } from "./hooks";
import GenericErrorScreen from "@components/screens/generic-error/generic-error.screen";
import LoadingScreen from "@components/screens/member/loading/loading.screen";
import { SmokingHubScreen } from "@screens";
import { navigateToCommitmentScreen } from "./helpers/navigateToCommitmentScreen";
import { HealthSmokingState } from "@redux/health-smoking/health-smoking.types";

type Props = {
  swiper: Parameters<typeof useIntroModal>[0];
};

const SmokingContainer = (props: Props) => {
  const smokingState = useSelector(getHealthSmokingState);
  const [shouldAnimatePlants, setShouldAnimatePlants] = React.useState(false);
  const [lapsed, setLapsed] = React.useState(false);
  const [initialSmokingState, setInitialSmokingState] = useState<Partial<HealthSmokingState>>({});
  const animatePlants = useCallback(() => {
    setShouldAnimatePlants(true);
  }, []);
  const lapseUser = useCallback(() => setLapsed(true), []);
  const { error, loading } = useStreakCheckIn(smokingState, animatePlants, lapseUser, setInitialSmokingState);
  const { showOptOutOverlay } = useOptOut(smokingState);
  const { editTriggers, editReasons } = useEditState(smokingState);
  const { showIntroModal } = useIntroModal(props.swiper);

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
      navigateToCommitmentScreen={navigateToCommitmentScreen}
      shouldAnimatePlants={shouldAnimatePlants}
      lapsed={lapsed}
      initialSmokingState={initialSmokingState}
    />
  );
};

export default memo(SmokingContainer);

const onClose = () => {
  Navigation.popToRoot(ROUTES.smoking);
};
