import React, { memo } from "react";
import { useSelector } from "react-redux";
import { getHealthSmokingState } from "@redux/health-smoking/health-smoking.selectors";
import { Navigation } from "@navigation/main";
import { ROUTES } from "@navigation/constants";
import { useIntroModal, useStreakCheckIn, useEditState, useOptOut } from "./hooks";
import GenericErrorScreen from "@components/screens/generic-error/generic-error.screen";
import LoadingScreen from "@components/screens/member/loading/loading.screen";
import { SmokingHubScreen } from "@screens";
import { navigateToCommitmentScreen } from "./helpers/navigateToCommitmentScreen";

type Props = {
  swiper: Parameters<typeof useIntroModal>[0];
};

const SmokingContainer = (props: Props) => {
  const smokingState = useSelector(getHealthSmokingState);
  const { error } = useStreakCheckIn(smokingState);
  const { showOptOutOverlay } = useOptOut(smokingState);
  const { editTriggers, editReasons } = useEditState(smokingState);
  const { showIntroModal } = useIntroModal(props.swiper);

  if (showIntroModal) {
    return null;
  }

  if (error) {
    return <GenericErrorScreen onPressBack={onClose} />;
  }

  if (!smokingState) {
    return <LoadingScreen onClose={onClose} />;
  }

  return (
    <SmokingHubScreen
      smokingState={smokingState}
      showOptOutOverlay={showOptOutOverlay}
      editTriggers={editTriggers}
      editReasons={editReasons}
      navigateToCommitmentScreen={navigateToCommitmentScreen}
    />
  );
};

export default memo(SmokingContainer);

const onClose = () => {
  Navigation.popToRoot(ROUTES.smoking);
};
