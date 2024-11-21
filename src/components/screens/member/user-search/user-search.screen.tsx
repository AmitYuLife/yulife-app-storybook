import { SearchInputWithIcon, FindAFriend } from "@components/molecules";
import { Box, Pad, TextTemplate } from "@atoms";
import { GenericHeadingAbsolute, GenericHeadingPad } from "@organisms";
import { Colours, Style } from "@styles";
import { memo, useMemo } from "react";
import { KeyboardAvoidingView, Platform, StyleSheet } from "react-native";
import { FlashList } from "@shopify/flash-list";
import { t } from "@locale";
import { SEARCH_CLOSE, SEARCH_RESULTS } from "@ids";
import { UserSearchItem } from "@redux/user/user.types";
import { Heading } from "./heading";
import { useRenderer } from "./renderer";
import { useReferral } from "@hooks";

interface IProps {
  heading: string;
  subheading: string;
  data: UserSearchItem[];
  loading: boolean;
  onClose: () => void;
  onItemPress: (searchItem: UserSearchItem) => void;
  referralAmount: number;
  onChangeText: (text: string) => void;
  isSearchTextEmpty: boolean;
  recentSearch: UserSearchItem[];
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
  recentSearch,
}: IProps) => {
  const { referralComponent, goToReferralInformation } = useReferral(referralAmount);
  const items = useMemo(() => (isSearchTextEmpty ? recentSearch : data || []), [isSearchTextEmpty, data, recentSearch]);
  const flashListTestId = useMemo(() => SEARCH_RESULTS(items.map((i) => i.name).sort()), [items]);
  const renderItem = useRenderer(items, onItemPress, referralComponent);

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
      {!isSearchTextEmpty ? null : (
        <>
          <TextTemplate type="b2b">{t("user_referral.recent")}</TextTemplate>
          <Pad height={Style.adjust(16)} />
        </>
      )}

      {(loading || !data?.length) && !isSearchTextEmpty ? (
        <FindAFriend loading={loading} onPress={goToReferralInformation} records={data} />
      ) : (
        <FlashList
          data={items}
          keyExtractor={keyExtractor}
          showsVerticalScrollIndicator={false}
          estimatedItemSize={Style.adjust(45)}
          renderItem={renderItem}
          keyboardShouldPersistTaps="handled"
          testID={flashListTestId}
          ListEmptyComponent={isSearchTextEmpty ? <Box mb={32}>{referralComponent}</Box> : null}
        />
      )}
      <GenericHeadingAbsolute
        onRightIconPress={onClose}
        heading={<Heading heading={heading} subheading={subheading} />}
        rightIconTestID={SEARCH_CLOSE}
      />
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
