import React from "react";
import { Image, SafeAreaView, FlatList, View, TouchableOpacity, ViewToken, ListRenderItemInfo } from "react-native";
import { Text, PageIndicator, GenericHeading } from "@atoms";
import { Style } from "@styles/index";
import styles from "./intro-yuscreen.styles";
import { data, images, IYuScreenIntroDataItem } from "./intro-yuscreen.helper";

interface IProps {
  setYuscreenIntroShown: () => void;
}

interface IState {
  buttonLabel: string;
  activePageIndex: number;
}
export class YuScreenIntro extends React.PureComponent<IProps, IState> {
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
    const isLastPage = activePageIndex + 1 === data.length;

    return (
      <SafeAreaView>
        <View>
          <FlatList
            pagingEnabled={true}
            renderItem={this.renderItem}
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

          <View style={styles.navigationViewWrapper}>
            <View style={styles.pageIndicatorWrapper}>
              <PageIndicator activePage={activePageIndex} pageCount={3} />
            </View>
            {isLastPage ? (
              <View />
            ) : (
              <TouchableOpacity onPress={this.props.setYuscreenIntroShown}>
                <Text style={styles.skipButton}>Skip</Text>
              </TouchableOpacity>
            )}
            <TouchableOpacity onPress={this.scrollToNext}>
              <Text style={styles.actionButton}>{buttonLabel}</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.absoluteTop}>
          <GenericHeading logo="yulife" hideBorder={true} />
        </View>
      </SafeAreaView>
    );
  }

  setFlatListRef = (ref: FlatList) => {
    this.swiper = ref;
  };

  keyExtractor = (item: IYuScreenIntroDataItem) => item.color;

  scrollToNext = () => {
    const { activePageIndex } = this.state;

    if (activePageIndex + 1 < data.length) {
      this.swiper?.scrollToIndex({ index: activePageIndex + 1, animated: true });
      this.setState({ activePageIndex: activePageIndex + 1, buttonLabel: data[activePageIndex + 1].buttonLabel });
      return;
    }

    this.props.setYuscreenIntroShown();
  };

  handleSwipe = ({ viewableItems }: { viewableItems: ViewToken[] }) => {
    const visibleItem = viewableItems[0];

    if (visibleItem) {
      this.setState({
        activePageIndex: visibleItem.index,
        buttonLabel: data[visibleItem.index]?.buttonLabel || "Next",
      });
    }
  };

  renderItem = ({ item, index }: ListRenderItemInfo<IYuScreenIntroDataItem>) => {
    return (
      <View style={{ height: Style.DEVICE_HEIGHT, width: Style.DEVICE_WIDTH }}>
        <View style={styles.imageWrapper}>
          <Image style={styles.image} source={images[index]} />
        </View>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.subTitle}>{item.subtitle}</Text>
      </View>
    );
  };
}
