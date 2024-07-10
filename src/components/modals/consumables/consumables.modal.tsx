import * as React from "react";
import { BottomShadow, TextTemplate } from "@atoms";
import { StyleSheet, View } from "react-native";
import { Style } from "@styles";
import { memo, useCallback, useEffect, useState } from "react";
import { Button, InventoryItem, SecondaryButton } from "@components/molecules";
import { useTranslation } from "@hooks";
import { useMutation, useQuery } from "@apollo/client";
import { GetGameConsumablesQuery, gql } from "@graphql/__generated";
import { FloatingModal } from "..";
import { first, isEmpty } from "lodash";
import Animated, { FadeInDown } from "react-native-reanimated";
import LinearGradient from "react-native-linear-gradient";
import { FlashList, ListRenderItemInfo } from "@shopify/flash-list";
import ConsumablesEmpty from "./subcomponents/consumables-empty";
import moment from "moment";
import { Navigation } from "@navigation/main";
import { MODALS } from "@navigation/constants";

interface IConsumablesModalProps {
  onClose: () => void;
  onRefetch?: () => void;
  onGoToRewards?: () => void;
}

const MODAL_ICON = require("@assets/icons/consumables-modal-icon.webp");
const BOTTOM_BACKGROUND = "rgba(248,248,248,1)";
const GRADIENT_LOCATIONS = [0, 0.7, 1];
const GRADIENT_COLORS = [BOTTOM_BACKGROUND, BOTTOM_BACKGROUND, "rgba(255,255,255,0)"];

const ConsumablesModal = ({ onClose, onRefetch, onGoToRewards }: IConsumablesModalProps) => {
  const [selectedConsumable, setSelectedConsumable] = useState<string>(null);
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

        return {
          ...item,
          activatedUntil: stripActivated ? undefined : item.activatedUntil,
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
          isDisabled={isActivateLoading}
          isActive={selectedConsumable === first(item.gameConsumables)}
          onPress={() => onPressConsumable(first(item.gameConsumables))}
        />
      );
    },
    [isActivateLoading, onPressConsumable, selectedConsumable]
  );

  const showEmptyMessage = !consumablesLoading && reconciledItems?.length === 0;

  return (
    <View style={styles.wrapper}>
      <Animated.View entering={FadeInDown.duration(400)}>
        <FloatingModal showButton={false} closeOverlay={onClose} paddingTop={Style.adjust(42)} icon={MODAL_ICON}>
          <View style={styles.contentWrapper}>
            <View style={styles.topContainer}>
              <View style={styles.headerWrapper}>
                <View style={styles.titleContainer}>
                  <TextTemplate type="h2" textAlign="center">
                    {t["modals.consumables.title"]}
                  </TextTemplate>
                </View>
                <TextTemplate type="b2" textAlign="center">
                  {t["modals.consumables.subtitle"]}
                </TextTemplate>
              </View>

              {!showEmptyMessage ? <BottomShadow /> : null}
            </View>

            <View>
              <View style={styles.twoTone} />
            </View>
            <FlashList
              showsVerticalScrollIndicator={false}
              estimatedItemSize={Style.adjust(100)}
              contentContainerStyle={styles.contentContainer}
              bounces={!showEmptyMessage && !consumablesLoading}
              pointerEvents={consumablesLoading ? "none" : undefined}
              extraData={[selectedConsumable, consumablesLoading, isActivateLoading]}
              data={!consumablesLoading && !showEmptyMessage ? reconciledItems : []}
              ListEmptyComponent={
                <ConsumablesEmpty consumablesLoading={consumablesLoading} showEmptyMessage={showEmptyMessage} />
              }
              renderItem={renderItem}
            />
            <LinearGradient
              angle={0}
              useAngle={true}
              pointerEvents="box-none"
              colors={GRADIENT_COLORS}
              style={styles.confirmButton}
              locations={GRADIENT_LOCATIONS}
            >
              <View style={styles.buttonContainer}>
                {!showEmptyMessage ? (
                  <Button
                    label={t["modals.consumables.activate_button"]}
                    isLoading={isActivateLoading}
                    disabled={!selectedConsumable}
                    onPress={onSubmit}
                  />
                ) : (
                  <Button label={t["modals.consumables.go_to_rewards_button"]} onPress={goToRewards} />
                )}

                <SecondaryButton label={t["modals.consumables.close"]} onPress={onClose} />
              </View>
            </LinearGradient>
          </View>
        </FloatingModal>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0,0,0,.64)",
  },
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
    paddingBottom: Style.adjust(128),
    paddingHorizontal: Style.adjust(20),
  },
  twoTone: {
    backgroundColor: BOTTOM_BACKGROUND,
    width: "100%",
    top: 0,
    position: "absolute",
    height: 1000,
  },
  contentWrapper: {
    height: Math.min(Style.DEVICE_HEIGHT * 0.7, Style.adjust(620)),
  },
  headerWrapper: {
    marginBottom: Style.adjust(30),
    marginTop: Style.adjust(80),
    paddingHorizontal: Style.adjust(40),
  },
  titleContainer: {
    marginBottom: Style.adjust(8),
  },
});

export default memo(ConsumablesModal);
