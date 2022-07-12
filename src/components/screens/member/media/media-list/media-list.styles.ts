import { Style } from "@styles";
import { StyleSheet } from "react-native";

export const IMAGE_WIDTH = Style.adjust(120);
export const IMAGE_HEIGHT = Style.adjust(104);
export const BOX_HEIGHT = Style.adjust(120);

export const styles = StyleSheet.create({
  wrapper: {
    marginBottom: Style.adjust(16),
  },
  main: {
    width: "100%",
    padding: Style.adjust(8),
    flexDirection: "row",
  },
  imageWrapper: {
    borderRadius: Style.adjust(12),
    overflow: "hidden",
  },
  detailWrapper: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    marginLeft: Style.adjust(16),
  },
  details: {
    marginTop: Style.adjust(8),
    flexDirection: "row",
    alignItems: "center",
  },
  arrow: {
    alignSelf: "center",
  },
  coin: {
    width: Style.adjust(16),
    height: Style.adjust(16),
    marginLeft: Style.adjust(4),
  },
});
