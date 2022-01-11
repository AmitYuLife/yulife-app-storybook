import React, { memo, useMemo } from "react";
import { View, StyleSheet, ViewStyle } from "react-native";
import { Image, PackageType } from "@atoms";
import { Style } from "@styles";
import { CoverType, YuWorld } from "@graphql/_core/schema/globalTypes";
import { useQuery } from "@apollo/react-hooks";
import { GQL_QUERY_GET_YUMOJI_PART_URL_SET } from "@graphql/yuscreen/getYumojiPartUrlSet.gql";
import { GetYumojiPartUrlSet, GetYumojiPartUrlSetVariables } from "@graphql/_core/schema/GetYumojiPartUrlSet";
import { GQL_QUERY_GET_PRODUCT_YUMOJI_PART } from "@graphql/yuscreen/getProductYumojiPart";
import { GetProductYumojiPart, GetProductYumojiPartVariables } from "@graphql/_core/schema/GetProductYumojiPart";

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

export const SlotIcon = memo((props: Props) => {
  const { size = SIZE, backgroundUrl, customerProductId = "", shouldDisplayPackageType } = props;
  const { data: getProductYumojiPartData } = useQuery<GetProductYumojiPart, GetProductYumojiPartVariables>(
    GQL_QUERY_GET_PRODUCT_YUMOJI_PART,
    {
      variables: {
        customerProductId,
      },
    }
  );

  const { data, loading } = useQuery<GetYumojiPartUrlSet, GetYumojiPartUrlSetVariables>(
    GQL_QUERY_GET_YUMOJI_PART_URL_SET,
    {
      variables: {
        partType: getProductYumojiPartData?.getProductYumojiPart.yumojiPartType,
      },
    }
  );

  const itemUrl = useMemo(() => {
    if (loading) {
      return "";
    }

    const coverTypeGuard = data.getYumojiPartUrlSet.variants.find(({ coverType }) => coverType === props.coverType);

    if (!coverTypeGuard) {
      return "";
    }

    const worldGuard = coverTypeGuard.worlds.find(({ worldId }) => worldId === props.worldId);

    if (!worldGuard) {
      return "";
    }

    return worldGuard.remoteUrl.uri;
  }, [data, props]);

  const dimensions = useMemo(() => {
    return {
      height: size + (shouldDisplayPackageType ? SPACE_FOR_PACKAGE_TYPE : 0),
      width: size,
      paddingTop: shouldDisplayPackageType ? SPACE_FOR_PACKAGE_TYPE : 0,
    };
  }, [size, shouldDisplayPackageType]);
  const wrapperStyle = useMemo(() => [styles.wrapper, dimensions], [dimensions]);
  const backgroundUrlSource = useMemo(() => ({ uri: backgroundUrl }), [backgroundUrl]);
  const backgroundUrlSourceStyle = useMemo(() => [StyleSheet.absoluteFill, dimensions], [dimensions]);
  const itemUrlSource = useMemo(() => ({ uri: itemUrl }), [itemUrl]);
  const itemUrlSourceStyle = useMemo(() => [StyleSheet.absoluteFill, dimensions], [dimensions]);

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
          <View>
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
