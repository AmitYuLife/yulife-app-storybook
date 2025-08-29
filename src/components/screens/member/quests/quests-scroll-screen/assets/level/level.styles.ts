import { Style } from "../../../../../../../styles";

import { StyleSheet } from "@styles";
export const CIRCLE_SIZE_UNADJUSTED = 50;
export const CIRCLE_SIZE = Style.adjust(CIRCLE_SIZE_UNADJUSTED);
export const LEVEL_SIZE = CIRCLE_SIZE + Style.adjust(12);

const styles = StyleSheet.create({
  column: {
    flexDirection: "column",
  },
});

export default styles;
