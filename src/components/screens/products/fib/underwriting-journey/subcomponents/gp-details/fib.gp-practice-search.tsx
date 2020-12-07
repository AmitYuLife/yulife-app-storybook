import React, { useCallback, memo } from "react";
import { View, StyleSheet, ViewStyle, TextStyle } from "react-native";
import { Style, Colours } from "@styles";
import { useBackHandler } from "../../../../../../../services/hooks/useBackHandler";
import { ScrollableLayout, TextField } from "@molecules";
import FibTitle from "@atoms/fib/title/title";

interface Props {
  onClose: () => void;
  onNavigateBack: () => void;
  onContinue: () => void;
  practiceName: string;
  setPracticeName: React.Dispatch<React.SetStateAction<string>>;
  loading: boolean;
}

function _FibGPPracticeSearchScreen(props: Props) {
  const { onNavigateBack, onContinue, onClose, practiceName, setPracticeName, loading } = props;

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
      isButtonDisabled={!practiceName.length}
      isButtonLoading={loading}
      removeCtaFade={true}
    >
      <FibTitle title="Please enter the name of your local medical practice below." />
      <View style={styles.paddingHorizontal}>
        <TextField onChange={(val) => setPracticeName(val)} placeholder="" inputTextStyle={styles.text} />
      </View>
    </ScrollableLayout>
  );
}

export const FibGPPracticeSearchScreen = memo(_FibGPPracticeSearchScreen);

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    lineHeight: 24,
    fontFamily: Style.FONT_FAMILY_PRIMARY,
    letterSpacing: 1,
    color: Colours.neutral.n900,
    marginBottom: 6,
  } as TextStyle,
  paddingHorizontal: {
    paddingHorizontal: Style.adjust(24),
  } as ViewStyle,
});
