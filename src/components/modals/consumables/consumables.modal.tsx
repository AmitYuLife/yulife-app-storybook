import * as React from "react";
import { BottomShadow, TextTemplate } from "@atoms";
import { StyleSheet, View } from "react-native";
import { Style } from "@styles";
import { memo, useCallback, useState } from "react";
import { Button, InventoryItem } from "@components/molecules";
import { useTranslation } from "@hooks";
import { useMutation, useQuery } from "@apollo/client";
import { GetGameConsumablesQuery, gql } from "@graphql/__generated";
import { FloatingModal } from "..";
import { first, isEmpty } from "lodash";
import Animated, { FadeInDown } from "react-native-reanimated";
import LinearGradient from "react-native-linear-gradient";
import { FlashList, ListRenderItemInfo } from "@shopify/flash-list";
import ConsumablesEmpty from "./subcomponents/consumables-empty";

interface IConsumablesModalProps {
  onClose: () => void;
  onActivated?: () => void;
}

const MODAL_ICON = require("@assets/icons/consumables-modal-icon.webp");
const BOTTOM_BACKGROUND = "rgba(248,248,248,1)";
const GRADIENT_LOCATIONS = [0, 0.7, 1];
const GRADIENT_COLORS = [BOTTOM_BACKGROUND, BOTTOM_BACKGROUND, "rgba(255,255,255,0)"];

const ConsumablesModal = ({ onClose, onActivated }: IConsumablesModalProps) => {
  const [selectedConsumable, setSelectedConsumable] = useState<string>(null);
  const [activateGameConsumable, { loading: isActivateLoading }] = useMutation(gql("ActivateGameConsumableDocument"));

  const t = useTranslation([
    "modals.consumables.title",
    "modals.consumables.subtitle",
    "modals.consumables.close",
    "modals.consumables.activate_button",
  ]);

  const {
    data,
    loading: consumablesLoading,
    refetch,
  } = useQuery(gql(`GetGameConsumablesDocument`), {
    fetchPolicy: "network-only",
  });

  const onSubmit = useCallback(async () => {
    try {
      await activateGameConsumable({ variables: { consumableId: selectedConsumable } });
      refetch();
      onActivated?.();
      setSelectedConsumable(null);
    } catch (e) {
      refetch();
    }
  }, [activateGameConsumable, onActivated, refetch, selectedConsumable]);

  const onPressConsumable = useCallback((firstId: string) => {
    setSelectedConsumable((selected) => (selected === firstId ? null : firstId));
  }, []);

  const renderItem = useCallback(
    ({ item }: ListRenderItemInfo<GetGameConsumablesQuery["getGameConsumables"]["consumables"][0]>) => {
      return (
        <InventoryItem
          name={item.title}
          iconUri={item.icon?.uri}
          quantity={item.quantity}
          isDisabled={isActivateLoading}
          isActive={selectedConsumable === first(item.gameConsumables)}
          onPress={() => onPressConsumable(first(item.gameConsumables))}
        />
      );
    },
    [isActivateLoading, onPressConsumable, selectedConsumable]
  );

  const showEmptyMessage = !consumablesLoading && isEmpty(data?.getGameConsumables.consumables);

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
              data={!consumablesLoading && !showEmptyMessage ? data?.getGameConsumables?.consumables : []}
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
                {!selectedConsumable ? <Button label={t["modals.consumables.close"]} onPress={onClose} /> : null}
                {selectedConsumable ? (
                  <Button
                    label={t["modals.consumables.activate_button"]}
                    isLoading={isActivateLoading}
                    onPress={onSubmit}
                  />
                ) : null}
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
  },
  topContainer: {
    width: "100%",
  },
  contentContainer: {
    paddingTop: Style.adjust(20),
    paddingBottom: Style.adjust(64),
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
    height: Style.adjust(520),
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
