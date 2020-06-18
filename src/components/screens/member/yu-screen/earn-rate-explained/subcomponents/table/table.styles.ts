import { StyleSheet, ViewStyle, TextStyle } from "react-native";
import { Style } from "@styles";

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    width: "95%",
    alignSelf: "center",
    flex: 1,
    height: 48,
    justifyContent: "center",
  },
  icon: {
    width: 24,
    marginHorizontal: 4,
    marginTop: 10,
  },
  tableRow: {
    flex: 1,
    alignSelf: "stretch",
    height: 48,
    justifyContent: "center",
  } as ViewStyle,
  tableRowStandard: {
    flex: 0.85,
  },
  tableRowText: {
    flex: 2.2,
  },
  tableRowCentered: {
    alignItems: "center",
  },
  tableRowGreyBackground: {
    backgroundColor: "rgba(236,236,236, 0.25)",
  },
  bottomSeparator: {
    borderBottomWidth: 1,
    borderBottomColor: "#EEEEEE",
    width: "95%",
    alignSelf: "center",
    marginBottom: 8,
  } as ViewStyle,
  tableStandardHeader: {
    fontSize: 10,
    textAlign: "center",
    color: "#686868",
    letterSpacing: 1,
    lineHeight: 16,
  },
  tableYourRateHeader: {
    fontSize: 11,
  },
  yucoinIconWrapper: {
    display: "flex",
    flexDirection: "row",
  },
  explainedTextCoinRateSecondColumn: {
    marginRight: 0,
  } as TextStyle,
  explainedTextCoinRateFirstColumn: {
    marginRight: 8,
  } as TextStyle,
  explainedCoinRateWrapper: {
    justifyContent: "space-between",
  },
  boldText: {
    fontFamily: Style.FONT_FAMILY_PRIMARY_BOLD,
  } as TextStyle,
});

export default styles;
