import React, { memo, useCallback, useContext } from "react";
import { MODALS } from "@navigation/constants";
import { WeeklyQuestsModal } from "./weeklies.modal";
import { showFloatingModal } from "@modals";
import { Weeklies } from "@organisms";
import { QuestsMapContext } from "../quests.context";
import { GetMobileGameWeekliesQuery } from "@graphql/__generated";
import { ThemeId } from "@app/modules/themes/types";
import { useTheme } from "@app/modules/themes/hooks/useTheme";

const getIconThemMap = (themeId: ThemeId) => {
  if (themeId === ThemeId.Metlife) {
    return require("@assets/icons/weeklies.metlife.webp");
  }

  return require("@assets/icons/weeklies.webp");
};

const CLAIMED_ICON = require("@assets/icons/trophy.png");

type Props = {
  weeklies?: GetMobileGameWeekliesQuery["getMobileGameWeeklies"];
  isVisible: boolean;
};

const handlePress = async (isClaimed?: boolean, themeId?: ThemeId) => {
  await showFloatingModal({
    children: WeeklyQuestsModal,
    modalId: MODALS.weeklyQuestsOverlay,
    showButton: false,
    icon: isClaimed ? CLAIMED_ICON : getIconThemMap(themeId),
  });
};

export const WeeklyQuestsButton = memo(({ weeklies: weekliesProp, isVisible }: Props) => {
  const { weeklies: weekliesContext } = useContext(QuestsMapContext);
  const weeklies = !weekliesProp ? weekliesContext : weekliesProp;

  const claimableRewards = weeklies?.activityProgress?.filter?.((e) => e.isClaimable)?.length;
  const isClaimed = !!weeklies?.activityProgress.every((e) => e.isClaimed);
  const { theme } = useTheme();

  const onPress = useCallback(() => handlePress(isClaimed, theme.id as ThemeId), [isClaimed, theme.id]);

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
