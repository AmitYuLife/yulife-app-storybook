import React, { useCallback, memo } from "react";
import { View, StyleSheet, ViewStyle, TextStyle } from "react-native";
import { Style, Colours } from "@styles";
import { useBackHandler } from "../../../../../../../services/hooks/useBackHandler";
import { ScrollableLayout } from "@molecules";
import {
  MedicalPractices_getMedicalPractices_practicioners,
  MedicalPractices_getMedicalPractices,
} from "@graphql/_core/schema";
import FibTitle from "@atoms/fib/title/title";
import { Text } from "@atoms";
import { GPInputForm } from "./fib.gp-manually-input.screen";

interface Props {
  onClose: () => void;
  onNavigateBack: () => void;
  onContinue: () => void;
  loading: boolean;
  gp: MedicalPractices_getMedicalPractices_practicioners;
  practice: MedicalPractices_getMedicalPractices;
  manualInput?: GPInputForm;
}

function _FibGPConfirmScreen(props: Props) {
  const { onNavigateBack, onContinue, onClose, loading, gp, practice, manualInput } = props;

  const backHandler = useCallback(() => {
    onNavigateBack();
    return true;
  }, [onNavigateBack]);

  useBackHandler(backHandler);

  return (
    <ScrollableLayout
      buttonAction={onContinue}
      isButtonLoading={loading}
      isButtonDisabled={loading}
      onLeftIconPress={onNavigateBack}
      buttonTitle="Continue"
      heading={"GP Report"}
      onRightIconPress={onClose}
    >
      <FibTitle title="Please confirm this is your GP and we will get in touch with them" />
      <View style={styles.viewWrapper}>
        <View style={styles.gpWrapper}>
          <Text bold={true} style={StyleSheet.flatten([styles.text, styles.header])}>
            {manualInput ? manualInput.gpName : gp.name}
          </Text>
        </View>
        <View>
          {manualInput ? (
            <>
              <Text style={styles.text}>{manualInput.practiceName}</Text>
              <Text style={styles.text}>{manualInput.practiceAddress}</Text>
              <Text style={styles.text}>{manualInput.practiceTown}</Text>
              <Text style={styles.text}>{manualInput.practicePostCode}</Text>
            </>
          ) : (
            <>
              <Text style={styles.text}>{practice.name}</Text>
              {practice.address1 ? <Text style={styles.text}>{practice.address1}</Text> : null}
              {practice.address2 ? <Text style={styles.text}>{practice.address2}</Text> : null}
              {practice.address3 ? <Text style={styles.text}>{practice.address3}</Text> : null}
              {practice.address4 ? <Text style={styles.text}>{practice.address4}</Text> : null}
              {practice.address5 ? <Text style={styles.text}>{practice.address5}</Text> : null}
              {practice.postCode ? <Text style={styles.text}>{practice.postCode}</Text> : null}
            </>
          )}
        </View>
      </View>
    </ScrollableLayout>
  );
}

export const FibGPConfirmScreen = memo(_FibGPConfirmScreen);

const styles = StyleSheet.create({
  viewWrapper: {
    marginHorizontal: Style.adjust(24),
    marginBottom: Style.adjust(48),
  } as ViewStyle,
  gpWrapper: {
    marginVertical: Style.adjust(24),
  } as ViewStyle,
  text: {
    fontSize: Style.adjust(16),
    lineHeight: Style.adjust(24),
    letterSpacing: 1,
    color: Colours.neutral.n800,
  } as TextStyle,
  header: {
    fontSize: Style.adjust(20),
  } as TextStyle,
});
