import { TextTemplate } from "@atoms";
import { InventoryItemLoading } from "@components/molecules";
import { useTranslation } from "@hooks";
import { Style, StyleSheet } from "@styles";
import { memo } from "react";
import { View } from "react-native";

interface IConsumablesEmptyProps {
  consumablesLoading: boolean;
  showEmptyMessage: boolean;
}

const ConsumablesEmpty = ({ consumablesLoading, showEmptyMessage }: IConsumablesEmptyProps) => {
  const t = useTranslation(["modals.consumables.empty"]);

  return (
    <>
      {consumablesLoading ? Array.from(Array(5)).map((_, index) => <InventoryItemLoading key={index} />) : null}
      {!consumablesLoading && showEmptyMessage ? (
        <View style={styles.emptyText}>
          <TextTemplate type="b2" textAlign="center">
            {t["modals.consumables.empty"]}
          </TextTemplate>
        </View>
      ) : null}
    </>
  );
};

const styles = StyleSheet.create({
  emptyText: {
    paddingTop: Style.adjust(40),
    justifyContent: "center",
    paddingHorizontal: Style.adjust(20),
  },
});

export default memo(ConsumablesEmpty);
