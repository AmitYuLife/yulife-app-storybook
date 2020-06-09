import React from "react";
import { ViewStyle, TextStyle, View, TouchableOpacity, Text } from "react-native";
import Svg, { Circle, Path } from "react-native-svg";
import { Style } from "@styles/index";

interface ICheckBox {
  checked: boolean;
  value: string;
  label: string;
  onChange: (value: string) => void;
}

const styles = {
  wrapper: {
    display: "flex",
    flexDirection: "row",
    position: "relative",
    padding: 32,
    marginHorizontal: 24,
  } as ViewStyle,
  checkbox: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 25,
    width: 25,
  } as ViewStyle,
  text: {
    position: "absolute",
    left: 57,
    top: 3,
    width: "100%",
    fontFamily: Style.FONT_FAMILY_PRIMARY,
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.8,
    color: "#5A5A5C",
  } as TextStyle,
};

function CheckBox(props: ICheckBox) {
  const { checked, value, onChange, label } = props;

  return (
    <View>
      <TouchableOpacity style={styles.wrapper} onPress={() => onChange(value)}>
        <Text style={styles.text}>{label}</Text>
        <View style={styles.checkbox}>
          <Svg height="32" width="32" viewBox="0 0 32 32">
            {checked ? (
              <>
                <Circle cx="16" cy="16" r="16" fill="#f49dc8" />
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
      </TouchableOpacity>
    </View>
  );
}

export default CheckBox;
