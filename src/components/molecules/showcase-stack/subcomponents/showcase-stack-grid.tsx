import { Box } from "@atoms";
import { IBoxProps } from "@atoms/box/box.types";
import { ReactNode, memo, useMemo } from "react";
import { FadeInUp } from "react-native-reanimated";

interface IShowcaseStackGridProps extends IBoxProps {
  children: ReactNode[] | ReactNode;
  itemProps?: IBoxProps;
}

const GAP = 60;
const ENTER_DELAY = 150;
const ENTER_TIME = 400;
const ShowcaseStackGrid = ({
  children,
  itemProps,
  gap = GAP,
  ...props
}: IShowcaseStackGridProps & { gap?: number }) => {
  const childrenArray = useMemo(() => (Array.isArray(children) ? children : [children]).filter(Boolean), [children]);

  if (childrenArray.length === 1) {
    return (
      <Box flexDirection="row" center={true} flexWrap="wrap" w="100%" alignItems="center" {...props}>
        <Box
          key={0}
          pb={GAP}
          w={"100%"}
          center={true}
          entering={FadeInUp.delay(0 * ENTER_DELAY).duration(ENTER_TIME)}
          {...itemProps}
        >
          {childrenArray[0]}
        </Box>
      </Box>
    );
  }

  const [, , , , floatingItem] = childrenArray;

  return (
    <>
      <Box flexDirection="row" center={true} flexWrap="wrap" w="100%" {...props}>
        {childrenArray.slice(0, 4).map((child, index) => (
          <Box
            pb={GAP}
            w={"50%"}
            key={index}
            center={true}
            flexDirection="row"
            pr={index % 2 === 0 ? gap / 2 : 0}
            pl={index % 2 !== 0 ? gap / 2 : 0}
            justifyContent={index % 2 === 0 ? "flex-end" : "flex-start"}
            entering={FadeInUp.delay(index * ENTER_DELAY).duration(ENTER_TIME)}
            {...itemProps}
          >
            {child}
          </Box>
        ))}
        {floatingItem ? (
          <Box position="absolute" top={-10} h="100%" w="100%" justifyContent="center" alignItems="center">
            <Box center={true} flexDirection="row" justifyContent="center" alignItems="center">
              {floatingItem}
            </Box>
          </Box>
        ) : null}
      </Box>
    </>
  );
};

export default memo(ShowcaseStackGrid);
