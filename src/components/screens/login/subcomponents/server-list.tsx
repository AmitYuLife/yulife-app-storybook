import React, { FC, memo } from "react";
import { StyleSheet, View } from "react-native";
import { BUTTON_ICON, TertiaryButton } from "@molecules";
import { Icon, Pad, TextTemplate } from "@atoms";
import region from "@services/region";
import { Style } from "@styles";
import { useDispatch } from "react-redux";
import { setRegionConfig } from "@redux/app/app.actions";
import { useTranslation } from "@hooks";

type ServerListProps = {
  onPress: () => void;
};

export const ServerList: FC<ServerListProps> = memo(({ onPress }) => {
  const dispatch = useDispatch();
  const translations = useTranslation([
    "screens.login.server_location.heading",
    "screens.login.server_location.description",
  ]);

  return (
    <View style={styles.wrapper}>
      <Pad height={100} />
      <TextTemplate type="h1">{translations["screens.login.server_location.heading"]}</TextTemplate>
      <View style={styles.description}>
        <TextTemplate type="b2">{translations["screens.login.server_location.description"]}</TextTemplate>
      </View>

      {region.OPTIONS.map((o) => {
        const Flag = REGION_TO_FLAG_MAPPING[o.key];
        return (
          <View style={styles.button} key={o.key}>
            <TertiaryButton
              size="Fill"
              label={o.label}
              onPress={() => {
                region.setRegion(o.key);
                dispatch(setRegionConfig());
                onPress();
              }}
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
    marginTop: Style.adjust(8),
    marginBottom: Style.adjust(40),
  },
});
