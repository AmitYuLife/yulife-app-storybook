import React, { memo, useCallback, useState } from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import { ContentItemRadio as GqlRadio } from "@graphql/_core/schema";
import { Image, TextTemplate } from "@atoms";
import { Style } from "@styles";
import { mapServerStyles } from "../_utils/mapServerStyles";
import { BoxOption, CheckBox } from "@molecules";

interface Props extends GqlRadio {
  value: string;
  onChange: (value: string) => void;
}

export const ContentItemRadio = memo(({ onChange, choices, value: initialValue, iconOptions }: Props) => {
  const [selectedValue, setSelectedValue] = useState(initialValue);

  const onValueChange = useCallback(
    (val: string) => () => {
      setSelectedValue(val);
      onChange(val);
    },
    [onChange]
  );

  if (iconOptions) {
    return (
      <View style={styles.radioIconWrapper}>
        {choices.map(({ label, value, renderAsIcon }) => {
          return (
            <View key={value} style={styles.boxWrapper}>
              <BoxOption
                onPress={onValueChange(value)}
                isSelected={value === selectedValue}
                selectedStyle={mapServerStyles(renderAsIcon.selectedStyles)}
              >
                <View style={styles.innerWrapper}>
                  <View style={styles.boxIconWrapper}>
                    <Image height={Style.adjust(32)} width={Style.adjust(32)} source={renderAsIcon.icon} />
                  </View>
                  <View style={styles.boxTextWrapper}>
                    <TextTemplate type="b2b" color={renderAsIcon.textColor}>
                      {label}
                    </TextTemplate>
                  </View>
                </View>
              </BoxOption>
            </View>
          );
        })}
      </View>
    );
  }

  return (
    <View style={styles.radioWrapper}>
      {choices.map(({ label, value }) => {
        return (
          <View key={value}>
            <CheckBox checked={value === selectedValue} value={value} label={label} onChange={onValueChange(value)} />
          </View>
        );
      })}
    </View>
  );
});

const styles = StyleSheet.create({
  radioWrapper: {
    paddingTop: Style.adjust(24),
    marginLeft: Style.adjust(24),
    marginRight: Style.adjust(64),
  } as ViewStyle,
  radioIconWrapper: {
    flexDirection: "row",
    marginTop: Style.adjust(112, { shrinkMultiplier: 0.5, shrinkThreshold: Style.DEVICE_HEIGHT < 700 }),
    marginHorizontal: Style.adjust(24),
    justifyContent: "center",
    alignItems: "center",
  } as ViewStyle,
  boxWrapper: {
    marginHorizontal: Style.adjust(12),
    flex: 1,
  } as ViewStyle,
  innerWrapper: {
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginTop: "auto",
    height: "100%",
  } as ViewStyle,
  boxIconWrapper: {
    marginBottom: Style.adjust(8),
  } as ViewStyle,
  boxTextWrapper: {
    height: Style.adjust(32),
    justifyContent: "flex-end",
    paddingBottom: Style.adjust(8),
  } as ViewStyle,
});
