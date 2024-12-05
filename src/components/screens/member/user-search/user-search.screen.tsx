import { SearchInputWithIcon, FindAFriend, UserSearchHeading } from "@components/molecules";
import { Box, Pad, TextTemplate } from "@atoms";
import { GenericHeadingAbsolute, GenericHeadingPad } from "@organisms";
import { Colours, Style } from "@styles";
import { memo, ReactNode, useMemo } from "react";
import { KeyboardAvoidingView, Platform, StyleSheet } from "react-native";
import { FlashList } from "@shopify/flash-list";
import { t } from "@locale";
import { SEARCH_CLOSE, SEARCH_RESULTS } from "@ids";
import { useReferral } from "@hooks";
import { useUserSearchItemRenderer } from "./useUserSearchItemRenderer";
import { UserSearchListItemProps } from "./user-search.types";
import UserSearchListItem from "./user-search-list-item";
import { UserSearchItem } from "@redux/_core/types";

interface IProps {
  heading?: string;
  subheading?: string;
  data: UserSearchItem[];
  loading: boolean;
  onClose?: () => void;
  onItemPress: (searchItem: UserSearchItem) => void;
  referralAmount: number;
  onChangeText: (text: string) => void;
  isSearchTextEmpty: boolean;
  hideRecent?: boolean;
  ListItem?: (props: UserSearchListItemProps) => ReactNode;
  userSelectionComponent?: ReactNode;
  displayTopBar?: boolean;
  bottomPad?: number;
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
  isSearchTextEmpty,
  hideRecent,
  ListItem = UserSearchListItem,
  userSelectionComponent,
  displayTopBar = true,
  bottomPad,
}: IProps) => {
  const { referralComponent, goToReferralInformation } = useReferral(referralAmount);
  const flashListTestId = useMemo(() => SEARCH_RESULTS(data.map((i) => i.name).sort()), [data]);
  const renderItem = useUserSearchItemRenderer({ items: data, onItemPress, referralComponent, ListItem, bottomPad });

  return (
    <KeyboardAvoidingView behavior={KEYBOARD_BEHAVIOR} style={styles.wrapper}>
      <GenericHeadingPad />
      <SearchInputWithIcon
        placeholder={t("user_referral.search_placeholder")}
        onChangeText={onChangeText}
        wrapperStyles={styles.searchIcon}
        textInputStyle={styles.textInput}
      />
      <Pad height={Style.adjust(isSearchTextEmpty ? 16 : 24)} />
      {!isSearchTextEmpty || hideRecent ? null : (
        <>
          <TextTemplate type="b2b">{t("user_referral.recent")}</TextTemplate>
          <Pad height={Style.adjust(16)} />
        </>
      )}
      {userSelectionComponent}

      {(loading || !data?.length) && !isSearchTextEmpty ? (
        <FindAFriend loading={loading} onPress={goToReferralInformation} records={data} />
      ) : (
        <FlashList
          data={data}
          keyExtractor={keyExtractor}
          showsVerticalScrollIndicator={false}
          estimatedItemSize={Style.adjust(45)}
          renderItem={renderItem}
          keyboardShouldPersistTaps="handled"
          testID={flashListTestId}
          ListEmptyComponent={isSearchTextEmpty ? <Box mb={32}>{referralComponent}</Box> : null}
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
