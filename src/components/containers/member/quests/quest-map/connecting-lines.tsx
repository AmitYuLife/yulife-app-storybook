import { Colours, Style, StyleSheet } from "@styles";
import { memo } from "react";
import { Animated } from "react-native";
import Svg, { Defs, G, Line, LinearGradient, Rect, Stop } from "react-native-svg";
import { QUEST_MAP_ROW_SPACE_BASIS } from "./config/constants";
import { getShouldQuestMapAnimateOnboarding } from "@redux/quest-map/quest-map.selectors";
import { useSelector } from "react-redux";

interface Props {
  lines: Array<{ x1: number; y1: number; x2: number; y2: number; opacity: Animated.Value }>;
}

const AnimatedG = Animated.createAnimatedComponent(G);

export const ConnectingLines = memo(({ lines }: Props) => {
  const shouldQuestMapAnimateOnboarding = useSelector(getShouldQuestMapAnimateOnboarding);

  return !lines.length ? null : (
    <Svg
      height={Style.DEVICE_HEIGHT}
      width={Style.DEVICE_WIDTH}
      viewBox={`0 0 ${Style.DEVICE_WIDTH} ${Style.DEVICE_HEIGHT}`}
      style={StyleSheet.absoluteFill}
    >
      {lines.map((line, lineIndex) => (
        <AnimatedG
          opacity={shouldQuestMapAnimateOnboarding && line.opacity ? line.opacity : 1}
          key={`${line.x1}-${line.y1}-${line.x2}-${line.y2}`}
        >
          <Line x1={line.x1} y1={line.y1} x2={line.x2} y2={line.y2} stroke={Colours.neutral.white} strokeWidth={2} />
          {lineIndex !== lines.length - 1 ? null : (
            <>
              <Defs>
                <LinearGradient id="exitingLine" x1="0" y1="0" x2="0" y2="1">
                  <Stop offset="0" stopColor="white" stopOpacity="0.1" />
                  <Stop offset="1" stopColor="white" stopOpacity="1" />
                </LinearGradient>
              </Defs>
              <Rect
                x={lines[lines.length - 1].x2}
                y={lines[lines.length - 1].y2 - QUEST_MAP_ROW_SPACE_BASIS}
                width="2"
                height={QUEST_MAP_ROW_SPACE_BASIS}
                fill="url(#exitingLine)"
              />
            </>
          )}
        </AnimatedG>
      ))}
    </Svg>
  );
});
