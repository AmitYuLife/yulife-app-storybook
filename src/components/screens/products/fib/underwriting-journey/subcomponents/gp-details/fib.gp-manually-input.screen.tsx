import React, { useCallback, memo, useState, useRef, useEffect, useMemo } from "react";
import {
  View,
  StyleSheet,
  ViewStyle,
  TextStyle,
  Platform,
  LayoutChangeEvent,
  ScrollView,
  Keyboard,
} from "react-native";
import { Style, Colours } from "@styles";
import { useBackHandler } from "../../../../../../../services/hooks/useBackHandler";
import { ScrollableLayout, TextField } from "@molecules";
import FibTitle from "@atoms/fib/title/title";
import { MedicalPractices_getMedicalPractices } from "@graphql/_core/schema";
import { Text } from "@atoms";

interface Props {
  onClose: () => void;
  onNavigateBack: () => void;
  onContinue: (form: GPInputForm) => void;
  selectedPractice?: MedicalPractices_getMedicalPractices;
  previousFormValue?: GPInputForm;
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

function _FibGPManuallyInputScreen(props: Props) {
  const { onNavigateBack, onContinue, onClose, selectedPractice, previousFormValue } = props;

  const scrollViewRef = useRef<ScrollView>(null);
  const isKeyboardUp = useRef(false);
  const keyboardAnimationTimeout = useRef<ReturnType<typeof setTimeout>>(null);

  const setIsKeyboardUp = (bool: boolean) => {
    return () => (isKeyboardUp.current = bool);
  };

  useEffect(() => {
    Keyboard.addListener("keyboardWillShow", setIsKeyboardUp(true));
    Keyboard.addListener("keyboardWillHide", setIsKeyboardUp(false));

    return () => {
      Keyboard.removeListener("keyboardWillShow", setIsKeyboardUp(true));
      Keyboard.removeListener("keyboardWillHide", setIsKeyboardUp(false));
    };
  }, []);

  useEffect(() => {
    return () => {
      clearTimeout(keyboardAnimationTimeout.current);
    };
  }, []);

  const [titleHeight, setTitleHeight] = useState(0);

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
    : previousFormValue
    ? previousFormValue
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

  const handleTitleLayout = useCallback((event: LayoutChangeEvent) => {
    setTitleHeight(event.nativeEvent.layout.height);
  }, []);

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

  const handleFocus = useCallback(
    (formIndex: number) => {
      const KEYBOARD_ANIMATION_MS = Platform.select({
        ios: isKeyboardUp.current ? 0 : 700,
        android: isKeyboardUp.current ? 0 : 500,
      });

      keyboardAnimationTimeout.current = setTimeout(() => {
        if (formIndex > 4) {
          return scrollViewRef?.current.scrollToEnd();
        }

        scrollViewRef?.current.scrollTo({ y: titleHeight + formIndex * FORM_HEIGHT });
      }, KEYBOARD_ANIMATION_MS);
    },
    [titleHeight]
  );

  return (
    <ScrollableLayout
      buttonAction={handleContinue}
      onLeftIconPress={onNavigateBack}
      buttonTitle="Continue"
      heading={"GP Report"}
      onRightIconPress={onClose}
      isButtonDisabled={isValidForm}
      scrollViewForwardRef={scrollViewRef}
    >
      <View>
        <View onLayout={handleTitleLayout}>
          <FibTitle title="Please enter your medical practice and GP details below:" />
        </View>
        <View style={styles.contentWrapper}>
          <View style={styles.headerWrapper}>
            <Text bold={true} style={styles.headerText}>
              Medical Practice
            </Text>
          </View>
          {medicalPracticeForm.map(({ updateFormKey, placeholder, value }, formIndex) => (
            <View key={updateFormKey} style={styles.formWrapper}>
              <TextField
                onChange={(val) => updateForm(updateFormKey, val)}
                placeholder={placeholder}
                inputTextStyle={styles.text}
                value={value}
                onFocus={() => handleFocus(formIndex)}
                baseUnderlineColor={Colours.neutral.n200}
              />
            </View>
          ))}
          <View style={styles.headerWrapper}>
            <Text bold={true} style={styles.headerText}>
              General practitioner
            </Text>
          </View>
          <View style={styles.formWrapper}>
            <TextField
              onChange={(val) => updateForm("gpName", val)}
              placeholder="Name"
              inputTextStyle={styles.text}
              value={formValue.gpName}
              onFocus={() => handleFocus(5)}
              baseUnderlineColor={Colours.neutral.n200}
            />
          </View>
        </View>
      </View>
      <View style={styles.bottomPad} />
    </ScrollableLayout>
  );
}

export const FibGPManuallyInputScreen = memo(_FibGPManuallyInputScreen);

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
  headerText: {
    fontSize: 16,
    letterSpacing: 1,
    lineHeight: 24,
    color: Colours.neutral.n800,
  } as TextStyle,
  headerWrapper: {
    marginTop: 32,
    marginBottom: 8,
  } as ViewStyle,
});
