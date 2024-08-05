import React from "react";
import { FlatList, View, ViewToken, ListRenderItem } from "react-native";
import { Text, PageIndicator } from "@atoms";
import styles from "./onboarding-swiper.styles";
import { TouchableOpacityWithDelay } from "@components/molecules";
import Logger from "@services/logging/logger";
import { ROUTES } from "@navigation/constants";
import { TopBarAbsolute } from "@organisms/top-bar/top-bar-absolute";
import { t } from "@locale";
import { LETS_GO_BUTTON_DUEL_ONBOARDING, NEXT_BUTTON_DUEL_ONBOARDING } from "@ids";

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
  type: "yuscreen" | "duels";
}

interface State {
  buttonLabel: string;
  activePageIndex: number;
}

const getScreenViewName = (type: Props["type"], page = 0) => {
  switch (type) {
    case "yuscreen":
      return `${ROUTES.yuScreen}.Onboarding.${page}`;
    case "duels":
      return `${ROUTES.duelsHub}.Onboarding.${page}`;
    default:
      return "";
  }
};

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

  componentDidMount() {
    const name = getScreenViewName(this.props.type, 0);
    if (name) {
      Logger.logMixpanelEvent("screen_view", { name });
    }
  }

  render() {
    const { activePageIndex, buttonLabel } = this.state;
    const { data, renderItem, onClose } = this.props;

    const isFirstPage = activePageIndex === 0;
    const isLastPage = activePageIndex + 1 === data.length;

    return (
      <View style={styles.wrapper}>
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
            <TouchableOpacityWithDelay delay={300} onPress={this.scrollBack}>
              <Text style={styles.backButton}>{t("labels.cta.back")}</Text>
            </TouchableOpacityWithDelay>
          )}
          {isLastPage ? (
            <TouchableOpacityWithDelay
              delayPressIn={0}
              onPress={onClose}
              style={[styles.actionButton, styles.lastPageActionButton]}
            >
              <Text
                bold={true}
                style={[styles.actionButtonText, styles.lastPageActionButtonText]}
                testID={LETS_GO_BUTTON_DUEL_ONBOARDING}
              >
                {buttonLabel}
              </Text>
            </TouchableOpacityWithDelay>
          ) : (
            <TouchableOpacityWithDelay delay={300} style={styles.actionButton} onPress={this.scrollToNext}>
              <Text bold={true} style={styles.actionButtonText} testID={NEXT_BUTTON_DUEL_ONBOARDING}>
                {buttonLabel}
              </Text>
            </TouchableOpacityWithDelay>
          )}
        </View>
        <TopBarAbsolute rightIcon={null} />
      </View>
    );
  }

  setFlatListRef = (ref: FlatList) => {
    this.swiper = ref;
  };

  keyExtractor = (item: OnboardingSwiperData) => item?.id;

  scrollToNext = () => {
    const { activePageIndex } = this.state;
    const { type, data } = this.props;

    const newIndex = activePageIndex + 1;
    if (newIndex < data.length) {
      const name = getScreenViewName(type, newIndex);
      this.swiper?.scrollToIndex({ index: newIndex, animated: true });
      this.setState({
        activePageIndex: newIndex,
        buttonLabel: this.props.data[newIndex]?.buttonLabel,
      });
      Logger.logMixpanelEvent("screen_view", { name });
    }
  };

  scrollBack = () => {
    const { activePageIndex } = this.state;

    const newIndex = activePageIndex - 1;
    const name = getScreenViewName(this.props.type, newIndex);
    if (newIndex >= 0) {
      this.swiper?.scrollToIndex({ index: newIndex, animated: true });
      this.setState({
        activePageIndex: newIndex,
        buttonLabel: this.props.data[newIndex]?.buttonLabel,
      });
      Logger.logMixpanelEvent("screen_view", { name });
    }
  };

  handleSwipe = ({ viewableItems }: { viewableItems: ViewToken[] }) => {
    const { data, type } = this.props;
    const visibleItem = viewableItems[0];

    if (visibleItem) {
      this.setState({
        activePageIndex: visibleItem.index,
        buttonLabel: data[visibleItem.index]?.buttonLabel || "Next",
      });

      const name = getScreenViewName(type, visibleItem.index);
      Logger.logMixpanelEvent("screen_view", { name });
    }
  };
}
