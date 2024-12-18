import { Pad, TextTemplate } from "@atoms";
import { NavBar, TopBar } from "@components/organisms";
import { t } from "@locale";
import { IIcon } from "@organisms/top-bar/subcomponents/left";
import { getCurrentLevel, getYuniversalProgress } from "@redux/levels/levels.selectors";
import { getTheme } from "@theme";
import { memo } from "react";
import { Image, Platform, SafeAreaView, View } from "react-native";
import { useSelector } from "react-redux";
import styles from "./quests-offline.styles";

interface IProps {
  fitkitAvailable: boolean;
  leftIcons: IIcon[];
}

function QuestsScreenOffline({ fitkitAvailable, leftIcons }: IProps) {
  const currentLevel = useSelector(getCurrentLevel);
  const { yuniversalMap } = useSelector(getYuniversalProgress);
  const { questsOfflineScreen } = getTheme(currentLevel, yuniversalMap);

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.backgroundWrapper}>
        <Image resizeMode="cover" style={styles.background} source={questsOfflineScreen.backgroundImage} />
      </View>
      <View style={styles.headingWrapper}>
        <View>
          <TextTemplate type="h1">
            {!fitkitAvailable ? t("device_not_supported") : t("screens.offline.heading")}
          </TextTemplate>
        </View>
        <TextTemplate type="b2" textAlign="center">
          {!fitkitAvailable
            ? Platform.select({
                android: t("screens.fitkit_connect.unavailable_android"),
                ios: t("screens.fitkit_connect.unavailable_ios"),
              })
            : t("screens.offline.subheading")}
        </TextTemplate>
        <Pad height={60} />
      </View>
      <TopBar leftIcons={leftIcons} />
      <NavBar activeIndex={1} />
    </SafeAreaView>
  );
}

export default memo(QuestsScreenOffline);
