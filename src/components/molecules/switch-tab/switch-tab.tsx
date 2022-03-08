import React, { createRef, RefObject, useEffect, useRef, useState, useMemo } from "react";
import { FlatList, StyleSheet, TextStyle, View, ViewStyle, TouchableOpacity, Animated, ViewToken } from "react-native";
import { TextTemplate } from "@atoms";
import { Colours, Style } from "@styles";

interface ITab {
  title: string;
  testID: string;
  component: React.ReactNode;
  onPress?: () => void;
  disabled?: boolean;
  enabled: boolean;
  ref?: any;
}

interface ITabProps {
  tab: ITab;
  isActive: boolean;
  onPress: () => void;
}

interface Item {
  item: ITab;
}

interface ISwitchTab {
  tabs: ITab[];
  defaultSelected?: number;
  testID?: string;
  paddingHorizontal?: number;
}

interface IMeasuresData {
  x: number;
  width: number;
}

const keyExtractor = (item: ITab) => item.title;

const viewabilityConfig = {
  viewAreaCoveragePercentThreshold: 80,
  waitForInteraction: true,
};

const SwitchTab = ({ tabs, defaultSelected, testID, paddingHorizontal = 0 }: ISwitchTab) => {
  const [measures, setMeasures] = useState([]);
  const [currentTab, setCurrentTab] = useState(defaultSelected);
  const flatListRef: RefObject<FlatList> = useRef();
  const containerRef = useRef();
  const scrollX = useRef(new Animated.Value(0)).current;
  const width = Style.DEVICE_WIDTH - paddingHorizontal * 2;

  const tabsWithRef = useMemo(
    () =>
      tabs
        .filter((tab) => tab.enabled)
        .map((tab) => ({
          ...tab,
          ref: createRef(),
        })),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  useEffect(() => {
    const measuresData: IMeasuresData[] = [];
    tabsWithRef.forEach((tab: ITab) => {
      tab.ref.current.measureLayout(containerRef.current, (x: number, _: any, w: number) => {
        measuresData.push({
          x,
          width: w,
        });
        if (measuresData.length === tabsWithRef.length) {
          setMeasures(measuresData);
        }
      });
    });
    if (defaultSelected) {
      handleTabChange(defaultSelected);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [containerRef.current]);

  const handleSwipe = useRef(({ viewableItems }: { viewableItems: ViewToken[] }) => {
    const visibleItem = viewableItems[0];

    if (visibleItem) {
      setCurrentTab(visibleItem.index);
    }
  });

  const handleTabChange = (index: number) => {
    setCurrentTab(index);
    flatListRef?.current?.scrollToOffset({ offset: index * width });
  };

  ///Mini components start
  const Tab = React.forwardRef(({ tab, isActive, onPress }: ITabProps, ref: any) => {
    return (
      <TouchableOpacity
        ref={ref}
        disabled={tab.disabled}
        onPress={() => {
          onPress();
          if (tab?.onPress) {
            tab.onPress();
          }
        }}
      >
        <View style={styles.textContainer}>
          <TextTemplate type="b1b" color={isActive ? Colours.primary.p600 : Colours.neutral.n400}>
            {tab.title}
          </TextTemplate>
        </View>
      </TouchableOpacity>
    );
  });

  const Indicator = () => {
    const inputRange = tabsWithRef.map((_, i) => i * width);
    let indicatorWidth = null;
    let translateX = null;

    if (inputRange.length > 1) {
      indicatorWidth = scrollX.interpolate({
        inputRange,
        outputRange: measures.map((measure) => measure.width),
      });
      translateX = scrollX.interpolate({
        inputRange,
        outputRange: measures.map((measure) => measure.x),
      });
    }

    return (
      <Animated.View
        style={[
          styles.tabActive,
          { width: indicatorWidth || measures[0].width, ...(!indicatorWidth ? null : { transform: [{ translateX }] }) },
        ]}
      />
    );
  };

  const renderItem = ({ item }: Item) => (
    <View style={{ width: Style.DEVICE_WIDTH - paddingHorizontal * 2 }}>{item.component}</View>
  );
  ///End

  return (
    <View style={{ paddingHorizontal }}>
      <View style={styles.wrapper} testID={testID} ref={containerRef}>
        {tabsWithRef.map((tab, index) => (
          <View key={index} style={{ paddingLeft: index > 0 ? 24 : 0 }} testID={tab.testID}>
            <Tab tab={tab} isActive={currentTab === index} ref={tab.ref} onPress={() => handleTabChange(index)} />
          </View>
        ))}
        {measures.length > 0 && <Indicator />}
      </View>
      <FlatList
        style={styles.flatList}
        ref={flatListRef}
        viewabilityConfig={viewabilityConfig}
        pagingEnabled={true}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        data={tabsWithRef}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        onViewableItemsChanged={handleSwipe.current}
        onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], { useNativeDriver: false })}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    borderBottomColor: Colours.neutral.n100,
    borderBottomWidth: 1,
  } as ViewStyle,
  textContainer: {
    paddingBottom: Style.adjust(8),
  } as ViewStyle,
  tabActive: {
    position: "absolute",
    bottom: -1,
    borderBottomWidth: 2,
    borderBottomColor: Colours.primary.p600,
  } as ViewStyle,
  flatList: {
    marginTop: Style.adjust(32),
  } as TextStyle,
});

export default SwitchTab;
