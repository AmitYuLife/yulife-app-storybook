import React, { memo, useState, useEffect, useCallback } from "react";
import { View, StyleSheet, ViewStyle, ScrollView, TextStyle, KeyboardAvoidingView, Platform } from "react-native";
import { Navigation } from "react-native-navigation";
import GenericHeadingAbsolute, { GenericHeadingPad } from "@atoms/generic-heading/generic-heading-absolute";
import { useBackHandler } from "@services/hooks/useBackHandler";
import { MODALS, ROUTES } from "@navigation/constants";
import { Colours, Style } from "@styles";
import { Button, SecondaryButton, Text } from "@atoms";
import { BeneficiaryItem } from "./beneficiary-item";
import { GetProductBeneficiaries_getProductBeneficiaries_beneficiaries as Beneficiary } from "@graphql/_core/schema";
import { BENEFICIARY_DETAILS, BENEFICIARIES_PERCENTAGE_ERROR, BENEFICIARY_DONE, ADD_BENEFICIARY } from "@ids";
import { showYuModal } from "@navigation/root";

interface Props {
  beneficiaries: Beneficiary[];
  updateShareOfBenefit: (beneficiaries: Beneficiary[]) => void;
  setShareLoading?: boolean;
  productId: string;
}

const keyboardBehavior = Platform.select({ ios: "padding" as "padding", android: null });
const MAX_SUM_ALLOCATED_PERCENTAGE = 100;
export const BeneficiaryScreen = memo((props: Props) => {
  const handleClose = useCallback(() => {
    Navigation.pop(ROUTES.beneficiary);
    return true;
  }, []);

  useBackHandler(handleClose);
  const { beneficiaries, setShareLoading, updateShareOfBenefit, productId } = props;
  const [focusIndex, setFocusIndex] = useState<number>(null);
  const [localBeneficiaries, setLocalBeneficiaries] = useState<Beneficiary[]>(beneficiaries);

  useEffect(() => {
    setLocalBeneficiaries(beneficiaries);
  }, [beneficiaries, setLocalBeneficiaries]);

  const showError =
    localBeneficiaries?.length > 0 &&
    localBeneficiaries.reduce((accumulator, currentValue) => {
      return accumulator + currentValue?.shareOfBenefit;
    }, 0) !== MAX_SUM_ALLOCATED_PERCENTAGE;

  const title = localBeneficiaries?.length ? "Edit Beneficiaries" : "Add Beneficiaries";
  const message = localBeneficiaries?.length
    ? "Set the allocated percentage for each beneficiary. The total must add up to 100%."
    : "Looks like you haven’t set an beneficiaries yet. Tap below to get started.";
  const bottomButtonLabel = localBeneficiaries?.length ? "Done" : "Skip for now";

  const onBeneficiaryAllocatedAmountChanged = useCallback(
    (beneficiary: Beneficiary, allocatedAmount: number) => {
      const updateBeneficiaries = localBeneficiaries.map((b) => {
        if (b.id === beneficiary.id) {
          const allocatedAmountLimit =
            allocatedAmount > MAX_SUM_ALLOCATED_PERCENTAGE ? MAX_SUM_ALLOCATED_PERCENTAGE : allocatedAmount;
          return { ...b, shareOfBenefit: allocatedAmountLimit };
        }

        return b;
      });

      let oneOfShareOfBenefitIsNullOrZero = false;
      const shouldUpdateShareBenefits =
        updateBeneficiaries.reduce((accumulator, currentValue) => {
          if (currentValue.shareOfBenefit === 0 || !currentValue.shareOfBenefit) {
            oneOfShareOfBenefitIsNullOrZero = true;
          }

          return accumulator + currentValue?.shareOfBenefit;
        }, 0) === MAX_SUM_ALLOCATED_PERCENTAGE;

      if (shouldUpdateShareBenefits && !oneOfShareOfBenefitIsNullOrZero) {
        updateShareOfBenefit(updateBeneficiaries);
      }

      setLocalBeneficiaries(updateBeneficiaries);
    },
    [localBeneficiaries, setLocalBeneficiaries, updateShareOfBenefit]
  );

  const showAddBeneficiaryModal = useCallback(
    (beneficiaryProductId: string, beneficiary?: Beneficiary) =>
      showYuModal({
        component: {
          id: MODALS.addBeneficiary,
          name: MODALS.addBeneficiary,
          passProps: {
            beneficiary,
            productId: beneficiaryProductId,
          },
        },
      }),
    []
  );

  const onBottomButtonPress = useCallback(() => {
    if (!localBeneficiaries?.length) {
      return handleClose();
    }

    return showYuModal({
      component: {
        id: MODALS.defaultBeneficiaries,
        name: MODALS.defaultBeneficiaries,
        passProps: {
          onConfirmPress: () => {
            handleClose();
          },
          onCancelPress: () => {
            handleClose();
          },
        },
      },
    });
  }, [handleClose, localBeneficiaries]);

  return (
    <View style={styles.wrapper}>
      <GenericHeadingPad />
      <KeyboardAvoidingView behavior={keyboardBehavior} style={styles.kav}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollViewContainer}
          keyboardShouldPersistTaps="handled"
        >
          <Text bold={true} style={styles.heading}>
            {title}
          </Text>
          <Text style={styles.description}>{message}</Text>

          {localBeneficiaries.map((beneficiary, index) => {
            const isFocused = focusIndex === index;
            const onBeneficiaryPress = () => {
              showAddBeneficiaryModal(productId, beneficiary);
            };

            const onChangeText = (val: string) => onBeneficiaryAllocatedAmountChanged(beneficiary, parseInt(val, 10));
            const hasFocusActive = (active: boolean) => (active ? setFocusIndex(index) : setFocusIndex(null));

            return (
              <View key={index}>
                <BeneficiaryItem
                  firstName={beneficiary.firstName}
                  lastName={beneficiary.lastName}
                  relationship={beneficiary.relationship}
                  shareOfBenefit={beneficiary.shareOfBenefit}
                  onBeneficiaryPress={onBeneficiaryPress}
                  onChangeText={onChangeText}
                  isFocused={isFocused}
                  showError={showError}
                  hasFocusActive={hasFocusActive}
                  testID={BENEFICIARY_DETAILS(
                    beneficiary.shareOfBenefit,
                    beneficiary.firstName,
                    beneficiary.lastName,
                    beneficiary.relationship
                  )}
                />
              </View>
            );
          })}

          <SecondaryButton
            wrapperStyle={styles.addBeneficiaryButtonWrapper}
            label="Add Beneficiary"
            onPress={() => showAddBeneficiaryModal(productId, null)}
            testID={ADD_BENEFICIARY}
          />

          <View style={showError ? styles.bottomElementsWrapperWithError : styles.bottomElementsWrapper}>
            <View style={styles.errorAndButtonWrapper}>
              {showError && <Error />}
              <Button
                wrapperStyle={styles.doneButtonWrapper}
                label={bottomButtonLabel}
                onPress={onBottomButtonPress}
                isLoading={setShareLoading}
                disabled={showError}
                testID={BENEFICIARY_DONE}
              />
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
      <GenericHeadingAbsolute logo="yulife" onLeftIconPress={handleClose} />
    </View>
  );
});

