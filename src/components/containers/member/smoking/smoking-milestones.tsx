import React, { FC, memo } from "react";
import { ListRenderItemInfo, View } from "react-native";
import { Navigation } from "@navigation/main";
import { HealthSmokingMilestoneCarousel } from "@graphql/__generated";
import { Style } from "@styles";
import { FlatList, Image, TextTemplate } from "@atoms";
import { TouchableOpacityWithDelay } from "@molecules";
import { PopupWithHeaderIconModal } from "@modals/popup-with-header-icon";
import { styles } from "./smoking-milestones.styles";

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

  Navigation.showOverlayWithChild(
    <PopupWithHeaderIconModal
      HeaderIcon={(props) => <Image source={image} {...props} />}
      onPressClose={Navigation.dismissOverlayWithChild}
      onPressCta={Navigation.dismissOverlayWithChild}
      ctaLabel={popup.cta}
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
      {popup.label ? (
        <View style={styles.popupLabel}>
          <TextTemplate type="b2b" textAlign="center">
            {popup.label}
          </TextTemplate>
        </View>
      ) : null}
    </PopupWithHeaderIconModal>
  );
};

const renderItem = ({ item }: ListRenderItemInfo<HealthSmokingMilestoneCarousel>) => {
  const milestoneStyle = [styles.milestone, item.completed ? styles.milestoneCompleted : null];

  if (!item.popup) {
    return (
      <View style={milestoneStyle}>
        <Image source={item.image} width={Style.adjust(64)} height={Style.adjust(64)} />
      </View>
    );
  }

  return (
    <TouchableOpacityWithDelay style={milestoneStyle} onPress={() => onCarouselItemPress(item)}>
      <Image source={item.image} width={Style.adjust(64)} height={Style.adjust(64)} />
    </TouchableOpacityWithDelay>
  );
};
