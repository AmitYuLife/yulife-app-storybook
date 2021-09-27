import React, { memo, useMemo } from "react";
import { View, ViewStyle } from "react-native";
import { Style } from "@styles";

interface Props {
  color: string;
  size: number;
}

const ColorPreview = memo(({ color, size }: Props) => {
  const style = useMemo(
    () =>
      ({
        backgroundColor: color,
        width: size,
        height: size,
        borderRadius: Style.adjust(12),
      } as ViewStyle),
    [color, size]
  );

  return <View style={style} />;
});

export default ColorPreview;
