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
  divider: "rgb(96,96,96)",
  gray: "rgb(96,96,96)",
  midGray: "rgb(128,128,128)",
  heavyPink: "rgb(232, 49, 129)",
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
  },
  navBar: {
    blue: {
      active: "rgba(29,100,163,1)",
      inactive: "rgba(29,100,163,0.4)",
      pressed: "rgba(29,100,163,0.6)",
      activeIcon: "rgb(4, 39, 89)",
    },
    dark: {
      active: "rgba(64,98,94,1)",
      inactive: "rgba(71,108,104,0.5)",
      pressed: "rgba(71,108,104,0.75)",
    },
    darker: {
      active: "rgb(0,0,0)",
      inactive: "rgba(71,108,104,0.5)",
      pressed: "rgba(71,108,104,0.75)",
    },
    desert: {
      active: "rgba(84,12,0,1)",
      inactive: "rgba(84,12,0,0.4)",
      pressed: "rgba(84,12,0,0.6)",
      activeIcon: "rgb(118, 92, 50)",
    },
    forest: {
      active: "rgb(108, 205, 158)",
      inactive: "rgb(108, 205, 158)",
      pressed: "rgb(108, 205, 158)",
      activeIcon: "rgb(51, 88, 66)",
    },
    light: {
      active: "rgba(255,255,255,1)",
      inactive: "rgba(255,255,255,0.4)",
      pressed: "rgba(255,255,255,0.2)",
      activeIcon: "rgb(51, 88, 84)",
    },
    highlight: {
      active: "rgb(227, 13, 118)",
      inactive: "rgb(227, 13, 118)",
      pressed: "rgb(227, 13, 118)",
    },
    mountain: {
      active: "rgb(150, 179, 204)",
      inactive: "rgba(150, 179, 204, 0.4)",
      pressed: "rgba(150, 179, 204, 0.6)",
      activeIcon: "rgb(4, 39, 89)",
    },
  },
  navNotification: {
    body: "rgb(226, 1, 119)",
    border: "white",
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
      common: "#00ED9D",
      rare: "#00C0F3",
      epic: "#956AFF",
      custom: "#956AFF", // temporary, for CoverType type
      n800: "#5A5A5C",
      n900: "#464647",
      u100S4: "#FFD600",
      u50S4: "#FFEB80",
      u10S4: "#FFFBE5",
    },
  },
  primary: {
    p50: "#FCE5EF",
    p100: "#F9BDD9",
    p200: "#F791BF",
    p300: "#F664A4",
    p400: "#F43E8E",
    p500: "#F50D78",
    p600: "#E30D76",
  },
  secondary: {
    s10S1: "#E4FCF4",
    s10S2: "#E3F7FC",
    s10S3: "#F4F0FF",
  },
  neutral: {
    white: "#FFFFFF",
    n50: "#FAFAFE",
    n100: "#E7E7EB",
    n200: "#D3D3D6",
    n400: "#ABABAD",
    n500: "#979799",
    n600: "#838385",
    n700: "#6E6E70",
    n800: "#5A5A5C",
    n900: "#464647",
  },
  forest: {
    fp101: "#F8A528",
    fp103: "#FBE138",
    fp106: "#FBF5BA",
    fp204: "#FCD9D9",
    fp205: "#FFEEEE",
    fp304: "#3C9172",
    fp305: "#5DB489",
    fp308: "#96E2B5",
    fp309: "#AAF0C7",
  },
  // ocean a.k.a underwater
  ocean: {
    up203: "#1B5991",
    up204: "#5BA9D5",
    up306: "#D8F0FF",
    us105: "#CA45B3",
  },
  desert: {
    ds106: "#F86F63",
  },
  orange: "#DB8200",
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
  mp304: "#FA906A",
  fp204: "#FCD9D9",
  fp205: "#FFEEEE",
  ds106: "#F86F63",
  solid: {
    grey: "#F0F0F0",
  },
  hexToRGB,
  rgbToHex,
  toGrayScale,
  toGrayScaleArray,
};
