import { Box, RawImage, TextTemplate } from "@atoms";
import { IBoxProps } from "@atoms/box/box.types";
import { ArrowIcon } from "@atoms/icon/arrow";
import { REWARD_STORE_TEASER } from "@ids";
import { Style, StyleSheet } from "@styles";

interface IRewardPassRewardLabelProps extends IBoxProps {
  label: string;
  iconUrl: string;
}

export const RewardPassRewardLabel = ({ label, iconUrl, ...props }: IRewardPassRewardLabelProps) => {
  return (
    <Box flexDirection="row" gap={4} alignItems="center" {...props}>
      <Box bg="white" br={100} p={5} mr={4}>
        <RawImage source={iconUrl} style={styles.icon} />
      </Box>

      <TextTemplate type="l1b" color="white" testID={REWARD_STORE_TEASER(label)}>
        {label}
      </TextTemplate>

      <ArrowIcon color="white" size={20} />
    </Box>
  );
};

const styles = StyleSheet.create({
  icon: {
    width: Style.adjust(14),
    height: Style.adjust(14),
  },
});
