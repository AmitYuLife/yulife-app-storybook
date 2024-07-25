import { FC, memo } from "react";
import { View } from "react-native";
import { YUMOJI_YUSCREEN_V5 } from "@ids";
import { navigateToYumojiBuilder } from "../../navigation/navigateToYumojiBuilder";
import { Style } from "@styles";
import { TouchableOpacityWithDelay, Yumoji } from "@components/molecules";
import { YUMOJI_EQUIPMENT } from "@ids";

interface YumojiAvatarProps {
  uri: string;
}

const SIZE_MULTIPLIER = Style.DEVICE_WIDTH / 375;
const AVATAR_WIDTH = SIZE_MULTIPLIER * 145;
const AVATAR_HEIGHT = SIZE_MULTIPLIER * 300;

export const YumojiAvatar: FC<YumojiAvatarProps> = memo(({ uri }) => (
  <View testID={YUMOJI_YUSCREEN_V5}>
    <TouchableOpacityWithDelay onPress={navigateToYumojiBuilder}>
      <Yumoji
        emptyHeight={AVATAR_HEIGHT}
        emptyWidth={AVATAR_WIDTH}
        width={AVATAR_WIDTH}
        height={AVATAR_HEIGHT}
        testID={YUMOJI_EQUIPMENT}
        theme={"dark"}
        uri={uri}
        suppressLoadingUi={true}
      />
    </TouchableOpacityWithDelay>
  </View>
));
