import React, { FC, useCallback } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { GetRewardItemDetails_getRewardItemDetails } from "@graphql/_core/schema";
import { Wrapper } from "@atoms";
import styles from "./reward-details.screen.styles";
import { GetItemContent } from "./helpers/getItemContent";
import { GenericHeadingPad } from "@organisms";
import { handleContentHyperlink, IContentHyperLinkProps } from "@services/app-link";
import { TopBarLeftIconTypes } from "@organisms/top-bar/top-bar.helpers";
import { TopBarAbsolute } from "@organisms/top-bar/top-bar-absolute";
import { SCROLLABLE_LAYOUT } from "@ids";
import { useKeyboardListeners } from "@services/hooks/useKeyboardListeners";

export interface Props {
  rewardItem: GetRewardItemDetails_getRewardItemDetails;
  onPressTopBar: () => void;
  isLoading?: boolean;
  onSubmit: () => void;
}

const RewardDetailsScreen: FC<Props> = ({ rewardItem, onPressTopBar, isLoading, onSubmit }) => {
  const isShowingKeyboard = useKeyboardListeners();

  const handleLink = useCallback(
    (item: IContentHyperLinkProps) =>
      handleContentHyperlink({
        id: item.id,
        name: rewardItem.name,
        title: item.title,
        componentID: "rewards_details",
        uri: item.uri,
        label: item.label,
      }),
    []
  );

  return (
    <View style={styles.wrapper}>
      <GenericHeadingPad />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.wrapper}
        contentContainerStyle={StyleSheet.flatten([
          styles.contentContainerStyle,
          isShowingKeyboard ? styles.contentContainerWithKeyboard : {},
        ])}
        testID={SCROLLABLE_LAYOUT}
      >
        <View style={styles.paddingTop}>
          <Wrapper>
            {rewardItem.content.map((item, index) => (
              <View key={`${item.__typename}-${index}`}>{GetItemContent(item, onSubmit, handleLink, isLoading)}</View>
            ))}
          </Wrapper>
        </View>
      </ScrollView>
      <TopBarAbsolute hasShadow={false} leftIcon={TopBarLeftIconTypes.BACK} onPressLeftIcon={onPressTopBar} />
    </View>
  );
};

export default RewardDetailsScreen;
