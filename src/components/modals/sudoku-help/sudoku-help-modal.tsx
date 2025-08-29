import React, { memo, useCallback } from "react";
import { Image, ScrollView, View } from "react-native";
import { TextTemplate, Wrapper } from "@atoms";
import { Style, StyleSheet } from "@styles";
import GenericOverlay from "@components/modals/generic-overlay/generic-overlay";
import { MODALS } from "@navigation/constants";
import { Navigation } from "@navigation/main";
import { useBackHandler, useTranslation } from "@hooks";

const SudokuHelpModal = () => {
  const onClose = useCallback(() => Navigation.dismissModal(MODALS.sudokuHelp), []);

  const t = useTranslation([
    "sudoku.help.title",
    "sudoku.help.outline",
    "sudoku.help.1",
    "sudoku.help.2",
    "sudoku.help.3",
    "sudoku.help.4",
    "sudoku.help.5",
    "sudoku.help.6",
    "sudoku.help.7",
  ]);

  useBackHandler(() => {
    onClose();
    return true;
  });

  return (
    <GenericOverlay onClose={onClose}>
      <ScrollView contentContainerStyle={styles.wrapper}>
        <Wrapper alignItems="center">
          <View style={styles.title}>
            <TextTemplate type="h2">{t["sudoku.help.title"]}</TextTemplate>
          </View>
          <View style={styles.message}>
            <TextTemplate type="b2">{t["sudoku.help.outline"]}</TextTemplate>
          </View>

          <Image style={styles.helpImage} resizeMode="contain" source={require("./sudoku-help.png")} />
          <View style={styles.help}>
            <TextTemplate type="b2b">{t["sudoku.help.1"]}</TextTemplate>
            <TextTemplate type="b2">• {t["sudoku.help.2"]}</TextTemplate>
            <TextTemplate type="b2">• {t["sudoku.help.3"]}</TextTemplate>
            <TextTemplate type="b2">• {t["sudoku.help.4"]}</TextTemplate>
            <TextTemplate type="b2">• {t["sudoku.help.5"]}</TextTemplate>
            <TextTemplate type="b2">• {t["sudoku.help.6"]}</TextTemplate>
            <TextTemplate type="b2">• {t["sudoku.help.7"]}</TextTemplate>
          </View>
        </Wrapper>
      </ScrollView>
    </GenericOverlay>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    alignItems: "center",
  },
  connectButtonWrapper: {
    marginTop: Style.isShortToMediumAndroid() ? Style.adjust(16) : Style.adjust(32),
  },
  title: {
    marginTop: Style.isShortToMediumAndroid() ? Style.adjust(24) : Style.adjust(32),
    marginBottom: Style.adjust(16),
  },
  message: {
    marginBottom: Style.adjust(16),
  },
  help: {
    marginTop: Style.adjust(16),
    marginBottom: Style.adjust(160),
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  helpImage: {
    width: Style.adjust(Style.DEVICE_WIDTH * 0.8),
    height: Style.adjust(Style.DEVICE_WIDTH * 0.8),
    marginVertical: Style.adjust(20),
  },
});

export default memo(SudokuHelpModal);
