import React, { memo, useMemo } from "react";
import { View, StyleSheet, ViewStyle, TextStyle, Platform } from "react-native";
import { Style, Colours } from "@styles";
import { TextField } from "@molecules";
import { TextTemplate } from "@atoms";

interface Props {
  fields: Record<string, string>;
  onUpdateFormField(key: string, value: string): void;
}

const FORM_HEIGHT = Platform.select({
  ios: Style.adjust(74.5),
  android: Style.adjust(78.5),
});

export const GpManualEntry = memo(({ fields, onUpdateFormField }: Props) => {
  const medicalPracticeForm = useMemo(
    () => [
      {
        updateFormKey: "gpPractice",
        placeholder: "Name",
        value: fields?.gpPractice,
      },
      {
        updateFormKey: "gpAddress",
        placeholder: "Address",
        value: fields?.gpAddress,
      },
      {
        updateFormKey: "gpTown",
        placeholder: "Town or City",
        value: fields?.gpTown,
      },
      {
        updateFormKey: "gpPostcode",
        placeholder: "Postcode",
        value: fields?.gpPostcode,
      },
    ],
    [fields]
  );

  return (
    <View>
      <View style={styles.header}>
        <TextTemplate type="h3" color={Colours.neutral.n800}>
          Please enter your medical practice and GP details below:
        </TextTemplate>
      </View>
      <View style={styles.contentWrapper}>
        <View style={styles.headerWrapper}>
          <TextTemplate type="b2b" color={Colours.neutral.n800}>
            Medical Practice
          </TextTemplate>
        </View>
        {medicalPracticeForm.map(({ updateFormKey, placeholder, value }) => (
          <View key={updateFormKey} style={styles.formWrapper}>
            <TextField
              onChange={(val: string) => onUpdateFormField(updateFormKey, val)}
              placeholder={placeholder}
              inputTextStyle={styles.text}
              value={value}
              baseUnderlineColor={Colours.neutral.n200}
            />
          </View>
        ))}
        <View style={styles.headerWrapper}>
          <TextTemplate type="b2b" color={Colours.neutral.n800}>
            General practitioner
          </TextTemplate>
        </View>
        <View style={styles.formWrapper}>
          <TextField
            onChange={(val: string) => onUpdateFormField("gpName", val)}
            placeholder="Name"
            inputTextStyle={styles.text}
            value={fields?.gpName}
            baseUnderlineColor={Colours.neutral.n200}
          />
        </View>
      </View>
    </View>
  );
});

const FONT_SIZE = Style.adjust(20);

const styles = StyleSheet.create({
  contentWrapper: {
    paddingHorizontal: Style.adjust(24),
  } as ViewStyle,
  text: {
    fontSize: FONT_SIZE,
    lineHeight: FONT_SIZE * 1.2,
    fontFamily: Style.FONT_FAMILY_PRIMARY,
    letterSpacing: 1,
    color: Colours.neutral.n900,
    marginBottom: Platform.select({ ios: 6, android: 2 }),
  } as TextStyle,
  formWrapper: {
    paddingVertical: Style.adjust(6),
    height: FORM_HEIGHT,
  } as ViewStyle,
  bottomPad: {
    height: Style.adjust(32),
  } as ViewStyle,
  headerWrapper: {
    marginTop: 32,
    marginBottom: 8,
  } as ViewStyle,
  button: {
    marginTop: 32,
  } as ViewStyle,
  header: {
    paddingHorizontal: Style.adjust(24),
  },
});
