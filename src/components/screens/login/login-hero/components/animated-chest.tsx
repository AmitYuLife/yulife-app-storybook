import { memo } from "react";
import { Box, Image } from "@atoms";
import { Style } from "@styles";
import { FadeIn } from "react-native-reanimated";
import { useLogoPositions } from "../hooks/useLogoPositions";
import LoginChestSvg from "./svgs/login-chest-svg";
import CircleBorder from "./circle-border";

type AnimatedChestProps = {
  rewards: Array<{
    id: string;
    logo: {
      id: string;
      uri?: string;
    };
  }>;
};

const AnimatedChest = ({ rewards }: AnimatedChestProps) => {
  const logoPositions = useLogoPositions();

  return (
    <Box>
      <LoginChestSvg />
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
    </Box>
  );
};

export default memo(AnimatedChest);
