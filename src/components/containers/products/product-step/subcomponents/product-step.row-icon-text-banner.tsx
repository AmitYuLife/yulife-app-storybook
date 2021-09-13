import React, { memo } from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import { ContentItemRowIconTextBanner as Props } from "@graphql/_core/schema";
import { Image } from "@atoms";
import { Colours, Style } from "@styles";
import Markdown from "@molecules/markdown/markdown";
import { ContentItemRowIconTextBannerType } from "@graphql/_core/schema/globalTypes";
import { mapServerStyles } from "@components/sdui";
import { styles as textTemplateStyle } from "@components/atoms/text/text-template";

const IMAGE_WIDTH = Style.adjust(57);
const BANNER_PADDING = Style.adjust(24);

export const ProductStepRowIconTextBanner = memo(({ bannerIcon, bannerType, markdown, styles }: Props) => {
  return (
    <View style={[stylesheet.wrapper, mapServerStyles(styles)]}>
      <View style={[stylesheet.inner, mapTypeToStyle(bannerType)]}>
        <Image source={{ uri: bannerIcon.uri }} width={IMAGE_WIDTH} />
        <View style={stylesheet.markdownWrapper}>
          <Markdown markdownStyles={markdownStyles} text={markdown} />
        </View>
      </View>
    </View>
  );
});

const stylesheet = StyleSheet.create({
  wrapper: {
    width: "100%",
    paddingHorizontal: BANNER_PADDING,
  } as ViewStyle,
  inner: {
    flexDirection: "row",
    borderRadius: 10,
    alignItems: "flex-end",
  } as ViewStyle,
  markdownWrapper: {
    paddingLeft: Style.adjust(8),
    paddingRight: Style.adjust(32),
    maxWidth: Style.DEVICE_WIDTH - IMAGE_WIDTH - BANNER_PADDING * 2,
  } as ViewStyle,
});

function mapTypeToStyle(type: ContentItemRowIconTextBannerType) {
  if (type === ContentItemRowIconTextBannerType.error) {
    return { backgroundColor: Colours.primary.p50 };
  }

  return null;
}

const markdownStyles = {
  text: textTemplateStyle.l2,
  paragraph: {
    paddingVertical: Style.adjust(8),
  },
};
