import * as React from "react";
import { SFC } from "react";
import { StyleSheet, View } from "react-native";
import { Button, CentredScreen, Heading, Pad, Text } from "../../../atoms";
import styles from "./feedback.styles";
import StarRating from "./star-rating";

interface IProps {
  isSubmitting: boolean;
  onCancel: () => void;
  onRatingSelect: (rating: number) => void;
  onSubmit: () => void;
  rating: number;
}

const FeedbackScreen: SFC<IProps> = ({ isSubmitting, onCancel, onRatingSelect, onSubmit, rating }) => (
  <View style={StyleSheet.absoluteFill}>
    <CentredScreen style={styles.centredScreen} footerImage="forest">
      <Heading size="large" label="feedback" />
      <Text>let us know what you think</Text>
      <Pad height={42} />
      <StarRating onSelect={onRatingSelect} rating={rating} />
      <Pad height={22} />
      <Button
        isLoading={isSubmitting}
        disabled={isSubmitting}
        type="Primary"
        size="Small"
        label={isSubmitting ? "submitting" : "send"}
        onPress={onSubmit}
      />
      <Button type="Link" label="not now" onPress={onCancel} />
    </CentredScreen>
  </View>
);

export default FeedbackScreen;
