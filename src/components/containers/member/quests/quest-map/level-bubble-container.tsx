import { memo, ReactNode, useMemo } from "react";
import { View } from "react-native";
import { createBubbleStyle } from "./create-bubble-style";

interface ILevelBubbleContainerProps {
  x: number;
  y: number;
  offsetY?: number;
  children: ReactNode;
  episodeWidth: number;
}

const LevelBubbleContainer = ({ x, y, children, offsetY, episodeWidth }: ILevelBubbleContainerProps) => {
  const style = useMemo(() => createBubbleStyle({ x, y, offsetY, episodeWidth }), [x, y, offsetY, episodeWidth]);

  return (
    <View style={style} pointerEvents="box-none">
      {children}
    </View>
  );
};

export default memo(LevelBubbleContainer);
