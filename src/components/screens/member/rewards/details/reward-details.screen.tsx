import React, { useState, FC, useEffect, useCallback } from "react";
import { Keyboard, Platform, ScrollView, StyleSheet, View } from "react-native";
import { GetRewardItemDetails_getRewardItemDetails } from "@graphql/_core/schema";
import { Wrapper } from "@atoms";
import styles from "./reward-details.screen.styles";
import { getItemContent } from "./helpers/getItemContent";
import { GenericHeadingPad } from "@atoms/generic-heading/generic-heading-absolute";
import { handleContentHyperlink, IContentHyperLinkProps } from "@services/app-link";
import { TopBarLeftIconTypes } from "@organisms/top-bar/top-bar.helpers";
import { TopBarAbsolute } from "@organisms/top-bar/top-bar-absolute";

export interface Props {
  rewardItem: GetRewardItemDetails_getRewardItemDetails;
  onLeftTabPress: () => void;
  onRightTabPress: () => void;
  onPressTopBar: () => void;
  isLoading?: boolean;
  onSubmit: () => void;
}

const RewardDetailsScreen: FC<Props> = ({ rewardItem, onPressTopBar, isLoading, onSubmit }) => {
  const [isShowingKeyboard, setIsShowingKeyboard] = useState(false);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      Platform.OS === "ios" ? "keyboardWillShow" : "keyboardDidShow",
      () => setIsShowingKeyboard(true)
    );
    const keyboardDidHideListener = Keyboard.addListener(
      Platform.OS === "ios" ? "keyboardWillHide" : "keyboardDidHide",
      () => setIsShowingKeyboard(false)
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

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
      >
        <Wrapper>
          {rewardItem.content.map((item, index) => (
            <View key={`${item.__typename}-${index}`}>{getItemContent(item, onSubmit, handleLink, isLoading)}</View>
          ))}
        </Wrapper>
      </ScrollView>
      <TopBarAbsolute hasShadow={false} leftIcon={TopBarLeftIconTypes.BACK} onPressLeftIcon={onPressTopBar} />
    </View>
  );
};

export default RewardDetailsScreen;
