import React, { useContext } from "react";
import { View } from "react-native";
import { Text, Button } from "@atoms";
import { captionStyle } from "./styles";
import { GetMobileCopy_getMobileCopy_screens_leaderboards_turnBoardOn } from "@graphql/_core/schema";
import { ActiveLeaderboardLoadingContext } from "../active-leaderboard.context";
import { NetworkStatus } from "apollo-client";

interface Props {
  copy: GetMobileCopy_getMobileCopy_screens_leaderboards_turnBoardOn;
  setConsent: () => void;
}

export function Caption(props: Props) {
  const {
    setConsent,
    copy: { heading = "Turn board on", subheading = "", ctaLabel = "allow" },
  } = props;

  const networkStatus = useContext(ActiveLeaderboardLoadingContext);
  const loading = networkStatus === NetworkStatus.loading;

  return (
    <View style={captionStyle.wrapper}>
      <Text style={captionStyle.heading} bold={true}>
        {heading}
      </Text>
      <Text style={captionStyle.subheading}>{subheading}</Text>
      <Button
        wrapperStyle={captionStyle.button}
        isLoading={loading}
        disabled={loading}
        label={ctaLabel}
        onPress={setConsent}
        type="Primary"
      />
    </View>
  );
}
