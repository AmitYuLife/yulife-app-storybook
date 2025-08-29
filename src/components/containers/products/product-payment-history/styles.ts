import { Style, StyleSheet } from "@styles";

export const styles = StyleSheet.create({
  activityIndicatorWrapper: {
    ...StyleSheet.absoluteFillObject,
    alignItems: "center",
    justifyContent: "center",
  },
  wrapper: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
    height: Style.DEVICE_HEIGHT,
  },
  headingWrapper: {
    marginBottom: Style.adjust(8),
  },
  elementWrapper: {
    marginHorizontal: Style.adjust(32),
    marginTop: Style.adjust(32),
  },
  infoPanelWrapper: {
    marginTop: Style.adjust(20),
  },
});
