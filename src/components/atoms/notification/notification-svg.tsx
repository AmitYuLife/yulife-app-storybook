import React, { memo, useEffect } from "react";
import Svg, { Path } from "react-native-svg";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withRepeat,
  withSequence,
  withTiming,
} from "react-native-reanimated";
import { Style, Colours } from "@styles";
import { DETOX_ENABLED } from "@services/socket";

// TODO: Move to the icons folder
interface Props {
  color?: string;
  size?: number;
  accessible?: boolean;
  hasBadge?: boolean;
}

const AnimatedPath = Animated.createAnimatedComponent(Path);
const AnimatedSvg = Animated.createAnimatedComponent(Svg);
const DELAY = 2500;
const DURATION = 100;

function NotificationSvg({
  color = Colours.neutral.n800,
  accessible,
  size = Style.adjust(20),
  hasBadge = false,
}: Props) {
  const rotation = useSharedValue(0);

  useEffect(() => {
    if (!hasBadge || DETOX_ENABLED) {
      return;
    }

    rotation.value = withRepeat(
      withDelay(
        DELAY,
        withSequence(
          withTiming(-10, { duration: DURATION }),
          withTiming(10, { duration: DURATION }),
          withTiming(0, { duration: DURATION })
        )
      ),
      -1
    );
  }, [hasBadge]);

  const animatedStyle = useAnimatedStyle(() => ({ transform: [{ rotate: `${rotation.value}deg` }] }));

  return (
    <AnimatedSvg
      style={animatedStyle}
      width={size}
      height={size}
      viewBox="0 0 18 20"
      fill="none"
      accessible={accessible}
    >
      <AnimatedPath
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.028 1.638l-.13.353a6.356 6.356 0 00-2.177.295c-1.463.473-2.725 1.506-3.62 3.116-.98 1.762-1.493 2.63-1.841 3.083-.169.22-.274.308-.348.353-.07.043-.144.067-.312.106-.338.08-.63.157-.859.294-.267.16-.411.372-.528.61-.207.423-.474 1.125-.788 1.955l-.282.741c-.295.769-.087 1.386.203 1.793a2.208 2.208 0 00.616.579l.016.01.006.003.003.002.037.021 3.74 1.357a3.484 3.484 0 002.293 3.48 3.5 3.5 0 004-1.196l3.74 1.357.041.008.09-.49-.089.49h.004l.007.002.018.003.058.007a2.216 2.216 0 00.787-.056c.485-.126 1.042-.466 1.311-1.243l.262-.747c.294-.838.543-1.548.657-2.005.063-.254.092-.509-.01-.803-.086-.253-.26-.5-.47-.78-.106-.138-.146-.203-.173-.282-.027-.08-.05-.215-.038-.491.026-.57.194-1.563.58-3.542.351-1.806.05-3.407-.767-4.707a6.332 6.332 0 00-1.477-1.62l.13-.354A2.486 2.486 0 0014.225.15a2.497 2.497 0 00-3.198 1.488zm2.857-.552a1.498 1.498 0 00-1.92.892l-.043.12a8.56 8.56 0 011.45.39c.482.175.939.386 1.364.632l.043-.12a1.492 1.492 0 00-.894-1.914zm1.164 17.896a1.217 1.217 0 00.412-.032c.225-.058.48-.198.62-.604l.277-.792c.29-.824.515-1.467.616-1.874.04-.16.03-.201.015-.242-.027-.082-.102-.21-.324-.502a1.924 1.924 0 01-.321-.566c-.081-.242-.105-.513-.09-.852.03-.66.217-1.736.598-3.686.308-1.583.038-2.924-.632-3.99-.674-1.072-1.775-1.905-3.19-2.419-1.415-.513-2.795-.58-4.002-.19-1.2.387-2.27 1.24-3.054 2.651-.967 1.739-1.519 2.682-1.922 3.207-.207.27-.4.461-.617.594-.219.135-.43.187-.608.228-.355.083-.496.133-.572.178-.039.024-.074.049-.145.195-.185.376-.427 1.012-.736 1.828l-.299.786c-.154.401-.05.672.085.86a1.216 1.216 0 00.295.29l13.594 4.932zM5.76 16.671l4.3 1.56a2.5 2.5 0 01-2.662.623A2.49 2.49 0 015.76 16.67zm-4.527-2.172l-.246.432.246-.432z"
        fill={color}
      />
    </AnimatedSvg>
  );
}

export default memo(NotificationSvg);
