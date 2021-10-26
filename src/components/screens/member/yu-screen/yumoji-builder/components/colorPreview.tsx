import React, { memo, useMemo } from "react";
import { View, ViewStyle } from "react-native";
import { Style } from "@styles";

interface Props {
  color: string;
  size: number;
  testID?: string;
}

const ColorPreview = memo(({ color, size, testID }: Props) => {
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

  return <View style={style} testID={testID} />;
});

export default ColorPreview;
