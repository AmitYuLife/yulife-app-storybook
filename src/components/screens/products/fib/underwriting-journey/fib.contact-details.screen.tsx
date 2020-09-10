import React, { memo, useState } from "react";
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

export interface IFibContactDetailsScreenProps {
  onContinue: () => void;
  onContactDetailsChange: (key: keyof ContactDetails, value: string) => void;
  onFindAdress: () => void;
  contactDetails: ContactDetails;
  onClose?: () => void;
}

export const FibContactDetailsScreen = memo(function (props: IFibContactDetailsScreenProps) {
  const { onContinue, onContactDetailsChange, contactDetails, onFindAdress, onClose } = props;
  const [isEmailValid, setIsEmailValid] = useState(true);

  const isButtonEnable =
    isEmailValid &&
    contactDetails.firstAddressLine &&
    contactDetails.townOrCity &&
    contactDetails.personalEmail &&
    contactDetails.postCode &&
    contactDetails.phoneNumber
      ? true
      : false;

  return (
    <FibUnderwritingJourneyLayout
      heading={"Contact Details"}
      onClose={onClose}
      progressBar={{ maxLength: 0, currentPosition: 0, isHidden: true }}
    >
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 50 }}>
        <View style={styles.wrapper}>
          <FibTitle title={"Please enter your contact\ndetails below"} />

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
            onChange={(val) => onContactDetailsChange("county", val)}
            placeholder={"County (optional)"}
            value={contactDetails.county}
          />
          <Pad height={20} />

          <TextField
            onChange={(val) => onContactDetailsChange("postCode", val)}
            placeholder={"Postcode"}
            value={contactDetails.postCode}
          />
          <Pad height={20} />

          <TextField
            onChange={(val) => {
              setIsEmailValid(validator.validate(val));
              onContactDetailsChange("personalEmail", val);
            }}
            placeholder={"Personal Email"}
            value={contactDetails.personalEmail}
            showError={!isEmailValid}
            errorMessage={"Not a valid email"}
          />
          <Pad height={20} />

          <TextField
            onChange={(val) => onContactDetailsChange("phoneNumber", val)}
            placeholder={"Phone number"}
            value={contactDetails.phoneNumber}
            type={"PhoneNumber"}
          />
          <Pad height={40} />

          <Button type="Primary" size={"Large"} onPress={onContinue} label={"Continue"} disabled={!isButtonEnable} />
        </View>
      </ScrollView>
    </FibUnderwritingJourneyLayout>
  );
});

const styles = StyleSheet.create({
  wrapper: {
    width: Style.DEVICE_WIDTH - 63,
    alignSelf: "center",
    marginTop: 30,
  } as ViewStyle,
  lookUpAdressWrapper: {
    marginTop: 34,
    marginBottom: 16,
    height: 40,
    width: 176,
    borderColor: "#D3D3D6",
    borderWidth: 1.5,
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
});