const Error = () => {
  return (
    <Text style={styles.error} testID={BENEFICIARIES_PERCENTAGE_ERROR}>
      Oops! Please double-check your percentages. The sum should add up to 100%.
    </Text>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  } as ViewStyle,

  scrollViewContainer: {
    paddingHorizontal: Style.adjust(32),
    paddingTop: Style.adjust(24),
    flexGrow: 1,
  },
  heading: {
    color: Colours.neutral.n800,
    fontSize: Style.adjust(32),
    letterSpacing: Style.adjust(1),
    marginBottom: Style.adjust(16),
  } as TextStyle,
  description: {
    color: Colours.neutral.n800,
    fontSize: Style.adjust(16),
    lineHeight: Style.adjust(24),
    letterSpacing: Style.adjust(0.6),
    maxWidth: Style.adjust(311),
    marginBottom: Style.adjust(32),
  } as TextStyle,
  kav: {
    flex: 1,
    height: "100%",
  } as ViewStyle,
  addBeneficiaryButtonWrapper: {
    marginTop: Style.adjust(16),
  },
  errorAndButtonWrapper: {
    position: "absolute",
    bottom: 32,
  },
  doneButtonWrapper: {
    marginTop: Style.adjust(32),
  },
  error: {
    color: "#FC0000",
    fontSize: Style.adjust(16),
    lineHeight: Style.adjust(24),
    letterSpacing: Style.adjust(0.6),
    maxWidth: Style.adjust(311),
    textAlign: "center",
    alignSelf: "center",
    marginTop: Style.adjust(16),
  } as TextStyle,
  bottomElementsWrapper: {
    flexGrow: 1,
    minHeight: Style.adjust(118),
    alignItems: "center",
  },
  bottomElementsWrapperWithError: {
    flexGrow: 1,
    minHeight: Style.adjust(210),
    alignItems: "center",
  },
});
