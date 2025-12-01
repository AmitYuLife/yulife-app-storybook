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
    backgroundColor: Colours.challenge.progressBar.red,
  },
  barColorDesertBrown: {
    backgroundColor: Colours.challenge.progressBar.orange,
  },
  barColorDesertCycling: {
    backgroundColor: Colours.challenge.progressBar.desertOrange,
  },
  barColorOceanBlack: {
    backgroundColor: Colours.progressBar.oceanBlack.shadow,
  },
  barColorOceanWhite: {
    backgroundColor: Colours.progressBar.oceanWhite.shadow,
  },
  barColorOceanLightBlue: {
    backgroundColor: Colours.challenge.progressBar.blueLight,
  },
  barColorForestWhite: {
    backgroundColor: Colours.challenge.progressBar.whitish,
  },
  barColorForestGreen: {
    backgroundColor: Colours.challenge.progressBar.green,
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
    color: Colours.challenge.progressBar.blueLight,
  },
  goalTextColorDesertBrown: {
    color: Colours.challenge.progressBar.orange,
  },
  goalTextColorDesertPink: {
    color: Colours.challenge.progressBar.red,
  },
  goalTextColorDesertCycling: {
    color: Colours.challenge.progressBar.desertOrange,
  },
  goalTextColorOceanBlack: {
    color: Colours.progressBar.oceanBlack.shadow,
  },
  goalTextColorOceanWhite: {
    color: Colours.progressBar.oceanWhite.shadow,
  },
  goalTextPink: {
    color: Colours.challenge.progressBar.red,
  },
  goalTextYellow: {
    color: Colours.challenge.progressBar.yellow,
  },
  goalTextGreen: {
    color: Colours.challenge.progressBar.lightGreen,
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
    end: 1,
    top: 3,
  },
  starBackground: {
    position: "absolute",
    end: -1,
    top: 1,
  },
  stepsGoals: {
    start: 0,
    position: "absolute",
    end: 0,
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
