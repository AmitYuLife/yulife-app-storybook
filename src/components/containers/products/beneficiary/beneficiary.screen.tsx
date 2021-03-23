import React, { memo, useState } from "react";
import { View, StyleSheet, ViewStyle, ScrollView, TextStyle, KeyboardAvoidingView, Platform } from "react-native";
import { Navigation } from "react-native-navigation";
import GenericHeadingAbsolute, { GenericHeadingPad } from "@atoms/generic-heading/generic-heading-absolute";
import { useBackHandler } from "@services/hooks/useBackHandler";
import { MODALS, ROUTES } from "@navigation/constants";
import { Colours, Style } from "@styles";
import { Beneficiary } from "@components/modals/yuscreen/beneficiary/add-beneficiary-modal.screen";
import { Button, Text } from "@atoms";
import { BeneficiaryItem } from "./beneficiary-item";

interface Props {
  beneficiaries: Beneficiary[];
}

const keyboardBehavior = Platform.select({ ios: "padding" as "padding", android: null });
const MAX_SUM_ALLOCATED_PERCENTAGE = 100;
export const BeneficiaryScreen = memo((props: Props) => {
  const handleClose = () => {
    Navigation.pop(ROUTES.beneficiary);
    return true;
  };

  useBackHandler(handleClose);

  const { beneficiaries } = props;
  const [focusIndex, setFocusIndex] = useState<number>(null);
  const [localBeneficiaries, setLocalBeneficiaries] = useState<Beneficiary[]>(beneficiaries);

  //TODO error is not shown if one of percentage values is empty
  const showError =
    localBeneficiaries?.length > 0 &&
    localBeneficiaries.reduce((accumulator, currentValue) => {
      return accumulator + currentValue?.percentage;
    }, 0) !== MAX_SUM_ALLOCATED_PERCENTAGE;

  const title = localBeneficiaries?.length ? "Edit Beneficiaries" : "Add Beneficiaries";
  const message = localBeneficiaries?.length
    ? "Set the allocated percentage for each beneficiary. The total must add up to 100%."
    : "Looks like you haven’t set an beneficiaries yet. Tap below to get started.";
  const bottomButtonLabel = localBeneficiaries?.length ? "Done" : "Skip for now";

  const addBeneficiary = (beneficiary: Beneficiary) => {
    const id = `${Math.floor(Math.random() * 100)}`;
    const allocatedAmount = Math.floor(MAX_SUM_ALLOCATED_PERCENTAGE / (localBeneficiaries.length + 1));
    const updatedBeneficiaries = [...localBeneficiaries, { ...beneficiary, id }].map((b, index) => {
      const isLastBeneficiary = index === localBeneficiaries.length;
      if (isLastBeneficiary) {
        const lastBeneficiaryPercentage = MAX_SUM_ALLOCATED_PERCENTAGE - allocatedAmount * localBeneficiaries.length;
        return { ...b, percentage: lastBeneficiaryPercentage };
      }

      return { ...b, percentage: allocatedAmount };
    });

    setLocalBeneficiaries(updatedBeneficiaries);
  };

  const editBeneficiary = (beneficiary: Beneficiary) => {
    const updateBeneficiaries = localBeneficiaries.map((b) => {
      if (b.id === beneficiary.id) {
        return beneficiary;
      }

      return b;
    });

    setLocalBeneficiaries(updateBeneficiaries);
  };

  const deleteBeneficiary = (beneficiary: Beneficiary) => {
    const newBeneficiaries = localBeneficiaries.filter((b) => b.id !== beneficiary.id);
    const allocatedAmount = Math.floor(MAX_SUM_ALLOCATED_PERCENTAGE / newBeneficiaries.length);
    const updateBeneficiaries = newBeneficiaries.map((b, index) => {
      const isLastBeneficiary = index === newBeneficiaries.length - 1;
      if (isLastBeneficiary) {
        const lastBeneficiaryPercentage =
          MAX_SUM_ALLOCATED_PERCENTAGE - allocatedAmount * (newBeneficiaries.length - 1);
        return { ...b, percentage: lastBeneficiaryPercentage };
      }

      return { ...b, percentage: allocatedAmount };
    });

    setLocalBeneficiaries(updateBeneficiaries);
  };

  const onBeneficiaryAllocatedAmountChanged = (beneficiary: Beneficiary, allocatedAmount: number) => {
    const updateBeneficiaries = localBeneficiaries.map((b) => {
      if (b.id === beneficiary.id) {
        const allocatedAmountLimit =
          allocatedAmount > MAX_SUM_ALLOCATED_PERCENTAGE ? MAX_SUM_ALLOCATED_PERCENTAGE : allocatedAmount;
        return { ...b, percentage: allocatedAmountLimit };
      }

      return b;
    });

    setLocalBeneficiaries(updateBeneficiaries);
  };

  const showAddBeneficiaryModal = (
    beneficiary?: Beneficiary,
    addBeneficiary?: (beneficiary: Beneficiary) => void,
    editBeneficiary?: (beneficiary: Beneficiary) => void,
    deleteBeneficiary?: (beneficiary: Beneficiary) => void
  ) =>
    Navigation.showModal({
      component: {
        id: MODALS.addBeneficiary,
        name: MODALS.addBeneficiary,
        passProps: {
          beneficiary,
          onAddBeneficiary: addBeneficiary,
          editBeneficiary,
          deleteBeneficiary,
        },
      },
    });

  const onBottomButtonPress = () => {
    if (!localBeneficiaries?.length) {
      return handleClose();
    }

    return Navigation.showModal({
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
  };

  return (
    <View style={styles.wrapper}>
      <GenericHeadingPad />
      <KeyboardAvoidingView behavior={keyboardBehavior} style={styles.kav}>
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollViewContainer}>
          <Text bold={true} style={styles.heading}>
            {title}
          </Text>
          <Text style={styles.description}>{message}</Text>

          {localBeneficiaries.map((beneficiary, index) => {
            const isFocused = focusIndex === index;
            const onBeneficiaryPress = () =>
              showAddBeneficiaryModal(beneficiary, null, editBeneficiary, deleteBeneficiary);
            const onChangeText = (val: string) => onBeneficiaryAllocatedAmountChanged(beneficiary, parseInt(val));
            const hasFocusActive = (active: boolean) => (active ? setFocusIndex(index) : setFocusIndex(null));

            return (
              <View key={index}>
                <BeneficiaryItem
                  beneficiary={beneficiary}
                  onBeneficiaryPress={onBeneficiaryPress}
                  onChangeText={onChangeText}
                  isFocused={isFocused}
                  showError={showError}
                  hasFocusActive={hasFocusActive}
                />
              </View>
            );
          })}

          <Button
            wrapperStyle={styles.addBeneficiaryButtonWrapper}
            label="Add Beneficiary"
            onPress={() => showAddBeneficiaryModal(null, addBeneficiary)}
            type="Secondary"
          />

          <View style={showError ? styles.bottomElementsWrapperWithError : styles.bottomElementsWrapper}>
            <View style={styles.errorAndButtonWrapper}>
              {showError && <Error />}
              <Button
                wrapperStyle={styles.doneButtonWrapper}
                label={bottomButtonLabel}
                onPress={onBottomButtonPress}
                type="Primary"
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
  return <Text style={styles.error}>Oops! Please double-check your percentages. The sum should add up to 100%.</Text>;
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
