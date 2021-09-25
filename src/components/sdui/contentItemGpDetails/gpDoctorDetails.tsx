import React, { memo } from "react";
import { View, StyleSheet, ViewStyle, TextStyle } from "react-native";
import {
  MedicalPractices_getMedicalPractices_practicioners,
  MedicalPractices_getMedicalPractices,
} from "@graphql/_core/schema";
import { Style, Colours } from "@styles";
import { DoctorIcon, TextTemplate } from "@atoms";
import SearchItem, { ISearchItem } from "@atoms/search/search-item";
import FibTitle from "@atoms/fib/title/title";
import { PressableWithDelay } from "@components/molecules";

interface FibDoctorSelectProps {
  onSelectGP: (gp: MedicalPractices_getMedicalPractices_practicioners) => void;
  selectedPractice: MedicalPractices_getMedicalPractices;
  setManualInput: () => void;
}

export const GpDoctorDetails = memo((props: FibDoctorSelectProps) => {
  const { selectedPractice, onSelectGP, setManualInput } = props;

  const doctors: ISearchItem<
    MedicalPractices_getMedicalPractices_practicioners
  >[] = selectedPractice?.practicioners.map(
    (doctor: MedicalPractices_getMedicalPractices_practicioners, index: number) => {
      return {
        ...doctor,
        onPress: () => onSelectGP(doctor),
        icon: <DoctorIcon color={!index ? Colours.primary.p600 : null} />,
        text: [`Dr. ${doctor.name}`],
      };
    }
  );

  return (
    <View style={styles.wrapper}>
      <View style={styles.header}>
        <FibTitle title={`Select your GP at: ${selectedPractice.name}`} />
      </View>
      <View style={styles.listWrapper}>
        {doctors.map((x) => (
          <View key={x.name}>{SearchItem({ item: x, index: 1, separators: null })}</View>
        ))}

        <View style={styles.footerWrapper}>
          <PressableWithDelay onPress={setManualInput}>
            <TextTemplate type="b2b" color={Colours.darkHotPink}>
              Can&apos;t find your GP?
            </TextTemplate>
          </PressableWithDelay>
        </View>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  header: {
    marginBottom: Style.adjust(16),
  } as ViewStyle,
  wrapper: {
    flex: 1,
  } as ViewStyle,
  listWrapper: {
    marginBottom: Style.adjust(16),
    flex: 1,
    backgroundColor: Colours.neutral.n50,
  } as ViewStyle,
  footerWrapper: {
    paddingHorizontal: Style.adjust(32),
    flex: 1,
    marginVertical: Style.adjust(24),
  } as ViewStyle,
  textStyle: {
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.6,
    color: Colours.neutral.n800,
  } as TextStyle,
});
