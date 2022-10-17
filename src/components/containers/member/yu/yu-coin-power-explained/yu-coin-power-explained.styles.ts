import { Colours, Style } from "@styles";
import { StyleSheet } from "react-native";
import { calculteHeightFromWidth } from "./yu-coin-power-svg";

export const yuCoinPowerHeight = calculteHeightFromWidth(Style.DEVICE_WIDTH);

const yuCoinPowerOrange = "#D17C00";

export const styles = StyleSheet.create({
  activitiesWrapper: {
    paddingHorizontal: Style.adjust(24),
  },
  buttonWrapper: {
    paddingTop: Style.adjust(40),
  },
  activitiesHeading: {
    marginVertical: Style.adjust(16),
  },
  activityGroup: {
    backgroundColor: Colours.neutral.n50,
    borderColor: Colours.neutral.n100,
    borderRadius: Style.adjust(8),
    borderWidth: 1,
    paddingHorizontal: Style.adjust(16),
  },
  activityGroupTitle: {
    marginTop: Style.adjust(12),
  },
  activityGroupSpacer: {
    marginTop: Style.adjust(8),
  },
  activityGroupItemsWrapper: {
    paddingVertical: Style.adjust(6),
  },
  activityGroupItem: {
    alignItems: "center",
    flexDirection: "row",
    paddingVertical: Style.adjust(8),
  },
  activityGroupItemIcon: {
    height: Style.adjust(16),
    width: Style.adjust(16),
    marginRight: Style.adjust(8),
  },
  activityGroupItemYuCoinWrapper: {
    alignItems: "center",
    flexDirection: "row",
    marginLeft: "auto",
  },
  activityGroupItemYuCoinIcon: {
    height: Style.adjust(16),
    width: Style.adjust(16),
    marginLeft: Style.adjust(4),
  },
  headerWrapper: {
    backgroundColor: "#FFFBE5",
    borderColor: "#FFF488",
    borderWidth: 1,
    borderTopLeftRadius: Style.adjust(8),
    borderTopRightRadius: Style.adjust(8),
    marginHorizontal: Style.adjust(28),
    marginTop: Style.adjust(40),
    paddingBottom: Style.adjust(16),
    paddingHorizontal: Style.adjust(24),
    paddingTop: Style.adjust(50),
  },
  loadingWrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  yuCoinIconWrapper: {
    position: "absolute",
    alignSelf: "center",
    zIndex: 1,
  },
  yuCoinPowerSvgWrapper: {
    position: "absolute",
  },
  yuCoinPowerWrapper: {
    flexDirection: "row",
    height: yuCoinPowerHeight,
    alignItems: "center",
    paddingHorizontal: Style.adjust(27),
    width: Style.DEVICE_WIDTH,
    color: yuCoinPowerOrange,
  },
  yuCoinPowerEarnRateWrapper: {
    paddingRight: Style.adjust(10),
  },
  yuCoinPowerEarnRate: {
    color: yuCoinPowerOrange,
    fontSize: Style.adjust(40),
    lineHeight: Style.adjust(40),
  },
  yuCoinTitle: {
    flex: 1,
  },
  yuCoinPowerDescription: {
    marginLeft: "auto",
    flex: 2,
  },
  wrapper: {
    paddingBottom: Style.adjust(100),
  },
});

const titleMarkdownBase = {
  color: yuCoinPowerOrange,
  fontSize: Style.adjust(18),
  lineHeight: Style.adjust(17),
};

const descriptionMarkdownBase = {
  color: yuCoinPowerOrange,
  fontSize: Style.adjust(14),
  lineHeight: Style.adjust(16),
  textAlign: "right",
};

export const titleMarkdownStyles = {
  strong: titleMarkdownBase,
  paragraph: titleMarkdownBase,
};

export const descriptionMarkdownStyles = {
  strong: descriptionMarkdownBase,
  paragraph: descriptionMarkdownBase,
};
