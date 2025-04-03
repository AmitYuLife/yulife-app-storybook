import { memo } from "react";
import { FullScreenHero } from "@organisms";
import { region, t } from "@locale";
import { FullScreenHeroBackground } from "@organisms/full-screen-hero/types";

type LoginHeroScreenProps = {
  onLoginEmailPress: () => void;
};

export const LoginHeroScreen = memo(({ onLoginEmailPress }: LoginHeroScreenProps) => {
  const urls = region.getConfig("urls");

  return (
    <FullScreenHero
      primaryCta={{ label: t("screens.login_hero.primary_cta_label"), onPress: onLoginEmailPress }}
      secondaryCta={{ label: t("screens.login_hero.secondary_cta_label"), onPress: onLoginEmailPress }}
      disclaimerMarkdown={t("screens.login.disclaimer", {
        privacyPolicyLink: urls?.privacyPolicy || "https://yulife.com/privacy-policy/",
        eulaLink: urls?.eula || "https://yulife.com/end-user-license-agreement-policy/",
      })}
      slides={[
        {
          title: t("screens.login_hero.slides.earn"),
          backgroundImage: FullScreenHeroBackground.YugiClimbing,
        },
        {
          title: t("screens.login_hero.slides.redeem"),
          backgroundImage: FullScreenHeroBackground.Rewards,
        },
        {
          title: t("screens.login_hero.slides.donate"),
          backgroundImage: FullScreenHeroBackground.YugiGardening,
        },
      ]}
    />
  );
});

export default LoginHeroScreen;
