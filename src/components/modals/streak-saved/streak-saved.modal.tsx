import { TextTemplate } from "@atoms";
import { StreakSaverIcon } from "@atoms/icon/streak-saver-icon";
import { Button, InventoryItem } from "@components/molecules";
import { useTranslation } from "@hooks";
import { Style, StyleSheet } from "@styles";
import { memo, useCallback } from "react";
import { View } from "react-native";
import { FloatingModal } from "..";
// eslint-disable-next-line rulesdir/no-restricted-imports-clone
import React from "react";
import { useDispatch } from "react-redux";
import { getUserDataStart } from "@redux/user/user.actions";
import { AppDataType } from "@redux/user/user.types";

interface IStreakSavedModalProps {
  onClose: () => void;
  streakSaverCount: number;
}

const MODAL_ICON = require("@assets/icons/streak-saver.webp");

const StreakSavedModal = ({ onClose, streakSaverCount }: IStreakSavedModalProps) => {
  const dispatch = useDispatch();

  const t = useTranslation([
    "modals.streak_saver.title",
    "modals.streak_saver.body",
    "modals.streak_saver.button",
    "modals.streak_saver.inventory_item",
  ]);

  const onCloseHandler = useCallback(() => {
    dispatch(
      getUserDataStart({
        types: [AppDataType.activeStreak],
      })
    );

    onClose();
  }, [dispatch, onClose]);

  return (
    <View style={styles.wrapper}>
      <FloatingModal
        showButton={false}
        closeOverlay={onCloseHandler}
        paddingTop={Style.adjust(42)}
        height={1}
        icon={MODAL_ICON}
      >
        <>
          <View style={styles.contentWrapper}>
            <View style={styles.titleContainer}>
              <TextTemplate type="h2" textAlign="center">
                {t["modals.streak_saver.title"]}
              </TextTemplate>
            </View>
            <TextTemplate type="b2" textAlign="center">
              {t["modals.streak_saver.body"]}
            </TextTemplate>
          </View>

          <View style={styles.inventoryItemContainer}>
            <InventoryItem
              name={t["modals.streak_saver.inventory_item"]}
              icon={<StreakSaverIcon />}
              quantity={streakSaverCount}
              isDisabled={true}
              isActive={false}
            />
          </View>

          <View style={styles.confirmButton}>
            <Button translationKey="modals.streak_saver.button" onPress={onCloseHandler} />
          </View>
        </>
      </FloatingModal>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    minHeight: Style.adjust(220),
    justifyContent: "flex-end",
  },
  confirmButton: {
    marginBottom: Style.adjust(25),
  },
  contentWrapper: {
    paddingTop: Style.adjust(20),
    marginTop: Style.adjust(80),
    marginBottom: Style.adjust(50),
    paddingHorizontal: Style.adjust(34),
  },
  titleContainer: {
    marginBottom: Style.adjust(10),
  },
  inventoryItemContainer: {
    paddingHorizontal: Style.adjust(20),
    marginBottom: Style.adjust(85),
  },
});

export default memo(StreakSavedModal);
