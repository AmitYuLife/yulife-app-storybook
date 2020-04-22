import { CaretDirection } from "./tooltip";
import styles from "./toolttip.styles";

export function getStyleFromCaretPosition(caretPosition: CaretDirection) {
  switch (caretPosition) {
    case "right":
      return styles.caretRight;
    case "left":
      return styles.caretLeft;
    case "bottom":
      return styles.caretBottom;
    case "top":
    default:
      return styles.caretTop;
  }
}
