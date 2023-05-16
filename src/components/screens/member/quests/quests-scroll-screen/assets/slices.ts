import { isIphoneX as getIsIphone } from "react-native-iphone-x-helper";
import { episodeSettings, IEpisodeSettings } from "./slices.settings";
import { TopBarTypes, TOP_BAR_TYPES } from "@components/organisms/top-bar/top-bar.helpers";
import { Planets } from "@utils";

interface IMapSliceSlot {
  bottom?: number;
  index: number; // level - 1
  left: number;
  top?: number;
}

export interface IMapSlice {
  episodeSettings?: IEpisodeSettings;
  id: string;
  image: any;
  slots: IMapSliceSlot[];
  topBarType: TopBarTypes;
}

const isIphoneX = getIsIphone();

const planetsInterstitials = {
  [Planets.EARTH]: {
    w1s0: require("@assets/quest-slices/planets/earth/interstitials/w1s0.png"),
    w2s0: require("@assets/quest-slices/planets/earth/interstitials/w2s0.png"),
    w2s1: require("@assets/quest-slices/planets/earth/interstitials/w2s1.png"),
    w3s0: require("@assets/quest-slices/planets/earth/interstitials/w3s0.png"),
    w3s1: require("@assets/quest-slices/planets/earth/interstitials/w3s1.png"),
    w4s0: require("@assets/quest-slices/planets/earth/interstitials/w4s0.png"),
    w4s1: require("@assets/quest-slices/planets/earth/interstitials/w4s1.png"),
    w5s0: require("@assets/quest-slices/planets/earth/interstitials/w5s0.png"),
  },
  [Planets.RED]: {
    w1s0: require("@assets/quest-slices/planets/red/interstitials/w1s0.png"),
    w2s0: require("@assets/quest-slices/planets/red/interstitials/w2s0.png"),
    w2s1: require("@assets/quest-slices/planets/red/interstitials/w2s1.png"),
    w3s0: require("@assets/quest-slices/planets/red/interstitials/w3s0.png"),
    w3s1: require("@assets/quest-slices/planets/red/interstitials/w3s1.png"),
    w4s0: require("@assets/quest-slices/planets/red/interstitials/w4s0.png"),
    w4s1: require("@assets/quest-slices/planets/red/interstitials/w4s1.png"),
    w5s0: require("@assets/quest-slices/planets/red/interstitials/w5s0.png"),
  },
  [Planets.BRIGHT]: {
    w1s0: require("@assets/quest-slices/planets/bright/interstitials/w1s0.png"),
    w2s0: require("@assets/quest-slices/planets/bright/interstitials/w2s0.png"),
    w2s1: require("@assets/quest-slices/planets/bright/interstitials/w2s1.png"),
    w3s0: require("@assets/quest-slices/planets/bright/interstitials/w3s0.png"),
    w3s1: require("@assets/quest-slices/planets/bright/interstitials/w3s1.png"),
    w4s0: require("@assets/quest-slices/planets/bright/interstitials/w4s0.png"),
    w4s1: require("@assets/quest-slices/planets/bright/interstitials/w4s1.png"),
    w5s0: require("@assets/quest-slices/planets/bright/interstitials/w5s0.png"),
  },
};

