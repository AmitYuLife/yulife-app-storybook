import { NetworkStatus } from "@apollo/client";
import { SEARCH_FLAT_LIST } from "@ids";
import React, { memo, ReactNode, useCallback } from "react";
import { FlatList, ListRenderItemInfo } from "react-native";

export type ISearchItem<T> = T & {
  onPress?: () => void;
};

interface Props<T> {
  data: ISearchItem<T>[];
  networkStatus: NetworkStatus;
  onRefresh: () => Promise<void>;
  emptyElement: React.JSX.Element;
  loading: boolean;
  keyExtractor: (item: T, index: number) => string;
  SearchItem: (props: ListRenderItemInfo<ISearchItem<T>>) => ReactNode;
}

const SearchList = <T,>({
  data = [],
  networkStatus,
  onRefresh,
  loading,
  keyExtractor,
  SearchItem,
  emptyElement,
}: Props<T>) => {
  const isLoading = loading || [NetworkStatus.refetch, NetworkStatus.loading].includes(networkStatus);

  const renderItem = useCallback((info: ListRenderItemInfo<ISearchItem<T>>) => <SearchItem {...info} />, [SearchItem]);

  return (
    <FlatList
      testID={SEARCH_FLAT_LIST}
      data={data}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      refreshing={isLoading}
      onRefresh={onRefresh}
      ListEmptyComponent={emptyElement}
      keyboardShouldPersistTaps="handled"
    />
  );
};

export default memo(SearchList);
