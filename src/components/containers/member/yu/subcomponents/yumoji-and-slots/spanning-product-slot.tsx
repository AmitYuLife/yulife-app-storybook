import { Image, TextTemplate } from "@atoms";
import { SPONSOR_LOGO_IMAGE } from "@ids";
import { View } from "react-native";
import { styles } from "./yumoji-and-slots.styles";
import { VariableRemoteImage } from "@graphql/__generated";

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
          <View
            key={item.image.id}
            style={styles.spanningProductSlotImageWrapper}
            testID={SPONSOR_LOGO_IMAGE(item.image.uri)}
          >
            <Image source={{ uri: item.image.uri }} width={item.width} />
          </View>
        ))}
      </View>
    </View>
  );
};