const planetWordSlices = {
  [Planets.EARTH]: {
    w1s0: {
      image: require("@assets/quest-slices/planets/earth/w1s0.png"),
      topBarType: TOP_BAR_TYPES.FOREST,
    },
    w1s1: {
      image: require("@assets/quest-slices/planets/earth/w1s1.png"),
      topBarType: TOP_BAR_TYPES.FOREST,
    },
    w1s2: {
      image: require("@assets/quest-slices/planets/earth/w1s2.png"),
      topBarType: TOP_BAR_TYPES.FOREST,
    },
    w1s3: {
      image: require("@assets/quest-slices/planets/earth/w1s3.png"),
      topBarType: TOP_BAR_TYPES.FOREST,
    },
    w1s4: {
      image: require("@assets/quest-slices/planets/earth/w1s4.png"),
      topBarType: TOP_BAR_TYPES.FOREST,
    },
    w1s5: {
      image: require("@assets/quest-slices/planets/earth/w1s5.png"),
      topBarType: TOP_BAR_TYPES.FOREST,
    },
    w1s6: {
      image: require("@assets/quest-slices/planets/earth/w1s6.png"),
      topBarType: TOP_BAR_TYPES.FOREST,
    },
    w1s7: {
      image: require("@assets/quest-slices/planets/earth/w1s7.png"),
      topBarType: TOP_BAR_TYPES.FOREST,
    },
    w1s8: {
      image: require("@assets/quest-slices/planets/earth/w1s8.png"),
      topBarType: TOP_BAR_TYPES.FOREST,
    },
    w1s9: {
      image: require("@assets/quest-slices/planets/earth/w1s9.png"),
      topBarType: TOP_BAR_TYPES.FOREST,
    },
    w1s10: {
      image: require("@assets/quest-slices/planets/earth/w1s10.png"),
      topBarType: TOP_BAR_TYPES.FOREST,
    },
    w1s11: {
      image: require("@assets/quest-slices/planets/earth/w1s11.png"),
      topBarType: TOP_BAR_TYPES.FOREST,
    },
    w1s12: {
      image: require("@assets/quest-slices/planets/earth/w1s12.png"),
      topBarType: TOP_BAR_TYPES.FOREST,
    },
    w1s13: {
      image: require("@assets/quest-slices/planets/earth/w1s13.png"),
      topBarType: TOP_BAR_TYPES.FOREST,
    },
    w1s14: {
      image: require("@assets/quest-slices/planets/earth/w1s14.png"),
      topBarType: TOP_BAR_TYPES.FOREST,
    },
    w1s15: {
      image: require("@assets/quest-slices/planets/earth/w1s15.png"),
      topBarType: TOP_BAR_TYPES.WHITE,
    },
    w1s16: {
      image: require("@assets/quest-slices/planets/earth/w1s16.png"),
      topBarType: TOP_BAR_TYPES.WHITE,
    },
    w1s17: {
      image: require("@assets/quest-slices/planets/earth/w1s17.png"),
      topBarType: TOP_BAR_TYPES.WHITE,
    },
    w1s18: {
      image: require("@assets/quest-slices/planets/earth/w1s18.png"),
      topBarType: TOP_BAR_TYPES.WHITE,
    },
    w1s19: {
      image: require("@assets/quest-slices/planets/earth/w1s19.png"),
      topBarType: TOP_BAR_TYPES.WHITE,
    },
    w1s20: {
      image: require("@assets/quest-slices/planets/earth/w1s20.png"),
      topBarType: TOP_BAR_TYPES.WHITE,
    },
    w1s21: {
      image: require("@assets/quest-slices/planets/earth/w1s21.png"),
      topBarType: TOP_BAR_TYPES.WHITE,
    },
    w1s22: {
      image: require("@assets/quest-slices/planets/earth/w1s22.png"),
      topBarType: TOP_BAR_TYPES.WHITE,
    },
    w1s23: {
      image: require("@assets/quest-slices/planets/earth/w1s23.png"),
      topBarType: TOP_BAR_TYPES.FOREST,
    },
    w1s24: {
      image: require("@assets/quest-slices/planets/earth/w1s24.png"),
      topBarType: TOP_BAR_TYPES.FOREST,
    },
    w1s25: {
      image: require("@assets/quest-slices/planets/earth/w1s25.png"),
      topBarType: TOP_BAR_TYPES.FOREST,
    },
    w1s26: {
      image: require("@assets/quest-slices/planets/earth/w1s26.png"),
      topBarType: TOP_BAR_TYPES.FOREST,
    },
    w1s27: {
      image: require("@assets/quest-slices/planets/earth/w1s27.png"),
      topBarType: TOP_BAR_TYPES.FOREST,
    },
    w1s28: {
      image: require("@assets/quest-slices/planets/earth/w1s28.png"),
      topBarType: TOP_BAR_TYPES.FOREST,
    },
    w1s29: {
      image: require("@assets/quest-slices/planets/earth/w1s29.png"),
      topBarType: TOP_BAR_TYPES.FOREST,
    },
    w2s0: {
      image: require("@assets/quest-slices/planets/earth/w2s0.png"),
      topBarType: TOP_BAR_TYPES.WHITE,
    },
    w2s1: {
      image: require("@assets/quest-slices/planets/earth/w2s1.png"),
      topBarType: TOP_BAR_TYPES.WHITE,
    },
    w2s2: {
      image: require("@assets/quest-slices/planets/earth/w2s2.png"),
      topBarType: TOP_BAR_TYPES.WHITE,
    },
    w2s3: {
      image: require("@assets/quest-slices/planets/earth/w2s3.png"),
      topBarType: TOP_BAR_TYPES.WHITE,
    },
    w2s4: {
      image: require("@assets/quest-slices/planets/earth/w2s4.png"),
      topBarType: TOP_BAR_TYPES.WHITE,
    },
    w2s5: {
      image: require("@assets/quest-slices/planets/earth/w2s5.png"),
      topBarType: TOP_BAR_TYPES.DEFAULT,
    },
    w2s6: {
      image: require("@assets/quest-slices/planets/earth/w2s6.png"),
      topBarType: TOP_BAR_TYPES.DEFAULT,
    },
    w2s7: {
      image: require("@assets/quest-slices/planets/earth/w2s7.png"),
      topBarType: TOP_BAR_TYPES.DEFAULT,
    },
    w2s8: {
      image: require("@assets/quest-slices/planets/earth/w2s8.png"),
      topBarType: TOP_BAR_TYPES.DEFAULT,
    },
    w2s9: {
      image: require("@assets/quest-slices/planets/earth/w2s9.png"),
      topBarType: TOP_BAR_TYPES.DEFAULT,
    },
    w2s10: {
      image: require("@assets/quest-slices/planets/earth/w2s10.png"),
      topBarType: TOP_BAR_TYPES.DEFAULT,
    },
    w2s11: {
      image: require("@assets/quest-slices/planets/earth/w2s11.png"),
      topBarType: TOP_BAR_TYPES.DEFAULT,
    },
    w2s12: {
      image: require("@assets/quest-slices/planets/earth/w2s12.png"),
      topBarType: TOP_BAR_TYPES.WHITE,
    },
    w2s13: {
      image: require("@assets/quest-slices/planets/earth/w2s13.png"),
      topBarType: TOP_BAR_TYPES.WHITE,
    },
    w2s14: {
      image: require("@assets/quest-slices/planets/earth/w2s14.png"),
      topBarType: TOP_BAR_TYPES.WHITE,
    },
    w2s15: {
      image: require("@assets/quest-slices/planets/earth/w2s15.png"),
      topBarType: TOP_BAR_TYPES.WHITE,
    },
    w2s16: {
      image: require("@assets/quest-slices/planets/earth/w2s16.png"),
      topBarType: TOP_BAR_TYPES.WHITE,
    },
    w2s17: {
      image: require("@assets/quest-slices/planets/earth/w2s17.png"),
      topBarType: TOP_BAR_TYPES.WHITE,
    },
    w2s18: {
      image: require("@assets/quest-slices/planets/earth/w2s18.png"),
      topBarType: TOP_BAR_TYPES.WHITE,
    },
    w2s19: {
      image: require("@assets/quest-slices/planets/earth/w2s19.png"),
      topBarType: TOP_BAR_TYPES.WHITE,
    },
    w2s20: {
      image: require("@assets/quest-slices/planets/earth/w2s20.png"),
      topBarType: TOP_BAR_TYPES.WHITE,
    },
    w2s21: {
      image: require("@assets/quest-slices/planets/earth/w2s21.png"),
      topBarType: TOP_BAR_TYPES.WHITE,
    },
    w2s22: {
      image: require("@assets/quest-slices/planets/earth/w2s22.png"),
      topBarType: TOP_BAR_TYPES.WHITE,
    },
    w2s23: {
      image: require("@assets/quest-slices/planets/earth/w2s23.png"),
      topBarType: TOP_BAR_TYPES.WHITE,
    },
    w2s24: {
      image: require("@assets/quest-slices/planets/earth/w2s24.png"),
      topBarType: TOP_BAR_TYPES.DEFAULT,
    },
    w2s25: {
      image: require("@assets/quest-slices/planets/earth/w2s25.png"),
      topBarType: TOP_BAR_TYPES.WHITE,
    },
    w2s26: {
      image: require("@assets/quest-slices/planets/earth/w2s26.png"),
      topBarType: TOP_BAR_TYPES.WHITE,
    },
    w2s27: {
      image: require("@assets/quest-slices/planets/earth/w2s27.png"),
      topBarType: TOP_BAR_TYPES.WHITE,
    },
    w2s28: {
      image: require("@assets/quest-slices/planets/earth/w2s28.png"),
      topBarType: TOP_BAR_TYPES.WHITE,
    },
    w3s0: {
      image: require("@assets/quest-slices/planets/earth/w3s0.png"),
      topBarType: TOP_BAR_TYPES.DESERT,
    },
    w3s1: {
      image: require("@assets/quest-slices/planets/earth/w3s1.png"),
      topBarType: TOP_BAR_TYPES.DESERT,
    },
    w3s2: {
      image: require("@assets/quest-slices/planets/earth/w3s2.png"),
      topBarType: TOP_BAR_TYPES.DESERT,
    },
    w3s3: {
      image: require("@assets/quest-slices/planets/earth/w3s3.png"),
      topBarType: TOP_BAR_TYPES.DESERT,
    },
    w3s4: {
      image: require("@assets/quest-slices/planets/earth/w3s4.png"),
      topBarType: TOP_BAR_TYPES.DESERT,
    },
    w3s5: {
      image: require("@assets/quest-slices/planets/earth/w3s5.png"),
      topBarType: TOP_BAR_TYPES.DESERT,
    },
    w3s6: {
      image: require("@assets/quest-slices/planets/earth/w3s6.png"),
      topBarType: TOP_BAR_TYPES.DESERT,
    },
    w3s7: {
      image: require("@assets/quest-slices/planets/earth/w3s7.png"),
      topBarType: TOP_BAR_TYPES.DESERT,
    },
    w3s8: {
      image: require("@assets/quest-slices/planets/earth/w3s8.png"),
      topBarType: TOP_BAR_TYPES.DESERT,
    },
    w3s9: {
      image: require("@assets/quest-slices/planets/earth/w3s9.png"),
      topBarType: TOP_BAR_TYPES.DESERT,
    },
    w3s10: {
      image: require("@assets/quest-slices/planets/earth/w3s10.png"),
      topBarType: TOP_BAR_TYPES.DESERT,
    },
    w3s11: {
      image: require("@assets/quest-slices/planets/earth/w3s11.png"),
      topBarType: TOP_BAR_TYPES.DESERT,
    },
    w3s12: {
      image: require("@assets/quest-slices/planets/earth/w3s12.png"),
      topBarType: TOP_BAR_TYPES.DESERT,
    },
    w3s13: {
      image: require("@assets/quest-slices/planets/earth/w3s13.png"),
      topBarType: TOP_BAR_TYPES.DESERT,
    },
    w3s14: {
      image: require("@assets/quest-slices/planets/earth/w3s14.png"),
      topBarType: TOP_BAR_TYPES.DESERT,
    },
    w3s15: {
      image: require("@assets/quest-slices/planets/earth/w3s15.png"),
      topBarType: TOP_BAR_TYPES.DESERT,
    },
    w3s16: {
      image: require("@assets/quest-slices/planets/earth/w3s16.png"),
      topBarType: TOP_BAR_TYPES.DESERT,
    },
    w3s17: {
      image: require("@assets/quest-slices/planets/earth/w3s17.png"),
      topBarType: TOP_BAR_TYPES.DESERT,
    },
    w3s18: {
      image: require("@assets/quest-slices/planets/earth/w3s18.png"),
      topBarType: TOP_BAR_TYPES.DESERT,
    },
    w3s19: {
      image: require("@assets/quest-slices/planets/earth/w3s19.png"),
      topBarType: TOP_BAR_TYPES.DESERT,
    },
    w3s20: {
      image: require("@assets/quest-slices/planets/earth/w3s20.png"),
      topBarType: TOP_BAR_TYPES.WHITE,
    },
    w3s21: {
      image: require("@assets/quest-slices/planets/earth/w3s21.png"),
      topBarType: TOP_BAR_TYPES.WHITE,
    },
    w3s22: {
      image: require("@assets/quest-slices/planets/earth/w3s22.png"),
      topBarType: TOP_BAR_TYPES.WHITE,
    },
    w3s23: {
      image: require("@assets/quest-slices/planets/earth/w3s23.png"),
      topBarType: TOP_BAR_TYPES.DESERT,
    },
    w3s24: {
      image: require("@assets/quest-slices/planets/earth/w3s24.png"),
      topBarType: TOP_BAR_TYPES.WHITE,
    },
    w3s25: {
      image: require("@assets/quest-slices/planets/earth/w3s25.png"),
      topBarType: TOP_BAR_TYPES.WHITE,
    },
    w3s26: {
      image: require("@assets/quest-slices/planets/earth/w3s26.png"),
      topBarType: TOP_BAR_TYPES.WHITE,
    },
    w3s27: {
      image: require("@assets/quest-slices/planets/earth/w3s27.png"),
      topBarType: TOP_BAR_TYPES.WHITE,
    },
    w3s28: {
      image: require("@assets/quest-slices/planets/earth/w3s28.png"),
      topBarType: TOP_BAR_TYPES.WHITE,
    },
    w4s0: {
      image: require("@assets/quest-slices/planets/earth/w4s0.png"),
      topBarType: TOP_BAR_TYPES.WHITE,
    },
    w4s1: {
      image: require("@assets/quest-slices/planets/earth/w4s1.png"),
      topBarType: TOP_BAR_TYPES.WHITE,
    },
    w4s2: {
      image: require("@assets/quest-slices/planets/earth/w4s2.png"),
      topBarType: TOP_BAR_TYPES.WHITE,
    },
    w4s3: {
      image: require("@assets/quest-slices/planets/earth/w4s3.png"),
      topBarType: TOP_BAR_TYPES.WHITE,
    },
    w4s4: {
      image: require("@assets/quest-slices/planets/earth/w4s4.png"),
      topBarType: TOP_BAR_TYPES.WHITE,
    },
    w4s5: {
      image: require("@assets/quest-slices/planets/earth/w4s5.png"),
      topBarType: TOP_BAR_TYPES.WHITE,
    },
    w4s6: {
      image: require("@assets/quest-slices/planets/earth/w4s6.png"),
      topBarType: TOP_BAR_TYPES.WHITE,
    },
    w4s7: {
      image: require("@assets/quest-slices/planets/earth/w4s7.png"),
      topBarType: TOP_BAR_TYPES.WHITE,
    },
    w4s8: {
      image: require("@assets/quest-slices/planets/earth/w4s8.png"),
      topBarType: TOP_BAR_TYPES.WHITE,
    },
    w4s9: {
      image: require("@assets/quest-slices/planets/earth/w4s9.png"),
      topBarType: TOP_BAR_TYPES.WHITE,
    },
    w4s10: {
      image: require("@assets/quest-slices/planets/earth/w4s10.png"),
      topBarType: TOP_BAR_TYPES.WHITE,
    },
    w4s11: {
      image: require("@assets/quest-slices/planets/earth/w4s11.png"),
      topBarType: TOP_BAR_TYPES.WHITE,
    },
    w4s12: {
      image: require("@assets/quest-slices/planets/earth/w4s12.png"),
      topBarType: TOP_BAR_TYPES.WHITE,
    },
    w4s13: {
      image: require("@assets/quest-slices/planets/earth/w4s13.png"),
      topBarType: TOP_BAR_TYPES.WHITE,
    },
    w4s14: {
      image: require("@assets/quest-slices/planets/earth/w4s14.png"),
      topBarType: TOP_BAR_TYPES.WHITE,
    },
    w4s15: {
      image: require("@assets/quest-slices/planets/earth/w4s15.png"),
      topBarType: TOP_BAR_TYPES.WHITE,
    },
    w4s16: {
      image: require("@assets/quest-slices/planets/earth/w4s16.png"),
      topBarType: TOP_BAR_TYPES.WHITE,
    },
    w4s17: {
      image: require("@assets/quest-slices/planets/earth/w4s17.png"),
      topBarType: TOP_BAR_TYPES.WHITE,
    },
    w4s18: {
      image: require("@assets/quest-slices/planets/earth/w4s18.png"),
      topBarType: TOP_BAR_TYPES.WHITE,
    },
    w4s19: {
      image: require("@assets/quest-slices/planets/earth/w4s19.png"),
      topBarType: TOP_BAR_TYPES.WHITE,
    },
    w4s20: {
      image: require("@assets/quest-slices/planets/earth/w4s20.png"),
      topBarType: TOP_BAR_TYPES.WHITE,
    },
    w4s21: {
      image: require("@assets/quest-slices/planets/earth/w4s21.png"),
      topBarType: TOP_BAR_TYPES.WHITE,
    },
    w4s22: {
      image: require("@assets/quest-slices/planets/earth/w4s22.png"),
      topBarType: TOP_BAR_TYPES.WHITE,
    },
    w4s23: {
      image: require("@assets/quest-slices/planets/earth/w4s23.png"),
      topBarType: TOP_BAR_TYPES.WHITE,
    },
    w4s24: {
      image: require("@assets/quest-slices/planets/earth/w4s24.png"),
      topBarType: TOP_BAR_TYPES.WHITE,
    },
    w4s25: {
      image: require("@assets/quest-slices/planets/earth/w4s25.png"),
      topBarType: TOP_BAR_TYPES.WHITE,
    },
    w4s26: {
      image: require("@assets/quest-slices/planets/earth/w4s26.png"),
      topBarType: TOP_BAR_TYPES.WHITE,
    },
    w4s27: {
      image: require("@assets/quest-slices/planets/earth/w4s27.png"),
      topBarType: TOP_BAR_TYPES.WHITE,
    },
    w4s28: {
      image: require("@assets/quest-slices/planets/earth/w4s28.png"),
      topBarType: TOP_BAR_TYPES.DEFAULT,
    },
    w4s29: {
      image: require("@assets/quest-slices/planets/earth/w4s29.png"),
      topBarType: TOP_BAR_TYPES.DEFAULT,
    },
    w4s30: {
      image: require("@assets/quest-slices/planets/earth/w4s30.png"),
      topBarType: TOP_BAR_TYPES.DEFAULT,
    },
  },
  [Planets.RED]: {
    w1s0: {
      image: require("@assets/quest-slices/planets/red/w1s0.png"),
      topBarType: TOP_BAR_TYPES.FOREST,
    },
    w1s1: {
      image: require("@assets/quest-slices/planets/red/w1s1.png"),
      topBarType: TOP_BAR_TYPES.FOREST,
    },
    w1s2: {
      image: require("@assets/quest-slices/planets/red/w1s2.png"),
      topBarType: TOP_BAR_TYPES.FOREST,
    },
    w1s3: {
      image: require("@assets/quest-slices/planets/red/w1s3.png"),
      topBarType: TOP_BAR_TYPES.FOREST,
    },
    w1s4: {
      image: require("@assets/quest-slices/planets/red/w1s4.png"),
      topBarType: TOP_BAR_TYPES.FOREST,
    },
    w1s5: {
      image: require("@assets/quest-slices/planets/red/w1s5.png"),
      topBarType: TOP_BAR_TYPES.FOREST,
    },
    w1s6: {
      image: require("@assets/quest-slices/planets/red/w1s6.png"),
      topBarType: TOP_BAR_TYPES.FOREST,
    },
    w1s7: {
      image: require("@assets/quest-slices/planets/red/w1s7.png"),
      topBarType: TOP_BAR_TYPES.FOREST,
    },
    w1s8: {
      image: require("@assets/quest-slices/planets/red/w1s8.png"),
      topBarType: TOP_BAR_TYPES.FOREST,
    },
    w1s9: {
      image: require("@assets/quest-slices/planets/red/w1s9.png"),
      topBarType: TOP_BAR_TYPES.FOREST,
    },
    w1s10: {
      image: require("@assets/quest-slices/planets/red/w1s10.png"),
      topBarType: TOP_BAR_TYPES.FOREST,
    },
    w1s11: {
      image: require("@assets/quest-slices/planets/red/w1s11.png"),
      topBarType: TOP_BAR_TYPES.FOREST,
    },
    w1s12: {
      image: require("@assets/quest-slices/planets/red/w1s12.png"),
      topBarType: TOP_BAR_TYPES.FOREST,
    },
    w1s13: {
      image: require("@assets/quest-slices/planets/red/w1s13.png"),
      topBarType: TOP_BAR_TYPES.FOREST,
    },
    w1s14: {
      image: require("@assets/quest-slices/planets/red/w1s14.png"),
      topBarType: TOP_BAR_TYPES.FOREST,
    },
    w1s15: {
      image: require("@assets/quest-slices/planets/red/w1s15.png"),
      topBarType: TOP_BAR_TYPES.WHITE,
    },
    w1s16: {
      image: require("@assets/quest-slices/planets/red/w1s16.png"),
      topBarType: TOP_BAR_TYPES.WHITE,
    },
    w1s17: {
      image: require("@assets/quest-slices/planets/red/w1s17.png"),
      topBarType: TOP_BAR_TYPES.WHITE,
    },
    w1s18: {
      image: require("@assets/quest-slices/planets/red/w1s18.png"),
      topBarType: TOP_BAR_TYPES.WHITE,
    },
    w1s19: {
      image: require("@assets/quest-slices/planets/red/w1s19.png"),
      topBarType: TOP_BAR_TYPES.WHITE,
    },
    w1s20: {
      image: require("@assets/quest-slices/planets/red/w1s20.png"),
      topBarType: TOP_BAR_TYPES.WHITE,
    },
    w1s21: {
      image: require("@assets/quest-slices/planets/red/w1s21.png"),
      topBarType: TOP_BAR_TYPES.WHITE,
    },
    w1s22: {
      image: require("@assets/quest-slices/planets/red/w1s22.png"),
      topBarType: TOP_BAR_TYPES.WHITE,
    },
    w1s23: {
      image: require("@assets/quest-slices/planets/red/w1s23.png"),
      topBarType: TOP_BAR_TYPES.FOREST,
    },
    w1s24: {
      image: require("@assets/quest-slices/planets/red/w1s24.png"),
      topBarType: TOP_BAR_TYPES.FOREST,
    },
    w1s25: {
      image: require("@assets/quest-slices/planets/red/w1s25.png"),
      topBarType: TOP_BAR_TYPES.FOREST,
    },
    w1s26: {
      image: require("@assets/quest-slices/planets/red/w1s26.png"),
      topBarType: TOP_BAR_TYPES.FOREST,
    },
    w1s27: {
      image: require("@assets/quest-slices/planets/red/w1s27.png"),
      topBarType: TOP_BAR_TYPES.FOREST,
    },
    w1s28: {
      image: require("@assets/quest-slices/planets/red/w1s28.png"),
      topBarType: TOP_BAR_TYPES.FOREST,
    },
    w1s29: {
      image: require("@assets/quest-slices/planets/red/w1s29.png"),
      topBarType: TOP_BAR_TYPES.FOREST,
    },
    w2s0: {
      image: require("@assets/quest-slices/planets/red/w2s0.png"),
      topBarType: TOP_BAR_TYPES.DEFAULT,
    },
    w2s1: {
      image: require("@assets/quest-slices/planets/red/w2s1.png"),
      topBarType: TOP_BAR_TYPES.DEFAULT,
    },
    w2s2: {
      image: require("@assets/quest-slices/planets/red/w2s2.png"),
      topBarType: TOP_BAR_TYPES.DEFAULT,
    },
    w2s3: {
      image: require("@assets/quest-slices/planets/red/w2s3.png"),
      topBarType: TOP_BAR_TYPES.DEFAULT,
    },
    w2s4: {
      image: require("@assets/quest-slices/planets/red/w2s4.png"),
      topBarType: TOP_BAR_TYPES.DEFAULT,
    },
    w2s5: {
      image: require("@assets/quest-slices/planets/red/w2s5.png"),
      topBarType: TOP_BAR_TYPES.DEFAULT,
    },
    w2s6: {
      image: require("@assets/quest-slices/planets/red/w2s6.png"),
      topBarType: TOP_BAR_TYPES.DEFAULT,
    },
    w2s7: {
      image: require("@assets/quest-slices/planets/red/w2s7.png"),
      topBarType: TOP_BAR_TYPES.DEFAULT,
    },
    w2s8: {
      image: require("@assets/quest-slices/planets/red/w2s8.png"),
      topBarType: TOP_BAR_TYPES.DEFAULT,
    },
    w2s9: {
      image: require("@assets/quest-slices/planets/red/w2s9.png"),
      topBarType: TOP_BAR_TYPES.DEFAULT,
    },
    w2s10: {
      image: require("@assets/quest-slices/planets/red/w2s10.png"),
      topBarType: TOP_BAR_TYPES.DEFAULT,
    },
    w2s11: {
      image: require("@assets/quest-slices/planets/red/w2s11.png"),
      topBarType: TOP_BAR_TYPES.DEFAULT,
    },
    w2s12: {
      image: require("@assets/quest-slices/planets/red/w2s12.png"),
      topBarType: TOP_BAR_TYPES.WHITE,
    },
    w2s13: {
      image: require("@assets/quest-slices/planets/red/w2s13.png"),
      topBarType: TOP_BAR_TYPES.WHITE,
    },
    w2s14: {
      image: require("@assets/quest-slices/planets/red/w2s14.png"),
      topBarType: TOP_BAR_TYPES.WHITE,
    },
    w2s15: {
      image: require("@assets/quest-slices/planets/red/w2s15.png"),
      topBarType: TOP_BAR_TYPES.WHITE,
    },
    w2s16: {
      image: require("@assets/quest-slices/planets/red/w2s16.png"),
      topBarType: TOP_BAR_TYPES.WHITE,
    },
    w2s17: {
      image: require("@assets/quest-slices/planets/red/w2s17.png"),
      topBarType: TOP_BAR_TYPES.WHITE,
    },
    w2s18: {
      image: require("@assets/quest-slices/planets/red/w2s18.png"),
      topBarType: TOP_BAR_TYPES.WHITE,
    },
    w2s19: {
      image: require("@assets/quest-slices/planets/red/w2s19.png"),
      topBarType: TOP_BAR_TYPES.WHITE,
    },
    w2s20: {
      image: require("@assets/quest-slices/planets/red/w2s20.png"),
      topBarType: TOP_BAR_TYPES.WHITE,
    },
    w2s21: {
      image: require("@assets/quest-slices/planets/red/w2s21.png"),
      topBarType: TOP_BAR_TYPES.WHITE,
    },
    w2s22: {
      image: require("@assets/quest-slices/planets/red/w2s22.png"),
      topBarType: TOP_BAR_TYPES.WHITE,
    },
    w2s23: {
      image: require("@assets/quest-slices/planets/red/w2s23.png"),
      topBarType: TOP_BAR_TYPES.WHITE,
    },
    w2s24: {
      image: require("@assets/quest-slices/planets/red/w2s24.png"),
      topBarType: TOP_BAR_TYPES.DEFAULT,
    },
    w2s25: {
      image: require("@assets/quest-slices/planets/red/w2s25.png"),
      topBarType: TOP_BAR_TYPES.DEFAULT,
    },
    w2s26: {
      image: require("@assets/quest-slices/planets/red/w2s26.png"),
      topBarType: TOP_BAR_TYPES.WHITE,
    },
    w2s27: {
      image: require("@assets/quest-slices/planets/red/w2s27.png"),
      topBarType: TOP_BAR_TYPES.WHITE,
    },
    w2s28: {
      image: require("@assets/quest-slices/planets/red/w2s28.png"),
      topBarType: TOP_BAR_TYPES.DEFAULT,
    },
    w3s0: {
      image: require("@assets/quest-slices/planets/red/w3s0.png"),
      topBarType: TOP_BAR_TYPES.DESERT,
    },
    w3s1: {
      image: require("@assets/quest-slices/planets/red/w3s1.png"),
      topBarType: TOP_BAR_TYPES.DESERT,
    },
    w3s2: {
      image: require("@assets/quest-slices/planets/red/w3s2.png"),
      topBarType: TOP_BAR_TYPES.DESERT,
    },
    w3s3: {
      image: require("@assets/quest-slices/planets/red/w3s3.png"),
      topBarType: TOP_BAR_TYPES.DESERT,
    },
    w3s4: {
      image: require("@assets/quest-slices/planets/red/w3s4.png"),
      topBarType: TOP_BAR_TYPES.DESERT,
    },
    w3s5: {
      image: require("@assets/quest-slices/planets/red/w3s5.png"),
      topBarType: TOP_BAR_TYPES.DESERT,
    },
    w3s6: {
      image: require("@assets/quest-slices/planets/red/w3s6.png"),
      topBarType: TOP_BAR_TYPES.DESERT,
    },
    w3s7: {
      image: require("@assets/quest-slices/planets/red/w3s7.png"),
      topBarType: TOP_BAR_TYPES.DESERT,
    },
    w3s8: {
      image: require("@assets/quest-slices/planets/red/w3s8.png"),
      topBarType: TOP_BAR_TYPES.DESERT,
    },
    w3s9: {
      image: require("@assets/quest-slices/planets/red/w3s9.png"),
      topBarType: TOP_BAR_TYPES.DESERT,
    },
    w3s10: {
      image: require("@assets/quest-slices/planets/red/w3s10.png"),
      topBarType: TOP_BAR_TYPES.DESERT,
    },
    w3s11: {
      image: require("@assets/quest-slices/planets/red/w3s11.png"),
      topBarType: TOP_BAR_TYPES.DESERT,
    },
    w3s12: {
      image: require("@assets/quest-slices/planets/red/w3s12.png"),
      topBarType: TOP_BAR_TYPES.DESERT,
    },
    w3s13: {
      image: require("@assets/quest-slices/planets/red/w3s13.png"),
      topBarType: TOP_BAR_TYPES.DESERT,
    },
    w3s14: {
      image: require("@assets/quest-slices/planets/red/w3s14.png"),
      topBarType: TOP_BAR_TYPES.DESERT,
    },
    w3s15: {
      image: require("@assets/quest-slices/planets/red/w3s15.png"),
      topBarType: TOP_BAR_TYPES.DESERT,
    },
    w3s16: {
      image: require("@assets/quest-slices/planets/red/w3s16.png"),
      topBarType: TOP_BAR_TYPES.DESERT,
    },
    w3s17: {
      image: require("@assets/quest-slices/planets/red/w3s17.png"),
      topBarType: TOP_BAR_TYPES.DESERT,
    },
    w3s18: {
      image: require("@assets/quest-slices/planets/red/w3s18.png"),
      topBarType: TOP_BAR_TYPES.DESERT,
    },
    w3s19: {
      image: require("@assets/quest-slices/planets/red/w3s19.png"),
      topBarType: TOP_BAR_TYPES.DESERT,
    },
    w3s20: {
      image: require("@assets/quest-slices/planets/red/w3s20.png"),
      topBarType: TOP_BAR_TYPES.WHITE,
    },
    w3s21: {
      image: require("@assets/quest-slices/planets/red/w3s21.png"),
      topBarType: TOP_BAR_TYPES.WHITE,
    },
    w3s22: {
      image: require("@assets/quest-slices/planets/red/w3s22.png"),
      topBarType: TOP_BAR_TYPES.WHITE,
    },
    w3s23: {
      image: require("@assets/quest-slices/planets/red/w3s23.png"),
      topBarType: TOP_BAR_TYPES.DESERT,
    },
    w3s24: {
      image: require("@assets/quest-slices/planets/red/w3s24.png"),
      topBarType: TOP_BAR_TYPES.WHITE,
    },
    w3s25: {
      image: require("@assets/quest-slices/planets/red/w3s25.png"),
      topBarType: TOP_BAR_TYPES.WHITE,
    },
    w3s26: {
      image: require("@assets/quest-slices/planets/red/w3s26.png"),
      topBarType: TOP_BAR_TYPES.WHITE,
    },
    w3s27: {
      image: require("@assets/quest-slices/planets/red/w3s27.png"),
      topBarType: TOP_BAR_TYPES.WHITE,
    },
    w3s28: {
      image: require("@assets/quest-slices/planets/red/w3s28.png"),
      topBarType: TOP_BAR_TYPES.WHITE,
    },
    w4s0: {
      image: require("@assets/quest-slices/planets/red/w4s0.png"),
      topBarType: TOP_BAR_TYPES.DEFAULT,
    },
    w4s1: {
      image: require("@assets/quest-slices/planets/red/w4s1.png"),
      topBarType: TOP_BAR_TYPES.DEFAULT,
    },
    w4s2: {
      image: require("@assets/quest-slices/planets/red/w4s2.png"),
      topBarType: TOP_BAR_TYPES.DEFAULT,
    },
    w4s3: {
      image: require("@assets/quest-slices/planets/red/w4s3.png"),
      topBarType: TOP_BAR_TYPES.DEFAULT,
    },
    w4s4: {
      image: require("@assets/quest-slices/planets/red/w4s4.png"),
      topBarType: TOP_BAR_TYPES.DEFAULT,
    },
    w4s5: {
      image: require("@assets/quest-slices/planets/red/w4s5.png"),
      topBarType: TOP_BAR_TYPES.WHITE,
    },
    w4s6: {
      image: require("@assets/quest-slices/planets/red/w4s6.png"),
      topBarType: TOP_BAR_TYPES.WHITE,
    },
    w4s7: {
      image: require("@assets/quest-slices/planets/red/w4s7.png"),
      topBarType: TOP_BAR_TYPES.WHITE,
    },
    w4s8: {
      image: require("@assets/quest-slices/planets/red/w4s8.png"),
      topBarType: TOP_BAR_TYPES.WHITE,
    },
    w4s9: {
      image: require("@assets/quest-slices/planets/red/w4s9.png"),
      topBarType: TOP_BAR_TYPES.WHITE,
    },
    w4s10: {
      image: require("@assets/quest-slices/planets/red/w4s10.png"),
      topBarType: TOP_BAR_TYPES.WHITE,
    },
    w4s11: {
      image: require("@assets/quest-slices/planets/red/w4s11.png"),
      topBarType: TOP_BAR_TYPES.WHITE,
    },
    w4s12: {
      image: require("@assets/quest-slices/planets/red/w4s12.png"),
      topBarType: TOP_BAR_TYPES.WHITE,
    },
    w4s13: {
      image: require("@assets/quest-slices/planets/red/w4s13.png"),
      topBarType: TOP_BAR_TYPES.WHITE,
    },
    w4s14: {
      image: require("@assets/quest-slices/planets/red/w4s14.png"),
      topBarType: TOP_BAR_TYPES.WHITE,
    },
    w4s15: {
      image: require("@assets/quest-slices/planets/red/w4s15.png"),
      topBarType: TOP_BAR_TYPES.WHITE,
    },
    w4s16: {
      image: require("@assets/quest-slices/planets/red/w4s16.png"),
      topBarType: TOP_BAR_TYPES.WHITE,
    },
    w4s17: {
      image: require("@assets/quest-slices/planets/red/w4s17.png"),
      topBarType: TOP_BAR_TYPES.WHITE,
    },
    w4s18: {
      image: require("@assets/quest-slices/planets/red/w4s18.png"),
      topBarType: TOP_BAR_TYPES.WHITE,
    },
    w4s19: {
      image: require("@assets/quest-slices/planets/red/w4s19.png"),
      topBarType: TOP_BAR_TYPES.WHITE,
    },
    w4s20: {
      image: require("@assets/quest-slices/planets/red/w4s20.png"),
      topBarType: TOP_BAR_TYPES.WHITE,
    },
    w4s21: {
      image: require("@assets/quest-slices/planets/red/w4s21.png"),
      topBarType: TOP_BAR_TYPES.WHITE,
    },
    w4s22: {
      image: require("@assets/quest-slices/planets/red/w4s22.png"),
      topBarType: TOP_BAR_TYPES.WHITE,
    },
    w4s23: {
      image: require("@assets/quest-slices/planets/red/w4s23.png"),
      topBarType: TOP_BAR_TYPES.WHITE,
    },
    w4s24: {
      image: require("@assets/quest-slices/planets/red/w4s24.png"),
      topBarType: TOP_BAR_TYPES.WHITE,
    },
    w4s25: {
      image: require("@assets/quest-slices/planets/red/w4s25.png"),
      topBarType: TOP_BAR_TYPES.WHITE,
    },
    w4s26: {
      image: require("@assets/quest-slices/planets/red/w4s26.png"),
      topBarType: TOP_BAR_TYPES.WHITE,
    },
    w4s27: {
      image: require("@assets/quest-slices/planets/red/w4s27.png"),
      topBarType: TOP_BAR_TYPES.DEFAULT,
    },
    w4s28: {
      image: require("@assets/quest-slices/planets/red/w4s28.png"),
      topBarType: TOP_BAR_TYPES.WHITE,
    },
    w4s29: {
      image: require("@assets/quest-slices/planets/red/w4s29.png"),
      topBarType: TOP_BAR_TYPES.WHITE,
    },
    w4s30: {
      image: require("@assets/quest-slices/planets/red/w4s30.png"),
      topBarType: TOP_BAR_TYPES.WHITE,
    },
  },
  [Planets.BRIGHT]: {
    w1s0: {
      image: require("@assets/quest-slices/planets/bright/w1s0.png"),
      topBarType: TOP_BAR_TYPES.FOREST,
    },
    w1s1: {
      image: require("@assets/quest-slices/planets/bright/w1s1.png"),
      topBarType: TOP_BAR_TYPES.FOREST,
    },
    w1s2: {
      image: require("@assets/quest-slices/planets/bright/w1s2.png"),
      topBarType: TOP_BAR_TYPES.FOREST,
    },
    w1s3: {
      image: require("@assets/quest-slices/planets/bright/w1s3.png"),
      topBarType: TOP_BAR_TYPES.FOREST,
    },
    w1s4: {
      image: require("@assets/quest-slices/planets/bright/w1s4.png"),
      topBarType: TOP_BAR_TYPES.FOREST,
    },
    w1s5: {
      image: require("@assets/quest-slices/planets/bright/w1s5.png"),
      topBarType: TOP_BAR_TYPES.FOREST,
    },
    w1s6: {
      image: require("@assets/quest-slices/planets/bright/w1s6.png"),
      topBarType: TOP_BAR_TYPES.FOREST,
    },
    w1s7: {
      image: require("@assets/quest-slices/planets/bright/w1s7.png"),
      topBarType: TOP_BAR_TYPES.FOREST,
    },
    w1s8: {
      image: require("@assets/quest-slices/planets/bright/w1s8.png"),
      topBarType: TOP_BAR_TYPES.FOREST,
    },
    w1s9: {
      image: require("@assets/quest-slices/planets/bright/w1s9.png"),
      topBarType: TOP_BAR_TYPES.FOREST,
    },
    w1s10: {
      image: require("@assets/quest-slices/planets/bright/w1s10.png"),
      topBarType: TOP_BAR_TYPES.FOREST,
    },
    w1s11: {
      image: require("@assets/quest-slices/planets/bright/w1s11.png"),
      topBarType: TOP_BAR_TYPES.FOREST,
    },
    w1s12: {
      image: require("@assets/quest-slices/planets/bright/w1s12.png"),
      topBarType: TOP_BAR_TYPES.FOREST,
    },
    w1s13: {
      image: require("@assets/quest-slices/planets/bright/w1s13.png"),
      topBarType: TOP_BAR_TYPES.FOREST,
    },
    w1s14: {
      image: require("@assets/quest-slices/planets/bright/w1s14.png"),
      topBarType: TOP_BAR_TYPES.FOREST,
    },
    w1s15: {
      image: require("@assets/quest-slices/planets/bright/w1s15.png"),
      topBarType: TOP_BAR_TYPES.FOREST,
    },
    w1s16: {
      image: require("@assets/quest-slices/planets/bright/w1s16.png"),
      topBarType: TOP_BAR_TYPES.FOREST,
    },
    w1s17: {
      image: require("@assets/quest-slices/planets/bright/w1s17.png"),
      topBarType: TOP_BAR_TYPES.FOREST,
    },
    w1s18: {
      image: require("@assets/quest-slices/planets/bright/w1s18.png"),
      topBarType: TOP_BAR_TYPES.FOREST,
    },
    w1s19: {
      image: require("@assets/quest-slices/planets/bright/w1s19.png"),
      topBarType: TOP_BAR_TYPES.FOREST,
    },
    w1s20: {
      image: require("@assets/quest-slices/planets/bright/w1s20.png"),
      topBarType: TOP_BAR_TYPES.FOREST,
    },
    w1s21: {
      image: require("@assets/quest-slices/planets/bright/w1s21.png"),
      topBarType: TOP_BAR_TYPES.FOREST,
    },
    w1s22: {
      image: require("@assets/quest-slices/planets/bright/w1s22.png"),
      topBarType: TOP_BAR_TYPES.FOREST,
    },
    w1s23: {
      image: require("@assets/quest-slices/planets/bright/w1s23.png"),
      topBarType: TOP_BAR_TYPES.FOREST,
    },
    w1s24: {
      image: require("@assets/quest-slices/planets/bright/w1s24.png"),
      topBarType: TOP_BAR_TYPES.FOREST,
    },
    w1s25: {
      image: require("@assets/quest-slices/planets/bright/w1s25.png"),
      topBarType: TOP_BAR_TYPES.FOREST,
    },
    w1s26: {
      image: require("@assets/quest-slices/planets/bright/w1s26.png"),
      topBarType: TOP_BAR_TYPES.FOREST,
    },
    w1s27: {
      image: require("@assets/quest-slices/planets/bright/w1s27.png"),
      topBarType: TOP_BAR_TYPES.FOREST,
    },
    w1s28: {
      image: require("@assets/quest-slices/planets/bright/w1s28.png"),
      topBarType: TOP_BAR_TYPES.FOREST,
    },
    w1s29: {
      image: require("@assets/quest-slices/planets/bright/w1s29.png"),
      topBarType: TOP_BAR_TYPES.FOREST,
    },
    w2s0: {
      image: require("@assets/quest-slices/planets/bright/w2s0.png"),
      topBarType: TOP_BAR_TYPES.DEFAULT,
    },
    w2s1: {
      image: require("@assets/quest-slices/planets/bright/w2s1.png"),
      topBarType: TOP_BAR_TYPES.DEFAULT,
    },
    w2s2: {
      image: require("@assets/quest-slices/planets/bright/w2s2.png"),
      topBarType: TOP_BAR_TYPES.DEFAULT,
    },
    w2s3: {
      image: require("@assets/quest-slices/planets/bright/w2s3.png"),
      topBarType: TOP_BAR_TYPES.DEFAULT,
    },
    w2s4: {
      image: require("@assets/quest-slices/planets/bright/w2s4.png"),
      topBarType: TOP_BAR_TYPES.DEFAULT,
    },
    w2s5: {
      image: require("@assets/quest-slices/planets/bright/w2s5.png"),
      topBarType: TOP_BAR_TYPES.DEFAULT,
    },
    w2s6: {
      image: require("@assets/quest-slices/planets/bright/w2s6.png"),
      topBarType: TOP_BAR_TYPES.DEFAULT,
    },
    w2s7: {
      image: require("@assets/quest-slices/planets/bright/w2s7.png"),
      topBarType: TOP_BAR_TYPES.DEFAULT,
    },
    w2s8: {
      image: require("@assets/quest-slices/planets/bright/w2s8.png"),
      topBarType: TOP_BAR_TYPES.DEFAULT,
    },
    w2s9: {
      image: require("@assets/quest-slices/planets/bright/w2s9.png"),
      topBarType: TOP_BAR_TYPES.DEFAULT,
    },
    w2s10: {
      image: require("@assets/quest-slices/planets/bright/w2s10.png"),
      topBarType: TOP_BAR_TYPES.DEFAULT,
    },
    w2s11: {
      image: require("@assets/quest-slices/planets/bright/w2s11.png"),
      topBarType: TOP_BAR_TYPES.DEFAULT,
    },
    w2s12: {
      image: require("@assets/quest-slices/planets/bright/w2s12.png"),
      topBarType: TOP_BAR_TYPES.WHITE,
    },
    w2s13: {
      image: require("@assets/quest-slices/planets/bright/w2s13.png"),
      topBarType: TOP_BAR_TYPES.WHITE,
    },
    w2s14: {
      image: require("@assets/quest-slices/planets/bright/w2s14.png"),
      topBarType: TOP_BAR_TYPES.WHITE,
    },
    w2s15: {
      image: require("@assets/quest-slices/planets/bright/w2s15.png"),
      topBarType: TOP_BAR_TYPES.WHITE,
    },
    w2s16: {
      image: require("@assets/quest-slices/planets/bright/w2s16.png"),
      topBarType: TOP_BAR_TYPES.WHITE,
    },
    w2s17: {
      image: require("@assets/quest-slices/planets/bright/w2s17.png"),
      topBarType: TOP_BAR_TYPES.DEFAULT,
    },
    w2s18: {
      image: require("@assets/quest-slices/planets/bright/w2s18.png"),
      topBarType: TOP_BAR_TYPES.WHITE,
    },
    w2s19: {
      image: require("@assets/quest-slices/planets/bright/w2s19.png"),
      topBarType: TOP_BAR_TYPES.WHITE,
    },
    w2s20: {
      image: require("@assets/quest-slices/planets/bright/w2s20.png"),
      topBarType: TOP_BAR_TYPES.WHITE,
    },
    w2s21: {
      image: require("@assets/quest-slices/planets/bright/w2s21.png"),
      topBarType: TOP_BAR_TYPES.WHITE,
    },
    w2s22: {
      image: require("@assets/quest-slices/planets/bright/w2s22.png"),
      topBarType: TOP_BAR_TYPES.WHITE,
    },
    w2s23: {
      image: require("@assets/quest-slices/planets/bright/w2s23.png"),
      topBarType: TOP_BAR_TYPES.WHITE,
    },
    w2s24: {
      image: require("@assets/quest-slices/planets/bright/w2s24.png"),
      topBarType: TOP_BAR_TYPES.DEFAULT,
    },
    w2s25: {
      image: require("@assets/quest-slices/planets/bright/w2s25.png"),
      topBarType: TOP_BAR_TYPES.DEFAULT,
    },
    w2s26: {
      image: require("@assets/quest-slices/planets/bright/w2s26.png"),
      topBarType: TOP_BAR_TYPES.WHITE,
    },
    w2s27: {
      image: require("@assets/quest-slices/planets/bright/w2s27.png"),
      topBarType: TOP_BAR_TYPES.DEFAULT,
    },
    w2s28: {
      image: require("@assets/quest-slices/planets/bright/w2s28.png"),
      topBarType: TOP_BAR_TYPES.DEFAULT,
    },
    w3s0: {
      image: require("@assets/quest-slices/planets/bright/w3s0.png"),
      topBarType: TOP_BAR_TYPES.DESERT,
    },
    w3s1: {
      image: require("@assets/quest-slices/planets/bright/w3s1.png"),
      topBarType: TOP_BAR_TYPES.DESERT,
    },
    w3s2: {
      image: require("@assets/quest-slices/planets/bright/w3s2.png"),
      topBarType: TOP_BAR_TYPES.DESERT,
    },
    w3s3: {
      image: require("@assets/quest-slices/planets/bright/w3s3.png"),
      topBarType: TOP_BAR_TYPES.DESERT,
    },
    w3s4: {
      image: require("@assets/quest-slices/planets/bright/w3s4.png"),
      topBarType: TOP_BAR_TYPES.DESERT,
    },
    w3s5: {
      image: require("@assets/quest-slices/planets/bright/w3s5.png"),
      topBarType: TOP_BAR_TYPES.DESERT,
    },
    w3s6: {
      image: require("@assets/quest-slices/planets/bright/w3s6.png"),
      topBarType: TOP_BAR_TYPES.DESERT,
    },
    w3s7: {
      image: require("@assets/quest-slices/planets/bright/w3s7.png"),
      topBarType: TOP_BAR_TYPES.DESERT,
    },
    w3s8: {
      image: require("@assets/quest-slices/planets/bright/w3s8.png"),
      topBarType: TOP_BAR_TYPES.DESERT,
    },
    w3s9: {
      image: require("@assets/quest-slices/planets/bright/w3s9.png"),
      topBarType: TOP_BAR_TYPES.DESERT,
    },
    w3s10: {
      image: require("@assets/quest-slices/planets/bright/w3s10.png"),
      topBarType: TOP_BAR_TYPES.DESERT,
    },
    w3s11: {
      image: require("@assets/quest-slices/planets/bright/w3s11.png"),
      topBarType: TOP_BAR_TYPES.DESERT,
    },
    w3s12: {
      image: require("@assets/quest-slices/planets/bright/w3s12.png"),
      topBarType: TOP_BAR_TYPES.DESERT,
    },
    w3s13: {
      image: require("@assets/quest-slices/planets/bright/w3s13.png"),
      topBarType: TOP_BAR_TYPES.DESERT,
    },
    w3s14: {
      image: require("@assets/quest-slices/planets/bright/w3s14.png"),
      topBarType: TOP_BAR_TYPES.DESERT,
    },
    w3s15: {
      image: require("@assets/quest-slices/planets/bright/w3s15.png"),
      topBarType: TOP_BAR_TYPES.DESERT,
    },
    w3s16: {
      image: require("@assets/quest-slices/planets/bright/w3s16.png"),
      topBarType: TOP_BAR_TYPES.DESERT,
    },
    w3s17: {
      image: require("@assets/quest-slices/planets/bright/w3s17.png"),
      topBarType: TOP_BAR_TYPES.DESERT,
    },
    w3s18: {
      image: require("@assets/quest-slices/planets/bright/w3s18.png"),
      topBarType: TOP_BAR_TYPES.DESERT,
    },
    w3s19: {
      image: require("@assets/quest-slices/planets/bright/w3s19.png"),
      topBarType: TOP_BAR_TYPES.DESERT,
    },
    w3s20: {
      image: require("@assets/quest-slices/planets/bright/w3s20.png"),
      topBarType: TOP_BAR_TYPES.DESERT,
    },
    w3s21: {
      image: require("@assets/quest-slices/planets/bright/w3s21.png"),
      topBarType: TOP_BAR_TYPES.DESERT,
    },
    w3s22: {
      image: require("@assets/quest-slices/planets/bright/w3s22.png"),
      topBarType: TOP_BAR_TYPES.DESERT,
    },
    w3s23: {
      image: require("@assets/quest-slices/planets/bright/w3s23.png"),
      topBarType: TOP_BAR_TYPES.DESERT,
    },
    w3s24: {
      image: require("@assets/quest-slices/planets/bright/w3s24.png"),
      topBarType: TOP_BAR_TYPES.DESERT,
    },
    w3s25: {
      image: require("@assets/quest-slices/planets/bright/w3s25.png"),
      topBarType: TOP_BAR_TYPES.DESERT,
    },
    w3s26: {
      image: require("@assets/quest-slices/planets/bright/w3s26.png"),
      topBarType: TOP_BAR_TYPES.DESERT,
    },
    w3s27: {
      image: require("@assets/quest-slices/planets/bright/w3s27.png"),
      topBarType: TOP_BAR_TYPES.DESERT,
    },
    w3s28: {
      image: require("@assets/quest-slices/planets/bright/w3s28.png"),
      topBarType: TOP_BAR_TYPES.DESERT,
    },
    w4s0: {
      image: require("@assets/quest-slices/planets/bright/w4s0.png"),
      topBarType: TOP_BAR_TYPES.DEFAULT,
    },
    w4s1: {
      image: require("@assets/quest-slices/planets/bright/w4s1.png"),
      topBarType: TOP_BAR_TYPES.DEFAULT,
    },
    w4s2: {
      image: require("@assets/quest-slices/planets/bright/w4s2.png"),
      topBarType: TOP_BAR_TYPES.DEFAULT,
    },
    w4s3: {
      image: require("@assets/quest-slices/planets/bright/w4s3.png"),
      topBarType: TOP_BAR_TYPES.DEFAULT,
    },
    w4s4: {
      image: require("@assets/quest-slices/planets/bright/w4s4.png"),
      topBarType: TOP_BAR_TYPES.DEFAULT,
    },
    w4s5: {
      image: require("@assets/quest-slices/planets/bright/w4s5.png"),
      topBarType: TOP_BAR_TYPES.DEFAULT,
    },
    w4s6: {
      image: require("@assets/quest-slices/planets/bright/w4s6.png"),
      topBarType: TOP_BAR_TYPES.DEFAULT,
    },
    w4s7: {
      image: require("@assets/quest-slices/planets/bright/w4s7.png"),
      topBarType: TOP_BAR_TYPES.DEFAULT,
    },
    w4s8: {
      image: require("@assets/quest-slices/planets/bright/w4s8.png"),
      topBarType: TOP_BAR_TYPES.DEFAULT,
    },
    w4s9: {
      image: require("@assets/quest-slices/planets/bright/w4s9.png"),
      topBarType: TOP_BAR_TYPES.DEFAULT,
    },
    w4s10: {
      image: require("@assets/quest-slices/planets/bright/w4s10.png"),
      topBarType: TOP_BAR_TYPES.DEFAULT,
    },
    w4s11: {
      image: require("@assets/quest-slices/planets/bright/w4s11.png"),
      topBarType: TOP_BAR_TYPES.DEFAULT,
    },
    w4s12: {
      image: require("@assets/quest-slices/planets/bright/w4s12.png"),
      topBarType: TOP_BAR_TYPES.DEFAULT,
    },
    w4s13: {
      image: require("@assets/quest-slices/planets/bright/w4s13.png"),
      topBarType: TOP_BAR_TYPES.DEFAULT,
    },
    w4s14: {
      image: require("@assets/quest-slices/planets/bright/w4s14.png"),
      topBarType: TOP_BAR_TYPES.DEFAULT,
    },
    w4s15: {
      image: require("@assets/quest-slices/planets/bright/w4s15.png"),
      topBarType: TOP_BAR_TYPES.DEFAULT,
    },
    w4s16: {
      image: require("@assets/quest-slices/planets/bright/w4s16.png"),
      topBarType: TOP_BAR_TYPES.DEFAULT,
    },
    w4s17: {
      image: require("@assets/quest-slices/planets/bright/w4s17.png"),
      topBarType: TOP_BAR_TYPES.DEFAULT,
    },
    w4s18: {
      image: require("@assets/quest-slices/planets/bright/w4s18.png"),
      topBarType: TOP_BAR_TYPES.DEFAULT,
    },
    w4s19: {
      image: require("@assets/quest-slices/planets/bright/w4s19.png"),
      topBarType: TOP_BAR_TYPES.DEFAULT,
    },
    w4s20: {
      image: require("@assets/quest-slices/planets/bright/w4s20.png"),
      topBarType: TOP_BAR_TYPES.DEFAULT,
    },
    w4s21: {
      image: require("@assets/quest-slices/planets/bright/w4s21.png"),
      topBarType: TOP_BAR_TYPES.DEFAULT,
    },
    w4s22: {
      image: require("@assets/quest-slices/planets/bright/w4s22.png"),
      topBarType: TOP_BAR_TYPES.DEFAULT,
    },
    w4s23: {
      image: require("@assets/quest-slices/planets/bright/w4s23.png"),
      topBarType: TOP_BAR_TYPES.DEFAULT,
    },
    w4s24: {
      image: require("@assets/quest-slices/planets/bright/w4s24.png"),
      topBarType: TOP_BAR_TYPES.DEFAULT,
    },
    w4s25: {
      image: require("@assets/quest-slices/planets/bright/w4s25.png"),
      topBarType: TOP_BAR_TYPES.DEFAULT,
    },
    w4s26: {
      image: require("@assets/quest-slices/planets/bright/w4s26.png"),
      topBarType: TOP_BAR_TYPES.DEFAULT,
    },
    w4s27: {
      image: require("@assets/quest-slices/planets/bright/w4s27.png"),
      topBarType: TOP_BAR_TYPES.DEFAULT,
    },
    w4s28: {
      image: require("@assets/quest-slices/planets/bright/w4s28.png"),
      topBarType: TOP_BAR_TYPES.WHITE,
    },
    w4s29: {
      image: require("@assets/quest-slices/planets/bright/w4s29.png"),
      topBarType: TOP_BAR_TYPES.WHITE,
    },
    w4s30: {
      image: require("@assets/quest-slices/planets/bright/w4s30.png"),
      topBarType: TOP_BAR_TYPES.WHITE,
    },
  },
};

