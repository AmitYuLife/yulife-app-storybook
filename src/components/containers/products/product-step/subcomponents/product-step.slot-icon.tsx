import React, { memo, useContext, useMemo } from "react";
import { View, StyleSheet, ViewStyle } from "react-native";
import { Image } from "@atoms";
import { Style } from "@styles";
import { CoverType, YuWorld } from "@graphql/_core/schema/globalTypes";
import { useQuery } from "@apollo/react-hooks";
import { GQL_QUERY_GET_YUMOJI_PART_URL_SET } from "@graphql/yuscreen/getYumojiPartUrlSet.gql";
import { GetYumojiPartUrlSet, GetYumojiPartUrlSetVariables } from "@graphql/_core/schema/GetYumojiPartUrlSet";
import { GQL_QUERY_GET_PRODUCT_YUMOJI_PART } from "@graphql/yuscreen/getProductYumojiPart";
import { GetProductYumojiPart, GetProductYumojiPartVariables } from "@graphql/_core/schema/GetProductYumojiPart";
import { ProductStepContext } from "../product-step.context";

interface Props {
  size?: number;
  coverType: CoverType;
  worldId: YuWorld;
  backgroundUrl: string;
}

const SIZE = Style.adjust(64);

export const SlotIcon = memo((props: Props) => {
  const { size = SIZE, backgroundUrl } = props;
  const { customerProductId } = useContext(ProductStepContext);
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

  return (
    <View style={styles.wrapper}>
      <Image source={{ uri: backgroundUrl }} width={size} height={size} theme="light" style={styles.slotWrapper} />
      <Image
        source={{ uri: itemUrl }}
        width={size}
        height={size}
        theme="light"
        style={styles.slotItem}
        suppressLoadingUi={true}
      />
    </View>
  );
});

const styles = StyleSheet.create({
  wrapper: {
    width: SIZE,
    height: SIZE,
    justifyContent: "center",
    alignItems: "center",
  } as ViewStyle,
  slotWrapper: {
    ...StyleSheet.absoluteFillObject,
    width: SIZE,
    height: SIZE,
  },
  slotItem: {
    ...StyleSheet.absoluteFillObject,
    width: SIZE,
    height: SIZE,
  },
});
