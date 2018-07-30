import React, { PureComponent } from "react";
import {
    Image,
    SafeAreaView,
    StyleSheet,
    View,
    ViewStyle,
} from "react-native";
import {
    getImage,
    getImageStyle,
} from "./centred-screen.helpers";
import styles from "./centred-screen.styles";

interface IProps {
    footerImage?: Images;
    style?: ViewStyle;
}

export enum IMAGES {
    FOREST = "forest",
    LARGE_FOREST = "large_forest",
    MOUNTAINS = "mountains",
}

type Images = "forest" | "large_forest" | "mountains";

class CenteredScreen extends PureComponent<IProps> {

    public static FooterImages = IMAGES;

    public render() {
        const { children, footerImage, style } = this.props;

        return (
            <SafeAreaView
                style={StyleSheet.flatten([
                    styles.wrapper,
                    style,
                ])}
            >
                {!footerImage ? null : (
                    <View style={styles.imageWrapper}>
                        <Image
                            resizeMode="cover"
                            style={getImageStyle(
                                footerImage
                            )}
                            source={getImage(footerImage)}
                        />
                    </View>
                )}
                {children}
            </SafeAreaView>
        );
    }
}

export default CenteredScreen;
