import { Colours, Style } from "@styles";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
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
    padding: Style.adjust(16),
    borderWidth: 1,
    borderRadius: 8,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: 32,
  },
  challenges: {
    flexDirection: "row",
    marginTop: Style.adjust(8),
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
});

export const getCurrentWorldStyle = (world: number) => {
  switch (world) {
    case 1:
      return {
        wrapper: {
          backgroundColor: Colours.ocean.up202,
        },
        container: {
          borderColor: Colours.ocean.up202,
          backgroundColor: Colours.ocean.up203,
        },
      };
    case 2:
      return {
        wrapper: {
          backgroundColor: "#F3EDD1",
        },
        container: {
          borderColor: "#F3EDD1",
          backgroundColor: "#FFFBE9",
        },
      };
    case 3:
      return {
        wrapper: {
          backgroundColor: "#F4D1DB",
        },
        container: {
          borderColor: "#F4D1DB",
          backgroundColor: "#FFE7EC",
        },
      };
    case 0:
    default:
      return {
        wrapper: {
          backgroundColor: "#EDEDD1",
        },
        container: {
          borderColor: "#EDEDD1",
          backgroundColor: "#FFFFE5",
        },
      };
  }
};
