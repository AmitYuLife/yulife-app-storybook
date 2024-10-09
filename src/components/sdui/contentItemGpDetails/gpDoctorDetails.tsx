import React, { memo } from "react";
import { View, StyleSheet, ViewStyle, TextStyle } from "react-native";
import { Style, Colours } from "@styles";
import { DoctorIcon, TextTemplate } from "@atoms";
import { SearchItem, ISearchItem, Pressable } from "@molecules";
import { MedicalPracticesQuery } from "@graphql/__generated";

type MedicalPractices = MedicalPracticesQuery["getMedicalPractices"][number];
type MedicalPractioners = MedicalPractices["practicioners"][number];

interface DoctorSelectProps {
  onSelectGp: (gp: MedicalPractioners) => void;
  selectedGp?: Pick<MedicalPractioners, "name">;
  selectedPractice: MedicalPractices;
  setManualInput: () => void;
}

export const GpDoctorDetails = memo(
  ({ selectedGp, selectedPractice, onSelectGp, setManualInput }: DoctorSelectProps) => {
    const doctors: ISearchItem<MedicalPractioners>[] = selectedPractice?.practicioners.map((doctor) => ({
      ...doctor,
      onPress: () => onSelectGp(doctor),
      icon: <DoctorIcon />,
      text: [`Dr. ${doctor.name}`],
    }));

    return (
      <View style={styles.wrapper}>
        <View style={styles.header}>
          <TextTemplate type="h3" color={Colours.neutral.n800}>
            Your GP
          </TextTemplate>
        </View>
        <View style={styles.listWrapper}>
          {selectedGp ? (
            <View key={selectedGp.name}>
              {SearchItem({
                item: { ...selectedGp, icon: <DoctorIcon />, text: [`Dr. ${selectedGp.name}`] },
                index: 1,
                separators: null,
              })}
            </View>
          ) : (
            <>
              {doctors.map((doctor) => (
                <View key={doctor.organisationCode}>{SearchItem({ item: doctor, index: 1, separators: null })}</View>
              ))}
              <View style={styles.footerWrapper}>
                <Pressable delay={1000} onPress={setManualInput}>
                  <TextTemplate type="b2b" color={Colours.darkHotPink}>
                    Can&apos;t find your GP?
                  </TextTemplate>
                </Pressable>
              </View>
            </>
          )}
        </View>
      </View>
    );
  }
);

const styles = StyleSheet.create({
  header: {
    borderBottomWidth: 1,
    borderColor: Colours.neutral.n100,
    paddingBottom: Style.adjust(24),
    paddingTop: Style.adjust(32),
    paddingHorizontal: Style.adjust(24),
  } as ViewStyle,
  wrapper: {
    flex: 1,
  } as ViewStyle,
  listWrapper: {
    marginBottom: Style.adjust(16),
    flex: 1,
  } as ViewStyle,
  footerWrapper: {
    paddingHorizontal: Style.adjust(24),
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
