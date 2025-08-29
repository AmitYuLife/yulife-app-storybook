import * as React from "react";
import { LayoutChangeEvent, View } from "react-native";
import { Style, StyleSheet } from "@styles";
import { memo, useCallback, useEffect, useMemo, useState } from "react";
import { Button, InventoryItem, SecondaryButton } from "@components/molecules";
import { useBackHandler, useTranslation } from "@hooks";
import { useMutation, useQuery } from "@apollo/client";
import { GetGameConsumablesQuery, gql } from "@graphql/__generated";
import { first, isEmpty } from "lodash";
import { ContentStyle, FlashList, ListRenderItemInfo } from "@shopify/flash-list";
import ConsumablesEmpty from "./subcomponents/consumables-empty";
import moment from "moment";
import { Navigation } from "@navigation/main";
import { MODALS } from "@navigation/constants";
import StreakSaverCountContainer from "@components/molecules/streak-saver-count/streak-saver-count.container";
import { ScrollableFloatingModal } from "@organisms";
import { ACTIVATE_POWER_UP_BUTTON } from "@ids";

interface IConsumablesModalProps {
  onClose: () => void;
  onRefetch?: () => void;
  onGoToRewards?: () => void;
}

const MODAL_ICON = require("@assets/icons/consumables-modal-icon.webp");

