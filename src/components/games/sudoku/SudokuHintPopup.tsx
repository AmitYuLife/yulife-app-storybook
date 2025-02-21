import { HintPopup } from "@components/molecules";
import { useTranslation } from "@hooks";
import React, { useCallback } from "react";

interface IProps {
  onClose: () => void;
  onGetHint: () => void;
}

export const SudokuHintPopup = ({ onGetHint, onClose }: IProps) => {
  const t = useTranslation(["sudoku.hint_popup.title", "sudoku.hint_popup.message"]);

  const onHint = useCallback(() => {
    onGetHint();
    onClose();
  }, [onGetHint, onClose]);

  return (
    <HintPopup
      title={t["sudoku.hint_popup.title"]}
      description={t["sudoku.hint_popup.message"]}
      buttonTranslationKey="sudoku.hint_popup.cta"
      onPress={onHint}
      onClose={onClose}
    />
  );
};
