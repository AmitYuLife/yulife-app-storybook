import { Style, StyleSheet } from "@styles";

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
    marginStart: Style.adjust(16),
  },
  titleWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  details: {
    flexDirection: "row",
    alignItems: "center",
  },
  arrow: {
    marginTop: Style.adjust(-15),
    alignSelf: "center",
  },
  coin: {
    width: Style.adjust(16),
    height: Style.adjust(16),
    marginStart: Style.adjust(4),
  },
  detailsWrapper: {
    flex: 1,
  },
  descriptionWrapper: {
    flexDirection: "row",
    flex: 1,
    paddingEnd: Style.adjust(5),
  },
  tagWrapper: {
    marginTop: Style.adjust(5),
  },
});
