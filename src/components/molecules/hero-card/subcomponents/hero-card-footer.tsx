import { Platform, View } from "react-native";
import { memo } from "react";
import { Image } from "@atoms";
import { HeroCardFooter as HeroCardFooterProps } from "@utils/heroCards";
import { Style, StyleSheet } from "@styles";
import Markdown from "@components/molecules/markdown/markdown";

const HeroCardFooter = ({ left, right, fontColor }: HeroCardFooterProps) => {
  return (
    <View style={styles.footerWrapper}>
      {!left.icon && !left.text ? null : (
        <View style={styles.flexRow}>
          {!left.icon ? null : (
            <Image
              source={{ uri: left.icon }}
              width={Style.adjust(16)}
              tintColor={fontColor}
              suppressLoadingUi={true}
            />
          )}
          {!left.text ? null : <Markdown markdownStyles={getMarkdownStyles(fontColor)} text={left.text} />}
        </View>
      )}
      {!right.icon && !right.text ? null : (
        <View style={styles.flexRow}>
          {!right.icon ? null : (
            <Image
              source={{ uri: right.icon }}
              width={Style.adjust(16)}
              tintColor={fontColor}
              suppressLoadingUi={true}
            />
          )}
          {!right.text ? null : <Markdown markdownStyles={getMarkdownStyles(fontColor)} text={right.text} />}
        </View>
      )}
    </View>
  );
};

export default memo(HeroCardFooter);

const getMarkdownStyles = (fontColor: string, boldTextColor?: string, fontWeight?: number) => ({
  paragraph: {
    paddingTop: Style.adjust(4),
    paddingBottom: 0,
  },
  text: {
    fontSize: Style.adjust(14),
    lineHeight: Style.adjust(16),
    color: fontColor,
    fontWeight,
  },
  imageWrapper: {
    width: Style.adjust(16),
  },
  image: {
    width: Style.adjust(16),
    height: Style.adjust(16),
    bottom: Style.adjust(
      Platform.select({
        ios: -6,
        android: -2,
      })
    ),
  },
  ...(boldTextColor
    ? {
        strong: {
          color: boldTextColor,
        },
      }
    : {}),
});

const styles = StyleSheet.create({
  footerWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    paddingEnd: Style.adjust(16),
    paddingBottom: Style.adjust(16),
    marginTop: Style.adjust(8),
  },
  flexRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: Style.adjust(4),
  },
});
