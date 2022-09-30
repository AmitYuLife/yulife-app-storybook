import React, { memo, useMemo } from "react";
import { View, StyleSheet, ViewStyle } from "react-native";
import { Image } from "@atoms";
import { PackageType } from "@molecules";
import { Style } from "@styles";
import { CoverType, YuWorld } from "@graphql/_core/schema/globalTypes";
import { useQuery } from "@apollo/client";
import { GQL_QUERY_GET_YUMOJI_PART_URL_SET } from "@graphql/yuscreen/getYumojiPartUrlSet.gql";
import { GetYumojiPartUrlSet, GetYumojiPartUrlSetVariables } from "@graphql/_core/schema/GetYumojiPartUrlSet";
import { GQL_QUERY_GET_PRODUCT_YUMOJI_PART } from "@graphql/yuscreen/getProductYumojiPart";
import { GetProductYumojiPart, GetProductYumojiPartVariables } from "@graphql/_core/schema/GetProductYumojiPart";
import { COVER_TYPE } from "@ids";

interface Props {
  size?: number;
  coverType: CoverType;
  worldId: YuWorld;
  backgroundUrl: string;
  /**
   * For getting product yumoji part
   */
  customerProductId: string;
  /**
   * Should package type be displayed
   */
  shouldDisplayPackageType?: boolean;
}

const SIZE = Style.adjust(64);
const SPACE_FOR_PACKAGE_TYPE = Style.adjust(16);
const NO_URLS = { itemUrl: "", itemBackgroundUrl: "" };

export const SlotIcon = memo((props: Props) => {
  const { size = SIZE, backgroundUrl, customerProductId = "", shouldDisplayPackageType } = props;
  const { data: getProductYumojiPartData, error: getProductYumojiPartError } = useQuery<
    GetProductYumojiPart,
    GetProductYumojiPartVariables
  >(GQL_QUERY_GET_PRODUCT_YUMOJI_PART, {
    variables: {
      customerProductId,
    },
  });

  const { data, loading, error: getYumojiPartUrlSetError } = useQuery<
    GetYumojiPartUrlSet,
    GetYumojiPartUrlSetVariables
  >(GQL_QUERY_GET_YUMOJI_PART_URL_SET, {
    variables: {
      partType: getProductYumojiPartData?.getProductYumojiPart.yumojiPartType,
    },
  });

  const activeCoverWorldItem = useMemo(() => {
    if (loading) {
      return NO_URLS;
    }

    const coverTypeGuard = data.getYumojiPartUrlSet.variants.find(({ coverType }) => coverType === props.coverType);

    if (!coverTypeGuard) {
      return NO_URLS;
    }

    const worldGuard = coverTypeGuard.worlds.find(({ worldId }) => worldId === props.worldId);

    if (!worldGuard) {
      return NO_URLS;
    }

    return { itemUrl: worldGuard.remoteUrl.uri, itemBackgroundUrl: coverTypeGuard.itemSlotBackgroundUrl };
  }, [data, props]);

  const dimensions = useMemo(() => {
    return {
      height: size + (shouldDisplayPackageType ? SPACE_FOR_PACKAGE_TYPE : 0),
      width: size,
    };
  }, [size, shouldDisplayPackageType]);
  const wrapperStyle = useMemo(() => [styles.wrapper, dimensions], [dimensions]);
  const backgroundUrlSource = useMemo(() => ({ uri: activeCoverWorldItem.itemBackgroundUrl || backgroundUrl }), [
    activeCoverWorldItem,
    backgroundUrl,
  ]);
  const backgroundUrlSourceStyle = useMemo(() => [StyleSheet.absoluteFill, dimensions], [dimensions]);
  const itemUrlSource = useMemo(() => ({ uri: activeCoverWorldItem.itemUrl }), [activeCoverWorldItem]);
  const itemUrlSourceStyle = useMemo(() => [StyleSheet.absoluteFill, dimensions], [dimensions]);

  const errors = [
    ...(getProductYumojiPartError?.graphQLErrors || []),
    ...(getYumojiPartUrlSetError?.graphQLErrors || []),
  ];

  if (errors.length) {
    return null;
  }

  return (
    <View style={wrapperStyle}>
      <Image source={backgroundUrlSource} width={size} height={size} theme="light" style={backgroundUrlSourceStyle} />
      <Image
        source={itemUrlSource}
        width={size}
        height={size}
        theme="light"
        style={itemUrlSourceStyle}
        suppressLoadingUi={true}
      />
      {!shouldDisplayPackageType ? null : (
        <View style={styles.coverTypeWrapper}>
          <View testID={COVER_TYPE(props.coverType)}>
            <PackageType minWidth={Style.adjust(55)} type={props.coverType} />
          </View>
        </View>
      )}
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
    left: 0,
    right: 0,
    top: 0,
    alignItems: "center",
    justifyContent: "center",
  } as ViewStyle,
});
