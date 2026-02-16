import { SearchInputWithIcon, FindAFriend, UserSearchHeading } from "@components/molecules";
import { Box } from "@atoms";
import { GenericHeadingAbsolute, GenericHeadingPad } from "@organisms";
import { Colours, Style, StyleSheet } from "@styles";
import { memo, ReactNode, useMemo } from "react";
import { KeyboardAvoidingView, Platform, ScrollView } from "react-native";
import { FlashList } from "@shopify/flash-list";
import { t } from "@locale";
import { SEARCH_CLOSE, SEARCH_RESULTS } from "@ids";
import { useReferral } from "@hooks";
import { useUserSearchItemRenderer } from "./useUserSearchItemRenderer";
import { UserSearchListItemProps } from "./user-search.types";
import UserSearchListItem from "./user-search-list-item";
import { UserSearchItem } from "@redux/_core/types";
import ListItemLoadingSkeleton from "@organisms/list-item-loading-skeleton/list-item-loading-skeleton";

interface IProps {
  heading?: string;
  subheading?: string;
  data: UserSearchItem[];
  loading: boolean;
  onClose?: () => void;
  onItemPress: (searchItem: UserSearchItem) => void;
  referralAmount: number;
  onChangeText: (text: string) => void;
  isFilteredSearch: boolean;
  hideRecent?: boolean;
  ListItem?: (props: UserSearchListItemProps) => ReactNode;
  userSelectionComponent?: ReactNode;
  displayTopBar?: boolean;
  bottomPad?: number;
  showReferral: boolean;
}

const KEYBOARD_BEHAVIOR = Platform.select({ ios: "padding", android: null } as const);

const UserSearchScreen = ({
  data,
  loading,
  heading,
  subheading,
  onClose,
  onItemPress,
  referralAmount,
  onChangeText,
  isFilteredSearch,
  ListItem = UserSearchListItem,
  userSelectionComponent,
  displayTopBar = true,
  bottomPad,
  showReferral,
}: IProps) => {
  const { referralComponent, goToReferralInformation } = useReferral(showReferral, referralAmount);
  const flashListTestId = useMemo(() => SEARCH_RESULTS(data.map((i) => i.name).sort()), [data]);
  const renderItem = useUserSearchItemRenderer({
    items: data,
    onItemPress,
    referralComponent,
    ListItem,
    bottomPad,
  });

  const { showSkeletonLoading, showMagnifyingGlass, showList, listEmptyComponent } = useMemo(
    () => ({
      showSkeletonLoading: loading && !isFilteredSearch,
      showMagnifyingGlass: loading && isFilteredSearch,
      showList: !loading,
      listEmptyComponent: !data?.length ? <Box mb={32}>{referralComponent}</Box> : null,
    }),
    [data, loading, isFilteredSearch]
  );

  return (
    <KeyboardAvoidingView behavior={KEYBOARD_BEHAVIOR} style={styles.wrapper}>
      <GenericHeadingPad />
      <SearchInputWithIcon
        placeholder={t("user_referral.search_placeholder")}
        onChangeText={onChangeText}
        wrapperStyles={styles.searchIcon}
        textInputStyle={styles.textInput}
      />
      <Box h={16} />
      {userSelectionComponent}
      {!showSkeletonLoading ? null : <ListItemLoadingSkeleton items={12} />}
      {!showMagnifyingGlass ? null : (
        <ScrollView showsVerticalScrollIndicator={false}>
          <FindAFriend loading={loading} onPress={goToReferralInformation} records={data} showReferral={showReferral} />
        </ScrollView>
      )}
      {!showList ? null : (
        <FlashList
          data={data}
          keyExtractor={keyExtractor}
          showsVerticalScrollIndicator={false}
          renderItem={renderItem}
          keyboardShouldPersistTaps="handled"
          testID={flashListTestId}
          ListEmptyComponent={listEmptyComponent}
        />
      )}
      {displayTopBar ? (
        <GenericHeadingAbsolute
          onRightIconPress={onClose}
          heading={<UserSearchHeading heading={heading} subheading={subheading} />}
          rightIconTestID={SEARCH_CLOSE}
        />
      ) : null}
    </KeyboardAvoidingView>
  );
};

const keyExtractor = (item: UserSearchItem) => item.id;

export default memo(UserSearchScreen);

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    paddingHorizontal: Style.adjust(16),
  },
  heading: {
    alignItems: "center",
  },
  searchIcon: {
    marginTop: Style.adjust(16),
  },
  textInput: {
    color: Colours.neutral.n850,
  },
});
