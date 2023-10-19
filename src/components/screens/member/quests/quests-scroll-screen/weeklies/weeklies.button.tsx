import React, { memo, useCallback, useContext } from "react";
import { MODALS } from "@navigation/constants";
import { WeeklyQuestsModal } from "./weeklies.modal";
import { showFloatingModal } from "@modals";
import { Weeklies } from "@organisms";
import { QuestsMapContext } from "../quests.context";
import { GetMobileGameWeeklies_getMobileGameWeeklies } from "@graphql/_core/schema";

const ICON = require("@assets/icons/weeklies.png");
const CLAIMED_ICON = require("@assets/icons/trophy.png");

type Props = {
  weeklies?: GetMobileGameWeeklies_getMobileGameWeeklies;
  isVisible: boolean;
};

const handlePress = async (isClaimed?: boolean) => {
  await showFloatingModal({
    children: WeeklyQuestsModal,
    modalId: MODALS.weeklyQuestsOverlay,
    showButton: false,
    icon: isClaimed ? CLAIMED_ICON : ICON,
  });
};

export const WeeklyQuestsButton = memo(({ weeklies: weekliesProp, isVisible }: Props) => {
  const { weeklies: weekliesContext } = useContext(QuestsMapContext);
  const weeklies = !weekliesProp ? weekliesContext : weekliesProp;

  const claimableRewards = weeklies?.activityProgress?.filter?.((e) => e.isClaimable)?.length;
  const isClaimed = !!weeklies?.activityProgress.every((e) => e.isClaimed);

  const onPress = useCallback(() => handlePress(isClaimed), [isClaimed]);

  if (!isVisible || !weeklies?.endDateTime) {
    return null;
  }

  return (
    <Weeklies
      onPress={onPress}
      claimableRewards={claimableRewards}
      endDateTime={weeklies.endDateTime}
      hasJoined={weeklies.hasJoined}
      isClaimed={isClaimed}
    />
  );
});
