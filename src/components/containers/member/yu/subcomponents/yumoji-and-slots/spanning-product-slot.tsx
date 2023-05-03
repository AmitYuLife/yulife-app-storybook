import { Image, TextTemplate } from "@atoms";
import { VariableRemoteImage } from "@graphql/_core/schema";
import { View } from "react-native";
import { styles } from "./yumoji-and-slots.styles";

interface Props {
  spanningProductSlot?: {
    images?: VariableRemoteImage[];
    heading?: string;
  };
}

export const SpanningProductSlot = ({ spanningProductSlot }: Props) => {
  if (!spanningProductSlot?.images?.length) {
    return null;
  }

  return (
    <View style={styles.slotsFlexFiller}>
      <View style={styles.slotFlexFillerInner}>
        {!spanningProductSlot.heading ? null : (
          <TextTemplate textAlign="center" type="b2b">
            {spanningProductSlot.heading}
          </TextTemplate>
        )}
        {spanningProductSlot.images.map((item) => (
          <View key={item.image.id} style={styles.spanningProductSlotImageWrapper}>
            <Image source={{ uri: item.image.uri }} width={item.width} />
          </View>
        ))}
      </View>
    </View>
  );
};
