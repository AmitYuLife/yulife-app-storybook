import { View, StyleSheet, Image } from "react-native";
import { Box, TextTemplate, CloseSvg } from "../../atoms";
import { GenericHeadingPad } from "../../organisms";
import { Style, Colours } from "../../../styles";
import { Button, TouchableOpacityWithDelay } from "../../molecules";
import { useTranslation } from "../../../hooks";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { BUTTON_BASE } from "@ids";

interface IProps {
  onPress: () => void;
  onClose?: () => void;
}

const IMAGE_SIZE = Style.adjust(240);

export default function BirthdayNotSetModal({ onPress, onClose }: IProps) {
  const { bottom } = useSafeAreaInsets();
  const t = useTranslation([
    "screens.leaderboard_settings.birthday_visibility.not_set.heading",
    "screens.leaderboard_settings.birthday_visibility.not_set.ctaLabel",
    "screens.leaderboard_settings.birthday_visibility.not_set.description",
  ]);

  return (
    <View style={StyleSheet.absoluteFillObject}>
      <View style={styles.screenWidth}>
        <GenericHeadingPad />
        {onClose && (
          <TouchableOpacityWithDelay onPress={onClose} style={styles.closeButton}>
            <CloseSvg stroke={Colours.darkestGray} size={Style.adjust(24)} />
          </TouchableOpacityWithDelay>
        )}
        <View style={styles.contentContainer}>
          <Box justifyContent="center" alignItems="center">
            <Image
              source={require("@assets/birthdays/birthday-not-set.webp")}
              style={styles.image}
              width={IMAGE_SIZE}
              height={IMAGE_SIZE}
            />
          </Box>
          <Box mt={16}>
            <TextTemplate type="h2" textAlign="center">
              {t["screens.leaderboard_settings.birthday_visibility.not_set.heading"]}
            </TextTemplate>
          </Box>
          <Box mt={16}>
            <TextTemplate type="b2" textAlign="center">
              {t["screens.leaderboard_settings.birthday_visibility.not_set.description"]}
            </TextTemplate>
          </Box>
        </View>
        <View style={[styles.buttonContainer, { paddingBottom: Math.max(bottom, Style.adjust(32)) }]}>
          <Button
            testID={BUTTON_BASE("BIRTHDAY-NOT-SET-CTA", false)}
            size="Fill"
            translatedLabel={t["screens.leaderboard_settings.birthday_visibility.not_set.ctaLabel"]}
            onPress={onPress}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screenWidth: {
    width: Style.DEVICE_WIDTH,
    height: Style.DEVICE_HEIGHT,
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: Style.adjust(16),
    paddingTop: Style.adjust(20),
  },
  image: {
    height: IMAGE_SIZE,
    width: IMAGE_SIZE,
  },
  closeButton: {
    position: "absolute",
    top: Style.adjust(60),
    right: Style.adjust(16),
    padding: Style.adjust(8),
    zIndex: 1,
  },
  buttonContainer: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    paddingHorizontal: Style.adjust(32),
    paddingTop: Style.adjust(16),
  },
});
