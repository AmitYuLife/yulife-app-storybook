import { Box, MagnifyingGlass, TextTemplate } from "@atoms";
import { GenericHeadingAbsolute, GenericHeadingPad, RewardSearchListItem } from "@organisms";
import React, { memo, useCallback } from "react";
import { StyleSheet } from "react-native";
import { FadeIn, FadeInUp, FadeOut, FadeOutUp } from "react-native-reanimated";
import { UserSearchHeading } from "@components/molecules";
import { FlashList } from "@shopify/flash-list";
import { Colours, Style } from "@styles";
import { GetMobileRewardsListQuery } from "@graphql/__generated";
import { isEmpty } from "lodash";
import { RewardOnPressArgs } from "@components/containers/member/rewards/rewards.types";
import RewardSearchHeader from "./subcomponents/reward-search-header";
import { t } from "@locale";

interface IRewardSearchOverlayProps {
  onClose: () => void;
  isClosing?: boolean;
  isLoading?: boolean;
  searchTerm?: string;
  onPressWallet?: () => void;
  showResults?: boolean;
  transitionDuration?: number;
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
  transitionDuration,
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
    <Box h="100%" w="100%" position="absolute">
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
          <Box
            entering={FadeInUp.duration(transitionDuration)}
            exiting={FadeOutUp.duration(transitionDuration)}
            position="absolute"
            top={0}
            w="100%"
          >
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

          <Box
            flex={1}
            w="100%"
            h="100%"
            bg={Colours.neutral.n50}
            entering={FadeIn.duration(transitionDuration)}
            exiting={FadeOut.duration(transitionDuration)}
          >
            <FlashList
              renderItem={renderItem}
              contentContainerStyle={styles.listContent}
              extraData={[isLoading]}
              data={isEmpty(searchTerm) || isLoading || !showResults ? [] : items}
              estimatedItemSize={100}
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
                      <TextTemplate textAlign="center" type="b2">
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
  );
};

const styles = StyleSheet.create({
  listContent: {
    paddingTop: Style.adjust(10),
    paddingHorizontal: Style.adjust(20),
  },
});

export default memo(RewardSearchOverlay);
