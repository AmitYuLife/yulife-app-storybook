import React, { memo, useCallback } from "react";
import { KeyboardAvoidingView, Platform, StyleSheet, View, ViewStyle } from "react-native";
import { SearchListEmpty, SearchItem, ISearchItem } from "@molecules";
import { NetworkStatus } from "@apollo/client";
import { Colours } from "@styles";
import { MedicalPractices_getMedicalPractices as MedicalPractices } from "@graphql/_core/schema";

interface Props {
  practices: ISearchItem<MedicalPractices>[];
  networkStatus: NetworkStatus;
  emptyText?: string;
  emptyElement?: JSX.Element;
  loading: boolean;
}

export const GpSearchList = memo(({ practices = [], networkStatus, emptyText, loading, emptyElement }: Props) => {
  const isLoading = loading || [NetworkStatus.refetch, NetworkStatus.loading].includes(networkStatus);

  const emptyComponent = useCallback(() => {
    if (!isLoading && !practices.length) {
      return emptyElement ? emptyElement : <SearchListEmpty emptyText={emptyText} />;
    }

    return null;
  }, [isLoading, emptyText, emptyElement, practices.length]);

  return (
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : null} style={styles.searchListWrapper}>
      {practices.map((practice) => (
        <View key={practice.organisationCode}>
          {SearchItem({ item: practice, index: practice.organisationCode, separators: null })}
        </View>
      ))}
      {emptyComponent()}
    </KeyboardAvoidingView>
  );
});

const styles = StyleSheet.create({
  searchListWrapper: {
    flex: 1,
    backgroundColor: Colours.neutral.n50,
  } as ViewStyle,
});
