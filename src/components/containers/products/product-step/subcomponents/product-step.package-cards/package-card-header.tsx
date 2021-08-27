import React, { memo } from "react";
import { View, StyleSheet, ViewStyle, Platform } from "react-native";
import { PackageType, TextTemplate } from "@atoms";
import { Colours, Style } from "@styles";
import { Image, Logo } from "@atoms";
import { SlotIcon } from "./slot-icon";
import { ContentItemPackageCards_packageCards_header } from "@graphql/_core/schema";
import { CoverType } from "@graphql/_core/schema/globalTypes";
import media from "@styles/media";

interface Props {
  header: ContentItemPackageCards_packageCards_header;
  coverType: CoverType;
  width: number;
}

/**
 * Don't scale
 */
const HEADER_HEIGHT = 112;
const BORDER_RADIUS = 12;
const OFFSET = media.select(
  [
    {
      condition: Platform.OS === "android" && Style.DEVICE_WIDTH <= media.DEVICES.SamsungGalaxyA5.width,
      value: 20,
    },
  ],
  0
);

const PackageCardHeader = (props: Props) => {
  const headerImage = props.header?.backgroundUrl?.uri && { uri: props.header.backgroundUrl.uri };

  return (
    <View style={styles.wrapper}>
      {!headerImage ? null : (
        <Image style={styles.headerImage} source={headerImage} width={props.width + OFFSET} height={HEADER_HEIGHT} />
      )}
      <View style={styles.inner}>
        <SlotIcon
          backgroundUrl={props.header.slotInfo.backgroundUrl.uri}
          itemUrl={props.header.slotInfo.itemUrl[0].url.uri}
        />
        <View style={styles.distance}>
          <PackageType type={props.coverType} />
          <View style={styles.descriptionWrapper}>
            <TextTemplate color={Colours.neutral.white} type="h3">
              {props.header.slotInfo.name}
            </TextTemplate>
            <Logo width={Style.adjust(16)} height={Style.adjust(16)} style={styles.logo} type="inverted" />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    borderTopLeftRadius: BORDER_RADIUS,
    borderTopRightRadius: BORDER_RADIUS,
    overflow: "hidden",
  },
  inner: {
    padding: Style.adjust(24),
    flexDirection: "row",
  } as ViewStyle,
  distance: {
    marginLeft: Style.adjust(20),
  } as ViewStyle,
  descriptionWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: Style.adjust(8),
  },
  logo: {
    marginLeft: Style.adjust(8),
    marginBottom: Style.adjust(8),
  },
  headerImage: {
    position: "absolute",
    right: 0,
    borderTopLeftRadius: BORDER_RADIUS,
    borderTopRightRadius: BORDER_RADIUS,
  },
});

export default memo(PackageCardHeader);
