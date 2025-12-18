import { Box, TextTemplate } from "@atoms";
import { Colours, templateTextMarkdownStyles } from "@styles";
import { memo, ReactNode } from "react";
import Markdown from "../markdown/markdown";
import { Button } from "../button";

type Props = {
  image?: ReactNode;
  title?: string;
  description?: string;
  buttonPress: () => void;
  buttonTranslationKey: string;
  testID?: string;
};

const Card = ({ image, title, description, buttonPress, buttonTranslationKey, testID }: Props) => (
  <Box w="100%" testID={testID}>
    <Box
      pt={55}
      ph={16}
      pb={16}
      bg={Colours.neutral.white}
      br={8}
      borderWidth={1}
      borderColor={Colours.metallic.m100}
      mt={image ? 26 : 0}
    >
      {title ? (
        <TextTemplate type="h3" textAlign="center">
          {title}
        </TextTemplate>
      ) : null}
      {description ? (
        <Box mt={4}>
          <Markdown markdownStyles={markdownStyles} text={description} />
        </Box>
      ) : null}
      {buttonPress && buttonTranslationKey ? (
        <Box mt={16}>
          <Button size="Fill" onPress={buttonPress} translationKey={buttonTranslationKey} />
        </Box>
      ) : null}
    </Box>
    <Box position="absolute" top={0} left={0} right={0} justifyContent="center" alignItems="center">
      {image}
    </Box>
  </Box>
);

export default memo(Card);

const markdownStyles = {
  text: {
    ...templateTextMarkdownStyles.b2,
    textAlign: "center",
  },
};
