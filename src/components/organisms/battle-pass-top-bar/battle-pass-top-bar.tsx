import { Box } from "@atoms";
import { usePrizeHintPopup } from "@hooks";
import { ROUTES } from "@navigation/constants";
import { TOP_BAR } from "@styles";
import { memo, useRef } from "react";
import { View } from "react-native";
import { TopBarAbsolute } from "@organisms/top-bar/top-bar-absolute";
import { LeftIcon } from "@organisms/top-bar/subcomponents/left";

interface IBattlePassTopBar {
  onBackPress?: () => void;
}

const BattlePassTopBar = ({ onBackPress }: IBattlePassTopBar) => {
  const backButtonRef = useRef<View>(null);

  usePrizeHintPopup({
    routeIds: [ROUTES.quests, ROUTES.dailySteps, ROUTES.yuScreen],
    isEnabled: true,
    viewRef: backButtonRef,
  });

  return (
    <Box position="absolute" top={0} w="100%" pt={TOP_BAR.PADDING_TOP}>
      <TopBarAbsolute type="white" leftIcon={LeftIcon.BACK} onPressLeftIcon={onBackPress} leftRef={backButtonRef} />
    </Box>
  );
};

export default memo(BattlePassTopBar);
