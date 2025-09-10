import React, { memo } from "react";
import { Box, Image } from "@atoms";
import { Button } from "@components/molecules";

interface Props {
  onReflect: () => void;
}

const PathwaysHeader = ({ onReflect }: Props) => {
  return (
    <Box flex={1} height={512} width={"100%"} bg={"red"} pt={100}>
      <Box position="absolute" top={0} height={512} width={"100%"}>
        <Image
          source={require("@assets/pathways/reflection-background.webp")}
          width={"100%"}
          height={512}
          resizeMode="cover"
        />
      </Box>

      <Box position="absolute" bottom={52} alignSelf="center">
        <Button size="Medium" onPress={onReflect} translationKey="screens.pathways.reflect" />
      </Box>
    </Box>
  );
};

export default memo(PathwaysHeader);
