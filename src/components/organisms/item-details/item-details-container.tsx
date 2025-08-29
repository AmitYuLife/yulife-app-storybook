import { memo, useMemo } from "react";
import { range } from "lodash";
import { ItemDetailsTipCard } from "./item-details-tip-card";
import ItemDetailsItem from "./item-details-item";
import Box from "@atoms/box/box";
import { ViewStyle } from "react-native";
import ItemDetailsLoading from "./item-details-loading";
import ItemDetailsStarsBackground from "./item-details-stars-background";
import { FadeIn } from "react-native-reanimated";
import { Style, StyleSheet } from "@styles";
import { HalfModalItemDetails } from "@hooks";

interface IItemDetailsContainer {
  isLoading?: boolean;
  details?: HalfModalItemDetails[];
  containerStyles?: ViewStyle;
}

const STARS_BACKGROUND_HEIGHT = 1000;
const ItemDetailsContainer = ({ isLoading, details, containerStyles }: IItemDetailsContainer) => {
  const items = useMemo(() => details.filter(({ type }) => type !== "itemReward"), [details]);

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
    <>
      <Box width="100%" height={STARS_BACKGROUND_HEIGHT} position="absolute" mt={150} entering={FadeIn.duration(500)}>
        <ItemDetailsStarsBackground width={Style.DEVICE_WIDTH - 60} height={STARS_BACKGROUND_HEIGHT} repeating={true} />
      </Box>
      <Box style={[styles.containerStyles, containerStyles]}>
        {items.map((d) =>
          d.type === "tipCard" ? (
            <ItemDetailsTipCard key={d.id} id={d.id} title={d.title} description={d.description} image={d.image} />
          ) : d.type === "simple" ? (
            <ItemDetailsItem key={d.id} icon={d.image} label={d.title} />
          ) : null
        )}
      </Box>
    </>
  );
};

const styles = StyleSheet.create({
  containerStyles: { alignItems: "center" },
});

export default memo(ItemDetailsContainer);
