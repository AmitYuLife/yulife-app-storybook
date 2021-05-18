import React from "react";
import { StyleSheet, View, TextStyle, ViewStyle } from "react-native";
import { TextTemplate } from "@atoms";
import { Style } from "@styles";
import { InfoCard } from "@components/molecules";

interface Card {
  icon: React.ReactNode;
  description: string;
}
interface IProps {
  title: string;
  cards: Card[];
}

export const CopyIntro = ({ title, cards }: IProps) => {
  return (
    <View>
      <TextTemplate type="h2">{title}</TextTemplate>
      <View style={styles.paragraphWrapper}>
        {cards.map((card, index) => (
          <View key={index} style={styles.infoCardWrapper}>
            <InfoCard icon={card.icon} description={card.description} />
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  paragraphWrapper: {
    marginTop: Style.adjust(24),
  } as TextStyle,
  infoCardWrapper: {
    marginBottom: Style.adjust(16),
  } as ViewStyle,
});
