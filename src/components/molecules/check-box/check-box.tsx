import React, { memo } from "react";
import { ViewStyle, View, StyleSheet } from "react-native";
import Svg, { Circle, Path } from "react-native-svg";
import { Colours, Style } from "@styles";
import { CHECK_BOX_STATE } from "@ids";
import { TouchableOpacityWithDelay } from "@molecules";
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
                d="M24 10.6665L12.8834 21.3332L8 16.5332"
                stroke="white"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </>
          ) : (
            <Circle cx="16" cy="16" r="15.25" fill="none" stroke="#a0a09b" strokeWidth="1.5" />
          )}
        </Svg>
      </View>
      {children || (
        <View style={styles.textWrapper}>
          <TextTemplate type="b2" color={colour}>
            {label}
          </TextTemplate>
        </View>
      )}
    </TouchableOpacityWithDelay>
  );
}

export default memo(CheckBox);

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
