import React, { useState } from "react";
import { View, StyleSheet, Platform } from "react-native";
import { TextField } from "@components/molecules";
import { CheckBox, Text, Pad } from "@atoms";
import { Style, Colours } from "@styles";

const canStringBeValidNumber = (val: string) => Boolean(Number(val));

interface Field {
  id: string;
  label: string;
  validate?: {
    validator: (val: string) => boolean;
    errorMessage: string;
  };
}

const fields: Field[] = [
  {
    id: "cover-name",
    label: "Cover name",
  },
  {
    id: "company-held",
    label: "Company held / proposed with",
  },
  {
    id: "amount-of-cover",
    label: "Amount of cover",
    validate: { validator: canStringBeValidNumber, errorMessage: "Amount of cover should be a number" },
  },
  {
    id: "reason-for-cover",
    label: "Reason for cover",
  },
  {
    id: "will-the-policy-remain",
    label: "Will the policy remain in force?",
  },
];

type Errors = Record<string, string>;
export type FormValue = Record<string, string>;

interface Props {
  setFormValidState: (isValid: boolean) => void;
  formValue: FormValue;
  setFormValue: (formValue: FormValue) => void;
}

export const defaultFormValue = fields.reduce((prev, curr) => {
  return {
    ...prev,
    [curr.id]: "",
  };
}, {});

export function FinancialQuestionsForm(props: Props) {
  const [errors, setErrors] = useState<Errors>(defaultFormValue);
  const { setFormValidState, formValue, setFormValue } = props;

  function checkIfFormIsValid(newErrors: Errors, newFormValue: FormValue) {
    const hasErrors = Object.values(newErrors).some((error) => error);
    const inputsContentsAreTruthy = Object.values(newFormValue).every((val) => val);

    if (!hasErrors && inputsContentsAreTruthy) {
      return setFormValidState(true);
    }

    return setFormValidState(false);
  }

  function updateFormValue(key: string, value: string) {
    const field = fields.find(({ id }) => id === key);
    let newErrors = { ...errors };
    const newFormValue = {
      ...formValue,
      [key]: value,
    };

    if (!field) {
      return null;
    }

    if (field.validate) {
      const { validator, errorMessage } = field.validate;
      const isValidInput = validator(value);
      newErrors = { ...errors, [key]: isValidInput ? null : errorMessage };
      setErrors(newErrors);
    }

    checkIfFormIsValid(newErrors, newFormValue);

    return setFormValue(newFormValue);
  }

  return (
    <View style={styles.wrapper}>
      <TextField onChange={(val) => updateFormValue(fields[0].id, val)} placeholder={fields[0].label} />
      <Pad height={10} />
      <TextField onChange={(val) => updateFormValue(fields[1].id, val)} placeholder={fields[1].label} />
      <Pad height={10} />
      <View>
        <Text style={styles.poundSign}>£</Text>
        <View style={styles.textFieldWrapper}>
          <TextField
            onChange={(val) => updateFormValue(fields[2].id, val)}
            placeholder={fields[2].label}
            type="Number"
            placeholderIndentSize={16}
          />
        </View>
      </View>
      <View style={styles.errorWrapper}>
        {errors[fields[2].id] ? <Text style={{ color: Colours.darkGray }}>{errors[fields[2].id]}</Text> : null}
      </View>
      <TextField onChange={(val) => updateFormValue(fields[3].id, val)} placeholder={fields[3].label} />
      <Pad height={34} />
      <RadioInput onChange={(val) => updateFormValue(fields[4].id, val)} selectedValue={formValue[fields[4].id]} />
    </View>
  );
}

interface RadioProps {
  onChange: (val: string) => void;
  selectedValue: string;
}

function RadioInput(props: RadioProps) {
  return (
    <>
      <Text style={styles.radioInputLabel}>{fields[4].label}</Text>
      <View style={styles.radioWrapper}>
        <CheckBox checked={props.selectedValue === "yes"} value="yes" label="Yes" onChange={props.onChange} />
        <Pad width={30} />
        <CheckBox checked={props.selectedValue === "no"} value="no" label="No" onChange={props.onChange} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  wrapper: { width: Style.DEVICE_WIDTH - 63, alignSelf: "center", marginTop: 30, marginBottom: 60 },
  radioWrapper: {
    flexDirection: "row",
  },
  textFieldWrapper: { flex: 1 },
  errorWrapper: { height: 20 },
  radioInputLabel: { marginBottom: 16, fontFamily: Style.FONT_FAMILY_PRIMARY, fontSize: 20, color: "#979799" },
  poundSign: {
    position: "absolute",
    bottom: Platform.OS === "ios" ? 5 : 4,
    fontSize: 22,
    fontFamily: Style.FONT_FAMILY_PRIMARY_BOLD,
    marginRight: 4,
  },
});
