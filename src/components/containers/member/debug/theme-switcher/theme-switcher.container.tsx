import { memo, useCallback } from "react";
import { ScrollView, TouchableOpacity } from "react-native";
import { useQuery } from "@apollo/client";
import { gql } from "@graphql/__generated";
import { MobileGameThemeFragment } from "@graphql/__generated/graphql";
import { Navigation } from "@navigation/main";
import { ROUTES } from "@navigation/constants";
import { Box, TextTemplate } from "@atoms";
import { GenericHeadingAbsolute } from "@organisms";
import { Colours, Style, StyleSheet, TOP_BAR } from "@styles";
import { useModal } from "@modules/modals/useModal";
import ThemeColorsModal from "./theme-color.modal";
import { useTheme } from "@app/modules/themes/hooks/useTheme";

const ThemeSwitcherContainer = () => {
  const { data } = useQuery(gql("GetAllMobileGameThemesDocument"));
  const { showModal } = useModal();

  const onClose = useCallback(() => {
    Navigation.pop(ROUTES.themeSwitcher);
  }, []);

  const handleViewColors = useCallback(
    (theme: MobileGameThemeFragment) => {
      showModal(({ onClose: closeModal }) => <ThemeColorsModal theme={theme} onClose={closeModal} />);
    },
    [showModal]
  );

  const themes = data?.getAllThemes ?? [];

  const { theme: currentTheme } = useTheme();

  return (
    <Box>
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.contentContainer}>
        {themes.map((theme) => (
          <Box
            key={theme.id}
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between"
            ph={16}
            pv={12}
            borderBottomWidth={1}
            borderColor={Colours.debug.bottomBorder}
          >
            <Box flex={1} gap={6}>
              <TextTemplate type="b2b">{theme.name}</TextTemplate>
              <Box flexDirection="row" gap={4}>
                {Object.keys(theme.colors.primary).map((key) => (
                  <Box key={key} size={16} br={2} bg={theme.colors.primary[key as keyof typeof theme.colors.primary]} />
                ))}
              </Box>
            </Box>
            <TouchableOpacity style={styles.viewColorsButton} onPress={() => handleViewColors(theme)}>
              <TextTemplate type="b2b" color={currentTheme.colors.primary.p500}>
                View Colors
              </TextTemplate>
            </TouchableOpacity>
          </Box>
        ))}
      </ScrollView>

      <GenericHeadingAbsolute heading="Theme Switcher" onRightIconPress={onClose} />
    </Box>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    height: Style.DEVICE_HEIGHT,
  },
  contentContainer: {
    paddingTop: TOP_BAR.TOP_BAR_WITH_PAD,
  },
  viewColorsButton: {
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
});

export default memo(ThemeSwitcherContainer);
