import React, { RefObject, useRef, useState } from "react";
import { FlatList, StyleSheet, TextStyle, View, ViewStyle, TouchableOpacity, ViewToken } from "react-native";
import { TextTemplate } from "@atoms";
import { Colours, Style } from "@styles";

interface Tab {
  name: string;
  component: React.ReactNode;
  onPress?: () => void;
  disabled?: boolean;
}

interface Item {
  item: Tab;
}

interface ISwitchTab {
  tabs: Tab[];
  defaultSelected?: number;
  testID?: string;
  paddingHorizontal?: number;
}

const keyExtractor = (item: Tab) => item.name;

const viewabilityConfig = {
  viewAreaCoveragePercentThreshold: 80,
  waitForInteraction: true,
};

const SwitchTab = ({ tabs, defaultSelected = 0, testID, paddingHorizontal = 0 }: ISwitchTab) => {
  const [selectedTab, setSelectedTab] = useState(defaultSelected);
  const ref: RefObject<FlatList> = useRef();

  const renderItem = ({ item }: Item) => (
    <View style={{ width: Style.DEVICE_WIDTH - paddingHorizontal * 2 }}>{item.component}</View>
  );

  const handleSwipe = useRef(({ viewableItems }: { viewableItems: ViewToken[] }) => {
    const visibleItem = viewableItems[0];

    if (visibleItem) {
      setSelectedTab(visibleItem.index);
    }
  });

  const handleTabChange = (index: number) => {
    setSelectedTab(index);
    ref?.current?.scrollToIndex({ index, animated: true });
  };

  return (
    <View style={{ paddingHorizontal }}>
      <View style={styles.wrapper} testID={testID}>
        {tabs.map((tab, index) => {
          const isActive = selectedTab === index;
          return (
            <TouchableOpacity //TODO: Change this to TouchableOpacityWithDelay when doing task https://yulife.atlassian.net/browse/TP-744
              key={index}
              disabled={tab.disabled}
              style={{ paddingLeft: index > 0 ? 24 : 0 }}
              onPress={() => {
                handleTabChange(index);
                if (tab?.onPress) {
                  tab.onPress();
                }
              }}
            >
              <View style={styles.textContainer}>
                <TextTemplate type="b1b" color={isActive ? Colours.primary.p600 : Colours.neutral.n400}>
                  {tab.name}
                </TextTemplate>
                {!isActive ? null : <View style={styles.tabActive} />}
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
      <FlatList
        style={styles.flatList}
        ref={ref}
        pagingEnabled={true}
        renderItem={renderItem}
        decelerationRate="fast"
        keyExtractor={keyExtractor}
        data={tabs}
        showsVerticalScrollIndicator={false}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        onViewableItemsChanged={handleSwipe.current}
        viewabilityConfig={viewabilityConfig}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    borderBottomColor: Colours.neutral.n100,
    borderBottomWidth: 1,
  } as ViewStyle,
  textContainer: {
    paddingBottom: Style.adjust(8),
  } as ViewStyle,
  tabActive: {
    position: "absolute",
    bottom: -1,
    width: "100%",
    borderBottomWidth: 2,
    borderBottomColor: Colours.primary.p600,
  } as ViewStyle,
  flatList: {
    marginTop: Style.adjust(32),
  } as TextStyle,
});

export default SwitchTab;
