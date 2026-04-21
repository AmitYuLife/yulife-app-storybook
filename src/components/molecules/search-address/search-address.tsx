/* eslint-disable react-compiler/react-compiler -- has other React ESLint rules disabled */
import { NetworkStatus } from "@apollo/client";
import React, { useCallback, useEffect, memo } from "react";
import { View, ViewStyle, SafeAreaView } from "react-native";
import { SearchInput, SearchList, SearchListEmpty, SearchItem, ISearchItem } from "@molecules";
import { GenericHeadingAbsolute, GenericHeadingPad } from "@organisms";
import { useBackHandler } from "@hooks";
import { Colours, StyleSheet } from "@styles";

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
  "use no memo";
  const {
    onClose,
    addressList,
    headingText,
    searchTitle,
    emptyText,
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
    <SafeAreaView style={StyleSheet.absoluteFill}>
      <View style={styles.wrapper}>
        <GenericHeadingPad hideBorder={false} />
        <SearchInput styleProps={searchInputStyles} title={searchTitle} onChangeText={onChangeText} />
        <SearchList
          data={addressList}
          networkStatus={networkStatus}
          onRefresh={onRefresh}
          loading={loading}
          searchItem={SearchItem}
          keyExtractor={keyExtractor}
          emptyElement={<SearchListEmpty emptyText={emptyText} />}
        />
        <GenericHeadingAbsolute heading={headingText} onLeftIconPress={onClose} hideBorder={false} />
      </View>
    </SafeAreaView>
  );
});

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: Colours.neutral.n50,
    ...StyleSheet.absoluteFillObject,
  } as ViewStyle,
});
