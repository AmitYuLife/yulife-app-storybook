import React, { FC, memo } from "react";
import { ListRenderItemInfo, View } from "react-native";
import { FlatList, TextTemplate } from "@atoms";
import { styles } from "./smoking-milestones.styles";
import { Colours } from "@styles";
import { HealthSmokingMilestoneCarousel } from "@graphql/__generated";

interface Props {
  milestones: HealthSmokingMilestoneCarousel[];
}

export const SmokingMilestones: FC<Props> = memo(({ milestones }) => {
  return (
    <FlatList
      data={milestones}
      horizontal={true}
      pagingEnabled={false}
      decelerationRate={0.9}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      renderItem={renderItem}
      contentContainerStyle={styles.flatList}
      ItemSeparatorComponent={Separator}
    />
  );
});

const Separator = memo(
  () => <View style={styles.separator} />,
  () => true
);

const renderItem = ({ item }: ListRenderItemInfo<HealthSmokingMilestoneCarousel>) => {
  const milestoneStyle = [styles.milestone, item.completed ? styles.milestoneCompleted : null];
  const textColour = item.completed ? Colours.primary.p400 : Colours.neutral.n400;

  return (
    <View style={milestoneStyle}>
      <View style={styles.id}>
        <TextTemplate type="b1" textAlign="center" color={textColour}>
          {item.title}
        </TextTemplate>
      </View>
    </View>
  );
};
