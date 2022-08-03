import * as React from "react";
import { StyleSheet, View } from "react-native";
import { getHeight, getWidth } from "./pad.styles";

interface IProps {
  height?: number;
  width?: number;
}

const Pad: React.FC<IProps> = ({ height, width }) => {
  const style = React.useMemo(() => StyleSheet.flatten([getHeight(height), getWidth(width)]), [height, width]);
  return <View style={style} />;
};

export default Pad;
