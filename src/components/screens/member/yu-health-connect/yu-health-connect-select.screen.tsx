import Box from "@atoms/box/box";
import { Button } from "@components/molecules";
import { useTranslation } from "@hooks";
import { GenericHeadingAbsolute, GenericHeadingPad } from "@organisms";
import HealthProviderSelection from "@organisms/health-provider-selection/health-provider-selection";
import { Style, TOP_BAR, StyleSheet } from "@styles";
import { HealthProvider } from "@yu-life/react-native-yu-health";
import { memo } from "react";
import { ScrollView } from "react-native";

interface IYuHealthConnectSelectScreenProps {
  activeProvider: HealthProvider;
  providers: HealthProvider[];
  isLoadingProviders?: boolean;
  onChangeProvider: (provider: HealthProvider) => void;
  onConfirm: () => void;
  onCancel: () => void;
}

const YuHealthConnectSelectScreen = ({
  activeProvider,
  onConfirm,
  onCancel,
  providers,
  onChangeProvider,
  isLoadingProviders,
}: IYuHealthConnectSelectScreenProps) => {
  const t = useTranslation(["yu_health.select.confirm", "yu_health.select.choose"]);

  return (
    <>
      <GenericHeadingPad />
      <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollView}>
        <Box style={styles.wrapper} gap={20}>
          <Box gap={10}>
            {providers.map((provider) => (
              <HealthProviderSelection
                key={provider}
                provider={provider}
                isSelected={provider === activeProvider}
                onPress={() => onChangeProvider(provider)}
              />
            ))}
          </Box>

          <Button translationKey="yu_health.select.confirm" onPress={onConfirm} isLoading={isLoadingProviders} />
        </Box>
      </ScrollView>
      <GenericHeadingAbsolute heading={t["yu_health.select.choose"]} onRightIconPress={onCancel} />
    </>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: Style.adjust(20),
    minHeight: Style.DEVICE_HEIGHT - TOP_BAR.TOP_BAR_WITH_PAD - Style.adjust(30),
    paddingTop: Style.adjust(10),
    paddingBottom: Style.adjust(10),
  },
  scrollView: {
    flex: 1,
  },
});

export default memo(YuHealthConnectSelectScreen);
