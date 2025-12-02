import { View } from "react-native";
import { NudgeItem } from "../nudge-item";
import { INudgeItem } from "./types";

export const renderItem = ({ item }: INudgeItem) => {
  switch (item.type) {
    case "NUDGE":
      return <NudgeItem {...item.payload} />;
    case "PAD":
    default:
      return <View style={{ width: item.payload }} />;
  }
};
