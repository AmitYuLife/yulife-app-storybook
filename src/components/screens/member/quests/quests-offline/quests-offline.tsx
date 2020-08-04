import { Pad, Text } from "@atoms/index";
import { TopBar } from "@molecules/index";
import * as React from "react";
import { Image, Platform, SafeAreaView, View } from "react-native";
import { getQuestsOfflineTheme } from "@redux/theme/theme.selectors";
import { IConnectedScreenProps } from "../../../../../typings";
import assets from "./assets";
import styles from "./quests-offline.styles";
import { IReduxState } from "@redux/_core/reducers";
import { connect } from "react-redux";
import { NavBar } from "@components/organisms";

export type ConnectedState = ReturnType<typeof mapStateToProps>;

type Props = IConnectedScreenProps &
  ConnectedState & {
    fitkitAvailable: boolean;
  };

type ImageType = "forest" | "ocean" | "desert" | "mountain";

function QuestsScreenOffline({ fitkitAvailable, onLeftMenuPress, totalCoins, questsOfflineTheme: { image } }: Props) {
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
      <NavBar activeIndex={1} />
    </SafeAreaView>
  );
}

const mapStateToProps = (state: IReduxState) => ({
  questsOfflineTheme: getQuestsOfflineTheme(state),
});

export default connect(mapStateToProps)(QuestsScreenOffline);
