import React from "react";
import { View } from "react-native";
import { Text, Button } from "@atoms";
import { captionStyle } from "./styles";
import { GetMobileCopy_getMobileCopy_screens_leaderboards_turnBoardOn } from "@graphql/_core/schema";

interface Props {
  copy?: GetMobileCopy_getMobileCopy_screens_leaderboards_turnBoardOn;
  setConsent: () => void;
}

const defaultCopy = { heading: "Turn board on", subheading: "", ctaLabel: "allow" };

export function Caption(props: Props) {
  const { setConsent, copy = defaultCopy } = props;
  const { heading, subheading = "", ctaLabel } = copy;

  return (
    <View style={captionStyle.wrapper}>
      <Text style={captionStyle.heading} bold={true}>
        {heading}
      </Text>
      {subheading.split("\n").map((segment, i) => (
        <Text key={i} style={captionStyle.subheading}>
          {segment}
        </Text>
      ))}
      <Button wrapperStyle={captionStyle.button} label={ctaLabel} onPress={setConsent} type="Primary" />
    </View>
  );
}
