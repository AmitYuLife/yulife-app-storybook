import React, { memo, useCallback, useRef, useState } from "react";
import { Button, CheckBox } from "@components/molecules";
import { GenericHeadingAbsolute, GenericHeadingPad } from "@organisms";
import { gql } from "@graphql/__generated";
import { MODALS } from "@navigation/constants";
import { Navigation } from "@navigation/main";
import { Style } from "@styles";
import { ScrollView, StyleSheet, View } from "react-native";
import { TextTemplate } from "@atoms";
import { useMutation } from "@apollo/client";
import { useDispatch } from "react-redux";
import { updateSmokingEditableFieldsAction } from "@redux/health-smoking/health-smoking.actions";

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
  customValues = [],
}: IProps) => {
  const dispatch = useDispatch();

  const [updateSmokingState, { loading }] = useMutation(gql("UpdateSmokingStateDocument"));

  const initialSelectedValues = useRef(propSelectedValues); // used to avoid unnecessary requests, if the user didn't change anything
  const [selectedValues, setSelectedValues] = useState(propSelectedValues);

  const handleDismiss = useCallback(() => {
    Navigation.dismissModal(MODALS.smokingEditStateModal);
  }, []);

  const handleSave = useCallback(async () => {
    const hasChanges = JSON.stringify(initialSelectedValues.current) !== JSON.stringify(selectedValues);

    if (hasChanges) {
      // optimistically update the redux store
      dispatch(updateSmokingEditableFieldsAction({ [editType]: selectedValues }));

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
  }, [selectedValues, editType, updateSmokingState, handleDismiss]);

  const handleCheckBoxPress = useCallback(
    (value: LabelValuePair, checked: boolean) => {
      if (checked) {
        setSelectedValues(selectedValues.filter((selectedValue) => selectedValue.label !== value.label));
      } else {
        setSelectedValues([...selectedValues, value]);
      }
    },
    [selectedValues]
  );

  return (
    <View style={styles.outerWrapper}>
      <GenericHeadingPad />
      <ScrollView style={styles.innerWrapper}>
        <View style={styles.textWrapper}>
          <TextTemplate type="b1b" textAlign="left">
            {title}
          </TextTemplate>
          <TextTemplate type="b2" textAlign="left">
            {description}
          </TextTemplate>
        </View>
        {defaultValues.map(({ label, value }) => {
          const checked = !!selectedValues.find((selectedValue) => selectedValue.value === value);

          return (
            <CheckBox
              checkboxType="cubic"
              checked={checked}
              value={value}
              key={value}
              label={label}
              onChange={() => handleCheckBoxPress({ label, value }, checked)}
            />
          );
        })}
        {customValues.map(({ label, value }, index) => {
          const checked = !!selectedValues.find((selectedValue) => selectedValue.value === value);

          return (
            <CheckBox
              checkboxType="cubic"
              checked={checked}
              value={`${value}-${index}`}
              key={value}
              label={label}
              onChange={() => handleCheckBoxPress({ label, value }, checked)}
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

export default memo(SmokingEditStateModal);
