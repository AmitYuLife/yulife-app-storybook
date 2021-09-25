import React, { memo } from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import { Style, Colours } from "@styles";
import {
  MedicalPractices_getMedicalPractices_practicioners,
  MedicalPractices_getMedicalPractices,
} from "@graphql/_core/schema";
import { GP_CONFIRMATION } from "@ids";
import { Button, DoctorIcon, MedicalPracticeIcon } from "@atoms";
import SearchItem from "@atoms/search/search-item";
import FibTitle from "@atoms/fib/title/title";

interface Props {
  onContinue: () => void;
  loading: boolean;
  gp: MedicalPractices_getMedicalPractices_practicioners;
  practice: MedicalPractices_getMedicalPractices;
}

export function formatPracticeAddress(practice: MedicalPractices_getMedicalPractices): string[] {
  const firstLine = practice.name;

  const practiceTown =
    practice.address4 || practice.address5
      ? `${practice.address4 ?? ""} ${practice.address5 ?? ""}`
      : practice.address3;
  const address3 = practice.address4 && practice.address5 && practice.address3 ? `${practice.address3}` : "";
  const secondLine = `${practice.address1 ?? ""} ${practice.address2 ?? ""} ${address3}`;
  const thirdLine = `${practiceTown}${practiceTown && practice.postCode ? ", " : ""}${practice.postCode ?? ""}`;
  return [firstLine, secondLine, thirdLine];
}

export const GpConfirm = memo((props: Props) => {
  const { gp, practice, onContinue } = props;

  const gpName = gp?.name;
  const gpDoctorItem = { isConfirm: true, icon: <DoctorIcon color={Colours.primary.p600} />, text: [gpName] };

  const gpPracticeItem = {
    ...practice,
    isConfirm: true,
    icon: <MedicalPracticeIcon color={Colours.primary.p600} />,
    text: formatPracticeAddress(practice),
  };

  return (
    <View style={styles.wrapper}>
      <View style={styles.header}>
        <FibTitle title={`Please confirm your GP`} />
      </View>
      <View style={styles.viewWrapper}>
        <View
          style={styles.doctorWrapper}
          testID={GP_CONFIRMATION(gp.name, practice.name, practice.address1, practice.postCode)}
        >
          <SearchItem item={gpDoctorItem} index={0} separators={null} />
        </View>
        <View style={styles.practiceWrapper}>
          <SearchItem item={gpPracticeItem} index={0} separators={null} />
        </View>
      </View>
      <View style={styles.buttonWrapper}>
        <Button label="Continue" onPress={onContinue} />
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  wrapper: { flex: 1 } as ViewStyle,
  header: {
    marginBottom: Style.adjust(16),
  } as ViewStyle,
  viewWrapper: {
    flex: 1,
    paddingRight: Style.adjust(32),
  } as ViewStyle,
  doctorWrapper: {
    minHeight: Style.adjust(56),
    marginTop: Style.adjust(16),
  } as ViewStyle,
  practiceWrapper: {
    minHeight: Style.adjust(104),
  } as ViewStyle,
  buttonWrapper: {
    padding: Style.adjust(32),
  } as ViewStyle,
});
