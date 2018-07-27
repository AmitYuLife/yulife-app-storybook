import * as React from "react";
import { PureComponent } from "react";
import {
    Image,
    SafeAreaView,
    StyleSheet,
    View,
    ViewStyle,
} from "react-native";
import { getImage, getImageStyle } from "./centred-screen.helpers";
import styles from "./centred-screen.styles";

interface IProps {
    footerImage?: Images;
    style?: ViewStyle;
}

export enum IMAGES {
    FOREST = "forest",
    LARGE_FOREST = "large_forest",
}

type Images = "forest" | "large_forest";

class CenteredScreen extends PureComponent<IProps> {

    public static FooterImages = IMAGES;

    public render() {
        const { footerImage, children, style } = this.props;

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
