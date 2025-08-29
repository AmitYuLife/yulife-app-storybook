import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { View } from "react-native";
import { TextTemplate } from "@atoms";
import { Style, StyleSheet } from "@styles";

interface IProps {
  text: string;
}

const RibbonGold = ({ text }: IProps) => (
  <View style={styles.wrapper}>
    <Svg width={Style.adjust(313)} height={Style.adjust(81)} viewBox="0 0 313 81" fill="none">
      <Path
        d="M302.287 81l-6.839-34.23 13.08-31.265c-18.944-2.594-38.749-4.774-59.276-6.505l-.827.23c.466-.247-.81 42.674-2.497 66.145 19.46 1.597 38.284 3.266 56.359 5.625z"
        fill="#FFBE0D"
      />
      <Path d="M264.932 72l-19.004 3.375.387-6.75L264.932 72z" fill="#EA9E2F" />
      <Path
        d="M8.478 81l6.838-34.23-13.08-31.265C21.18 12.911 40.985 10.731 61.512 9l.827.23c-.465-.247.81 42.674 2.497 66.145C45.376 76.972 26.552 78.641 8.478 81z"
        fill="#FFBE0D"
      />
      <Path d="M45.832 71.785l19.004 3.59-.387-6.75-18.617 3.16z" fill="#EA9E2F" />
      <Path
        d="M155.379 0C114.952 0 75.921 1.664 39.125 4.755L45.489 72c34.924-2.757 71.787-4.23 109.896-4.23 38.109 0 74.972 1.473 109.896 4.23l6.358-67.245C234.843 1.664 195.812 0 155.379 0z"
        fill="#FFD225"
      />
    </Svg>
    <View style={styles.textWrapper}>
      <TextTemplate type="h3" color="#BA7424">
        {text}
      </TextTemplate>
    </View>
  </View>
);

const styles = StyleSheet.create({
  wrapper: {
    alignItems: "center",
  },
  textWrapper: {
    position: "absolute",
    top: Style.adjust(20),
  },
});

export default RibbonGold;
