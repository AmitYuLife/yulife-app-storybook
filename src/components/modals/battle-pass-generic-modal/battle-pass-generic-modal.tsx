import React, { memo } from "react";
import { View } from "react-native";
import { TextTemplate } from "@atoms";
import { Style, StyleSheet } from "@styles";

interface IProps {
  title: string;
  description: string;
}

const BattlePassGenericModal = ({ title, description }: IProps) => (
  <View>
    <TextTemplate textAlign="center" type="h1">
      {title}
    </TextTemplate>
    <View style={styles.description}>
      <TextTemplate textAlign="center" type="b1">
        {description}
      </TextTemplate>
    </View>
  </View>
);

const styles = StyleSheet.create({
  description: {
    marginHorizontal: Style.adjust(30),
    marginTop: Style.adjust(20),
  },
});

export default memo(BattlePassGenericModal);
