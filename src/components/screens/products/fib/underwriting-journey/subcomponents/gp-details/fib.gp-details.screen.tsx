import React, { useCallback, memo, useState } from "react";
import { View, StyleSheet, ViewStyle, TextStyle } from "react-native";
import { Text, CheckBox } from "@atoms";
import { Style, Colours } from "@styles";
import { useBackHandler } from "../../../../../../../services/hooks/useBackHandler";
import { ScrollableLayout } from "@molecules";

interface Props {
  onClose: () => void;
  onNavigateBack: () => void;
  onContinue: () => void;
}

function _FibGPConsentScreen(props: Props) {
  const { onNavigateBack, onContinue, onClose } = props;

  const [consent, setConsent] = useState("no");

  const backHandler = useCallback(() => {
    onNavigateBack();
    return true;
  }, [onNavigateBack]);

  useBackHandler(backHandler);

  return (
    <ScrollableLayout
      buttonAction={onContinue}
      onLeftIconPress={onNavigateBack}
      buttonTitle="Continue"
      heading={"GP Report"}
      onRightIconPress={onClose}
      isButtonDisabled={false}
    >
      <View style={styles.viewWrapper}>
        <View style={styles.headerWrapper}>
          <Text style={styles.text} bold={true}>
            We may need to request a medical report from your doctor to verify the accuracy of the answers you have
            given during this sign-up journey. We will guard this information carefully and only share it with our
            insurance partners in accordance with our privacy policy.
          </Text>
        </View>
        <View style={styles.textWrapper}>
          <Text style={[styles.text, styles.textParagraph]}>
            You have the following rights relating to any medical report we request from your doctor: you can ask your
            doctor to see the report within 6 months of it being issued;
          </Text>
          <Text style={[styles.text, styles.textParagraph]}>
            You can also ask to see the report before your doctor sends it to us. It’s up to your doctor which parts of
            the report they share with you. You’ll have 21 days to arrange with your doctor to see your report. If you
            haven’t reviewed your report in this time, your doctor will send it to us;
          </Text>
          <Text style={[styles.text, styles.textParagraph]}>
            You can ask your doctor to amend any part of the report you consider misleading or incorrect before giving
            consent to the report being sent. If you do so, your doctor will either make the changes you request or
            attach a statement with your view on the incorrect or misleading information in the report.
          </Text>
        </View>
        <View style={styles.checkBoxWrapper}>
          <CheckBox
            checked={consent === "yes"}
            value="no"
            label="Tick here if you want to see your medical report before your doctor sends it to us."
            onChange={() => setConsent(consent === "yes" ? "no" : "yes")}
          />
        </View>
        <View>
          <Text style={styles.text}>By continuing you consent to your doctor supplying us with a medical report.</Text>
        </View>
      </View>
    </ScrollableLayout>
  );
}

export const FibGPConsentScreen = memo(_FibGPConsentScreen);

const styles = StyleSheet.create({
  viewWrapper: {
    marginHorizontal: 32,
    marginBottom: 48,
  } as ViewStyle,
  headerWrapper: {
    marginTop: 12,
    marginBottom: 32,
  } as ViewStyle,
  textWrapper: {
    borderBottomColor: Colours.neutral.n200,
    borderBottomWidth: 1,
  } as ViewStyle,
  textParagraph: {
    marginBottom: 32,
  } as TextStyle,
  text: {
    fontFamily: Style.FONT_FAMILY_PRIMARY,
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 1,
    color: Colours.neutral.n800,
  } as TextStyle,
  checkBoxWrapper: {
    marginRight: 32,
    paddingTop: 23,
    marginBottom: 24,
  } as ViewStyle,
});
