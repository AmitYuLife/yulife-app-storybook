import { Colours } from "@styles";

export interface IUnityData {
  color: string;
  waves: string;
  background: string;
  foreground: string;
}

export function getAssets(unity: number): IUnityData {
  const index = Math.floor((unity - 1) / 50);
  return data[index] || data[index % 4];
}

const data = [
  {
    color: Colours.darkestGray,
    waves: require("./assets/waves/forest-background-loop.json"),
    background: require("./assets/background/earth/forest-background.json"),
    foreground: require("./assets/foreground/earth/forest-foreground.json"),
  },
  {
    color: Colours.darkestGray,
    waves: require("./assets/waves/ocean-background-loop.json"),
    background: require("./assets/background/earth/ocean-background.json"),
    foreground: require("./assets/foreground/earth/ocean-foreground.json"),
  },
  {
    color: Colours.darkestGray,
    waves: require("./assets/waves/desert-background-loop.json"),
    background: require("./assets/background/earth/desert-background.json"),
    foreground: require("./assets/foreground/earth/desert-foreground.json"),
  },
  {
    color: Colours.neutral.white,
    waves: require("./assets/waves/mountain-background-loop.json"),
    background: require("./assets/background/earth/mountain-background.json"),
    foreground: require("./assets/foreground/earth/mountain-foreground.json"),
  },
  {
    color: Colours.darkestGray,
    waves: require("./assets/waves/forest-background-loop.json"),
    background: require("./assets/background/red/forest-background.json"),
    foreground: require("./assets/foreground/red/forest-foreground.json"),
  },
  {
    color: Colours.darkestGray,
    waves: require("./assets/waves/ocean-background-loop.json"),
    background: require("./assets/background/red/ocean-background.json"),
    foreground: require("./assets/foreground/red/ocean-foreground.json"),
  },
  {
    color: Colours.darkestGray,
    waves: require("./assets/waves/desert-background-loop.json"),
    background: require("./assets/background/red/desert-background.json"),
    foreground: require("./assets/foreground/red/desert-foreground.json"),
  },
  {
    color: Colours.neutral.white,
    waves: require("./assets/waves/mountain-background-loop.json"),
    background: require("./assets/background/red/mountain-background.json"),
    foreground: require("./assets/foreground/red/mountain-foreground.json"),
  },
  {
    color: Colours.darkestGray,
    waves: require("./assets/waves/forest-background-loop.json"),
    background: require("./assets/background/bright/forest-background.json"),
    foreground: require("./assets/foreground/bright/forest-foreground.json"),
  },
  {
    color: Colours.darkestGray,
    waves: require("./assets/waves/ocean-background-loop.json"),
    background: require("./assets/background/bright/ocean-background.json"),
    foreground: require("./assets/foreground/bright/ocean-foreground.json"),
  },
  {
    color: Colours.darkestGray,
    waves: require("./assets/waves/desert-background-loop.json"),
    background: require("./assets/background/bright/desert-background.json"),
    foreground: require("./assets/foreground/bright/desert-foreground.json"),
  },
  {
    color: Colours.neutral.white,
    waves: require("./assets/waves/mountain-background-loop.json"),
    background: require("./assets/background/bright/mountain-background.json"),
    foreground: require("./assets/foreground/bright/mountain-foreground.json"),
  },
];
