import * as React from "react";
import { SFC } from "react";
import { Image, ImageStyle, Platform, SafeAreaView, TouchableOpacity, View } from "react-native";
import AutoHeightImage from "react-native-auto-height-image";
import { GetCurrentWorld_getCurrentWorld } from "../../../../../graphql/_core/schema";
import { IConnectedScreenProps } from "../../../../../typings";
import { Button, Text } from "../../../../atoms";
import { getSlotDuration } from "../../../../containers/member/quests/challenges-list/challenges-list.helpers";
import { NavBar, TopBar } from "../../../../molecules";
import ChallengesBackground from "../challenges-background/challenges-background";
import ChallengesHistorySlot from "./challenges-history-slot";
import {
    getImage,
    getImageStyle,
    getImageWidth
} from "./challenges-history.helpers";
import styles from "./challenges-history.screen.styles";

interface IProps extends IConnectedScreenProps {
    level: GetCurrentWorld_getCurrentWorld;
    onPressActivityHistory: () => void;
    onPressCta: () => void;
}

const ChallengesHistory: SFC<IProps> = ({
    level,
    onPressActivityHistory,
    onPressCta,
    totalCoins,
    labels,
    onLeftMenuPress
}) => (
        <SafeAreaView style={styles.wrapper}>
            <SafeAreaView style={styles.backgroundWrapper}>
                {Platform.OS === "ios" ? (
                    <ChallengesBackground />
                ) : (
                        <Image
                            resizeMethod="scale"
                            resizeMode="contain"
                            source={require("../../../../../../assets/challenges/challenges-background.png")}
                            style={styles.background}
                        />
                    )}
            </SafeAreaView>
            <TopBar
                leftIcon="Back"
                menuLabel="map"
                name={`level ${level.level}`}
                coins={totalCoins}
                onPressLeftIcon={onLeftMenuPress}
            />
            <View style={styles.challengeSetWrapper}>
                {level.slots.map((slot) => (
                    <ChallengesHistorySlot
                        key={slot.id}
                        availableAtLevel={slot.availableAtLevel}
                        duration={getSlotDuration(slot)}
                        type={slot.subtype}
                        reward={slot.yuCoinAwarded}
                        rating={slot.rating}
                        locked={slot.availableAtLevel > level.level}
                    />
                ))}
            </View>
            <View style={styles.imagesWrapper}>
                {level.slots.map(({ subtype }, index) => (
                    <AutoHeightImage
                        key={index}
                        style={getImageStyle(subtype) as ImageStyle}
                        source={getImage(subtype)}
                        width={getImageWidth(subtype)}
                    />
                ))}
            </View>
            <View style={styles.buttonsWrapper}>
                <Button
                    type={Button.Types.PRIMARY}
                    onPress={onPressCta}
                    label="back"
                />
                <TouchableOpacity
                    onPress={onPressActivityHistory}
                >
                    <Text style={styles.historyLink}>full history</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.navBarWrapper}>
                <NavBar
                    activeIndex={1}
                    hasNotification={false}
                    labels={labels}
                />
            </View>
        </SafeAreaView>
    );

export default ChallengesHistory;
