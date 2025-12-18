import { Box, RawImage } from "@atoms";
import { IBoxProps } from "@atoms/box/box.types";
import { Markdown } from "@components/molecules";
import { Colours, StyleSheet, templateTextMarkdownStyles } from "@styles";

interface IPathwaysReflectionRewardProps extends IBoxProps {
  yucoinAmount: string;
}

export const PathwaysReflectionReward = ({ yucoinAmount, ...props }: IPathwaysReflectionRewardProps) => {
  return (
    <Box gap={5} flexDirection="row" alignItems="center" justifyContent="center" {...props}>
      <Markdown markdownStyles={markdownStyles} text={yucoinAmount} />
      <RawImage source={require("@assets/icons/yucoin.png")} w={15} h={15} contentFit="contain" />
    </Box>
  );
};

const markdownStyles = StyleSheet.create({
  paragraph: {
    paddingVertical: 0,
  },
  text: {
    ...templateTextMarkdownStyles.l1,
    color: Colours.neutral.white,
  },
});
