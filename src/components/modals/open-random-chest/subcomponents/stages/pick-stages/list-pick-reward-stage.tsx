import React, { memo, useCallback, useState } from "react";
import { IPickStageProps } from "../../../open-random-chest.types";
import Animated, { FadeInUp } from "react-native-reanimated";
import { StyleSheet, View } from "react-native";
import RadioBattlePassRewardItem from "@components/molecules/radio-battle-pass-reward-item/radio-battle-pass-reward-item";
import ClaimPrizeButton from "../../claim-prize-button";
import { Style } from "@styles";
import ChestHeaderText from "../../chest-header-text";
import { GlowingSpinner, Image, TextTemplate } from "@atoms";

const ListPickRewardStage = ({ overlayImage, openedItems, isLoading, onClaim }: IPickStageProps) => {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const onClaimPress = useCallback(() => {
    onClaim(selectedItem);
  }, [onClaim, selectedItem]);

  return (
    <View style={styles.wrapper}>
      <ChestHeaderText label="You have won a £5 voucher!" />
      {overlayImage ? (
        <View style={styles.imageContainer}>
          <GlowingSpinner size={220} />
          <Image resizeMode="cover" source={{ uri: overlayImage }} width={150} height={150} suppressLoadingUi={true} />
        </View>
      ) : null}

      <Animated.View entering={FadeInUp.duration(600).delay(500)} style={styles.text}>
        <TextTemplate type="b2" color="white">
          {/* TODO: Should come from the API */}
          Select a brand to continue
        </TextTemplate>
      </Animated.View>
      <>
        <Animated.View entering={FadeInUp.delay(400).duration(1000)} style={styles.contentContainer}>
          <View style={styles.listSelectPicker}>
            {openedItems.map((item) => (
              <RadioBattlePassRewardItem
                key={item.id}
                reward={{ id: item.item.id, title: item.item.title }}
                checked={selectedItem === item.id}
                onPress={() => {
                  if (selectedItem === item.id) {
                    setSelectedItem(null);
                    return;
                  }

                  setSelectedItem(item.id);
                }}
              />
            ))}
          </View>
        </Animated.View>
        {selectedItem ? <ClaimPrizeButton onPress={onClaimPress} isLoading={isLoading} /> : null}
      </>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    justifyContent: "center",
    alignItems: "center",
  },
  contentContainer: { marginTop: Style.adjust(24),width: "100%", justifyContent: "center", alignItems: "center" },
  listSelectPicker: {
    width: "100%",
    paddingHorizontal: Style.adjust(30),
    gap: Style.adjust(15),
  },
  imageContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: Style.adjust(150),
    height: Style.adjust(150),
  },
  text: {
    marginTop: Style.adjust(42),
  },
});

export default memo(ListPickRewardStage);
