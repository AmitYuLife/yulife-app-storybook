import { Style } from "@styles";
import { memo, ReactNode, useMemo } from "react";
import { View, StyleSheet } from "react-native";

const BUBBLE_SIZE = Style.adjust(50) + (Style.PIXEL_RATIO >= 3 ? Style.adjust(20) : 0);

interface ILevelBubbleContainerProps {
  x: number;
  y: number;
  width: number;
  offsetY?: number;
  children: ReactNode;
  episodeWidth: number;
}

const LevelBubbleContainer = ({ x, y, children, offsetY, width, episodeWidth }: ILevelBubbleContainerProps) => {
  const position = useMemo(() => {
    return { x: x * (width / episodeWidth), y: (y + offsetY) * (width / episodeWidth) };
  }, [episodeWidth, offsetY, width, x, y]);

  const style = useMemo(() => {
    return {
      ...styles.bubbleTest,
      top: position.y,
      left: position.x,
      aspectRatio: 1,
      marginLeft: -BUBBLE_SIZE / 2,
      marginTop: -BUBBLE_SIZE / 2,
    };
  }, [position]);

  return (
    <View style={style} pointerEvents="box-none">
      {children}
    </View>
  );
};

export default memo(LevelBubbleContainer);

const styles = StyleSheet.create({
  bubbleTest: {
    width: BUBBLE_SIZE,
    height: BUBBLE_SIZE,
    aspectRatio: 1,
    borderRadius: 100,
    alignItems: "center",
    position: "absolute",
    justifyContent: "center",
  },
});
