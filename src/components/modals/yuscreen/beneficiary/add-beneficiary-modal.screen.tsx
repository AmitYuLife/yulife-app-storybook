import React, { useRef, useState } from "react";
import { ScrollView, View, LayoutChangeEvent, KeyboardAvoidingView, Platform, Keyboard } from "react-native";
import { Button, LinkButton, Pad, Text } from "@atoms";
import { StyleSheet, TextStyle, ViewStyle } from "react-native";
import { Colours, Style } from "@styles";
import GenericHeadingAbsolute, { GenericHeadingPad } from "@atoms/generic-heading/generic-heading-absolute";
import { TextField } from "@components/molecules";
import { phoneNumberIsValid } from "@services/utils";
import { ConfirmationScreen } from "./confirmation.screen";
import { GetProductBeneficiaries_getProductBeneficiaries_beneficiaries as Beneficiary } from "@graphql/_core/schema";

type ButtonProps = React.ComponentProps<typeof Button>;

interface IAddBeneficiaryModalProps {
  onClose?: ButtonProps["onPress"];
  onContinue?: (beneficiary: Beneficiary) => void;
  beneficiary?: Beneficiary;
  deleteBeneficiary?: (beneficiary: Beneficiary) => void;
  updateBeneficiaryLoading: boolean;
  removeBeneficiaryLoading: boolean;
}

const keyboardBehavior = Platform.select({ ios: "padding" as "padding", android: null });

export default function AddBeneficiaryModalScreen({
  onClose,
  onContinue,
  beneficiary: existingBeneficiary,
  deleteBeneficiary,
  updateBeneficiaryLoading,
  removeBeneficiaryLoading,
}: IAddBeneficiaryModalProps) {
  const [deleteBeneficiaryPressed, setDeleteBeneficiaryPressed] = useState(false);
  const scrollViewRef = useRef(null);
  const layouts = useRef([] as number[]);

  const defaultBeneficiary = {
    id: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
    relationship: "",
    shareOfBenefit: 0,
  };
  const [beneficiary, setBeneficiary] = useState<Beneficiary>(existingBeneficiary || defaultBeneficiary);

  function onTextInputFocus(index: number) {
    return () => {
      scrollViewRef.current.scrollTo({ y: layouts.current[index] });
    };
  }

  const onPressContinue = async () => {
    Keyboard.dismiss();
    await onContinue(beneficiary);
  };

  const allFieldsValid =
    beneficiary.firstName &&
    beneficiary.lastName &&
    phoneNumberIsValid(beneficiary.phoneNumber) &&
    beneficiary.relationship
      ? true
      : false;

  function setLayout(index: number) {
    return (event: LayoutChangeEvent) => {
      layouts.current[index] = event.nativeEvent.layout.y;
    };
  }

  const inputs = [
    {
      onChange: (val: string) => {
        setBeneficiary({ ...beneficiary, firstName: val });
      },
      placeholder: "First name",
      value: beneficiary.firstName,
    },
    {
      onChange: (val: string) => {
        setBeneficiary({ ...beneficiary, lastName: val });
      },
      placeholder: "Last name",
      value: beneficiary.lastName,
    },
    {
      onChange: (val: string) => {
        setBeneficiary({ ...beneficiary, phoneNumber: val });
      },
      placeholder: "Phone number",
      value: beneficiary.phoneNumber,
      type: "PhoneNumber" as "PhoneNumber",
      showError: beneficiary.phoneNumber && !phoneNumberIsValid(beneficiary.phoneNumber),
      errorMessage: "Not a valid UK phone number",
      maxLength: 11,
    },
    {
      onChange: (val: string) => {
        setBeneficiary({ ...beneficiary, relationship: val });
      },
      placeholder: "Relation",
      value: beneficiary.relationship,
    },
  ];

  const onDeleteConfirmed = async () => {
    deleteBeneficiary(beneficiary);
  };

  if (deleteBeneficiaryPressed) {
    return (
      <ConfirmationScreen
        title="Are you sure you want to delete this beneficiary?"
        firstLabel="Yes"
        secondLabel="No"
        onFirstButtonPress={onDeleteConfirmed}
        onSecondButtonPress={() => setDeleteBeneficiaryPressed(false)}
        firstButtonLoading={removeBeneficiaryLoading}
      />
    );
  }

  return (
    <View style={styles.wrapper}>
      <GenericHeadingPad />
      <KeyboardAvoidingView behavior={keyboardBehavior} style={styles.kav}>
        <ScrollView
          ref={scrollViewRef}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollViewContentWrapper}
          keyboardShouldPersistTaps="always"
        >
          <View style={styles.contentWrapper}>
            <Text style={styles.heading} bold={true}>
              Beneficiary Details
            </Text>
            {inputs.map((item, index) => (
              <View onLayout={setLayout(index)} key={index}>
                <TextField onFocus={onTextInputFocus(index)} baseUnderlineColor={Colours.neutral.n200} {...item} />
                <Pad height={20} />
              </View>
            ))}

            {existingBeneficiary && (
              <LinkButton
                wrapperStyle={styles.deleteButtonWrapper}
                label="Delete Beneficiary"
                onPress={() => setDeleteBeneficiaryPressed(true)}
              />
            )}
          </View>
          <View style={styles.continueButtonMainWrapper}>
            <Button
              label="Continue"
              onPress={onPressContinue}
              disabled={!allFieldsValid}
              wrapperStyle={styles.continueButtonWrapper}
              isLoading={updateBeneficiaryLoading}
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
      <GenericHeadingAbsolute onRightIconPress={onClose} />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  } as ViewStyle,
  heading: {
    color: Colours.neutral.n800,
    fontSize: Style.adjust(32),
    letterSpacing: Style.adjust(1),
    marginBottom: Style.adjust(32),
  } as TextStyle,
  contentWrapper: {
    paddingHorizontal: Style.adjust(32),
    backgroundColor: "rgba(255,255,255,0.9)",
  } as ViewStyle,
  scrollViewContentWrapper: {
    flexGrow: 1,
  },
  kav: {
    flex: 1,
    height: "100%",
  } as ViewStyle,
  deleteButtonWrapper: {
    alignSelf: "flex-start",
    marginLeft: -10,
  },
  continueButtonMainWrapper: {
    flexGrow: 1,
    minHeight: Style.adjust(118),
  },
  continueButtonWrapper: {
    marginTop: Style.adjust(32),
    position: "absolute",
    bottom: Style.adjust(32),
  },
});
