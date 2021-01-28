import React, { useState } from "react";
import { View, StyleSheet, Platform, ViewStyle } from "react-native";
import { TextField } from "@components/molecules";
import { CheckBox, Text, Pad } from "@atoms";
import { Style, Colours } from "@styles";
import { addCommasToNumber } from "@services/utils";

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
    id: "coverName",
    label: "Cover name",
  },
  {
    id: "companyName",
    label: "Company held / proposed with",
  },
  {
    id: "coverAmount",
    label: "Amount of cover",
    validate: { validator: canStringBeValidNumber, errorMessage: "Amount of cover should be a number" },
  },
  {
    id: "coverReason",
    label: "Reason for cover",
  },
  {
    id: "coverRemainInForce",
    label: "Will the policy remain in force?",
  },
];

type Errors = Record<string, string>;
export type FormValue = Record<string, string>;

interface Props {
  setFormValidState: (isValid: boolean) => void;
  formValue: FormValue;
  setFormValue: (formValue: FormValue) => void;
  handleFocus: (index: number) => () => void;
}

export const defaultFormValue = fields.reduce((prev, curr) => {
  return {
    ...prev,
    [curr.id]: "",
  };
}, {});

export function FinancialQuestionsForm(props: Props) {
  const [errors, setErrors] = useState<Errors>(defaultFormValue);
  const { setFormValidState, formValue, setFormValue, handleFocus } = props;

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
      <TextField
        onFocus={handleFocus(0)}
        onChange={(val) => updateFormValue(fields[0].id, val)}
        placeholder={fields[0].label}
        value={formValue?.coverName}
      />
      <View style={styles.padBig} />
      <TextField
        onFocus={handleFocus(1)}
        onChange={(val) => updateFormValue(fields[1].id, val)}
        placeholder={fields[1].label}
        value={formValue?.companyName}
      />
      <View style={styles.pad} />
      <View style={styles.marginTop}>
        <Text bold={true} style={styles.poundSign}>
          £
        </Text>
        <View style={styles.textFieldWrapper}>
          <TextField
            onFocus={handleFocus(2)}
            onChange={(val) => updateFormValue(fields[2].id, val)}
            placeholder={fields[2].label}
            type="Number"
            placeholderIndentSize={16}
            value={addCommasToNumber(parseInt(formValue?.coverAmount, 10) || 0)}
          />
        </View>
      </View>
      <View style={styles.errorWrapper}>
        {errors[fields[2].id] ? <Text style={{ color: Colours.darkGray }}>{errors[fields[2].id]}</Text> : null}
      </View>
      <View style={styles.pad} />
      <TextField
        onFocus={handleFocus(3)}
        onChange={(val) => updateFormValue(fields[3].id, val)}
        placeholder={fields[3].label}
        value={formValue?.coverReason}
      />
      <View style={styles.padBig} />
      <RadioInput
        onChange={(val) => updateFormValue(fields[4].id, val)}
        selectedValue={formValue?.coverRemainsInForce || formValue[fields[4].id]}
      />
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
  wrapper: {
    width: Style.DEVICE_WIDTH - 48,
    alignSelf: "center",
    marginTop: Style.adjust(40),
  },
  pad: {
    height: Style.adjust(16),
  } as ViewStyle,
  padBig: {
    height: Style.adjust(32),
  } as ViewStyle,
  radioWrapper: {
    flexDirection: "row",
  },
  textFieldWrapper: {
    flex: 1,
  },
  marginTop: {
    marginTop: Style.adjust(16),
  } as ViewStyle,
  errorWrapper: {
    height: Style.adjust(20),
  },
  radioInputLabel: {
    marginBottom: Style.adjust(16),
    fontSize: Style.adjust(20),
    color: Colours.neutral.n700,
  },
  poundSign: {
    position: "absolute",
    bottom: Platform.OS === "ios" ? 5 : 4,
    fontSize: Style.adjust(22),
    marginRight: 4,
  },
});
