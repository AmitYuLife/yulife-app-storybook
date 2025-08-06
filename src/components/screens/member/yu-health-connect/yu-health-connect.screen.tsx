import React, { memo, useCallback, useMemo } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { TextTemplate, SkeletonLoading } from "@atoms";
import { Button, InfoPanel, SecondaryButton } from "@molecules";
import { Style, TOP_BAR } from "@styles";
import { MODALS } from "@navigation/constants";
import { Navigation } from "@navigation/main";
import { useBackHandler, useTranslation } from "@hooks";
import Box from "@atoms/box/box";
import HealthProviderItem from "@organisms/health-provider-item/health-provider-item";
import { HealthProvider } from "@yu-life/react-native-yu-health";
import HealthProviderActivities from "@components/molecules/health-provider-activities/health-provider-activities";
import { GenericHeadingAbsolute, GenericHeadingPad } from "@organisms";
import { HEALTH_PROVIDER_OPTIONS, SupportedHealthTypes } from "@services/yuHealth/supported-health-types";
import { YugiHealthConnectIcon } from "@atoms/icon/yugi-health-connect-icon";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { isiOS } from "@utils";

interface IYuHealthConnectScreenProps {
  body?: string;
  isLoading?: boolean;
  onCancel: () => void;
  onConnect: () => void;
  onChangeProvider: () => void;
  hasNoProviders?: boolean;
  onOpenExplanation: () => void;
  selectedProvider: HealthProvider;
}

const YuHealthConnectScreen = ({
  body,
  onCancel,
  isLoading,
  onConnect,
  selectedProvider,
  hasNoProviders,
  onChangeProvider,
  onOpenExplanation,
}: IYuHealthConnectScreenProps) => {
  const options = useMemo(() => HEALTH_PROVIDER_OPTIONS[selectedProvider], [selectedProvider]);

  const t = useTranslation([
    "yu_health.connect.not_available",
    "yu_health.connect.title",
    "yu_health.connect.why",
    "yu_health.connect.button",
    "yu_health.connect.no_providers",
  ]);

  const onModalClose = useCallback(() => {
    return Navigation.dismissModal(MODALS.switchToGoogleFit);
  }, []);

  const hasUnsupportedTypes = useMemo(() => {
    if (!options) {
      return false;
    }

    return options.supportedTypes.length < Object.values(SupportedHealthTypes).length;
  }, [options]);

  const { bottom } = useSafeAreaInsets();

  const wrapperStyles = useMemo(() => {
    return [styles.wrapper, { paddingBottom: bottom }];
  }, [bottom]);

  useBackHandler(() => {
    onModalClose();
    return true;
  });

  const healthItemContent = useMemo(() => {
    if (isiOS()) {
      return null;
    }

    if (isLoading) {
      return <SkeletonLoading height={80} br={12} bg="#f0f0f0" />;
    }

    if (hasNoProviders || !selectedProvider) {
      return <InfoPanel markdown={t["yu_health.connect.no_providers"]} type="error" showIcon={true} />;
    }

    return <HealthProviderItem provider={selectedProvider} onPress={onChangeProvider} />;
  }, [selectedProvider, hasNoProviders, isLoading, onChangeProvider, t]);

  return (
    <>
      <GenericHeadingPad />

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={wrapperStyles}>
          <Box gap={10} style={styles.content}>
            <View>
              <View style={styles.title}>
                <YugiHealthConnectIcon size={Style.adjust(80)} />
              </View>
              <View style={styles.message}>
                <TextTemplate type="b2" textAlign="center">
                  {body}
                </TextTemplate>
              </View>
            </View>

            <Box gap={14}>
              {healthItemContent}
              <HealthProviderActivities supportedTypes={options?.supportedTypes} />

              {hasUnsupportedTypes ? (
                <InfoPanel markdown={t["yu_health.connect.not_available"]} type="info" showIcon={true} />
              ) : null}
            </Box>
          </Box>

          <Box gap={2} mt={10}>
            <SecondaryButton translationKey="yu_health.connect.why" onPress={onOpenExplanation} />
            <Button
              isLoading={isLoading}
              disabled={isLoading || hasNoProviders}
              translationKey="yu_health.connect.button"
              onPress={onConnect}
            />
          </Box>
        </View>
      </ScrollView>

      <GenericHeadingAbsolute heading={t["yu_health.connect.title"]} onRightIconPress={onCancel} />
    </>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: Style.adjust(28),
    minHeight: Style.DEVICE_HEIGHT - TOP_BAR.TOP_BAR_WITH_PAD - Style.adjust(80),
  },
  scrollView: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
  title: {
    marginTop: Style.adjust(24),
    marginBottom: Style.adjust(16),
    justifyContent: "center",
    alignItems: "center",
  },
  message: {
    marginBottom: Style.adjust(16),
  },
});

export default memo(YuHealthConnectScreen);
