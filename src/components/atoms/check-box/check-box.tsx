import React from "react";
import { ViewStyle, TextStyle, View, Text, StyleSheet } from "react-native";
import Svg, { Circle, Path } from "react-native-svg";
import { Style } from "@styles/index";
import { CHECK_BOX_STATE } from "@ids";
import { TouchableOpacityWithDelay } from "@components/molecules";

interface ICheckBox {
  checked: boolean;
  value: string;
  label: string;
  onChange: (value: string) => void;
  textStyle?: TextStyle;
  children?: React.ReactChild;
  testID?: string;
}

const styles = {
  wrapper: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 6,
  } as ViewStyle,
  text: {
    fontFamily: Style.FONT_FAMILY_PRIMARY,
    alignContent: "center",
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.8,
    paddingLeft: 12,
    color: "#5A5A5C",
  } as TextStyle,
};

function CheckBox(props: ICheckBox) {
  const { checked, value, onChange, label, textStyle, children, testID } = props;

  return (
    <View>
      <TouchableOpacityWithDelay activeOpacity={1} style={styles.wrapper} onPress={() => onChange(value)}>
        <View testID={CHECK_BOX_STATE(label, checked)}>
          <Svg height="32" width="32" viewBox="0 0 32 32" testID={testID}>
            {checked ? (
              <>
                <Circle cx="16" cy="16" r="16" fill="#F43E8E" />
                <Path
                  d="M13.31,22.8a1.3,1.3,0,0,0,1.06.62,1.36,1.36,0,0,0,1.06-.62l7.93-11.53a2.48,2.48,0,0,0-.08-2.75,1.2,1.2,0,0,0-2,.1l-6.87,10-3.13-4.54a1.2,1.2,0,0,0-2-.11,2.46,2.46,0,0,0-.08,2.75Z"
                  fill="#fff"
                />
              </>
            ) : (
              <Circle cx="16" cy="16" r="15.25" fill="none" stroke="#a0a09b" strokeWidth="1.5" />
            )}
          </Svg>
        </View>
        {children || <Text style={StyleSheet.flatten([styles.text, textStyle])}>{label}</Text>}
      </TouchableOpacityWithDelay>
    </View>
  );
}

export default CheckBox;
