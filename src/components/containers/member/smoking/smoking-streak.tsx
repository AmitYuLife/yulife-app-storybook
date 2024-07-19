import React, { FC, memo, useRef } from "react";
import { ListRenderItemInfo, View, FlatList as RNFlatList } from "react-native";
import { HealthSmokingStreakCarousel } from "@graphql/__generated";
import { FlatList, TextTemplate } from "@atoms";
import { styles } from "./smoking-streak.styles";
import { Colours } from "@styles";
import { SmokingCheckmark } from "./smoking-checkmark";
import { YuCoinWithSparkles } from "./yucoin-with-sparkles";
import { useScrollFlatList } from "./useScrollFlatList";

interface Props {
  streak: HealthSmokingStreakCarousel[];
  paddingHorizontal?: number;
  startFrom?: number;
  animateTo?: number;
}

export const SmokingCarousel: FC<Props> = memo(({ streak, paddingHorizontal = 0, startFrom, animateTo }) => {
  const flatListRef = useRef<RNFlatList<HealthSmokingStreakCarousel>>(null);

  useScrollFlatList(flatListRef, startFrom, animateTo);

  return (
    <View>
      {/* TODO INTL - swap this FlatList with the list component used for enterprise rewards */}
      <FlatList
        forwardRef={flatListRef}
        data={streak}
        horizontal={true}
        pagingEnabled={false}
        decelerationRate={0.9}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        contentContainerStyle={[styles.flatList, { paddingHorizontal }]}
        ItemSeparatorComponent={Separator}
      />
    </View>
  );
});

const Separator = memo(
  () => <View style={styles.separator} />,
  () => true
);

const renderItem = ({ item }: ListRenderItemInfo<HealthSmokingStreakCarousel>) => {
  const cardStyle = [styles.card, item.completed ? styles.cardCompleted : null];

  return (
    <View style={cardStyle}>
      <YuCoinWithSparkles />
      {item.completed ? (
        <View style={styles.checkmark}>
          <SmokingCheckmark />
        </View>
      ) : (
        <View style={styles.id}>
          <TextTemplate type="b1b" textAlign="center" color={Colours.neutral.white}>
            {item.id}
          </TextTemplate>
        </View>
      )}
      <TextTemplate type="b1" textAlign="left" color={Colours.neutral.white}>
        {item.title}
      </TextTemplate>
    </View>
  );
};

const keyExtractor = (item: HealthSmokingStreakCarousel) => String(item.id);
