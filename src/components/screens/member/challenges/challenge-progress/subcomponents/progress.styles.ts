import { Colours, Style } from "../../../../../../styles";

import { StyleSheet } from "@styles";
const styles = StyleSheet.create({
  bar: {
    height: Style.PIXEL * 4,
    marginEnd: 3,
    marginTop: 5,
  },
  barColorBlack: {
    backgroundColor: Colours.progressBar.black.shadow,
  },
  barColorMountainPink: {
    backgroundColor: "rgb(231, 116, 121)",
  },
  barColorDesertBrown: {
    backgroundColor: "rgb(252,194,116)",
  },
  barColorDesertCycling: {
    backgroundColor: "rgb(248,111,99)",
  },
  barColorOceanBlack: {
    backgroundColor: Colours.progressBar.oceanBlack.shadow,
  },
  barColorOceanWhite: {
    backgroundColor: Colours.progressBar.oceanWhite.shadow,
  },
  barColorOceanLightBlue: {
    backgroundColor: "rgb(216,240,255)",
  },
  barColorForestWhite: {
    backgroundColor: "rgb(253, 251, 251)",
  },
  barColorForestGreen: {
    backgroundColor: "rgb(64, 135, 95)",
  },
  goal: {
    alignItems: "flex-end",
    alignSelf: "stretch",
    flexDirection: "column",
    width: Style.PIXEL * 50,
  },
  goalContainer: {
    paddingTop: Style.adjust(29),
  },
  goalTextColorBlack: {
    color: Colours.progressBar.black.heading,
  },
  goalTextColorLightBlue: {
    color: "rgb(216,240,255)",
  },
  goalTextColorDesertBrown: {
    color: "rgb(252,194,116)",
  },
  goalTextColorDesertPink: {
    color: "rgb(231, 116, 121)",
  },
  goalTextColorDesertCycling: {
    color: "rgb(248,111,99)",
  },
  goalTextColorOceanBlack: {
    color: Colours.progressBar.oceanBlack.shadow,
  },
  goalTextColorOceanWhite: {
    color: Colours.progressBar.oceanWhite.shadow,
  },
  goalTextPink: {
    color: "rgb(231, 116, 121)",
  },
  goalTextYellow: {
    color: "rgb(241, 175, 0)",
  },
  goalTextGreen: {
    color: "rgb(103, 184, 138)",
  },
  progress: {
    flex: 1,
    height: Style.PIXEL * 4,
  },
  progressColorBlack: {
    backgroundColor: Colours.progressBar.black.background,
  },
  progressColorOceanBlack: {
    backgroundColor: Colours.progressBar.oceanBlack.background,
  },
  progressColorOceanWhite: {
    backgroundColor: Colours.progressBar.oceanWhite.background,
  },
  star: {
    position: "absolute",
    right: 1,
    top: 3,
  },
  starBackground: {
    position: "absolute",
    right: -1,
    top: 1,
  },
  stepsGoals: {
    left: 0,
    position: "absolute",
    right: 0,
    top: 0,
  },
  stepsRow: {
    alignItems: "center",
    alignSelf: "stretch",
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  textWhite: {
    color: "white",
  },
});

export default styles;
