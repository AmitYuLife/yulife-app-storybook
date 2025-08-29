import { Box, Image, TextTemplate } from "@atoms";
import { memo } from "react";
import { BoxOption } from "@molecules";
import { Style, StyleSheet } from "@styles";

interface IProps {
  title: string;
  description: string;
  onPress: () => void;
  icon: string;
}

const CouponListItem = ({ title, description, onPress, icon }: IProps) => (
  <BoxOption
    onPress={onPress}
    isSelected={false}
    innerWrapperStyle={styles.innerWrapperStyle}
    wrapperStyle={styles.wrapperStyle}
    innerHeight={Style.adjust(80)}
  >
    <Box flexDirection="row" alignItems="center" gap={10}>
      <Image source={{ uri: icon }} width={Style.adjust(50)} height={Style.adjust(46)} />
      <Box>
        <TextTemplate type="l1b">{title}</TextTemplate>
        <Box mt={5}>
          <TextTemplate type="l1">{description}</TextTemplate>
        </Box>
      </Box>
    </Box>
  </BoxOption>
);

const styles = StyleSheet.create({
  wrapperStyle: {
    marginBottom: Style.adjust(16),
  },
  innerWrapperStyle: {
    padding: Style.adjust(16),
    justifyContent: "center",
    marginBottom: Style.adjust(16),
  },
});

export default memo(CouponListItem);
