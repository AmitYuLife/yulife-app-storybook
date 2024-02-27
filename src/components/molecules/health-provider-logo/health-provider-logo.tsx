import { Image } from "@atoms";
import { Style } from "@styles";
import { HealthProvider } from "@yu-life/react-native-yu-health";
import { memo } from "react";
import { Source } from "react-native-fast-image";

const HEALTH_PROVIDER_LOGOS: Record<HealthProvider, Source> = {
  [HealthProvider.googleFit]: require("./logos/google-fit.webp"),
  [HealthProvider.healthConnect]: require("./logos/health-connect.webp"),
  [HealthProvider.samsungHealth]: require("./logos/samsung-health.webp"),
  [HealthProvider.healthKit]: require("./logos/health-kit.webp"),
};
interface IHealthProviderLogoProps {
  provider: HealthProvider;
  size?: number;
}
const HealthProviderLogo = ({ provider, size = Style.adjust(100) }: IHealthProviderLogoProps) => {
  return <Image width={size} height={size} suppressLoadingUi={true} source={HEALTH_PROVIDER_LOGOS[provider]} />;
};

export default memo(HealthProviderLogo);
