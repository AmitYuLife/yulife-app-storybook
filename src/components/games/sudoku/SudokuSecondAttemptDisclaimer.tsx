import { TextTemplate } from "@atoms";
import { CtaWarningSVG } from "@components/molecules/info-panel/svgs";
import { useTranslation } from "@hooks";
import { Style } from "@styles";
import colours from "@styles/colours";
import React, { memo } from "react";
import { StyleSheet, View } from "react-native";

const SudokuSecondAttemptDisclaimer = () => {
  const t = useTranslation(["sudoku.staging.secondAttemptDisclaimer"]);

  return (
    <View style={styles.wrapper}>
      <CtaWarningSVG size={Style.adjust(30)} color={colours.status.wa300} />
      <View style={styles.textWrapper}>
        <TextTemplate type="l1">{t["sudoku.staging.secondAttemptDisclaimer"]}</TextTemplate>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    padding: Style.adjust(15),
    borderWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    borderColor: colours.status.wa300,
    backgroundColor: colours.sudoku.warning,
    marginTop: Style.adjust(10),
    borderRadius: Style.adjust(10),
  },
  textWrapper: {
    flex: 1,
    paddingStart: Style.adjust(15),
  },
});

export default memo(SudokuSecondAttemptDisclaimer);
