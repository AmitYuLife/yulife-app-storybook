import React, { FC, memo } from "react";
import { StyleSheet, View } from "react-native";
import { Image, TextTemplate } from "@atoms";
import { Style } from "@styles";
import { Button } from "@components/molecules";
import { RemoteImage } from "@graphql/__generated";
import { showFloatingModal } from "@components/modals";
import { t } from "@locale";

const IMAGE_WIDTH = Style.DEVICE_WIDTH - Style.adjust(48);
const IMAGE_HEIGHT = (IMAGE_WIDTH * 356) / 375;

interface Props {
  title: string;
  description?: string;
  cta: string;
  backgroundImage: RemoteImage;
}

export const SmokingSponsorshipCard: FC<Props> = memo(({ title, description, cta, backgroundImage }) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.backgroundImage}
        suppressLoadingUi={true}
        width={IMAGE_WIDTH}
        source={{ uri: backgroundImage.uri }}
      />
      <View style={styles.contents}>
        <TextTemplate type="b1b" textAlign="center">
          {title}
        </TextTemplate>
        <TextTemplate type="l1" textAlign="center">
          {description}
        </TextTemplate>
        <View style={styles.buttonWrapper}>
          <Button
            testID="smoking-sponsorship-card-learn-more-button"
            translatedLabel={cta}
            size="Narrow"
            onPress={showPlaceholderModal}
          />
        </View>
      </View>
    </View>
  );
});

// TODO INTL-414 - implement sponsorship feature and remove this placeholder modal
function showPlaceholderModal() {
  showFloatingModal({
    icon: require("@assets/icons/sponsorship-pot-icon.png"),
    children: (
      <View style={styles.placeholderOverlayWrapper}>
        <TextTemplate type="h2" textAlign="center">
          {t("screens.smoking_hub.placeholder.sponsorship.title")}
        </TextTemplate>
        <TextTemplate type="b2" textAlign="center">
          {t("screens.smoking_hub.placeholder.sponsorship.description")}
        </TextTemplate>
      </View>
    ),
  });
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: Style.adjust(24),
    marginTop: Style.adjust(40),
    height: IMAGE_HEIGHT,
    borderRadius: Style.adjust(16),
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
    paddingTop: Style.adjust(52),
    gap: Style.adjust(8),
  },
  buttonWrapper: {
    marginTop: Style.adjust(8),
  },
  placeholderOverlayWrapper: {
    paddingHorizontal: Style.adjust(24),
    gap: Style.adjust(24),
  },
});

export default SmokingSponsorshipCard;
