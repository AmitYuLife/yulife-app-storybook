import { StyleSheet, Platform } from "react-native";
import { Colours, Style } from "@styles";

export default StyleSheet.create({
  block: {
    marginBottom: 10,
    flexWrap: "wrap",
    flexDirection: "row",
  },
  h1: {
    fontSize: 30,
    marginTop: 20,
    marginBottom: 8,
  },
  h2: {
    fontSize: 20,
    marginTop: 16,
    marginBottom: 8,
  },
  h3: {
    fontSize: 20,
    marginTop: 16,
    marginBottom: 8,
  },
  h4: {
    fontSize: 20,
    marginTop: 16,
    marginBottom: 8,
  },
  h5: {
    fontSize: 20,
    marginTop: 12,
    marginBottom: 6,
  },
  h6: {
    fontSize: 20,
    marginTop: 12,
    marginBottom: 6,
  },
  hr: {
    alignSelf: "stretch",
    height: 1,
    backgroundColor: "#333333",
    marginVertical: 8,
  },
  text: {
    fontFamily: Style.FONT_FAMILY_PRIMARY,
    color: Colours.neutral.n800,
    fontSize: Style.adjust(16),
    lineHeight: Style.adjust(24),
    letterSpacing: 0.6,
  },
  strong: {
    fontFamily: Style.FONT_FAMILY_PRIMARY_BOLD,
    fontWeight: Platform.select({ ios: undefined, android: "100" }),
  },
  em: {
    fontStyle: "italic",
  },
  del: {
    textDecorationLine: "line-through",
  },
  u: {
    textDecorationLine: "underline",
  },
  linkWrapper: {
    alignSelf: "flex-start",
  },
  link: {
    textDecorationLine: "underline",
    alignSelf: "flex-start",
  },
  list: {
    marginBottom: Style.adjust(8),
    marginTop: Style.adjust(8),
  },
  listItem: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginVertical: Style.adjust(4),
  },
  listItemContent: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  listItemBullet: {
    width: Style.adjust(4),
    height: Style.adjust(4),
    backgroundColor: "black",
    borderRadius: 2,
    marginRight: Style.adjust(10),
    marginTop: Style.adjust(10),
  },
  listItemNumber: {
    marginRight: 10,
  },
  imageWrapper: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  image: {
    flex: 1,
    minWidth: 200,
    height: 200,
  },
  paragraph: {
    paddingVertical: 8,
  },
});
