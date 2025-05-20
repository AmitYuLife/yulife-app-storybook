import { Colours, Style } from "@styles";
import { FullScreenHero } from "@organisms";
import { gql } from "@graphql/__generated";
import { memo, useMemo, useState } from "react";
import { region, t } from "@locale";
import { useQuery } from "@apollo/client";
import LinearGradient from "react-native-linear-gradient";
import AnimatedChest from "./components/animated-chest";
import { StyleSheet } from "react-native";
import { LoginHeroContext } from "@components/screens/login/login-hero/login-hero.context";

type LoginHeroScreenProps = {
  onLoginEmailPress: () => void;
};

export const LoginHeroScreen = memo(({ onLoginEmailPress }: LoginHeroScreenProps) => {
  const urls = region.getConfig("urls");

  const { data } = useQuery(gql("GetPotentialRewardsDocument"), {
    variables: { limit: 5 },
    fetchPolicy: "cache-and-network",
  });

  const [titleSectionHeight, setTitleSectionHeight] = useState(0);
  const [ctaContainerHeight, setCtaContainerHeight] = useState(0);

  const contextValue = useMemo(
    () => ({
      titleSectionHeight,
      ctaContainerHeight,
      setTitleSectionHeight: (height: number) => setTitleSectionHeight(height),
      setCtaContainerHeight: (height: number) => setCtaContainerHeight(height),
    }),
    [titleSectionHeight, ctaContainerHeight]
  );

  const slides = useMemo(
    () => [
      {
        title: t("screens.login_hero.slides.rewards"),
        foregroundComponent: <AnimatedChest rewards={data?.getPotentialRewards || []} />,
        backgroundComponent: (
          <LinearGradient
            colors={[Colours.secondary.s100S3, "#7238FF"]}
            style={styles.gradient}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
          />
        ),
      },
    ],
    [data]
  );

  return (
    <LoginHeroContext.Provider value={contextValue}>
      <FullScreenHero
        primaryCta={{ label: t("screens.login_hero.primary_cta_label"), onPress: onLoginEmailPress }}
        secondaryCta={{ label: t("screens.login_hero.secondary_cta_label"), onPress: onLoginEmailPress }}
        disclaimerMarkdown={t("screens.login.disclaimer", {
          privacyPolicyLink: urls?.privacyPolicy || "https://yulife.com/privacy-policy/",
          eulaLink: urls?.eula || "https://yulife.com/end-user-license-agreement-policy/",
        })}
        slides={slides}
      />
    </LoginHeroContext.Provider>
  );
});

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
    width: Style.DEVICE_WIDTH,
    height: Style.DEVICE_HEIGHT,
  },
});

export default LoginHeroScreen;
