import { memo, useCallback, useEffect, useMemo, useState } from "react";
import { IPickStageProps } from "../../../open-random-chest.types";
import Animated, { FadeInUp } from "react-native-reanimated";
import { View } from "react-native";
import ClaimPrizeButton from "../../claim-prize-button";
import { Style, StyleSheet } from "@styles";
import ChestHeaderText from "../../chest-header-text";
import { YumojiRewardPicker } from "@components/molecules";
import StageContainer from "../../stage-container";
import { first } from "lodash";
import { t } from "@locale";

const GlowPickRewardStage = ({ openedItems, isLoading, onClaim }: IPickStageProps) => {
  const [selectedItemId, setSelectedItemId] = useState<string | null>(null);

  const onClaimPress = useCallback(() => {
    onClaim([selectedItemId]);
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

  useEffect(() => {
    if (openedItems.length === 1) {
      setSelectedItemId(first(openedItems).id);
    }
  }, [openedItems]);

  const items = useMemo(() => openedItems.map((item) => ({ image: item.item.image, id: item.id })), [openedItems]);

  return (
    <StageContainer>
      <View style={styles.wrapper}>
        <ChestHeaderText label={t("modals.open_random_chest.title")} body={t("modals.open_random_chest.select_one")} />

        <Animated.View entering={FadeInUp.delay(400).duration(1000)} style={styles.contentContainer}>
          <YumojiRewardPicker activeItem={selectedItemId} onPress={onPressItem} items={items} />
        </Animated.View>
      </View>
      <ClaimPrizeButton onPress={onClaimPress} isLoading={isLoading} shouldShow={!!selectedItem} />
    </StageContainer>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    justifyContent: "center",
    alignItems: "center",
  },
  contentContainer: { width: "100%", justifyContent: "center", alignItems: "center" },
  listSelectPicker: {
    width: "100%",
    paddingHorizontal: Style.adjust(30),
    gap: Style.adjust(15),
  },
});

export default memo(GlowPickRewardStage);
