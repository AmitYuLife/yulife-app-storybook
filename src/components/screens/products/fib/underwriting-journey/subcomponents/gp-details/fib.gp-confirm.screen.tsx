import React, { useCallback, memo } from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import { Style, Colours } from "@styles";
import { useBackHandler } from "../../../../../../../services/hooks/useBackHandler";
import {
  MedicalPractices_getMedicalPractices_practicioners,
  MedicalPractices_getMedicalPractices,
} from "@graphql/_core/schema";
import { GPInputForm } from "./fib.gp-manually-input.screen";
import { GP_CONFIRMATION } from "@ids";
import GenericHeadingAbsolute, {
  GenericHeadingPad,
} from "../../../../../../atoms/generic-heading/generic-heading-absolute";
import GPTitle from "./fib.gp-title";
import { Button, DoctorIcon, MedicalPracticeIcon } from "@atoms";
import SearchItem, { ISearchItem } from "../../../../../../atoms/search/search-item";
import { getPracticeAddress } from "@components/screens/products/fib/underwriting-journey/subcomponents/gp-details/fib.gp.helper";

interface Props {
  onClose: () => void;
  onNavigateBack: () => void;
  onContinue: () => void;
  loading: boolean;
  gp: ISearchItem<MedicalPractices_getMedicalPractices_practicioners>;
  practice: ISearchItem<MedicalPractices_getMedicalPractices>;
  manualInput?: GPInputForm;
}

function _FibGPConfirmScreen(props: Props) {
  const { onNavigateBack, onClose, gp, practice, onContinue, manualInput } = props;

  const backHandler = useCallback(() => {
    onNavigateBack();
    return true;
  }, [onNavigateBack]);

  useBackHandler(backHandler);

  const gpName = gp?.name || manualInput?.gpName;
  const gpDoctorItem = { isConfirm: true, icon: <DoctorIcon color={Colours.primary.p600} />, text: [gpName] };
  const manualInputText: string[] = manualInput
    ? [
        manualInput.practiceName,
        manualInput.practiceAddress,
        `${manualInput.practiceTown} ${manualInput.practicePostCode}`,
      ]
    : null;

  const gpPracticeItem = {
    ...practice,
    isConfirm: true,
    manualInput,
    icon: <MedicalPracticeIcon color={Colours.primary.p600} />,
    text: manualInputText || getPracticeAddress(practice),
  };

  return (
    <View style={styles.wrapper}>
      <GenericHeadingPad />
      <GPTitle title="Please confirm this is your GP:" />
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
      <GenericHeadingAbsolute
        heading="GP Report"
        onLeftIconPress={onNavigateBack}
        onRightIconPress={onClose}
        hideBorder={false}
      />
    </View>
  );
}

export const FibGPConfirmScreen = memo(_FibGPConfirmScreen);

const styles = StyleSheet.create({
  wrapper: { flex: 1 } as ViewStyle,
  viewWrapper: {
    flex: 1,
    backgroundColor: Colours.neutral.n50,
    paddingRight: Style.adjust(32),
    height: "100%",
    flexDirection: "column",
  } as ViewStyle,
  doctorWrapper: {
    backgroundColor: Colours.neutral.n50,
    minHeight: Style.adjust(56),
    marginTop: Style.adjust(16),
  } as ViewStyle,
  practiceWrapper: {
    backgroundColor: Colours.neutral.n50,
    minHeight: Style.adjust(104),
  } as ViewStyle,
  buttonWrapper: {
    padding: Style.adjust(32),
    backgroundColor: Colours.neutral.n50,
  } as ViewStyle,
});
