import React, { memo, useCallback } from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import { ContentItemRadio as GqlRadio } from "@graphql/_core/schema";
import { Image, TextTemplate } from "@atoms";
import { Style } from "@styles";
import { mapServerStyles } from "../_utils/mapServerStyles";
import { BoxOption, CheckBox } from "@molecules";
import { useSduiOnChange } from "../_hooks/useSduiOnChange";
import { CPD_FEEDBACK_BUTTON } from "@ids";

interface Props extends GqlRadio {
  value: string;
  onChange: (value: string) => void;
}

const DEFAULT_ICON_IMAGE_SIZE = 32;

export const ContentItemRadioBase = ({ onChange, choices, value, iconOptions, styles: serverStyles }: Props) => {
  const onValueChange = useCallback(
    (val: string) => () => {
      onChange(val);
    },
    [onChange]
  );

  if (iconOptions) {
    return (
      <View style={[styles.radioIconWrapper, mapServerStyles(serverStyles)]}>
        {choices.map(
          ({
            label,
            value: currentValue,
            renderAsIcon: { icon, textColor, wrapperStyles, selectedStyles, boxOptionHeight, imageHeight, imageWidth },
          }) => (
            <View key={currentValue} style={[styles.boxWrapper, mapServerStyles(wrapperStyles)]}>
              <BoxOption
                onPress={onValueChange(currentValue)}
                isSelected={currentValue === value}
                selectedStyle={mapServerStyles(selectedStyles)}
                innerHeight={boxOptionHeight ?? Style.adjust(boxOptionHeight)}
              >
                <View testID={CPD_FEEDBACK_BUTTON(currentValue)} style={styles.innerWrapper}>
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
      {choices.map(({ label, value: currentValue }) => {
        return (
          <View key={currentValue}>
            <CheckBox
              checked={currentValue === value}
              value={value}
              label={label}
              onChange={onValueChange(currentValue)}
            />
          </View>
        );
      })}
    </View>
  );
};

export const ContentItemRadio = memo((props: Props) => {
  const { answerKey } = props;
  const { value, onChange } = useSduiOnChange<string>(answerKey);

  return <ContentItemRadioBase {...props} value={value} onChange={onChange} />;
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
  boxTextWrapper: {
    height: Style.adjust(32),
    justifyContent: "flex-end",
    paddingBottom: Style.adjust(8),
    marginTop: Style.adjust(8),
  } as ViewStyle,
});
