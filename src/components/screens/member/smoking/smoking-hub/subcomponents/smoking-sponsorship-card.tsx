import React, { FC, memo, useCallback } from "react";
import { StyleSheet, View } from "react-native";
import { Image, TextTemplate } from "@atoms";
import { Colours, Style } from "@styles";
import { TouchableOpacityWithDelay } from "@components/molecules";
import { RemoteImage } from "@graphql/__generated";
import { SMOKING_SPONSORSHIP_CARD_CTA } from "@ids";
import { showFloatingModal } from "@components/modals";
import { t } from "@locale";
import { YuCoinTopNavIcon } from "@atoms/icon/yucoin-top-nav-icon";
import { ArrowButton } from "@components/molecules/arrow-button";
import { useDispatch } from "react-redux";
import { logMixpanelEventActionCreator } from "@redux/logging/logging.actions";
import { VoidFunction } from "@utils";

const IMAGE_WIDTH = Style.DEVICE_WIDTH - Style.adjust(48);
const IMAGE_HEIGHT = Style.adjust(200);

interface Props {
  title: string;
  description?: string;
  cta: string;
  backgroundImage: RemoteImage;
}

export const SmokingSponsorshipCard: FC<Props> = memo(({ title, description, cta, backgroundImage }) => {
  const dispatch = useDispatch();

  const buttonOnPress = useCallback(() => {
    dispatch(
      logMixpanelEventActionCreator("button_pressed", {
        name: "smoking_sponsorship_cta",
        button_id: "smoking_sponsorship_cta",
        location: "smoking_hub",
      })
    );
  }, []);

  const onPress = useCallback(() => {
    dispatch(
      logMixpanelEventActionCreator("smoking_sponsorship_viewed", {
        location: "smoking_hub",
      })
    );

    showPlaceholderModal(buttonOnPress);
  }, []);

  return (
    <TouchableOpacityWithDelay onPress={onPress} style={styles.container} testID={SMOKING_SPONSORSHIP_CARD_CTA}>
      <Image
        style={styles.backgroundImage}
        suppressLoadingUi={true}
        width={IMAGE_WIDTH}
        source={{ uri: backgroundImage.uri }}
        resizeMode="cover"
      />
      <View style={styles.contents}>
        <View style={styles.title}>
          <TextTemplate type="b1b" textAlign="left" color={Colours.darkPink}>
            {title}
          </TextTemplate>
        </View>
        <View style={styles.description}>
          <TextTemplate type="l1" textAlign="left" color={Colours.neutral.n900}>
            {description}
          </TextTemplate>
        </View>
      </View>
      <View style={styles.arrowButton}>
        <ArrowButton color={Colours.neutral.white} intent={"primary"} />
      </View>
      <View style={styles.bottomSection}>
        <YuCoinTopNavIcon />
        <TextTemplate type="b2b" textAlign="left" color={Colours.neutral.n900}>
          {cta}
        </TextTemplate>
      </View>
    </TouchableOpacityWithDelay>
  );
});

// TODO INTL-414 - implement sponsorship feature and remove this placeholder modal
function showPlaceholderModal(buttonOnPress: VoidFunction) {
  showFloatingModal({
    icon: require("@assets/icons/sponsorship-pot-icon.png"),
    height: Style.adjust(490),
    buttonLabel: t("screens.smoking_hub.placeholder.sponsorship.cta"),
    children: (
      <View style={styles.placeholderOverlayWrapper}>
        <View style={styles.placeholderTitle}>
          <TextTemplate type="h2" textAlign="center">
            {t("screens.smoking_hub.placeholder.sponsorship.title")}
          </TextTemplate>
        </View>
        <TextTemplate type="b2" textAlign="center">
          {t("screens.smoking_hub.placeholder.sponsorship.description")}
        </TextTemplate>
      </View>
    ),
    buttonOnPress: buttonOnPress,
  });
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: Style.adjust(24),
    marginTop: Style.adjust(40),
    height: IMAGE_HEIGHT,
    borderRadius: Style.adjust(16),
    borderColor: "#FFD600",
    borderWidth: 1,
    overflow: "hidden",
  },
  backgroundImage: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    width: IMAGE_WIDTH,
    borderRadius: Style.adjust(16),
  },
  contents: {
    paddingHorizontal: Style.adjust(24),
    paddingTop: Style.adjust(24),
    gap: Style.adjust(12),
  },
  title: {
    width: Style.adjust(230),
  },
  description: {
    width: Style.adjust(166),
  },
  arrowButton: {
    position: "absolute",
    top: Style.adjust(24),
    right: Style.adjust(24),
  },
  bottomSection: {
    position: "absolute",
    left: 0,
    bottom: 0,
    right: 0,
    height: Style.adjust(40),
    backgroundColor: "#FFFBE5",
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: Style.adjust(24),
    gap: Style.adjust(8),
  },
  placeholderOverlayWrapper: {
    paddingHorizontal: Style.adjust(48),
    gap: Style.adjust(24),
    alignItems: "center",
  },
  placeholderTitle: {
    paddingHorizontal: Style.adjust(20),
  },
});

export default SmokingSponsorshipCard;
