import React, { useRef, useState } from "react";
import { ScrollView, View, LayoutChangeEvent, KeyboardAvoidingView, Platform, Keyboard } from "react-native";
import { Pad, Text } from "@atoms";
import { Button, LinkButton } from "@molecules";
import { TextStyle, ViewStyle } from "react-native";
import { Colours, Style, StyleSheet } from "@styles";
import { GenericHeadingAbsolute, GenericHeadingPad } from "@organisms";
import { TextField } from "@components/molecules";
import { ConfirmationScreen } from "./confirmation.screen";
import { INPUT_BENEFICIARY_DETAIL, BENEFICIARY_CONTINUE } from "@ids";
import { t } from "@locale";
import { GetProductBeneficiariesQuery } from "@graphql/__generated";

type ButtonProps = React.ComponentProps<typeof Button>;
type Beneficiary = GetProductBeneficiariesQuery["getProductBeneficiaries"]["beneficiaries"][number];

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
    fullName: "",
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

  const allFieldsValid = beneficiary.firstName && beneficiary.lastName && beneficiary.relationship ? true : false;

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
      placeholder: t("placeholder.first_name"),
      value: beneficiary.firstName,
    },
    {
      onChange: (val: string) => {
        setBeneficiary({ ...beneficiary, lastName: val });
      },
      placeholder: t("placeholder.last_name"),
      value: beneficiary.lastName,
    },
    {
      onChange: (val: string) => {
        setBeneficiary({ ...beneficiary, phoneNumber: val });
      },
      placeholder: t("placeholder.phone_number"),
      value: beneficiary.phoneNumber,
      type: "PhoneNumber" as "PhoneNumber",
    },
    {
      onChange: (val: string) => {
        setBeneficiary({ ...beneficiary, relationship: val });
      },
      placeholder: t("placeholder.relation"),
      value: beneficiary.relationship,
    },
  ];

  const onDeleteConfirmed = async () => {
    deleteBeneficiary(beneficiary);
  };

  if (deleteBeneficiaryPressed) {
    return (
      <ConfirmationScreen
        title={t("modals.add_beneficiary.confirmation.title")}
        firstLabel={t("labels.cta.yes")}
        secondLabel={t("labels.cta.no")}
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
              {t("modals.add_beneficiary.title")}
            </Text>
            {inputs.map((item, index) => (
              <View onLayout={setLayout(index)} key={index}>
                <TextField
                  onFocus={onTextInputFocus(index)}
                  baseUnderlineColor={Colours.neutral.n200}
                  {...item}
                  testID={INPUT_BENEFICIARY_DETAIL(item.placeholder)}
                />
                <Pad height={20} />
              </View>
            ))}

            {!existingBeneficiary ? null : (
              <LinkButton
                wrapperStyle={styles.deleteButtonWrapper}
                translationKey="modals.add_beneficiary.delete_beneficiary_label"
                onPress={() => setDeleteBeneficiaryPressed(true)}
              />
            )}
          </View>
          <View style={styles.continueButtonMainWrapper}>
            <Button
              translationKey="labels.cta.continue"
              onPress={onPressContinue}
              disabled={!allFieldsValid}
              wrapperStyle={styles.continueButtonWrapper}
              isLoading={updateBeneficiaryLoading}
              testID={BENEFICIARY_CONTINUE}
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
    backgroundColor: Colours.overlay.white90,
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
    marginStart: -10,
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
