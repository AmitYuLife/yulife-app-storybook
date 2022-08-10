import React, { memo, useContext } from "react";
import { Style } from "@styles";
import { MODALS } from "@navigation/constants";
import { WeeklyQuestsModal } from "./weeklies.modal";
import { showFloatingModal } from "@components/modals/floating-modals/showFloatingModal";
import { Weeklies } from "@organisms";
import { QuestsMapContext } from "../quests.context";

type Props = {
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

export const WeeklyQuestsButton = memo(({ isVisible }: Props) => {
  const { weeklies } = useContext(QuestsMapContext);

  if (!isVisible || !weeklies?.endDateTime) {
    return null;
  }

  const claimableRewards = weeklies?.activityProgress?.filter?.((e) => e.isClaimable)?.length;

  return <Weeklies onPress={handlePress} claimableRewards={claimableRewards} endDateTime={weeklies.endDateTime} />;
});
