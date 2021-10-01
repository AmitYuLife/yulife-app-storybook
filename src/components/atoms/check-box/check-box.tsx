import React from "react";
import { ViewStyle, View, StyleSheet } from "react-native";
import Svg, { Circle, Path } from "react-native-svg";
import { Colours, Style } from "@styles";
import { CHECK_BOX_STATE } from "@ids";
import { TouchableOpacityWithDelay } from "@components/molecules";
// TODO TECH DEBT: this checkbox shouldn't be an atom
import { TextTemplate } from "@atoms";

interface ICheckBox {
  checked: boolean;
  value: string;
  label: string;
  onChange: (value: string) => void;
  children?: React.ReactChild;
  testID?: string;
  colour?: string;
}

function CheckBox(props: ICheckBox) {
  const { checked, value, onChange, label, children, testID, colour = Colours.neutral.n800 } = props;

  return (
    <TouchableOpacityWithDelay activeOpacity={1} style={styles.wrapper} onPress={() => onChange(value)}>
      <View testID={CHECK_BOX_STATE(label, checked)}>
        <Svg height={Style.adjust(32)} width={Style.adjust(32)} viewBox="0 0 32 32" testID={testID}>
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
      {children || (
        <View style={styles.textWrapper}>
          <TextTemplate type="b2" textAlign="center" color={colour}>
            {label}
          </TextTemplate>
        </View>
      )}
    </TouchableOpacityWithDelay>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: Style.adjust(6),
  } as ViewStyle,
  textWrapper: {
    paddingLeft: Style.adjust(12),
  } as ViewStyle,
});

export default CheckBox;
