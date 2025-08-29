import React, { memo } from "react";
import { View, ViewStyle } from "react-native";
import Svg, { Path } from "react-native-svg";
import { Style, Colours, StyleSheet } from "@styles";

const DISTANCE = 6;

interface Props {
  color: string;
  accent: string;
}

export const CornerFlowerSet = memo(({ color = Colours.neutral.n800, accent = Colours.neutral.white }: Props) => (
  <View style={styles.wrapper}>
    <View style={styles.bottomLeft}>
      <CornerFlower accent={accent} color={color} />
    </View>

    <View style={styles.topLeft}>
      <CornerFlower accent={accent} color={color} />
    </View>

    <View style={styles.topRight}>
      <CornerFlower accent={accent} color={color} />
    </View>

    <View style={styles.bottomRight}>
      <CornerFlower accent={accent} color={color} />
    </View>
  </View>
));

const styles = StyleSheet.create({
  wrapper: {
    ...StyleSheet.absoluteFillObject,
    overflow: "hidden",
  } as ViewStyle,
  bottomLeft: {
    position: "absolute",
    bottom: DISTANCE,
    left: DISTANCE,
  } as ViewStyle,
  topLeft: {
    position: "absolute",
    top: DISTANCE,
    left: DISTANCE,
    transform: [{ rotate: "90deg" }],
  } as ViewStyle,
  topRight: {
    position: "absolute",
    top: DISTANCE,
    right: DISTANCE,
    transform: [{ rotate: "180deg" }],
  } as ViewStyle,
  bottomRight: {
    position: "absolute",
    bottom: DISTANCE,
    right: DISTANCE,
    transform: [{ rotate: "270deg" }],
  } as ViewStyle,
});

export const CornerFlower = ({ color = Colours.neutral.n800, accent = Colours.neutral.white }: Props) => (
  <Svg width={Style.adjust(90)} height={Style.adjust(93)} viewBox="0 0 90 93">
    <Path d="M14.341 79.053c4.917 11.277 12.56 2.68 15.725 3.879-3.145-11.112-11.962-5.93-15.725-3.879z" fill={color} />
    <Path d="M27.628 81.422c-3.523-2.481-5-.45-11.009-1.896 5.027 2.968 6.5.559 11.009 1.896z" fill={accent} />
    <Path
      d="M17.186 74.335c-1.251-12.255 9.605-8.593 11.77-11.213 2.71 11.227-7.494 11.119-11.77 11.213z"
      fill={color}
    />
    <Path d="M17.854 73.479c1.969-3.851 4.214-2.749 8.862-6.855-3.075 4.99-5.491 3.552-8.863 6.855z" fill={accent} />
    <Path
      d="M12.84 77.733c-11.18-4.961-2.656-12.67-3.844-15.864 11.014 3.175 5.877 12.069 3.843 15.864z"
      fill={color}
    />
    <Path d="M12.559 76.503c-2.14-3.758-.004-5.064-.904-11.229 2.49 5.312-.02 6.58.904 11.229z" fill={accent} />
    <Path
      d="M89.9 90.589l-15.982.604-15.982.504c-5.294.101-10.688.504-15.983.303-5.294-.202-10.688-.504-15.982-1.31-.1 0-.1-.101-.1-.202s.1-.101.1-.101c5.294-.806 10.688-1.108 15.982-1.41 5.295-.202 10.689.201 15.983.302l15.982.403c5.294.201 10.588.403 15.982.605 0 0 .1.1.1.2 0 .102-.1.102-.1.102zM1.698.101c.2 5.34.4 10.782.6 16.122l.5 16.123c.099 5.341.498 10.782.299 16.123-.2 5.341-.5 10.782-1.299 16.123 0 .1-.1.1-.2.1s-.1-.1-.1-.1C.7 59.251.4 53.81.1 48.469c-.2-5.341.2-10.782.3-16.123l.4-16.123c.2-5.34.399-10.681.599-16.122 0 0 .1-.101.2-.101s.1.101.1.101z"
      fill={color}
    />
  </Svg>
);