const ConsumablesModal = ({ onClose, onRefetch, onGoToRewards }: IConsumablesModalProps) => {
  const [selectedConsumable, setSelectedConsumable] = useState<string>(null);
  const [footerHeight, setFooterHeight] = useState<number>(0);
  const [activateGameConsumable, { loading: isActivateLoading }] = useMutation(gql("ActivateGameConsumableDocument"));
  const [reconciledItems, setReconciledItems] =
    useState<GetGameConsumablesQuery["getGameConsumables"]["consumables"]>();

  const t = useTranslation([
    "modals.consumables.title",
    "modals.consumables.subtitle",
    "modals.consumables.close",
    "modals.consumables.activate_button",
    "modals.consumables.go_to_rewards_button",
  ]);

  const {
    data,
    loading: consumablesLoading,
    refetch: refetchConsumables,
  } = useQuery(gql(`GetGameConsumablesDocument`), {
    fetchPolicy: "network-only",
  });

  useBackHandler(() => {
    onClose();
    return true;
  });

  const onSubmit = useCallback(async () => {
    try {
      await activateGameConsumable({ variables: { consumableId: selectedConsumable } });
      onRefetch?.();
      refetchConsumables();

      setSelectedConsumable(null);
    } catch (e) {
      refetchConsumables();
    }
  }, [activateGameConsumable, onRefetch, refetchConsumables, selectedConsumable]);

  const onPressConsumable = useCallback((firstId: string) => {
    setSelectedConsumable((selected) => (selected === firstId ? null : firstId));
  }, []);

  const goToRewards = useCallback(() => {
    onGoToRewards();
  }, [onGoToRewards]);

  const reconcileItems = useCallback(() => {
    if (!data?.getGameConsumables?.consumables) {
      return;
    }

    const items = data?.getGameConsumables?.consumables
      .filter((item) => {
        if (item.quantity <= 0 && moment.parseZone(item.activatedUntil).isBefore(moment())) {
          return false;
        }

        return true;
      })
      .map((item) => {
        const stripActivated = item.quantity > 0 && moment.parseZone(item.activatedUntil).isBefore(moment());
        const disabled = item.disabledUntil && moment.parseZone(item.disabledUntil).isAfter(moment());

        return {
          ...item,
          activatedUntil: stripActivated ? undefined : item.activatedUntil,
          disabledUntil: disabled ? item.disabledUntil : undefined,
        };
      });

    setReconciledItems((oldItems) => {
      if (!isEmpty(oldItems) && items.length !== data?.getGameConsumables?.consumables.length) {
        // Close inventory popover if item length has changed
        Navigation.dismissOverlay(MODALS.blurredOverlay);
      }

      return items ?? [];
    });
  }, [data?.getGameConsumables?.consumables]);

  useEffect(() => {
    reconcileItems();

    const nextExpiringItem = [...(data?.getGameConsumables?.consumables ?? [])]
      .sort((a, b) => {
        return moment(a.activatedUntil).diff(moment(b.activatedUntil));
      })
      .find((item) => item.activatedUntil && moment(item.activatedUntil).isAfter(moment()));

    let timeout: NodeJS.Timeout;
    if (nextExpiringItem) {
      timeout = setTimeout(() => {
        reconcileItems();
        onRefetch?.();
      }, moment(nextExpiringItem.activatedUntil).diff(moment(), "milliseconds"));
    }

    return () => clearTimeout(timeout);
  }, [data?.getGameConsumables?.consumables, onRefetch, reconcileItems]);

  const renderItem = useCallback(
    ({ item }: ListRenderItemInfo<GetGameConsumablesQuery["getGameConsumables"]["consumables"][0]>) => {
      return (
        <InventoryItem
          name={item.title}
          iconUri={item.icon?.uri}
          quantity={item.quantity}
          activeUntil={item.activatedUntil}
          disabledUntil={item.disabledUntil}
          isDisabled={isActivateLoading}
          isActive={selectedConsumable === first(item.gameConsumables)}
          onPress={() => onPressConsumable(first(item.gameConsumables))}
        />
      );
    },
    [isActivateLoading, onPressConsumable, selectedConsumable]
  );

  const showEmptyMessage = !consumablesLoading && reconciledItems?.length === 0;

  const footer = useMemo(
    () => (
      <View
        style={styles.buttonContainer}
        onLayout={(event: LayoutChangeEvent) => {
          setFooterHeight(event.nativeEvent.layout.height);
        }}
      >
        {!showEmptyMessage ? (
          <Button
            translationKey="modals.consumables.activate_button"
            isLoading={isActivateLoading}
            disabled={!selectedConsumable}
            onPress={onSubmit}
            testID={ACTIVATE_POWER_UP_BUTTON(!!selectedConsumable)}
          />
        ) : (
          <Button translationKey="modals.consumables.go_to_rewards_button" onPress={goToRewards} />
        )}

        <SecondaryButton translationKey="modals.consumables.close" onPress={onClose} />
      </View>
    ),
    [goToRewards, isActivateLoading, onClose, onSubmit, selectedConsumable, showEmptyMessage]
  );

  const header = useMemo(
    () => (
      <View style={styles.streakSaver}>
        <StreakSaverCountContainer />
      </View>
    ),
    []
  );

  const extraData = useMemo(
    () => [selectedConsumable, consumablesLoading, isActivateLoading],
    [consumablesLoading, isActivateLoading, selectedConsumable]
  );

  const contentContainerStyle: ContentStyle = useMemo(
    () => ({ ...styles.contentContainer, paddingBottom: (footerHeight ?? 0) + Style.adjust(20) }),
    [footerHeight]
  );

  return (
    <ScrollableFloatingModal
      topIcon={MODAL_ICON}
      onClose={onClose}
      title={t["modals.consumables.title"]}
      subtitle={t["modals.consumables.subtitle"]}
      header={header}
      footer={footer}
    >
      <FlashList
        showsVerticalScrollIndicator={false}
        estimatedItemSize={Style.adjust(100)}
        contentContainerStyle={contentContainerStyle}
        bounces={!showEmptyMessage && !consumablesLoading}
        pointerEvents={consumablesLoading ? "none" : undefined}
        extraData={extraData}
        data={!consumablesLoading && !showEmptyMessage ? reconciledItems : []}
        ListEmptyComponent={
          <ConsumablesEmpty consumablesLoading={consumablesLoading} showEmptyMessage={showEmptyMessage} />
        }
        renderItem={renderItem}
      />
    </ScrollableFloatingModal>
  );
};

const styles = StyleSheet.create({
  confirmButton: {
    bottom: 0,
    width: "100%",
    position: "absolute",
    paddingTop: Style.adjust(25),
  },
  buttonContainer: {
    paddingBottom: Style.adjust(25),
    gap: Style.adjust(8),
  },
  topContainer: {
    width: "100%",
  },
  contentContainer: {
    paddingTop: Style.adjust(20),
    paddingHorizontal: Style.adjust(20),
  },
  titleContainer: {
    marginBottom: Style.adjust(8),
  },
  streakSaver: { position: "absolute", top: -Style.adjust(28), start: Style.adjust(12) },
});

export default memo(ConsumablesModal);
