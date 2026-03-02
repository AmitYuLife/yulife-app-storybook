import { Box, SkeletonLoading } from "@atoms";
import { TopBarAbsolute } from "@organisms";
import { battlePassListItemStyles } from "@organisms/battle-pass-list-item/battle-pass-list-item";
import { LeftIcon } from "@organisms/top-bar/subcomponents/left";
import { TOP_BAR } from "@styles";
import React, { memo } from "react";

interface IBattlePassLoadingProps {
  showNavigation?: boolean;
  onBackPress?: () => void;
}

const BattlePassLoading = ({ showNavigation, onBackPress }: IBattlePassLoadingProps) => (
  <>
    <Box flex={1} bg="white">
      <Box pt={showNavigation ? TOP_BAR.TOP_BAR_WITH_PAD : 0} bg="#290163">
        <Box pl={20} pr={24}>
          <Box flexDirection="row" my={24}>
            {Array.from({ length: 3 }).map((_, index) => (
              <SkeletonLoading key={index} bg="#320178" mr={8} mb={20} style={battlePassListItemStyles.wrapper} />
            ))}
          </Box>
        </Box>
      </Box>
      <Box pl={20} pr={24}>
        <SkeletonLoading
          br={10}
          left={-4}
          top={-34}
          w={342}
          h={64}
          shadowColor="#000000"
          shadowOffset={{ width: 0, height: 0 }}
          elevation={3}
          shadowOpacity={0.17}
          shadowRadius={3.22}
        />
        <Box mt={-15}>
          {Array.from({ length: 4 }).map((_, index) => (
            <SkeletonLoading key={index} w={343} h={120} mb={24} br={16} ml={-4} top={-1} />
          ))}
        </Box>
      </Box>
    </Box>
    {showNavigation ? (
      <Box position="absolute" top={0} w="100%" pt={TOP_BAR.PADDING_TOP} disableAutoAdjust={true}>
        <TopBarAbsolute type="white" leftIcon={LeftIcon.BACK} onPressLeftIcon={onBackPress} />
      </Box>
    ) : null}
  </>
);

export default memo(BattlePassLoading);
