import React, { FC, memo } from "react";
import { ListRenderItemInfo, View } from "react-native";
import { HealthSmokingStreakCarousel } from "@graphql/__generated";
import { FlatList, TextTemplate } from "@atoms";
import { styles } from "./smoking-streak.styles";
import { Colours } from "@styles";
import { SmokingCheckmark } from "./smoking-checkmark";

interface Props {
  streak: HealthSmokingStreakCarousel[];
}

export const SmokingCarousel: FC<Props> = memo(({ streak }) => {
  return (
    <View>
      <FlatList
        data={streak}
        horizontal={true}
        pagingEnabled={false}
        decelerationRate={0.9}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        contentContainerStyle={styles.flatList}
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
      {item.completed ? (
        <View style={styles.checkmark}>
          <SmokingCheckmark />
        </View>
      ) : (
        <View style={styles.id}>
          <TextTemplate type="b1" textAlign="center" color={Colours.neutral.white}>
            {item.id}
          </TextTemplate>
        </View>
      )}
      <TextTemplate type="b1" textAlign="center" color={Colours.neutral.white}>
        {item.title}
      </TextTemplate>
    </View>
  );
};

const keyExtractor = (item: HealthSmokingStreakCarousel) => String(item.id);
