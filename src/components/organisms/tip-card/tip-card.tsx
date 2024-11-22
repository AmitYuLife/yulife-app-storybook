import { Box, Image, TextTemplate } from "@atoms";
import { ViewStyle } from "react-native";
import { Style } from "@styles";
import { StyleProp } from "react-native/Libraries/StyleSheet/StyleSheet";
import { styles } from "./tip-card.styles";
import { Image as ImageType } from "@redux/_core/types";

type TipCardParams = {
  id: string;
  title?: string;
  description?: string;
  icon?: ImageType;
  cardStyle?: StyleProp<ViewStyle>;
};

export const TipCard = ({ id, title, description, icon, cardStyle }: TipCardParams) => {
  return (
    <Box key={id} style={[styles.card, cardStyle]}>
      {!icon ? null : (
        <Image source={icon} suppressLoadingUi={true} width={Style.adjust(48)} height={Style.adjust(48)} />
      )}
      <Box style={styles.textWrapper} testID={id}>
        {!title ? null : <TextTemplate type="l1b">{title}</TextTemplate>}
        {!description ? null : <TextTemplate type="l1">{description}</TextTemplate>}
      </Box>
    </Box>
  );
};

export const TipCardItem = ({ item }: { item: TipCardParams }) => <TipCard {...item} />;

export const TipCardSeparator = () => <Box style={styles.separator} />;

export { styles as tipCardStyles, TIP_CARD_WIDTH } from "./tip-card.styles";
