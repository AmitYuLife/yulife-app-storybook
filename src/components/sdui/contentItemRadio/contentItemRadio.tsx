import React, { memo, useCallback, useState } from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import { ContentItemRadio as GqlRadio } from "@graphql/_core/schema";
import { Image, TextTemplate } from "@atoms";
import { Style } from "@styles";
import { mapServerStyles } from "../_utils/mapServerStyles";
import { BoxOption, CheckBox } from "@molecules";
import { useSduiActionUpdateBus } from "../_hooks";

interface Props extends GqlRadio {
  value: string;
  onChange: (value: string) => void;
}

const DEFAULT_ICON_IMAGE_SIZE = 32;

export const ContentItemRadio = memo(
  ({ onChange, choices, value: initialValue, iconOptions, answerKey, styles: serverStyles }: Props) => {
    const [selectedValue, setSelectedValue] = useState(initialValue);
    const { updateBus } = useSduiActionUpdateBus();

    const onValueChange = useCallback(
      (val: string) => () => {
        setSelectedValue(val);

        if (onChange) {
          onChange(val);
        }

        updateBus(answerKey, val);
      },
      [onChange, answerKey]
    );

    if (iconOptions) {
      return (
        <View style={[styles.radioIconWrapper, mapServerStyles(serverStyles)]}>
          {choices.map(
            ({
              label,
              value,
              renderAsIcon: {
                icon,
                textColor,
                wrapperStyles,
                selectedStyles,
                boxOptionHeight,
                imageHeight,
                imageWidth,
              },
            }) => (
              <View key={value} style={[styles.boxWrapper, mapServerStyles(wrapperStyles)]}>
                <BoxOption
                  onPress={onValueChange(value)}
                  isSelected={value === selectedValue}
                  selectedStyle={mapServerStyles(selectedStyles)}
                  innerHeight={boxOptionHeight ?? Style.adjust(boxOptionHeight)}
                >
                  <View style={styles.innerWrapper}>
                    <Image
                      height={Style.adjust(imageHeight || DEFAULT_ICON_IMAGE_SIZE)}
                      width={Style.adjust(imageWidth || DEFAULT_ICON_IMAGE_SIZE)}
                      source={icon}
                    />
                    {!label ? null : (
                      <View style={styles.boxTextWrapper}>
                        <TextTemplate type="b2b" color={textColor}>
                          {label}
                        </TextTemplate>
                      </View>
                    )}
                  </View>
                </BoxOption>
              </View>
            )
          )}
        </View>
      );
    }

    return (
      <View style={[styles.radioWrapper, mapServerStyles(serverStyles)]}>
        {choices.map(({ label, value }) => {
          return (
            <View key={value}>
              <CheckBox checked={value === selectedValue} value={value} label={label} onChange={onValueChange(value)} />
            </View>
          );
        })}
      </View>
    );
  }
);

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
  boxTextWrapper: {
    height: Style.adjust(32),
    justifyContent: "flex-end",
    paddingBottom: Style.adjust(8),
    marginTop: Style.adjust(8),
  } as ViewStyle,
});
