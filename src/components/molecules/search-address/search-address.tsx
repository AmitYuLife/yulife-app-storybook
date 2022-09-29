import { NetworkStatus } from "@apollo/client";
import React, { useCallback, useEffect, memo } from "react";
import { View, StyleSheet, ViewStyle } from "react-native";
import { SearchInput, SearchList, SearchListEmpty, SearchItem, ISearchItem } from "@molecules";
import { GenericHeadingAbsolute, GenericHeadingPad } from "@organisms";
import { useBackHandler } from "@hooks";
import { Colours, Style } from "@styles";

export interface ISearchAddress {
  onClose: () => void;
  componentId?: string;
  headingText: string;
  searchTitle: string;
  emptyText: string;
  addressList: ISearchItem<any>[];
  onRefresh: () => Promise<void>;
  onChangeText: (textSearch: string) => void;
  query: string;
  networkStatus: NetworkStatus;
  loading: boolean;
  keyExtractor: (item: ISearchItem<any>, index: number) => string;
  searchInputStyles?: ViewStyle;
}

export default memo((props: ISearchAddress) => {
  const {
    onClose,
    addressList,
    headingText,
    searchTitle,
    emptyText,
    query,
    networkStatus,
    loading,
    onRefresh,
    onChangeText,
    keyExtractor,
    searchInputStyles,
  } = props;

  const backHandler = useCallback(() => {
    onClose();
    return true;
  }, [onClose]);

  useBackHandler(backHandler);

  useEffect(() => {
    // Run query for navigating back cases
    onRefresh();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View style={styles.wrapper}>
      <GenericHeadingPad />
      <SearchInput styleProps={searchInputStyles} title={searchTitle} query={query} onChangeText={onChangeText} />
      <SearchList
        data={addressList}
        wrapperStyles={{ height: Style.DEVICE_HEIGHT }}
        networkStatus={networkStatus}
        onRefresh={onRefresh}
        loading={loading}
        searchItem={SearchItem}
        keyExtractor={keyExtractor}
        emptyElement={<SearchListEmpty emptyText={emptyText} />}
      />
      <GenericHeadingAbsolute heading={headingText} onLeftIconPress={onClose} hideBorder={false} />
    </View>
  );
});

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: Colours.neutral.n50,
    position: "absolute",
    width: "100%",
    top: Style.adjust(9),
  } as ViewStyle,
});
