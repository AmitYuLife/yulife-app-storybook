import { FC } from "react";
import { View } from "react-native";
import { AVATAR_HEIGHT, AVATAR_WIDTH, styles } from "./yumoji-and-slots.styles";
import { CreateYumojiPrompt } from "../create-yumoji-prompt/create-yumoji-prompt";
import { YUMOJI_AVATAR_YUSCREEN_V4 } from "@ids";
import { navigateToYumojiBuilder } from "../../navigation/navigateToYumojiBuilder";
import { TouchableOpacityWithDelay, Yumoji } from "@components/molecules";
import { GetYuScreenQuery } from "@graphql/__generated";

type YumojiPrompt = GetYuScreenQuery["getYuScreen"]["yumojiPrompt"];

interface YumojiAvatarProps {
  uri?: string;
  yumojiPrompt: YumojiPrompt;
}
export const YumojiAvatar: FC<YumojiAvatarProps> = ({ uri, yumojiPrompt }) => {
  const { buttonText, heading, text } = yumojiPrompt;

  const YumojiWrapper = uri ? TouchableOpacityWithDelay : View;

  return (
    <View style={styles.yumojiWrapper} testID={YUMOJI_AVATAR_YUSCREEN_V4}>
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
      {!uri ? <CreateYumojiPrompt buttonText={buttonText} heading={heading} text={text} /> : null}
    </View>
  );
};
