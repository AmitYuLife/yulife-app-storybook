import { Box, MagnifyingGlass, TextTemplate } from "@atoms";
import { GenericHeadingAbsolute, GenericHeadingPad, RewardSearchListItem } from "@organisms";
import React, { memo, useCallback } from "react";
import { UserSearchHeading } from "@components/molecules";
import { FlashList } from "@shopify/flash-list";
import { GetMobileRewardsListQuery } from "@graphql/__generated";
import { Colours, Style, StyleSheet } from "@styles";
import { isEmpty } from "lodash";
import { RewardOnPressArgs } from "@components/containers/member/rewards/rewards.types";
import RewardSearchHeader from "./subcomponents/reward-search-header";
import { t } from "@locale";
import { REWARD_SEARCH_NO_RESULT } from "@ids";
import { Modal } from "react-native";

interface IRewardSearchOverlayProps {
  onClose: () => void;
  isClosing?: boolean;
  isLoading?: boolean;
  searchTerm?: string;
  onPressWallet?: () => void;
  showResults?: boolean;
  setSearchTerm?: (term: string) => void;
  items?: GetMobileRewardsListQuery["data"]["list"];
  onItemPress?: (item: RewardOnPressArgs) => void;
}

const RewardSearchOverlay = ({
  items,
  onClose,
  isClosing,
  isLoading,
  searchTerm,
  onPressWallet,
  setSearchTerm,
  showResults,
  onItemPress,
}: IRewardSearchOverlayProps) => {
  const renderItem = useCallback(
    ({ item }: { item: GetMobileRewardsListQuery["data"]["list"][0] }) => {
      return (
        <RewardSearchListItem
          label={item.name}
          imageUrl={item.imageUrl?.uri}
          mb={6}
          onPress={() => {
            onItemPress(item);
          }}
        />
      );
    },
    [onItemPress]
  );

  return (
    <Modal transparent={true}>
      <Box h="100%" w="100%" position="absolute" bg="white">
        <GenericHeadingPad />
        <Box pt={8} pb={10}>
          <RewardSearchHeader
            autoFocus={true}
            onPressWallet={isClosing ? onPressWallet : undefined}
            onChangeText={setSearchTerm}
            editable={!isClosing}
            value={searchTerm}
          />
        </Box>

        {!isClosing ? (
          <>
            <Box position="absolute" top={0} w="100%">
              <GenericHeadingAbsolute
                onRightIconPress={onClose}
                heading={
                  <UserSearchHeading
                    heading={t("screens.rewards.search.title")}
                    subheading={t("screens.rewards.search.subheading")}
                  />
                }
              />
            </Box>

            <Box flex={1} w="100%" h="100%" bg={Colours.neutral.n50}>
              <FlashList
                keyboardShouldPersistTaps="handled"
                renderItem={renderItem}
                contentContainerStyle={styles.listContent}
                extraData={[isLoading]}
                data={isEmpty(searchTerm) || isLoading || !showResults ? [] : items}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={
                  <>
                    {isLoading ? (
                      Array.from({ length: 8 }).map((_, index) => (
                        <RewardSearchListItem isLoading={true} label="" key={index} mb={6} />
                      ))
                    ) : (
                      <Box pt={40} pb={60} justifyContent="center" alignItems="center" w="100%" px={40}>
                        <MagnifyingGlass width={80} />
                        <TextTemplate
                          textAlign="center"
                          type="b2"
                          testID={!isEmpty(searchTerm) && showResults ? REWARD_SEARCH_NO_RESULT : undefined}
                        >
                          {!isEmpty(searchTerm) && showResults
                            ? t("screens.rewards.search.no_results")
                            : t("screens.rewards.search.initial_state")}
                        </TextTemplate>
                      </Box>
                    )}
                  </>
                }
              />
            </Box>
          </>
        ) : null}
      </Box>
    </Modal>
  );
};

const styles = StyleSheet.create({
  listContent: {
    paddingTop: Style.adjust(10),
    paddingHorizontal: Style.adjust(20),
  },
});

export default memo(RewardSearchOverlay);
