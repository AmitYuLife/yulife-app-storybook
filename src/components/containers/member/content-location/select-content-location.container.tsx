import { memo, useCallback, useEffect, useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { View } from "react-native";
import { Navigation } from "@navigation/main";
import Logger from "@services/logger/logger";
import { FlashList, ListRenderItemInfo } from "@shopify/flash-list";
import { WELLBEING_HUB_SETTINGS_SCREEN } from "@ids";
import { GenericHeadingAbsolute, GenericHeadingPad, RadioListItem, RadioListItemProps } from "@organisms";
import { Button } from "@molecules";
import { Style, StyleSheet } from "@styles";
import { useTranslation } from "@hooks";
import { gql } from "@graphql/__generated";
import InfoPanel from "@components/molecules/info-panel/info-panel";
import { getContentLocationQueryToRefetch, ContentLocationPlacement } from "@utils/contentLocation";
import { filterRefetchQueries } from "@graphql/_core/filterRefetchQueries";

interface IProps {
  placement: ContentLocationPlacement;
  componentId: string;
}

const SelectContentLocationContainer = ({ placement, componentId }: IProps) => {
  const [contentLocationSelection, setContentLocationSelection] = useState("");
  const t = useTranslation([
    "screens.content_location.list.cta_button",
    "screens.content_location.list.title",
    "screens.content_location.list.rewards_info_box",
  ]);

  const heading = t[`screens.content_location.list.title`];

  const { data, loading: queryLoading } = useQuery(gql("GetMobileAvailableContentLocationsDocument"), {
    fetchPolicy: "network-only",
  });

  const [updateMobileUserContentLocation, { loading }] = useMutation(gql("UpdateMobileUserContentLocationDocument"), {
    refetchQueries: filterRefetchQueries([
      "GetMobileAvailableContentLocations",
      ...getContentLocationQueryToRefetch(placement),
    ]),
  });

  useEffect(() => {
    if (!contentLocationSelection && data?.data?.length) {
      const selection = data.data.find((item) => item.isSelected);

      if (selection) {
        setContentLocationSelection(selection.id);
      }
    }
  }, [contentLocationSelection, data?.data, queryLoading]);

  const onRightIconPress = useCallback(() => {
    if (!loading) {
      Navigation.pop(componentId).catch((): void => undefined);
    }
  }, [loading, componentId]);

  const handleUpdateContentLocation = useCallback(async () => {
    try {
      await updateMobileUserContentLocation({ variables: { location: contentLocationSelection } });
      onRightIconPress();
    } catch (e) {
      Logger.error(e, { file: "select-content-location.container" });
    }
  }, [contentLocationSelection, onRightIconPress, updateMobileUserContentLocation]);

  const canDismissWithoutSelection = data?.contentLocation?.hasUserSelectedContentLocation === true;

  return (
    <View style={styles.flex} testID={WELLBEING_HUB_SETTINGS_SCREEN}>
      <GenericHeadingPad />
      {placement === "rewards" ? (
        <View style={styles.info}>
          <InfoPanel markdown={t[`screens.content_location.list.rewards_info_box`]} type="warning" showIcon={true} />
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
        renderItem={renderItem}
      />
      <View style={styles.buttonWrapper}>
        <Button
          translationKey={`screens.content_location.list.cta_button`}
          size="Fill"
          onPress={handleUpdateContentLocation}
        />
      </View>
      <GenericHeadingAbsolute
        heading={heading}
        onRightIconPress={canDismissWithoutSelection ? () => onRightIconPress() : undefined}
      />
    </View>
  );
};

export default memo(SelectContentLocationContainer);

const styles = StyleSheet.create({
  flex: { flex: 1 },
  info: {
    padding: Style.adjust(24),
  },
  buttonWrapper: {
    paddingHorizontal: Style.adjust(24),
    marginBottom: Style.adjust(32),
    marginTop: Style.adjust(16),
  },
});

const renderItem = ({ item }: ListRenderItemInfo<RadioListItemProps>) => <RadioListItem {...item} />;
const keyExtractor = (item: RadioListItemProps) => item.id;
