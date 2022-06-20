import { StyleSheet } from "react-native";
import { Colours, Style } from "@styles";

export const styles = StyleSheet.create({
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
    backgroundColor: "#FFF2F2",
    borderColor: Colours.status.er300,
    borderWidth: Style.adjust(1),
  },
  infoWrapperStyle: {
    marginTop: Style.adjust(24),
    marginBottom: Style.adjust(24),
    marginHorizontal: Style.adjust(24),
    backgroundColor: "#E6EDF9",
    borderColor: "#5A89D8",
    borderWidth: Style.adjust(1),
  },
  copyWrapperStyle: {
    marginLeft: Style.adjust(72),
    marginRight: Style.adjust(16),
  },
  googleFitIconWrapper: {
    alignItems: "center",
    marginBottom: Style.adjust(16),
  },
});
