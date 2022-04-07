import { StyleProp } from "react-native";
import { Colours, Style } from "@styles";
import { styles as textTemplateStyle } from "@components/atoms/text/text-template";

export interface IMarkdownStyle {
  block?: Record<string, string | number>;
  h1?: Record<string, string | number>;
  h2?: Record<string, string | number>;
  h3?: Record<string, string | number>;
  text?: Record<string, string | number>;
  imageWrapper?: Record<string, string | number>;
  image?: Record<string, string | number>;
  paragraph?: Record<string, string | number>;
  strong?: Record<string, string | number>;
}

const markdownStyle = (props: IMarkdownStyle) =>
  ({
    block: {
      marginBottom: Style.adjust(10),
      flexWrap: "wrap",
      flexDirection: "row",
      ...props?.block,
    },
    h1: {
      ...textTemplateStyle.h1,
      ...props?.h1,
    },
    h2: {
      ...textTemplateStyle.h2,
      ...props?.h2,
    },
    h3: {
      ...textTemplateStyle.h3,
      ...props?.h3,
    },
    hr: {
      alignSelf: "stretch",
      height: 1,
      backgroundColor: "#333333",
      marginVertical: Style.adjust(8),
    },
    text: {
      ...textTemplateStyle.b2,
      color: Colours.neutral.n800,
      ...props?.text,
    },
    strong: {
      fontFamily: Style.FONT_FAMILY_PRIMARY_BOLD,
      ...props?.strong,
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
      color: Colours.primary.p600,
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
      flex: 1,
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
      marginRight: Style.adjust(5),
      marginTop: Style.adjust(4),
    },
    imageWrapper: {
      flex: 1,
      flexDirection: "row",
      justifyContent: "flex-start",
      ...props?.imageWrapper,
    },
    image: {
      flex: 1,
      width: 200,
      height: 200,
      ...props?.image,
    },
    paragraph: {
      paddingVertical: Style.adjust(8),
      ...props?.paragraph,
    },
  } as StyleProp<any>);

export default markdownStyle;
