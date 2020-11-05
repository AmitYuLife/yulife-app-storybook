import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { IFeedbackFormData } from "./fib.feedback-form.data";
import FeedbackTextInput from "./feedback-text-input";
import RadioInput from "./radio-input";
import { Text } from "@atoms";

interface Props {
  data: IFeedbackFormData;
  value: string;
  updateFormState: (id: string, val: string) => void;
  onTextInputFocus: (y: number) => void;
}

export function FeedbackInputWrapper(props: Props) {
  const { data, value, updateFormState, onTextInputFocus } = props;
  const [position, setPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  return (
    <View onLayout={(layout) => setPosition(layout.nativeEvent.layout)} style={styles.inputWrapper}>
      <View style={styles.innerWrapper}>
        <Text bold={true} style={styles.title}>
          {data.title}
        </Text>
        {data.type === "text" ? (
          <FeedbackTextInput
            handleChangeText={(val) => updateFormState(data.id, val)}
            textValue={value}
            onFocus={() => {
              return onTextInputFocus(position.y);
            }}
          />
        ) : (
          <RadioInput selectedValue={value} options={data.options} onChange={(val) => updateFormState(data.id, val)} />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  innerWrapper: {
    width: "90%",
  },
  title: {
    paddingBottom: 24,
  },
  inputWrapper: {
    width: "100%",
    backgroundColor: "white",
    alignItems: "center",
    marginVertical: 8,
    paddingVertical: 28,
  },
});
