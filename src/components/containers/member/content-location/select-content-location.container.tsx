import React, { memo, useCallback, useEffect, useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { StyleSheet, View } from "react-native";
import { Navigation } from "@navigation/main";
import Logger from "@services/logging/logger";
import { FlashList, ListRenderItemInfo } from "@shopify/flash-list";
import { WELLBEING_HUB_SETTINGS_SCREEN } from "@ids";
import { GenericHeadingAbsolute, GenericHeadingPad, RadioListItem, RadioListItemProps } from "@organisms";
import { Button } from "@molecules";
import { Style } from "@styles";
import { useTranslation } from "@hooks";
import { gql } from "@graphql/__generated";
import InfoPanel from "@components/molecules/info-panel/info-panel";

type Placement = "rewards" | "wellbeing_hub";
interface IProps {
  placement: Placement;
  componentId: string;
}

const SelectContentLocationContainer = ({ placement, componentId }: IProps) => {
  const [contentLocationSelection, setContentLocationSelection] = useState("");
  const t = useTranslation([
    "screens.content_location.wellbeing_hub.cta_button",
    "screens.content_location.wellbeing_hub.title",
    "screens.content_location.rewards.title",
    "screens.content_location.rewards.cta_button",
    "screens.content_location.rewards.info_box",
  ]);

  const heading = t[`screens.content_location.${placement}.title`];

  const { data, loading: queryLoading } = useQuery(gql("GetMobileAvailableContentLocationsDocument"), {
    fetchPolicy: "network-only",
  });

  const getQueryToRefetch = (from: Placement) => {
    switch (from) {
      case "rewards":
        return ["GetMobileRewardsList"];
      case "wellbeing_hub":
        return ["GetWellbeingHubItems"];
      default:
        return [];
    }
  };

  const [updateMobileUserContentLocation, { loading }] = useMutation(gql("UpdateMobileUserContentLocationDocument"), {
    refetchQueries: ["GetMobileAvailableContentLocations", ...getQueryToRefetch(placement)],
  });

  useEffect(() => {
    if (!contentLocationSelection && data?.data?.length) {
      const selection = data.data.find((item) => item.isSelected);

      if (selection) {
        setContentLocationSelection(selection.id);
      }
    }
  }, [queryLoading]);

  const onRightIconPress = useCallback(() => (loading ? null : Navigation.pop(componentId)), [loading, componentId]);

  const handleUpdateContentLocation = useCallback(async () => {
    try {
      await updateMobileUserContentLocation({ variables: { location: contentLocationSelection } });
      await onRightIconPress();
    } catch (e) {
      Logger.error(e, { file: "reward-store-location.container" });
    }
  }, [contentLocationSelection]);

  return (
    <View style={styles.flex} testID={WELLBEING_HUB_SETTINGS_SCREEN}>
      <GenericHeadingPad />
      {placement === "rewards" ? (
        <View style={styles.info}>
          <InfoPanel markdown={t[`screens.content_location.rewards.info_box`]} type="warning" showIcon={true} />
        </View>
      ) : null}
      <FlashList
        data={(data?.data || []).map((o) => ({
          id: o.id,
          title: `${o.label}${placement === "rewards" ? ` (${o.currencyCode})` : ""}`,
          description: "",
          isSelected: contentLocationSelection === o.id,
          onPress: () => setContentLocationSelection(o.id),
        }))}
        keyExtractor={keyExtractor}
        showsVerticalScrollIndicator={false}
        estimatedItemSize={itemSize}
        renderItem={renderItem}
      />
      <View style={styles.buttonWrapper}>
        <Button
          translationKey={`screens.content_location.${placement}.cta_button`}
          size="Fill"
          onPress={handleUpdateContentLocation}
        />
      </View>
      <GenericHeadingAbsolute heading={heading} onRightIconPress={onRightIconPress} />
    </View>
  );
};

export default memo(SelectContentLocationContainer);

const itemSize = Style.adjust(48);

const styles = StyleSheet.create({
  flex: { flex: 1 },
  listItemWrapper: {
    paddingTop: Style.adjust(8),
    paddingHorizontal: Style.adjust(24),
    height: itemSize,
    alignItems: "center",
  },
  info: {
    padding: Style.adjust(24),
  },
  buttonWrapper: {
    paddingHorizontal: Style.adjust(24),
    marginBottom: Style.adjust(32),
    marginTop: Style.adjust(16),
  },
});

const renderItem = ({ item }: ListRenderItemInfo<RadioListItemProps>) => (
  <View style={styles.listItemWrapper}>
    <RadioListItem {...item} />
  </View>
);
const keyExtractor = (item: RadioListItemProps) => item.id;
