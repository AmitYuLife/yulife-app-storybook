import React, { useState, useRef, useCallback } from "react";
import { GenericHeading, MinimalButton } from "@atoms";
import {
  SafeAreaView,
  Keyboard,
  View,
  Platform,
  KeyboardAvoidingView,
  StyleSheet,
  ViewStyle,
  ScrollView,
  TextStyle,
} from "react-native";
import { Colours, Style } from "@styles";
import formInputsData from "./fib.feedback-form.data";
import Logger from "@services/logging/logger";
import { FeedbackInputWrapper } from "./feedback-input-wrapper";
import LinearGradient from "react-native-linear-gradient";
import { useBackHandler } from "../../../../../services/hooks/useBackHandler";

export interface Props {
  onContinue: () => void;
  onNavigateBack: () => void;
}

const initialValue = formInputsData.reduce((prev, curr) => {
  return { ...prev, [curr.id]: "" };
}, {});

export function FibFeedbackFormScreen(props: Props) {
  const { onNavigateBack } = props;
  const [formState, setFormState] = useState<Record<string, string>>(initialValue);

  const scrollViewRef = useRef<ScrollView | null>(null);

  const backHandler = useCallback(() => {
    onNavigateBack();
    return true;
  }, [onNavigateBack]);

  useBackHandler(backHandler);

  function updateFormState(key: string, value: string) {
    setFormState({
      ...formState,
      [key]: value,
    });
  }

  function onSubmit(form: Record<string, string>) {
    Logger.logEvent("feedback", form);
  }

  function onTextInputFocus(y: number) {
    scrollViewRef.current.scrollTo({ y });
  }

  return (
    <>
      <SafeAreaView style={styles.wrapper}>
        <GenericHeading
          heading="Feedback"
          isBeta={true}
          onLeftIconPress={() => {
            Keyboard.dismiss();

            return props.onNavigateBack();
          }}
        />

        <ScrollView ref={scrollViewRef} style={styles.formWrapper} showsHorizontalScrollIndicator={false}>
          {formInputsData.map((data) => {
            return (
              <FeedbackInputWrapper
                data={data}
                onTextInputFocus={(y) => onTextInputFocus(y)}
                updateFormState={updateFormState}
                value={formState[data.id]}
                key={data.id}
              />
            );
          })}
        </ScrollView>
      </SafeAreaView>
      <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : null}>
        <LinearGradient colors={["#ffffff00", "#fafafe"]} locations={[0, 0.25]} style={styles.buttonWrapper}>
          <View style={styles.button}>
            <MinimalButton
              backgroundColor={Colours.darkHotPink}
              shadowColor={Colours.darkHotPinkShadow}
              height={53}
              title="Submit"
              onPress={() => {
                onSubmit(formState);
                Keyboard.dismiss();

                return props.onContinue();
              }}
              disabled={isButtonDisabled(formState)}
              color="white"
              borderRadius={50}
              titleStyle={styles.buttonTitle}
            />
          </View>
        </LinearGradient>
      </KeyboardAvoidingView>
    </>
  );
}

function isButtonDisabled(formState: Record<string, string>): boolean {
  return Object.values(formState).every((value) => !value || !value.length);
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "white",
    flex: 1,
    marginTop: Style.isAnyIphoneX() ? -10 : 0,
  },
  buttonWrapper: {
    width: "100%",
    alignSelf: "center",
    alignItems: "center",
    height: 90,
    marginTop: 8,
  } as ViewStyle,

  button: {
    width: Style.DEVICE_WIDTH - 70,
  } as ViewStyle,
  buttonTitle: {
    letterSpacing: 1,
    fontFamily: Style.FONT_FAMILY_PRIMARY_BOLD,
    fontSize: Style.adjust(16),
  } as TextStyle,
  formWrapper: {
    backgroundColor: "#fafafe",
  },
});
