import Config from "react-native-config";
import { memo, useCallback } from "react";
import { FullScreenHero } from "@organisms";
import { t } from "@locale";
import { FullScreenHeroBackground } from "@organisms/full-screen-hero/types";
import { Navigation } from "@navigation/main";
import { ROUTES } from "@navigation/constants";
import { setUnauthenticatedRoot } from "@navigation/root";

type LoginHeroScreenProps = {
  componentId: string;
};

export const LoginHeroScreen = memo(({ componentId }: LoginHeroScreenProps) => {
  const navigateToMagicLink = useCallback(async () => {
    await Navigation.push(componentId, {
      component: {
        id: ROUTES.resetPassword,
        name: ROUTES.resetPassword,
      },
    });
  }, [componentId]);

  return (
    <FullScreenHero
      primaryCta={{ label: t("screens.login-hero.primary_cta_label"), onPress: navigateToMagicLink }}
      secondaryCta={{ label: t("screens.login-hero.secondary_cta_label"), onPress: setUnauthenticatedRoot }}
      disclaimerMarkdown={t("screens.login-hero.disclaimer_markdown", {
        privacyPolicyUrl: Config.PRIVACY_POLICY_URL,
      })}
      slides={[
        {
          title: t("screens.login-hero.slides.earn"),
          backgroundImage: FullScreenHeroBackground.YugiClimbing,
        },
        {
          title: t("screens.login-hero.slides.redeem"),
          backgroundImage: FullScreenHeroBackground.Rewards,
        },
        {
          title: t("screens.login-hero.slides.donate"),
          backgroundImage: FullScreenHeroBackground.YugiGardening,
        },
      ]}
    />
  );
});

export default LoginHeroScreen;
