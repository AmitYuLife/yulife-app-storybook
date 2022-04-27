import React, { useMemo } from "react";
import { View } from "react-native";
import { TextTemplate } from "@atoms";
import { Button } from "@molecules";
import { captionStyle, SUBHEADING_COLOR } from "./styles";
import { GetMobileCopy_getMobileCopy_screens_leaderboards_turnBoardOn } from "@graphql/_core/schema";

interface Props {
  copy?: GetMobileCopy_getMobileCopy_screens_leaderboards_turnBoardOn;
  setConsent: () => void;
}

const defaultCopy = { heading: "Turn board on", subheading: "", ctaLabel: "allow" };

export function Caption(props: Props) {
  const { setConsent, copy = defaultCopy } = props;
  const { heading, subheading = "", ctaLabel } = copy;

  const paragraphs = useMemo(() => {
    return subheading
      .split("\n")
      .filter((segment) => !!segment)
      .reduce((list, segment, position) => {
        list.push(
          <View key={position} style={captionStyle.subheading}>
            <TextTemplate textAlign="center" type={"b2"} color={SUBHEADING_COLOR}>
              {segment}
            </TextTemplate>
          </View>
        );
        if (position === 0) {
          list.push(
            <Button key={"button_id"} wrapperStyle={captionStyle.button} label={ctaLabel} onPress={setConsent} />
          );
        }

        return list;
      }, []);
  }, [ctaLabel, setConsent, subheading]);
  return (
    <View style={captionStyle.wrapper}>
      <TextTemplate textAlign="center" type="h1" color={captionStyle.heading.color}>
        {heading}
      </TextTemplate>
      {paragraphs}
    </View>
  );
}
