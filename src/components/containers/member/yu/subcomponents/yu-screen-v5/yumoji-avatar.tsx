import React, { useContext, FC, memo } from "react";
import { View } from "react-native";
import { YuScreenContext } from "../../context/yu-screen.context";
import { TouchableOpacityWithDelay, Yumoji } from "@components/molecules";
import { navigateToYumojiBuilder } from "../../navigation/navigateToYumojiBuilder";
import { AVATAR_HEIGHT, AVATAR_WIDTH, styles } from "./yu-screen.styles";

export const YumojiAvatar: FC = memo(() => {
  const { yumojiRemoteUrl: uri } = useContext(YuScreenContext);

  return (
    <View style={styles.yumojiWrapper}>
      <TouchableOpacityWithDelay onPress={navigateToYumojiBuilder}>
        <Yumoji
          emptyHeight={AVATAR_HEIGHT}
          emptyWidth={AVATAR_WIDTH}
          width={AVATAR_WIDTH}
          height={AVATAR_HEIGHT}
          testID="YUMOJI_EQUIPMENT"
          theme={"dark"}
          uri={uri}
        />
      </TouchableOpacityWithDelay>
    </View>
  );
});
