import { NetworkStatus } from "@apollo/client";
import { SEARCH_FLAT_LIST } from "@ids";
import { memo } from "react";
import { FlatList, ListRenderItem } from "react-native";

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
  searchItem: ListRenderItem<ISearchItem<T>>;
}

const SearchList = <T,>({
  data = [],
  networkStatus,
  onRefresh,
  loading,
  keyExtractor,
  searchItem,
  emptyElement,
}: Props<T>) => {
  const isLoading = loading || [NetworkStatus.refetch, NetworkStatus.loading].includes(networkStatus);

  return (
    <FlatList
      testID={SEARCH_FLAT_LIST}
      data={data}
      renderItem={searchItem}
      keyExtractor={keyExtractor}
      refreshing={isLoading}
      onRefresh={onRefresh}
      ListEmptyComponent={emptyElement}
      keyboardShouldPersistTaps="handled"
    />
  );
};

export default memo(SearchList);
