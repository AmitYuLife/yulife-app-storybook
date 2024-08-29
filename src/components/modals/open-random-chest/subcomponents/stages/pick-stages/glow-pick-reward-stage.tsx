import { memo, useCallback, useMemo, useState } from "react";
import { IPickStageProps } from "../../../open-random-chest.types";
import Animated, { FadeInUp } from "react-native-reanimated";
import { StyleSheet, View } from "react-native";
import ClaimPrizeButton from "../../claim-prize-button";
import { Style } from "@styles";
import ChestHeaderText from "../../chest-header-text";
import { YumojiRewardPicker } from "@components/molecules";

const GlowPickRewardStage = ({ openedItems, isLoading, onClaim }: IPickStageProps) => {
  const [selectedItemId, setSelectedItemId] = useState<string | null>(null);

  const onClaimPress = useCallback(() => {
    onClaim(selectedItemId);
  }, [onClaim, selectedItemId]);

  const selectedItem = useMemo(() => {
    return openedItems.find((item) => item.id === selectedItemId);
  }, [openedItems, selectedItemId]);

  const onPressItem = useCallback(
    (id: string) => {
      if (selectedItemId === id) {
        setSelectedItemId(null);
        return;
      }

      setSelectedItemId(id);
    },
    [selectedItemId]
  );

  const items = useMemo(() => openedItems.map((item) => ({ image: item.item.image, id: item.id })), [openedItems]);

  return (
    <View style={styles.wrapper}>
      {/* TODO: Temporary text */}
      <ChestHeaderText label="You've won a jacket!" body="Select one to continue" />

      <Animated.View entering={FadeInUp.delay(400).duration(1000)} style={styles.contentContainer}>
        <YumojiRewardPicker activeItem={selectedItemId} onPress={onPressItem} items={items} />
      </Animated.View>
      {selectedItem ? <ClaimPrizeButton onPress={onClaimPress} isLoading={isLoading} /> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    justifyContent: "center",
    alignItems: "center",
  },
  contentContainer: { marginTop: 50, width: "100%", justifyContent: "center", alignItems: "center" },
  listSelectPicker: {
    width: "100%",
    paddingHorizontal: Style.adjust(30),
    gap: Style.adjust(15),
  },
});

export default memo(GlowPickRewardStage);
