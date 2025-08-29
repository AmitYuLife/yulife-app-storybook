import { memo } from "react";
import { View } from "react-native";
import { Style, StyleSheet } from "@styles";
import { TipCard } from "@organisms";
import { Image } from "@redux/_core/types";

type Props = {
  id: string;
  title?: string;
  description?: string;
  image?: Image;
};

export const ItemDetailsTipCard = memo(({ id, title, description, image }: Props) => {
  return (
    <View style={styles.container}>
      <TipCard id={id} title={title} description={description} icon={image} cardStyle={styles.cardStyle} />
    </View>
  );
});

const ITEM_WIDTH = Style.DEVICE_WIDTH * 0.8;
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginBottom: Style.adjust(15),
  },
  cardStyle: {
    width: ITEM_WIDTH,
  },
});
