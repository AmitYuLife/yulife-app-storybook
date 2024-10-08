import React, { useCallback } from "react";
import { Modal, StyleSheet, View } from "react-native";
import { Colours, Style } from "@styles";
import Logger from "@services/logging/logger";
import { Image, TextTemplate } from "@atoms";
import { useTranslation } from "@hooks";
import { Button, BUTTON_ICON, TertiaryButton } from "@molecules";
import { GlobeIcon } from "@atoms/icon/globe-icon";
import { useMutation } from "@apollo/client";
import { gql } from "@graphql/__generated";
import Animated, { FadeIn } from "react-native-reanimated";

type Props = {
  isActive: boolean;
  currentStore: string;
  currentStoreLabel: string;
  onChangeStoreLocationPress: () => void;
};

const _FirstTimeStoreSelection = (props: Props) => {
  const { isActive, currentStore, currentStoreLabel, onChangeStoreLocationPress } = props;
  const t = useTranslation([
    "screens.rewards.list.welcome.heading",
    "screens.rewards.list.welcome.description",
    "screens.rewards.list.welcome.store_location",
    "screens.rewards.list.welcome.confirm",
  ]);

  const [updateRewardStoreLocation] = useMutation(gql("UpdateMobileUserContentLocationDocument"), {
    refetchQueries: ["GetMobileRewardsList"],
  });

  const handleConfirmPress = useCallback(async () => {
    try {
      await updateRewardStoreLocation({ variables: { location: currentStore } });
    } catch (e) {
      Logger.error(e, { file: "first-time-store-selection" });
    }
  }, [currentStore]);

  if (!isActive) {
    return null;
  }

  return (
    <Modal transparent={true}>
      <View style={styles.background} />
      <View style={styles.wrapper}>
        <Animated.View entering={FadeIn.duration(500)} style={styles.container}>
          <Image
            style={styles.image}
            height={Style.adjust(64)}
            width={Style.adjust(87)}
            source={require("@assets/rewards-list/rewards_chest.png")}
          />
          <View style={styles.textPadding}>
            <TextTemplate type="h3" color={Colours.neutral.n800}>
              {t["screens.rewards.list.welcome.heading"]}
            </TextTemplate>
          </View>
          <View style={styles.textPadding}>
            <TextTemplate type="b2" color={Colours.neutral.n800} textAlign="center">
              {t["screens.rewards.list.welcome.description"]}
            </TextTemplate>
          </View>
          <TertiaryButton
            size="Fill"
            label={t["screens.rewards.list.welcome.store_location"]}
            tertiarySubLabel={currentStoreLabel}
            onPress={onChangeStoreLocationPress}
            height={Style.adjust(80)}
            LeftIcon={<GlobeIcon />}
            rightIcon={BUTTON_ICON.ARROW_RIGHT}
            wrapperStyle={styles.storePadding}
          />
          <Button translationKey="screens.rewards.list.welcome.confirm" size="Fill" onPress={handleConfirmPress} />
        </Animated.View>
      </View>
    </Modal>
  );
};

const FirstTimeStoreSelection = React.memo(_FirstTimeStoreSelection);
export default FirstTimeStoreSelection;

const styles = StyleSheet.create({
  background: { ...StyleSheet.absoluteFillObject, opacity: 0.75, backgroundColor: Colours.neutral.black },
  wrapper: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    backgroundColor: Colours.neutral.white,
    borderRadius: Style.adjust(8),
    padding: Style.adjust(16),
    justifyContent: "center",
    alignItems: "center",
    width: Style.DEVICE_WIDTH - Style.adjust(36),
  },
  textPadding: {
    paddingBottom: Style.adjust(12),
  },
  storePadding: {
    marginTop: Style.adjust(16),
    marginBottom: Style.adjust(32),
  },
  image: {
    marginTop: Style.adjust(8),
    marginBottom: Style.adjust(16),
  },
});
