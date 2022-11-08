import * as React from "react";
import { Image, View } from "react-native";
import { t } from "@locale";
import { TextTemplate } from "@atoms";
import { Button } from "@molecules";
import assets from "./assets";
import styles from "./level-locked.styles";

type LevelLockedScreenProps = {
  name?: string;
  level: number;
  onPressCta: () => void;
};

const LevelLockedScreen: React.FC<LevelLockedScreenProps> = (props) => {
  const { name, level, onPressCta } = props;

  return (
    <View style={styles.wrapper}>
      <View style={styles.imageWrapper}>
        <Image source={assets.levelUnavailable} />
      </View>
      <View style={styles.textWrapper}>
        <TextTemplate type="h3">
          {t(name ? "screens.level_locked.stage" : "screens.level_locked.level", { name, level })}
        </TextTemplate>
      </View>
      <Button size="Medium" label={t("screens.level_locked.cta_label")} onPress={onPressCta} />
    </View>
  );
};

export default LevelLockedScreen;
