import { FlatList } from "@atoms";
import Box from "@atoms/box/box";
import { TextTemplate } from "@atoms";
import { SduiAction } from "@redux/user/user.types";
import { Style, StyleSheet } from "@styles";
import PathwayHeroCard, { PATHWAY_HERO_CARD_HEIGHT, PATHWAY_HERO_CARD_WIDTH } from "./pathway-hero-card";
import SkeletonLoading from "@atoms/skeleton-loading/skeleton-loading";
import { useCallback } from "react";

type UserPathwayItem = {
  onPress: SduiAction;
  backgroundColor?: string;
  id: string;
  image: {
    id: string;
    uri?: string | null;
  };
  heading: string;
  label: string;
};

export type PathwayAdviceSectionProps = {
  heading: string;
  items: Array<UserPathwayItem>;
  isLoading: boolean;
};

export const AdviceSection = ({ heading, items, isLoading }: PathwayAdviceSectionProps) => {
  const renderItem = useCallback(
    ({ item }: { item: UserPathwayItem }) => (
      <PathwayHeroCard
        heading={item.heading}
        label={item.label}
        onPress={item.onPress}
        image={item.image?.uri}
        backgroundColor={item.backgroundColor}
      />
    ),
    []
  );

  const ItemSeparatorComponent = useCallback(() => <Box w={8} />, []);

  if (isLoading) {
    return (
      <Box gap={16}>
        <HeaderComponent heading={heading} />
        <Box flexDirection="row" gap={8} mh={24} overflow="hidden">
          {Array.from({ length: 2 }).map((_, index) => (
            <SkeletonLoading
              key={index}
              br={24}
              mr={8}
              mb={20}
              w={PATHWAY_HERO_CARD_WIDTH}
              height={PATHWAY_HERO_CARD_HEIGHT}
            />
          ))}
        </Box>
      </Box>
    );
  }

  return (
    <Box gap={16}>
      <HeaderComponent heading={heading} />
      <FlatList
        data={items}
        contentContainerStyle={style.flatListContainer}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={ItemSeparatorComponent}
      />
    </Box>
  );
};

const style = StyleSheet.create({
  flatListContainer: {
    paddingHorizontal: 24,
  },
});

const HeaderComponent = ({ heading }: { heading: string }) => {
  return (
    <Box mh={24}>
      <TextTemplate testID="health-advice-and-tips" type="b1b" lineHeight={Style.adjust(20)}>
        {heading}
      </TextTemplate>
    </Box>
  );
};
