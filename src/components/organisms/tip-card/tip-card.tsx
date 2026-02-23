import { Box, Image, TextTemplate } from "@atoms";
import { StyleProp, ViewStyle } from "react-native";
import { Colours, Style } from "@styles";
import { styles, TIP_CARD_ICON_SIZE, TIP_CARD_WIDTH } from "./tip-card.styles";
import { Image as ImageType } from "@redux/_core/types";
import { SMOKING_TIP } from "@ids";

type TipCardParams = {
  id: string;
  title?: string;
  description?: string;
  icon?: ImageType;
  cardStyle?: StyleProp<ViewStyle>;
};

export const TipCard = ({ id, title, description, icon, cardStyle }: TipCardParams) => {
  return (
    <Box
      key={id}
      w={TIP_CARD_WIDTH}
      p={Style.adjust(16)}
      withBorder={Colours.neutral.n150}
      br={8}
      style={cardStyle}
      disableAutoAdjust={true}
    >
      <Box flexDirection="row" alignItems="center" gap={16}>
        <Box gap={8} flexShrink={1} testID={SMOKING_TIP(id)}>
          {!title ? null : (
            <TextTemplate type="b2b" color={Colours.darkPink}>
              {title}
            </TextTemplate>
          )}
          {!description ? null : <TextTemplate type="l2">{description}</TextTemplate>}
        </Box>
        {!icon ? null : (
          <Image source={icon} suppressLoadingUi={true} width={TIP_CARD_ICON_SIZE} height={TIP_CARD_ICON_SIZE} />
        )}
      </Box>
    </Box>
  );
};

export const TipCardItem = ({ item }: { item: TipCardParams }) => <TipCard {...item} />;

export const TipCardSeparator = () => <Box style={styles.separator} />;
