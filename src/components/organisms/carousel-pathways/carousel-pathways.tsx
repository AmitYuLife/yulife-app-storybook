import { Box, TextTemplate } from "@atoms";
import { memo } from "react";
import { FlashList } from "@shopify/flash-list";
import { Style, StyleSheet } from "@styles";
import { t } from "@locale";
import { RecentRewardCard } from "@organisms";

interface PathwayItem {
  imageUrl: string;
  text: string;
  onPress: () => void;
}

interface CarouselPathwaysProps {
  pathways: PathwayItem[];
}

const ESTIMATED_ITEM_SIZE = 148;

const CarouselPathways = ({ pathways }: CarouselPathwaysProps) => {
  return (
    <Box>
      <Box mb={16}>
        <TextTemplate type="b1b">{t("screens.pathways.personal_health_path.heading")}</TextTemplate>
      </Box>
      <FlashList
        data={pathways}
        horizontal={true}
        renderItem={renderPathway}
        keyExtractor={keyExtractor}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        estimatedItemSize={ESTIMATED_ITEM_SIZE}
        contentContainerStyle={styles.contentContainer}
      />
    </Box>
  );
};

const renderPathway = ({ item }: { item: PathwayItem }) => (
  <Box mr={16}>
    <RecentRewardCard imageUrl={item.imageUrl} label={item.text} onPress={item.onPress} />
  </Box>
);

const keyExtractor = (item: PathwayItem, index: number) => `${item.text}-${item.imageUrl}-${index}`;

const styles = StyleSheet.create({
  contentContainer: {
    paddingHorizontal: Style.adjust(16),
  },
});

export default memo(CarouselPathways);
