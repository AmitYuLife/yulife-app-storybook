import * as React from "react";
import { memo, useCallback, useMemo, useState } from "react";
import { ItemDetails } from "./types";
import { partition, range } from "lodash";
import { ItemDetailsTipCard } from "./item-details-tip-card";
import ItemDetailsItem from "./item-details-item";
import Box from "@atoms/box/box";
import ItemDetailsItemReward from "./item-details-item-reward";
import { LayoutChangeEvent, StyleSheet, View, ViewStyle } from "react-native";
import Animated, { FadeIn } from "react-native-reanimated";
import { Style } from "@styles";
import ItemDetailsStarsBackground from "./item-details-stars-background";
import ItemDetailsLoading from "./item-details-loading";

interface IItemDetailsContainer {
  isLoading?: boolean;
  details?: ItemDetails[];
  containerStyles?: ViewStyle;
}

const ItemDetailsContainer = ({ isLoading, details, containerStyles }: IItemDetailsContainer) => {
  const [itemRewardDetails, otherDetails] = useMemo(
    () => partition(details || [], (d) => d.type === "itemReward"),
    [details]
  );

  const [boxSize, setBoxSize] = useState({ width: 0, height: 0 });

  const handleLayout = useCallback((event: LayoutChangeEvent) => {
    const { width, height } = event.nativeEvent.layout;
    setBoxSize({ width, height });
  }, []);

  if (isLoading) {
    return (
      <Box style={containerStyles}>
        {range(6).map((num) => (
          <ItemDetailsLoading key={num} />
        ))}
      </Box>
    );
  }

  if (!details?.length) {
    return null;
  }

  return (
    <Box onLayout={handleLayout} style={[styles.containerStyles, containerStyles]}>
      {otherDetails.map((d) =>
        d.type === "tipCard" ? (
          <ItemDetailsTipCard key={d.id} id={d.id} title={d.title} description={d.description} image={d.image} />
        ) : d.type === "simple" ? (
          <ItemDetailsItem key={d.id} icon={d.image} label={d.title} />
        ) : null
      )}

      {itemRewardDetails?.length ? (
        <View>
          <Animated.View style={[styles.starsContainer]} entering={FadeIn.duration(500)}>
            <ItemDetailsStarsBackground width={Style.DEVICE_WIDTH - 60} height={boxSize.height} repeating={true} />
          </Animated.View>
          <Box gap={10} flexDirection="row" flexWrap="wrap">
            {itemRewardDetails.map((d) => (
              <ItemDetailsItemReward key={d.id} image={d.image} label={d.title} />
            ))}
          </Box>
        </View>
      ) : null}
    </Box>
  );
};

const styles = StyleSheet.create({
  containerStyles: { alignItems: "center" },
  starsContainer: {
    width: "100%",
    height: "100%",
    top: 0,
    position: "absolute",
    alignItems: "center",
    overflow: "hidden",
  },
});

export default memo(ItemDetailsContainer);
