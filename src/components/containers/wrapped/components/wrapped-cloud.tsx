import { Box } from "@atoms";
import { Style } from "@styles";
import {
  Easing,
  FadeOut,
  useAnimatedStyle,
  withDelay,
  withRepeat,
  withSequence,
  withTiming,
} from "react-native-reanimated";
import Svg, { ClipPath, Defs, G, Path } from "react-native-svg";

interface IWrappedCloudProps {
  size?: number;
  delay?: number;
  color?: string;
  duration?: number;
  top?: number;
  opacity?: number;
  invert?: boolean;
}

export const WrappedCloud = ({
  size = 100,
  color,
  top = 0,
  invert,
  delay = 0,
  opacity = 1,
  duration = 10000,
}: IWrappedCloudProps) => {
  const cloudStyles = useAnimatedStyle(() => {
    return {
      top,
      width: size,
      height: size,
      position: "absolute",
      transform: [
        {
          translateX: withDelay(
            delay,
            withRepeat(
              withSequence(
                withTiming(-size, { duration: 0 }),
                withDelay(1000, withTiming(Style.DEVICE_WIDTH, { duration, easing: Easing.linear })),
                withTiming(-size, { duration: 0, easing: Easing.linear })
              ),
              -1,
              false
            )
          ),
        },
      ],
    };
  });

  return (
    <Box transform={[{ scaleX: invert ? -1 : 1 }]} exiting={FadeOut.duration(500)} opacity={opacity}>
      <Box
        w="100%"
        h="100%"
        position="absolute"
        pointerEvents="none"
        style={cloudStyles}
        forceAnimated={true}
        justifyContent="center"
        alignItems="center"
      >
        <WrappedCloudSvg size={size} color={color} />
      </Box>
    </Box>
  );
};

interface IWrappedCloudSvgProps {
  size: number;
  color?: string;
}

const CLOUD_SVG_RATIO = 30 / 105;
const WrappedCloudSvg = ({ size, color = "#FFF19C" }: IWrappedCloudSvgProps) => {
  return (
    <Svg width={Style.adjust(size)} height={Style.adjust(size * CLOUD_SVG_RATIO)} viewBox="0 0 105 30" fill="none">
      <G clipPath="url(#clip0_835_42124)">
        <Path
          d="M102.532 29.163H2.012c-1.526 0-2.314-1.845-1.253-2.943 3.2-3.3 9.126-8.292 16.218-9.104 10.738-1.226 19.28-1.478 23.182-4.175C44.06 10.242 54.875.162 69.69.162c5.77 0 10.495 4.917 12.693 9.828 2.197 4.918 5.613 6.634 11.225 8.357 3.532 1.08 7.643 5.087 10.206 7.907 1.014 1.115.226 2.908-1.282 2.908z"
          fill={color}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_835_42124">
          <Path fill="#fff" transform="translate(.271 .163)" d="M0 0H104V29H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
