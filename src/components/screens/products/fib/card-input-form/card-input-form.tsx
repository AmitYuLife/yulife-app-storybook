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
import { ScrollableLayout, TextField } from "@molecules";
import FibTitle from "@atoms/fib/title/title";
import { CardTokenParams } from "tipsi-stripe";
import { useBackHandler } from "../../../../../services/hooks/useBackHandler";
import { ContactDetails } from "../../../../../redux/product/product.types";

interface Props {
  onNavigateBack: () => void;
  onContinue: (form: CardTokenParams) => Promise<void>;
  contactDetails: ContactDetails & { fullName: string };
  loading: boolean;
}

const defaultFormValue: CardTokenParams = {
  number: "",
  expMonth: null,
  expYear: null,
  cvc: "",
  name: "",
  addressLine1: "",
  addressLine2: "",
  addressCity: "",
  addressZip: "",
  addressCountry: "",
  // Not allow to change next fields
  country: "GB",
  currency: "gbp",
};

function validateCardForm(form: CardTokenParams) {
  return !form.number || !form.expMonth || !form.expYear || !form.cvc;
}

const FORM_HEIGHT = Platform.select({
  ios: Style.adjust(74.5),
  android: Style.adjust(78.5),
});

function _CardInputScreen(props: Props) {
  const { onNavigateBack, onContinue, contactDetails, loading } = props;

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

  const initialState = {
    ...defaultFormValue,
    addressLine1: contactDetails.firstAddressLine,
    addressLine2: contactDetails.secondAddressLine,
    addressCity: contactDetails.townOrCity,
    addressZip: contactDetails.postCode,
    name: contactDetails.fullName,
  };

  const [formValue, setFormValue] = useState<CardTokenParams>(initialState);

  const backHandler = useCallback(() => {
    onNavigateBack();
    return true;
  }, [onNavigateBack]);

  useBackHandler(backHandler);

  const updateForm = (key: string, value: string) => {
    let newValue: string | number = value;
    if (key === "expMonth" || key === "expYear") {
      newValue = parseInt(value);
    }

    setFormValue({ ...formValue, [key]: newValue });
  };

  const handleContinue = async () => {
    await onContinue(formValue);
  };

  const isValidForm = validateCardForm(formValue);

  const handleTitleLayout = useCallback((event: LayoutChangeEvent) => {
    setTitleHeight(event.nativeEvent.layout.height);
  }, []);

  const forms = useMemo(
    () => [
      {
        updateFormKey: "number",
        placeholder: "Card number",
        value: formValue.number,
        type: "PhoneNumber", // FIXME: Hack for no number with commas
        maxLength: 16,
      },
      {
        updateFormKey: "expMonth",
        placeholder: "Expire month",
        value: formValue.expMonth,
        type: "Number",
        maxLength: 2,
      },
      {
        updateFormKey: "expYear",
        placeholder: "Expire year",
        value: formValue.expYear,
        type: "Number",
        maxLength: 2,
      },
      {
        updateFormKey: "cvc",
        placeholder: "CVC",
        value: formValue.cvc,
      },
      {
        updateFormKey: "name",
        placeholder: "Name",
        value: formValue.name,
      },
      {
        updateFormKey: "addressLine1",
        placeholder: "Address line 1",
        value: formValue.addressLine1,
      },
      {
        updateFormKey: "addressLine2",
        placeholder: "Address line 2",
        value: formValue.addressLine2,
      },
      {
        updateFormKey: "addressCity",
        placeholder: "Address city",
        value: formValue.addressCity,
      },
      {
        updateFormKey: "addressZip",
        placeholder: "Address post code",
        value: formValue.addressZip,
        type: "PostCode",
      },
      {
        updateFormKey: "addressCountry",
        placeholder: "Address country",
        value: formValue.addressCountry,
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
      heading={"Add card"}
      isButtonDisabled={isValidForm}
      scrollViewForwardRef={scrollViewRef}
      isButtonLoading={loading}
    >
      <View onLayout={handleTitleLayout}>
        <FibTitle title="Please enter your card and billing address details below." />
      </View>
      <View style={styles.wrapper}>
        <View>
          {forms.map(({ updateFormKey, placeholder, value, type, maxLength }, formIndex) => (
            <View key={updateFormKey} style={styles.formWrapper}>
              <TextField
                onChange={(val) => updateForm(updateFormKey, val)}
                placeholder={placeholder}
                inputTextStyle={styles.text}
                value={value as string}
                onFocus={() => handleFocus(formIndex)}
                type={type as any}
                maxLength={maxLength}
              />
            </View>
          ))}
        </View>
      </View>
      <View style={styles.bottomPad} />
    </ScrollableLayout>
  );
}

export const CardInputScreen = memo(_CardInputScreen);

const FONT_SIZE = Style.adjust(20);

const styles = StyleSheet.create({
  wrapper: {
    marginHorizontal: Style.adjust(24),
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
  field: {
    width: 300,
    color: "#449aeb",
    borderColor: "#000",
    borderWidth: 1,
    borderRadius: 5,
  },
});
