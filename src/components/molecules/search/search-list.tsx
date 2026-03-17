import React, { memo, useCallback } from "react";
import { FlatList, ListRenderItem, KeyboardAvoidingView, Platform } from "react-native";
import SearchListEmpty from "./search-list-empty";
import { Colours, StyleSheet } from "@styles";
import { ViewStyle } from "react-native";
import { NetworkStatus } from "@apollo/client";
import { ISearchItem } from "./search-item";
import { SEARCH_FLAT_LIST } from "@ids";

interface Props {
  data: ISearchItem<any>[];
  networkStatus: NetworkStatus;
  onRefresh: () => Promise<void>;
  emptyText?: string;
  emptyElement?: React.ReactElement;
  loading: boolean;
  keyExtractor: (item: any, index: number) => string;
  searchItem: ListRenderItem<ISearchItem<any>>;
  wrapperStyles?: ViewStyle;
}

const SearchList = ({
  data = [],
  networkStatus,
  onRefresh,
  emptyText,
  loading,
  keyExtractor,
  searchItem,
  emptyElement,
  wrapperStyles,
}: Props) => {
  const isLoading = loading || [NetworkStatus.refetch, NetworkStatus.loading].includes(networkStatus);

  const emptyComponent = useCallback(() => {
    if (!isLoading && !data.length) {
      return emptyElement ? emptyElement : <SearchListEmpty emptyText={emptyText} />;
    }

    return null;
  }, [isLoading, emptyText, emptyElement, data.length]);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : null}
      style={StyleSheet.flatten([styles.searchListWrapper, wrapperStyles])}
    >
      <FlatList
        testID={SEARCH_FLAT_LIST}
        data={data}
        renderItem={searchItem}
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