const planetsLoadingSlices = {
  [Planets.EARTH]: {
    w1s1: require("@assets/quest-slices/planets/earth/loading/w1s1.png"),
    w2s1: require("@assets/quest-slices/planets/earth/loading/w2s1.png"),
    w3s1: require("@assets/quest-slices/planets/earth/loading/w3s1.png"),
    w4s1: require("@assets/quest-slices/planets/earth/loading/w4s1.png"),
  },
  [Planets.RED]: {
    w1s1: require("@assets/quest-slices/planets/red/loading/w1s1.png"),
    w2s1: require("@assets/quest-slices/planets/red/loading/w2s1.png"),
    w3s1: require("@assets/quest-slices/planets/red/loading/w3s1.png"),
    w4s1: require("@assets/quest-slices/planets/red/loading/w4s1.png"),
  },
  [Planets.BRIGHT]: {
    w1s1: require("@assets/quest-slices/planets/bright/loading/w1s1.png"),
    w2s1: require("@assets/quest-slices/planets/bright/loading/w2s1.png"),
    w3s1: require("@assets/quest-slices/planets/bright/loading/w3s1.png"),
    w4s1: require("@assets/quest-slices/planets/bright/loading/w4s1.png"),
  },
};

export const interstitialsSlices = (currentPlanet: Planets): { [x: string]: IMapSlice[] } => ({
  forest: [
    {
      id: "MAP_SLICE_W01_INTERSTITIALS_01",
      image: planetsInterstitials[currentPlanet].w1s0,
      slots: [],
      topBarType: TOP_BAR_TYPES.FOREST,
    },
  ],
  ocean: [
    {
      id: "MAP_SLICE_W02_INTERSTITIALS_01",
      image: planetsInterstitials[currentPlanet].w2s0,
      slots: [],
      topBarType: TOP_BAR_TYPES.DEFAULT,
    },
    {
      id: "MAP_SLICE_W02_INTERSTITIALS_02",
      image: planetsInterstitials[currentPlanet].w2s1,
      slots: [],
      topBarType: TOP_BAR_TYPES.DEFAULT,
    },
  ],
  desert: [
    {
      id: "MAP_SLICE_W03_INTERSTITIALS_01",
      image: planetsInterstitials[currentPlanet].w3s0,
      slots: [],
      topBarType: TOP_BAR_TYPES.DEFAULT,
    },
    {
      id: "MAP_SLICE_W03_INTERSTITIALS_02",
      image: planetsInterstitials[currentPlanet].w3s1,
      slots: [],
      topBarType: TOP_BAR_TYPES.DEFAULT,
    },
  ],
  mountain: [
    {
      id: "MAP_SLICE_W04_INTERSTITIALS_01",
      image: planetsInterstitials[currentPlanet].w4s0,
      slots: [],
      topBarType: TOP_BAR_TYPES.WHITE,
    },
    {
      id: "MAP_SLICE_W04_INTERSTITIALS_02",
      image: planetsInterstitials[currentPlanet].w4s1,
      slots: [],
      topBarType: TOP_BAR_TYPES.DEFAULT,
    },
  ],
  // just didn't know what to name it yet
  last: [
    {
      id: "MAP_SLICE_W05_INTERSTITIALS_01",
      image: planetsInterstitials[currentPlanet].w5s0,
      slots: [],
      topBarType: TOP_BAR_TYPES.WHITE,
    },
  ],
});

