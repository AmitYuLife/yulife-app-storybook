import React, { useMemo } from "react";
import { View } from "react-native";
import { TextTemplate } from "@atoms";
import { Button } from "@molecules";
import { captionStyle, SUBHEADING_COLOR } from "./styles";
import { t } from "@locale";

interface Props {
  setConsent: () => void;
}

export function Caption(props: Props) {
  const { setConsent } = props;

  const paragraphs = useMemo(() => {
    return t("screens.leaderboard.turn_board_on.subheading")
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
            <Button
              key={"button_id"}
              wrapperStyle={captionStyle.button}
              label={t("screens.leaderboard.turn_board_on.ctaLabel")}
              onPress={setConsent}
            />
          );
        }

        return list;
      }, []);
  }, [setConsent]);
  return (
    <View style={captionStyle.wrapper}>
      <TextTemplate textAlign="center" type="h1" color={captionStyle.heading.color}>
        {t("screens.leaderboard.turn_board_on.heading")}
      </TextTemplate>
      {paragraphs}
    </View>
  );
}
