import { Box } from "@atoms";
import { ReactNode, memo, useCallback, useMemo } from "react";
import { FadeInUp } from "react-native-reanimated";

interface IShowcaseRowProps {
  children: ReactNode[];
}

const ENTER_DELAY = 150;
const ENTER_TIME = 400;

const ShowcaseStackRow = ({ children }: IShowcaseRowProps) => {
  const isFull = children.length >= 3;
  const floatingItems = useMemo(
    () => (isFull ? children.filter((_, index) => index % 3 === 1) : []),
    [children, isFull]
  );

  const renderItem = (child: ReactNode, index: number) => {
    if (!isFull) {
      return (
        <Box key={index} entering={FadeInUp.delay(index * ENTER_DELAY).duration(ENTER_TIME)}>
          {child}
        </Box>
      );
    }

    if (index % 3 === 1) {
      return <Box key={index} flex={1} justifyContent="center" alignItems="center" mx={"-20%"} />;
    }

    return (
      <Box
        key={index}
        flex={1}
        justifyContent="center"
        alignItems="center"
        entering={FadeInUp.delay(index * ENTER_DELAY).duration(ENTER_TIME)}
      >
        {child}
      </Box>
    );
  };

  const renderFloatingItem = useCallback((child: ReactNode, index: number) => {
    return (
      <Box
        flexDirection="row"
        justifyContent="center"
        key={index}
        entering={FadeInUp.delay(ENTER_DELAY).duration(ENTER_TIME)}
      >
        <Box
          mt={-20}
          h={"100%"}
          key={index}
          flex={1 / 3}
          alignItems="center"
          flexDirection="row"
          justifyContent="center"
        >
          {child}
        </Box>
      </Box>
    );
  }, []);

  return (
    <>
      <Box>
        <Box flexDirection="row" flex={1} gap={isFull ? 0 : 20} justifyContent="center" alignItems="center">
          {children.map(renderItem)}
        </Box>
        {isFull ? (
          <Box position="absolute" w="100%">
            {floatingItems.map(renderFloatingItem)}
          </Box>
        ) : null}
      </Box>
    </>
  );
};

export default memo(ShowcaseStackRow);
