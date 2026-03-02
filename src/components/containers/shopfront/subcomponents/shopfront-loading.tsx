import { Box, SkeletonLoading } from "@atoms";
import { GenericHeadingPad, TopBar } from "@organisms";
import { IIcon } from "@organisms/top-bar/subcomponents/left";
import { TOP_BAR } from "@styles";
import React, { memo } from "react";
import NavBar from "@organisms/nav-bar/nav-bar";

interface IBattlePassLoadingProps {
  onBackPress?: () => void;
  leftIcons: IIcon[];
}

const ShopfrontLoading = ({ leftIcons }: IBattlePassLoadingProps) => (
  <>
    <Box bg="white">
      <GenericHeadingPad />
      <Box bg="white">
        <Box flexDirection="row" p={8} px={20} gap={10}>
          <SkeletonLoading w="65%" h={55} br={100} />
          <SkeletonLoading flex={1} h={55} br={100} />
        </Box>
      </Box>
    </Box>
    <Box bg="#FAFAFE" pt={10}>
      {Array.from({ length: 6 }).map((_, index) => (
        <Box key={index} flexDirection="row" p={8} px={20}>
          <SkeletonLoading flex={1} h={150} br={10} />
        </Box>
      ))}
    </Box>

    <Box position="absolute" top={0} w="100%" pt={TOP_BAR.PADDING_TOP} disableAutoAdjust={true}>
      <TopBar type="default" leftIcons={leftIcons} />
    </Box>

    <NavBar activeIndex={4} />
  </>
);
export default memo(ShopfrontLoading);
