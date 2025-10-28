import { clamp } from "lodash";

type RGBType = {
  r: number;
  g: number;
  b: number;
};

const hexToRGB = (hex: string): RGBType | null => {
  // expand shorthand hex colors
  hex = hex.replace(/^#?([A-Fa-f\d])([A-Fa-f\d])([A-Fa-f\d])$/i, (_, r, g, b) => r + r + g + g + b + b);

  const result = /^#?([A-Fa-f\d]{2})([A-Fa-f\d]{2})([A-Fa-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
};

const toBase16 = (n: number) => {
  const hex = Math.floor(n).toString(16);
  return hex.length === 1 ? "0" + hex : hex;
};

const rgbToHex = ({ r = 0, g = 0, b = 0 }: RGBType): string => {
  return "#" + toBase16(r) + toBase16(g) + toBase16(b);
};

const toGrayScale = (hex: string): string | null => {
  const rgb = hexToRGB(hex);
  if (rgb) {
    const { r, g, b } = rgb;
    const newColor = 0.299 * r + 0.587 * g + 0.114 * b;

    return "#" + toBase16(newColor).repeat(3);
  }

  return null;
};

const toGrayScaleArray = (hexArray: string[]): (string | null)[] => {
  return hexArray.map((hex) => toGrayScale(hex));
};

export const adjustColorBrightness = (hexColor: string, magnitude: number) => {
  hexColor = hexColor.replace(`#`, ``);
  if (hexColor.length === 6) {
    const decimalColor = parseInt(hexColor, 16);
    const r = clamp((decimalColor >> 16) + magnitude, 0, 255);
    const g = clamp((decimalColor & 0x0000ff) + magnitude, 0, 255);
    const b = clamp((decimalColor >> 8) & (0x00ff + magnitude), 0, 255);

    return `#${(g | (b << 8) | (r << 16)).toString(16)}`;
  }

  return hexColor;
};

export default {
  button: {
    link: "rgb(232, 49, 129)",
    primary: {
      default: {
        body: "#e20177",
        shadow: "#95012b",
      },
      pressedIn: {
        body: "#cb016b",
        shadow: "#860127",
      },
    },
  },
  checkMilestone: {
    filledCheck: "rgb(231,176,61)",
    unfilledCircle: "rgb(230,230,230)",
  },
  darkestGray: "rgb(51,51,51)", // #333
  darkGray: "rgb(70,70,70)",
  darkHotPink: "rgb(227,13,118)",
  darkHotPinkShadow: "#95012b",
  darkPink: "#640038",
  divider: "rgb(96,96,96)",
  gray: "rgb(96,96,96)",
  midGray: "rgb(128,128,128)",
  heavyPink: "rgb(232, 49, 129)",
  pastelViolet: "#E5BAFF",
  inkSubtle: "rgb(160,160,155)", // #A0A09B
  inkStrong: "rgb(70,70,71)", // #464647
  leaderboards: {
    first: "rgb(244,186,0)",
    second: "rgb(204,204,204)",
    third: "rgb(245,172,171)",
  },
  lightGray: "rgb(170,170,170)",
  lightestGray: "#fcfcfc",
  lightRed: "rgb(255,102,102)",
  world: {
    forest: "#3c9172",
    ocean: "#5ba9d5",
    desert: "#f86f63",
    mountain: "#ca45b3",
    yuniversal: "#8008D9",
  },
  navNotification: {
    body: "rgb(226, 1, 119)",
    border: "white",
  },
  pathways: {
    background: "#0177FF",
  },
  slider: {
    inactive: "#BFBFC2",
    greyBar: "#E7E7EB",
  },
  picker: {
    empty: "rgb(204,204,204)",
    filled: "rgb(106,106,106)",
  },
  progressBar: {
    black: {
      background: "black",
      heading: "black",
      shadow: "rgb(233, 233, 233)",
    },
    oceanBlack: {
      background: "black",
      heading: "black",
      shadow: "rgb(80, 142, 205)",
    },
    oceanWhite: {
      background: "white",
      heading: "white",
      shadow: "rgb(80, 142, 205)",
    },
  },
  rewardsTabs: {
    active: "rgb(226,1,119)",
    divider: "rgb(96,96,96)",
    inactive: "rgb(51,51,51)",
    inactiveTransparent: "rgba(150,150,150,0.5)",
  },
  streak: {
    finished: {
      mountain: {
        pressed: "rgb(239, 170, 170)",
        unpressed: "rgb(239, 190, 200)",
      },
      desert: {
        pressed: "rgb(238,216,107)",
        unpressed: "rgb(238,216,107)",
      },
      forest: {
        pressed: "rgb(239, 190, 200)",
        unpressed: "rgb(239, 190, 200)",
      },
      ocean: {
        pressed: "#0E66A1",
        unpressed: "#0E66A1",
      },
    },
    unfinished: {
      pressed: "#cb016b",
      unpressed: "#e20177",
    },
  },
  textInput: {
    error: "rgb(255,102,102)",
    filled: "rgb(106,106,106)",
    focus: "#333",
    inactive: "rgb(204,204,204)",
  },
  yuscreen: {
    earnRateBackground: "#FFF598",
    white: "#FFFFFF",
    brown: "#EA9E2F",
  },
  products: {
    fib: {
      common: "#36CB95",
      commonLight: "#EFFBF7",
      commonShadow: "#00CC87",
      commonGradientDark: "#06AE75",
      commonGradientLight: "#0CF0A3",
      commonBorderGradient: "#1ABD86",
      rare: "#569DE9",
      rareLight: "#F1F7FD",
      rareGradientLight: "#8FDEFF",
      rareShadow: "#00ADDB",
      rareSeparator: "#0FC3F4",
      rareBorderGradient1: "#2CA6D8",
      rareBorderGradient2: "#46AEDA",
      epic: "#956AFF",
      epicLight: "#F7F3FF",
      epicShadow: "#825CDE",
      epicGradientLight: "#BFA6FF",
      epicBorderGradient: "#B294FF",
      custom: "#956AFF", // temporary, for CoverType type
      n800: "#5A5A5C",
      n900: "#464647",
      u100S4: "#FFD600",
      u50S4: "#FFEB80",
      u30S4: "#FFF060",
      u10S4: "#FFFBE5",
    },
  },
  primary: {
    p20: "#FFF5FA",
    p40: "#FCE7F1",
    p105: "#FCEF80",
    p106: "#FBF5BA",
    p107: "#FFFED6",
    p50: "#FCE5EF",
    p60: "#F7B7D6",
    p80: "#F186BA",
    p100: "#F9BDD9",
    p200: "#F791BF",
    p300: "#F664A4",
    p400: "#F43E8E",
    p500: "#F50D78",
    p600: "#E30D76",
    p600Shadow: "#900860",
  },
  secondary: {
    /** Uncommon Green */
    s10S1: "#E4FCF4",
    s20S1: "#CAF8E8",
    s30S1: "#B1F9E0",
    s40S1: "#99F8D7",
    s50S1: "#80F6CD",
    s100S1: "#00ED9D",
    s200S1: "#06A322",

    /** Rare Blue */
    s10S2: "#E3F7FC",
    s20S2: "#CAEFF9",
    s30S2: "#B2ECFB",
    s40S2: "#94DDF1",
    s50S2: "#7EDCF5",
    s100S2: "#00C0F3",

    /** Epic Purple */
    s10S3: "#F4F0FF",
    s20S3: "#EAE1FF",
    s30S3: "#DFD3FF",
    s40S3: "#D2C2FD",
    s50S3: "#C7B4FD",
    s100S3: "#956AFF",
  },
  neutral: {
    black: "#000000",
    white: "#FFFFFF",
    n20: "#F5F5F5",
    n50: "#FAFAFE",
    n100: "#E7E7EB",
    n150: "#E3E3E1",
    n200: "#D3D3D6",
    n250: "#D9D9D7",
    n300: "#BFBFC2",
    n400: "#ABABAD",
    n500: "#979799",
    n600: "#838385",
    n700: "#6E6E70",
    n800: "#5A5A5C",
    n850: "#5C5757",
    n900: "#464647",
    g1: "#C4C4C4",
    g2: "#5C5C5C",
  },
  forest: {
    fp101: "#F8A528",
    fp103: "#FBE138",
    fp106: "#FBF5BA",
    fp204: "#FCD9D9",
    fp205: "#FFEEEE",
    fp304: "#3C9172",
    fp305: "#5DB489",
    fp306: "#6DC694",
    fp308: "#96E2B5",
    fp309: "#AAF0C7",
  },
  // ocean a.k.a underwater
  ocean: {
    up203: "#1B5991",
    up202: "#013D73",
    up204: "#5BA9D5",
    up306: "#D8F0FF",
    us105: "#CA45B3",
    us106: "#E99FE9",
  },
  desert: {
    ds106: "#F86F63",
  },
  orange: "#DB8200",
  orangeNew: "#EDAD25",
  blue: {
    b100: "#D5ECFF",
    b200: "#6AA3DC",
    dp301: "#6AA3DC",
    dp302: "#84AFE0",
    dp303: "#C6F7FF",
    dp304: "#7892B3",
    dp305: "#9ED3E9",
    dp306: "#BDE3F1",
    dp307: "#EEF8FB",
    mp108: "#A5D1FB",
  },
  yellow: {
    y50: "#FFEB80",
    y100: "#FFD600",
  },
  mp304: "#FA906A",
  fp204: "#FCD9D9",
  fp205: "#FFEEEE",
  ds106: "#F86F63",
  solid: {
    grey: "#F0F0F0",
  },
  metallic: {
    m100: "#EFF0FA",
    m200: "#DEDEF0",
    m300: "#B9B9CC",
    m400: "#AAAABF",
    m500: "#87879F",
  },
  mountain: {
    primary: {
      m106: "#569DE9",
    },
  },
  status: {
    er100: "#FFF2F2",
    er300: "#FF5F5F",
    wa100: "#FAF4E6",
    wa300: "#F19E22",
    su100: "#ECF9EE",
    su300: "#66CC78",
    su400: "#40C057",
    in100: "#E6EDF9",
    in300: "#5A89D8",
  },
  event: {
    claimedColor: "#40C057",
    claimedBackgroundColor: "#f1fcf7",
  },
  sudoku: {
    gridColor: "#A0A09B",
    gridThickColor: "#5C5757",
    wrongNumberColor: "#f00f00",
    warning: "#FFF7E6",
    cancelShadow: "#C9C9C9",
    initialNumberColor: "#000000",
    correctCellTextColor: "#457EBA",
    timerColor: "#D9D9D7",
    activeCellBackgroundColor: "#CAEFF9",
    adjacentCellBackgroundColor: "#EFF0FA",
    sameAsActiveCellBackgroundColor: "#B9B9CC",
    completedGameCellBackgroundTransitionColor: "rgba(0,255,0,.10)",
  },
  overlay: {
    black10: "rgba(0,0,0,0.1)",
    black20: "rgba(0,0,0,0.2)",
    black50: "rgba(0,0,0,0.5)",
    black64: "rgba(0,0,0,0.64)",
    black80: "rgba(0,0,0,0.8)",
    black90: "rgba(0,0,0,0.9)",
    white32: "rgba(255,255,255,0.32)",
    white64: "rgba(255,255,255,0.64)",
    whiteTransparent: "rgba(255,255,255,0)",
    whiteSolid: "rgba(255,255,255,1)",
  },
  backgrounds: {
    lightGray: "rgb(235, 235, 235)",
    yuniversalDark: "rgb(61, 1, 57)",
    oceanDark: "rgb(1,62,116)",
    darkPurple: "#290163",
    mediumGray: "#747474",
    lightBlue: "#CEEBFF",
    lightYellow: "rgba(255,255,200,1)",
    yumojiPrompt: "rgba(255,255,255,0.64)",
  },
  borders: {
    lightGray: "#E3E3E1",
    darkPurple: "#300774",
    deepPurple: "#370888",
    cream: "#EDEDD1",
    lightYellow: "#FFFFE5",
    dustyRose: "#EFD5D8",
    lightPink: "#F4D1DB",
    veryLightPink: "#FFE7EC",
    lightestPink: "#FFE8E8",
    creamRose: "#FFEFF1",
    cyan: "#44D2F1",
    cyanLight: "#82E9FF",
    cyanLighter: "#AAF5F4",
    yellowCream: "#F3EDD1",
    peach: "#F6DFD2",
    yellowGold: "#FFE39A",
    tealLight: "#A4EEEE",
    orangeGold: "#FFC451",
  },
  gradients: {
    whiteTransparent: "rgba(255,255,255,0)",
    cyanLight: "#85E9FF",
    cyanPrimary: "#35DBFF",
    cyanDark: "#00C0F3",
    cyanPale: "#C8FFFF",
    cyanVeryLight: "#D7FFFF",
    cyanUltraLight: "#D6FFFF",
    cyanSoft: "#DBFFFF",
    peachLight: "#FFE2C8",
    peachLighter: "#FFF9E9",
    peachSoft: "#FFFCDE",
    creamYellow: "#fffbcd",
    creamYellowLight: "#FFFDD4",
    creamYellowPale: "#FFFBE5",
    yellowLight: "rgb(255,249,225)",
    yellowPale: "#FFF7CC",
    yellowSoft: "#B0FAFF",
    greenLight: "rgba(93,181,129,0)",
    greenSolid: "rgba(93,181,129,1)",
    greenOverlay: "rgba(0,255,0,0.1)",
  },
  text: {
    brown: "rgb(108,59,38)",
    forestGreen: "rgb(51, 88, 66)",
    loadingYellow: "rgb(248,227,49)",
    fitkitGray: "rgb(96,96,96)",
    levelPink: "rgb(226, 1, 119)",
    illustrationBlue: "rgb(221, 246, 251)",
  },
  activityHistoryHeading: "#FBD127",
  hintIconLight: "#FFF3B1",
  hexToRGB,
  rgbToHex,
  toGrayScale,
  toGrayScaleArray,
};
