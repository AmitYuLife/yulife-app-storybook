import { FC, memo } from "react";
import { View } from "react-native";
import { BUTTON_ICON, TertiaryButton } from "@molecules";
import { Icon, Pad, TextTemplate } from "@atoms";
import { REGION, region } from "@locale";
import { Style, StyleSheet } from "@styles";
import { useTranslation } from "@hooks";
import { TOP_BAR_HEIGHT } from "@organisms";

type ServerListProps = {
  onPress: (r: REGION) => void;
  restrictToRegions: REGION[];
};

export const ServerList: FC<ServerListProps> = memo(({ onPress, restrictToRegions }) => {
  const translations = useTranslation([
    "screens.login.server_location.heading",
    "screens.login.server_location.description",
  ]);

  return (
    <View style={styles.wrapper}>
      <Pad height={TOP_BAR_HEIGHT} />
      <TextTemplate type="h2">{translations["screens.login.server_location.heading"]}</TextTemplate>
      <View style={styles.description}>
        <TextTemplate type="b2">{translations["screens.login.server_location.description"]}</TextTemplate>
      </View>

      {region.getAvailableRegions(restrictToRegions).map((o) => {
        const Flag = REGION_TO_FLAG_MAPPING[o.key];
        return (
          <View style={styles.button} key={o.key}>
            <TertiaryButton
              size="Fill"
              label={o.label}
              onPress={() => onPress(o.key)}
              height={Style.adjust(60)}
              LeftIcon={<Flag />}
              rightIcon={BUTTON_ICON.ARROW_RIGHT}
            />
          </View>
        );
      })}
    </View>
  );
});

const REGION_TO_FLAG_MAPPING = {
  UK: Icon.FlagUK,
  US: Icon.FlagUS,
  SA: Icon.FlagSA,
  JP: Icon.FlagJP,
  KSA: Icon.FlagKSA,
};

export const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    marginHorizontal: Style.adjust(24),
  },
  button: {
    marginBottom: Style.adjust(16),
  },
  description: {
    marginTop: Style.adjust(16),
    marginBottom: Style.adjust(40),
  },
});
