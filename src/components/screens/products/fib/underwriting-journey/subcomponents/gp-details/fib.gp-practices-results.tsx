import React, { useCallback, memo } from "react";
import { View, StyleSheet, ViewStyle, TextStyle } from "react-native";
import { Style, Colours } from "@styles";
import { useBackHandler } from "../../../../../../../services/hooks/useBackHandler";
import { ScrollableLayout } from "@molecules";
import FibTitle from "@atoms/fib/title/title";
import {
  MedicalPractices_getMedicalPractices,
  MedicalPractices_getMedicalPractices_practicioners,
} from "@graphql/_core/schema/MedicalPractices";
import { FibMedicalResult } from "./fib.medical-result";
import { Text } from "@atoms";

interface Props {
  onClose: () => void;
  onNavigateBack: () => void;
  loading?: boolean;
  data: MedicalPractices_getMedicalPractices[] | MedicalPractices_getMedicalPractices_practicioners[] | any;
  selectedPractice?: MedicalPractices_getMedicalPractices;
  onPress: (
    practice: MedicalPractices_getMedicalPractices | MedicalPractices_getMedicalPractices_practicioners
  ) => void;
  resultType: "practice" | "GP";
  onTryAgain?: () => void;
  onEnterManually?: () => void;
}

function _FibGPPracticesResultsScreen(props: Props) {
  const { onNavigateBack, onClose, data, onPress, resultType, onTryAgain, selectedPractice, onEnterManually } = props;

  const backHandler = useCallback(() => {
    onNavigateBack();
    return true;
  }, [onNavigateBack]);

  useBackHandler(backHandler);

  const title =
    resultType === "practice"
      ? data?.length > 0
        ? "Please select your medical practice:"
        : "We found 0 medical practices with that name."
      : `Please select your GP at ${selectedPractice.name}:`;

  const secondButtonLabel =
    resultType === "practice"
      ? data?.length > 0
        ? "Couldn’t find your practice?"
        : "Enter manually"
      : "Couldn’t find your doctor?";

  return (
    <ScrollableLayout
      buttonAction={onTryAgain}
      onLeftIconPress={onNavigateBack}
      buttonTitle="Try again"
      heading="GP Report"
      onRightIconPress={onClose}
      hideFirstButton={data?.length > 0}
      secondButtonLabel={secondButtonLabel}
      secondButtonAction={onEnterManually}
    >
      <View>
        <FibTitle title={title} />
        <View style={styles.resultsWrapper}>
          {data?.length > 0 ? (
            data?.map((medicalPractice: any, index: number) => {
              return (
                <FibMedicalResult
                  key={medicalPractice.organisationCode + index}
                  icon={resultType}
                  index={index}
                  header={medicalPractice?.name}
                  firstLine={medicalPractice?.address1}
                  secondLine={medicalPractice?.address2}
                  thirdLine={medicalPractice?.postCode}
                  onPress={() => onPress(medicalPractice)}
                />
              );
            })
          ) : (
            <Text style={styles.text}>
              Please try again and make sure you enter the correct name. Alternatively, you enter the details in
              manually.
            </Text>
          )}
        </View>
      </View>
    </ScrollableLayout>
  );
}

export const FibGPPracticesResultsScreen = memo(_FibGPPracticesResultsScreen);

const styles = StyleSheet.create({
  text: {
    fontSize: Style.adjust(16),
    lineHeight: Style.adjust(24),
    letterSpacing: 1,
    color: Colours.neutral.n900,
  } as TextStyle,
  resultsWrapper: {
    marginTop: Style.adjust(32),
    paddingHorizontal: Style.adjust(24),
  } as ViewStyle,
});
