import { FC, memo } from "react";
import { ListRenderItemInfo, View } from "react-native";
import { FlatList, Image, TextTemplate } from "@atoms";
import { styles } from "./smoking-milestones.styles";
import { HealthSmokingMilestoneCarousel } from "@graphql/__generated";
import { Style } from "@styles";
import { Navigation } from "@navigation/main";
import { TouchableOpacityWithDelay } from "@molecules";
import { ScrollableContentOverlay } from "@modals";
import { SMOKING_MILESTONE_POPUP, SMOKING_MILESTONE_TAPPABLE, SMOKING_MILESTONE_UNTAPPABLE } from "@ids";
import Box from "@atoms/box/box";
import { TipCard } from "@organisms";

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

const Separator = () => <View style={styles.separator} />;

const onCarouselItemPress = (item: HealthSmokingMilestoneCarousel) => {
  if (!item.popup) {
    return;
  }

  const { image, popup } = item;
  console.log(item);

  Navigation.showOverlayWithChild(
    <ScrollableContentOverlay
      HeaderIcon={<Image source={image} width={Style.adjust(140)} height={Style.adjust(140)} />}
      onPressClose={Navigation.dismissOverlayWithChild}
      onPressCta={Navigation.dismissOverlayWithChild}
      ctaLabel={popup.cta}
      noMinHeight={true}
      testId={SMOKING_MILESTONE_POPUP(item.id)}
    >
      <TextTemplate type="h1" textAlign="center">
        {popup.title}
      </TextTemplate>
      {popup.description ? (
        <View style={styles.popupDescription}>
          <TextTemplate type="b2" textAlign="center">
            {popup.description}
          </TextTemplate>
        </View>
      ) : null}
      {popup.tips?.length ? (
        <Box mt={32} gap={15} style={styles.tipsContainer}>
          {popup.tips.map((tip) => (
            <TipCard
              id={tip.id}
              key={tip.id}
              title={tip.title}
              description={tip.description}
              icon={tip.icon}
              cardStyle={styles.tipCardStyles}
            />
          ))}
        </Box>
      ) : null}
      {popup.label ? (
        <View style={styles.popupLabel}>
          <TextTemplate type="b2b" textAlign="center">
            {popup.label}
          </TextTemplate>
        </View>
      ) : null}
    </ScrollableContentOverlay>
  );
};

const renderItem = ({ item }: ListRenderItemInfo<HealthSmokingMilestoneCarousel>) => {
  const milestoneStyle = [styles.milestone, item.completed ? styles.milestoneCompleted : null];

  if (!item.popup) {
    return (
      <View style={milestoneStyle} testID={SMOKING_MILESTONE_UNTAPPABLE(item.id)}>
        <Image source={item.image} width={Style.adjust(64)} height={Style.adjust(64)} />
      </View>
    );
  }

  return (
    <TouchableOpacityWithDelay
      style={milestoneStyle}
      testID={SMOKING_MILESTONE_TAPPABLE(item.id)}
      onPress={() => onCarouselItemPress(item)}
    >
      <Image source={item.image} width={Style.adjust(64)} height={Style.adjust(64)} />
    </TouchableOpacityWithDelay>
  );
};