const WorldSlices = (currentPlanet: Planets): IMapSlice[] => [
  /**
   *  FOREST WORLD
   *  first episode
   */
  {
    episodeSettings: episodeSettings.w1s1,
    id: "MAP_SLICE_W01E00",
    image: planetWordSlices[currentPlanet].w1s0.image,
    slots: [{ index: 1, left: 187, top: 8 }],
    topBarType: planetWordSlices[currentPlanet].w1s0.topBarType,
  },
  {
    episodeSettings: episodeSettings.w1s1,
    id: "MAP_SLICE_W01E01",
    image: planetWordSlices[currentPlanet].w1s1.image,
    slots: [
      { bottom: 36, index: 2, left: 96 },
      { bottom: 36, index: 0, left: 187 },
      { bottom: 36, index: 3, left: 276 },
      { index: 4, left: 187, top: 8 },
    ],
    topBarType: planetWordSlices[currentPlanet].w1s1.topBarType,
  },
  {
    episodeSettings: episodeSettings.w1s1,
    id: "MAP_SLICE_W01E02",
    image: planetWordSlices[currentPlanet].w1s2.image,
    slots: [
      { bottom: 36, index: 5, left: 187 },
      { index: 6, left: 187, top: 8 },
    ],
    topBarType: planetWordSlices[currentPlanet].w1s2.topBarType,
  },
  {
    id: "MAP_SLICE_W01E03",
    image: planetWordSlices[currentPlanet].w1s3.image,
    slots: [],
    topBarType: planetWordSlices[currentPlanet].w1s3.topBarType,
  },
  // next episode
  {
    episodeSettings: episodeSettings.w1s2,
    id: "MAP_SLICE_W01E04",
    image: planetWordSlices[currentPlanet].w1s4.image,
    slots: [
      { bottom: 36, index: 7, left: 187 },
      { index: 8, left: 187, top: 8 },
    ],
    topBarType: planetWordSlices[currentPlanet].w1s4.topBarType,
  },
  {
    episodeSettings: episodeSettings.w1s2,
    id: "MAP_SLICE_W01E05",
    image: planetWordSlices[currentPlanet].w1s5.image,
    slots: [
      { bottom: 36, index: 9, left: 187 },
      { index: 10, left: 286, top: 8 },
      { index: 11, left: 187, top: 8 },
      { index: 12, left: 96, top: 8 },
    ],
    topBarType: planetWordSlices[currentPlanet].w1s5.topBarType,
  },
  {
    episodeSettings: episodeSettings.w1s2,
    id: "MAP_SLICE_W01E06",
    image: planetWordSlices[currentPlanet].w1s6.image,
    slots: [{ bottom: 36, index: 13, left: 187 }],
    topBarType: planetWordSlices[currentPlanet].w1s6.topBarType,
  },
  // next episode
  {
    id: "MAP_SLICE_W01E07",
    image: planetWordSlices[currentPlanet].w1s7.image,
    slots: [],
    topBarType: planetWordSlices[currentPlanet].w1s7.topBarType,
  },
  {
    episodeSettings: episodeSettings.w1s3,
    id: "MAP_SLICE_W01E08",
    image: planetWordSlices[currentPlanet].w1s8.image,
    slots: [
      { index: 14, left: 187, top: 20 },
      { index: 15, left: 96, top: 20 },
      { left: 286, top: 20, index: 17 },
    ],
    topBarType: planetWordSlices[currentPlanet].w1s8.topBarType,
  },
  {
    episodeSettings: episodeSettings.w1s3,
    id: "MAP_SLICE_W01E09",
    image: planetWordSlices[currentPlanet].w1s9.image,
    slots: [
      { index: 16, bottom: 16, left: 96 },
      { bottom: 16, index: 18, left: 286 },
      { index: 19, left: 187, top: 28 },
    ],
    topBarType: planetWordSlices[currentPlanet].w1s9.topBarType,
  },
  {
    episodeSettings: episodeSettings.w1s3,
    id: "MAP_SLICE_W01E10",
    image: planetWordSlices[currentPlanet].w1s10.image,
    slots: [{ bottom: 8, index: 20, left: 187 }],
    topBarType: planetWordSlices[currentPlanet].w1s10.topBarType,
  },
  // next episode
  {
    id: "MAP_SLICE_W01E11",
    image: planetWordSlices[currentPlanet].w1s11.image,
    slots: [],
    topBarType: planetWordSlices[currentPlanet].w1s11.topBarType,
  },
  {
    episodeSettings: episodeSettings.w1s4,
    id: "MAP_SLICE_W01E12",
    image: planetWordSlices[currentPlanet].w1s12.image,
    slots: [
      { bottom: 40, index: 21, left: 187 },
      { top: 20, index: 22, left: 283 },
      { top: 8, index: 24, left: 187 },
    ],
    topBarType: planetWordSlices[currentPlanet].w1s12.topBarType,
  },
  {
    episodeSettings: episodeSettings.w1s4,
    id: "MAP_SLICE_W01E13",
    image: planetWordSlices[currentPlanet].w1s13.image,
    slots: [
      { bottom: 20, index: 23, left: 283 },
      { bottom: 24, index: 25, left: 93 },
      { top: 8, index: 26, left: 187 },
    ],
    topBarType: planetWordSlices[currentPlanet].w1s13.topBarType,
  },
  {
    episodeSettings: episodeSettings.w1s4,
    id: "MAP_SLICE_W01E14",
    image: planetWordSlices[currentPlanet].w1s14.image,
    slots: [{ bottom: 24, index: 27, left: 187 }],
    topBarType: planetWordSlices[currentPlanet].w1s14.topBarType,
  },
  // next episode
  {
    episodeSettings: episodeSettings.w1s5,
    id: "MAP_SLICE_W01E15",
    image: planetWordSlices[currentPlanet].w1s15.image,
    slots: [],
    topBarType: planetWordSlices[currentPlanet].w1s15.topBarType,
  },
  {
    episodeSettings: episodeSettings.w1s5,
    id: "MAP_SLICE_W01E16",
    image: planetWordSlices[currentPlanet].w1s16.image,
    slots: [
      { index: 28, left: 187, top: 88 },
      { index: 29, left: 187, top: 8 },
    ],
    topBarType: planetWordSlices[currentPlanet].w1s16.topBarType,
  },
  {
    episodeSettings: episodeSettings.w1s5,
    id: "MAP_SLICE_W01E17",
    image: planetWordSlices[currentPlanet].w1s17.image,
    slots: [
      { index: 30, left: 187, bottom: 30 },
      { top: 8, index: 31, left: 283 },
      { top: 8, index: 32, left: 187 },
      { top: 8, index: 33, left: 93 },
    ],
    topBarType: planetWordSlices[currentPlanet].w1s17.topBarType,
  },
  {
    episodeSettings: episodeSettings.w1s5,
    id: "MAP_SLICE_W01E18",
    image: planetWordSlices[currentPlanet].w1s18.image,
    slots: [
      {
        index: 34,
        left: 187,
        bottom: 40,
      },
    ],
    topBarType: planetWordSlices[currentPlanet].w1s18.topBarType,
  },
  // next episode
  {
    episodeSettings: episodeSettings.w1s6,
    id: "MAP_SLICE_W01E19",
    image: planetWordSlices[currentPlanet].w1s19.image,
    slots: [{ top: 8, index: 35, left: 187 }],
    topBarType: planetWordSlices[currentPlanet].w1s19.topBarType,
  },
  {
    episodeSettings: episodeSettings.w1s6,
    id: "MAP_SLICE_W01E20",
    image: planetWordSlices[currentPlanet].w1s20.image,
    slots: [
      { index: 36, left: 93, bottom: 36 },
      { index: 37, left: 283, bottom: 36 },
      { top: 8, index: 38, left: 93 },
      { top: 8, index: 39, left: 283 },
    ],
    topBarType: planetWordSlices[currentPlanet].w1s20.topBarType,
  },
  {
    episodeSettings: episodeSettings.w1s6,
    id: "MAP_SLICE_W01E21",
    image: planetWordSlices[currentPlanet].w1s21.image,
    slots: [
      { index: 40, left: 187, bottom: 36 },
      { index: 41, left: 187, top: 8 },
    ],
    topBarType: planetWordSlices[currentPlanet].w1s21.topBarType,
  },
  {
    id: "MAP_SLICE_W01E22",
    image: planetWordSlices[currentPlanet].w1s22.image,
    slots: [],
    topBarType: planetWordSlices[currentPlanet].w1s22.topBarType,
  },
  // next episode
  {
    episodeSettings: episodeSettings.w1s7,
    id: "MAP_SLICE_W01E23",
    image: planetWordSlices[currentPlanet].w1s23.image,
    slots: [
      { top: 8, index: 42, left: 93 },
      { top: 8, index: 43, left: 283 },
    ],
    topBarType: planetWordSlices[currentPlanet].w1s23.topBarType,
  },
  {
    episodeSettings: episodeSettings.w1s7,
    id: "MAP_SLICE_W01E24",
    image: planetWordSlices[currentPlanet].w1s24.image,
    slots: [
      { index: 44, left: 187, bottom: 36 },
      { top: 24, index: 45, left: 93 },
      { top: 24, index: 46, left: 283 },
    ],
    topBarType: planetWordSlices[currentPlanet].w1s24.topBarType,
  },
  {
    episodeSettings: episodeSettings.w1s7,
    id: "MAP_SLICE_W01E25",
    image: planetWordSlices[currentPlanet].w1s25.image,
    slots: [
      { index: 47, left: 187, bottom: 8 },
      { top: 36, index: 48, left: 187 },
    ],
    topBarType: planetWordSlices[currentPlanet].w1s25.topBarType,
  },
  // next episode
  {
    id: "MAP_SLICE_W01E26",
    image: planetWordSlices[currentPlanet].w1s26.image,
    slots: [],
    topBarType: planetWordSlices[currentPlanet].w1s26.topBarType,
  },
  {
    id: "MAP_SLICE_W01E27",
    image: planetWordSlices[currentPlanet].w1s27.image,
    slots: [],
    topBarType: planetWordSlices[currentPlanet].w1s27.topBarType,
  },
  {
    episodeSettings: episodeSettings.w1s8,
    id: "MAP_SLICE_W01E28",
    image: planetWordSlices[currentPlanet].w1s28.image,
    slots: [],
    topBarType: planetWordSlices[currentPlanet].w1s28.topBarType,
  },
  {
    episodeSettings: episodeSettings.w1s8,
    id: "MAP_SLICE_W01E29",
    image: planetWordSlices[currentPlanet].w1s29.image,
    slots: [{ bottom: 0, index: 49, left: 187 }],
    topBarType: planetWordSlices[currentPlanet].w1s29.topBarType,
  },
  // FOREST TO OCEAN INTERSTITIALS
  ...interstitialsSlices(currentPlanet).ocean,
  /**
   *  OCEAN WORLD
   *  first episode
   */
  {
    episodeSettings: episodeSettings.w2s1,
    id: "MAP_SLICE_W02E00",
    image: planetWordSlices[currentPlanet].w2s0.image,
    slots: [{ index: 51, left: 187, top: 8 }],
    topBarType: planetWordSlices[currentPlanet].w2s0.topBarType,
  },
  {
    episodeSettings: episodeSettings.w2s1,
    id: "MAP_SLICE_W02E01",
    image: planetWordSlices[currentPlanet].w2s1.image,
    slots: [
      { bottom: 36, index: 52, left: 96 },
      { bottom: 36, index: 50, left: 187 },
      { bottom: 36, index: 53, left: 286 },
      { index: 54, left: 187, top: 8 },
    ],
    topBarType: planetWordSlices[currentPlanet].w2s1.topBarType,
  },
  {
    episodeSettings: episodeSettings.w2s1,
    id: "MAP_SLICE_W02E02",
    image: planetWordSlices[currentPlanet].w2s2.image,
    slots: [
      { bottom: 36, index: 55, left: 187 },
      { index: 56, left: 187, top: 8 },
    ],
    topBarType: planetWordSlices[currentPlanet].w2s2.topBarType,
  },
  {
    id: "MAP_SLICE_W02E03",
    image: planetWordSlices[currentPlanet].w2s3.image,
    slots: [],
    topBarType: planetWordSlices[currentPlanet].w2s3.topBarType,
  },
  // next episode
  {
    episodeSettings: episodeSettings.w2s2,
    id: "MAP_SLICE_W02E04",
    image: planetWordSlices[currentPlanet].w2s4.image,
    slots: [
      { bottom: 36, index: 57, left: 187 },
      { index: 58, left: 187, top: 8 },
    ],
    topBarType: planetWordSlices[currentPlanet].w2s4.topBarType,
  },
  {
    episodeSettings: episodeSettings.w2s2,
    id: "MAP_SLICE_W02E05",
    image: planetWordSlices[currentPlanet].w2s5.image,
    slots: [
      { bottom: 36, index: 59, left: 187 },
      { index: 60, left: 286, top: 8 },
      { index: 61, left: 187, top: 8 },
      { index: 62, left: 96, top: 8 },
    ],
    topBarType: planetWordSlices[currentPlanet].w2s5.topBarType,
  },
  {
    episodeSettings: episodeSettings.w2s2,
    id: "MAP_SLICE_W02E06",
    image: planetWordSlices[currentPlanet].w2s6.image,
    slots: [{ bottom: 36, index: 63, left: 187 }],
    topBarType: planetWordSlices[currentPlanet].w2s6.topBarType,
  },
  // next episode
  {
    id: "MAP_SLICE_W02E07",
    image: planetWordSlices[currentPlanet].w2s7.image,
    slots: [],
    topBarType: planetWordSlices[currentPlanet].w2s7.topBarType,
  },
  {
    episodeSettings: episodeSettings.w2s3,
    id: "MAP_SLICE_W02E08",
    image: planetWordSlices[currentPlanet].w2s8.image,
    slots: [
      { bottom: 40, index: 65, left: 96 },
      { bottom: 40, index: 64, left: 187 },
      { bottom: 40, index: 67, left: 283 },
      { index: 66, left: 96, top: 8 },
      { index: 68, left: 283, top: 8 },
    ],
    topBarType: planetWordSlices[currentPlanet].w2s8.topBarType,
  },
  {
    episodeSettings: episodeSettings.w2s3,
    id: "MAP_SLICE_W02E09",
    image: planetWordSlices[currentPlanet].w2s9.image,
    slots: [
      { bottom: 36, index: 69, left: 187 },
      { index: 70, left: 187, top: 8 },
    ],
    topBarType: planetWordSlices[currentPlanet].w2s9.topBarType,
  },
  {
    id: "MAP_SLICE_W02E10",
    image: planetWordSlices[currentPlanet].w2s10.image,
    slots: [],
    topBarType: planetWordSlices[currentPlanet].w2s10.topBarType,
  },
  // next episode
  {
    episodeSettings: episodeSettings.w2s4,
    id: "MAP_SLICE_W02E11",
    image: planetWordSlices[currentPlanet].w2s11.image,
    slots: [{ index: 71, left: 187, top: 40 }],
    topBarType: planetWordSlices[currentPlanet].w2s11.topBarType,
  },
  {
    episodeSettings: episodeSettings.w2s4,
    id: "MAP_SLICE_W02E12",
    image: planetWordSlices[currentPlanet].w2s12.image,
    slots: [
      { bottom: 0, index: 72, left: 283 },
      { bottom: 0, index: 73, left: 93 },
      { index: 74, left: 187, top: 40 },
    ],
    topBarType: planetWordSlices[currentPlanet].w2s11.topBarType,
  },
  {
    episodeSettings: episodeSettings.w2s4,
    id: "MAP_SLICE_W02E13",
    image: planetWordSlices[currentPlanet].w2s13.image,
    slots: [
      { bottom: 0, index: 75, left: 283 },
      { bottom: 0, index: 76, left: 93 },
      { index: 77, left: 187, top: 40 },
    ],
    topBarType: planetWordSlices[currentPlanet].w2s13.topBarType,
  },
  // next episode
  {
    id: "MAP_SLICE_W02E14",
    image: planetWordSlices[currentPlanet].w2s14.image,
    slots: [],
    topBarType: planetWordSlices[currentPlanet].w2s14.topBarType,
  },
  {
    episodeSettings: episodeSettings.w2s5,
    id: "MAP_SLICE_W02E15",
    image: planetWordSlices[currentPlanet].w2s15.image,
    slots: [
      { bottom: 0, index: 78, left: 187 },
      { index: 79, left: 187, top: 40 },
    ],
    topBarType: planetWordSlices[currentPlanet].w2s15.topBarType,
  },
  {
    episodeSettings: episodeSettings.w2s5,
    id: "MAP_SLICE_W02E16",
    image: planetWordSlices[currentPlanet].w2s16.image,
    slots: [
      { bottom: 0, index: 80, left: 187 },
      { index: 81, left: 283, top: 40 },
      { index: 82, left: 187, top: 40 },
      { index: 83, left: 93, top: 40 },
    ],
    topBarType: planetWordSlices[currentPlanet].w2s16.topBarType,
  },
  {
    episodeSettings: episodeSettings.w2s5,
    id: "MAP_SLICE_W02E17",
    image: planetWordSlices[currentPlanet].w2s17.image,
    slots: [{ bottom: 0, index: 84, left: 187 }],
    topBarType: planetWordSlices[currentPlanet].w2s17.topBarType,
  },
  // next episode
  {
    episodeSettings: episodeSettings.w2s6,
    id: "MAP_SLICE_W02E18",
    image: planetWordSlices[currentPlanet].w2s18.image,
    slots: [{ index: 85, left: 187, top: 40 }],
    topBarType: planetWordSlices[currentPlanet].w2s18.topBarType,
  },
  {
    episodeSettings: episodeSettings.w2s6,
    id: "MAP_SLICE_W02E19",
    image: planetWordSlices[currentPlanet].w2s19.image,
    slots: [
      { bottom: 0, index: 86, left: 93 },
      { bottom: 0, index: 88, left: 283 },
      { index: 87, left: 93, top: 40 },
      { index: 89, left: 283, top: 40 },
    ],
    topBarType: planetWordSlices[currentPlanet].w2s19.topBarType,
  },
  {
    episodeSettings: episodeSettings.w2s6,
    id: "MAP_SLICE_W02E20",
    image: planetWordSlices[currentPlanet].w2s20.image,
    slots: [
      { bottom: 0, index: 90, left: 187 },
      { index: 91, left: 187, top: 40 },
    ],
    topBarType: planetWordSlices[currentPlanet].w2s20.topBarType,
  },
  // next episode
  {
    id: "MAP_SLICE_W02E21",
    image: planetWordSlices[currentPlanet].w2s21.image,
    slots: [],
    topBarType: planetWordSlices[currentPlanet].w2s21.topBarType,
  },
  {
    episodeSettings: episodeSettings.w2s7,
    id: "MAP_SLICE_W02E22",
    image: planetWordSlices[currentPlanet].w2s22.image,
    slots: [
      { index: 92, left: 93, top: 8 },
      { index: 93, left: 283, top: 8 },
    ],
    topBarType: planetWordSlices[currentPlanet].w2s22.topBarType,
  },
  {
    episodeSettings: episodeSettings.w2s7,
    id: "MAP_SLICE_W02E23",
    image: planetWordSlices[currentPlanet].w2s23.image,
    slots: [
      { bottom: 28, index: 94, left: 187 },
      { index: 95, left: 93, top: 28 },
      { index: 96, left: 283, top: 28 },
    ],
    topBarType: planetWordSlices[currentPlanet].w2s23.topBarType,
  },
  {
    episodeSettings: episodeSettings.w2s7,
    id: "MAP_SLICE_W02E24",
    image: planetWordSlices[currentPlanet].w2s24.image,
    slots: [
      { bottom: 0, index: 97, left: 187 },
      { index: 98, left: 187, top: 46 },
    ],
    topBarType: planetWordSlices[currentPlanet].w2s24.topBarType,
  },
  // next episode
  {
    id: "MAP_SLICE_W02E25",
    image: planetWordSlices[currentPlanet].w2s25.image,
    slots: [],
    topBarType: planetWordSlices[currentPlanet].w2s25.topBarType,
  },
  {
    id: "MAP_SLICE_W02E26",
    image: planetWordSlices[currentPlanet].w2s26.image,
    slots: [],
    topBarType: planetWordSlices[currentPlanet].w2s26.topBarType,
  },
  {
    id: "MAP_SLICE_W02E27",
    image: planetWordSlices[currentPlanet].w2s27.image,
    slots: [],
    topBarType: planetWordSlices[currentPlanet].w2s27.topBarType,
  },
  {
    episodeSettings: episodeSettings.w2s8,
    id: "MAP_SLICE_W02E28",
    image: planetWordSlices[currentPlanet].w2s28.image,
    slots: [{ bottom: 10, index: 99, left: 187 }],
    topBarType: planetWordSlices[currentPlanet].w2s28.topBarType,
  },
  // OCEAN TO DESERT INTERSTITIALS
  ...interstitialsSlices(currentPlanet).desert,
  /**
   *  DESERT WORLD
   *  first episode
   */
  {
    episodeSettings: episodeSettings.w3s1,
    id: "MAP_SLICE_W03E00",
    image: planetWordSlices[currentPlanet].w3s0.image,
    slots: [{ index: 101, left: 187, top: 8 }],
    topBarType: planetWordSlices[currentPlanet].w3s0.topBarType,
  },
  {
    episodeSettings: episodeSettings.w3s1,
    id: "MAP_SLICE_W03E01",
    image: planetWordSlices[currentPlanet].w3s1.image,
    slots: [
      { bottom: 36, index: 102, left: 96 },
      { bottom: 36, index: 100, left: 187 },
      { bottom: 36, index: 103, left: 286 },
      { index: 104, left: 187, top: 8 },
    ],
    topBarType: planetWordSlices[currentPlanet].w3s1.topBarType,
  },
  {
    episodeSettings: episodeSettings.w3s1,
    id: "MAP_SLICE_W03E02",
    image: planetWordSlices[currentPlanet].w3s2.image,
    slots: [
      { bottom: 36, index: 105, left: 187 },
      { index: 106, left: 187, top: 8 },
    ],
    topBarType: planetWordSlices[currentPlanet].w3s2.topBarType,
  },
  {
    id: "MAP_SLICE_W03E03",
    image: planetWordSlices[currentPlanet].w3s3.image,
    slots: [],
    topBarType: planetWordSlices[currentPlanet].w3s3.topBarType,
  },
  // next episode
  {
    episodeSettings: episodeSettings.w3s2,
    id: "MAP_SLICE_W03E04",
    image: planetWordSlices[currentPlanet].w3s4.image,
    slots: [
      { bottom: 36, index: 107, left: 187 },
      { index: 108, left: 187, top: 8 },
    ],
    topBarType: planetWordSlices[currentPlanet].w3s4.topBarType,
  },
  {
    episodeSettings: episodeSettings.w3s2,
    id: "MAP_SLICE_W03E05",
    image: planetWordSlices[currentPlanet].w3s5.image,
    slots: [
      { bottom: 36, index: 109, left: 187 },
      { index: 110, left: 286, top: 8 },
      { index: 111, left: 187, top: 8 },
      { index: 112, left: 96, top: 8 },
    ],
    topBarType: planetWordSlices[currentPlanet].w3s5.topBarType,
  },
  {
    episodeSettings: episodeSettings.w3s2,
    id: "MAP_SLICE_W03E06",
    image: planetWordSlices[currentPlanet].w3s6.image,
    slots: [{ bottom: 36, index: 113, left: 187 }],
    topBarType: planetWordSlices[currentPlanet].w3s6.topBarType,
  },
  // next episode
  {
    id: "MAP_SLICE_W03E07",
    image: planetWordSlices[currentPlanet].w3s7.image,
    slots: [],
    topBarType: planetWordSlices[currentPlanet].w3s7.topBarType,
  },
  {
    episodeSettings: episodeSettings.w3s3,
    id: "MAP_SLICE_W03E08",
    image: planetWordSlices[currentPlanet].w3s8.image,
    slots: [
      { index: 115, left: 96, top: 8 },
      { index: 114, left: 187, top: 8 },
      { index: 117, left: 283, top: 8 },
    ],
    topBarType: planetWordSlices[currentPlanet].w3s8.topBarType,
  },
  {
    episodeSettings: episodeSettings.w3s3,
    id: "MAP_SLICE_W03E09",
    image: planetWordSlices[currentPlanet].w3s9.image,
    slots: [
      { bottom: 36, index: 116, left: 96 },
      { bottom: 36, index: 118, left: 283 },
      { index: 119, left: 187, top: 8 },
    ],
    topBarType: planetWordSlices[currentPlanet].w3s9.topBarType,
  },
  {
    episodeSettings: episodeSettings.w3s3,
    id: "MAP_SLICE_W03E10",
    image: planetWordSlices[currentPlanet].w3s10.image,
    slots: [{ bottom: 36, index: 120, left: 187 }],
    topBarType: planetWordSlices[currentPlanet].w3s10.topBarType,
  },
  // next episode
  {
    id: "MAP_SLICE_W03E11",
    image: planetWordSlices[currentPlanet].w3s11.image,
    slots: [],
    topBarType: planetWordSlices[currentPlanet].w3s11.topBarType,
  },
  {
    episodeSettings: episodeSettings.w3s4,
    id: "MAP_SLICE_W03E12",
    image: planetWordSlices[currentPlanet].w3s12.image,
    slots: [
      { bottom: 0, index: 121, left: 187 },
      { index: 122, left: 283, top: 40 },
      { index: 124, left: 187, top: 40 },
    ],
    topBarType: planetWordSlices[currentPlanet].w3s12.topBarType,
  },
  {
    episodeSettings: episodeSettings.w3s4,
    id: "MAP_SLICE_W03E13",
    image: planetWordSlices[currentPlanet].w3s13.image,
    slots: [
      { bottom: 0, index: 123, left: 283 },
      { bottom: 0, index: 125, left: 93 },
      { index: 126, left: 187, top: 40 },
    ],
    topBarType: planetWordSlices[currentPlanet].w3s13.topBarType,
  },
  {
    episodeSettings: episodeSettings.w3s4,
    id: "MAP_SLICE_W03E14",
    image: planetWordSlices[currentPlanet].w3s14.image,
    slots: [{ bottom: 0, index: 127, left: 187 }],
    topBarType: planetWordSlices[currentPlanet].w3s14.topBarType,
  },
  // next episode
  {
    episodeSettings: episodeSettings.w3s5,
    id: "MAP_SLICE_W03E15",
    image: planetWordSlices[currentPlanet].w3s15.image,
    slots: [{ index: 128, left: 187, top: 8 }],
    topBarType: planetWordSlices[currentPlanet].w3s15.topBarType,
  },
  {
    episodeSettings: episodeSettings.w3s5,
    id: "MAP_SLICE_W03E16",
    image: planetWordSlices[currentPlanet].w3s16.image,
    slots: [
      { bottom: 40, index: 129, left: 187 },
      { index: 130, left: 187, top: 8 },
    ],
    topBarType: planetWordSlices[currentPlanet].w3s16.topBarType,
  },
  {
    episodeSettings: episodeSettings.w3s5,
    id: "MAP_SLICE_W03E17",
    image: planetWordSlices[currentPlanet].w3s17.image,
    slots: [
      { bottom: 40, index: 131, left: 286 },
      { bottom: 40, index: 132, left: 187 },
      { bottom: 40, index: 133, left: 96 },
      { index: 134, left: 187, top: 8 },
    ],
    topBarType: planetWordSlices[currentPlanet].w3s17.topBarType,
  },
  // next episode
  {
    id: "MAP_SLICE_W03E18",
    image: planetWordSlices[currentPlanet].w3s18.image,
    slots: [],
    topBarType: planetWordSlices[currentPlanet].w3s18.topBarType,
  },
  {
    episodeSettings: episodeSettings.w3s6,
    id: "MAP_SLICE_W03E19",
    image: planetWordSlices[currentPlanet].w3s19.image,
    slots: [
      { bottom: 40, index: 135, left: 187 },
      { index: 136, left: 187, top: 8 },
      { index: 137, left: 286, top: 8 },
    ],
    topBarType: planetWordSlices[currentPlanet].w3s19.topBarType,
  },
  {
    episodeSettings: episodeSettings.w3s6,
    id: "MAP_SLICE_W03E20",
    image: planetWordSlices[currentPlanet].w3s20.image,
    slots: [
      { bottom: 40, index: 138, left: 187 },
      { index: 139, left: 96, top: 8 },
      { index: 140, left: 187, top: 8 },
    ],
    topBarType: planetWordSlices[currentPlanet].w3s20.topBarType,
  },
  {
    episodeSettings: episodeSettings.w3s6,
    id: "MAP_SLICE_W03E21",
    image: planetWordSlices[currentPlanet].w3s21.image,
    slots: [{ bottom: 40, index: 141, left: 187 }],
    topBarType: planetWordSlices[currentPlanet].w3s21.topBarType,
  },
  // next episode
  {
    id: "MAP_SLICE_W03E22",
    image: planetWordSlices[currentPlanet].w3s22.image,
    slots: [],
    topBarType: planetWordSlices[currentPlanet].w3s22.topBarType,
  },
  {
    episodeSettings: episodeSettings.w3s7,
    id: "MAP_SLICE_W03E23",
    image: planetWordSlices[currentPlanet].w3s23.image,
    slots: [
      { bottom: 40, index: 142, left: 93 },
      { bottom: 40, index: 143, left: 283 },
      { index: 144, left: 187, top: 18 },
    ],
    topBarType: planetWordSlices[currentPlanet].w3s23.topBarType,
  },
  {
    episodeSettings: episodeSettings.w3s7,
    id: "MAP_SLICE_W03E24",
    image: planetWordSlices[currentPlanet].w3s24.image,
    slots: [
      { bottom: 30, index: 145, left: 93 },
      { bottom: 30, index: 146, left: 283 },
      { index: 147, left: 187, top: 40 },
    ],
    topBarType: planetWordSlices[currentPlanet].w3s24.topBarType,
  },
  {
    episodeSettings: episodeSettings.w3s7,
    id: "MAP_SLICE_W03E25",
    image: planetWordSlices[currentPlanet].w3s25.image,
    slots: [{ bottom: 0, index: 148, left: 187 }],
    topBarType: planetWordSlices[currentPlanet].w3s25.topBarType,
  },
  // next episode
  {
    id: "MAP_SLICE_W03E26",
    image: planetWordSlices[currentPlanet].w3s26.image,
    slots: [],
    topBarType: planetWordSlices[currentPlanet].w3s26.topBarType,
  },
  {
    id: "MAP_SLICE_W03E27",
    image: planetWordSlices[currentPlanet].w3s27.image,
    slots: [],
    topBarType: planetWordSlices[currentPlanet].w3s27.topBarType,
  },
  {
    episodeSettings: episodeSettings.w3s8,
    id: "MAP_SLICE_W03E28",
    image: planetWordSlices[currentPlanet].w3s28.image,
    slots: [{ bottom: 10, index: 149, left: 187 }],
    topBarType: planetWordSlices[currentPlanet].w3s28.topBarType,
  },

  // OCEAN TO DESERT INTERSTITIALS
  ...interstitialsSlices(currentPlanet).mountain,
  /**
   *  MOUNTAIN WORLD
   *  first episode
   */
  {
    episodeSettings: episodeSettings.w4s1,
    id: "MAP_SLICE_W04E00",
    image: planetWordSlices[currentPlanet].w4s0.image,
    slots: [{ index: 151, top: 8, left: 187 }],
    topBarType: planetWordSlices[currentPlanet].w4s0.topBarType,
  },
  {
    episodeSettings: episodeSettings.w4s1,
    id: "MAP_SLICE_W04E01",
    image: planetWordSlices[currentPlanet].w4s1.image,
    slots: [
      { index: 150, bottom: 36, left: 187 },
      { index: 152, bottom: 36, left: 100 },
      { index: 153, bottom: 36, left: 280 },
      { index: 154, top: 8, left: 187 },
    ],
    topBarType: planetWordSlices[currentPlanet].w4s1.topBarType,
  },
  {
    episodeSettings: episodeSettings.w4s1,
    id: "MAP_SLICE_W04E02",
    image: planetWordSlices[currentPlanet].w4s2.image,
    slots: [
      { index: 155, bottom: 36, left: 187 },
      { index: 156, top: 10, left: 187 },
    ],
    topBarType: planetWordSlices[currentPlanet].w4s2.topBarType,
  },
  {
    id: "MAP_SLICE_W04E03",
    image: planetWordSlices[currentPlanet].w4s3.image,
    slots: [],
    topBarType: planetWordSlices[currentPlanet].w4s3.topBarType,
  },

  // next episode
  {
    episodeSettings: episodeSettings.w4s2,
    id: "MAP_SLICE_W04E04",
    image: planetWordSlices[currentPlanet].w4s4.image,
    slots: [
      { index: 157, bottom: 45, left: 95 },
      { index: 158, top: 8, left: 187 },
    ],
    topBarType: planetWordSlices[currentPlanet].w4s4.topBarType,
  },
  {
    episodeSettings: episodeSettings.w4s2,
    id: "MAP_SLICE_W04E05",
    image: planetWordSlices[currentPlanet].w4s5.image,
    slots: [
      { index: 159, top: 8, left: 290 },
      { index: 160, bottom: 40, left: 187 },
      { index: 161, bottom: 40, left: 95 },
    ],
    topBarType: planetWordSlices[currentPlanet].w4s5.topBarType,
  },
  {
    episodeSettings: episodeSettings.w4s2,
    id: "MAP_SLICE_W04E06",
    image: planetWordSlices[currentPlanet].w4s6.image,
    slots: [
      { index: 163, top: 8, left: 187 },
      { index: 162, top: 110, left: 187 },
    ],
    topBarType: planetWordSlices[currentPlanet].w4s6.topBarType,
  },
  {
    id: "MAP_SLICE_W04E07",
    image: planetWordSlices[currentPlanet].w4s7.image,
    slots: [],
    topBarType: planetWordSlices[currentPlanet].w4s7.topBarType,
  },
  // next episode
  {
    id: "MAP_SLICE_W04E08",
    image: planetWordSlices[currentPlanet].w4s8.image,
    slots: [],
    topBarType: planetWordSlices[currentPlanet].w4s8.topBarType,
  },
  {
    episodeSettings: episodeSettings.w4s3,
    id: "MAP_SLICE_W04E09",
    image: planetWordSlices[currentPlanet].w4s9.image,
    slots: [
      { index: 164, bottom: 40, left: 187 },
      { index: 165, bottom: 40, left: 97 },
      { index: 166, top: 8, left: 97 },
      { index: 167, bottom: 40, left: 277 },
      { index: 168, top: 8, left: 277 },
    ],
    topBarType: planetWordSlices[currentPlanet].w4s9.topBarType,
  },
  {
    episodeSettings: episodeSettings.w4s3,
    id: "MAP_SLICE_W04E10",
    image: planetWordSlices[currentPlanet].w4s10.image,
    slots: [
      { index: 169, bottom: 30, left: 187 },
      { index: 170, bottom: 120, left: 187 },
    ],
    topBarType: planetWordSlices[currentPlanet].w4s10.topBarType,
  },
  {
    episodeSettings: episodeSettings.w4s3,
    id: "MAP_SLICE_W04E11",
    image: planetWordSlices[currentPlanet].w4s11.image,
    slots: [],
    topBarType: planetWordSlices[currentPlanet].w4s11.topBarType,
  },
  // next episode
  {
    episodeSettings: episodeSettings.w4s4,
    id: "MAP_SLICE_W04E12",
    image: planetWordSlices[currentPlanet].w4s12.image,
    slots: [{ index: 171, bottom: 80, left: 187 }],
    topBarType: planetWordSlices[currentPlanet].w4s12.topBarType,
  },
  {
    episodeSettings: episodeSettings.w4s4,
    id: "MAP_SLICE_W04E13",
    image: planetWordSlices[currentPlanet].w4s13.image,
    slots: [
      { index: 172, bottom: 8, left: 282 },
      { index: 173, bottom: 8, left: 187 },
      { index: 174, bottom: 8, left: 87 },
      { index: 175, top: 40, left: 187 },
    ],
    topBarType: planetWordSlices[currentPlanet].w4s13.topBarType,
  },
  {
    episodeSettings: episodeSettings.w4s4,
    id: "MAP_SLICE_W04E14",
    image: planetWordSlices[currentPlanet].w4s14.image,
    slots: [
      { index: 176, bottom: 8, left: 282 },
      { index: 177, bottom: 90, left: 282 },
    ],
    topBarType: planetWordSlices[currentPlanet].w4s14.topBarType,
  },
  {
    id: "MAP_SLICE_W04E15",
    image: planetWordSlices[currentPlanet].w4s15.image,
    slots: [],
    topBarType: planetWordSlices[currentPlanet].w4s15.topBarType,
  },
  // next episode
  {
    episodeSettings: episodeSettings.w4s5,
    id: "MAP_SLICE_W04E16",
    image: planetWordSlices[currentPlanet].w4s16.image,
    slots: [
      { index: 178, bottom: 24, left: 187 },
      { index: 179, top: 8, left: 187 },
    ],
    topBarType: planetWordSlices[currentPlanet].w4s16.topBarType,
  },
  {
    episodeSettings: episodeSettings.w4s5,
    id: "MAP_SLICE_W04E17",
    image: planetWordSlices[currentPlanet].w4s17.image,
    slots: [
      { index: 180, bottom: 35, left: 187 },
      { index: 181, top: 8, left: 282 },
      { index: 182, top: 8, left: 187 },
      { index: 183, top: 8, left: 92 },
    ],
    topBarType: planetWordSlices[currentPlanet].w4s17.topBarType,
  },
  {
    episodeSettings: episodeSettings.w4s5,
    id: "MAP_SLICE_W04E18",
    image: planetWordSlices[currentPlanet].w4s18.image,
    slots: [{ index: 184, bottom: 30, left: 187 }],
    topBarType: planetWordSlices[currentPlanet].w4s18.topBarType,
  },
  // next episode
  {
    episodeSettings: episodeSettings.w4s6,
    id: "MAP_SLICE_W04E19",
    image: planetWordSlices[currentPlanet].w4s19.image,
    slots: [{ index: 185, top: 8, left: 187 }],
    topBarType: planetWordSlices[currentPlanet].w4s19.topBarType,
  },
  {
    episodeSettings: episodeSettings.w4s6,
    id: "MAP_SLICE_W04E20",
    image: planetWordSlices[currentPlanet].w4s20.image,
    slots: [
      { index: 186, bottom: 40, left: 97 },
      { index: 187, top: 8, left: 97 },
      { index: 188, bottom: 40, left: 282 },
      { index: 189, top: 8, left: 282 },
    ],
    topBarType: planetWordSlices[currentPlanet].w4s20.topBarType,
  },
  {
    episodeSettings: episodeSettings.w4s6,
    id: "MAP_SLICE_W04E21",
    image: planetWordSlices[currentPlanet].w4s21.image,
    slots: [
      { index: 190, bottom: 30, left: 187 },
      { index: 191, top: 10, left: 187 },
    ],
    topBarType: planetWordSlices[currentPlanet].w4s21.topBarType,
  },
  {
    episodeSettings: episodeSettings.w4s6,
    id: "MAP_SLICE_W04E22",
    image: planetWordSlices[currentPlanet].w4s22.image,
    slots: [],
    topBarType: planetWordSlices[currentPlanet].w4s22.topBarType,
  },
  // next episode
  {
    episodeSettings: episodeSettings.w4s7,
    id: "MAP_SLICE_W04E23",
    image: planetWordSlices[currentPlanet].w4s23.image,
    slots: [],
    topBarType: planetWordSlices[currentPlanet].w4s23.topBarType,
  },
  {
    episodeSettings: episodeSettings.w4s7,
    id: "MAP_SLICE_W04E24",
    image: planetWordSlices[currentPlanet].w4s24.image,
    slots: [
      { index: 192, top: 8, left: 97 },
      { index: 193, top: 8, left: 277 },
    ],
    topBarType: planetWordSlices[currentPlanet].w4s24.topBarType,
  },
  {
    episodeSettings: episodeSettings.w4s7,
    id: "MAP_SLICE_W04E25",
    image: planetWordSlices[currentPlanet].w4s25.image,
    slots: [
      { index: 194, bottom: 30, left: 187 },
      { index: 195, top: 30, left: 97 },
      { index: 196, top: 30, left: 277 },
    ],
    topBarType: planetWordSlices[currentPlanet].w4s25.topBarType,
  },
  {
    episodeSettings: episodeSettings.w4s7,
    id: "MAP_SLICE_W04E26",
    image: planetWordSlices[currentPlanet].w4s26.image,
    slots: [
      { index: 197, bottom: 8, left: 187 },
      { index: 198, top: 30, left: 187 },
    ],
    topBarType: planetWordSlices[currentPlanet].w4s26.topBarType,
  },
  {
    episodeSettings: episodeSettings.w4s7,
    id: "MAP_SLICE_W04E27",
    image: planetWordSlices[currentPlanet].w4s27.image,
    slots: [],
    topBarType: planetWordSlices[currentPlanet].w4s27.topBarType,
  },
  // next episode
  {
    episodeSettings: episodeSettings.w4s8,
    id: "MAP_SLICE_W04E28",
    image: planetWordSlices[currentPlanet].w4s28.image,
    slots: [],
    topBarType: planetWordSlices[currentPlanet].w4s28.topBarType,
  },
  {
    episodeSettings: episodeSettings.w4s8,
    id: "MAP_SLICE_W04E29",
    image: planetWordSlices[currentPlanet].w4s29.image,
    slots: [],
    topBarType: planetWordSlices[currentPlanet].w4s29.topBarType,
  },
  {
    episodeSettings: episodeSettings.w4s8,
    id: "MAP_SLICE_W04E30",
    image: planetWordSlices[currentPlanet].w4s30.image,
    slots: [{ index: 199, bottom: 0, left: 187 }],
    topBarType: planetWordSlices[currentPlanet].w4s30.topBarType,
  },
];
// placeholder interstitials for mountain

