import React, { memo, useCallback, useMemo, useRef, useState } from "react";
import { Button, CheckBox } from "@components/molecules";
import { GenericHeadingAbsolute, GenericHeadingPad } from "@organisms";
import { gql } from "@graphql/__generated";
import { MODALS } from "@navigation/constants";
import { Navigation } from "@navigation/main";
import { Style, StyleSheet } from "@styles";
import { ScrollView, View } from "react-native";
import { TextTemplate } from "@atoms";
import { useMutation } from "@apollo/client";
import { useDispatch } from "react-redux";
import { updateSmokingEditableFieldsAction } from "@redux/health-smoking/health-smoking.actions";
import { SMOKING_EDIT_CHECKBOX_ } from "@ids";
import CustomValue from "./custom-value";
import { t } from "@locale";

interface LabelValuePair {
  label: string;
  value: string;
}

interface IProps {
  editType: "triggers" | "reasons";
  title: string;
  description: string;
  cta: string;
  selectedValues?: LabelValuePair[];
  defaultValues?: LabelValuePair[];
  customValues?: LabelValuePair[];
}

const SmokingEditStateModal = ({
  editType,
  title,
  description,
  cta,
  selectedValues: propSelectedValues = [],
  defaultValues = [],
  customValues: propCustomValues = [],
}: IProps) => {
  const dispatch = useDispatch();

  const [updateSmokingState, { loading }] = useMutation(gql("UpdateSmokingStateDocument"));

  const initialSelectedValues = useRef(propSelectedValues); // used to avoid unnecessary requests, if the user didn't change anything
  const customValues = useMemo(
    () => (propCustomValues.length ? propCustomValues : [{ value: "", label: "" }]),
    [propCustomValues]
  );

  const [defaultOptions, setDefaultOptions] = useState(createOptions(propSelectedValues, defaultValues));
  const [customOptions, setCustomOptions] = useState(createOptions(propSelectedValues, customValues));

  const handleDismiss = useCallback(() => {
    Navigation.dismissModal(MODALS.smokingEditStateModal);
  }, []);

  const handleSave = useCallback(async () => {
    const selectedValues = [...defaultOptions, ...customOptions].reduce((acc, { value, label, checked }) => {
      if (checked) {
        acc.push({
          value,
          label,
        });
      }

      return acc;
    }, [] as LabelValuePair[]);

    const hasChanges = JSON.stringify(initialSelectedValues.current) !== JSON.stringify(selectedValues);

    if (hasChanges) {
      const customTypeName = editType === "triggers" ? "customTriggers" : "customReasons";
      const usedCustomOptions = customOptions.reduce((acc, { value, label, checked }) => {
        if (checked) {
          acc.push({
            value,
            label,
          });
        }

        return acc;
      }, [] as LabelValuePair[]);

      // optimistically update the redux store
      dispatch(
        updateSmokingEditableFieldsAction({
          [editType]: selectedValues,
          [customTypeName]: usedCustomOptions,
        })
      );

      // no need to await the response, as this can happen in the background
      updateSmokingState({
        variables: {
          input: {
            [editType]: selectedValues?.map(({ value }) => value),
          },
        },
        errorPolicy: "ignore",
      });
    }

    handleDismiss();
  }, [editType, defaultOptions, customOptions, updateSmokingState, handleDismiss]);

  const handleDefaultCheckBoxPress = useCallback((value: string) => {
    setDefaultOptions((prev) =>
      prev.map((option) => (option.value === value ? { ...option, checked: !option.checked } : option))
    );
  }, []);

  const handleCustomValueChange = useCallback((index: number, value: string) => {
    setCustomOptions((prev) => prev.map((option, i) => (i === index ? { ...option, value, label: value } : option)));
  }, []);

  const handleCustomCheckBoxPress = useCallback(
    (index: number) => {
      setCustomOptions((prev) =>
        prev.map((option, i) => (i === index ? { ...option, checked: !option.checked } : option))
      );
    },
    [customOptions]
  );

  const placeholder = useMemo(() => t(`screens.smoking_edit_modal.other.${editType}`), [editType]);

  const buttonDisabled = useMemo(() => {
    const nothingSelected = [...defaultOptions, ...customOptions].every((option) => !option.checked);
    const emptyOptionSelected = customOptions.some((option) => option.checked && !option.value);

    return nothingSelected || emptyOptionSelected;
  }, [defaultOptions, customOptions]);

  return (
    <View style={styles.outerWrapper}>
      <GenericHeadingPad />
      <ScrollView contentContainerStyle={styles.innerWrapper} showsVerticalScrollIndicator={false}>
        <View style={styles.textWrapper}>
          <TextTemplate type="b1b" textAlign="left">
            {title}
          </TextTemplate>
          <TextTemplate type="b2" textAlign="left">
            {description}
          </TextTemplate>
        </View>
        {defaultOptions.map(({ label, value, checked }) => {
          return (
            <CheckBox
              checkboxType="cubic"
              checked={checked}
              value={value}
              key={value}
              label={label}
              onChange={handleDefaultCheckBoxPress}
              testID={SMOKING_EDIT_CHECKBOX_(value)}
            />
          );
        })}
        {customValues.map(({ value }, index) => {
          const checked = customOptions[index].checked;
          return (
            <CustomValue
              key={value}
              index={index}
              initialValue={value}
              placeholder={placeholder}
              checked={checked}
              onCheckBoxPress={handleCustomCheckBoxPress}
              onValueChange={handleCustomValueChange}
            />
          );
        })}
      </ScrollView>
      <View style={styles.buttonWrapper}>
        <Button
          testID="smoking-edit-state-save-button"
          translatedLabel={cta}
          onPress={handleSave}
          isLoading={loading}
          disabled={buttonDisabled}
        />
      </View>
      <GenericHeadingAbsolute logo="yulife" onRightIconPress={handleDismiss} rightIcon="CLOSE" />
    </View>
  );
};

const styles = StyleSheet.create({
  outerWrapper: {
    flex: 1,
  },
  innerWrapper: {
    paddingVertical: Style.adjust(32),
    paddingHorizontal: Style.adjust(24),
  },
  textWrapper: {
    gap: Style.adjust(16),
    marginBottom: Style.adjust(24),
  },
  buttonWrapper: {
    marginBottom: Style.adjust(32),
  },
});

const createOptions = (selectedValues: LabelValuePair[], defaultValues: LabelValuePair[]) =>
  defaultValues.map((option) => ({
    ...option,
    checked: selectedValues.some((selected) => selected.value === option.value),
  }));

export default memo(SmokingEditStateModal);
