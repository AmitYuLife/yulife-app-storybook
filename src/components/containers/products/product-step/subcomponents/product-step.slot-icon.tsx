import React, { memo, useMemo } from "react";
import { View, StyleSheet, ViewStyle } from "react-native";
import { Image } from "@atoms";
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
}

const SIZE = Style.adjust(64);

export const SlotIcon = memo((props: Props) => {
  const { size = SIZE, backgroundUrl, customerProductId = "" } = props;
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
    return { height: size, width: size };
  }, [size]);

  return (
    <View style={[styles.wrapper, dimensions]}>
      <Image
        source={{ uri: backgroundUrl }}
        width={size}
        height={size}
        theme="light"
        style={[styles.slotWrapper, dimensions]}
      />
      <Image
        source={{ uri: itemUrl }}
        width={size}
        height={size}
        theme="light"
        style={[styles.slotItem, dimensions]}
        suppressLoadingUi={true}
      />
    </View>
  );
});

const styles = StyleSheet.create({
  wrapper: {
    justifyContent: "center",
    alignItems: "center",
  } as ViewStyle,
  slotWrapper: {
    ...StyleSheet.absoluteFillObject,
  },
  slotItem: {
    ...StyleSheet.absoluteFillObject,
  },
});
