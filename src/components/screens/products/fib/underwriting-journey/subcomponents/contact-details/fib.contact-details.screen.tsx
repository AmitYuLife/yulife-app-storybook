import React, { memo, useState, useCallback, useRef } from "react";
import { FibUnderwritingJourneyLayout } from "../../../layouts/fib.underwriting-journey-layout";
import { View, StyleSheet, TextStyle, ViewStyle, ScrollView, LayoutChangeEvent } from "react-native";
import { TextField, TouchableOpacityWithDelay } from "@components/molecules";
import { Text, Pad, Button, SearchIcon } from "@atoms";
import { Colours, Style } from "@styles";
import validator from "email-validator";
import { ContactDetails } from "@redux/product/product.types";
import { postCodeRegexSpecial, postCodeRegex } from "./fib.find-address.screen";
import { useBackHandler } from "@services/hooks/useBackHandler";
import ContactDetailsTitle from "./fib.contact-details.title";

export interface IFibContactDetailsScreenProps {
  onContinue: () => void;
  onContactDetailsChange: (key: keyof ContactDetails, value: string) => void;
  onFindAddress: () => void;
  contactDetails: ContactDetails;
  onClose?: () => void;
  pop: () => void;
}

export const FibContactDetailsScreen = memo(function (props: IFibContactDetailsScreenProps) {
  const { onContinue, onContactDetailsChange, contactDetails, onFindAddress, onClose, pop } = props;
  const [isEmailValid, setIsEmailValid] = useState(validator.validate(contactDetails.personalEmail));
  const [isPhoneNumberValid, setIsPhoneNumberValid] = useState(phoneNumberIsValid(contactDetails.phoneNumber));
  const [isPostCodeValid, setIsPostCodeValid] = useState(postCodeValid(contactDetails.postCode));
  const layouts = useRef([] as number[]);
  const scrollViewRef = useRef(null);

  useBackHandler(() => {
    pop();
    return true;
  });

  const isButtonEnable =
    isEmailValid &&
    contactDetails.firstAddressLine &&
    contactDetails.townOrCity &&
    contactDetails.personalEmail &&
    contactDetails.postCode &&
    contactDetails.phoneNumber &&
    isPhoneNumberValid
      ? true
      : false;

  const onPhoneNumberChange = useCallback(
    (phoneNumber: string) => {
      const isValid = phoneNumberIsValid(phoneNumber);
      setIsPhoneNumberValid(isValid);
      onContactDetailsChange("phoneNumber", phoneNumber);
    },
    [setIsPhoneNumberValid, onContactDetailsChange]
  );

  const onPostCodeChange = useCallback(
    (postCode: string) => {
      setIsPostCodeValid(postCodeValid(postCode));
      onContactDetailsChange("postCode", postCode);
    },
    [setIsPostCodeValid, onContactDetailsChange]
  );

  function onTextInputFocus(index: number) {
    return () => {
      scrollViewRef.current.scrollTo({ y: layouts.current[index] });
    };
  }

  function setLayout(index: number) {
    return (event: LayoutChangeEvent) => {
      layouts.current[index] = event.nativeEvent.layout.y;
    };
  }

  const inputs = [
    {
      onChange: (val: string) => onContactDetailsChange("firstAddressLine", val),
      placeholder: "Address Line 1",
      value: contactDetails.firstAddressLine,
    },
    {
      onChange: (val: string) => onContactDetailsChange("secondAddressLine", val),
      placeholder: "Address Line 2 (optional)",
      value: contactDetails.secondAddressLine,
    },
    {
      onChange: (val: string) => onContactDetailsChange("townOrCity", val),
      placeholder: "Town or City",
      value: contactDetails.townOrCity,
    },
    {
      onChange: (val: string) => onPostCodeChange(val),
      placeholder: "Postcode",
      type: "PostCode" as "PostCode",
      maxLength: 8,
      value: contactDetails.postCode,
      showError: contactDetails.postCode && !isPostCodeValid,
      errorMessage: "Not a valid postcode",
    },
    {
      onChange: (val: string) => {
        setIsEmailValid(validator.validate(val));
        onContactDetailsChange("personalEmail", val);
      },
      placeholder: "Personal Email",
      value: contactDetails.personalEmail,
      showError: contactDetails.personalEmail && !isEmailValid,
      errorMessage: "Not a valid email",
    },
    {
      onChange: (val: string) => onPhoneNumberChange(val),
      placeholder: "Phone number",
      value: contactDetails.phoneNumber,
      type: "PhoneNumber" as "PhoneNumber",
      showError: contactDetails.phoneNumber && !isPhoneNumberValid,
      errorMessage: "Not a valid UK phone number",
      maxLength: 11,
    },
  ];

  return (
    <FibUnderwritingJourneyLayout
      hideBorder={false}
      heading={"Contact Details"}
      onClose={onClose}
      hideProgressBar={true}
      onPreviousQuestion={pop}
    >
      <ScrollView
        ref={scrollViewRef}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentWrapper}
        keyboardShouldPersistTaps="always"
      >
        <View style={styles.wrapper}>
          <ContactDetailsTitle title="Please enter your contact details:" />
          <View style={styles.paddingHorizontal}>
            <TouchableOpacityWithDelay onPress={onFindAddress}>
              <View style={styles.lookUpAddressWrapper}>
                <View style={styles.imageWrapper}>
                  <SearchIcon />
                </View>
                <Text bold={true} style={styles.lookUpAddressText}>
                  Look up address
                </Text>
              </View>
            </TouchableOpacityWithDelay>
            {inputs.map((item, index) => (
              <View onLayout={setLayout(index)} key={index}>
                <TextField onFocus={onTextInputFocus(index)} {...item} baseUnderlineColor={Colours.neutral.n200} />
                <Pad height={20} />
              </View>
            ))}
            <Pad height={40} />
          </View>
          <Button type="Primary" size={"Large"} onPress={onContinue} label={"Continue"} disabled={!isButtonEnable} />
        </View>
      </ScrollView>
    </FibUnderwritingJourneyLayout>
  );
});

