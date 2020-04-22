import { Pad, Text } from "@atoms/index";
import { NavBar, TopBar } from "@molecules/index";
import * as React from "react";
import { Image, Platform, SafeAreaView, View } from "react-native";
import { IThemeStore } from "../../../../../redux/theme/theme.reducer";
import { IConnectedScreenProps } from "../../../../../typings";
import assets from "./assets";
import styles from "./quests-offline.styles";

type Props = IConnectedScreenProps & {
  fitkitAvailable: boolean;
  theme: IThemeStore["questsOfflineScreen"];
};

type ImageType = "forest" | "ocean" | "desert" | "mountain";

export default function QuestsScreenOffline({ fitkitAvailable, onLeftMenuPress, totalCoins, theme: { image } }: Props) {
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.backgroundWrapper}>
        <Image resizeMode="cover" style={styles.background} source={assets[image as ImageType]} />
      </View>
      <View style={styles.headingWrapper}>
        <View>
          <Text style={styles.heading} bold={true}>
            {!fitkitAvailable ? "device not supported" : "you’re offline"}
          </Text>
        </View>
        <Text>
          {!fitkitAvailable
            ? Platform.select({
                android: "your device requires Google Play Services in order to use this app.",
                ios: "your device requires Apple Healthkit in order to use this app.",
              })
            : "Check your internet connection."}
        </Text>
        <Pad height={60} />
      </View>
      <TopBar coins={totalCoins} onPressLeftIcon={onLeftMenuPress} />
      <NavBar activeIndex={1} hasNotification={false} />
    </SafeAreaView>
  );
}
