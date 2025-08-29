import * as React from "react";
import { View } from "react-native";
import { getHeight, getWidth } from "./pad.styles";

import { StyleSheet } from "@styles";
interface IProps {
  height?: number;
  width?: number;
}

export const Pad = ({ height, width }: IProps) => {
  const style = React.useMemo(() => StyleSheet.flatten([getHeight(height), getWidth(width)]), [height, width]);
  return <View style={style} />;
};

export default Pad;
