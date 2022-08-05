import React, { memo } from "react";
import { Style } from "@styles";
import { MODALS } from "@navigation/constants";
import { WeeklyQuestsModal } from "./weeklies.modal";
import { showFloatingModal } from "@components/modals/floating-modals/showFloatingModal";
import { Weeklies } from "@organisms";

type Props = {
  claimableRewards: number;
  endDateTime: string;
  isVisible: boolean;
};

const handlePress = async () => {
  await showFloatingModal({
    children: <WeeklyQuestsModal />,
    modalId: MODALS.weeklyQuestsOverlay,
    isCloseButtonSecondary: true,
    paddingTop: Style.adjust(24),
    height: Style.adjust(200),
  });
};

export const WeeklyQuestsButton = memo(({ isVisible, claimableRewards, endDateTime }: Props) => {
  if (!isVisible || !endDateTime) {
    return null;
  }

  return <Weeklies onPress={handlePress} claimableRewards={claimableRewards} endDateTime={endDateTime} />;
});
