import React, { useCallback, memo } from "react";
import { View, FlatList, StyleSheet, ViewStyle, TextStyle } from "react-native";
import {
  MedicalPractices_getMedicalPractices_practicioners,
  MedicalPractices_getMedicalPractices,
} from "../../../../../../../graphql/_core/schema";
import { useBackHandler } from "../../../../../../../services/hooks/useBackHandler";
import { Style, Colours } from "../../../../../../../styles";
import { DoctorIcon, Text } from "@atoms";
import GenericHeadingAbsolute, {
  GenericHeadingPad,
} from "../../../../../../atoms/generic-heading/generic-heading-absolute";
import SearchItem, { ISearchItem } from "../../../../../../atoms/search/search-item";
import GPTitle from "./fib.gp-title";

interface FibDoctorSelectProps {
  onClose: () => void;
  onNavigateBack: () => void;
  onSelectGP: (gp: ISearchItem<MedicalPractices_getMedicalPractices_practicioners>) => void;
  selectedPractice: MedicalPractices_getMedicalPractices;
  setManualInput: () => void;
}

function keyExtractor(item: ISearchItem<MedicalPractices_getMedicalPractices_practicioners>, index: number) {
  return item.name + index;
}

function _FibGPDoctorSelect(props: FibDoctorSelectProps) {
  const { onNavigateBack, onClose, selectedPractice, onSelectGP, setManualInput } = props;

  const backHandler = useCallback(() => {
    onNavigateBack();
    return true;
  }, [onNavigateBack]);

  useBackHandler(backHandler);

  const doctors: ISearchItem<
    MedicalPractices_getMedicalPractices_practicioners
  >[] = selectedPractice?.practicioners.map(
    (doctor: MedicalPractices_getMedicalPractices_practicioners, index: number) => {
      return {
        ...doctor,
        onPress: (doctor: ISearchItem<MedicalPractices_getMedicalPractices_practicioners>) => {
          onSelectGP(doctor);
        },
        icon: <DoctorIcon color={!index ? Colours.primary.p600 : null} />,
        text: [`Dr. ${doctor.name}`],
      };
    }
  );

  return (
    <View style={styles.wrapper}>
      <GenericHeadingPad />
      <GPTitle title={`Select your GP at ${selectedPractice.name}:`} />
      <View style={styles.listWrapper}>
        <FlatList
          data={doctors}
          renderItem={SearchItem}
          keyExtractor={keyExtractor}
          ListFooterComponent={
            <View style={styles.footerWrapper}>
              <Text bold={true} onPress={setManualInput} style={[styles.textStyle, styles.textColor]}>
                Can&apos;t find your GP?
              </Text>
            </View>
          }
        />
      </View>
      <GenericHeadingAbsolute heading="GP Report" onLeftIconPress={onNavigateBack} onRightIconPress={onClose} />
    </View>
  );
}

export const FibGPDoctorSelect = memo(_FibGPDoctorSelect);

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  } as ViewStyle,
  listWrapper: { marginBottom: Style.adjust(16), flex: 1, backgroundColor: Colours.neutral.n50 } as ViewStyle,
  footerWrapper: { paddingHorizontal: Style.adjust(32), flex: 1, marginVertical: Style.adjust(24) } as ViewStyle,
  textStyle: {
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.6,
    color: Colours.neutral.n800,
  } as TextStyle,
  textColor: {
    color: Colours.darkHotPink,
  } as TextStyle,
});
