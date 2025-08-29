import { Style, Colours, StyleSheet } from "@styles";

export default StyleSheet.create({
  wrapper: {
    backgroundColor: Colours.neutral.white,
    flex: 1,
  },
  elementWrapper: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: Style.adjust(16),
    paddingTop: Style.adjust(8),
    paddingBottom: Style.adjust(160),
  },
  title: {
    marginVertical: Style.adjust(12),
  },
  selectorWrapper: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-around",
    paddingVertical: Style.adjust(16),
  },
  bodySelected: {
    borderColor: Colours.primary.p600,
    backgroundColor: Colours.primary.p50,
  },
  buttonsWrapper: {
    alignItems: "center",
    bottom: Style.adjust(40),
    start: 0,
    position: "absolute",
    end: 0,
  },
  description: {
    marginBottom: Style.adjust(16),
  },
  scrollViewContainer: {
    flexGrow: 1,
  },
});
