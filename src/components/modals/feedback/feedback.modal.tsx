import * as React from "react";
import { SFC } from "react";
import { StyleSheet, View } from "react-native";
import {
    Button,
    CentredScreen,
    Heading,
    Pad
} from "../../atoms";
import { Text } from "../../atoms";
import styles from "./feedback.modal.styles";
import StarRating from "./star-rating";

interface IProps {
    isSubmitting: boolean;
    onCancel: () => void;
    onRatingSelect: (rating: number) => void;
    onSubmit: () => void;
    rating: number;
}

const FeedbackModal: SFC<IProps> = ({ isSubmitting, onCancel, onRatingSelect, onSubmit, rating }) => (
    <View style={StyleSheet.absoluteFill}>
        <CentredScreen style={styles.centredScreen} footerImage="forest">
            <Heading
                size={Heading.Sizes.LARGE}
                label="feedback"
            />
            <Text>let us know what you think</Text>
            <Pad height={42} />
            <StarRating
                onSelect={onRatingSelect}
                rating={rating}
            />
            <Pad height={22} />
            <Button
                disabled={isSubmitting}
                type={Button.Types.PRIMARY_SMALL}
                label={isSubmitting ? "submitting" : "send"}
                onPress={onSubmit}
            />
            <Button
                type={Button.Types.LINK}
                label="not now"
                onPress={onCancel}
            />
        </CentredScreen>
    </View>
);

export default FeedbackModal;
