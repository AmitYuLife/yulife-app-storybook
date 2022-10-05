import React, { memo, useContext } from "react";
import { MODALS } from "@navigation/constants";
import { WeeklyQuestsModal } from "./weeklies.modal";
import { showFloatingModal } from "@components/modals/floating-modals/showFloatingModal";
import { Weeklies } from "@organisms";
import { QuestsMapContext } from "../quests.context";

const ICON = require("@assets/icons/weeklies.png");

type Props = {
  isVisible: boolean;
};

const handlePress = async () => {
  await showFloatingModal({
    children: <WeeklyQuestsModal />,
    modalId: MODALS.weeklyQuestsOverlay,
    isCloseButtonSecondary: true,
    icon: ICON,
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