const phoneRegEx = /^(?:(?:\(?(?:0(?:0|11)\)?[\s-]?\(?|\+)44\)?[\s-]?(?:\(?0\)?[\s-]?)?)|(?:\(?0))(?:(?:\d{5}\)?[\s-]?\d{4,5})|(?:\d{4}\)?[\s-]?(?:\d{5}|\d{3}[\s-]?\d{3}))|(?:\d{3}\)?[\s-]?\d{3}[\s-]?\d{3,4})|(?:\d{2}\)?[\s-]?\d{4}[\s-]?\d{4}))(?:[\s-]?(?:x|ext\.?|\#)\d{3,4})?$/;
const phoneNumberIsValid = (phoneNumber: string) => {
  return phoneRegEx.test(phoneNumber);
};

const postCodeValid = (postCode: string) => {
  return postCodeRegexSpecial.test(postCode) || postCodeRegex.test(postCode);
};

const styles = StyleSheet.create({
  wrapper: {
    alignSelf: "center",
    width: "100%",
    paddingTop: Style.adjust(16),
  } as ViewStyle,
  paddingHorizontal: {
    paddingHorizontal: Style.adjust(32),
  } as ViewStyle,
  lookUpAddressWrapper: {
    marginTop: Style.adjust(16),
    marginBottom: Style.adjust(24),
    height: Style.adjust(48),
    borderColor: Colours.neutral.n800,
    borderWidth: 1,
    borderRadius: 53,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
  } as ViewStyle,
  lookUpAddressText: {
    fontSize: 16,
    lineHeight: 24,
    color: Colours.neutral.n800,
    letterSpacing: 1,
    alignSelf: "center",
  } as TextStyle,
  imageWrapper: {
    paddingRight: Style.adjust(8),
  } as ViewStyle,
  contentWrapper: {
    paddingBottom: Style.adjust(50),
  } as ViewStyle,
});
