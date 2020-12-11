import React, { memo, useState, useCallback } from "react";
import { FibUnderwritingJourneyLayout } from "../layouts/fib.underwriting-journey-layout";
import { View, StyleSheet, TextStyle, ViewStyle, ScrollView } from "react-native";
import { TextField, TouchableOpacityWithDelay } from "@components/molecules";
import { Text, Pad, Button } from "@atoms";
import { Style } from "@styles";
import FibTitle from "../../../../atoms/fib/title/title";
import { SvgXml } from "react-native-svg";
import { arrowRightSvg } from "../browse-packages/subcomponents/faqs/svgs/svgArrowRight";
import validator from "email-validator";
import { ContactDetails } from "@redux/product/product.types";
import { postCodeRegexSpecial, postCodeRegex } from "./fib.find-adress.screen";

export interface IFibContactDetailsScreenProps {
  onContinue: () => void;
  onContactDetailsChange: (key: keyof ContactDetails, value: string) => void;
  onFindAdress: () => void;
  contactDetails: ContactDetails;
  onClose?: () => void;
}

export const FibContactDetailsScreen = memo(function (props: IFibContactDetailsScreenProps) {
  const { onContinue, onContactDetailsChange, contactDetails, onFindAdress, onClose } = props;
  const [isEmailValid, setIsEmailValid] = useState(validator.validate(contactDetails.personalEmail));
  const [isPhoneNumberValid, setIsPhoneNumberValid] = useState(phoneNumberIsValid(contactDetails.phoneNumber));
  const [isPostCodeValide, setIsPostCodeValid] = useState(postCodeValid(contactDetails.postCode));

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

  return (
    <FibUnderwritingJourneyLayout
      hideBorder={false}
      heading={"Contact Details"}
      onClose={onClose}
      hideProgressBar={true}
    >
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.contentWrapper}>
        <View style={styles.wrapper}>
          <FibTitle title="Please enter your contact details:" />
          <View style={styles.paddingHorizontal}>
            <TouchableOpacityWithDelay onPress={onFindAdress}>
              <View style={styles.lookUpAdressWrapper}>
                <Text style={styles.lookUpAdressText}>Look up address</Text>
                <View style={styles.imageWrapper}>
                  <SvgXml height={12} width={6} xml={arrowRightSvg} />
                </View>
              </View>
            </TouchableOpacityWithDelay>
            <TextField
              onChange={(val) => onContactDetailsChange("firstAddressLine", val)}
              placeholder={"Address Line 1"}
              value={contactDetails.firstAddressLine}
            />
            <Pad height={20} />
            <TextField
              onChange={(val) => onContactDetailsChange("secondAddressLine", val)}
              placeholder={"Address Line 2 (optional)"}
              value={contactDetails.secondAddressLine}
            />
            <Pad height={20} />

            <TextField
              onChange={(val) => onContactDetailsChange("townOrCity", val)}
              placeholder={"Town or City"}
              value={contactDetails.townOrCity}
            />
            <Pad height={20} />

            <TextField
              onChange={(val) => onPostCodeChange(val)}
              placeholder={"Postcode"}
              type={"PostCode"}
              maxLength={8}
              value={contactDetails.postCode}
              showError={contactDetails.postCode && !isPostCodeValide}
              errorMessage={"Not a valid postcode"}
            />
            <Pad height={20} />

            <TextField
              onChange={(val) => {
                setIsEmailValid(validator.validate(val));
                onContactDetailsChange("personalEmail", val);
              }}
              placeholder={"Personal Email"}
              value={contactDetails.personalEmail}
              showError={contactDetails.personalEmail && !isEmailValid}
              errorMessage={"Not a valid email"}
            />
            <Pad height={20} />

            <TextField
              onChange={(val) => onPhoneNumberChange(val)}
              placeholder={"Phone number"}
              value={contactDetails.phoneNumber}
              type={"PhoneNumber"}
              showError={contactDetails.phoneNumber && !isPhoneNumberValid}
              errorMessage={"Not a valid UK phone number"}
              maxLength={11}
            />
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
    paddingHorizontal: Style.adjust(24),
  } as ViewStyle,
  lookUpAdressWrapper: {
    marginTop: Style.adjust(16),
    marginBottom: Style.adjust(24),
    height: Style.adjust(40),
    width: Style.adjust(176),
    borderColor: "#D3D3D6",
    borderWidth: 1,
    borderRadius: 8,
    paddingLeft: 16,
    alignItems: "center",
    flexDirection: "row",
  } as ViewStyle,
  lookUpAdressText: {
    fontSize: 16,
    lineHeight: 24,
    color: "#464647",
    letterSpacing: 1,
    fontFamily: Style.FONT_FAMILY_PRIMARY_BOLD,
  } as TextStyle,
  imageWrapper: {
    marginLeft: "auto",
    paddingRight: Style.adjust(14),
  } as ViewStyle,
  contentWrapper: {
    paddingBottom: Style.adjust(50),
  } as ViewStyle,
});
