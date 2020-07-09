import { ImageStyle, StyleSheet, ViewStyle, Platform } from "react-native";
import { isIphoneX } from "react-native-iphone-x-helper";
import { Style } from "../../../../styles";
import { TopBar } from "@components/molecules";
import deviceInfoModule from "react-native-device-info";

const VIEWBOX_MIN_X = 10;
const VIEWBOX_MIN_Y = 80;
const VIEWBOX_WIDTH = 340;
const SVG_WIDTH = VIEWBOX_WIDTH + VIEWBOX_MIN_X;
const multiplier = Style.DEVICE_WIDTH / SVG_WIDTH;
const VIEWBOX_HEIGHT = 220 * multiplier;
const SVG_HEIGHT = VIEWBOX_HEIGHT + VIEWBOX_MIN_Y;
export const pedestalStyles = {
  VIEWBOX_MIN_X,
  VIEWBOX_MIN_Y,
  VIEWBOX_WIDTH,
  VIEWBOX_HEIGHT,
  SVG_WIDTH,
  SVG_HEIGHT,
  multiplier,
};

export const LOADING_ITEM_HEIGHT = Style.SCALE_Y_UP_AND_DOWN(48);
const TOP_BAR_PAD_TOP = Platform.select({ ios: Style.getSafeAreaStart(), android: 0 });
const TOP_BAR_PAD_BOT = Platform.select({ ios: Style.adjust(16), android: Style.adjust(8) });
export const TOP_BAR_WRAPPER_HEIGHT = TopBar.height + TOP_BAR_PAD_TOP + TOP_BAR_PAD_BOT;
export const LEADERBOARD_PROMPT_OFFSET = 100;
export const LIST_PAD_HEIGHT = SVG_HEIGHT;

const EMPTY_LEADER_BOARD_MARGIN_TOP = TopBar.height * 3;

export default StyleSheet.create({
  emptyLeaderboardWrapper: {
    position: "absolute",
    top: EMPTY_LEADER_BOARD_MARGIN_TOP,
  } as ViewStyle,
  imageWrapper: {
    position: Platform.select({ ios: "absolute", android: null }),
    width: "100%",
    height: LIST_PAD_HEIGHT,
  } as ViewStyle,
  firstListItem: {
    height: LIST_PAD_HEIGHT + 48,
    width: "100%",
  } as ViewStyle,
  loadingItem: {
    height: LOADING_ITEM_HEIGHT,
    width: Style.DEVICE_WIDTH - 28,
    marginLeft: Style.adjust(16),
    marginTop: Style.adjust(2),
    borderRadius: Style.adjust(5),
    backgroundColor: "#F3F3F3",
  } as ViewStyle,
  secondUserAvatar: {
    position: "absolute",
    marginTop: Style.adjust(Platform.select({ android: 75, ios: 76 })),
    marginLeft: Style.adjust(84),
  } as ViewStyle,
  secondUserAvatarEmpty: {
    position: "absolute",
    marginTop: Style.adjust(Platform.select({ android: 89, ios: 88 })),
    marginLeft: Style.adjust(85),
  } as ViewStyle,

  firstUserAvatar: {
    position: "absolute",
    marginTop: Style.adjust(Platform.select({ android: 51, ios: 52 })),
    marginLeft: Style.adjust(162),
  } as ViewStyle,
  firstUserAvatarEmpty: {
    position: "absolute",
    marginTop: Style.adjust(Platform.select({ android: 64.5, ios: 64 })),
    marginLeft: Style.adjust(170),
  } as ViewStyle,

  thirdUserAvatar: {
    position: "absolute",
    marginTop: Style.adjust(Platform.select({ android: 87, ios: 88 })),
    marginLeft: Style.adjust(236),
  } as ViewStyle,
  thirdUserAvatarEmpty: {
    position: "absolute",
    marginTop: Style.adjust(Platform.select({ android: 100, ios: 100 })),
    marginLeft: Style.adjust(247),
  } as ViewStyle,
  backgroundImageBase: {
    width: "100%",
  } as ImageStyle,
  backgroundImageWrapper: {
    left: 0,
    position: "absolute",
    right: 0,
    top: 0,
    width: "100%",
  } as ViewStyle,
  topBarWrapper: {
    position: "absolute",
    paddingTop: TOP_BAR_PAD_TOP,
    paddingBottom: TOP_BAR_PAD_BOT,
    left: 0,
    right: 0,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
  } as ViewStyle,
  list: {
    width: "100%",
    backgroundColor: "white",
  } as ViewStyle,
  footer: {
    height: Style.adjust(28),
  } as ViewStyle,
  consentWrapper: {
    marginTop: EMPTY_LEADER_BOARD_MARGIN_TOP + LIST_PAD_HEIGHT,
  } as ViewStyle,
  leaderboardList: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    top: 0,
  } as ViewStyle,
  listWrapperMargin: {
    marginBottom: Style.adjust(isIphoneX() ? 45 : 79),
    alignItems: "center",
  } as ViewStyle,
  wrapper: {
    flex: 1,
  } as ViewStyle,
  grayscaleWrapper: {
    backgroundColor: "rgb(100, 100, 100)",
  } as ViewStyle,
  navbarWrapper: {
    height: Style.adjust(isIphoneX() ? 25 : 15),
    paddingBottom: Style.adjust(isIphoneX() ? 0 : 25),
    alignItems: "center",
  } as ViewStyle,
  leaderboardOfflineWrapper: { justifyContent: "center", alignItems: "center", flex: 1 } as ViewStyle,
  leaderboardOfflineImage: { position: "absolute", bottom: 0, left: 0, right: 0, width: "100%" } as ImageStyle,
  leaderboardOfflineText: { fontSize: Style.adjust(20), lineHeight: Style.adjust(20) },
  leaderboardTitleWrapper: {
    position: "absolute",
    left: 0,
    right: 0,
    height: Platform.select({ ios: undefined, android: 50 }), // w/o defining height on Android, the buttons won't be touchable
  } as ViewStyle,
  listFullWidth: {
    width: Style.DEVICE_WIDTH,
  } as ViewStyle,
  contentContainer: {
    paddingBottom: getContentContainerPaddingBottom(),
  } as ViewStyle,
  androidTitle: {
    position: "absolute",
    left: 0,
    top: 20,
    right: 0,
    width: Style.DEVICE_WIDTH,
  } as ViewStyle,
});

function getContentContainerPaddingBottom() {
  const NOTCHED_IOS_MAGIC_NUMBER = 48;
  if (Platform.OS === "ios" && deviceInfoModule.hasNotch()) {
    return NOTCHED_IOS_MAGIC_NUMBER;
  }
  return 8;
}

export function getLeaderboardTitleWrapperPositionTop({ hasExtraPadding }: { hasExtraPadding: boolean }) {
  if (hasExtraPadding && Platform.OS === "ios") {
    let positionTop = Style.getSafeAreaStart() + 88;
    if (deviceInfoModule.hasNotch()) {
      positionTop += 22;
    }
    return positionTop;
  }

  return TOP_BAR_WRAPPER_HEIGHT + 14;
}
