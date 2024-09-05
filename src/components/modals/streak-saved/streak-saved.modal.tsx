import { TextTemplate } from "@atoms";
import { StyleSheet, View } from "react-native";
import { Style } from "@styles";
import { memo, useCallback, useState } from "react";
import { Button, InventoryItem } from "@components/molecules";
import { useTranslation } from "@hooks";
import { useMutation } from "@apollo/client";
import { gql } from "@graphql/__generated";
import { FloatingModal } from "..";
import { useDispatch } from "react-redux";
import { AppDataType } from "@redux/user/user.types";
import { getUserDataStart } from "@redux/user/user.actions";
import { StreakSaverIcon } from "@atoms/icon/streak-saver-icon";
import { useSelector } from "react-redux";
import { getStreakSaverCount } from "@redux/quest-map/quest-map.selectors";

interface IStreakSavedModalProps {
  onClose: () => void;
}

const MODAL_ICON = require("@assets/icons/streak-saver.webp");

const StreakSavedModal = ({ onClose }: IStreakSavedModalProps) => {
  const dispatch = useDispatch();
  const [error, setError] = useState<string | null>(null);
  const [restoreStreak, { loading }] = useMutation(gql(`RestoreStreakDocument`));
  const t = useTranslation([
    "modals.streak_saver.title",
    "modals.streak_saver.body",
    "modals.streak_saver.button",
    "modals.streak_saver.inventory_item",
  ]);
  const streakSaverCount = useSelector(getStreakSaverCount);

  const onSubmit = useCallback(async () => {
    try {
      await restoreStreak();
      dispatch(
        getUserDataStart({
          types: [AppDataType.activeStreak],
        })
      );

      onClose();
    } catch (e) {
      setError(e.message);
    }
  }, [dispatch, onClose, restoreStreak]);

  return (
    <View style={styles.wrapper}>
      <FloatingModal
        showButton={false}
        closeOverlay={onClose}
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
              {!error ? t["modals.streak_saver.body"] : error}
            </TextTemplate>
          </View>

          {error ? null : (
            <View style={styles.inventoryItemContainer}>
              <InventoryItem
                name={t["modals.streak_saver.inventory_item"]}
                icon={<StreakSaverIcon />}
                quantity={streakSaverCount}
                isDisabled={true}
                isActive={false}
              />
            </View>
          )}

          <View style={styles.confirmButton}>
            <Button translationKey="modals.streak_saver.button" isLoading={loading} onPress={onSubmit} />
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
