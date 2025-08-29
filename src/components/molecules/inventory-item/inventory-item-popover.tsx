import { TextTemplate, TimeCounter } from "@atoms";
import { Colours, Style, StyleSheet } from "@styles";
import { View } from "react-native";
import { SecondaryButton } from "../button";
import { t } from "@locale";
import { memo } from "react";

interface IInventoryItemPopoverProps {
  onClose: () => void;
  name?: string;
  activeUntil?: string;
}

const InventoryItemPopover = ({ onClose, name, activeUntil }: IInventoryItemPopoverProps) => {
  return (
    <View style={styles.popupContent}>
      <View style={styles.popupDescription}>
        <View style={styles.title}>
          <TextTemplate type="l1b">{name}</TextTemplate>
        </View>
        <TextTemplate type="l2">
          {t("modals.consumables.already_active_start")}
          <TextTemplate type="l2b" color={Colours.primary.p600}>
            {" "}
            <TimeCounter time={activeUntil} />{" "}
          </TextTemplate>
          {t("modals.consumables.already_active_end")}
        </TextTemplate>
      </View>
      <View>
        <SecondaryButton
          wrapperStyle={styles.button}
          onPress={onClose}
          translationKey="modals.consumables.popover_confirm"
          size="Narrow"
        />
      </View>
    </View>
  );
};

export const styles = StyleSheet.create({
  popupContent: {
    paddingHorizontal: Style.adjust(20),
    paddingVertical: Style.adjust(10),
    paddingTop: Style.adjust(20),
  },
  popupDescription: {
    marginBottom: Style.adjust(15),
  },
  title: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: Style.adjust(5),
  },
  button: {
    flex: 1,
    paddingVertical: Style.adjust(2),
    width: "100%",
  },
});

export default memo(InventoryItemPopover);
