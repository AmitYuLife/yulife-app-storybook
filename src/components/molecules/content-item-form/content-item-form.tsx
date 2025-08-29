import React, { useState, useEffect, memo } from "react";
import { Button, SelectInput, TextInput, TextInputTypes, ISelectInputOption } from "@molecules";
import { Style, StyleSheet } from "@styles";
import { CONTENT_FORM_SUBMIT, INPUT_AVIOS_FORM_FIELD } from "@ids";

interface IValidation {
  regex: string;
  message: string;
}
export interface IElement {
  __typename: string;
  id: string;
  name: string;
  label: string;
  defaultValue?: string;
  defaultOption?: ISelectInputOption;
  required: boolean;
  placeholder: string;
  type: TextInputTypes;
  modalPlaceholder: string;
  icon: {
    id: string;
    uri: string | null;
  };
  options?: ISelectInputOption[];
  validation: IValidation[];
}

interface IFormState {
  [key: string]: any;
  value?: string | number | null;
  error?: string | null;
  touched?: boolean;
}

interface IProps {
  elements: IElement[];
  onSubmit: (formDetails: Record<string, unknown>) => void;
  isLoading: boolean;
  customValidation?: (formState: IFormState) => Record<string, unknown>;
}

const ContentItemForm = ({ elements, onSubmit, isLoading, customValidation }: IProps) => {
  const [formState, setFormState] = useState<IFormState>(null);
  const [isValid, setIsValid] = useState(false);
  const [loading, setLoading] = useState(true);

  const regexValidation = (validations: IValidation[], value: string) => ({
    value,
    touched: true,
    error: validations.find(({ regex }) => !new RegExp(regex).test(value))?.message ?? "",
  });

  const buildNewFormState = (name: string, value: any, validations: IValidation[]) => {
    let newFormState;

    if (validations.length > 0) {
      newFormState = {
        ...formState,
        [name]: { ...regexValidation(validations, value) },
      };
    } else {
      newFormState = { ...formState, [name]: { ...formState[name], value } };
    }

    return { ...newFormState, ...(customValidation && customValidation(newFormState)) };
  };

  const onChange = (index: number, value: any) => {
    const newFormState = buildNewFormState(elements[index].name, value, elements[index].validation);
    validateForm(newFormState);
    setFormState(newFormState);
  };

  const validateForm = (values: IFormState) => {
    const formErrors = Object.values(values).filter((field) => field.error || !field.touched);
    setIsValid(formErrors.length === 0);
  };

  const handleSubmit = () => {
    const parseFormValues = Object.keys(formState).reduce(
      (acc, element) => ({
        ...acc,
        [element]: formState[element].value,
      }),
      {}
    );

    onSubmit(parseFormValues);
  };

  useEffect(() => {
    const values = elements
      .filter((element) => element.__typename !== "ContentItemFormSubmitButton")
      .reduce((acc, element) => {
        const value = element.defaultOption ? element.defaultOption.value : element.defaultValue;
        return {
          ...acc,
          [element.name]: value
            ? regexValidation(element.validation, value)
            : {
                value,
                touched: element.validation.length === 0,
              },
        };
      }, {});

    const valuesWithCustomValidation = {
      ...values,
      ...(customValidation && customValidation({ ...values, initialValidation: true })),
    };

    validateForm(valuesWithCustomValidation);
    setFormState(valuesWithCustomValidation);
    setLoading(false);
  }, []);

  return (
    <>
      {elements.map((element, index) => {
        switch (element.__typename) {
          case "ContentItemFormTextInput": {
            return (
              <TextInput
                key={element.id}
                placeholder={element.placeholder}
                value={loading ? "" : formState[element.name].value}
                errorMessage={loading ? "" : formState[element.name]?.error}
                hasError={loading ? false : !!formState[element.name]?.error}
                type={element.type}
                iconUri={element.icon?.uri}
                style={styles.textInput}
                onChange={(value) => onChange(index, value)}
                testID={INPUT_AVIOS_FORM_FIELD(element.placeholder)}
              />
            );
          }

          case "ContentItemFormSelectInput": {
            return (
              <SelectInput
                key={element.id}
                placeholder={element.placeholder}
                modalPlaceHolder={element.modalPlaceholder}
                defaultValue={element.defaultOption}
                iconUri={element.icon.uri}
                options={element.options}
                onChange={(value) => onChange(index, value)}
                errorMessage={loading ? "" : formState[element.name]?.error}
              />
            );
          }

          case "ContentItemFormSubmitButton": {
            return (
              <Button
                testID={CONTENT_FORM_SUBMIT}
                key={element.id}
                wrapperStyle={{ marginTop: Style.adjust(elements.length === 1 ? 0 : 40) }}
                size="Fill"
                disabled={!isValid || isLoading}
                onPress={handleSubmit}
                translatedLabel={element.label}
                isLoading={isLoading}
              />
            );
          }
        }
      })}
    </>
  );
};

const styles = StyleSheet.create({
  textInput: {
    paddingHorizontal: 0,
  },
  submitButton: {
    marginTop: Style.adjust(0),
  },
});

export default memo(ContentItemForm);
