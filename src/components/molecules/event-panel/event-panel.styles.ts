import { Colours, Style } from "@styles";
import { StyleSheet } from "react-native";

export const baseStyles = StyleSheet.create({
  wrapper: {
    minHeight: Style.adjust(143),
    borderRadius: 8,
    alignItems: "center",
    marginHorizontal: 8,
    marginTop: Style.adjust(15),
    paddingBottom: Style.adjust(5),
  },
  container: {
    width: "100%",
    height: Style.adjust(156),
    padding: Style.adjust(16),
    borderWidth: 1,
    borderRadius: 8,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: 32,
  },
  headerTitle: {
    flex: 1,
  },
  description: {
    width: Style.adjust(124),
  },
  challenges: {
    flexDirection: "row",
    marginTop: Style.adjust(8),
    overflow: "hidden",
  },
  challengeContainer: {
    flexDirection: "row",
    paddingRight: Style.adjust(10),
  },
  challengeIcon: {
    marginRight: Style.adjust(4),
  },
  progressBar: {
    marginTop: Style.adjust(8),
  },
  tags: {
    flexDirection: "row",
    marginTop: Style.adjust(8),
    justifyContent: "space-between",
    position: "absolute",
    bottom: Style.adjust(16),
    left: Style.adjust(16),
  },
  statistics: {
    flexDirection: "row",
  },
  badgeContainer: {
    position: "absolute",
    height: 24,
    paddingVertical: Style.adjust(4),
    paddingHorizontal: Style.adjust(10),
    borderRadius: 12,
    top: -12,
    left: 12,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    flexDirection: "row",
  },
  badgeIcon: {
    width: Style.adjust(12),
    height: Style.adjust(12),
    resizeMode: "contain",
    marginRight: 5,
  },
  backgroundImage: {
    position: "absolute",
    top: 1,
    left: 1,
    right: 1,
    bottom: 1,
    borderRadius: Style.adjust(13),
    overflow: "hidden",
  },
  image: {
    position: "absolute",
    width: Style.adjust(137),
    height: Style.adjust(77),
    bottom: 2,
    right: 2,
    borderBottomRightRadius: Style.adjust(6),
    overflow: "hidden",
  },
});

export const rewardsEventPanelStyles = StyleSheet.create({
  ...baseStyles,
  wrapper: {
    height: Style.adjust(141),
    borderRadius: Style.adjust(15),
  },
  container: {
    height: Style.adjust(137),
    padding: Style.adjust(16),
    borderWidth: 1,
    borderRadius: Style.adjust(15),
    overflow: "hidden",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: Style.adjust(27),
  },
  challenges: {
    flexDirection: "row",
    overflow: "hidden",
  },
  challengeContainer: {
    flexDirection: "row",
    paddingHorizontal: Style.adjust(10),
    paddingVertical: Style.adjust(2),
    backgroundColor: Colours.primary.p40,
    borderRadius: Style.adjust(17),
  },
  progressBar: {
    marginTop: Style.adjust(6),
  },
  tags: {
    flexDirection: "row",
    marginTop: Style.adjust(2),
    justifyContent: "space-between",
  },
});
