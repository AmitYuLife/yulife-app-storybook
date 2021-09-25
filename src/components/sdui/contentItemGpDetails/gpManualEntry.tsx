import React, { memo, useState, useMemo } from "react";
import { View, StyleSheet, ViewStyle, TextStyle, Platform } from "react-native";
import { Style, Colours } from "@styles";
import { TextField } from "@molecules";
import FibTitle from "@atoms/fib/title/title";
import { Button, TextTemplate } from "@atoms";

interface Props {
  onContinue: (form: GPInputForm) => void;
}

export interface GPInputForm {
  practiceName: string;
  practiceAddress: string;
  practiceTown: string;
  practicePostCode: string;
  gpName: string;
}

const defaultFormValue: GPInputForm = {
  practiceName: "",
  practiceAddress: "",
  practiceTown: "",
  practicePostCode: "",
  gpName: "",
};

function validateGPForm(form: GPInputForm) {
  return !form.practiceName || !form.practiceAddress || !form.practiceTown || !form.practicePostCode || !form.gpName;
}

const FORM_HEIGHT = Platform.select({
  ios: Style.adjust(74.5),
  android: Style.adjust(78.5),
});

export const GpManualEntry = memo((props: Props) => {
  const { onContinue } = props;

  const [formValue, setFormValue] = useState<GPInputForm>(defaultFormValue);

  const updateForm = (key: string, value: string) => {
    setFormValue({ ...formValue, [key]: value });
  };

  const handleContinue = () => {
    onContinue(formValue);
  };

  const isValidForm = validateGPForm(formValue);

  const medicalPracticeForm = useMemo(
    () => [
      {
        updateFormKey: "practiceName",
        placeholder: "Name",
        value: formValue.practiceName,
      },
      {
        updateFormKey: "practiceAddress",
        placeholder: "Address",
        value: formValue.practiceAddress,
      },
      {
        updateFormKey: "practiceTown",
        placeholder: "Town or City",
        value: formValue.practiceTown,
      },
      {
        updateFormKey: "practicePostCode",
        placeholder: "Postcode",
        value: formValue.practicePostCode,
      },
    ],
    [formValue]
  );

  return (
    <View>
      <View>
        <FibTitle title="Please enter your medical practice and GP details below:" />
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
              onChange={(val) => updateForm(updateFormKey, val as string)}
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
            onChange={(val) => updateForm("gpName", val as string)}
            placeholder="Name"
            inputTextStyle={styles.text}
            value={formValue.gpName}
            baseUnderlineColor={Colours.neutral.n200}
          />
        </View>
        <Button wrapperStyle={styles.button} disabled={isValidForm} label={"Continue"} onPress={handleContinue} />
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
});
