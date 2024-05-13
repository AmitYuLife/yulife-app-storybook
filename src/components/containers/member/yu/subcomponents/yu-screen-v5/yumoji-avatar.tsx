import { FC } from "react";
import { View } from "react-native";
import { YUMOJI_YUSCREEN_V5 } from "@ids";
import { navigateToYumojiBuilder } from "../../navigation/navigateToYumojiBuilder";
import { Style } from "@styles";
import { TouchableOpacityWithDelay, Yumoji } from "@components/molecules";
import { CreateYumojiPrompt } from "../create-yumoji-prompt/create-yumoji-prompt";

interface YumojiAvatarProps {
  uri?: string;
  yumojiPrompt?: {
    buttonText: string;
    heading: string;
    text: string;
  };
}

const SIZE_MULTIPLIER = Style.DEVICE_WIDTH / 375;
const AVATAR_WIDTH = SIZE_MULTIPLIER * 145;
const AVATAR_HEIGHT = SIZE_MULTIPLIER * 300;

export const YumojiAvatar: FC<YumojiAvatarProps> = ({ uri, yumojiPrompt }) => {
  const YumojiWrapper = uri ? TouchableOpacityWithDelay : View;

  return (
    <View testID={YUMOJI_YUSCREEN_V5}>
      <YumojiWrapper onPress={uri ? navigateToYumojiBuilder : null}>
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
      {!uri && yumojiPrompt ? <CreateYumojiPrompt yumojiPrompt={yumojiPrompt} /> : null}
    </View>
  );
};
