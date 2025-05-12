import { memo } from "react";
import { Box, Image } from "@atoms";
import { Style } from "@styles";
import { FadeIn } from "react-native-reanimated";
import CircleBorder from "./circle-border";
import { useLogoPositions } from "@components/screens/login/login-hero/hooks/useLogoPositions";
import { AnimatedChestProps } from "../types";

const RewardLogos = ({ rewards }: Pick<AnimatedChestProps, "rewards">) => {
  const logoPositions = useLogoPositions();

  return (
    <Box position="absolute" top={0} left={0} right={0} bottom={0} alignItems="center">
      {rewards.map((reward, index) => {
        const { id, top, left, right, size, rotation, border, animation } = logoPositions[index];

        return (
          <Box
            key={`${reward.id}-${id}`}
            position="absolute"
            top={top}
            left={left}
            right={right}
            alignItems="center"
            entering={FadeIn.delay(750 + 100 * index).duration(500)}
            forceAnimated={true}
            style={animation}
            disableAutoAdjust={true} // required for exact positioning
          >
            <CircleBorder size={size} border={border} />
            <Image
              source={reward.logo}
              width={Style.adjust(size)}
              height={Style.adjust(size)}
              style={{ transform: [{ rotate: `${rotation}deg` }] }}
            />
          </Box>
        );
      })}
    </Box>
  );
};

export default memo(RewardLogos);
