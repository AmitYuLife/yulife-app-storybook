import React, { memo } from "react";
import { View, ViewStyle } from "react-native";
import { Image } from "@atoms";
import { PackageType } from "@molecules";
import { Style, StyleSheet } from "@styles";
import { CoverType } from "@graphql/__generated";
import { TOP_RIGHT_ITEM_IMAGE } from "@ids";

interface Props {
  size?: number;
  coverType: CoverType;
  backgroundUrl: string;
  itemUrl: string;
  showLabel?: boolean;
}

const SIZE = Style.adjust(102);
const SPACE_FOR_PACKAGE_TYPE = Style.adjust(16);

export const SlotIcon = memo((props: Props) => {
  const { size = SIZE, backgroundUrl, itemUrl, showLabel = true } = props;

  if (!itemUrl) {
    return null;
  }

  const dimensions = {
    height: size + SPACE_FOR_PACKAGE_TYPE,
    width: size,
  };

  return (
    <View style={[styles.wrapper, dimensions]} testID={TOP_RIGHT_ITEM_IMAGE(itemUrl)}>
      <Image
        source={{ uri: backgroundUrl }}
        width={size}
        height={size}
        theme="light"
        style={[StyleSheet.absoluteFill, dimensions]}
      />
      <Image
        source={{ uri: itemUrl }}
        width={Style.adjust(80)}
        height={Style.adjust(80)}
        theme="light"
        style={{
          ...StyleSheet.absoluteFillObject,
          top: SPACE_FOR_PACKAGE_TYPE / 2,
          height: Style.adjust(102),
          width: Style.adjust(102),
        }}
        suppressLoadingUi={true}
      />
      {showLabel ? (
        <View style={styles.coverTypeWrapper}>
          <View>
            <PackageType minWidth={Style.adjust(55)} type={props.coverType} />
          </View>
        </View>
      ) : null}
    </View>
  );
});

const styles = StyleSheet.create({
  wrapper: {
    justifyContent: "center",
    alignItems: "center",
  } as ViewStyle,
  coverTypeWrapper: {
    position: "absolute",
    start: 0,
    end: 0,
    top: 0,
    alignItems: "center",
    justifyContent: "center",
  } as ViewStyle,
});
