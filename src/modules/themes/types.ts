import { Image } from "@redux/_core/types";

export interface MobileGameTheme {
  id: string;
  name: string;
  colors: {
    primary: {
      p20: string;
      p40: string;
      p50: string;
      p60: string;
      p80: string;
      p100: string;
      p200: string;
      p300: string;
      p400: string;
      p500: string;
      p600: string;
      p600Shadow: string;
    };
  };
  assets: {
    logo?: Image;
    icon?: Image;
    iconWhite?: Image;
    loginBackgroundImage?: Image;
  };
}

export enum ThemeId {
  YuLife = "yulife",
  Metlife = "metlife",
  NN = "nn",
}
