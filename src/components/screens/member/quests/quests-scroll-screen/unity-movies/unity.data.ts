import { getCurrentWorld } from "@services/utils";
import { Colours } from "@styles";

interface Data {
  color: string;
  waves: string;
  background: string;
  background_xl: string;
  foreground: string;
  foreground_xl: string;
}

export function getAssets(unity: number): Data {
  const index = getCurrentWorld(unity);
  return data[index];
}

const data = [
  {
    color: Colours.darkestGray,
    waves: require("./assets/waves/Forest Background Loop.json"),
    background: require("./assets/background/Forest Background S.json"),
    background_xl: require("./assets/background/Forest Background XL.json"),
    foreground: require("./assets/foreground/I Forest Foreground S.json"),
    foreground_xl: require("./assets/foreground/I Forest Foreground XL.json"),
  },
  {
    color: Colours.darkestGray,
    waves: require("./assets/waves/Ocean Background Loop.json"),
    background: require("./assets/background/Ocean Background S.json"),
    background_xl: require("./assets/background/Ocean Background XL.json"),
    foreground: require("./assets/foreground/I Ocean Foreground S.json"),
    foreground_xl: require("./assets/foreground/I Ocean Foreground XL.json"),
  },
  {
    color: Colours.darkestGray,
    waves: require("./assets/waves/Desert Background Loop.json"),
    background: require("./assets/background/Desert Background S.json"),
    background_xl: require("./assets/background/Desert Background XL.json"),
    foreground: require("./assets/foreground/I Desert Foreground S.json"),
    foreground_xl: require("./assets/foreground/I Desert Foreground XL.json"),
  },
  {
    color: Colours.neutral.white,
    waves: require("./assets/waves/Mountain Background Loop.json"),
    background: require("./assets/background/Mountain Background S.json"),
    background_xl: require("./assets/background/Mountain Background XL.json"),
    foreground: require("./assets/foreground/I Mountain Foreground S.json"),
    foreground_xl: require("./assets/foreground/I Mountain Foreground XL.json"),
  },
  {
    color: Colours.darkestGray,
    waves: require("./assets/waves/Forest Background Loop.json"),
    background: require("./assets/background/Forest Background S.json"),
    background_xl: require("./assets/background/Forest Background XL.json"),
    foreground: require("./assets/foreground/II Forest Foreground S.json"),
    foreground_xl: require("./assets/foreground/II Forest Foreground XL.json"),
  },
  {
    color: Colours.darkestGray,
    waves: require("./assets/waves/Ocean Background Loop.json"),
    background: require("./assets/background/Ocean Background S.json"),
    background_xl: require("./assets/background/Ocean Background XL.json"),
    foreground: require("./assets/foreground/II Ocean Foreground S.json"),
    foreground_xl: require("./assets/foreground/II Ocean Foreground XL.json"),
  },
  {
    color: Colours.darkestGray,
    waves: require("./assets/waves/Desert Background Loop.json"),
    background: require("./assets/background/Desert Background S.json"),
    background_xl: require("./assets/background/Desert Background XL.json"),
    foreground: require("./assets/foreground/II Desert Foreground S.json"),
    foreground_xl: require("./assets/foreground/II Desert Foreground XL.json"),
  },
  {
    color: Colours.neutral.white,
    waves: require("./assets/waves/Mountain Background Loop.json"),
    background: require("./assets/background/Mountain Background S.json"),
    background_xl: require("./assets/background/Mountain Background XL.json"),
    foreground: require("./assets/foreground/II Mountain Foreground S.json"),
    foreground_xl: require("./assets/foreground/II Mountain Foreground XL.json"),
  },
];
