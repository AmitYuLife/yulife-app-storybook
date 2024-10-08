import React, { useCallback } from "react";
import { StyleSheet, View } from "react-native";
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
  currentLocation: string;
  currentLocationLabel: string;
  onChangeWellbeingLocationPress: () => void;
};

const _FirstTimeWellbeingSelection = (props: Props) => {
  const { isActive, currentLocation, currentLocationLabel, onChangeWellbeingLocationPress } = props;
  const t = useTranslation([
    "screens.wellbeing_hub.welcome.heading",
    "screens.wellbeing_hub.welcome.description",
    "screens.wellbeing_hub.welcome.store_location",
    "screens.wellbeing_hub.welcome.confirm",
  ]);

  const [updateRewardStoreLocation] = useMutation(gql("UpdateMobileUserContentLocationDocument"), {
    refetchQueries: ["GetWellbeingHubItems"],
  });

  const handleConfirmPress = useCallback(async () => {
    try {
      await updateRewardStoreLocation({ variables: { location: currentLocation } });
    } catch (e) {
      Logger.error(e, { file: "first-time-store-selection" });
    }
  }, [currentLocation]);

  if (!isActive) {
    return null;
  }

  return (
    <>
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
              {t["screens.wellbeing_hub.welcome.heading"]}
            </TextTemplate>
          </View>
          <View style={styles.textPadding}>
            <TextTemplate type="b2" color={Colours.neutral.n800} textAlign="center">
              {t["screens.wellbeing_hub.welcome.description"]}
            </TextTemplate>
          </View>
          <TertiaryButton
            size="Fill"
            label={t["screens.wellbeing_hub.welcome.store_location"]}
            tertiarySubLabel={currentLocationLabel}
            onPress={onChangeWellbeingLocationPress}
            height={Style.adjust(80)}
            LeftIcon={<GlobeIcon />}
            rightIcon={BUTTON_ICON.ARROW_RIGHT}
            wrapperStyle={styles.storePadding}
          />
          <Button translationKey="screens.wellbeing_hub.welcome.confirm" size="Fill" onPress={handleConfirmPress} />
        </Animated.View>
      </View>
    </>
  );
};

const FirstTimeWellbeingSelection = React.memo(_FirstTimeWellbeingSelection);
export default FirstTimeWellbeingSelection;

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
