import { Button, Text } from "@atoms/index";
import { getSlotDuration } from "@containers/member/quests/challenges-list/challenges-list.helpers";
import { GetCurrentWorld_getCurrentWorld } from "@graphql/_core/schema";
import { NavBar, TopBar } from "@molecules/index";
import { getCurrentWorld } from "@services/utils";
import * as React from "react";
import { Image, SafeAreaView, StyleSheet, TouchableOpacity, View } from "react-native";
import AutoHeightImage from "react-native-auto-height-image";
import { IConnectedScreenProps } from "../../../../../typings";
import ChallengesHistorySlot from "./challenges-history-slot";
import { getSlotImageProps } from "./challenges-history.helpers";
import styles from "./challenges-history.screen.styles";

interface IProps extends IConnectedScreenProps {
    level: GetCurrentWorld_getCurrentWorld;
    onPressActivityHistory: () => void;
    onPressCta: () => void;
}

export default function ChallengesHistory({
    level,
    onPressActivityHistory,
    onPressCta,
    totalCoins,
    labels,
    onLeftMenuPress
}: IProps) {
    const { backgroundWrapperStyle, backgroundImage, historyLinkColor, navBarType, topBarType } = getWorldStyle(
        level.level
    ) as any;

    return (
        <SafeAreaView style={styles.wrapper}>
            <SafeAreaView style={backgroundWrapperStyle}>
                <Image resizeMode="cover" style={styles.background} source={backgroundImage} />
            </SafeAreaView>
            <TopBar
                leftIcon="Back"
                menuLabel="map"
                name={`level ${level.level}`}
                coins={totalCoins}
                onPressLeftIcon={onLeftMenuPress}
                type={topBarType}
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
                    <AutoHeightImage key={index} {...getSlotImageProps(subtype, getCurrentWorld(level.level))} />
                ))}
            </View>
            <View style={styles.buttonsWrapper}>
                <Button type={Button.Types.PRIMARY} onPress={onPressCta} label="back" />
                <TouchableOpacity onPress={onPressActivityHistory}>
                    <Text style={StyleSheet.flatten([styles.historyLink, { color: historyLinkColor }])}>
                        full history
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.navBarWrapper}>
                <NavBar activeIndex={1} colour={navBarType} hasNotification={false} labels={labels} />
            </View>
        </SafeAreaView>
    );
}

function getWorldStyle(currentLevel: number) {
    switch (getCurrentWorld(currentLevel)) {
        case 3:
            return {
                backgroundImage: require("../../../../../../assets/challenges/mountain.png"),
                backgroundWrapperStyle: StyleSheet.flatten([
                    StyleSheet.absoluteFillObject,
                    { backgroundColor: "rgb(59,123,209)" }
                ]),
                historyLinkColor: "rgba(255, 255, 255, 1)",
                navBarType: NavBar.Colours.LIGHT,
                topBarType: "mountain"
            };
        case 2:
            return {
                backgroundImage: require("../../../../../../assets/challenges/desert.png"),
                backgroundWrapperStyle: StyleSheet.flatten([
                    StyleSheet.absoluteFillObject,
                    { backgroundColor: "rgb(254,251,205)" }
                ]),
                historyLinkColor: "rgba(226, 1, 119, 1)",
                navBarType: NavBar.Colours.DESERT,
                topBarType: "desert"
            };
        case 1:
            return {
                backgroundImage: require("../../../../../../assets/challenges/ocean.png"),
                backgroundWrapperStyle: StyleSheet.flatten([
                    StyleSheet.absoluteFillObject,
                    { backgroundColor: "rgb(87,155,193)" }
                ]),
                historyLinkColor: "white",
                navBarType: NavBar.Colours.LIGHT,
                topBarType: "white"
            };
        case 0:
        default:
            return {
                backgroundImage: require("../../../../../../assets/challenges/forest.png"),
                backgroundWrapperStyle: StyleSheet.flatten([
                    StyleSheet.absoluteFillObject,
                    { backgroundColor: "rgb(154, 231, 216)" }
                ]),
                historyLinkColor: "rgba(226, 1, 119, 1)",
                navBarType: NavBar.Colours.LIGHT,
                topBarType: "default"
            };
    }
}
