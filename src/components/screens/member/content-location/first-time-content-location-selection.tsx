import React, { useCallback } from "react";
import { Modal, View } from "react-native";
import { Colours, Style, StyleSheet } from "@styles";
import Logger from "@services/logging/logger";
import { Image, TextTemplate } from "@atoms";
import { useTranslation } from "@hooks";
import { Button, BUTTON_ICON, TertiaryButton } from "@molecules";
import { GlobeIcon } from "@atoms/icon/globe-icon";
import { useMutation } from "@apollo/client";
import { gql } from "@graphql/__generated";
import Animated, { FadeIn } from "react-native-reanimated";
import { getContentLocationQueryToRefetch, ContentLocationPlacement } from "@utils/contentLocation";
import { REWARD_LOCATION_MODAL } from "@ids";
import { filterRefetchQueries } from "@graphql/_core/filterRefetchQueries";

type Props = {
  isActive: boolean;
  contentLocation: string;
  contentLocationLabel: string;
  onChangeContentLocationPress: () => void;
  placement: ContentLocationPlacement;
};

const _FirstTimeContentLocationSelection = (props: Props) => {
  const { isActive, contentLocation, contentLocationLabel, onChangeContentLocationPress, placement } = props;
  const t = useTranslation([
    "screens.content_location.first_time.heading",
    "screens.content_location.first_time.description",
    "screens.content_location.first_time.current_location",
    "screens.content_location.first_time.confirm",
  ]);

  const [updateContentLocation] = useMutation(gql("UpdateMobileUserContentLocationDocument"), {
    refetchQueries: filterRefetchQueries(getContentLocationQueryToRefetch(placement)),
  });

  const handleConfirmPress = useCallback(async () => {
    try {
      await updateContentLocation({ variables: { location: contentLocation } });
    } catch (e) {
      Logger.error(e, { file: "content-location-selection-modal" });
    }
  }, [contentLocation, updateContentLocation]);

  if (!isActive) {
    return null;
  }

  return (
    <Modal transparent={true}>
      <View style={styles.background} />
      <View style={styles.wrapper} testID={REWARD_LOCATION_MODAL}>
        <Animated.View entering={FadeIn.duration(500)} style={styles.container}>
          <Image
            style={styles.image}
            height={Style.adjust(64)}
            width={Style.adjust(87)}
            source={require("@assets/rewards-list/rewards_chest.png")}
          />
          <View style={styles.textPadding}>
            <TextTemplate type="h3" color={Colours.neutral.n800}>
              {t["screens.content_location.first_time.heading"]}
            </TextTemplate>
          </View>
          <View style={styles.textPadding}>
            <TextTemplate type="b2" color={Colours.neutral.n800} textAlign="center">
              {t["screens.content_location.first_time.description"]}
            </TextTemplate>
          </View>
          <TertiaryButton
            size="Fill"
            label={t["screens.content_location.first_time.current_location"]}
            tertiarySubLabel={contentLocationLabel}
            onPress={onChangeContentLocationPress}
            height={Style.adjust(80)}
            LeftIcon={<GlobeIcon />}
            rightIcon={BUTTON_ICON.ARROW_RIGHT}
            wrapperStyle={styles.storePadding}
          />
          <Button
            translationKey="screens.content_location.first_time.confirm"
            size="Fill"
            onPress={handleConfirmPress}
          />
        </Animated.View>
      </View>
    </Modal>
  );
};

const FirstTimeContentLocationSelection = React.memo(_FirstTimeContentLocationSelection);
export default FirstTimeContentLocationSelection;

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
