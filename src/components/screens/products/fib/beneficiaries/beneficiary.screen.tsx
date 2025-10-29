import { memo, useState, useEffect, useCallback } from "react";
import { View, ViewStyle, ScrollView, TextStyle, KeyboardAvoidingView, Platform } from "react-native";
import { Navigation } from "@navigation/main";
import { GenericHeadingPad, GenericHeadingAbsolute } from "@organisms";
import { useBackHandler } from "@hooks";
import { MODALS, ROUTES } from "@navigation/constants";
import { Colours, Style, StyleSheet } from "@styles";
import { Text } from "@atoms";
import { Button, SecondaryButton } from "@molecules";
import { BeneficiaryItem } from "./beneficiary-item";
import { GetProductBeneficiariesQuery } from "@graphql/__generated";
import { BENEFICIARY_DETAILS, BENEFICIARIES_PERCENTAGE_ERROR, BENEFICIARY_DONE, ADD_BENEFICIARY } from "@ids";
import { showYuModal } from "@navigation/root";
import { t } from "@locale";

type IBeneficiaries = GetProductBeneficiariesQuery["getProductBeneficiaries"]["beneficiaries"];
interface Props {
  beneficiaries: IBeneficiaries;
  updateShareOfBenefit: (beneficiaries: IBeneficiaries) => void;
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
  const [localBeneficiaries, setLocalBeneficiaries] = useState<IBeneficiaries>(beneficiaries);

  useEffect(() => {
    setLocalBeneficiaries(beneficiaries);
  }, [beneficiaries, setLocalBeneficiaries]);

  const showError =
    localBeneficiaries?.length > 0 &&
    localBeneficiaries.reduce((accumulator, currentValue) => {
      return accumulator + currentValue?.shareOfBenefit;
    }, 0) !== MAX_SUM_ALLOCATED_PERCENTAGE;

  const title = localBeneficiaries?.length
    ? t("screens.products.beneficiary.edit.title")
    : t("screens.products.beneficiary.add.title");
  const message = localBeneficiaries?.length
    ? t("screens.products.beneficiary.edit.message")
    : t("screens.products.beneficiary.add.message");
  const bottomButtonTranslationKey = localBeneficiaries?.length
    ? "labels.cta.done"
    : "screens.products.beneficiary.labels.skip";

  const onBeneficiaryAllocatedAmountChanged = useCallback(
    (beneficiary: IBeneficiaries[0], allocatedAmount: number) => {
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
    (beneficiaryProductId: string, beneficiary?: IBeneficiaries[0]) =>
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

          {localBeneficiaries?.map((beneficiary, index) => {
            const isFocused = focusIndex === index;
            const onBeneficiaryPress = () => {
              showAddBeneficiaryModal(productId, beneficiary);
            };

            const onChangeText = (val: string) => onBeneficiaryAllocatedAmountChanged(beneficiary, parseInt(val, 10));
            const hasFocusActive = (active: boolean) => (active ? setFocusIndex(index) : setFocusIndex(null));

            return (
              <View key={index}>
                <BeneficiaryItem
                  fullName={beneficiary.fullName}
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
            translationKey="screens.products.beneficiary.labels.add"
            onPress={() => showAddBeneficiaryModal(productId, null)}
            testID={ADD_BENEFICIARY}
          />

          <View style={showError ? styles.bottomElementsWrapperWithError : styles.bottomElementsWrapper}>
            <View style={styles.errorAndButtonWrapper}>
              {showError ? <Error /> : null}
              <Button
                wrapperStyle={styles.doneButtonWrapper}
                translationKey={bottomButtonTranslationKey}
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
      {t("screens.products.beneficiary.error")}
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