const getWorldSlices = (currentPlanet: Planets): IMapSlice[] => {
  if (isIphoneX) {
    return [
      ...interstitialsSlices(currentPlanet).forest,
      ...WorldSlices(currentPlanet),
      ...interstitialsSlices(currentPlanet).last,
    ];
  }

  return WorldSlices(currentPlanet);
};

export default getWorldSlices;

export const loadingSlices = (currentPlanet: Planets): { [x: string]: IMapSlice } => ({
  forest: {
    id: "MAP_SLICE_W01_LOADING_01",
    image: planetsLoadingSlices[currentPlanet].w1s1,
    slots: [],
    topBarType: TOP_BAR_TYPES.FOREST,
  },
  ocean: {
    id: "MAP_SLICE_W02_LOADING_01",
    image: planetsLoadingSlices[currentPlanet].w2s1,
    slots: [],
    topBarType: TOP_BAR_TYPES.DEFAULT,
  },
  desert: {
    id: "MAP_SLICE_W03_LOADING_01",
    image: planetsLoadingSlices[currentPlanet].w3s1,
    slots: [],
    topBarType: TOP_BAR_TYPES.DESERT,
  },
  mountain: {
    id: "MAP_SLICE_W04_LOADING_01",
    image: planetsLoadingSlices[currentPlanet].w4s1,
    slots: [],
    topBarType: TOP_BAR_TYPES.MOUNTAIN,
  },
});
