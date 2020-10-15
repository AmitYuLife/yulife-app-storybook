import { StyleSheet } from "react-native";
import { Style } from "@styles";

export const styles = StyleSheet.create({
  content: {
    width: Style.DEVICE_WIDTH,
    justifyContent: "flex-start",
    position: "relative",
    height: 320,
    paddingHorizontal: 35,
  },
  heading: {
    textAlign: "left",
    width: "75%",
    lineHeight: Style.adjust(36),
  },
  inputWrapper: {
    marginTop: 40,
  },
  yugiWrapper: {
    position: "absolute",
    right: 0,
    top: 0,
  },
});

export interface QuestionProps {
  heading?: string;
  questionText: string;
  submitLabel?: string;
  defaultAnswer?: string;
  onSubmitAnswer: (answer?: string) => void;
  onDismiss: () => void;
  onBack?: () => void;
}
