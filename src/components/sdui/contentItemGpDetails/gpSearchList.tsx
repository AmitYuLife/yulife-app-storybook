import React, { memo, useCallback } from "react";
import { ListRenderItem, KeyboardAvoidingView, Platform, View } from "react-native";
import { SearchListEmpty } from "@atoms";
import { ISearchItem } from "@atoms/search/search-item";
import { Colours } from "@styles";
import { StyleSheet, ViewStyle } from "react-native";
import { NetworkStatus } from "apollo-boost";

interface Props {
  data: ISearchItem<any>[];
  networkStatus: NetworkStatus;
  emptyText?: string;
  emptyElement?: JSX.Element;
  loading: boolean;
  searchItem: ListRenderItem<ISearchItem<any>>;
}

export const GpSearchList = memo(
  ({ data = [], networkStatus, emptyText, loading, searchItem, emptyElement }: Props) => {
    const isLoading = loading || [NetworkStatus.refetch, NetworkStatus.loading].includes(networkStatus);

    const emptyComponent = useCallback(() => {
      if (!isLoading && !data.length) {
        return emptyElement ? emptyElement : <SearchListEmpty emptyText={emptyText} />;
      }

      return null;
    }, [isLoading, emptyText, emptyElement, data.length]);

    return (
      <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : null} style={styles.searchListWrapper}>
        {data.map((x) => (
          <View key={x.name}>{searchItem({ item: x, index: x.name, separators: null })}</View>
        ))}
        {emptyComponent()}
      </KeyboardAvoidingView>
    );
  }
);

const styles = StyleSheet.create({
  searchListWrapper: {
    flex: 1,
    backgroundColor: Colours.neutral.n50,
  } as ViewStyle,
});
