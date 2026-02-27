import { Box } from "@atoms";
import { TopBar, NavBar } from "@organisms";
import { IIcon } from "@organisms/top-bar/subcomponents/left";
import { TOP_BAR } from "@styles";
import { ReactNode, memo } from "react";

interface IShopfrontSingleWrapperProps {
  leftIcons: IIcon[];
  children: ReactNode;
}

const ShopfrontSingleWrapper = ({ leftIcons, children }: IShopfrontSingleWrapperProps) => {
  return (
    <Box w="100%" h="100%">
      {children}
      <Box position="absolute" top={0} w="100%" pt={TOP_BAR.PADDING_TOP} disableAutoAdjust={true}>
        <TopBar type="white" leftIcons={leftIcons} />
      </Box>
      <NavBar activeIndex={4} />
    </Box>
  );
};

export default memo(ShopfrontSingleWrapper);
