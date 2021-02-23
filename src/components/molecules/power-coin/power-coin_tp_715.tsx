import React from "react";
import { StyleSheet, ViewStyle, ImageStyle, TextStyle, View } from "react-native";
import Svg, { Ellipse, Mask, G, Path, Text } from "react-native-svg";
import { Style, Colours } from "@styles";

interface Props {
  power: number;
}

export const PowerCoin = (props: Props) => {
  const { power } = props;

  if (!power) {
    return null;
  }

  return (
    <View style={styles.wrapper}>
      <Svg
        width={Style.adjust(24)}
        height={Style.adjust(25)}
        viewBox="0 0 24 25"
        fill="none"
        style={styles.imageWrapper}
      >
        <Ellipse cx={12.073} cy={12.41} rx={11.927} ry={11.997} fill="#EDB720" />
        <Mask id="prefix__a" x={0} y={0} width={24} height={24}>
          <Ellipse cx={11.7} cy={11.921} rx={11.7} ry={11.921} fill="#FFE428" />
        </Mask>
        <G mask="url(#prefix__a)">
          <Path
            d="M23.4 11.92c0 6.584-5.238 11.921-11.7 11.921-6.462 0-11.7-5.337-11.7-11.92C0 5.337 5.238 0 11.7 0c6.462 0 11.7 5.337 11.7 11.92z"
            fill="#FFEE4E"
          />
          <Path
            d="M4.987 16.66c-3.141-1.426-5.78.446-6.708 1.56 2.306 4.663 9.284 12.742 18.754 7.756 9.47-4.987 8.966-15.13 7.531-19.577-2.395-.087-4.199 2.373-4.801 3.615-6.569-1.266-12.588 3.902-14.776 6.645z"
            fill="#FBDE45"
          />
          <Path
            d="M13.95 1.182c0 4.483-3.926 8.117-8.768 8.117-4.842 0-8.768-3.634-8.768-8.117 0-4.483 3.926-8.117 8.768-8.117 4.842 0 8.768 3.634 8.768 8.117z"
            fill="#FFF48E"
          />
          <Path
            d="M7.032 3.76c-1.032.613-2.144.629-2.484.035-.34-.593.222-1.572 1.253-2.185C6.833.997 7.945.981 8.285 1.574c.34.594-.221 1.572-1.253 2.185z"
            fill="#fff"
          />
        </G>
        <Path
          d="M14.787 19.922c4.778-1.889 7.168-7.177 5.336-11.811a8.787 8.787 0 00-1.054-1.924 9.11 9.11 0 011.549 2.194c1.998 5.058-.405 10.748-5.37 12.71-4.963 1.962-10.608-.547-12.607-5.605-.46-1.166-.597-2.466-.44-3.774a8.76 8.76 0 00.616 3.239c1.832 4.634 7.19 6.86 11.97 4.97z"
          fill="#FFEF60"
        />
        <Path
          d="M20.78 8.817c-1.96-4.395-7.318-6.404-12.158-4.49-4.853 1.918-7.39 7.066-5.792 11.621a6.312 6.312 0 01-.046-.098C.785 10.793 3.189 5.102 8.153 3.14c4.964-1.962 10.608.548 12.607 5.605l.02.072z"
          fill="#F8CB31"
        />

        <Text
          x={"50%"}
          y={"63%"}
          fontSize={10}
          fontFamily={Style.FONT_FAMILY_PRIMARY_BOLD}
          fontWeight="700"
          textAnchor="middle"
          fill={Colours.orange}
        >
          {power}
        </Text>
      </Svg>
    </View>
  );
};

const SIZE = Style.adjust(24);
const styles = StyleSheet.create({
  wrapper: {
    width: SIZE,
    height: SIZE,
    justifyContent: "center",
    alignItems: "center",
  } as ViewStyle,
  imageWrapper: {
    position: "absolute",
    bottom: 0,
  } as ImageStyle,
  text: {
    color: Colours.orange,
    marginLeft: Style.adjust(1),
  } as TextStyle,
});
