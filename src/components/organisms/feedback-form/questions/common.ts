import { StyleSheet } from "react-native";
import { Style } from "@styles";

export const styles = StyleSheet.create({
  content: {
    width: Style.DEVICE_WIDTH,
    justifyContent: "flex-start",
    position: "relative",
    height: 320,
    paddingHorizontal: Style.adjust(32),
  },
  image: {
    marginBottom: Style.adjust(23),
  },
  multipleChoice: {
    marginBottom: Style.adjust(40),
  },
  yugiHeader: {
    paddingStart: Style.adjust(32),
    width: "100%",
    marginBottom: Style.adjust(40),
  },
});

export interface QuestionProps {
  heading?: string;
  image?: string;
  questionText: string;
  description?: string;
  icon?: string;
  submitLabel?: string;
  defaultAnswer?: string;
  onSubmitAnswer: (answer?: string | string[]) => void;
  onDismiss: () => void;
  onBack?: () => void;
}
