import { Box, TextTemplate } from "@atoms";
import { t } from "@locale";
import { memo } from "react";
import { SEASON_COMPLETE_NEW_SEASON_COMING } from "@ids";
import { TopBarAbsolute } from "@organisms";
import { LeftIcon } from "@organisms/top-bar/subcomponents/left";
import { TOP_BAR } from "@styles";

interface IBattlePassSeasonStagingProps {
  showNavigation?: boolean;
  onBackPress?: () => void;
}

const BattlePassSeasonStaging = ({ showNavigation, onBackPress }: IBattlePassSeasonStagingProps) => {
  return (
    <>
      <Box
        flex={1}
        justifyContent="center"
        alignItems="center"
        bg="#290163"
        pt={showNavigation ? TOP_BAR.TOP_BAR_WITH_PAD : 0}
      >
        <Box px={20} gap={40}>
          <Box justifyContent="center" alignItems="center">
            <TextTemplate color="white" textAlign="center" type="h2" testID={SEASON_COMPLETE_NEW_SEASON_COMING}>
              {t("screens.battle_pass.season_complete.staging.title")}
            </TextTemplate>
            <TextTemplate type="b2" color="white" textAlign="center">
              {t("screens.battle_pass.season_complete.staging.description")}
            </TextTemplate>
          </Box>
        </Box>
      </Box>
      {showNavigation ? (
        <Box position="absolute" top={0} w="100%" pt={TOP_BAR.PADDING_TOP}>
          <TopBarAbsolute type="white" leftIcon={LeftIcon.BACK} onPressLeftIcon={onBackPress} />
        </Box>
      ) : null}
    </>
  );
};

export default memo(BattlePassSeasonStaging);
