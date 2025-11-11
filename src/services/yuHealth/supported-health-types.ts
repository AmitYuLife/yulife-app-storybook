import { t } from "@locale";
import { HealthProvider } from "@yu-life/react-native-yu-health";

export enum SupportedHealthTypes {
  steps = "steps",
  meditation = "meditation",
  cycling = "cycling",
}

interface IHealthProviderOptions {
  isRecommended: boolean;
  label?: string;
  supportedTypes: SupportedHealthTypes[];
  onPress?: () => void;
  isSelected?: boolean;
}

export const HEALTH_PROVIDER_OPTIONS: Record<Partial<HealthProvider>, IHealthProviderOptions> = {
  [HealthProvider.googleFit]: {
    label: t("yu_health.providers.googleFit"),
    isRecommended: true,
    supportedTypes: [SupportedHealthTypes.steps, SupportedHealthTypes.meditation, SupportedHealthTypes.cycling],
  },
  [HealthProvider.healthConnect]: {
    label: t("yu_health.providers.healthConnect"),
    isRecommended: false,
    supportedTypes: [SupportedHealthTypes.steps, SupportedHealthTypes.cycling, SupportedHealthTypes.meditation],
  },
  [HealthProvider.samsungHealth]: {
    label: t("yu_health.providers.samsungHealth"),
    isRecommended: false,
    supportedTypes: [SupportedHealthTypes.steps],
  },
  [HealthProvider.healthKit]: {
    label: t("yu_health.providers.healthKit"),
    isRecommended: true,
    supportedTypes: [SupportedHealthTypes.steps, SupportedHealthTypes.meditation, SupportedHealthTypes.cycling],
  },
};
