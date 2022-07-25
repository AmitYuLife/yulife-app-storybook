import React, { useContext, FC, memo, useCallback, useMemo } from "react";
import { View } from "react-native";
import { TouchableOpacityWithDelay, Yumoji } from "@components/molecules";
import { YuScreenContext } from "../../context/yu-screen.context";
import { navigateToYumojiBuilder } from "../../navigation/navigateToYumojiBuilder";
import { YuCoinPower } from "../yu-coin-power/yu-coin-power";
import { ItemSlot } from "../item-slot/item-slot";
import { GetYuScreen_getYuScreen as GetYuScreen } from "@graphql/_core/schema";
import { AVATAR_HEIGHT, AVATAR_WIDTH, styles } from "./styles";
import { CreateYumojiPrompt } from "../create-yumoji-prompt/create-yumoji-prompt";

interface Props {
  productSlots: GetYuScreen["productSlots"];
}

export const YumojiAndSlots: FC<Props> = memo(({ productSlots }) => {
  const { yumojiRemoteUrl } = useContext(YuScreenContext);

  return (
    <View style={styles.wrapper}>
      <YumojiAvatar uri={yumojiRemoteUrl} />
      <SlotsWrapper>
        <YuCoinPower />
        {productSlots.map((props) => (
          <ItemSlot key={props.id} {...props} />
        ))}
      </SlotsWrapper>
    </View>
  );
});

const SlotsWrapper: FC = ({ children }) => <View style={styles.slotsWrapper}>{children}</View>;

const YumojiAvatar = ({ uri }: { uri?: string }) => {
  const editYumoji = useCallback(() => navigateToYumojiBuilder({ heading: "Edit your Yumoji" }), []);

  const YumojiWrapper = useMemo(() => (uri ? TouchableOpacityWithDelay : View), [uri]);

  return (
    <View style={styles.yumojiWrapper}>
      <YumojiWrapper onPress={uri ? editYumoji : null}>
        <Yumoji
          emptyHeight={AVATAR_HEIGHT}
          emptyWidth={AVATAR_WIDTH}
          width={AVATAR_WIDTH}
          height={AVATAR_HEIGHT}
          testID="YUMOJI_EQUIPMENT"
          theme={"dark"}
          uri={uri}
        />
      </YumojiWrapper>
      {!uri ? <CreateYumojiPrompt /> : null}
    </View>
  );
};
