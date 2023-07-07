import React, { memo, useState, useCallback, useMemo } from "react";
import { TextInput, View } from "react-native";
import Svg, { Polygon } from "react-native-svg";
import { FlashList, ListRenderItemInfo } from "@shopify/flash-list";

import styles from "./debug.styles";
import { TextTemplate } from "@atoms";
import { TouchableOpacityWithDelay } from "@molecules/index";
import { GenericHeadingAbsolute, GenericHeadingPad } from "@organisms";

export interface IDebugItem {
  id: string;
  title: string;
  onPress: () => void;
}

interface IDebugScreenProps {
  data: IDebugItem[];
  onPressClose: () => void;
}

const ESTIMATED_ITEM_SIZE = 58;

const DebugScreen = memo(({ data, onPressClose }: IDebugScreenProps) => {
  const [searchQuery, setSearchQuery] = useState<string>("");

  const keyExtractor = useCallback((item: IDebugItem) => item.id, []);

  const renderItem = useCallback(({ item }: ListRenderItemInfo<IDebugItem>) => {
    return (
      <TouchableOpacityWithDelay style={styles.itemWrapper} onPress={item.onPress}>
        <TextTemplate type="l1b">{item.title}</TextTemplate>
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
      <View style={styles.wrapper}>
        <FlashList
          data={filteredData}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={
            <TextInput
              autoCorrect={false}
              value={searchQuery}
              autoCapitalize="none"
              style={styles.itemWrapper}
              placeholder="Search items..."
              onChangeText={setSearchQuery}
            />
          }
          estimatedItemSize={ESTIMATED_ITEM_SIZE}
        />
      </View>
      <GenericHeadingAbsolute heading="debug" onRightIconPress={onPressClose} />
    </View>
  );
});

export default DebugScreen;
