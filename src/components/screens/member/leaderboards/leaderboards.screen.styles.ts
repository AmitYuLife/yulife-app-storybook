import { ImageStyle, StyleSheet, ViewStyle, Platform } from "react-native";
import { isIphoneX } from "react-native-iphone-x-helper";
import { Style } from "../../../../styles";
import { TopBar } from "@components/molecules";
import deviceInfoModule from "react-native-device-info";

const VIEWBOX_MIN_X = 15;
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
export const TOP_BAR_PAD_TOP = Platform.select({ ios: Style.getSafeAreaStart(), android: 0 });
export const TOP_BAR_PAD_BOT = Platform.select({ ios: Style.adjust(16), android: Style.adjust(8) });
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
  list: {
    width: "100%",
    backgroundColor: "white",
  } as ViewStyle,
  consentWrapper: {
    marginTop: EMPTY_LEADER_BOARD_MARGIN_TOP + LIST_PAD_HEIGHT,
  } as ViewStyle,
  leaderboardTitle: {
    position: "absolute",
    top: 16,
    left: 0,
    right: 0,
  } as ViewStyle,
  leaderboardTitleConsent: {
    position: "absolute",
    top: Platform.select({ ios: Style.getSafeAreaStart() + 60, android: 56 }),
    left: 0,
    right: Platform.select({ ios: 0, android: 1 }),
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
  leaderboardOfflineWrapper: { justifyContent: "center", alignItems: "center", flex: 1 } as ViewStyle,
  leaderboardOfflineImage: { position: "absolute", bottom: 0, left: 0, right: 0, width: "100%" } as ImageStyle,
  leaderboardOfflineText: { fontSize: Style.adjust(20), lineHeight: Style.adjust(20) },
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
