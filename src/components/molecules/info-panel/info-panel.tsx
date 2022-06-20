import React, { memo, useMemo } from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import { YugiStatusIcon } from "@atoms/icon/yugi-status-icon";
import { Image } from "@atoms";
import { Colours, Style } from "@styles";
import Markdown from "../markdown/markdown";
import { styles as textTemplateStyle } from "@components/atoms/text/text-template";
import { RemoteImage } from "@graphql/_core/schema";
import { YugiInfoStatus } from "@atoms/icon/yugi-status-info";

export type BannerType = "success" | "info" | "warning" | "error" | "neutral";

interface Props {
  markdown: string;
  type?: BannerType;
  remoteImage?: RemoteImage;
  copyType?: "sparse" | "dense";
  wrapperStyle?: ViewStyle;
  copyWrapperStyle?: ViewStyle;
  iconType?: BannerType;
}

const InfoPanel = ({
  markdown,
  remoteImage,
  type = "warning",
  wrapperStyle,
  copyWrapperStyle,
  copyType = "sparse",
  iconType,
}: Props) => {
  const styleWrapper = useMemo(() => {
    return [styles.wrapper, getBannerTheme(type), wrapperStyle];
  }, [type, wrapperStyle]);

  return (
    <View style={styleWrapper}>
      <View style={styles.imageWrapper}>
        {remoteImage ? <Image width={Style.adjust(56)} source={remoteImage} /> : getYugiStatusIcon(iconType)}
      </View>
      <View
        style={[styles.copyWrapper, copyWrapperStyle, { paddingVertical: Style.adjust(copyType === "sparse" ? 8 : 0) }]}
      >
        <Markdown markdownStyles={copyType === "sparse" ? sparseMarkdownStyles : denseMarkdownStyles} text={markdown} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    flex: 1,
    overflow: "hidden",
    borderRadius: Style.adjust(8),
  } as ViewStyle,
  imageWrapper: {
    position: "absolute",
    top: 0,
    left: 0,
  } as ViewStyle,
  copyWrapper: {
    marginLeft: Style.adjust(64),
    marginRight: Style.adjust(24),
  } as ViewStyle,
});

export default memo(InfoPanel);

function getBannerTheme(bannerType: BannerType) {
  switch (bannerType) {
    case "warning":
      return { backgroundColor: Colours.status.wa100 };
    case "success":
      return { backgroundColor: Colours.status.su100 };
    case "info":
      return { backgroundColor: Colours.status.in100 };
    case "error":
      return { backgroundColor: Colours.status.er100 };
    default:
      return { backgroundColor: Colours.neutral.n100 };
  }
}

function getYugiStatusIcon(bannerType: BannerType) {
  switch (bannerType) {
    case "warning":
      return <YugiInfoStatus />;
    case "info":
      return <YugiInfoStatus />;
    case "error":
      return <YugiInfoStatus color={Colours.status.er300} />;
    default:
      return <YugiStatusIcon />;
  }
}

export const sparseMarkdownStyles = {
  text: textTemplateStyle.b2,
  paragraph: {
    paddingVertical: Style.adjust(8),
  },
};

const denseMarkdownStyles = {
  text: textTemplateStyle.l2b,
};
