import { Colours } from "@styles";

interface Data {
  color: string;
  waves: string;
  background: string;
  foreground: string;
}

export function getAssets(unity: number): Data {
  const index = Math.floor((unity - 1) / 50);
  return data[index] || data[index % 4];
}

const data = [
  {
    color: Colours.darkestGray,
    waves: require("./assets/waves/Forest Background Loop.json"),
    background: require("./assets/background/Forest Background XL.json"),
    foreground: require("./assets/foreground/I Forest Foreground XL.json"),
  },
  {
    color: Colours.darkestGray,
    waves: require("./assets/waves/Ocean Background Loop.json"),
    background: require("./assets/background/Ocean Background XL.json"),
    foreground: require("./assets/foreground/I Ocean Foreground XL.json"),
  },
  {
    color: Colours.darkestGray,
    waves: require("./assets/waves/Desert Background Loop.json"),
    background: require("./assets/background/Desert Background XL.json"),
    foreground: require("./assets/foreground/I Desert Foreground XL.json"),
  },
  {
    color: Colours.neutral.white,
    waves: require("./assets/waves/Mountain Background Loop.json"),
    background: require("./assets/background/Mountain Background XL.json"),
    foreground: require("./assets/foreground/I Mountain Foreground XL.json"),
  },
  {
    color: Colours.darkestGray,
    waves: require("./assets/waves/Forest Background Loop.json"),
    background: require("./assets/background/Forest Background XL.json"),
    foreground: require("./assets/foreground/II Forest Foreground XL.json"),
  },
  {
    color: Colours.darkestGray,
    waves: require("./assets/waves/Ocean Background Loop.json"),
    background: require("./assets/background/Ocean Background XL.json"),
    foreground: require("./assets/foreground/II Ocean Foreground XL.json"),
  },
  {
    color: Colours.darkestGray,
    waves: require("./assets/waves/Desert Background Loop.json"),
    background: require("./assets/background/Desert Background XL.json"),
    foreground: require("./assets/foreground/II Desert Foreground XL.json"),
  },
  {
    color: Colours.neutral.white,
    waves: require("./assets/waves/Mountain Background Loop.json"),
    background: require("./assets/background/Mountain Background XL.json"),
    foreground: require("./assets/foreground/II Mountain Foreground XL.json"),
  },
];
