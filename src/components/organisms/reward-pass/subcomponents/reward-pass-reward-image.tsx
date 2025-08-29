import { Box } from "@atoms";
import { IBoxProps } from "@atoms/box/box.types";
import BattlePassItemAnimatedIcon from "@organisms/battle-pass-list-item/subcomponents/battle-pass-item-animated-icon";
import { memo } from "react";

import { StyleSheet } from "@styles";
interface IImpactPassRewardImageProps extends IBoxProps {
  images: string[];
}

const RewardPassRewardImage = ({ images, ...props }: IImpactPassRewardImageProps) => {
  return (
    <Box p={4} bg="#FFFFFF4C" br={100} {...props}>
      <Box w="100%" h="100%" bg="white" br={100} overflow="hidden" flexDirection="row" p={2}>
        <BattlePassItemAnimatedIcon
          images={images?.map((image) => ({ uri: image }))}
          radius={"100%"}
          resizeMode="cover"
          style={iconStyle.icon}
        />
      </Box>
    </Box>
  );
};

const iconStyle = StyleSheet.create({
  icon: {
    width: "100%",
    height: "100%",
    flex: 0,
  },
});

export default memo(RewardPassRewardImage);
