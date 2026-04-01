import React, { memo, useCallback, useContext, useMemo } from "react";
import { MODALS } from "@navigation/constants";
import { WeeklyQuestsModal } from "./weeklies.modal";
import { showFloatingModal } from "@modals";
import { Weeklies } from "@organisms";
import { QuestsMapContext } from "../quests.context";
import { GetMobileGameWeekliesQuery } from "@graphql/__generated";
import { useTheme } from "@app/modules/themes/hooks/useTheme";
import { Box } from "@atoms";
import { Style } from "@styles";
import WeekliesCalendarIcon from "@atoms/icon/weeklies-calendar-icon";

const CLAIMED_ICON = require("@assets/icons/trophy.png");

type Props = {
  weeklies?: GetMobileGameWeekliesQuery["getMobileGameWeeklies"];
  isVisible: boolean;
};

export const WeeklyQuestsButton = memo(({ weeklies: weekliesProp, isVisible }: Props) => {
  const { weeklies: weekliesContext } = useContext(QuestsMapContext);
  const weeklies = !weekliesProp ? weekliesContext : weekliesProp;

  const claimableRewards = weeklies?.activityProgress?.filter?.((e) => e.isClaimable)?.length;
  const isClaimed = !!weeklies?.activityProgress.every((e) => e.isClaimed);
  const { theme } = useTheme();

  const themedIcon = useMemo(
    () => (
      <Box
        size={Style.adjust(112)}
        br={Style.adjust(56)}
        bg={theme.colors.primary.p400}
        alignItems="center"
        justifyContent="center"
      >
        <WeekliesCalendarIcon size={Style.adjust(64)} />
      </Box>
    ),
    [theme.colors.primary.p400]
  );

  const onPress = useCallback(
    () =>
      showFloatingModal({
        children: WeeklyQuestsModal,
        modalId: MODALS.weeklyQuestsOverlay,
        showButton: false,
        icon: isClaimed ? CLAIMED_ICON : themedIcon,
      }),
    [isClaimed, themedIcon]
  );

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
