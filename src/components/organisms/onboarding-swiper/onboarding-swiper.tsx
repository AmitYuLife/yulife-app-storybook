import React from "react";
import { FlatList, View, ViewToken, ListRenderItem, TouchableOpacity } from "react-native";
import { Text, PageIndicator } from "@atoms";
import styles from "./onboarding-swiper.styles";
import GenericHeadingAbsolute, { GenericHeadingPad } from "@atoms/generic-heading/generic-heading-absolute";
import { TouchableOpacityWithDelay } from "@components/molecules";

export interface OnboardingSwiperData {
  id: string;
  buttonLabel?: string;
  title?: string;
  subtitle?: string;
}

interface Props {
  data: OnboardingSwiperData[];
  onClose: () => void;
  renderItem: ListRenderItem<OnboardingSwiperData>;
}

interface State {
  buttonLabel: string;
  activePageIndex: number;
}

export class OnboardingSwiper extends React.PureComponent<Props, State> {
  private swiper: FlatList;
  private viewabilityConfig = {
    viewAreaCoveragePercentThreshold: 80,
    waitForInteraction: true,
  };
  public state = {
    buttonLabel: "Next",
    activePageIndex: 0,
  };

  render() {
    const { activePageIndex, buttonLabel } = this.state;
    const { data, renderItem, onClose } = this.props;

    const isFirstPage = activePageIndex === 0;
    const isLastPage = activePageIndex + 1 === data.length;

    return (
      <View style={styles.wrapper}>
        <GenericHeadingPad />
        <FlatList
          pagingEnabled={true}
          renderItem={renderItem}
          decelerationRate="fast"
          keyExtractor={this.keyExtractor}
          data={data}
          ref={this.setFlatListRef}
          showsVerticalScrollIndicator={false}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          onViewableItemsChanged={this.handleSwipe}
          viewabilityConfig={this.viewabilityConfig}
        />
        <View style={styles.navigationViewPad} />
        <View style={styles.navigationViewWrapper}>
          <View style={styles.pageIndicatorWrapper}>
            <PageIndicator activePage={activePageIndex} pageCount={3} />
          </View>
          {isFirstPage ? (
            <View />
          ) : (
            <TouchableOpacityWithDelay delay={200} onPress={this.scrollBack}>
              <Text style={styles.backButton}>Back</Text>
            </TouchableOpacityWithDelay>
          )}
          {isLastPage ? (
            <TouchableOpacity
              delayPressIn={0}
              onPress={onClose}
              style={[styles.actionButton, styles.lastPageActionButton]}
            >
              <Text bold={true} style={[styles.actionButtonText, styles.lastPageActionButtonText]}>
                {buttonLabel}
              </Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacityWithDelay delay={200} style={styles.actionButton} onPress={this.scrollToNext}>
              <Text bold={true} style={styles.actionButtonText}>
                {buttonLabel}
              </Text>
            </TouchableOpacityWithDelay>
          )}
        </View>
        <GenericHeadingAbsolute logo="yulife" />
      </View>
    );
  }

  setFlatListRef = (ref: FlatList) => {
    this.swiper = ref;
  };

  keyExtractor = (item: OnboardingSwiperData) => item?.id;

  scrollToNext = () => {
    const { activePageIndex } = this.state;

    if (activePageIndex + 1 < this.props.data.length) {
      this.swiper?.scrollToIndex({ index: activePageIndex + 1, animated: true });
      this.setState({
        activePageIndex: activePageIndex + 1,
        buttonLabel: this.props.data[activePageIndex + 1]?.buttonLabel,
      });
    }
  };

  scrollBack = () => {
    const { activePageIndex } = this.state;

    const newIndex = activePageIndex - 1;
    if (newIndex >= 0) {
      this.swiper?.scrollToIndex({ index: newIndex, animated: true });
      this.setState({
        activePageIndex: newIndex,
        buttonLabel: this.props.data[newIndex]?.buttonLabel,
      });
    }
  };

  handleSwipe = ({ viewableItems }: { viewableItems: ViewToken[] }) => {
    const visibleItem = viewableItems[0];

    if (visibleItem) {
      this.setState({
        activePageIndex: visibleItem.index,
        buttonLabel: this.props.data[visibleItem.index]?.buttonLabel || "Next",
      });
    }
  };
}
