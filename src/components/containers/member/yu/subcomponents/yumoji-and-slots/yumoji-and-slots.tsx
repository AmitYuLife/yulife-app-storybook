import React, { useContext, FC, memo } from "react";
import { View } from "react-native";
import { YuScreenContext } from "../../context/yu-screen.context";
import { YuCoinPower } from "../yu-coin-power/yu-coin-power";
import { ItemSlot } from "../item-slot/item-slot";
import {
  GetYuScreen_getYuScreen_productSlots as ProductSlots,
  VariableRemoteImage,
  GetYuScreen_getYuScreen_yumojiPrompt as YumojiPrompt,
} from "@graphql/_core/schema";
import { styles } from "./yumoji-and-slots.styles";
import { YumojiAvatar } from "./yumoji-avatar";
import { SpanningProductSlot } from "./spanning-product-slot";

interface Props {
  productSlots: Array<ProductSlots>;
  yumojiPrompt: YumojiPrompt;
  spanningProductSlot: {
    heading?: string;
    images: VariableRemoteImage[];
  };
}

export const YumojiAndSlots: FC<Props> = memo(({ productSlots, yumojiPrompt, spanningProductSlot }) => {
  const { yumojiRemoteUrl } = useContext(YuScreenContext);

  return (
    <View style={styles.wrapper}>
      <YumojiAvatar uri={yumojiRemoteUrl} yumojiPrompt={yumojiPrompt} />
      <View style={styles.slotsWrapper}>
        <YuCoinPower />
        {productSlots.map((props) => (
          <ItemSlot key={props.id} {...props} />
        ))}
        <SpanningProductSlot spanningProductSlot={spanningProductSlot} />
      </View>
    </View>
  );
});
