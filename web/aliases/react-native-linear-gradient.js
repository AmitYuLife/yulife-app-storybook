import React from "react";
import { View } from "react-native";

const LinearGradient = ({ children, style, colors, ...props }) => {
  const gradientColors = (colors || []).join(", ");
  return (
    <View
      {...props}
      style={[
        style,
        gradientColors ? { backgroundImage: `linear-gradient(180deg, ${gradientColors})` } : undefined,
      ]}
    >
      {children}
    </View>
  );
};

export { LinearGradient };
export default LinearGradient;
