import React, { useCallback, memo, useState } from "react";
import { View, StyleSheet, ViewStyle, TextStyle, Platform } from "react-native";
import { Style, Colours } from "@styles";
import { useBackHandler } from "../../../../../../../services/hooks/useBackHandler";
import { ScrollableLayout, TextField } from "@molecules";
import FibTitle from "@atoms/fib/title/title";
import { MedicalPractices_getMedicalPractices } from "@graphql/_core/schema";

interface Props {
  onClose: () => void;
  onNavigateBack: () => void;
  onContinue: (form: GPInputForm) => void;
  selectedPractice?: MedicalPractices_getMedicalPractices;
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

function _FibGPManuallyInputScreen(props: Props) {
  const { onNavigateBack, onContinue, onClose, selectedPractice } = props;
  const initialState = selectedPractice
    ? {
        ...defaultFormValue,
        practiceName: selectedPractice.name,
        practiceAddress: `${selectedPractice.address1} ${selectedPractice.address2} ${
          selectedPractice.address4 ? selectedPractice.address3 : ""
        }`,
        practiceTown: selectedPractice.address4 || selectedPractice.address3,
        practicePostCode: selectedPractice.postCode,
      }
    : defaultFormValue;

  const [formValue, setFormValue] = useState<GPInputForm>(initialState);

  const backHandler = useCallback(() => {
    onNavigateBack();
    return true;
  }, [onNavigateBack]);

  useBackHandler(backHandler);

  const updateForm = (key: string, value: string) => {
    setFormValue({ ...formValue, [key]: value });
  };

  const handleContinue = () => {
    onContinue(formValue);
  };

  const isValidForm = validateGPForm(formValue);
  return (
    <ScrollableLayout
      buttonAction={handleContinue}
      onLeftIconPress={onNavigateBack}
      buttonTitle="Continue"
      heading={"GP Report"}
      onRightIconPress={onClose}
      isButtonDisabled={isValidForm}
    >
      <View style={styles.wrapper}>
        <FibTitle title="Please enter your medical practise and GP details below:" />
        <View>
          <View style={styles.formWrapper}>
            <TextField
              onChange={(val) => updateForm("practiceName", val)}
              placeholder="Medical Practise Name"
              inputTextStyle={styles.text}
              value={formValue.practiceName}
              autoFocus={!formValue.practiceName}
            />
          </View>
          <View style={styles.formWrapper}>
            <TextField
              onChange={(val) => updateForm("practiceAddress", val)}
              placeholder="Medical Practise Address"
              inputTextStyle={styles.text}
              value={formValue.practiceAddress}
            />
          </View>
          <View style={styles.formWrapper}>
            <TextField
              onChange={(val) => updateForm("practiceTown", val)}
              placeholder="Medical Practise Town or City"
              inputTextStyle={styles.text}
              value={formValue.practiceTown}
            />
          </View>
          <View style={styles.formWrapper}>
            <TextField
              onChange={(val) => updateForm("practicePostCode", val)}
              placeholder="Medical Practise Postcode"
              inputTextStyle={styles.text}
              value={formValue.practicePostCode}
            />
          </View>
          <View style={[styles.formWrapper, { paddingBottom: 32 }]}>
            <TextField
              onChange={(val) => updateForm("gpName", val)}
              placeholder="GP Name"
              inputTextStyle={styles.text}
              value={formValue.gpName}
              autoFocus={!!formValue.practiceName}
            />
          </View>
        </View>
      </View>
    </ScrollableLayout>
  );
}

export const FibGPManuallyInputScreen = memo(_FibGPManuallyInputScreen);

const styles = StyleSheet.create({
  wrapper: {
    marginHorizontal: 32,
  } as ViewStyle,
  text: {
    fontSize: 20,
    lineHeight: 24,
    fontFamily: Style.FONT_FAMILY_PRIMARY,
    letterSpacing: 1,
    color: Colours.neutral.n900,
    marginBottom: Platform.select({ ios: 6, android: 2 }),
  } as TextStyle,
  formWrapper: {
    paddingVertical: 6,
  } as ViewStyle,
});
