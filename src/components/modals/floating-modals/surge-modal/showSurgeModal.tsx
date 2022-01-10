import React from "react";
import { StyleSheet, View } from "react-native";
import { TextTemplate } from "@atoms";
import { Style } from "@styles";
import { showFloatingModal } from "../showFloatingModal";
import { ContentItemLottie as GqlLottie } from "@graphql/_core/schema";

interface Iprops {
  lottie: GqlLottie;
  title: string;
  description: string;
  description2: string;
  multiplier: string;
  remainingDays: string;
}

export function showSurgeModal({ lottie, title, description, description2, multiplier, remainingDays }: Iprops) {
  const childrenElement = (
    <View style={styles.contentWrapper}>
      <TextTemplate type={"h2"}>{title}</TextTemplate>
      <View style={styles.separator} />
      <TextTemplate type={"b2"} textAlign={"center"}>
        <>
          {description}
          <TextTemplate type={"b2b"} color={"#956AFF"}>
            {multiplier}
          </TextTemplate>
          {description2}
          <TextTemplate type={"b2b"} color={"#956AFF"}>
            {remainingDays}
          </TextTemplate>
        </>
      </TextTemplate>
    </View>
  );
  return showFloatingModal(childrenElement, lottie);
}

const styles = StyleSheet.create({
  contentWrapper: {
    alignItems: "center",
    paddingHorizontal: Style.adjust(38),
  },
  separator: {
    marginTop: Style.adjust(15),
  },
});
