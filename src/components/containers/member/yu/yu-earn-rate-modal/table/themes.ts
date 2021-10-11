import { YuScreenEarnRateTableThemeType } from "@graphql/_core/schema/globalTypes";
import { Colours } from "@styles";

export const DEFAULT_THEME = {
  primary: Colours.neutral.n400,
  secondary: Colours.neutral.n400,
  gradientBackground: [Colours.neutral.white, Colours.neutral.white],
  gradientBackgroundBorder: Colours.neutral.white,
  headerBackground: Colours.neutral.white,
  boldHeader: false,
};

export const MINIMAL_THEME = {
  primary: Colours.neutral.n400,
  secondary: Colours.neutral.white,
  gradientBackground: [Colours.neutral.white, Colours.neutral.white],
  gradientBackgroundBorder: Colours.neutral.n200,
  headerBackground: Colours.neutral.n400,
  boldHeader: false,
};

const COMMON_THEME = {
  ...DEFAULT_THEME,
  primary: Colours.products.fib.common,
  secondary: Colours.neutral.white,
  headerBackground: Colours.products.fib.common,
  gradientBackground: [Colours.products.fib.commonLight, Colours.products.fib.commonLight],
};

const RARE_THEME = {
  ...DEFAULT_THEME,
  primary: Colours.products.fib.rare,
  secondary: Colours.neutral.white,
  headerBackground: Colours.products.fib.rare,
  gradientBackground: [Colours.products.fib.rareLight, Colours.products.fib.rareLight],
};

const EPIC_THEME = {
  ...DEFAULT_THEME,
  primary: Colours.products.fib.epic,
  secondary: Colours.neutral.white,
  headerBackground: Colours.products.fib.epic,
  gradientBackground: [Colours.products.fib.epicLight, Colours.products.fib.epicLight],
};

const PRESTIGE_THEME = {
  ...DEFAULT_THEME,
  primary: Colours.orange,
  secondary: Colours.neutral.white,
  headerBackground: Colours.orange,
  gradientBackground: ["#FFF598", "#FFF48F", "#FDDD65"],
  gradientBackgroundBorder: "#FEDF9E",
  boldHeader: true,
};

export const THEMES = {
  [YuScreenEarnRateTableThemeType.base]: DEFAULT_THEME,
  [YuScreenEarnRateTableThemeType.baseDecorated]: MINIMAL_THEME,
  [YuScreenEarnRateTableThemeType.common]: COMMON_THEME,
  [YuScreenEarnRateTableThemeType.rare]: RARE_THEME,
  [YuScreenEarnRateTableThemeType.epic]: EPIC_THEME,
  [YuScreenEarnRateTableThemeType.prestige]: PRESTIGE_THEME,
};

export const mapThemeTypeToTheme = (themeType: YuScreenEarnRateTableThemeType) => {
  return THEMES[themeType] || DEFAULT_THEME;
};
