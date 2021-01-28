import React, { useState, useEffect, useRef, useCallback } from "react";
import {
  ScrollView,
  StyleSheet,
  ViewStyle,
  View,
  KeyboardAvoidingView,
  Keyboard,
  Platform,
  LayoutChangeEvent,
} from "react-native";
import FibTitle from "@atoms/fib/title/title";
import { FinancialQuestionsForm, defaultFormValue, FormValue } from "./financial-questions-form";
import { IFibUnderwritingJourneyScreenProps } from "../../fib.underwriting-journey.screen";
import { useSelector, useDispatch } from "react-redux";
import { updateFIBAnswerValue } from "@redux/product/product.actions";
import { getFIBState } from "@redux/product/product.selectors";
import { Cover } from "@components/containers/products/fib/fib.types";
import GenericOverlay from "@components/modals/generic-overlay/generic-overlay";
import { Navigation } from "react-native-navigation";
import { MODALS } from "@navigation/constants";
import { Button } from "@atoms";
import { Style } from "@styles";
import { useBackHandler } from "@services/hooks/useBackHandler";

type Props = IFibUnderwritingJourneyScreenProps & {
  data: {
    coverForm: Cover;
    question: string;
  };
};

const FORM_HEIGHT = Style.adjust(72);
const INITIAL_COVER_ID = 1;

export default function FinancialQuestionsFormScreen(props: Props) {
  const existingCovers = useSelector(getFIBState).answers.existingCovers;
  const dispatch = useDispatch();
  const updateExistingCovers = (value: Cover[]) => dispatch(updateFIBAnswerValue({ key: "existingCovers", value }));
  const { data } = props;
  const { coverForm } = data;

  const scrollViewRef = useRef<ScrollView>(null);
  const isKeyboardUp = useRef(false);
  const keyboardAnimationTimeout = useRef<ReturnType<typeof setTimeout>>(null);
  const [titleHeight, setTitleHeight] = useState(0);

  const setIsKeyboardUp = (bool: boolean) => {
    return () => (isKeyboardUp.current = bool);
  };

  useEffect(() => {
    Keyboard.addListener("keyboardWillShow", setIsKeyboardUp(true));
    Keyboard.addListener("keyboardWillHide", setIsKeyboardUp(false));

    return () => {
      Keyboard.removeListener("keyboardWillShow", setIsKeyboardUp(true));
      Keyboard.removeListener("keyboardWillHide", setIsKeyboardUp(false));
      clearTimeout(keyboardAnimationTimeout.current);
    };
  }, []);

  const keyboardTimeout = useRef(null);

  const [formValue, setFormValue] = useState<FormValue>(coverForm || defaultFormValue);
  const [isFormValid, setFormValidState] = useState(!!coverForm);

  async function submitForm() {
    const cover: Cover = {
      companyName: formValue.companyName,
      coverAmount: Number(formValue.coverAmount),
      coverName: formValue.coverName,
      coverReason: formValue.coverReason,
      coverRemainInForce: formValue.coverRemainInForce,
      coverId: !existingCovers.length
        ? INITIAL_COVER_ID
        : existingCovers.reduce(
            (acc, curr) => (acc > curr.coverId ? acc : curr.coverId || INITIAL_COVER_ID),
            INITIAL_COVER_ID
          ) + 1,
    };

    if (coverForm) {
      const activeCoverIndex = existingCovers.findIndex((item: Cover) => item.coverId === coverForm.coverId);
      existingCovers[activeCoverIndex] = { ...cover, coverId: coverForm.coverId };
      updateExistingCovers(existingCovers);
      return dismissOverlay();
    }

    updateExistingCovers([...existingCovers, cover]);
    dismissOverlay();
  }

  function dismissOverlay() {
    Keyboard.dismiss();
    /*
     * Nasty RNN issue
     * https://github.com/wix/react-native-navigation/issues/2318
     * Also, we can disregard await-ing Navigation.dismissOverlay here
     * setTimeout doesn't return a promise
     * and it's too much bloat to have to promisify it
     */
    keyboardTimeout.current = setTimeout(async () => {
      Navigation.dismissOverlay(MODALS.financialCoverForm);
    }, 300);
  }

  useBackHandler(() => {
    dismissOverlay();
    return true;
  });

  const handleFocus = useCallback(
    (formIndex: number) => {
      const KEYBOARD_ANIMATION_MS = Platform.select({
        ios: isKeyboardUp.current ? 0 : 700,
        android: isKeyboardUp.current ? 0 : 500,
      });

      return () => {
        keyboardAnimationTimeout.current = setTimeout(() => {
          scrollViewRef?.current.scrollTo({ y: titleHeight + formIndex * FORM_HEIGHT });
        }, KEYBOARD_ANIMATION_MS);
      };
    },
    [titleHeight]
  );

  const handleTitleLayout = useCallback((event: LayoutChangeEvent) => {
    setTitleHeight(event.nativeEvent.layout.height);
  }, []);

  return (
    <GenericOverlay onClose={dismissOverlay}>
      <KeyboardAvoidingView style={styles.kav} behavior="padding">
        <ScrollView ref={scrollViewRef} showsVerticalScrollIndicator={false} keyboardShouldPersistTaps="handled">
          <View onLayout={handleTitleLayout}>
            <View style={styles.pad} />
            <FibTitle title={data.question} />
          </View>
          <FinancialQuestionsForm
            setFormValidState={setFormValidState}
            formValue={formValue}
            setFormValue={setFormValue}
            handleFocus={handleFocus}
          />
          <Button wrapperStyle={styles.cta} label="Done" type="Primary" onPress={submitForm} disabled={!isFormValid} />
          <View style={styles.bottomPad} />
        </ScrollView>
      </KeyboardAvoidingView>
    </GenericOverlay>
  );
}

const styles = StyleSheet.create({
  pad: {
    height: Style.adjust(32),
  } as ViewStyle,
  cta: {
    marginTop: Style.adjust(24),
  } as ViewStyle,
  bottomPad: {
    height: Style.adjust(80),
  } as ViewStyle,
  kav: {
    flex: 1,
  } as ViewStyle,
});
