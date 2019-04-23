import React, { SFC } from "react";
import {
    Image,
    ImageRequireSource,
    NativeScrollEvent,
    NativeSyntheticEvent,
    SafeAreaView,
    ScrollView,
    TouchableOpacity,
    View
} from "react-native";
import { Back, Button, Text } from "../../../atoms";
import styles from "./meditation-set-up.styles";

interface IScreen {
    heading: string;
    subheading: string;
    backgroundImage: ImageRequireSource;
}

interface IProps {
    onPressBack: () => void;
    onPressClose: () => void;
    onPressCta: () => void;
    onMomentumScrollEnd: (event: NativeSyntheticEvent<NativeScrollEvent>) => void;
    ctaLabel: string;
    scrollViewRef: (ref: ScrollView) => void;
    screens: IScreen[];
}

const MeditationSetUp: SFC<IProps> = ({
    onPressBack,
    onPressClose,
    onPressCta,
    onMomentumScrollEnd,
    ctaLabel,
    screens,
    scrollViewRef
}) => (
    <SafeAreaView style={styles.wrapper}>
        <ScrollView
            style={styles.scrollView}
            ref={scrollViewRef}
            onMomentumScrollEnd={onMomentumScrollEnd}
            showsHorizontalScrollIndicator={false}
            pagingEnabled={true}
            horizontal={true}
        >
            {screens.map(({ heading, subheading, backgroundImage }, index) => (
                <View key={index} style={styles.screenWrapper}>
                    <View style={styles.backgroundImageWrapper}>
                        <Image resizeMode="cover" style={styles.backgroundImage} source={backgroundImage} />
                    </View>
                    <View style={styles.headingWrapper}>
                        <Text style={styles.heading} bold={true}>
                            {heading || "1. download calm"}
                        </Text>
                    </View>
                    <View style={styles.subheadingWrapper}>
                        <Text style={styles.subheading}>
                            {subheading || "First, download Calm and tap profile icon"}
                        </Text>
                    </View>
                </View>
            ))}
        </ScrollView>
        <View style={styles.topBar}>
            <TouchableOpacity onPress={onPressBack} style={styles.backWrapper}>
                <Back />
            </TouchableOpacity>
            <TouchableOpacity onPress={onPressClose} style={styles.closeWrapper}>
                <Image source={require("../../../../../assets/icons/close.png")} />
            </TouchableOpacity>
        </View>
        <View style={styles.ctaWrapper}>
            <Button onPress={onPressCta} type={Button.Types.PRIMARY} label={ctaLabel || "next"} />
        </View>
    </SafeAreaView>
);

export default MeditationSetUp;
