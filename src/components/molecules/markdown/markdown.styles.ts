import { ImageStyle, TextStyle, ViewStyle } from "react-native";
import { MobileGameTheme } from "@graphql/__generated";
import { Colours, Style, templateTextStyles } from "@styles";

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
  link?: Record<string, string | number>;
}

export const getMarkdownStyles = (props: IMarkdownStyle, theme?: Omit<MobileGameTheme, "sections">) =>
  ({
    block: {
      marginBottom: Style.adjust(10),
      flexWrap: "wrap",
      flexDirection: "row",
      ...props?.block,
    },
    h1: {
      ...templateTextStyles.h1,
      ...props?.h1,
    },
    h2: {
      ...templateTextStyles.h2,
      ...props?.h2,
    },
    h3: {
      ...templateTextStyles.h3,
      ...props?.h3,
    },
    h4: {
      ...templateTextStyles.b1b,
      ...props?.h3,
    },
    h5: {
      ...templateTextStyles.b2b,
      ...props?.h3,
    },
    hr: {
      alignSelf: "stretch",
      height: 1,
      backgroundColor: Colours.darkestGray,
      marginVertical: Style.adjust(8),
    },
    text: {
      ...templateTextStyles.b2,
      lineHeight: Style.adjust(24),
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
      color: theme?.colors?.primary?.p600 ?? Colours.primary.p600,
      ...props?.link,
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
      backgroundColor: Colours.neutral.black,
      borderRadius: 2,
      marginEnd: Style.adjust(10),
      marginTop: Style.adjust(10),
    },
    listItemNumber: {
      marginEnd: Style.adjust(5),
      marginTop: Style.adjust(4),
    },
    imageWrapper: {
      flexDirection: "row",
      justifyContent: "flex-start",
      ...props?.imageWrapper,
    },
    image: {
      position: "absolute",
      flex: 1,
      width: 200,
      height: 200,
      ...props?.image,
    },
    paragraph: {
      paddingVertical: Style.adjust(8),
      ...props?.paragraph,
    },
  } as Record<string, ViewStyle | TextStyle | ImageStyle>);

export default getMarkdownStyles;
