import React, { useEffect, useState } from "react";
import { View, FlatList } from "react-native";
import SearchListEmpty from "./search-list-empty";
import { Colours } from "@styles";
import { StyleSheet, ViewStyle } from "react-native";
import SearchItem from "./search-item";
import { SearchedOpponent } from "../duels-search.container";

interface Props {
  data: SearchedOpponent[];
  networkStatus: number;
  onRefresh: () => Promise<void>;
  emptyText: string;
  loading: boolean;
}

function keyExtractor(item: SearchedOpponent) {
  return item.customerId;
}

function SearchList({ data = [], networkStatus, onRefresh, emptyText, loading }: Props) {
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    if (loading && !hasLoaded) {
      setHasLoaded(true);
    }
  }, [loading, hasLoaded]);

  return (
    <View style={styles.peopleZone}>
      <FlatList
        data={data}
        renderItem={SearchItem}
        keyExtractor={keyExtractor}
        refreshing={!hasLoaded || networkStatus === 4}
        onRefresh={onRefresh}
        ListEmptyComponent={hasLoaded ? <SearchListEmpty emptyText={emptyText} /> : null}
      />
    </View>
  );
}

export default SearchList;

const styles = StyleSheet.create({
  peopleZone: {
    flex: 1,
    backgroundColor: Colours.neutral.n50,
  } as ViewStyle,
});
