import { ImageStyle, StyleSheet, TextStyle, ViewStyle, Platform } from "react-native";
import { TopBar } from "@components/molecules";
import { Style } from "@styles/index";

const getTopBarFiller = () => {
  if (Platform.OS === "android") {
    return 6;
  }

  if (Style.isIphoneXPlus()) {
    return 52;
  }

  if (Style.isIphoneX()) {
    return 50;
  }

  return 30;
};

const getEarnRatePillFiller = () => {
  if (Platform.OS === "android") {
    return 90 + (Style.isTallAndLowScaledPixelAndroid() ? 6 : 0);
  }

  if (Style.isIphoneXPlus()) {
    return 130;
  }

  if (Style.isIphoneX()) {
    return 128;
  }

  return 114;
};

export default StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  } as ViewStyle,
  scrollView: {
    paddingTop: Style.SCALE_UP_AND_DOWN(40),
  } as ViewStyle,
  earnRate: {
    borderRadius: Style.SCALE_UP_AND_DOWN(32),
    position: "absolute",
    height: Style.SCALE_UP_AND_DOWN(48),
    width: Style.SCALE_UP_AND_DOWN(152),
    top: Style.SCALE_UP_AND_DOWN(getEarnRatePillFiller()),
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 2,
  } as ViewStyle,
  earningRateText: {
    color: "#FFFFFF",
    fontSize: Style.SCALE_UP_AND_DOWN(14),
    fontFamily: Style.FONT_FAMILY_PRIMARY_BOLD,
    letterSpacing: Style.SCALE_UP_AND_DOWN(0.8),
    lineHeight: Style.SCALE_UP_AND_DOWN(24),
    marginRight: Style.SCALE_UP_AND_DOWN(3),
  } as TextStyle,
  yucoinImage: {
    height: Style.SCALE_UP_AND_DOWN(23),
    width: Style.SCALE_UP_AND_DOWN(23),
  } as ImageStyle,

  headerWrapper: {
    paddingBottom: Style.SCALE_UP_AND_DOWN(9),
    borderBottomColor: "#f7f7f7",
    borderBottomWidth: Style.SCALE_UP_AND_DOWN(1),
  },
  header: {
    width: "100%",
    paddingLeft: Style.SCALE_UP_AND_DOWN(16),
  } as ViewStyle,
  userName: {
    color: "#333333",
    fontSize: Style.SCALE_UP_AND_DOWN(22),
    fontFamily: Style.FONT_FAMILY_PRIMARY_BOLD,
    letterSpacing: Style.SCALE_UP_AND_DOWN(0.4),
  } as TextStyle,
  currentWorldWrapper: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    marginTop: Style.SCALE_UP_AND_DOWN(8),
  } as ViewStyle,
  currentWorld: {
    flexDirection: "row",
  } as ViewStyle,
  image: {
    height: Style.SCALE_UP_AND_DOWN(32),
    width: Style.SCALE_UP_AND_DOWN(32),
  } as ImageStyle,
  currentWorldDetailsWrapper: {
    flexDirection: "column",
    marginLeft: Style.SCALE_UP_AND_DOWN(8),
    justifyContent: "space-between",
  } as ViewStyle,
  worldText: {
    color: "#FF96A3",
    fontSize: Style.SCALE_UP_AND_DOWN(12),
    fontFamily: Style.FONT_FAMILY_PRIMARY_BOLD,
    letterSpacing: Style.SCALE_UP_AND_DOWN(0.5),
  } as TextStyle,
  levelText: {
    color: "#464647",
    fontSize: Style.SCALE_UP_AND_DOWN(12),
    fontFamily: Style.FONT_FAMILY_PRIMARY_BOLD,
    letterSpacing: Style.SCALE_UP_AND_DOWN(0.5),
  } as TextStyle,
  editAvatarImage: {
    height: Style.SCALE_UP_AND_DOWN(32),
    width: Style.SCALE_UP_AND_DOWN(32),
    marginRight: Style.SCALE_UP_AND_DOWN(16),
  } as ImageStyle,

  noAvatarWrapper: {
    flexDirection: "row",
    width: "100%",
    height: Style.SCALE_UP_AND_DOWN(410),
    paddingLeft: Style.SCALE_UP_AND_DOWN(18),
  } as ViewStyle,
  personalProtectionWrapper: {
    flexDirection: "column",
  } as ViewStyle,
  personalProtectionText: {
    color: "#838385",
    fontSize: Style.SCALE_UP_AND_DOWN(20),
    fontFamily: Style.FONT_FAMILY_PRIMARY_BOLD,
    letterSpacing: Style.SCALE_UP_AND_DOWN(0.4),
    lineHeight: Style.SCALE_UP_AND_DOWN(24),
  } as TextStyle,
  employerBenefitsText: {
    color: "#838385",
    fontSize: Style.SCALE_UP_AND_DOWN(20),
    fontFamily: Style.FONT_FAMILY_PRIMARY_BOLD,
    letterSpacing: Style.SCALE_UP_AND_DOWN(0.4),
    lineHeight: Style.SCALE_UP_AND_DOWN(24),
  } as TextStyle,
  earningCoinWrapper: {
    flexDirection: "row",
  } as ViewStyle,
  smallYucoinImage: {
    height: Style.SCALE_UP_AND_DOWN(16),
    width: Style.SCALE_UP_AND_DOWN(16),
    marginTop: Style.SCALE_UP_AND_DOWN(2),
  } as ImageStyle,
  personalProtectionBenefits: {
    color: "#808080",
    fontSize: Style.SCALE_UP_AND_DOWN(15),
    fontFamily: Style.FONT_FAMILY_PRIMARY_BOLD,
    letterSpacing: Style.SCALE_UP_AND_DOWN(0.4),
    lineHeight: Style.SCALE_UP_AND_DOWN(21),
    marginTop: Style.SCALE_UP_AND_DOWN(8),
  } as TextStyle,
  earningCoinText: {
    color: "#808080",
    fontSize: Style.SCALE_UP_AND_DOWN(15),
    fontFamily: Style.FONT_FAMILY_PRIMARY_BOLD,
    letterSpacing: Style.SCALE_UP_AND_DOWN(0.4),
    lineHeight: Style.SCALE_UP_AND_DOWN(21),
    marginBottom: Style.SCALE_UP_AND_DOWN(16),
  } as TextStyle,
  emptyAvatarImage: {
    width: Style.SCALE_UP_AND_DOWN(140),
    height: Style.SCALE_UP_AND_DOWN(334),
    resizeMode: "center",
    marginTop: Style.SCALE_UP_AND_DOWN(35),
  } as ImageStyle,
  emptyAvatarImageLoadinState: {
    width: Style.SCALE_UP_AND_DOWN(140),
    height: Style.SCALE_UP_AND_DOWN(334),
    resizeMode: "center",
  } as ImageStyle,

  bigSeparator: {
    height: Style.SCALE_UP_AND_DOWN(16),
    width: "100%",
    backgroundColor: "#EFEFEF",
  } as ViewStyle,

  employerBenefitsWrapper: {
    paddingLeft: Style.SCALE_UP_AND_DOWN(16),
    paddingTop: Style.SCALE_UP_AND_DOWN(24),
    height: Style.SCALE_UP_AND_DOWN(287),
  } as ViewStyle,
  employerBenefitsItems: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: Style.SCALE_UP_AND_DOWN(8),
    marginRight: Style.SCALE_UP_AND_DOWN(24),
    marginTop: Style.SCALE_UP_AND_DOWN(16),
  } as ViewStyle,

  employerBenefitsItemWrapper: {
    flexDirection: "column",
    justifyContent: "space-between",
    height: Style.SCALE_UP_AND_DOWN(112),
    width: Style.SCALE_UP_AND_DOWN(96),
    alignItems: "center",
  } as ViewStyle,

  employerBenefitsItemImage: {
    height: Style.SCALE_UP_AND_DOWN(75),
    width: Style.SCALE_UP_AND_DOWN(63),
  } as ImageStyle,

  employerBenefitsItemText: {
    color: "#526980",
    fontSize: Style.SCALE_UP_AND_DOWN(16),
    fontFamily: Style.FONT_FAMILY_PRIMARY,
    lineHeight: Style.SCALE_UP_AND_DOWN(17),
    textAlign: "center",
  } as TextStyle,
  avatarWrapper: {
    flexDirection: "column",
    width: "100%",
    height: Style.SCALE_UP_AND_DOWN(410),
    paddingLeft: Style.SCALE_UP_AND_DOWN(18),
  } as ViewStyle,
  avatarAndProductsWrapper: {
    flexDirection: "row",
  } as ViewStyle,
  insuranceProductsWrapper: {
    justifyContent: "space-around",
    height: Style.SCALE_UP_AND_DOWN(338),
    width: Style.SCALE_UP_AND_DOWN(152),
    marginTop: Style.SCALE_UP_AND_DOWN(23),
  } as ViewStyle,
  charmWrapper: {
    paddingLeft: Style.SCALE_UP_AND_DOWN(16),
    paddingTop: Style.SCALE_UP_AND_DOWN(24),
    height: Style.SCALE_UP_AND_DOWN(176),
  } as ViewStyle,
  charmText: {
    color: "#838385",
    fontSize: Style.SCALE_UP_AND_DOWN(20),
    fontFamily: Style.FONT_FAMILY_PRIMARY_BOLD,
    letterSpacing: Style.SCALE_UP_AND_DOWN(0.4),
    lineHeight: Style.SCALE_UP_AND_DOWN(24),
  } as TextStyle,
  charmItems: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginRight: Style.SCALE_UP_AND_DOWN(24),
    marginTop: Style.SCALE_UP_AND_DOWN(16),
  },
  topbarWrapper: {
    left: 0,
    paddingTop: Platform.select({ ios: Style.getSafeAreaStart(), android: 0 }),
    paddingBottom: Style.adjust(12),
    position: "absolute",
    right: 0,
    backgroundColor: "white",
  } as ViewStyle,
  topbarFiller: {
    height: TopBar.height + getTopBarFiller(),
  } as ViewStyle,
});
