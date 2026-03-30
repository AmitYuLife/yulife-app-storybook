import * as React from "react";
// eslint-disable-next-line no-restricted-imports
import { Text, TextStyle } from "react-native";
import { Style, Colours, StyleSheet } from "@styles";
import { DeferredRender } from "@atoms";

interface IProps {
  bold?: boolean;
  label: string;
  size?: Sizes;
  style?: TextStyle;
  color?: string;
  testID?: string;
}

type Sizes = "medium" | "large" | "small";

/**
 * @deprectaed Use TextTemplate instead
 */
const Heading = (props: IProps) => {
  const { label, size = "medium", style, bold, color = Colours.darkGray, testID } = props;
  const boldStyles = bold ? styles.bold : null;

  return (
    <DeferredRender>
      <Text style={StyleSheet.flatten([styles.base, styles[size], boldStyles, { color }, style])} testID={testID}>
        {label}
      </Text>
    </DeferredRender>
  );
};

export default React.memo(Heading);

const styles = StyleSheet.create({
  base: {
    fontFamily: Style.FONT_FAMILY_PRIMARY,
    textAlign: "center",
    letterSpacing: 1,
  } as TextStyle,
  bold: {
    fontFamily: Style.FONT_FAMILY_PRIMARY_BOLD,
  } as TextStyle,
  medium: {
    fontSize: Style.adjust(28),
  } as TextStyle,
  large: {
    fontSize: Style.adjust(56),
  } as TextStyle,
  small: {
    fontSize: Style.adjust(25),
  } as TextStyle,
});
