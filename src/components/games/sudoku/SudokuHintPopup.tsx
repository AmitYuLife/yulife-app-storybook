import { CloseSvg, TextTemplate } from "@atoms";
import { Pressable, SecondaryButton } from "@components/molecules";
import { useTranslation } from "@hooks";
import { Colours, Style } from "@styles";
import React, { useCallback } from "react";
import { StyleSheet, View } from "react-native";

interface IProps {
  onClose: () => void;
  onGetHint: () => void;
}

export const SudokuHintPopup = ({ onGetHint, onClose }: IProps) => {
  const t = useTranslation(["sudoku.hint_popup.title", "sudoku.hint_popup.message", "sudoku.hint_popup.cta"]);

  const onHint = useCallback(() => {
    onGetHint();
    onClose();
  }, [onGetHint, onClose]);

  return (
    <View style={styles.hintPopupContent}>
      <View style={styles.hintDescription}>
        <View style={styles.hintTitle}>
          <TextTemplate type="b1b">{t["sudoku.hint_popup.title"]}</TextTemplate>
          <Pressable onPress={onClose} delay={1000}>
            <CloseSvg stroke={Colours.darkestGray} size={Style.adjust(22)} />
          </Pressable>
        </View>
        <TextTemplate type="b2">{t["sudoku.hint_popup.message"]}</TextTemplate>
      </View>
      <View>
        <SecondaryButton wrapperStyle={styles.button} onPress={onHint} translationKey="sudoku.hint_popup.cta" />
      </View>
    </View>
  );
};

export const styles = StyleSheet.create({
  hintPopupContent: {
    paddingHorizontal: Style.adjust(20),
    paddingVertical: Style.adjust(10),
    paddingTop: Style.adjust(20),
  },
  hintDescription: {
    marginBottom: Style.adjust(15),
  },
  hintTitle: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: Style.adjust(10),
  },
  button: {
    flex: 1,
    width: "100%",
  },
});
