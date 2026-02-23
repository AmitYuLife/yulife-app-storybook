import React, { memo, useState, useCallback, useMemo } from "react";
import { TextInput, View } from "react-native";
import Svg, { Path, Polygon } from "react-native-svg";
import { FlashList, ListRenderItemInfo } from "@shopify/flash-list";

import styles from "./debug.styles";
import { TextTemplate } from "@atoms";
import { TouchableOpacityWithDelay } from "@molecules/index";
import { GenericHeadingAbsolute, GenericHeadingPad } from "@organisms";
import { DEBUG_SCREEN, DEBUG_SEARCH_INPUT } from "@ids";

export interface IDebugItem {
  id: string;
  title: string;
  isFavourite?: boolean;
  onPress: () => void;
  onFavouriteToggle?: () => void;
  testID?: string;
}

interface IDebugScreenProps {
  data: IDebugItem[];
  onPressClose: () => void;
}

const DebugScreen = memo(({ data, onPressClose }: IDebugScreenProps) => {
  const [searchQuery, setSearchQuery] = useState<string>("");

  const keyExtractor = useCallback((item: IDebugItem) => item.id, []);

  const renderItem = useCallback(({ item }: ListRenderItemInfo<IDebugItem>) => {
    return (
      <TouchableOpacityWithDelay style={styles.itemWrapper} onPress={item.onPress}>
        <View style={styles.row} testID={item.testID}>
          <View style={styles.starWrapper}>
            <Svg
              onPress={item?.onFavouriteToggle}
              viewBox="0 0 24 24"
              width="18"
              height="18"
              fill={item.isFavourite ? "gold" : "gray"}
              stroke="black"
            >
              <Path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" />
            </Svg>
          </View>
          <View style={styles.textWrapper}>
            <TextTemplate type="l1b">{item.title}</TextTemplate>
          </View>
        </View>
        <Svg viewBox="0 0 23 41" height={String(41 * 0.35)} width={String(23 * 0.35)} style={styles.arrow}>
          <Polygon fill="#333" points="20.5,40.6 0.4,20.5 20.5,0.4 22.6,2.6 4.7,20.5 22.6,38.4 " />
        </Svg>
      </TouchableOpacityWithDelay>
    );
  }, []);

  const filteredData = useMemo(
    () => data.filter((item) => item.title.toLocaleLowerCase().includes(searchQuery.toLowerCase())),
    [data, searchQuery]
  );

  return (
    <View style={styles.wrapper}>
      <GenericHeadingPad />
      <View style={styles.wrapper} testID={DEBUG_SCREEN}>
        <TextInput
          autoCorrect={false}
          value={searchQuery}
          autoCapitalize="none"
          style={styles.searchInput}
          placeholder="Search items..."
          onChangeText={setSearchQuery}
          testID={DEBUG_SEARCH_INPUT}
        />
        <FlashList
          data={filteredData}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          showsVerticalScrollIndicator={false}
        />
      </View>
      <GenericHeadingAbsolute heading="debug" onRightIconPress={onPressClose} />
    </View>
  );
});

export default DebugScreen;
