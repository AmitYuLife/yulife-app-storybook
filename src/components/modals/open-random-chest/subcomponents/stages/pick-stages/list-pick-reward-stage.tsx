import React, { memo, useCallback, useState } from "react";
import { IPickStageProps } from "../../../open-random-chest.types";
import Animated, { FadeInUp } from "react-native-reanimated";
import { StyleSheet, View } from "react-native";
import RadioBattlePassRewardItem from "@components/molecules/radio-battle-pass-reward-item/radio-battle-pass-reward-item";
import ClaimPrizeButton from "../../claim-prize-button";
import { Style } from "@styles";
import ChestHeaderText from "../../chest-header-text";
import { GlowingSpinner, Image, TextTemplate } from "@atoms";
import StageContainer from "../../stage-container";
import { t } from "@locale";
import { DETOX_ENABLED } from "@services/socket";

const ListPickRewardStage = ({ overlayImage, openedItems, isLoading, onClaim }: IPickStageProps) => {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const onClaimPress = useCallback(() => {
    onClaim([selectedItem]);
  }, [onClaim, selectedItem]);

  return (
    <StageContainer>
      <View style={styles.wrapper}>
        <ChestHeaderText label={t("modals.open_random_chest.title")} />
        {overlayImage ? (
          <Animated.View entering={FadeInUp.delay(300).duration(400)} style={styles.imageContainer}>
            {!DETOX_ENABLED ? <GlowingSpinner size={Style.adjust(260)} /> : null}
            <Image
              resizeMode="cover"
              source={{ uri: overlayImage }}
              width={Style.adjust(160)}
              height={Style.adjust(160)}
              suppressLoadingUi={true}
            />
          </Animated.View>
        ) : null}

        <Animated.View entering={FadeInUp.delay(400).duration(400)} style={styles.text}>
          <TextTemplate type="b2" color="white">
            {t("modals.open_random_chest.select_one")}
          </TextTemplate>
        </Animated.View>
        <Animated.View entering={FadeInUp.delay(450).duration(400)} style={styles.contentContainer}>
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
      </View>
      <ClaimPrizeButton onPress={onClaimPress} isLoading={isLoading} shouldShow={!!selectedItem} />
    </StageContainer>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  contentContainer: { marginTop: Style.adjust(24), width: "100%", justifyContent: "center", alignItems: "center" },
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
    marginTop: Style.adjust(12),
  },
  text: {
    marginTop: Style.adjust(50),
  },
});

export default memo(ListPickRewardStage);
