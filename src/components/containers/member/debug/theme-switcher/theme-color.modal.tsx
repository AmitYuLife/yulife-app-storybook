import { gql, MobileGameThemeFragment } from "@graphql/__generated";
import { useMutation } from "@apollo/client";
import { useCallback } from "react";
import { Alert, ScrollView } from "react-native";
import { Box, TextTemplate } from "@atoms";
import { Colours, Style } from "@styles";
import { omit } from "lodash";
import { SecondaryButton, Button } from "@molecules";

interface IThemeColorsModalProps {
  theme: MobileGameThemeFragment;
  onClose: () => void;
}

const ThemeColorsModal = ({ theme, onClose }: IThemeColorsModalProps) => {
  const [setTestMobileGameTheme] = useMutation(gql("SetTestMobileGameThemeDocument"), {
    refetchQueries: [gql("GetMobileGameThemeDocument")],
  });

  const handleSetTheme = useCallback(async () => {
    try {
      await setTestMobileGameTheme({ variables: { themeId: theme.id } });

      Alert.alert("Success", `Theme "${theme.name}" has been set.`);
      onClose();
    } catch {
      Alert.alert("Error", `Failed to set theme "${theme.name}".`);
    }
  }, [theme, setTestMobileGameTheme, onClose]);

  return (
    <Box
      flex={1}
      justifyContent="center"
      alignItems="center"
      bg="rgba(0,0,0,0.7)"
      position="absolute"
      top={0}
      left={0}
      w={Style.DEVICE_WIDTH}
      h={Style.DEVICE_HEIGHT}
    >
      <Box
        bg={Colours.neutral.white}
        br={12}
        ph={16}
        pv={16}
        w={Style.DEVICE_WIDTH - 48}
        maxHeight={Style.DEVICE_HEIGHT * 0.75}
        overflow="hidden"
      >
        <Box pb={12} borderBottomWidth={1} borderColor={Colours.debug.bottomBorder} mb={12}>
          <TextTemplate type="h3">{theme.name}</TextTemplate>
        </Box>

        <ScrollView>
          {Object.keys(omit(theme.colors.primary, "__typename")).map((key) => {
            const colorValue = theme.colors.primary[key as keyof typeof theme.colors.primary] as string;
            return (
              <Box key={key} flexDirection="row" alignItems="center" gap={12} pv={6}>
                <Box size={32} br={4} bg={colorValue} />
                <Box flex={1}>
                  <TextTemplate type="b2b">{key}</TextTemplate>
                </Box>
                <TextTemplate type="b2" color={Colours.neutral.n600}>
                  {colorValue}
                </TextTemplate>
              </Box>
            );
          })}
        </ScrollView>

        <Box flexDirection="column" gap={12} mt={16}>
          <SecondaryButton size="Fill" testID="cancel-theme-button" translatedLabel="Cancel" onPress={onClose} />
          <Button size="Fill" testID="set-theme-button" translatedLabel="Set Theme" onPress={handleSetTheme} />
        </Box>
      </Box>
    </Box>
  );
};

export default ThemeColorsModal;
