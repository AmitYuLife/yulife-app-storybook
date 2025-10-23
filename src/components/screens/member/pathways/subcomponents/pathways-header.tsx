import { memo } from "react";
import { Box, Image } from "@atoms";
import { Button } from "@components/molecules";
import { Style } from "@styles";

interface Props {
  onReflect: () => void;

  // TODO - re-instate progress UI in later pathways release
  reflectionProgress: number;
  reflectedToday: boolean;
}

const PathwaysHeader = ({ onReflect }: Props) => {
  return (
    <Box flex={1} height={512} width={"100%"} pt={100}>
      <Box position="absolute" top={0} height={512} width={"100%"}>
        <Image
          source={require("@assets/pathways/reflection-background.webp")}
          width={"100%"}
          height={Style.adjust(512)}
          resizeMode="cover"
        />
      </Box>

      <Box position="absolute" bottom={52} alignSelf="center">
        <Button size="Medium" onPress={onReflect} translationKey="screens.pathways.reflect" />
      </Box>
      {/* <Box width={"100%"} px={16}>
        <PathwaysReflectProgress progress={reflectionProgress} completedToday={reflectedToday} />
      </Box> */}
    </Box>
  );
};

export default memo(PathwaysHeader);
