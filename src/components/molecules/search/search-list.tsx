import React, { memo, useCallback, type ReactNode } from "react";
import { FlatList, ListRenderItemInfo, KeyboardAvoidingView, Platform } from "react-native";
import SearchListEmpty from "./search-list-empty";
import { Colours, StyleSheet } from "@styles";
import { ViewStyle } from "react-native";
import { NetworkStatus } from "@apollo/client";
import { ISearchItem } from "./search-item";
import { SEARCH_FLAT_LIST } from "@ids";

interface Props<T> {
  data: ISearchItem<T>[];
  networkStatus: NetworkStatus;
  onRefresh: () => Promise<void>;
  emptyText?: string;
  emptyElement?: React.ReactElement;
  loading: boolean;
  keyExtractor: (item: T, index: number) => string;
  SearchItem: (props: ListRenderItemInfo<ISearchItem<T>>) => ReactNode;
  wrapperStyles?: ViewStyle;
}

const SearchList = <T,>({
  data = [],
  networkStatus,
  onRefresh,
  emptyText,
  loading,
  keyExtractor,
  SearchItem,
  emptyElement,
  wrapperStyles,
}: Props<T>) => {
  const isLoading = loading || [NetworkStatus.refetch, NetworkStatus.loading].includes(networkStatus);

  const emptyComponent = useCallback(() => {
    if (!isLoading && !data.length) {
      return emptyElement ? emptyElement : <SearchListEmpty emptyText={emptyText} />;
    }

    return null;
  }, [isLoading, emptyText, emptyElement, data.length]);

  const renderItem = useCallback((info: ListRenderItemInfo<ISearchItem<T>>) => <SearchItem {...info} />, [SearchItem]);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : null}
      style={StyleSheet.flatten([styles.searchListWrapper, wrapperStyles])}
    >
      <FlatList
        testID={SEARCH_FLAT_LIST}
        data={data}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        refreshing={isLoading}
        onRefresh={onRefresh}
        ListEmptyComponent={emptyComponent()}
        keyboardShouldPersistTaps="handled"
      />
    </KeyboardAvoidingView>
  );
};

export default memo(SearchList);

const styles = StyleSheet.create({
  searchListWrapper: {
    flex: 1,
    backgroundColor: Colours.neutral.n50,
  } as ViewStyle,
});
