import { Box, Image, TextTemplate } from "@atoms";
import { IRewardContainerProps } from "@components/containers/member/rewards/rewards.types";
import { Button } from "@components/molecules";
import { useTranslation } from "@hooks";
import { useNavigation } from "@navigation/navigation.context";
import { GenericHeadingPad, NavBar, TopBarAbsolute } from "@organisms";
import { LeftIcon } from "@organisms/top-bar/subcomponents/left";
import { TOP_BAR_TYPES } from "@organisms/top-bar/top-bar.helpers";
import { Style } from "@styles";
import { memo } from "react";

const RewardsUnavailableScreen = ({ handlePurchasesPress }: IRewardContainerProps) => {
  const { onLeftMenuPress } = useNavigation();
  const t = useTranslation([
    "screens.rewards.unavailable.title",
    "screens.rewards.unavailable.subtitle",
    "screens.rewards.unavailable.purchase_history",
  ]);

  return (
    <>
      <GenericHeadingPad />
      <Box flex={1} center={true}>
        <Image height={Style.adjust(170)} width={Style.adjust(170)} source={require("./rewards-unavailable.png")} />
        <Box gap={10} mt={30} px={40} center={true} mb={50}>
          <TextTemplate type="b1b" textAlign="center">
            {t["screens.rewards.unavailable.title"]}
          </TextTemplate>
          <TextTemplate type="l1" textAlign="center">
            {t["screens.rewards.unavailable.subtitle"]}
          </TextTemplate>
        </Box>
        <Box mb={100}>
          <Button translationKey="screens.rewards.unavailable.purchase_history" onPress={handlePurchasesPress} />
        </Box>
      </Box>
      <TopBarAbsolute type={TOP_BAR_TYPES.DEFAULT} leftIcon={LeftIcon.MENU} onPressLeftIcon={onLeftMenuPress} />
      <NavBar activeIndex={4} />
    </>
  );
};

export default memo(RewardsUnavailableScreen);
