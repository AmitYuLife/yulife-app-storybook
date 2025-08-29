import { Colours, Style, StyleSheet } from "@styles";

export const permissionsStyles = StyleSheet.create({
  settingsHeader: {
    marginTop: Style.adjust(10),
    marginBottom: Style.adjust(24),
  },
  paddingHorizontal24: {
    paddingHorizontal: Style.adjust(24),
  },
  switchGoogleFitWrapper: {
    paddingHorizontal: Style.adjust(24),
    marginBottom: Style.adjust(32),
  },
  googleFitActionButton: {
    paddingHorizontal: Style.adjust(24),
    marginBottom: Style.adjust(12),
  },
  infoErrorWrapperStyle: {
    marginTop: Style.adjust(24),
    marginBottom: Style.adjust(24),
    marginHorizontal: Style.adjust(24),
    backgroundColor: Colours.status.er100,
    borderColor: Colours.status.er300,
    borderWidth: Style.adjust(1),
  },
  infoWrapperStyle: {
    marginTop: Style.adjust(24),
    marginBottom: Style.adjust(24),
    marginHorizontal: Style.adjust(24),
    backgroundColor: Colours.status.in100,
    borderColor: Colours.status.in300,
    borderWidth: Style.adjust(1),
  },
  copyWrapperStyle: {
    marginStart: Style.adjust(72),
    marginEnd: Style.adjust(16),
  },
  googleFitIconWrapper: {
    alignItems: "center",
    marginBottom: Style.adjust(16),
  },
});
